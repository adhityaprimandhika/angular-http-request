import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent {
  anime$: Observable<Anime>;
  constructor (
    private router: ActivatedRoute,
    private service : AnimeService
    ) {
    const id: number = this.router.snapshot.params["id"];
    this.anime$ = this.service.getAnimeDetail(id)
  }
}
