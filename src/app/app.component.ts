import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PageCounterComponent } from './components/pagecounter/pagecounter.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',],
  imports: [RouterOutlet, NavbarComponent, PageCounterComponent, LayoutComponent]
})
export class AppComponent {

}
