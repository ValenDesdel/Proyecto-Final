import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private header: HeaderComponent) { }

  private products: ProductInterface[];
  public product = [];
  public num="";

  

  ngOnInit() {
    this.num = this.header.getNum(this.header.num);
    this.Deparments(this.num);
    console.log('OFERTAS', this.products);
    
  }

  Deparments(num2: string) {
    this.dataApi.getdepartmen(num2).subscribe(departments => this.products = departments);
  }

  
}
