
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string, firstname: String, lastname: String): Observable<string> {
    return this.http.post(
      "http://localhost:8080/api/users",
      {
        username: username,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  public register(
    email: string,
    password: string
  ): Observable<string> {
    return this.http.post(
        "http://localhost:8080/api/users",
      {
        firstname: firstname,

        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}