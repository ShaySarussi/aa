import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableService} from '../table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient,
              private tableService: TableService ) {
  }

  detailsOfOrder;
  titleOfOrder;


  ngOnInit(): void {

     this.tableService.getData().then(
       data => {
         // @ts-ignore
         this.detailsOfOrder = data.Items;
         const obj = this.detailsOfOrder[0];
         this.titleOfOrder = Object.keys(obj);
       }
     ).catch(
       error =>{console.log("you have status "+ error.status);}
     );
  }

  private getColor (countryName: string,cityName: string) : string {
    if (countryName === 'France')
      return 'red';
    if (countryName === 'Germany')
      return 'green';
    if (cityName === 'Rio de Janeiro')
      return 'yellow';
  }

}
