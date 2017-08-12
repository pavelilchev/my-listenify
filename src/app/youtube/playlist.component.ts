import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { YoutubeService } from './youtube.service';

@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    styleUrls: []
})

export class PlaylistComponent implements OnInit {
    id: string;
    playlist: {};

    constructor(
        private route: ActivatedRoute,
        private youtubeService: YoutubeService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.youtubeService
                .loadPlayList(this.id)
                .then(playlist => {
                    console.log(playlist)
                    this.playlist = playlist;
                })
        });
    }
}