import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectDetailComponent implements OnInit {

  project: Project = {
    id: 0,
    title: '',
    description: '',
    technologies: [],
    startDate: new Date(),
    status: '',
    category: '',
    detail: {
      content: ''
    }
  };


  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.project = this.projectsService.getProjectById(id);
    }
  }
}
