import { FormationService } from './../../shared/formation-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Formation } from 'src/shared/Formation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { doc, getDoc } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public selectedFormation: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private formationService: FormationService,
    public ngFireAuth: AngularFireAuth,
    public afStore: AngularFirestore
  ) { }

  selectedForm?: Formation;
  
  onSelect(formation: Formation): void {
  this.selectedForm = formation;
  this.alertController.create({
      header: 'Alert',
      subHeader: 'Confirmation',
      message: 'Do you want to enroll this course?',
      buttons: [
        
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Yes sure!',
          handler: (value) => {
            let data = {
              name: this.selectedForm.name,
              price: this.selectedForm.price
            }
            this.formationService.saveFormation(data)
            .then(
              res =>{
                this.router.navigate(['/summary',formation]);
                
              }
            )
            // this.router.navigate(['/summary',formation]);
            
          }
        }
      ]
    
  }).then(res => {
      res.present();
     });
  }
  // showAlert() {

  //   this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Confirmation',
  //     message: 'Do you want to enroll this course?',
  //     buttons:[
  //       {
  //         text: 'Cancel',
  //         handler: () => {
          
  //         }
  //       },
  //       {
  //         text: 'Yes Sure!',
  //         handler: () => {
  //           this.onSelect(this.selectedForm);
  //         }
  //       }
  //     ]

  //   }).then(res => {
  //     res.present();

  //   });

  // }

  
  ngOnInit() {
    this.selectedFormation = this.route.snapshot.params
  }

}
