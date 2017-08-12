import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
    selector: 'my-chanel',
    templateUrl: './my.chanel.component.html',
    styleUrls: []
})

export class MyChanelComponent implements OnInit {
    chanelInfo = {};

    constructor(private youtubeService: YoutubeService) { }

    ngOnInit() {
        this.youtubeService
            .getPlayLists()
            .then(chanelInfo => {
                this.chanelInfo = chanelInfo;
            })
    }
}