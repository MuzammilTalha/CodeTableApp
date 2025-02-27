import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ProjectService } from '../../services/project.service';
import { Project_Type } from '../../models/project';

@Component({
    selector: 'app-projects-home',
    templateUrl: './projects-home.component.html',
    styleUrls: ['./projects-home.component.scss'],
    standalone: false
})
export class ProjectsHomeComponent {

  constructor(private projectService: ProjectService) { }

  onTabIndexChange(event: any) {
    switch (event) {
      case 0:
        this.projectService.updateSelectedProjectType(Project_Type.WORKINPROGRESS);
        break;
      case 1:
        this.projectService.updateSelectedProjectType(Project_Type.TESTPHASES);
        break;
      case 2:
        this.projectService.updateSelectedProjectType(Project_Type.ARCHIVED);
        break;
      case 3:
        this.projectService.updateSelectedProjectType(Project_Type.DELETED);
        break;
    }
  }
}
