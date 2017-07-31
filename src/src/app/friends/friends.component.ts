import { Component, OnInit } from '@angular/core';
import { FriendsApiService } from '../services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  collection: any[];

  constructor(protected fService: FriendsApiService) {
    this.collection = [];
  }

  ngOnInit(): void {
    debugger;
    this.fService.getFriends().subscribe(result => this.collection = result, error => {
      console.log(`Failed to load friends.`);
    });
  }

  delete(friend: any) {
    debugger;
    this.fService.deleteFriend(friend.id)
      .subscribe(result => {
        debugger;
        if (!result) {
          console.log(`Failed to delete friend ${friend.name}`);
          return;
        }

        this.ngOnInit();
      }, error => console.log(`Failed to load friends.`))
  }

}
