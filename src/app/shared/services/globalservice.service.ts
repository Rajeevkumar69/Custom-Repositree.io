import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
     providedIn: 'root'
})
export class GlobalserviceService {
     // prettier-ignore
     constructor(
          private _http: HttpClient
          ) {}

     public fetchRssFeed(url: string): Observable<any> {
          return this._http
               .get(url, {
                    responseType: 'text'
               })
               .pipe(
                    map((response: string) => {
                         const parser = new DOMParser();
                         const doc = parser.parseFromString(response, 'text/xml');
                         const feed = doc.querySelector('rss');
                         return feed;
                    })
               );
     }
}
