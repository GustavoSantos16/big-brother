import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable()
export class AdmobService {
  constructor(private admobFree: AdMobFree, public platform: Platform) {}

  async bannerAd() {
    let idBanner = (await this.platform.is('ios'))
      ? 'ca-app-pub-5874389801857370/1276490241'
      : 'ca-app-pub-5874389801857370/7073302900';

    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      size: 'SMART_BANNER',
      id: idBanner,
    };

    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner
      .prepare()
      .then(() => {
        console.log('banner prepare');
      })
      .catch((e) => console.error(e));
  }
}
