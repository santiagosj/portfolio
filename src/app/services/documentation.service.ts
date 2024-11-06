import { Injectable } from '@angular/core';
import { Documentation } from '../models/documentation.model';
import { projectDocumentation } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  private documentation: Documentation[] = projectDocumentation;
  constructor() { }
  getAllDocumentation(): Documentation[] {
    return this.documentation;
  }

  // Método para obtener un proyecto por su ID
  getDocumentationById(id: number): Documentation {
    const documentation = this.documentation.find(documentation => documentation.id === id);
    if (!documentation) {
      throw new Error(`No se encontró la documentación con el ID ${id}`);
    }
    return documentation;
  }
}
