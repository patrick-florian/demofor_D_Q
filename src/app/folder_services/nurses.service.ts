import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NursesService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getNurses() {
    return this.http.get(this.url);
  }

  updateNurses(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));
  }

  deleteNurses(post) {
    return this.http.delete(this.url + '/' + post.id);
  }

  postNurses(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

}
