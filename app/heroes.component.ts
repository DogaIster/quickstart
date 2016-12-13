import { Component } from '@angular/core';

import {Hero} from './hero';
import { HeroService } from './hero.service';
import {HEROES} from "./mock-heroes";
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" 
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  providers: []
})
export class HeroesComponent implements OnInit {
  ngOnInit() : void {
    this.getHeroes();
  }
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}






