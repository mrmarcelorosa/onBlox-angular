import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-input-decimal',
  templateUrl: './input-decimal.component.html',
  styleUrls: ['./input-decimal.component.scss']
})
export class InputDecimalComponent implements OnInit {
  email = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
