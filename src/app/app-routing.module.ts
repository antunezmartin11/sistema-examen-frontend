
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { SeccionComponent } from './pages/seccion/seccion.component';
import { FseccionComponent } from './pages/seccion/fseccion/fseccion.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate:[NormalGuard]
  },
  {
    path:'admin-alumno',
    component: AlumnosComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  },
  {
    path:'regSeccion',
    component: FseccionComponent,
    pathMatch: 'full',
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
