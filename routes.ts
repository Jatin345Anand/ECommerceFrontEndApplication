import {Routes} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'search',component:FilterComponent},
  {path:'cart',component:ProductPageComponent},
  {path:'productlpage1',component:ProductPageComponent},
  {path:'productmpage1',component:ProductPageComponent}

];