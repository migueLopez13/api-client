import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactDTO } from 'src/app/common/dto/contact.dto';
import { ContactService } from 'src/app/shared/services/contact.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly contactService: ContactService
  ) {}

  userToken!: string;
  contact!: ContactDTO;

  ngOnInit(): void {
    this.userToken = this.storageService.getToken() as string;
    if (!this.userToken) {
      this.router.navigate(['/login']);
    }
    this.contactService
      .getContactPayload(this.userToken)
      .subscribe((id) =>
        this.contactService
          .getContactData(id as string)
          .subscribe((contact) => (this.contact = contact as ContactDTO))
      );
  }

  logout() {
    this.storageService.removeToken();
    this.router.navigate(['/login']);
  }
}
