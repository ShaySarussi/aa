import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectDbService implements OnInit{

  constructor(private http: HttpClient) { }

  getData():Promise<Object>{
    return this.http.get('http://jsonplaceholder.typicode.com/posts').toPromise()
  }

  ngOnInit(): void {
  }
}
