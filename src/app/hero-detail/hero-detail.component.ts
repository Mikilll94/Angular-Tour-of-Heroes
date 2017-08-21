import { Component, OnInit } from '@angular/core';
import { Hero } from '../_models/hero';
import { HeroService } from '../_services/hero.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  goBack(): void {
    this.location.back();
  }
}
