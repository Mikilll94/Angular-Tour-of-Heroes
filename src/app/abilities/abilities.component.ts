import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Ability } from "../_models/ability";
import { AbilityService } from "../_services/ability.service";

@Component({
  selector: 'abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
})
export class AbilitiesComponent implements OnInit {

  title = 'Hero abilities';
  abilities = [];
  selectedAbility: Ability;

  ngOnInit(): void {
    this.getAbilities();
  }

  constructor(private abilityService: AbilityService,
    private router: Router) { }

  onSelect(ability: Ability): void {
    this.selectedAbility = ability;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.abilityService.create(name)
      .then(ability => {
        this.abilities.push(ability);
        this.selectedAbility = null;
      });
  }

  getAbilities(): void {
    this.abilityService.getAbilities()
      .then(abilities => this.abilities = abilities);
  }

  delete(hero: Ability): void {
    this.abilityService
      .delete(hero.id)
      .then(() => {
        this.abilities = this.abilities.filter(h => h !== hero);
        if (this.selectedAbility === hero) {
          this.selectedAbility = null;
        }
      });
  }
}