import { RouterModule, Routes } from '@angular/router';
import { AboutComponent,HomeComponent,ItemComponent } from './components/index.pages';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: ItemComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
