import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SafeHtml } from '../../shared/pipes/safeHtml.pipe';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { JobListComponent } from '../job-list/job-list.component';


@NgModule({
  declarations: [HomePageComponent, SafeHtml, SearchPipe, JobListComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
