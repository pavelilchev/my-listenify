import { Injectable } from '@angular/core';
import { Requester } from '../utils/requester';
import { Authenticator } from '../utils/authenticator';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const apiKey = 'AIzaSyDolB3OAByDCc7fmdBemE44nbNGzimtQ-c';
const maxVideosPerPage = 5;

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
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxVideosPerPage}&playlistId=${id}&key=${apiKey}`;
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
}