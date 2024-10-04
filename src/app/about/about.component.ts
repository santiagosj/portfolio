import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jobExperiences } from '../models/data';
import { certifications } from '../models/data';
import { skills } from '../models/data';
import { ContactLinks } from '../models/data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public jobExperiences = jobExperiences;
  public certificates = certifications;
  public skills = skills;
  public contactLinks = ContactLinks;
}
