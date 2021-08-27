import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../service/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  player: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  id = 0;

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = paramMap.get('id');
      this.getPlayerById(this.id);
    });
  }
  // tslint:disable-next-line:typedef
  getPlayerById(id: number) {
    this.playerService.getById(id).subscribe(player => {
      this.player.patchValue(player);
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(id: number) {
    const player1 = this.player.value;
    this.playerService.update(id, player1).subscribe(() => {
      alert('Đã cập nhật thành công');
      this.router.navigate(['/players/list']);
    });
  }

}
