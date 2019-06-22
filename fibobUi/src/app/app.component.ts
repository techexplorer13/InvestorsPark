import { Component ,ViewChild} from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BannerComponent)
  private bannerComponent: BannerComponent;

  title = 'Financial Bob';

  
}
