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

    console.log(idBanner);

    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true, //,
      id: idBanner,
    };
    // android
    // ca-app-pub-5874389801857370/7073302900
    // ios
    // ca-app-pub-5874389801857370/1276490241
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner
      .prepare()
      .then(() => {
        console.log('banner prepare');
        // setTimeout(() => {
        //   this.admobFree.banner
        //     .show()
        //     .then(() => {
        //       console.log('banner show');
        //     })
        //     .catch((e) => console.error('show error', e));
        // }, 1000);

        // success
      })
      .catch((e) => console.error(e));
  }
}
