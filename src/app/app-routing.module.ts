import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductoComponent } from './views/producto/producto.component';

const routes: Routes = [
  { path: 'producto',
    component: ProductoComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',
    redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
