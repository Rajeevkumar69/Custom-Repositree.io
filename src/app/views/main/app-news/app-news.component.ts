import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from 'src/app/shared/services/globalservice.service';

@Component({
     selector: 'app-app-news',
     templateUrl: './app-news.component.html',
     styleUrls: ['./app-news.component.scss']
})
export class AppNewsComponent implements OnInit {
     public rssFeedData: any;

     // prettier-ignore
     constructor(
          private _globalService: GlobalserviceService
     ) { }

     ngOnInit(): void {
          this._globalService.fetchRssFeed('https://rss.app/feeds/v1.1/Ib2kfj6VGTX3yiBK.json').subscribe((data) => {
               this.rssFeedData = data;
          });
     }
}
