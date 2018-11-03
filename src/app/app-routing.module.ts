import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './auth/profile/profile.component';
import { SessionComponent } from './member/session/session/session.component';
import { NewSessionComponent } from './member/session/new-session/new-session.component';
import { CurrentSessionComponent } from './member/session/current-session/current-session.component';
import { PastSessionComponent } from './member/session/past-session/past-session.component';
import { AccountComponent } from './member/account/account.component';
import { LiveComponent } from './models/live/live.component';
import { ModelsComponent } from './models/models.component';
import { BuytokenComponent } from './member/buytoken/buytoken.component';
import { LovenseComponent } from './models/lovense/lovense.component';
import { LovenseConfigComponent } from './models/lovense-config/lovense-config.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'models', component: ModelsComponent},
  { path: 'models/live', component: LiveComponent},
  { path: 'models/lovense', component: LovenseComponent,  canActivate: [AuthGuard]},
  { path: 'models/lovense/config/:toyid', component: LovenseConfigComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'member/account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'member/buytoken', component: BuytokenComponent, canActivate: [AuthGuard]},
  { path: 'member/session', component: SessionComponent, canActivate: [AuthGuard]},
  { path: 'member/session/new', component: NewSessionComponent, canActivate: [AuthGuard]},
  { path: 'member/session/current', component: CurrentSessionComponent, canActivate: [AuthGuard]},
  { path: 'member/session/past', component: PastSessionComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
