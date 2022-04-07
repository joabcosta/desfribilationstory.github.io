import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageHistoryComponent } from './pages/page-history/page-history.component';
import { PageSaudeComponent } from './pages/page-saude/page-saude.component';

const routes : Routes = [
  {path:'',component:PageAComponent},
  {path:'home',component:PageBComponent},
  {path:'evolution',component:PageHistoryComponent},
  {path:'helthcare',component:PageSaudeComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
