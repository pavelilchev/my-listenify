import { Component, Injectable } from '@angular/core';

import { Requester } from '../utils/requester';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private requester: Requester) { }

    register(user) {
        let request = {
            relativeUrl: 'user/register',
            data: user,
            authenticated: false
        }

        return this.requester
            .post(request)
            .map(resp => resp.json());
    }

    login(user) {
        let request = {
            relativeUrl: 'user/login',
            data: user,
            authenticated: false
        }

        return this.requester
            .post(request)
            .map(resp => resp.json());
    }
}