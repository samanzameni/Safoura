import { Component, OnInit } from '@angular/core';
import { Context } from '../../../core/models/context';

@Component({
  selector: 'app-reach-me',
  templateUrl: './reach-me.component.html',
  styleUrls: ['./reach-me.component.scss']
})
export class ReachMeComponent implements OnInit {

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
