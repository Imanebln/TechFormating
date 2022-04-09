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
@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor(private firestore: Firestore) {}
 
  // Get List
  getFormationList() {
    const notesRef = collection(this.firestore, 'formations');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Formation[]>;
  }

}