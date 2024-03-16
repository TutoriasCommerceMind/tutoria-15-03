import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clima-main-page',
  templateUrl: './clima-main-page.component.html',
  styleUrl: './clima-main-page.component.css',
})
export class ClimaMainPageComponent implements OnInit {
  clima: any = null;
  ciudad: string = '';
  constructor(
    private climaService: ClimaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ciudad = params['ciudad'];
      this.climaService.getClima(params['ciudad']).subscribe(
        (data) => {
          this.clima = data;
        },
        (error) => {
          this.clima = false;
        }
      );
    });
  }
}
