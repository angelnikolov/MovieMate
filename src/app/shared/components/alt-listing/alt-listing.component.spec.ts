/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AltListingComponent } from './alt-listing.component';

describe('AltListingComponent', () => {
  let component: AltListingComponent;
  let fixture: ComponentFixture<AltListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
