import { Component, Input } from '@angular/core';

@Component({
    selector: 'iframe-video',
    templateUrl: './video.component.html',
    styleUrls:[]
})

export class VideoComponent {
    @Input() video;
}