import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  model = {
    title: 'esa'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
