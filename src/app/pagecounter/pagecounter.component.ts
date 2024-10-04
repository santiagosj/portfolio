import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-counter',
  standalone: true,
  imports: [],
  templateUrl: './pagecounter.component.html',
  styleUrl: './pagecounter.component.scss'
})

export class PageCounterComponent implements OnInit {
  pageNumber: string = 'o1';

  private pageMapping: { [key: string]: string } = {
    '/home': '01',
    '/about': '02',
    '/projects': '03',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updatePageNumber(this.router.url);
      }
    });
  };

  updatePageNumber(url: string) {
    this.pageNumber = this.pageMapping[url] || '01';
  }
}
