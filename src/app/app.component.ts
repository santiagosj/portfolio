import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PageCounterComponent } from './pagecounter/pagecounter.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',],
  imports: [RouterOutlet, NavbarComponent, PageCounterComponent, LayoutComponent]
})
export class AppComponent {

}
