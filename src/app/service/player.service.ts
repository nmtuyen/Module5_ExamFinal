import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../model/player';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3001/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(API_URL);
  }
  createNew(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(API_URL, player);
  }

  getById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(API_URL + `/${id}`);
  }

  update(id: number, player: Player): Observable<Player> {
    return this.httpClient.put<Player>(API_URL + `/${id}`, player);
  }
  // tslint:disable-next-line:typedef
  deleteById(id: number) {
    return this.httpClient.delete<Player>(API_URL + `/${id}`);
  }
}
