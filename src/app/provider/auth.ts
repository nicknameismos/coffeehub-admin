import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { ServerConfig } from 'app/provider/server.config';
import { window } from 'rxjs/operator/window';

@Injectable()
export class Auth {

    constructor(private http: Http, public server: ServerConfig) { }

    sigin(credentials): Observable<any> {
        return this.http.post(this.server.url + 'api/auth/signin', credentials , this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }
}
