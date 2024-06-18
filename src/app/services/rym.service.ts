import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Rym, RymRes } from '../models/rym.interface';

@Injectable({
  providedIn: 'root',
})
export class RymService {
  constructor(private http: HttpClient) {}

  getRym(page: number): Observable<Rym[]> {
    const params = new HttpParams().set('page', page.toString());
    return this.http
      .get<RymRes>('https://rickandmortyapi.com/api/character', { params })
      .pipe(map((res) => res.results));
  }
}
