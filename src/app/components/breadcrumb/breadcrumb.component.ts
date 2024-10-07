import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [CommonModule]
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: { label: string, path: string }[] = [];

  constructor(private router: Router) { }

  navigateTo(path: string) {
    console.log(path)
    this.router.navigate([path]);
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
