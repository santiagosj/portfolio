import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P5CanvasComponent } from '../canvas/canvas.component';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, P5CanvasComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
