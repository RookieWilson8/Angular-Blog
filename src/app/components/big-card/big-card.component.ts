import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent  {

  @Input()
  photocover: string =""
  @Input()
  cardtitle: string =""
  @Input()
  cardDescription: string =""
}
