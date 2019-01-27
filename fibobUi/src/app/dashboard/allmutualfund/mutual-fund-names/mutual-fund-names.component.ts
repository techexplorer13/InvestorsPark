import { Component, OnInit ,Input} from '@angular/core';
import { SearchByFundHouse } from 'src/app/services/searchByFundHouse.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-mutual-fund-names',
  templateUrl: './mutual-fund-names.component.html',
  styleUrls: ['./mutual-fund-names.component.css']
})
export class MutualFundNamesComponent implements OnInit {
  
  private fundHouse:string;
  private mutualFundInfo:Observable<any>[];

  constructor(private restService:SearchByFundHouse, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.fundHouse = params.get('fundhouse');

    })
      
    return this.restService.getFundNamesFromFundHouse(this.fundHouse).subscribe(val => {
        this.mutualFundInfo=val;
      });
  }
}
