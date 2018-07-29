import { Component, AfterViewInit } from '@angular/core';
import { VideoService} from './training/video.service';
import 'rxjs/add/operator/toPromise';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx'; // this line rises a tslint err
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'vido-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[VideoService]
})
export class AppComponent implements AfterViewInit{
  drag(){
    const dragDOM = document.getElementById('drag');
    const body = document.body;
    
    const mouseDown = Observable.fromEvent<MouseEvent>(dragDOM, 'mousedown');
    const mouseUp = Observable.fromEvent<MouseEvent>(body, 'mouseup');
    const mouseMove = Observable.fromEvent<MouseEvent>(body, 'mousemove');
    
        mouseDown
      .map(event => mouseMove.takeUntil(mouseUp))
      .concatAll()
      .map(event => ({ x: event.clientX, y: event.clientY }))
      .subscribe(pos => {
        dragDOM.style.left = pos.x + 'px';
        dragDOM.style.top = pos.y + 'px';
      })
  }

  ngAfterViewInit(){
  }

  constructor(private http:Http){
    this.refreshHeros();
    
  }
  private heroesUrl = 'http://api.myjson.com/bins/1cdcm1';
  title = 'Learning Videos';

  refreshHeros(){
    return this.http.get(this.heroesUrl)
    .toPromise().then(
      Response => {
        console.log(Response.json());
      }
    )
  }

  getValue(num:number, isTrue?:boolean):number|boolean{
    if(typeof(isTrue) != 'undefined')
      return isTrue;
    else if(num as number)
      return num;
  }
}
