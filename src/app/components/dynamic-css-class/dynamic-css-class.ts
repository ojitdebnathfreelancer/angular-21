import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  myClassName: string = 'bg-orange-400';
  isActive: boolean = false;
  productPrice = 600;
  divBackColor: string = '';
  bgTeal: string = 'bg-teal-600';
}
