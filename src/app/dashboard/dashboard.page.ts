import { FormationService } from '../../shared/formation-service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from "src/shared/authentication-service";
import { Formation } from 'src/shared/Formation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  formations: Formation[] = [];

  constructor(
    public formationService: FormationService,
    public authService: AuthenticationService,
    public afStore: AngularFirestore,
    private cd: ChangeDetectorRef,
    private router: Router,
  ) {
    this.formationService.getFormationList().subscribe(res => {
      this.formations = res;
      this.cd.detectChanges();
      console.log(res);
    })
   }

   selectedFormation?: Formation;
  onSelect(formation: Formation): void {
  this.selectedFormation = formation;
  this.router.navigate(['/details',formation]);
  }
  

  //read Formations from firebase
  // getFormation() {
  //   return this.afStore.collection('idFormation').get();
  // }
  // Get List
  // getBookingList() {
  //   this.bookingListRef = this.db.list('/appointment');
  //   return this.bookingListRef;
  // }
  ngOnInit() {
   
  }
}