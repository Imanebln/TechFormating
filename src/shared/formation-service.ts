import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Formation } from './Formation';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from './authentication-service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class FormationService {

  formationListRef: AngularFireList<any>;

  constructor(private firestore: Firestore,
    public afs: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService) {}
 
  // Get List
  getFormationList() {
    const notesRef = collection(this.firestore, 'formations');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Formation[]>;
  }

  //save formation in database
  saveFormation(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = this.authService.userData;
      this.afs.collection('users').doc(currentUser.uid).collection('booking').add({
        name: value.name,
        price: value.price
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  private snapshotChangesSubscription: any;
  //get enrolled Formations
  getEnrolledFormations(){
    return new Promise<any>((resolve, reject) => {
      this.ngFireAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('users').doc(currentUser.uid).collection('booking').snapshotChanges();
        resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }
 

}