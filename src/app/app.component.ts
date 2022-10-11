import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ticketForma!: UntypedFormGroup;
  selectedValue = null;
  municipioValue = null;
  asuntoValue = null;

  submitForm(): void {
    if (this.ticketForma.valid) {
      console.log('submit', this.ticketForma.value);
    } else {
      Object.values(this.ticketForma.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  constructor(private fb: UntypedFormBuilder) { }
  ngOnInit(): void {


    this.ticketForma = this.fb.group({
      nombreTramite: [null, [Validators.required, Validators.pattern("^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)")]],
      curp: [null, [Validators.required, Validators.pattern("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$")]],
      nombre: [null, [Validators.required, Validators.pattern("^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)")]],
      paterno: [null, [Validators.required, Validators.pattern("^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)")]],
      materno: [null, [Validators.required, Validators.pattern("^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)")]],
      telefono: [null, [Validators.required,Validators.maxLength(10), Validators.minLength(9)]],
      celular: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(9)]],
      correo: [null, [Validators.required, Validators.email]],
      nivel: [null, [Validators.required]],
      municipio: [null, [Validators.required]],
      asunto: [null, [Validators.required]],
    });
  }

  title = 'reactive-forms-parcial2';


}
