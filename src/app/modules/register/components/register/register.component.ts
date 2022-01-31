import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COUNTRIES } from '../../../../common/constants';
import { ContactDTO } from '../../../../common/dto/contact.dto';
import { ControlGroupService } from '../../../../common/services/control-group.service';
import { errorsForm, labelsForm } from '../../../../common/types';
import { ContactService } from 'src/app/common/services/contact.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public form: labelsForm = COUNTRIES.USA.labels;
  public errors: errorsForm = COUNTRIES.USA.errors;

  constructor(
    private controlGroupService: ControlGroupService,
    private contactService: ContactService,
    private readonly route: Router
  ) {}

  public myformControl = this.controlGroupService.getGroup();

  register(contact: ContactDTO) {
    const response = this.contactService.create(contact);
    response.subscribe((data) => {
      this.route.navigate(['/login']);
    });
  }

  resetForm(): void {
    this.myformControl.reset();
  }
}
