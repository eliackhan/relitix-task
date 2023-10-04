import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-relitix-message',
  templateUrl: './relitix-message.component.html',
  styleUrls: ['./relitix-message.component.scss']
})
export class RelitixMessageComponent {
  status = "viewing";
  htmlContent = '';
  relitixMessage = '';
  performanceTypesTemp: any = {};
  performanceTypes = { 'agent': false, 'office': false, 'market': false };
  config: AngularEditorConfig = {
    editable: true,
    height: '160px',
  };

  edit() {
    this.htmlContent = this.relitixMessage;
    this.performanceTypesTemp = this.performanceTypes;
    this.status = 'editing';
  }

  save() {
    this.relitixMessage = this.htmlContent;
    this.performanceTypes = this.performanceTypesTemp;
    this.htmlContent = '';
    this.status = 'viewing';
    console.log("This . ", this.relitixMessage);
  }

  cancel() {
    this.htmlContent = '';
    this.performanceTypesTemp = { 'agent': false, 'office': false, 'market': false };
    this.status = 'viewing';
  }
}
