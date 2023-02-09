import { Component, OnInit } from '@angular/core';
import { Context } from '../../../core/models/context';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  context: Context;

  constructor() {
    this.context = {
      header : "hi",
    text : "hi"
    }
   }

  ngOnInit(): void {
  }

}
