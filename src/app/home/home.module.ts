import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CoursesComponent } from './courses/courses.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    HomeComponent,
    ApprovalRequestsComponent,
    CoursesComponent
  ],
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    MatProgressBarModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [
  ],
})
export class HomeModule { }
