import { Component, OnInit } from '@angular/core';
import { Animateur } from '../model/animateur.model';
import { AnimateurService } from '../services/animateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tv} from "../model/tv.model";
@Component({
  selector: 'app-add-animateur',
  templateUrl: './add-animateur.component.html',
  styleUrls: ['./add-animateur.component.css']
})
export class AddAnimateurComponent implements OnInit {
newAnimateur =new Animateur();
newTv! : Tv;
newIdTv! : number;
tvs! : Tv[];

  constructor(private animateurService: AnimateurService,private router :Router) { }

ngOnInit(): void {
  this.animateurService.listeTvs().
  subscribe(tv => {console.log(tv);
  this.tvs = tv._embedded.tvs;
  }
  );

}

  addAnimateur(){
    
    this.newAnimateur.tv = this.tvs.find(cat => cat.idTv == this.newIdTv)!;
    this.animateurService.ajouterAnimateur(this.newAnimateur)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['animateurs']);
                      }); 
    }




}

