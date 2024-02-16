import { Component } from '@angular/core';
import { Anime } from '../anime';
import { Observable } from 'rxjs';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {
  animes$: Observable<Array<Anime>>;

  constructor(private service: AnimeService) {
    console.log("Anime list is created")
    this.animes$ = this.service.getTopAnimeList()
  }
}
