import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:keydown)': 'getKey($event)'
  }
})
export class AppComponent implements OnInit {

  result: any;

  ngOnInit(): void {
    this.result = 0;
  }

  getKey(event: any) {
    var validation = /[^0-9\,\.\*\+\-]+/g;
    if (event.keyCode === 13) {
      this.calculate();
    }

    if (validation.test(event.key)) {
      event.preventDefault();
    }
  }

  setValue(item: any) {
    if (this.result == 0) {
      this.result = "";
    }

    var number = this.result;
    this.result = number + item;
  }

  clean() {
    this.result = 0;
  }

  calculate() {
    var resp = this.result;

    if (resp) {
      this.result = eval(resp);
    } else {
      this.result = 0;
    }
  }
}
