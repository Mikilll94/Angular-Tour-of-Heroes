import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from "@angular/router";

import { Ability } from "../_models/ability";
import { AbilityService } from "../_services/ability.service";
import { AbilitiesComponent } from "../abilities/abilities.component";

@Component({
  selector: 'hero-abilities',
  templateUrl: './hero-abilities.component.html',
  styleUrls: ['./hero-abilities.component.css'],
})
export class HeroAbilitiesComponent extends AbilitiesComponent {
  free_abilities: Ability[];
  selectedFreeAbility: Ability;

ngOnInit() {
  this.getFreeAbilities();
  console.log("FREE ABILITIES", this.free_abilities);
}

  getFreeAbilities() {
    this.abilityService.getAbilities()
      .then(abilities => this.free_abilities = 
        abilities.filter(ability => ability.heroId == null));
  }
}