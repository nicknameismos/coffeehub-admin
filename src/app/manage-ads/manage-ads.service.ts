import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { ServerConfig } from 'app/provider/server.config';
@Injectable()
export class ADSService {
    constructor(private http: Http, public server: ServerConfig, ) {

    }
    getAdsList(): Observable<any> {
        return this.http.get(this.server.url + 'api/ads/', {})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }
    postAds(data): Observable<any> {
        return this.http.post(this.server.url + 'api/ads/', data, this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }
    editAds(data): Observable<any> {
        return this.http.put(this.server.url + 'api/ads/' + data._id, data, this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

    uploadImage(img): Observable<any> {
        return this.http.post(this.server.url + 'api/products_picture', { data: img.replace('data:image/jpeg;base64,', '') }, this.server.AuthHeaders())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }
}