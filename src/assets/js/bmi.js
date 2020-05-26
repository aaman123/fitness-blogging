var LSAPP = LSAPP || {};

LSAPP.BMI = (function() {

	var $height_inches_input = $(".js-input--height_inches"),
		$gender        = $("#gender"),
		$age           = $("#age");

	var error = {};
	/**
	 * Updates units + labels + values when switched between metric and imperial
	 * Default - imperial is selected
	 */
		var bind_unit_change = function () {
			$("input[name='units']").on('change', function (e) {

				var $height        = $("#height"),
					$height_inches = $("#height_inches"),
					$height_label = $(".js-measure_unit--height_feet"),
					$height_inches_label = $(".js-measure_unit--height_inch"),
					$weight        = $("#weight"),
					$weight_label = $(".js-measure_unit--weight_lbs"),
					selected_unit = $("input[name='units']:checked").val();

				//If Metric is selected
				if (selected_unit == "kilograms") {
					$height_label.html("cm");
					$weight_label.html("kg");
					$height_inches.hide();
					$height_inches_input.hide();
					$height_inches_label.hide();

					//Converts Feet & inches to cms
					if($height.val() !== "") {
						var height_in_inches = ($height.val() * 12) + ($height_inches.val() * 1);
						var height_in_cms = getCentimeters(height_in_inches);
						$height.val(height_in_cms);
					}
					//Converts Pounds to kgs
					if($weight.val() !== "") {
						var weight_in_kgs = getKilograms($weight.val()).toFixed(2);
						$weight.val(weight_in_kgs);
					}

				}
				//If Switched back to Imperial
				else {
					$height_label.html("ft");
					$weight_label.html("lb");
					$height_inches_input.show();
					$height_inches.show();

					//Converts cms to feet and inches
					if($height.val() !== "") {
						var feet_inches = getFeetInches($height.val());
						$height.val(feet_inches['feet']);
						$height_inches.val(feet_inches['inches']);
						$height_inches_label.show();
					}
					//Converts kgs to pounds
					if($weight.val() !== "") {
						var weight_in_lbs = getPounds($weight.val()).toFixed(2);
						$weight.val(weight_in_lbs);
					}
				}
			});
		};

	var bind_form_update = function () {
		$(document).on('focus','.js-animation_input__field', function() {
			var error_class = ".js-error--" + $(this).attr('id');
			$(error_class).html("");
			$(this).parent().removeClass('error_box');
		});
	};

	//Not currently used but would be used for Body fat
	var bind_popup_display = function () {
		$(".more_info_box__link").on('click', function(e) {
			$(".more_info_overlay").show();
			$(".more_info_popup").show();
		});

		$(".more_info_popup__close, .more_info_overlay").on('click', function(e) {
			$(".more_info_overlay").hide();
			$(".more_info_popup").hide();
		});

	};

	var bind_bmi_form_submit = function () {
		$("#bmi_calculator").submit(function (e) {
			e.preventDefault();
			get_result();
		});
	};

	var get_result = function () {
		var values = {};
		$.each($('#bmi_calculator').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$.ajax({
			url: '/service/Tools/Bmi/',
			type: "GET",
			data: values,
			async: false,
			success: function (data) {
				if(data['status'] == 'error') {
					show_error(data);
					return true;
				}
				else if(data['status'] == 'success') {

					show_classification(data);
					show_related_content(data);

					$(".tools_result").fadeIn(700, function() {

						var custom_offset = 75;

						if(LSAPP.is_mobile === true) {
							$("#module_article_list").show();
							custom_offset = 350; // Ad needs to be on top
						}

						$('body').animate({
							scrollTop: ($(".tools_result").offset().top - custom_offset)
						}, 700);
					});

					bind_calorie_calculate();
				}
			}
		});
	};

	var show_classification = function(data) {

		if( !!data['classification'] ) {
			var classified_array = $.map(data['classification'], function (val, i) {
				return [i, val];
			});
			data['classification'] = classified_array;
		}

		var classify_html = $.template('templateBmiClassification', data);
		$('.js-tools_result').html(classify_html);
		$(".js-measure_unit--weight_lbs").html($(".js-measure_unit--weight_lbs:eq(0)").html());

		if(data['selected'] >= 0) {
			$($('.js-classify_cell')[data['selected']]).addClass('classify_cell--selected');
		}

		if($("#gender").val() == 'female')
		{
			$(".only_women").show();
		}

		if(LSAPP.is_mobile === true)
		{
			var paragraph = $(".js-tools_result__detail").html();
			var visible_length = paragraph.length;

			for(var i = $(".js-tools_result__detail p").length -1 ; i >= 0 ; i-- ) {

				var para = $($(".js-tools_result__detail p")[i]);
				var para_length = para.html().length;

				if(visible_length - para_length >= 200) {
					para.hide();
					visible_length = visible_length - para_length;
				}
				else {
					$($(".js-tools_result__detail p")[i]).append( " <a class='js-more_desc more-desc'>more...</a>");
					show_all_desc();
					return false;
				}
			}
		}
	};

	var show_all_desc = function() {
		$('.js-more_desc').on('click', function() {
			$(this).fadeOut(400, function() {
				console.warn("done fading");
				$(".js-tools_result__detail p").fadeIn();
			});
		});
	};

	var show_related_content = function(data) {
		if( !!data['related_content'] ) {
			var related_content_html = '';
			for (var i = 0; i < data.related_content.length; i++) {
				data.related_content[i]['count'] = i + 1;
				if (LSAPP.is_mobile != true) {
					switch (i) {
						case 0:
							data.related_content[i]['class_name'] = "content_card--left";
							break;
						case 1:
							data.related_content[i]['class_name'] = "content_card--center";
							break;
						case 2:
							data.related_content[i]['class_name'] = "content_card--right";
							break;
					}
				}
				related_content_html += $.template('templateRelatedArticles', data.related_content[i]);
			}

			$('.js-currently_trending').html(related_content_html);
			$('.editor_pick').fadeIn();
		}
	};

	var show_error = function (error) {
		$.each(error, function (index, err) {
			var $parent = $("#" + index).parent('.animation_input');
			$parent.addClass("error_box");
			$('.js-error--' + index).html(err);
		});
	};

	var bind_calorie_calculate = function() {
		$(document).on('submit', '#calorie_calculate', function (e) {

			e.preventDefault();
			var values = {};

			$.each($('#bmi_calculator').serializeArray(), function(i, field) {
				values[field.name] = field.value;
			});

			$.each($('#calorie_calculate').serializeArray(), function(i, field) {
				values[field.name] = field.value;
			});

			$.ajax({
				url: '/service/Tools/Bmi/',
				type: "POST",
				data: values,
				async: false,
				success: function (data) {
					if (data['status'] == 'error') {
						show_error(data);
						return true;
					}
					else {
						window.location.href = data['register_url'];
					}
				}
			});
		});
	};

	var bind_goal_update = function() {
		$('.js-calorie_card').on('click', function() {
			var $selected_goal = $('.calorie_card--selected');
			if( !$(this).hasClass('calorie_card--selected') )
			{
				var calories = $(this).attr('data-calories');
				var goal =  $(this).attr('data-goal');
				$selected_goal.removeClass('calorie_card--selected');
				$(this).addClass('calorie_card--selected');
				$('.js-selected_calorie').html(calories);
				$('.js-input--selected_calorie').val(calories);
				$('.js-input--goal_per_week').val(goal);
			}
		});

	};

	return {
		init: function() {
			bind_unit_change();
			bind_form_update();
			bind_popup_display();
			bind_bmi_form_submit();
			bind_goal_update();
		}
	}
})();

$(LSAPP.BMI.init);