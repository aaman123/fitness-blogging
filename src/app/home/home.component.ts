import { Component, OnInit } from '@angular/core';
import { Card } from '../home/card-class';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  card_detail = [
    new Card('abs1.jpg' , 'Best Protein Supplements' , 'What are the best protein supplements available in the market??','/best_protein_supplements'),
    new Card('body.jpg' , 'Bodybuilding: A Beginners Guide' , 'Everything you need to get started with a healthy life','/bodybuilding_beginners_guide'),
    // new Card('arms1.jpg' , 'everything u want to know about diet' , 'chikababu',''),
    // new Card('bhula.jpg' , 'everything u want to know about diet' , 'chikababu',''),
    // new Card('gula.jpg' , 'everything u want to know about diet' , 'chikababu',''),
    // new Card('ola.jpg' , 'everything u want to know about diet' , 'chikababu',''),
  ]

  constructor() { }

  ngOnInit() {
  }

}