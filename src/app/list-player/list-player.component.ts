import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/player.service';
import {Player} from '../model/player';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAll().subscribe(result => {
        this.players = result;
        console.log(result);
      }, error => {
        console.log(error);
      }
    );
  }

}
