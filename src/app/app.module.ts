import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyPolicyTabComponent } from './privacy-policy-tab/privacy-policy-tab.component';
import { EditorModule } from '@progress/kendo-angular-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AgreementDialogComponent } from './components/agreement-dialog/agreement-dialog.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { RelitixMessageComponent } from './components/relitix-message/relitix-message.component';
import { Task2Component } from './task2/task2.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    PrivacyPolicyTabComponent,
    AgreementDialogComponent,
    RelitixMessageComponent,
    Task2Component,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTabsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    AngularEditorModule,
    NzModalModule
     
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
