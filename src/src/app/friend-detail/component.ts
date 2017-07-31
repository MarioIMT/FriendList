import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FriendsApiService } from '../services/friends.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class FriendDetailComponent implements OnInit {
  friend: any;

  constructor(protected router: Router, protected route: ActivatedRoute, protected fService: FriendsApiService) {
    this.friend = {};
  }

  ngOnInit(): void {
    debugger;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.fService.getFriend(+params.get('id')))
      .subscribe((result: any) => this.friend = result);
  }
}
