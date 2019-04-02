import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private product: ProductInterface = {};


  ngOnInit() {
    const idProduct = this.route.snapshot.params['id'];
    this.detailsProduct(idProduct);
  }

  detailsProduct(idproduct: string): void {
    this.dataApi.getOneProduct(idproduct).subscribe( product => {
      this.product = product;
      console.log('detalles de la cuestion', product );
    });
  }

}
