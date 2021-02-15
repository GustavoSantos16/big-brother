import { Component, OnInit } from '@angular/core';
import { AdmobService } from '../service/admob/admob.service';

@Component({
  selector: 'app-admob',
  templateUrl: './admob.page.html',
  styleUrls: ['./admob.page.scss'],
})
export class AdmobPage implements OnInit {
  constructor(private admobService: AdmobService) {}

  ngOnInit() {
    setTimeout(() => {
      this.admobService.BannerAd();
    }, 1000);
  }
}
