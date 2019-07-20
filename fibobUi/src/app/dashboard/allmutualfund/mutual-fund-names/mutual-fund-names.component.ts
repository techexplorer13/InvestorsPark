import { Component, OnInit} from '@angular/core';
import { SearchByFundHouse } from 'src/app/services/searchByFundHouse.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mutualFundInfo } from 'src/app/entity/mutualfundInfo';
import {MatDialog} from '@angular/material/dialog';
import {SipregistrationformsComponent} from 'src/app/dashboard/forms/sipregistrationforms/sipregistrationforms.component';
import { sipRegistrationDetailsData} from 'src/app/dashboard/forms/sipregistrationforms/sipRegistartionDetailsData';


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
  private dynamicFilterAndAllMutualFund:Array<mutualFundInfo>;
  displayedColumns: string[] = ['SchemeName', 'NetAssetValue'];
  private schemeName:string;
  
  constructor(private restService:SearchByFundHouse, private route: ActivatedRoute,public dialog: MatDialog) { 
    
  }

  onKeySearch(searchtext:String){
    this.matchMutualFund=this.listMutualFundInfo.filter(response=> 
      response.SchemeName.toLowerCase().includes(searchtext.toLowerCase()));
      if(searchtext.length===0){
        this.dynamicFilterAndAllMutualFund=this.listMutualFundInfo
      }
      else{
      this.dynamicFilterAndAllMutualFund=this.matchMutualFund;
      }
    
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.fundHouse = params.get('fundhouse');

    })
      
   this.restService.getFundNamesFromFundHouse(this.fundHouse).subscribe( 

    (response: Array<mutualFundInfo>) => {
      this.listMutualFundInfo = response;
      this.dynamicFilterAndAllMutualFund=response;
      this.show=true;
    },
    error => {console.log(error);}
      );
  
}

openRegisterForm(index:number):void{
  let data=new sipRegistrationDetailsData();
  data.schemename=this.dynamicFilterAndAllMutualFund[index].SchemeName
  const dialogRef = this.dialog.open(SipregistrationformsComponent, {
    width: '500px',
    height:'500px',
    data: data
  });

}
}


