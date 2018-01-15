import { Component, OnInit } from '@angular/core';
import { DiseasesService } from 'app/tables/table.service';

declare interface TableData {
    headerRow: string[];
    loader : boolean;

}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  providers : [DiseasesService]
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    private diseasesService : DiseasesService;
    private allDiseases : any;
    private loader : boolean;
    private dataRow : any;

  constructor(diseasesService : DiseasesService) {
   
      this.diseasesService = diseasesService;
      this.loader = false;
      
      this.diseasesService.getAllDiseases().subscribe(diseases => {
        this.allDiseases = diseases;
        console.log(this.allDiseases);
        this.dataRow = this.allDiseases;
        this.loader = true;
});

   }

  ngOnInit() {
     console.log('ngOnInit');
      this.tableData1 = {
          loader : this.loader,  
          headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary','Edit'],       
      };

     
     
  }

}
