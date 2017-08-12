import { Injectable } from '@angular/core';
import { Requester } from '../utils/requester';
import { Authenticator } from '../utils/authenticator';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// not authorize
const apiKey = 'AIzaSyDolB3OAByDCc7fmdBemE44nbNGzimtQ-c';

// authorize
// const clientId = '914119738962-cn0vbujl29lcbkjn4spkodobdv0bk8s4.apps.googleusercontent.com';
// const clientSecret = 'w1kSLpJMfI1uCQRsN4g6BM9a';

@Injectable()
export class YoutubeService {
    constructor(
        private requester: Requester,
        private authenticator: Authenticator) { }

    getPlayLists() {
        return new Promise((resolve, reject) => {
            this.getChanelInfo()
                .then(data => {
                    if (data.items) {
                        let chanelId = data.items[0].id;
                        var url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${chanelId}&maxResults=25&key=${apiKey}`;

                        resolve(this.requester
                            .getExternal(url)
                            .toPromise()
                            .then(resp => resp.json()));
                    }
                });
        })
    }

    loadPlayList(id) {
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${apiKey}`;                  
        return this.requester
            .getExternal(url)
            .toPromise()
            .then(resp => resp.json());
    }

    private getChanelInfo() {
        let user = this.authenticator.getUser();
        let username = user ? user.username : '';
        let url = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forUsername=${username}&part=id`;

        return this.requester
            .getExternal(url)
            .toPromise()
            .then(resp => resp.json());
    }

    // oauthSignIn() {
    //     // Google's OAuth 2.0 endpoint for requesting an access token
    //     var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    //     // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    //     var form = document.createElement('form');
    //     form.setAttribute('method', 'GET'); // Send as a GET request.
    //     form.setAttribute('action', oauth2Endpoint);

    //     // Parameters to pass to OAuth 2.0 endpoint.
    //     var params = {
    //         'client_id': clientId,
    //         'redirect_uri': 'http://localhost:4200',
    //         'response_type': 'token',
    //         'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
    //         'include_granted_scopes': 'true',
    //         'state': 'pass-through value'
    //     };

    //     // Add form parameters as hidden input values.
    //     for (var p in params) {
    //         var input = document.createElement('input');
    //         input.setAttribute('type', 'hidden');
    //         input.setAttribute('name', p);
    //         input.setAttribute('value', params[p]);
    //         form.appendChild(input);
    //     }

    //     // Add form to page and submit it to open the OAuth 2.0 endpoint.
    //     document.body.appendChild(form);
    //     form.submit();
    // }
}