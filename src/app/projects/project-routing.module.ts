import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { CodeTableWorkAreaComponent } from './components/code-table-work-area/code-table-work-area.component';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsHomeComponent,
    children: [
      {
        path: 'codeTableWorkArea',
        component: CodeTableWorkAreaComponent
      },
      {
        path: '',
        component: ProjectsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
