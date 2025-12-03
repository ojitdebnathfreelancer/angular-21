import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-list',
  imports: [],
  templateUrl: './tab-list.html',
  styleUrl: './tab-list.css',
})
export class TabList {
  @Input() tabList: string[] = [];
  @Output() onTabChange = new EventEmitter<string>();
  onTabSelect(tabName: string) {
    this.onTabChange.emit(tabName);
  }
}
