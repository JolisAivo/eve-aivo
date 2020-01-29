import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private static readonly GATEWAY = 'http://localhost:9000/';
  constructor() { }
  public getUrl(): string {
    return UrlService.GATEWAY;
  }
}
