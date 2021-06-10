import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./../home-page/home-page.component.css']
})
export class JobListComponent implements OnInit {
  @Input() keywordSearch:string;
  @Input() locationSearch:string;
  @Input() experienceSearch:string;
  @Input() showNoMatchOnChecked:boolean;
  jobs: Job[] = [];
  showNoMatch: boolean = false;
  constructor(public jobService: JobService) { 
    this.jobService.commonEmitter.subscribe(data => {
      if(data.type === 'search' && !data.value) {
        this.showNoMatch = true;
      }
      if(data.type === 'search' && data.value) {
        this.showNoMatch = false;
      }

    })
  }

  ngOnInit(): void {
    this.jobService.getJobs().then(jobs => {
      this.jobs = jobs;
      console.log(this.jobs);
    });
  }

}
