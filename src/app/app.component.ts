import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'relitix-privacy-policy';

  ngOnInit(): void {
    const privacyAndPolicy = `Privacy Policy

  Effective Date: September 27, 2023
  
  Welcome to Dummy's Privacy Policy. Here's a brief overview:
  
  1. Information We Collect
  
  We collect personal and usage information.
  We use cookies for better service.
  2. How We Use Your Information
  
  To provide, improve, and secure our Services.
  We may send you updates with your consent.
  3. Disclosure
  
  We share data with trusted service providers when necessary.
  We may disclose information when required by law.
  4. Data Security
  
  We take measures to protect your data but cannot guarantee absolute security.
  5. Your Choices
  
  You can access, correct, or delete your data.
  Opt out of marketing communications anytime.
  6. Changes to this Policy
  
  We may update this policy and will notify you of material changes.
  7. Contact Us
  
  If you have questions or concerns, contact us at [contact@example.com].
  Thanks for trusting Dummy with your privacy.
  Privacy Policy

  Effective Date: September 27, 2023
  
  Welcome to Dummy's Privacy Policy. Here's a brief overview:
  
  1. Information We Collect
  
  We collect personal and usage information.
  We use cookies for better service.
  2. How We Use Your Information
  
  To provide, improve, and secure our Services.
  We may send you updates with your consent.
  3. Disclosure
  
  We share data with trusted service providers when necessary.
  We may disclose information when required by law.
  4. Data Security
  
  We take measures to protect your data but cannot guarantee absolute security.
  5. Your Choices
  
  You can access, correct, or delete your data.
  Opt out of marketing communications anytime.
  6. Changes to this Policy
  
  We may update this policy and will notify you of material changes.
  7. Contact Us
  
  If you have questions or concerns, contact us at [contact@example.com].
  Thanks for trusting Dummy with your privacy.`;
    localStorage.setItem('pnp', privacyAndPolicy);
  }

  getText() {
    return localStorage.getItem('pnp');
  }
  getUserAgreement() {
    return localStorage.getItem('userAgreement') === null;
  }

  closeOrCancel() {
    localStorage.setItem("userAgreement", JSON.stringify(false));
  }

  accept() {
    localStorage.setItem("userAgreement", JSON.stringify(true));
  }
}
