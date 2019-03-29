import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from 'src/app/models/product';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  
  private products: ProductInterface[];
  ngOnInit() {
    this.Offers();
    console.log('OFERTAS', this.products);
  }
  
  Offers() {
    this.dataApi.getOffers().subscribe(offer => this.products = offer);
  }

}


