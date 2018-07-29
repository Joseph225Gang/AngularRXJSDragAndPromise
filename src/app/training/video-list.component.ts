import { Component, OnInit } from '@angular/core';
import { IVideo} from './video';
import { VideoService} from './video.service';

@Component({
  selector: 'all-videos',
  moduleId: module.id,
  templateUrl: './video-list.component.html',
})
export class VideoListComponent implements OnInit{
    myvideos:IVideo[];
    constructor(private _videoservice: VideoService){

    }

    ngOnInit(){
        this.myvideos = this._videoservice.getVideos();
    }
}
