import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from './studentDetails';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private addr = '/assets/Data/st.json';

  constructor(private http: HttpClient) { }

  getdata(): Observable<Student[]> {

    return this.http.get<Student[]>(this.addr);
  }
}
