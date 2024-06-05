import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { TwittesComponent } from './component/twittes/twittes.component';
import { CurrentComponent } from './component/current/current.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'inscription', component: InscriptionComponent },
	{ path: 'connexion', component: ConnexionComponent },
	{ path: 'tweet', component: TwittesComponent },
	{ path: 'popo/:id', component: CurrentComponent }
];
