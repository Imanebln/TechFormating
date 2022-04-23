import { FormationService } from './../../shared/formation-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Formation } from 'src/shared/Formation';

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
    private formationService: FormationService
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
          handler: () => {
            this.router.navigate(['/summary',formation]);
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
