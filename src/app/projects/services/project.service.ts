import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project, Project_Status, Project_Type, Test_Phase_Status } from '../models/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private selectedProjectSubject = new BehaviorSubject<Project | null>(null);
  public selectedProject$ = this.selectedProjectSubject.asObservable();
  selected_project: Project|null = null;

  selected_project_type = Project_Type.WORKINPROGRESS;
  private selectedProjectTypeSubject = new BehaviorSubject<Project_Type | null>(null);
  public selectedProjectType$ = this.selectedProjectTypeSubject.asObservable();

  // projects: Project[] = projectsData;


  constructor(private http: HttpClient) { // Inject HttpClient

  }

  updateSelectedProjectType(type: Project_Type) {
    this.selected_project_type = type;
    this.selectedProjectTypeSubject.next(type);
  }
  setSelectedProject(project: Project | null) {
    this.selected_project = project;
    this.selectedProjectSubject.next(project);
  }

  getSelectedProject() {
    return this.selected_project;
  }
}
