import { Component, OnInit } from '@angular/core';
import { AllMutualFund } from 'src/app/services/allMutualFund.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-allmutualfund',
  templateUrl: './allmutualfund.component.html',
  styleUrls: ['./allmutualfund.component.css'],
})
export class AllmutualfundComponent implements OnInit {

    mutualFundName:String[]=[]
    show:boolean=false;

  constructor(private restservice:AllMutualFund,private router: Router) {
    this.restservice.getProducts().subscribe(val => {
      this.mutualFundName=val;
      this.show=true;
    })
  }

  ngOnInit() {
  } 

  getallfunds(fundhouse: string) {
    this.router.navigate(['/mutualfundinfo', { fundhouse: fundhouse}]);
  }

}
