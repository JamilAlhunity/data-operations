import { Component } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataOperations';
  usr = [
    { id: 1, name: "Yaman", system: "Call Center" },
    { id: 4, name: "Talha", system: "Web Link" },
    { id: 5, name: "Maher", system: "Email" },
    { id: 2, name: "Omar", system: "Email" },
    { id: 3, name: "Ahmad", system: "Call Center" },
    { id: 5, name: "Maher", system: "Call Center" },
    { id: 7, name: "Khalid", system: "Web Link" },
    { id: 8, name: "Osama", system: "Web Link" },
    { id: 6, name: "Mahmoud", system: "Call Center" },
    { id: 2, name: "Omar", system: "Call Center" }
  ];


  subSet = [
    { id: 6, name: "Mahmoud", system: "Call Center" },
    { id: 1, name: "Yaman", system: "Call Center" },
    { id: 2, name: "Omar", system: "Call Center" }
  ];
  constructor() {

    const compareAll = (obj1: any, obj2: any) => {
      return obj1.id === obj2.id && obj1.name === obj2.name && obj1.system === obj2.system;
    }



    //  Remove subSet
    // solution 1
    // for (let i = 0; i < this.usr.length; i++) {
    //   for (let sub of this.subSet) {
    //     if (compareAll(this.usr[i], sub)) {
    //       this.usr.splice(i, 1);
    //     }
    //   }
    // }


    // solution 2 compare all
    // for (let obj1 of this.subSet) {
    //   let index = this.usr.findIndex(obj2 => compareAll(obj1, obj2));
    //   this.usr.splice(index, 1)
    // }
    // console.log(this.usr);


    // remove dublicate arr
    // const arr: any = [];
    // const uni = this.usr.filter(ele => {
    //   let isDup = arr.includes(ele.name);
    //   if (!isDup) {
    //     arr.push(ele.name);
    //     return true
    //   }
    //   return false

    // })
    // console.log(uni);




    // let newArr = [...new Map(this.usr.map((m: any) => [m.name, m])).values()]
    // console.log(newArr);
  }
}
