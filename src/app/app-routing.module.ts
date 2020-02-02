import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MypageComponent} from './mypage/mypage.component';

const routes: Routes = [
  {path: 'mypage', component: MypageComponent},
  {path: '', redirectTo: '/mypage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
