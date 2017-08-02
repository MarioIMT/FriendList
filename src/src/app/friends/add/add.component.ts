import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PropertyExtension } from '../../core/extensions/property.extensions';
import { Friend } from '../../core/models/friend';
import { FriendsApiService } from '../../services/friends.service';



@Component({
  selector: 'app-friend-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class FriendAddComponent implements OnInit {
  public form: FormGroup;
  public friend: Friend;
  public static readonly ROUTE_PARAM_ID: string = 'id';

  constructor(protected fb: FormBuilder, protected router: Router, protected route: ActivatedRoute, protected fService: FriendsApiService) {
    this.friend = new Friend();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({});
    this.form.addControl(PropertyExtension.getPropertyName(() => this.friend.name), new FormControl(this.friend.name, [Validators.required]));
    this.form.addControl(PropertyExtension.getPropertyName(() => this.friend.phone), new FormControl(this.friend.phone, [Validators.required]));
    this.form.addControl(PropertyExtension.getPropertyName(() => this.friend.address), new FormControl(this.friend.bio, [Validators.required]));
    this.form.addControl(PropertyExtension.getPropertyName(() => this.friend.photo), new FormControl(this.friend.photo, [Validators.required]));
    this.form.addControl(PropertyExtension.getPropertyName(() => this.friend.currentStatus), new FormControl(this.friend.currentStatus, [Validators.required]));
    this.form.addControl(PropertyExtension.getPropertyName(() => this.friend.bio), new FormControl(this.friend.bio, [Validators.required]));
  }

  onSubmit() {
    Object.assign(this.friend, this.form.value);
    this.fService.postFriend(this.friend).subscribe((result: boolean) => {
      this.router.navigateByUrl('../friends');
    }, (error: any) => {
      this.form.setErrors({ '': 'Some error ....' })
    });
  }

}
