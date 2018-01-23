import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DashboardModel } from 'app/dashboard/dashboard.model';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getData(): Observable<DashboardModel> {
    return this.http.get('../../assets/data/dashboard.json')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
