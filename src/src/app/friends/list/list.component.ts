import { Component, OnInit } from '@angular/core';
import { FriendsApiService } from '../../services/friends.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class FriendListComponent implements OnInit {

  collection: any[];

  constructor(protected fService: FriendsApiService) {
    this.collection = [];
  }

  ngOnInit(): void {
    this.fService.getFriends().subscribe(result => this.collection = result, error => {
      console.log(`Failed to load friends.`);
    });
  }

  delete(friend: any) {
    if (!confirm("Are you sure you want to delete this friend?")) { return} 
      this.fService.deleteFriend(friend.friendId)
        .subscribe(result => {
          if (!result) {
            console.log(`Failed to delete friend ${friend.name}`);
            return;
          }

        this.ngOnInit();
      }, error => console.log(`Failed to load friends.`))
  }
}