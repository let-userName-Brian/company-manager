import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  labels: string[] = ['Total', 'Min', 'Max', 'Average'];
  data: any = {
    labels: this.labels,
    datasets: [
      {
        data: [100, 60, 110, 80],
        backgroundColor: [
          'rgb(255, 99, 132, 0.6)',
          'rgb(54, 162, 235, 0.6)',
          'rgb(255, 206, 86, 0.6)',
          'rgb(75, 192, 192, 0.6)',
        ],
      }]
    };
  @ViewChild('pieChart') myChart: any;
  constructor() { }

  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'polarArea',
      data: this.data,
      options: {
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        },
        layout: {

        },
      },
    });
  };

}
