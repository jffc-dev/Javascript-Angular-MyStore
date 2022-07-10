import { Component } from '@angular/core';
import { Player } from './player.model';
import { Product } from './product.model'

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

  products:Product[] = [
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

  players: Player[] = [
    {
      name: 'Lionel Messi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
      birthdayDate: new Date(),
    },
    {
      name: 'Cristiano Ronaldo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
      birthdayDate: new Date(),
    },
    {
      name: 'Mohammed Salah',
      image:
        'https://s.hs-data.com/bilder/spieler/gross/173692.jpg',
      birthdayDate: new Date(),
    },
    {
      name: 'Luis Diaz',
      image:
        'https://strikers.futbol/__export/1657251014008/sites/strikers/img/2022/07/08/luisdiaz.jpg_1301049368.jpg',
      birthdayDate: new Date(),
    },
    {
      name: 'Luis Suarez',
      image:
        'https://s.hs-data.com/bilder/spieler/gross/43635.jpg?fallback=png',
      birthdayDate: new Date(),
    },
    {
      name: 'Ronaldinho',
      image:
        'https://www.fcbarcelona.com/photo-resources/2020/04/14/f6fa290e-c547-4b33-8390-6ad8d07e8720/RONALDINHO.png?width=600&height=820',
      birthdayDate: new Date(),
      retirementDate: new Date()
    },
  ];
  playersFiltered: Player[] = [];
  search: string = '';

  //event for search input change
  changeSearch(event: Event) {
    const element = event.target as HTMLInputElement;
    this.search = element.value;

    this.playersFiltered = this.players.filter((player) =>
      player.name.toLowerCase().includes(element.value.toLowerCase()) && element.value.length > 0
    );
  }
}
