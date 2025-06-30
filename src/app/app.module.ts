import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component"; 
import { PieChartComponent } from "./components/pie-chart/pie-chart.component"; 
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module"; 
import { HomeComponent } from './components/home/home.component'; 
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BaseChartDirective } from "ng2-charts";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ 
    AppComponent, 
    PieChartComponent, 
    HomeComponent, 
  ],
  imports: [
    BrowserModule,
    BaseChartDirective,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule { }
