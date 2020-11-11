import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableService implements OnInit{

  constructor(private http: HttpClient) { }

  getData():Promise<Object>{
    return this.http.get('https://bi.syncfusion.com/northwindservice/api/orders').toPromise()
  }

  ngOnInit(): void {
  }
}
