import { Component, OnInit ,Input} from '@angular/core';
import { SearchByFundHouse } from 'src/app/services/searchByFundHouse.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { mutualFundInfo } from 'src/app/entity/mutualfundInfo';

@Component({
  selector: 'app-mutual-fund-names',
  templateUrl: './mutual-fund-names.component.html',
  styleUrls: ['./mutual-fund-names.component.css','../allmutualfund.component.css']
})
export class MutualFundNamesComponent implements OnInit {
  
  private fundHouse:string;
  private listMutualFundInfo:Array<mutualFundInfo>;
  show:boolean=false;
  private matchMutualFund:Array<mutualFundInfo>;
  private schemeName:String;
  showSuggestionAvailableDropdown: boolean;
  
  constructor(private restService:SearchByFundHouse, private route: ActivatedRoute) { 
    
  }
  
  onKeySearch(searchtext:String){
    this.matchMutualFund=this.listMutualFundInfo.filter(response=> 
      response.SchemeName.toLowerCase().includes(searchtext.toLowerCase()));
      if(searchtext.length===0){
        this.showSuggestionAvailableDropdown=false;
      }
      else{
      this.showSuggestionAvailableDropdown=true;
      }
    
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.fundHouse = params.get('fundhouse');

    })
      
   this.restService.getFundNamesFromFundHouse(this.fundHouse).subscribe( 

    (response: Array<mutualFundInfo>) => {
      this.listMutualFundInfo = response;
      this.show=true;
    },
    error => {console.log(error);}
      );
  
}}
