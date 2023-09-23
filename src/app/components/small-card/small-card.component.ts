import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photocover: string =""
  @Input()
  cardtitle: string =""
  @Input()
  cardDescription: string =""
  @Input()
  Id:string ="0"

}
