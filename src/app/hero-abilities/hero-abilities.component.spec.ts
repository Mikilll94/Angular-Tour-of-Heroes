import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAbilitiesComponent } from './hero-abilities.component';

describe('HeroAbilitiesComponent', () => {
  let component: HeroAbilitiesComponent;
  let fixture: ComponentFixture<HeroAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
