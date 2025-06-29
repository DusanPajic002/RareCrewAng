import { NgModule } from '@angular/core'; 
import { HomeComponent } from './components/home/home.component';   
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }