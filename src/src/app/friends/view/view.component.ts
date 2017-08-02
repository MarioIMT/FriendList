import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Friend } from '../../core/models/friend';
import { FriendsApiService } from '../../services/friends.service';



@Component({
  selector: 'app-friend-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class FriendViewComponent implements OnInit {
  public friend: Friend;
  public static readonly ROUTE_PARAM_ID: string = 'id';

  constructor(protected route: ActivatedRoute, protected fService: FriendsApiService) {
    this.friend = new Friend();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.fService.getFriend(+params.get(FriendViewComponent.ROUTE_PARAM_ID))
      })
      .subscribe((result: any) => {
        Object.assign(this.friend, result);
      });
  }
}
