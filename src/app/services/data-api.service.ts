import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductInterface } from '../models/product';
import { UserInterface } from '../models/user';
import { Observable }from 'rxjs/internal/observable';'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = this.afs.collection<UserInterface>('users');
    this.users = this.usersCollection.valueChanges();
  }

  private productsCollection: AngularFirestoreCollection<ProductInterface>;
  private products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  private product: Observable<ProductInterface>;
  public  chosenPoduct: ProductInterface= { id: null };

  private usersCollection: AngularFirestoreCollection<UserInterface>;
  private users: Observable<UserInterface[]>;

  getAllUsers(){
    return this.users = this.usersCollection.snapshotChanges()
    .pipe( map (change => {
      return change.map( action =>{
        const data = action.payload.doc.data() as UserInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  addUsers(){}
  updateUsers(){}
  deleteUsers(){}

  getProducts(){
    this.productsCollection = this.afs.collection<ProductInterface>('products');
    return this.products = this.productsCollection.snapshotChanges()
    .pipe( map (change => {
      return change.map( action =>{
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getOneProduct(idProduct: string) {
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ProductInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  getOffers() {
    this.productsCollection = this.afs.collection('products', ref => ref.where('offer', '==', '1' ));
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getdepartmen(num: string ) {
    this.productsCollection = this.afs.collection('products', ref => ref.where('departmens', '==', num ));
    
    console.log('POR FINNNNNs')
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ProductInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  addPoduct(product: ProductInterface): void {
    this.productsCollection.add(product);
  }

  updateProduct(product: ProductInterface): void {
    let idProduct = product.id;
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.update(product);
  }

  deleteProduct(idProduct: string): void {
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.delete();
  }

  
}