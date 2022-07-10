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

  names: string[] = ["Javier", "Fernando", "Flores", "Cárdenas"];

  newname:string = "";

  products = [
    {
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Almost new bike',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Album collection',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'My books',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Dog\'s house',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Glasses',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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
  }

  //event for change name property
  onChangeInput(event: Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  //event for add name in names list
  addname(){
    this.names.push(this.newname);
    this.newname = "";
  }

  //event for delete in names list
  deleteItem(index: number){
    this.names.splice(index, 1);
  }
}
