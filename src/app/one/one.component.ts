import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  subTitle: string = 'Forms';

  constructor() { }

  ngOnInit(): void {
  }

}
