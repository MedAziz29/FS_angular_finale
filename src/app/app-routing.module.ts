import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateursComponent } from './animateurs/animateurs.component';
import { AddAnimateurComponent } from './add-animateur/add-animateur.component';
import { UpdateAnimateurComponent } from './update-animateur/update-animateur.component';
import { RechercheParTvComponent } from './recherche-par-tv/recherche-par-tv.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeTvsComponent } from './liste-tvs/liste-tvs.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AnimateurGuard } from './animateur.guard';

const routes: Routes = [

    {path: "animateurs", component : AnimateursComponent},
    {path: "add-animateur", component : AddAnimateurComponent,canActivate:[AnimateurGuard]},
    {path: "updateAnimateur/:id", component: UpdateAnimateurComponent},
    {path: "rechercheParTv", component : RechercheParTvComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    {path: "listeTvs", component : ListeTvsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},
    




    {path: "", redirectTo: "animateurs", pathMatch: "full" }

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
