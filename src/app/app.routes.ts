import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'toolbar', component: ToolbarComponent,
    children:[
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent }
    ]
   }
  
  
];