import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectDbService} from '../connect-db.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient,
              private connectDbService: ConnectDbService ) {
  }

  totalArray: Object;


  ngOnInit(): void {

     this.connectDbService.getData().then(
       data => {this.totalArray = data;}
     ).catch(
       error =>{console.log("you have status "+ error.status);}
     );

     /*
     this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe({
      next: data=> {console.log(this.totalArray = data);},
      error: error=>{console.log(error);}
      }

      */

  }

  getColor(city,textContent) {
    if (city === 1)
      return 'yellow';
    if (city === 2)
      return 'green';
    if (textContent === 'autem hic labore sunt dolores incidunt')
      return 'red';
  }

}
