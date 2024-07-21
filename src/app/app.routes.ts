import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductComponent
  }
];
