import { Component, OnInit } from '@angular/core';
import { AllMutualFund } from 'src/app/services/allMutualFund.service';

@Component({
  selector: 'app-allmutualfund',
  templateUrl: './allmutualfund.component.html',
  styleUrls: ['./allmutualfund.component.css']
})
export class AllmutualfundComponent implements OnInit {

    mutualFundName:String[]=[]

  constructor(private restservice:AllMutualFund) {
    this.restservice.getProducts().subscribe(val => {
      this.mutualFundName=val;
    })
  }

  ngOnInit() {
  }
}
