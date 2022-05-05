import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  constructor() { }
  @ViewChild('lineChart') myChart: any;

  //initializes the chart and sets the data
  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5],
            fill: true,
            borderColor: 'rgb(95, 99, 175)',
            backgroundColor: 'rgb(95, 99, 175, 0.3)'
          },
          {
            label: 'Expenses',
            data: [2, 29, 5, 2],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192, 0.2)'
          },
          {
            label: 'Profit',
            data: [5, 2, 3, 12],
            fill: true,
            borderColor: '#ff6384',
            backgroundColor: 'rgb(255,99,132, 0.4)'
          },
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
      }
    });
  }
};
