import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-privacy-policy-tab',
  templateUrl: './privacy-policy-tab.component.html',
  styleUrls: ['./privacy-policy-tab.component.scss']
})
export class PrivacyPolicyTabComponent {
  constructor(private pc: AppComponent) {
    if (localStorage.getItem('pnp') !== null) {
      this.privacyAndPolicy = localStorage.getItem('pnp') as string;
      this.htmlContent = localStorage.getItem('pnp') as string;
    }
  }
  status = "viewing";
  privacyAndPolicy = '';
  htmlContent = this.privacyAndPolicy;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '160px',
  }
  edit() {
    this.status = 'editing';
  }

  cancel() {
    this.status = 'viewing';
    this.htmlContent = this.privacyAndPolicy;
  }

  save() {
    this.privacyAndPolicy = this.htmlContent;
    this.status = 'viewing';
    if (this.htmlContent !== localStorage.getItem('pnp')) {
      localStorage.removeItem('userAgreement');
    }
    localStorage.setItem("pnp", this.privacyAndPolicy);
  }

  show() {
    console.log('show data', this.htmlContent);

  }
}
