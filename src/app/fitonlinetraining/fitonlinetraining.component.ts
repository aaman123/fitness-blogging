import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-fitonlinetraining',
  templateUrl: './fitonlinetraining.component.html',
  styleUrls: ['./fitonlinetraining.component.css']
})
export class FitonlinetrainingComponent implements OnInit {

  constructor(private wowService: NgwWowService) { 
    this.wowService.init();
  }

  ngOnInit() {  }
}
