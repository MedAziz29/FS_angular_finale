import { Component, OnInit } from '@angular/core';
import { Animateur } from '../model/animateur.model';
import { Tv } from '../model/tv.model';
import { AnimateurService } from '../services/animateur.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  constructor(private animateurService: AnimateurService){ }
animateurs! : Animateur[];
nomAnimateur! : string;
allAnimateurs! : Animateur[];
searchTerm!: string;

  ngOnInit(): void {
    this.animateurService.listeAnimateurs().subscribe(anims => {
      console.log(anims);
      this.animateurs = anims;
      });
      
  }
  onKeyUp(filterText : string){
    this.animateurs = this.allAnimateurs.filter(item =>
    item.nomAnimateur.toLowerCase().includes(filterText));}
 /* rechercherAnims(){
    this.animateurService.rechercherParNom(this.nomAnimateur).
    subscribe(anims=> {
    this.animateurs = anims;
    console.log(anims)});
    }*/

}
