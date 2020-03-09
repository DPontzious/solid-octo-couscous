import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/userSettings'

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  orginalUserSettings: UserSettings = {
    name: "Danelle",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "no notes"
  };

  userSettings: UserSettings = { ...this.orginalUserSettings }

  constructor() { }

  ngOnInit() {
  }

}
