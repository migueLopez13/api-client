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

  private contacts = new Array<ContactDTO>();

  public create = (contactToInsert: ContactDTO) => {
    contactToInsert.id = uuid.v4();
    this.contacts.push(contactToInsert);
    return this.repository.create(contactToInsert);
  };

  public validateUser = (
    nameUser: string,
    password: string
  ): Observable<Object> => {
    this.getContacts();
    const contact = this.contacts.filter(({ name }) => name === nameUser)[0];
    return this.repository.validateUser({ id: contact.id, password: password });
  };

  getContacts() {
    this.repository
      .find()
      .subscribe((data) => (this.contacts = data as ContactDTO[]));
  }
}
