import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pagina',
    component: PaginaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
