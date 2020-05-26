/**
 * TODO: copied over calorie cal js
 */

$(function() {

	/* START: Logic for dropdown */
	$('.js-dropdown').on('click', function() {
		$(this).prev(".error").html("");
		$(this).removeClass('error_box');

		$(this).removeClass("animation_input--error");
		$(this).addClass("animation_input--filled");
		$(this).find('.js-dropdown__field').show();
		return false;
	});
	$('.js-dropdown__item').on('click', function() {
		$(this).parent().parent().addClass("dropdown--filled");
		$(this).parent().parent().find('.js-dropdown--selected_item').html($(this).html()).show();
		$(this).parent().parent().find('.js-dropdown__input').val($(this).data('field-value').toString());
		$(this).parent().hide();
		return false;
	});

	$(document).on('click', function() {
		if($('.js-dropdown').hasClass('animation_input--filled') == true
			&& $('.js-dropdown').hasClass('animation_input--error') == true) {
			return false;
		}
		if($('.js-dropdown').hasClass('dropdown--filled') == false) {
			$('.js-dropdown').removeClass("animation_input--filled");
		}
		$('.js-dropdown__field').hide();
	});
	/* END: Logic for dropdown */

	/* START: Logic for regular input */
	$('.js-input--height_inches').on('focus', function() {
		if($('.js-input--height_feet').val() == '')
		{
			$('.js-input--height_inches').blur();
			$('.js-input--height_feet').focus();

		}
	});

	if(LSAPP.is_mobile == true) {
		$('.js-input--height_feet').on('keypress', function () {
			setTimeout(function () {
				if ($('.js-input--height_feet').val() > 0) {
					$('.js-input--height_inches').focus();
				}
			}, 200);
		});
	}

	$(document).on('focus', '.js-animation_input__field', function() {
		$(this).parent().addClass("animation_input--filled");
		$(this).parent().removeClass("animation_input--error");
		if ($(this).hasClass('js-input--height_feet') || $(this).hasClass('js-input--height_inches'))
		{
			$('.js-measure_unit--height_feet').show();
			if($("input[name='units']:checked").val() == "pounds")
			{
				$('.js-measure_unit--height_inch').show();
			}
		}
		else if ($(this).hasClass('js-input--weight_lbs'))
		{
			$(this).siblings('.js-measure_unit--weight_lbs').show();
		}
	});

	$(document).on('blur', '.js-animation_input__field', function() {
		if ($(this).hasClass('js-input--height_feet') || $(this).hasClass('js-input--height_inches'))
		{
			if ($('.js-input--height_feet').val() == ''
				&& $('.js-input--height_inches').val() == '')
			{
				$(this).parent().removeClass("animation_input--filled");
				$('.js-measure_unit--height_feet').hide();
				$('.js-measure_unit--height_inch').hide();
			}
		}
		else {
			if ($(this).val() == '') {
				$(this).parent().removeClass("animation_input--filled");

				if ($(this).hasClass('js-input--weight_lbs')) {
					$(this).siblings('.js-measure_unit--weight_lbs').hide();
				}
			}
		}
	});

	/* END: Logic for regular input */
});
