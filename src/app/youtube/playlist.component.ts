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
    playlist: Array<any>;

    constructor(
        private route: ActivatedRoute,
        private youtubeService: YoutubeService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.youtubeService
                .loadPlayList(this.id)
                .then(data => {
                    console.log(data) 
                    debugger               
                    for(let video of data.items){
                        video['src'] = `https://www.youtube.com/embed?listType=playlist&list=${video.snippet.playlistId}`;
                    }
                    
                    this.playlist = data.items;
                })
        });
    }
}