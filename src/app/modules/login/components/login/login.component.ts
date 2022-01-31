import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/common/dto/tokken.dto';
import { ContactService } from 'src/app/common/services/contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly contactService: ContactService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(name: string, password: string): void {
    const validation = this.contactService.validateUser(name, password);
    let userToken: Token;

    validation.subscribe((data) => {
      userToken = data as Token;

      if (userToken) {
        localStorage.setItem('token', userToken.access_token);
        this.router.navigate(['/home']);
      }
    });
  }
}
