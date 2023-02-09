import { Component, OnInit } from '@angular/core';
import { Context } from '../../../core/models/context';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

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
