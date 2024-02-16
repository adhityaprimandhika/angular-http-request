import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaListComponent } from './manga-list/manga-list.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [MangaListComponent],
  imports: [
    CommonModule, RoutingModule
  ]
})
export class MangaModule { }
