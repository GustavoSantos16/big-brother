import { Component } from '@angular/core';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  open(link) {
    window.open(link, '_self', 'location=no')
    // const browser = this.iab.create(link, '_system');
  }

}
