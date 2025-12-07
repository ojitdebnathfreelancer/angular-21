import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCode: boolean = false;
  isSuccess = signal<boolean>(false);
  studentMarks: number = 0;
  offerList: string[] = [
    '20% Off for baksh pay',
    '20% Off for nagod pay',
    '20% Off for visa card pay',
  ];
  employeeList = [
    { name: 'aaa', city: 'Dhaka', isActive: false },
    { name: 'bbb', city: 'Sylhet', isActive: true },
    { name: 'ccc', city: 'Dinajpure', isActive: false },
    { name: 'ddd', city: 'Chittagonj', isActive: true },
  ];

  masterSrv = inject(Master);

  constructor() {
    const result = this.masterSrv.addTowNum(12, 15);
  }

  toggle() {
    this.isSuccess.update((prv) => !prv);
  }
}
