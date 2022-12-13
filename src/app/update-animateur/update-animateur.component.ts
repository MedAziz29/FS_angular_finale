import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimateurService } from '../services/animateur.service';
import { Animateur } from '../model/animateur.model';
import { Tv} from "../model/tv.model";
@Component({
  selector: 'app-update-animateur',
  templateUrl: './update-animateur.component.html',
  styleUrls: ['./update-animateur.component.scss']
})
export class UpdateAnimateurComponent implements OnInit {
  currentAnimateur = new Animateur();
  tvs! : Tv[];
updatedTvId! : number;

  constructor(private activatedRoute: ActivatedRoute,private router :Router,private animateurService: AnimateurService) { }

  ngOnInit(): void {
    this.animateurService.listeTvs().
subscribe(ts => {console.log(ts);
this.tvs = ts._embedded.tvs;
}
);
this.animateurService.consulterAnimateur(this.activatedRoute.snapshot.params['id']).
subscribe( anim =>{ this.currentAnimateur = anim;
this.updatedTvId = this.currentAnimateur.tv.idTv;
} ) ;



  }
  updateAnimateur()
{
  this.currentAnimateur.tv = this.tvs.
  find(ts => ts.idTv == this.updatedTvId)!;
         this.animateurService.updateAnimateur(this.currentAnimateur).subscribe(anim => {
      this.router.navigate(['animateurs']); }
      );
    
  
}


}
