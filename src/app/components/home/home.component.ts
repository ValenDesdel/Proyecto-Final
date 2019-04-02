import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class HomeComponent implements OnInit {
  

  constructor( private dataApi: DataApiService ) { }

  public products = [];
  public product = '';
  ngOnInit() {
    this.dataApi.getProducts().subscribe( products => {
      console.log('ESTOS-PRODUCTOS', products );
      this.products = products;
    })
  }

}
