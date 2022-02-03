import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { ContactDTO } from 'src/app/common/dto/contact.dto';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private repository: RepositoryService) {}

  public create(contactToInsert: ContactDTO) {
    contactToInsert.id = uuid.v4();
    return this.repository.create(contactToInsert);
  }

  public validateUser(name: string, password: string): Observable<Object> {
    return this.repository.validateUser({ name, password });
  }

  public getContactPayload(token: string) {
    return this.repository.getcontactPayload(token);
  }

  public getContactData(id: string): Observable<Object> {
    return this.repository.findOne(id);
  }
}
