import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) {}
  public product: ProductInterface = {};

  ngOnInit() {
    const idProduct = this.route.snapshot.params["id"];
    this.dataApi.getOneProduct(idProduct).subscribe( product =>{
      console.log("Detallesproduct", product);
    });
  }

}
