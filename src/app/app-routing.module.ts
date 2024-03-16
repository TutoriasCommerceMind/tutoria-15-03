import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaMainPageComponent } from './clima/clima-main-page/clima-main-page.component';
import { ClimaBuscadorComponent } from './clima/clima-buscador/clima-buscador.component';
import { ClimaBuscadorReactiveComponent } from './clima/clima-buscador-reactive/clima-buscador-reactive.component';

const routes: Routes = [
  {
    path: 'ciudad/:ciudad',
    component: ClimaMainPageComponent,
  },
  {
    path: '',
    component: ClimaBuscadorComponent,
  },
  {
    path: 'reactive',
    component: ClimaBuscadorReactiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
