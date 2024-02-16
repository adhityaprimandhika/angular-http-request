import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: "anime",
    loadChildren: () => import("./anime/anime.module").then(m => m.AnimeModule),
    canActivate: [authGuard]
  },
  {
    path: "manga",
    loadChildren: () => import("./manga/manga.module").then(m => m.MangaModule)
  },
  {
    path: "login",
    component: LoginComponent
  }
];
