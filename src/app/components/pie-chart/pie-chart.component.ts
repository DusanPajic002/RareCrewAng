import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core'; 
import { Chart, ChartData, ChartOptions, PieController, ArcElement, Tooltip, Legend } from 'chart.js'; 
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { User } from '../types/allTypes';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {
  @Input('users') users: User[] = [];
  totalUsersTime: number = 0;

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const dataset = tooltipItem.dataset;
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = Math.round((currentValue as number) / this.totalUsersTime * 100);
            return ` ${percentage}%`;
          }
        }
      },
      datalabels: {
        formatter: (value, ctx) => {
          const percentage = Math.round((value / this.totalUsersTime) * 100);
          return `${percentage}%`;
        },
        color: '#fff',
        font: {
          size: 16,
          weight: 'bold'
        },
      }
    }
  };

  constructor() { 
    Chart.register(PieController, ArcElement, Tooltip, Legend, ChartDataLabels);
  }

  ngOnChanges(changes: SimpleChanges): void { 
    if (changes['users'] && this.users?.length > 0) {
      this.updateChartData();
    }
  }

  private updateChartData(): void { 
    this.totalUsersTime = this.users.reduce((acc, user) => acc + user.Total_time, 0); 
  
    this.pieChartData = {
        labels: this.users.map((user: User) => user.Name),
        datasets: [{
          data: this.users.map((user: User)=> user.Total_time),
          backgroundColor: this.users.map(() => this.randomColor()),
          borderWidth: 0
        }]
    };
  }
   
  randomColor = (() => {  
    const randomInt = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return () => `hsl(${randomInt(0, 360)},${randomInt(42, 98)}%,${randomInt(40, 90)}%)`;
  })();
}