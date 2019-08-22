import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthNavigationComponent } from './components/navigation/auth-navigation/auth-navigation.component';
import { UserNavigationComponent } from './components/navigation/user-navigation/user-navigation.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { MarvelComicsComponent } from './components/comics/marvel-comics/marvel-comics.component';
import { MyComicsComponent } from './components/comics/my-comics/my-comics.component';
import { MarvelComicByIdComponent } from './components/comics/marvel-comics/marvel-comic-by-id/marvel-comic-by-id.component';
import { SignOutComponent } from './components/auth/sign-out/sign-out.component';
import { MyComicByIdComponent } from './components/comics/my-comics/my-comic-by-id/my-comic-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthNavigationComponent,
    UserNavigationComponent,
    SignInComponent,
    SignUpComponent,
    MarvelComicsComponent,
    MyComicsComponent,
    MarvelComicByIdComponent,
    SignOutComponent,
    MyComicByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
