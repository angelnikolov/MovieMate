import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MovieActionService {

  private movieActionSource = new BehaviorSubject<{ movieId: number, type: string }>(null);
  // Observable string streams
  movieAction$ = this.movieActionSource.asObservable().share();
  // Service message commands
  changeMovie(movieId: number, type: string) {
    this.movieActionSource.next({ movieId: movieId, type: type });
  }
  constructor() { }

}
