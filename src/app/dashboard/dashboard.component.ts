import { Component, OnInit } from '@angular/core';
import { HeroService } from "../_services/hero.service";
import { Hero } from "../_models/hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes : Hero[];

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0,4));
  }

}
