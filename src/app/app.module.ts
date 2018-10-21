
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { HeaderComponent } from './nav/header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropZoneDirective } from './files/drop-zone.directive';
import { FileUploadComponent } from './files/file-upload/file-upload.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { FileSizePipe } from './files/file-size.pipe';

import { AccountComponent } from './member/account/account.component';
import { MemberService } from './member/member.service';
import { SessionComponent } from './member/session/session/session.component';
import { NewSessionComponent } from './member/session/new-session/new-session.component';
import { CurrentSessionComponent } from './member/session/current-session/current-session.component';
import { PastSessionComponent } from './member/session/past-session/past-session.component';
import { StreamService } from './member/session/stream.service';
import { YesNoDialogComponent } from 'src/app/common/yesno-dialog/yesno-dialog.component';
import { ModelsComponent } from './models/models.component';
import { LiveComponent } from './models/live/live.component';
import { OKDialogComponent } from './common/ok-dialog/ok-dialog.component';
import { BuytokenComponent } from './member/buytoken/buytoken.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    DropZoneDirective,
    FileUploadComponent,
    ProfileComponent,
    FileSizePipe,
    SessionComponent,
    NewSessionComponent,
    CurrentSessionComponent,
    PastSessionComponent,
    AccountComponent,
    YesNoDialogComponent,
    ModelsComponent,
    LiveComponent,
    OKDialogComponent,
    BuytokenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, MemberService, StreamService],
  bootstrap: [AppComponent],
  entryComponents: [YesNoDialogComponent, OKDialogComponent]
})
export class AppModule { }
