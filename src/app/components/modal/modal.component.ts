import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('toClose') toClose: ElementRef; 
  @Input() userID: string;

  ngOnInit() {
  }

  saveProduct(productForm: NgForm): void {
    if (productForm.value.id == null) {
    console.log('QUE RAYOS PASA', productForm.value.id)
      productForm.value.userUid = this.userID;
      this.dataApi.addPoduct(productForm.value);
    } else {
      this.dataApi.updateProduct( productForm.value);
    }
    productForm.resetForm();
    this.toClose.nativeElement.click();
  }
}
