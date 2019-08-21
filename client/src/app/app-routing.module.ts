import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components imported
import { SignInComponent } from './components/auth/sign-in/sign-in.component'
import { SignUpComponent } from './components/auth/sign-up/sign-up.component'
import { SignOutComponent } from './components/auth/sign-out/sign-out.component'
import { MarvelComicsComponent } from './components/comics/marvel-comics/marvel-comics.component'
import { MarvelComicByIdComponent } from './components/comics/marvel-comics/marvel-comic-by-id/marvel-comic-by-id.component'
import { MyComicsComponent } from './components/comics/my-comics/my-comics.component'
import { MyComicByIdComponent } from './components/comics/my-comics/my-comic-by-id/my-comic-by-id.component'

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/',
    pathMatch: 'full' 
  }, 
  {
    path: '',
    component: SignInComponent
  },  
  {
    path: 'signIn',
    component: SignInComponent
  },   
  {
    path: 'signUp',
    component: SignUpComponent
  }, 
  {
    path: 'signOut',
    component: SignOutComponent
  },     
  {
    path: 'comics',
    component: MarvelComicsComponent
  }, 
  {
    path: 'comics/:id',
    component: MarvelComicByIdComponent
  },    
  {
    path: 'myComics',
    component: MyComicsComponent
  },          
  {
    path: 'myComics/:id',
    component: MyComicByIdComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
