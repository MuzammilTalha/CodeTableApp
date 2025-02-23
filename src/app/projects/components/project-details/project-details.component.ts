import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  projectForm: FormGroup;
  project: Project | null = null;
  projectSubscription: any;

  constructor(private projectService: ProjectService) {

    this.project = this.projectService.getSelectedProject();

    this.projectForm = new FormGroup({
      id: new FormControl(this.project?.id, Validators.required),
      name: new FormControl(this.project?.name, Validators.required),
      description: new FormControl(this.project?.description),
      startDate: new FormControl(this.project?.startDate),
      endDate: new FormControl(this.project?.endDate),
      status: new FormControl(this.project?.status)
    });
  }

  ngOnInit(): void {
    this.projectSubscription = this.projectService.selectedProject$.subscribe(selected_Project => {
      this.project = selected_Project;
      if (this.project === null) return;
      this.projectForm.patchValue(this.project);
    } );

  }

  ngOnDestroy() {
    this.projectSubscription.unsubscribe();
  }

  onCancel() {
    console.log('OnCancel');

    if (this.project) {
      this.projectForm.patchValue(this.project);
    }
  }

  onSubmit() {
    console.log(this.projectForm.value);
    if (this.project) {

    }
  }
}
