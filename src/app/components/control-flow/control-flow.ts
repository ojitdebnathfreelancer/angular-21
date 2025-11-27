import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  toggle() {
    this.isSuccess.update((prv) => !prv);
  }
}
