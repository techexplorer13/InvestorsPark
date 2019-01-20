import { Component, OnInit } from '@angular/core';
import { AllMutualFund } from 'src/app/services/allMutualFund.service';

@Component({
  selector: 'app-allmutualfund',
  templateUrl: './allmutualfund.component.html',
  styleUrls: ['./allmutualfund.component.css']
})
export class AllmutualfundComponent implements OnInit {

  constructor(private restservice:AllMutualFund) {
    alert('1');
    this.restservice.getProducts().subscribe(val => {
      console.log(val);
      alert(val);
    })
  }

  ngOnInit() {
    alert('2');
  }
}
