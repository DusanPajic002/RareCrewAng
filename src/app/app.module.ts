import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component"; 
import { PieChartComponent } from "./components/pie-chart/pie-chart.component"; 
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module"; 
import { HomeComponent } from './components/home/home.component'; 
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ 
    AppComponent, 
    PieChartComponent, 
    HomeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule { }
