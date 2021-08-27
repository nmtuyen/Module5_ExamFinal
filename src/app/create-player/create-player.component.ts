import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../service/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });

  constructor(private playerService: PlayerService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const player = this.playerForm.value;
    this.playerService.createNew(player).subscribe(() => {
      this.playerForm.reset();
      alert('Đã thêm thành công');
      this.router.navigate(['/players/list']);
    });
  }

}
