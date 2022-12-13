import { Component, OnInit } from '@angular/core';
import { Animateur } from '../model/animateur.model';
import { AnimateurService } from '../services/animateur.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-animateurs',
  templateUrl: './animateurs.component.html',
  styleUrls: ['./animateurs.component.css']
})

export class AnimateursComponent implements OnInit {
   animateurs : Animateur[];
  constructor(private animateurService: AnimateurService ,public authService: AuthService) {  

}


  ngOnInit(): void {
    
    this.chargerAnimateurs();
  }
  chargerAnimateurs(){
    this.animateurService.listeAnimateurs().subscribe(anims => {
      console.log(anims);
      this.animateurs = anims;
      });
  }
  supprimerAnimateur(a: Animateur){
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.animateurService.supprimerAnimateur(a.idAnimateur).subscribe(() => {
          console.log("animateur supprimé");
          this.chargerAnimateurs();     
        
  });
}

}
