import { User } from './../../shared/user';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/shared/authentication-service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  public selectedForm: any;
  user : User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService,
  ) { 
    
  }

  ngOnInit() {
    this.selectedForm = this.route.snapshot.params
  }

}
