import { Component } from '@angular/core';

import { HeroService } from "./_services/hero.service";
import { AbilityService } from "./_services/ability.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService, AbilityService]
})
export class AppComponent {
    title = 'Tour of Heroes';
}