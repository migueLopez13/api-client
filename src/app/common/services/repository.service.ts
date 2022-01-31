import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactDTO } from '../dto/contact.dto';
import { ContactLogin } from '../interfaces/contact-login.interface';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private baseUrl = 'http://localhost:3000/contact-book';
  constructor(private httpClient: HttpClient) {}

  public find = (): Observable<Object> =>
    this.httpClient.get(`${this.baseUrl}`);

  public create = (contactToInsert: ContactDTO): Observable<Object> =>
    this.httpClient.post(`${this.baseUrl}`, contactToInsert);

  public validateUser = (contactToValidate: ContactLogin): Observable<Object> =>
    this.httpClient.post(`http://localhost:3000/auth/login`, contactToValidate);
}
