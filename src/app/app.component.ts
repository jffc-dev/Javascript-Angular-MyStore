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

  img:string = 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR-2yegwDBmZY7_4LpHbuEDMBK5p1AZ6m42534LvT2Y-llG62ENo3gNmyoF0gNLgJD_';

  btnDisabled:boolean = false;
  initialInput:string = 'Javier Flores';

  person = {
    name : "Javier",
    age: 20,
    img: 'https://netstorage-sportsbrief.akamaized.net/images/7325ee45ef6e709c.jpg?imwidth=900'
  }

  //event for toggle btnDisabled property
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  //event for increase age roperty
  increaseAge(){
    this.age++;
  }

  //evet for capture scroll event
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  //event for change name property
  onChangeInput(event: Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
}
