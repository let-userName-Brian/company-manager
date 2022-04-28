import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ManagersComponent } from "./managers.component";
import { ManagerEffects } from "./store/managers.effects";
import { ManagerReducer } from "./store/managers.reducer";
import { MANAGER_STATE_NAME } from "./store/managers.selector";

const managerRoutes: Routes = [
  { path: "", component: ManagersComponent}
];

@NgModule({
  declarations: [
    ManagersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(managerRoutes),
    StoreModule.forFeature(MANAGER_STATE_NAME, ManagerReducer),
    EffectsModule.forFeature([ManagerEffects]),
  ]
})
export class ManagerModule { }