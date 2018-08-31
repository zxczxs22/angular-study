import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  public selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe( heros => {
        this.heroes = heros;
      });
  }
}
