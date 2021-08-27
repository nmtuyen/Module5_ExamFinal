import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../service/player.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {

  player: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id = 0;

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getBookById(this.id);
    });
  }
  // tslint:disable-next-line:typedef
  getBookById(id: number) {
    console.log(id);
    this.playerService.getById(id).subscribe(player => {
      this.player.patchValue(player);
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(id: number) {
    // @ts-ignore
    console.log(id);
    // const book1 = this.book.value;
    // tslint:disable-next-line:no-shadowed-variable
    this.playerService.deleteById(id).subscribe(() => {
      alert('xóa thành công');
      this.router.navigate(['/players/list']);
    });
  }


}
