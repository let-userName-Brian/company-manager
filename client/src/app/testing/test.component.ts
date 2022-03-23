import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL } from '../env'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  departments: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getDept(){
    this.http.get(`${URL}/departments`).subscribe(data => {
      console.log(data);
      this.departments = data;
    });
  }
}
