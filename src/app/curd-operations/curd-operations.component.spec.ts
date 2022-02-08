import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdOperationsComponent } from './curd-operations.component';

describe('CurdOperationsComponent', () => {
  let component: CurdOperationsComponent;
  let fixture: ComponentFixture<CurdOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
