import { AfterViewInit, Component, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-center-graph',
  templateUrl: './center-graph.component.html',
  styleUrls: ['./center-graph.component.sass']
})
export class CenterGraphComponent implements  AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('myChart') myChart: any;
  constructor() { }

  //loads the chart when the component is initialized
  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    Chart.defaults.interaction.mode = 'nearest';
    const labels = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];
    //set timeout seems to give the component enough time to inialize the data 
    setTimeout(() => {
      new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Employees',
            data: [1000, 1346, 932, 748],
            fill: true,
            backgroundColor: 'rgba(55, 81, 255, 0.1)',
            borderColor: 'rgb(55, 81, 255)',
            tension: 0.1
          },
          {
            label: 'Salary Increases',
            data: [1125, 1153, 1203, 1345],
            fill: true,
            borderColor: 'rgb(0, 128, 0)',
            backgroundColor: 'rgba(0, 128, 0, 0.1)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#9FA2B4'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#9FA2B4'
              }
            },
            y: {
              ticks: {
                color: '#9FA2B4'
              }
            }
          }
        }
      });
    }, 500);
  };
};
