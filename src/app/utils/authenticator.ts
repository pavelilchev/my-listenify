import {Injectable} from "@angular/core";

@Injectable()
export class Authenticator {
    setToken(token: string): void {
        window.sessionStorage.setItem('token', token)
    }
    getToken(): string {
        return window.sessionStorage.getItem('token')
    }
    clearToken(): void {
        window.sessionStorage.removeItem('token')
    }
    setUser(user): void {
        window.sessionStorage.setItem('user', JSON.stringify(user))
    }
    getUser() {
        return JSON.parse(window.sessionStorage.getItem('user'))
    }
    // setUsername(username): void {
    //     window.sessionStorage.setItem('username', username)
    // }
    // getUsername(): string {
    //     return window.sessionStorage.getItem('username')
    // }
}