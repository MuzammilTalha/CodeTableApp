import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnDestroy {
  projectSubscription$;
  selectedProject: Project | null = null;
  constructor(private projectService: ProjectService, private router: Router) {
    this.projectSubscription$ = this.projectService.selectedProject$.subscribe(selected_Project => {
      console.log("selectedProject ::", selected_Project);
      this.selectedProject = selected_Project
    });
  }

  ngOnDestroy(): void {
    this.projectSubscription$.unsubscribe();
  }
}
