import { IVideo } from './video';
import {Injectable} from '@angular/core';

@Injectable()
export class VideoService
{
    getVideos(): IVideo[]{
        return [ {
            "Id": 1,
            "Title": "ASP.NET",
            "Length":200,
            "Category": "Web Development",
            "Format": "WMV"
        }]
    }
}