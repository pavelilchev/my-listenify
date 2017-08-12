import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Authenticator} from "./authenticator";

const BASE_URL = 'http://localhost:3001'

@Injectable()
export class Requester {
    constructor(
        private http: Http,
        private authenticator: Authenticator
    ) { }

    get({ relativeUrl, authenticated }): Observable<any> {
        let url = `${BASE_URL}/${relativeUrl}`

        if (authenticated) {
            let headers = new Headers()
            headers.append('Authentication', `bearer ${this.authenticator.getToken()}`)
            return this.http.get(url, { headers })
        } else {
            return this.http.get(url)
        }
    }

     getExternal(url): Observable<any> {
       return this.http.get(url);
    }

    post({ relativeUrl, data, authenticated }): Observable<any> {
        let url = `${BASE_URL}/${relativeUrl}`
        let headers = new Headers()
        headers.append('Content-Type', 'Application/json')

        let payload: string
        if (data) {
            payload = JSON.stringify(data)
        }
        if (authenticated) {
            headers.append('Authentication', `bearer ${this.authenticator.getToken()}`)
        }

        return this.http.post(url, payload, { headers })
    }
}