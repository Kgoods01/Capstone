import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'courses'
          },
        {
            path: 'courses',
            component: CoursesComponent
        },
        {
            path: 'approvals',
            component: ApprovalRequestsComponent
        },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
