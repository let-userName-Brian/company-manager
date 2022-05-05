import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { MiscComponent } from "./misc.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { MiscEffects } from "./store/misc.effects";
import { MiscReducer } from "./store/misc.reducer";
import { SALARY_STATE_NAME } from "./store/misc.selector";
import { TotalsSectionComponent } from "./totals-section/totals-section.component";
import { LineChartComponent } from './line-chart/line-chart.component';

const miscRoutes: Routes = [
  { path: "", component: MiscComponent }
];

@NgModule({
  declarations: [
    MiscComponent,
    BarChartComponent,
    PieChartComponent,
    TotalsSectionComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(miscRoutes),
    StoreModule.forFeature(SALARY_STATE_NAME, MiscReducer),
    EffectsModule.forFeature([MiscEffects]),
  ],
  providers: [],
})
export class MiscModule { }

