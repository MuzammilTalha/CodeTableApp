import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project, Project_Status, Project_Type, Test_Phase_Status } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { mockData } from '../../mock_data/mockproject';

@Component({
    selector: 'app-projects-table',
    templateUrl: './projects-table.component.html',
    styleUrls: ['./projects-table.component.scss'],
    standalone: false
})
export class ProjectsTableComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<any>([]);
  selectedProject: any = null;

  // projects: Project[] = [];

  projects: Project[] = mockData.map((projectData) => {
    return {
      id: projectData.id,
      name: projectData.name,
      type: projectData.type as Project_Type,
      description: projectData.description,
      startDate: new Date(projectData.startDate),
      endDate: new Date(projectData.endDate),
      status: projectData.status as Project_Status,
      test_phase_status: projectData.test_phase_status as Test_Phase_Status,
      code_tables: projectData.code_tables.map((codeTable) => {
        return {
          id: codeTable.id,
          name: codeTable.name,
          newUpdateFlag: codeTable.newUpdateFlag,
          pk1: codeTable.pk1,
          pk2: codeTable.pk2,
          pk3: codeTable.pk3,
          rowCount: 0, // add this property
          tableName: '', // add this property
        };
      }),
    };
  });
  projectTypeSubscription: any;

  constructor(private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {

    this.dataSource.data = this.projects.filter(project => project.type === Project_Type.WORKINPROGRESS);
    this.projectTypeSubscription = this.projectService.selectedProjectType$.subscribe(type => {
      if (type === null) {
        this.dataSource.data  = this.projects.filter(project => project.type === Project_Type.WORKINPROGRESS);
      } else {
        console.log('Project type : ', type);
        switch (type) {
          case Project_Type.WORKINPROGRESS:
            this.dataSource.data = this.projects.filter(project => project.type === Project_Type.WORKINPROGRESS);
            break;
          case Project_Type.TESTPHASES:
            this.dataSource.data = this.projects.filter(project => project.type === Project_Type.TESTPHASES);
            break;
          case Project_Type.ARCHIVED:
            this.dataSource.data = this.projects.filter(project => project.type === Project_Type.ARCHIVED);
            break;
          case Project_Type.DELETED:
            this.dataSource.data = this.projects.filter(project => project.type === Project_Type.DELETED);
            break;
        }
      }
    })
  }

  ngOnDestroy() {
    this.projectTypeSubscription.unsubscribe();
  }

  onSelectProject(project: Project) {
    console.log('Selected project:', project);
    if (project !== this.selectedProject) {
      this.selectedProject = project;
    } else {
      this.selectedProject = null;
    }

    this.projectService.setSelectedProject(this.selectedProject);
  }

  showInfo(project: Project) {
    console.log('Show info for project:', project);
    if (project === null) return;
    this.selectedProject = project
    this.router.navigate(['codeTableWorkArea'], { relativeTo: this.activatedRoute });
  }
}
