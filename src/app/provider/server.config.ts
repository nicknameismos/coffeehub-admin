import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ServerConfig {
    public url: string = 'https://eatsyd-test.herokuapp.com/';

    constructor() {

    }

    isLogin(): Observable<boolean> {
        let user = window.localStorage.getItem('user');
        if (user ? JSON.parse(user).loginToken : false) {
            return of(true);
        } else {
            return of(false);
        }
    }

    logout(): Observable<boolean> {
        window.localStorage.removeItem('user');
        return of(true);
    }

    getUser(): Observable<any> {
        let user = window.localStorage.getItem('user');
        return of(JSON.parse(user));
    }

    AuthHeaders() {
        let headers = new Headers();
        let user = window.localStorage.getItem('user');
        let token = '';
        if (user) {
            token = JSON.parse(user).loginToken;
        }
        headers.append('Authorization', 'Bearer ' + token);
        // headers.append('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRvb2siLCJsb2dpbkV4cGlyZXMiOiIyMDE3LTExLTIyVDA3OjE1OjI5LjYwNloiLCJpYXQiOjE1MTEzMjg1Mjl9.eFBp7O4V9a8CXiJqN5e1iN51WVu-kK-ZeVT3BUxJP44');
        return { headers: headers };
    }
}
