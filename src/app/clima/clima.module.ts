import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClimaMainPageComponent } from './clima-main-page/clima-main-page.component';
import { RouterModule } from '@angular/router';
import { ClimaBuscadorComponent } from './clima-buscador/clima-buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClimaBuscadorReactiveComponent } from './clima-buscador-reactive/clima-buscador-reactive.component';

@NgModule({
  declarations: [ClimaMainPageComponent, ClimaBuscadorComponent, ClimaBuscadorReactiveComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ClimaMainPageComponent],
})
export class ClimaModule {}
