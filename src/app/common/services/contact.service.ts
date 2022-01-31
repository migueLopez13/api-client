import { Injectable } from '@angular/core';
import { ContactDTO } from '../dto/contact.dto';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private repository: RepositoryService) {}

  public create = (contactToInsert: ContactDTO) => {
    contactToInsert.id = uuid.v4();
    return this.repository.create(contactToInsert);
  };

  public validateUser = (
    nameUser: string,
    password: string
  ): Observable<Object> => {
    return this.repository.validateUser({ name: nameUser, password: password });
  };
}
