import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimeService } from './anime.service';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';



@NgModule({
  declarations: [
    AnimeListComponent,
    AnimeDetailComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    AnimeService
  ]
})
export class AnimeModule { }
