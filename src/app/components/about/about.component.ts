import { Component } from '@angular/core';
import { InfoService } from '../../services/info/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent{

  constructor(public _is:InfoService) {

   }
}
