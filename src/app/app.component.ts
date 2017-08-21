import { Component } from '@angular/core';
import { HeroService } from "./_services/hero.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})
export class AppComponent {
    title = 'Tour of Heroes';
}