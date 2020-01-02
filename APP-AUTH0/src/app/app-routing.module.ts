import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuard2 } from './auth2/auth.guard';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService }    from './service/interceptor.service';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'dashboard'   , component: DashboardComponent, canActivate: [AuthGuard,AuthGuard2],},
  { path: 'detail/:_id' , component: HeroDetailComponent, canActivate: [AuthGuard,AuthGuard2]},
  { path: 'heroes'      , component: HeroesComponent,canActivate: [AuthGuard,AuthGuard2] },
  { path: 'profile'     , component: ProfileComponent,canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule {}