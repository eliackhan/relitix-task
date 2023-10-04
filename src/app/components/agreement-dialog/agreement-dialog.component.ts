import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agreement-dialog',
  templateUrl: './agreement-dialog.component.html',
  styleUrls: ['./agreement-dialog.component.scss']
})
export class AgreementDialogComponent {
  privacyAndPolicy = localStorage.getItem('pnp');
  closeOrCancel() {
    localStorage.setItem("userAgreement", JSON.stringify(false));
  }

  accept() {
    localStorage.setItem("userAgreement", JSON.stringify(true));
  }
}
