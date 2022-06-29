import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // public is the dafault access
  // if we set the variable as private, the template can't access to it
  public name:string = 'Javier';
  public age:number = 20;

  img:string = 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR-2yegwDBmZY7_4LpHbuEDMBK5p1AZ6m42534LvT2Y-llG62ENo3gNmyoF0gNLgJD_'
}
