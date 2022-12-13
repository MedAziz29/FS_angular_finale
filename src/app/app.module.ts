import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateursComponent } from './animateurs/animateurs.component';
import { AddAnimateurComponent } from './add-animateur/add-animateur.component';
import { UpdateAnimateurComponent } from './update-animateur/update-animateur.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParTvComponent } from './recherche-par-tv/recherche-par-tv.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeTvsComponent } from './liste-tvs/liste-tvs.component';
import { UpdateTvsComponent } from './update-tvs/update-tvs.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AnimateursComponent,
    AddAnimateurComponent,
    UpdateAnimateurComponent,
    RechercheParTvComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeTvsComponent,
    UpdateTvsComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
