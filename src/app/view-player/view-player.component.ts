import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../service/player.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {

  player: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  id = 0;

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = paramMap.get('id');
      console.log(this.id);
      this.getById(this.id);
    });
  }
  // tslint:disable-next-line:typedef
  getById(id: number) {
    console.log(id);
    this.playerService.getById(id).subscribe(player => {
      this.player.patchValue(player);
    });
  }

}
