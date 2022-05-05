import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { getSalaryState } from '../store/misc.selector';
import { MiscState } from '../store/misc.state';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  labels: string[] = ['Total of all Salaries (in Millions)', 'Min', 'Max', 'Average'];
  salaryState$: MiscState;
  @ViewChild('pieChart') myChart: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(getSalaryState).subscribe(state => {
      this.salaryState$ = state;
    });
  };

  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    setTimeout(() => {
      new Chart(this.ctx, {
        type: 'polarArea',
        data: {
          labels: this.labels,
          datasets: [
            {
              data: [this.salaryState$.totalSalaryCount / 1000000, this.salaryState$.minSalary, this.salaryState$.maxSalary, this.salaryState$.averageSalary],
              backgroundColor: [
                'rgb(255, 99, 132, 0.6)',
                'rgb(54, 162, 235, 0.6)',
                'rgb(255, 206, 86, 0.6)',
                'rgb(75, 192, 192, 0.6)',
              ],
            }]
        },
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
        },
      });
    }, 500);
  };
}
