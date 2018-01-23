import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServerConfig } from 'app/provider/server.config';

@Injectable()
export class ManageUserService {

    constructor(private http: Http, public server: ServerConfig) { }

    getUser(): Observable<any> {
        return this.http.get(this.server.url + 'api/management/users', this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

    add(user): Observable<any> {
        return this.http.post(this.server.url + 'api/auth/signup', user, this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

    edit(user): Observable<any> {
        return this.http.put(this.server.url + 'api/users/' + user._id, user, this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

    delete(user_id): Observable<any> {
        return this.http.delete(this.server.url + 'api/users/' + user_id, this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }
}