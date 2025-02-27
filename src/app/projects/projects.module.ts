import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { CodeTableWorkAreaComponent } from './components/code-table-work-area/code-table-work-area.component';
import { ProjectsRoutingModule } from './project-routing.module';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';  // Import routing module
import { MatTableModule } from '@angular/material/table';
import  {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';
import { MatTabsModule } from '@angular/material/tabs';  // Import MatTabsModule
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProjectService } from './services/project.service';
@NgModule({ declarations: [
        ProjectsComponent,
        CodeTableWorkAreaComponent,
        ProjectsTableComponent,
        ProjectDetailsComponent,
        ProjectsHomeComponent
    ], imports: [CommonModule,
        ProjectsRoutingModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule], providers: [
        { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
        { provide: ProjectService, useClass: ProjectService },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class ProjectsModule { }
