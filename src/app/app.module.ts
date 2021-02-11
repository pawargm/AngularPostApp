import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostAlertComponent } from './post-alert/post-alert.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaseconverterDirective } from './caseconverter.directive';
import { ReactFormDemoComponent } from './react-form-demo/react-form-demo.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostAlertComponent,
    HomeComponent,
    UsersComponent,
    CreatepostComponent,
    CaseconverterDirective,
    ReactFormDemoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
