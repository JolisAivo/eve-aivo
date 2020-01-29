import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UrlService } from './url.service';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private appUrl = this.url.getUrl() + '/mail';

  constructor(private url: UrlService, private http: HttpClient) { }

  getMail(): Observable<Mail[]> {
    return this.http.get(this.appUrl, { withCredentials: true }).pipe(
      map( resp => resp as Mail[])
    );
  }
}
