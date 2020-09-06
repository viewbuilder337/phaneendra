import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStufComponent } from './css-stuf.component';

describe('CssStufComponent', () => {
  let component: CssStufComponent;
  let fixture: ComponentFixture<CssStufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssStufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssStufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
