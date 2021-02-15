import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable()
export class AdmobService {
  //Interstitial Ad's Configurations
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true,
    autoShow: false,
    id: 'ca-app-pub-5874389801857370/7073302900',
  };

  constructor(private admobFree: AdMobFree, public platform: Platform) {}

  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true, //,
      id: 'ca-app-pub-5874389801857370/7073302900',
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
        this.admobFree.banner
          .show()
          .then(() => {
            console.log('banner show');
          })
          .catch((e) => console.error('show error', e));

        // success
      })
      .catch((e) => console.error(e));
  }
}
