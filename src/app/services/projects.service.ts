import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = projects;

  constructor() { }

  // Método para obtener todos los proyectos
  getAllProjects(): Project[] {
    return this.projects;
  }

  // Método para obtener un proyecto por su ID
  getProjectById(id: number): Project {
    const project = this.projects.find(project => project.id === id);
    if (!project) {
      throw new Error(`No se encontró el proyecto con el ID ${id}`);
    }
    return project;
  }
}
