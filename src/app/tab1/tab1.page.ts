import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  enablePane = true;
  constructor(private menuController: MenuController) {}
  ionViewWillEnter() {
    this.enablePane = true;
    this.menuController.enable(true, 'first');
  }
  ionViewWillLeave() {
    this.enablePane = false;
  }
}
