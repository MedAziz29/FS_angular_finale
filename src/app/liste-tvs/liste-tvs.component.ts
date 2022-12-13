import { Component, OnInit } from '@angular/core';
import { Tv } from '../model/tv.model';
import { AnimateurService } from '../services/animateur.service';

@Component({
  selector: 'app-liste-tvs',
  templateUrl: './liste-tvs.component.html',
  styleUrls: ['./liste-tvs.component.css']
})
export class ListeTvsComponent implements OnInit {

    tvs! : Tv[];
    updatedTv:Tv = {"idTv":0,"nomTv":"","descriptionTv":""};

  ajout:boolean=true;

  constructor(private animateurService : AnimateurService) { }

  ngOnInit(): void {
    this.chargerTvs();
  }

  chargerTvs(){
    this.animateurService.listeTvs().
      subscribe(tvs => {this.tvs = tvs._embedded.tvs;
      console.log(tvs);
    });
  }

  updateTv(tv:Tv) {
    this.updatedTv=tv;
    this.ajout=false;  
  }
  TvUpdated(tv:Tv){
    console.log("tv updated event",tv);
    this.animateurService.ajouterTv(tv).subscribe( () =>  this.chargerTvs());
  }

  tvUpdated(tv:Tv){
    console.log("Tv updated event",tv);
    this.animateurService.ajouterTv(tv).subscribe( () =>  this.chargerTvs());
  }


  supprimerTv(tv : Tv) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
         this.animateurService.supprimerTv(tv.idTv).subscribe(() => {
          console.log("Tv supprimée");
          this.chargerTvs(); }  );
       }
  }
}