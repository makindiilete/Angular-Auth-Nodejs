import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './Components/events/events.component';
import { SpecialEventsComponent } from './Components/special-events/special-events.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard], // guard ds route with the canActivate guard.. visiting ds route triggers d guard and if it returns true, navigation is allowed, else navigation is blocked..
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
