import { Component, OnInit } from '@angular/core';
import { Context } from '../../../core/models/context';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

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
