import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrl: './loan-form.component.scss',
})
export class LoanFormComponent {
  @ViewChild('documentNumberInput') documentNumberInput!: ElementRef;
  loanForm: any;
  documentsTypes = [{ name: 'DNI', code: 1 }];
  loading: boolean = false;
  allowDocuments = ['65443456', '76443234', '87994345', '08778721'];

  constructor(private router: Router) {
    this.loanForm = new FormGroup({
      documentType: new FormControl(1, Validators.required),
      documentNumber: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{0,7}[0-9]*$'),
          Validators.maxLength(8),
          Validators.minLength(8),
          this.excludeSpecificDni('00000000'),
        ],
      }),
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$'),
      ]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.min(100),
        Validators.max(2000),
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ]),
      dataPolicy: new FormControl(false, Validators.requiredTrue),
    });
  }

  excludeSpecificDni(dni: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === dni ? { excludedDni: true } : null;
    };
  }

  onDocumentNumberKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      'Delete',
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    } else if (
      this.loanForm.get('documentNumber').value.length >= 8 &&
      !['Backspace', 'Delete'].includes(event.key)
    ) {
      event.preventDefault();
    }
  }

  continue() {
    this.loading = true;
    const documentNumber = this.loanForm.get('documentNumber').value;
    const isValidDocument = this.allowDocuments.includes(documentNumber);
    const firstName = this.loanForm.get('fullName').value.split(" ")[0];
    const validationDocument: Record<string, () => void> = {
      true: () => {
        this.router.navigate(['prestamo/anuncio', { status: 'positive', firstName }]);
      },
      false: () => {
        this.router.navigate(['prestamo/anuncio', { status: 'negative', firstName }]);
      },
      default: () => {},
    };
    this.loading = false;
    (validationDocument[String(isValidDocument)] || validationDocument['default'])();
  }
}
