import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import  { FriendsApiService } from './services/friends.service';

import  { FriendsComponent } from './friends/friends.component';
import  { FriendDetailComponent } from './friend-detail/component';

const appRoutes: Routes = [
  { path: '', component: FriendsComponent },
  { path: 'friends/:id', component: FriendDetailComponent },
  { path: '',   redirectTo: '/friends', pathMatch: 'full' },
  { path: '**', component: FriendsComponent }
];
 

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [FriendsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
