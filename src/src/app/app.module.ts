import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FriendsApiService } from './services/friends.service';
import { FriendListComponent, FriendViewComponent, FriendAddComponent } from './friends';

const appRoutes: Routes = [
  { path: 'friends', component: FriendListComponent },
  { path: 'friends/:id/view', component: FriendViewComponent },
  { path: 'friends/new', component: FriendAddComponent },
  { path: '',   redirectTo: 'friends', pathMatch: 'full' },
  { path: '**', redirectTo: 'friends', pathMatch: 'full' }
];
 
@NgModule({
  declarations: [
    AppComponent,
    FriendListComponent,
    FriendViewComponent,
    FriendAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FriendsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
