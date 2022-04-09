import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/shared/authentication-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
