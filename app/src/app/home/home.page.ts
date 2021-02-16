import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdmobService } from '../service/admob/admob.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private platform: Platform, private admobService: AdmobService) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.admobService.bannerAd();
      }, 500);
    });
  }

  open(link) {
    window.open(link, '_self', 'location=no');
    // const browser = this.iab.create(link, '_system');
  }
}
