import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionPage } from './reaction.page';

describe('ReactionPage', () => {
  let component: ReactionPage;
  let fixture: ComponentFixture<ReactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
