import { Injectable } from '@angular/core';
import { Http, BaseRequestOptions, RequestMethod, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FriendsApiService {
    // used to bypass the CORS error
    static API_HOST: string = "http://localhost:8080/http://friendapi.azurewebsites.net/api";
    
    constructor(private http: Http) { }

    getFriends(): Observable<any[]> {
        debugger;
        return this.http
            .get(`${FriendsApiService.API_HOST}/friend`)
            .map(response => response.json());
    }

    getFriend(id: Number): Observable<any> {
        return this.http
            .get(`${FriendsApiService.API_HOST}/friend/${id}`)
            .map(response => response.json());
    }

    postFriend(value: any): Observable<boolean> {
        debugger;
        return this.http
            .post(`${FriendsApiService.API_HOST}/friend`, value)
            .map(response => response.json());
    }

    deleteFriend(id: Number): Observable<boolean> {
        debugger;
        var options = new BaseRequestOptions();
        options.method = RequestMethod.Delete;
        options.body = id.toString();
        options.headers = options.headers || new Headers();
        options.headers.set('Content-Type', 'application/json');

        return this.http
            .request(`${FriendsApiService.API_HOST}/friend`, options)
            .map(response => response.json());
    }
}
