import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterRouting } from './register-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ContactService } from 'src/app/shared/services/contact.service';
import { ControlGroupService } from 'src/app/shared/services/control-group.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatInputModule,
    RegisterRouting,
  ],
  providers: [ControlGroupService, RepositoryService, ContactService],
})
export class RegisterModule {}
