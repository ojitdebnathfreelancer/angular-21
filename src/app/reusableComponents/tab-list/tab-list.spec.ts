import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabList } from './tab-list';

describe('TabList', () => {
  let component: TabList;
  let fixture: ComponentFixture<TabList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
