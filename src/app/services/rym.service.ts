import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Rym, RymRes } from '../models/rym.interface';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  constructor(private http: HttpClient) { }

  getRym() : Observable<Rym[]> {
    return this.http.get<RymRes>('https://rickandmortyapi.com/api/character').pipe(map(res => res.results))
  }
}
