import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements  AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('myChart') myChart: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Managers',
          data: [50, 42, 21, 12, 11, 10, 30, 10, 22],
          backgroundColor: 'rgb(95,99,175)',
          borderColor: 'rgb(25,167,233)',
          borderWidth: 1
        }, 
        {
          label: 'Employees',
          data: [10, 12, 11, 10, 30, 42, 50, 33, 21],
          backgroundColor: 'rgb(255,99,132)',
          borderColor: 'rgb(255,99,132)',
          borderWidth: 1
        }],
        labels: ['Marketing', 'Finance', 'HR', 'Production', 'Development', 'Quality Management', 'Sales', 'Research', 'Customer Service'],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#00000'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#00000'
            },
          },
          y: {
            ticks: {
              color: '#00000'
            }
          },
        }
      }
    });
  };

}
