import { Pipe, PipeTransform } from '@angular/core';
import { JobService } from '../services/job.service';

@Pipe({
    name: 'jobFilter'
})

export class SearchPipe implements PipeTransform {
    constructor(private jobService: JobService) {}
    transform(data: any, keywordSearch?: any, locationSearch?: any, experienceSearch?: any): any {
        if(!data)return null;
        if(!keywordSearch && !locationSearch && !experienceSearch)
            return data;
        // if(!inputValue)return data;

        let filteredData = data;
        if(keywordSearch) {
            filteredData = filteredData.filter((item) => {
                return JSON.stringify(item).toLowerCase().includes(keywordSearch.toLowerCase());
            });
        }
        if(locationSearch) {
            filteredData = filteredData.filter((item) => {
                return JSON.stringify(item.placeholders[2].label).toLowerCase().includes(locationSearch.toLowerCase());
            });
        }
        if(experienceSearch) {
            filteredData = filteredData.filter((item) => {
                return JSON.stringify(item.placeholders[0].label).toLowerCase().includes(experienceSearch.toLowerCase());
            });
        }
        if(filteredData && !filteredData.length) {
            setTimeout(()=> {
                this.jobService.commonEmitter.emit({type:'search',value:false});
            })
           
        }else {
            this.jobService.commonEmitter.emit({type:'search',value:true});
        }
        filteredData.sort(function (a, b) {
            let val1 = a['footerPlaceholderLabel'].split(' ')[0],
            val2 = b['footerPlaceholderLabel'].split(' ')[0];

            return (val1 - val2);
          });

        console.log(filteredData);
        return filteredData;
    }
}