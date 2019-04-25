import { Component, OnInit } from '@angular/core';
import {Student} from '../studentDetails';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {
  array: Student;
  title: Student;
  data: Student[];
  private i: number;

  send (st: Student) {
    this.array = st;
  }

  passValue = (val) => {
    this.title = val;
    for (this.i = 0; this.i < this.data.length; this.i++) {
      if (this.data[this.i] == val) {
        this.data.splice(this.i, 1);
      }
    }
  }

  constructor(private fromservice: MyserviceService) { }

  ngOnInit() {
    this.fromservice.getdata().subscribe(da => this.data = da);
  }

}
