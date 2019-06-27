import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testJasmine';


  test() : string {
    return "test";
  }
  onChange(){
    console.log('clicked');
    return 'button clicked';
  }

}


