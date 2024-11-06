import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentationService } from '../../services/documentation.service';

import { Documentation } from '../../models/documentation.model';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent]
})

export class ProjectDetailComponent implements OnInit {

  breadcrumbs = [
    { label: '<-- Back', path: '/projects' }
  ]

  documentation: Documentation = {
    id: 0,
    title: '',
    description: '',
    technologies: [],
    startDate: new Date(),
    status: 'Not started',
    category: '',
    documentation: {
      overview: '',
      objectives: [],
      components: [],
      setup: {
        prerequisites: [],
        installationSteps: [],
        notes: '',
      },
      usage: [],
    },
  }


  constructor(
    private route: ActivatedRoute,
    //private projectsService: ProjectsService,
    private documentationService: DocumentationService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      //this.project = this.projectsService.getProjectById(id);
      this.documentation = this.documentationService.getDocumentationById(id);
    }
  }
}
