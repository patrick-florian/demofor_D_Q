import { Component, OnInit } from '@angular/core';
import { NursesService } from '../folder_services/nurses.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent implements OnInit {

  nurses: any[];

  constructor(private service: NursesService ) { }

  ngOnInit() {

    this.service.getNurses()
    .subscribe(

      response => {
        this.nurses = response.json();
      },

      error => {
        if (error.status === 404) {
          alert('This post requires elevated privelleges');
        } else {
          alert('An Unexpected error occurred');
          console.log(error);
        }
      }

    );

  }

  updateNurse(nurse) {
    // console.log(nurse);

    // this.http.patch( this.url, JSON.stringify({ isRead: true }) )
    // this.http.put( this.url, JSON.stringify(post) )

    this.service.updateNurses(nurse)
    .subscribe(response => {

      console.log(response.json());
    });

  }

  deleteNurse(nurse) {

    this.service.deleteNurses(nurse)
    .subscribe(response => {
      console.log('WARNING CUSTOM HARDCODED ERROR: NO DELETE METHOD FOR USERS SEE: https://jsonplaceholder.typicode.com/');
      let index = this.nurses.indexOf(nurse);
      this.nurses.splice(index, 1);
    });

  }

  postNurse(input: HTMLInputElement) {

    // NOTE DID NOT HAVE A CHANCE TO COMPLETE THIS
    this.nurses.splice(0, 0, { id: this.nurses[this.nurses.length - 1].id + 1, name: 'not set', username: 'not set', email: 'not set' });

  }


}
