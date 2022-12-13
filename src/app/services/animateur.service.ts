import { Injectable } from '@angular/core';
import { Animateur } from '../model/animateur.model';
import { Tv} from "../model/tv.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tvWrapper } from '../model/tvWrapper';
import { AuthService } from './auth.service';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AnimateurService {
  animateurs : Animateur[];
  apiURL: string = 'http://localhost:8083/animateurs/api';
  apiURLTv: string = 'http://localhost:8083/animateurs/tv';
  tvs : Tv[];
  



    /*this.tvs = [ {idTv : 1, nomTv : "Attessia",description:""},
{idTv : 2, nomTv : "elhiwar",description:""}];*/
constructor(private http : HttpClient, private authService : AuthService) {/* 
     this.animateurs = [{idAnimateur :1, nomAnimateur : "naoufel ouertani", dateConfirmation : new Date("01/04/2021") ,tv : {idTv : 1, nomTv : "attessia",descriptionTv:""}},
  {idAnimateur :2, nomAnimateur : "hedi zaiem", dateConfirmation : new Date("01/04/2022"),tv : {idTv :2 , nomTv : "elhiwar",descriptionTv:""}},
  {idAnimateur :3, nomAnimateur : "meriem belkadhi", dateConfirmation : new Date("11/10/2022"),tv : {idTv :3 , nomTv : "carthage+",descriptionTv:""}}
  
  ];*/
}
listeAnimateurs(): Observable<Animateur[]>{

    return this.http.get<Animateur[]>(this.apiURL+"/all");
   

  }
  ajouterAnimateur( anim: Animateur):Observable<Animateur>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Animateur>(this.apiURL, anim, {headers:httpHeaders});
    }
    supprimerAnimateur(id : number) {
      const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
}
consulterAnimateur(id: number): Observable<Animateur> {
const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Animateur>(url,{headers:httpHeaders});
}
updateAnimateur(prod :Animateur) : Observable<Animateur> {
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.put<Animateur>(this.apiURL, prod, {headers:httpHeaders});
}
listeTvs():Observable<tvWrapper>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.get<tvWrapper>(this.apiURLTv,{headers:httpHeaders});
  }
  
 
  

/*animateur! : Animateur;
consulterAnimateur(id:number): Animateur{
  this.animateur = this.animateurs.find(p => p.idAnimateur == id)!;
  return this.animateur;
  }*/
 
  
      rechercherParTv(idTv: number):Observable< Animateur[]> {
        const url = `${this.apiURL}/animtv/${idTv}`;
        return this.http.get<Animateur[]>(url);
        }
        rechercherParNom(nom: string):Observable< Animateur[]> {
const url = `${this.apiURL}/animsByName/${nom}`;
return this.http.get<Animateur[]>(url);
}
ajouterTv( tv: Tv):Observable<Tv>{
  return this.http.post<Tv>(this.apiURLTv, tv, httpOptions);
 }

 supprimerTv(id : number) {
  const url = `${this.apiURLTv}/${id}`;
  return this.http.delete(url, httpOptions);
  } 

}
