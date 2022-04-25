import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { getDocs } from 'firebase/firestore';
import { AuthenticationService } from 'src/shared/authentication-service';
import { Formation } from 'src/shared/Formation';
import { FormationService } from 'src/shared/formation-service';
import { Resolve } from '@angular/router';
import { resolve } from 'dns';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-my-formations',
  templateUrl: './my-formations.page.html',
  styleUrls: ['./my-formations.page.scss'],
})
export class MyFormationsPage implements OnInit {

  private formationsCollection: AngularFirestoreCollection<Formation>;
  public formations: Observable<Formation[]>;
  public f: Formation[];

  constructor(
    public formationService: FormationService,
    public authService: AuthenticationService,
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
  ) { 
    // let currentUser = this.authService.getCurrentUser();
    this.getMyFormations().subscribe(res => {
      this.f = res;
      this.cd.detectChanges();
      console.log(res);
    })
   
  }

  refreshFormationsCollection(userId) {
    this.formationsCollection = this.afStore.collection('users').doc(userId).collection<Formation>('booking');
      this.formations = this.formationsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ... data};
        }))
      )
  }
  getMyFormations() {
    let currentUser = this.authService.getCurrentUser;
    if(this.authService.userData) {
      let user = this.authService.userData.uid;
    }
    if (currentUser) {
      this.refreshFormationsCollection(this.authService.userData.uid)
    }
    console.log(this.formations);
    return this.formations;
  }

  deleteFormation(formation){
    this.formationsCollection.doc(formation.id).delete();
    this.formations = this.formationsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ... data};
      }))
    )
  }

 
  ngOnInit() {
   
  }

}
