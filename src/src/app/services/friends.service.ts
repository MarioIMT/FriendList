import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FriendsApiService {
    static API_HOST: string = "http://cors-proxy.htmldriven.com/?url=http://friendapi.azurewebsites.net/api";

    constructor(private http: Http) { }

    getFriends(): Observable<any[]> {
        debugger;
        return this.http
            .get(`${FriendsApiService.API_HOST}/friend`)
            .map(response => JSON.parse( response.json().body));
    }

    getFriend(id: Number): Observable<any> {
        return this.http
            .get(`${FriendsApiService.API_HOST}/friend/${id}`)
            .map(response => JSON.parse( response.json().body));
    }

    postFriend(value: any): Observable<boolean> {
        return this.http
            .post(`${FriendsApiService.API_HOST}/friend`, value)
            .map(response => JSON.parse( response.json().body));
    }

    deleteFriend(id: Number): Observable<boolean> {
        return this.http
            .delete(`${FriendsApiService.API_HOST}/friend`)
            .map(response => JSON.parse( response.json().body));
    }
}
