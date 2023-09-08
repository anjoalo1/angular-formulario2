import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SavebdService {

  constructor(private http: HttpClient){}




  getJson(url:string){
    return this.http.get<any>(url)
  }


}
