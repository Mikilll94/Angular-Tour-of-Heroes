import { Injectable } from '@angular/core';
import { HEROES } from '../_mock.data/mock.heroes';
import { Hero } from "../_models/hero";

@Injectable()
export class HeroService {

  constructor() { }
  
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
