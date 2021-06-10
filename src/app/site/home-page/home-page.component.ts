import { Component, OnInit, NgModule, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { JobService } from '../../shared/services/job.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  jobs: Job[] = [];
  filteredList: any = [];
    keywordSearch:''
    locationSearch: ''
    experienceSearch: ''
  
  inputValue: any;
  fullTimeJobs: boolean = false;
  partTimeJobs: boolean = false;
  freelancerJobs: boolean = false;
  allJobs: boolean = false;
  showNoMatch: boolean = false;
  showNoMatchOnChecked: boolean = false;
  showAdvancedFilter: boolean = false;

  constructor(public jobService: JobService, public changeDetector: ChangeDetectorRef) { 
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  updateJobList() {
    if((!this.fullTimeJobs && !this.allJobs) && (this.partTimeJobs || this.freelancerJobs)) {
      this.showNoMatchOnChecked = true;
    }
    else
      this.showNoMatchOnChecked = false;
  }


}
