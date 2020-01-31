import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  sorcier = 'Azhim';
  bookPictureUrl = 'https://pbs.twimg.com/profile_images/791642012936200192/hOA2XMnZ_400x400.jpg';
  isAvailable = false;
  isValid = true;
  isImportant=false;

  constructor() {
    
   }

  ngOnInit() {
  }

}