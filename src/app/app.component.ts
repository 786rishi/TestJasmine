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
/*   onChange(){
    return 'button clicked';
  }
 */
}


