import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tv } from '../model/tv.model';

@Component({
  selector: 'app-update-tvs',
  templateUrl: './update-tvs.component.html',
  styleUrls: ['./update-tvs.component.css']
})
export class UpdateTvsComponent implements OnInit {
  @Input()
  tv! : Tv;

  @Input()
  ajout!:boolean;

  @Output() 
  tvUpdated = new EventEmitter<Tv>();


  constructor() { }

  ngOnInit(): void {
    
  }

  saveCategorie(){
    this.tvUpdated.emit(this.tv);
  }


  modeAjout()
  {
    this.ajout=true;
    this.tv.idTv = 0;
    this.tv.nomTv="";
    this.tv.descriptionTv="";
  }
}