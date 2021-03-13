import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { HomeComponent } from './modules/home/home.component';
import { CollegeStudentComponent } from './modules/programs/college-student/college-student.component';
import { SchoolStudentComponent } from './modules/programs/school-student/school-student.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { Title: 'Techinnovators'}
  },
  {
    path: 'programs/school-student', component: SchoolStudentComponent, data: { title: 'Techinnovators' }
  },
  {
    path: 'programs/college-student', component: CollegeStudentComponent, data: { title: 'Techinnovators' }
  },
  {
    path: 'about-us', component: AboutUsComponent, data: { title: 'Techinnovators' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
