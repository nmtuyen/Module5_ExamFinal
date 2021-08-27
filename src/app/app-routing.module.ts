import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPlayerComponent} from './list-player/list-player.component';
import {CreatePlayerComponent} from './create-player/create-player.component';
import {ViewPlayerComponent} from './view-player/view-player.component';
import {EditPlayerComponent} from './edit-player/edit-player.component';
import {DeletePlayerComponent} from './delete-player/delete-player.component';


const routes: Routes = [
  {
    path: 'players/list',
    component: ListPlayerComponent
  },
  {
    path: 'players/create',
    component: CreatePlayerComponent
  },
  {
    path: 'players/view/:id',
    component: ViewPlayerComponent
  },
  {
    path: 'players/edit/:id',
    component: EditPlayerComponent
  },
  {
    path: 'players/delete/:id',
    component: DeletePlayerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
