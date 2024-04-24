import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
