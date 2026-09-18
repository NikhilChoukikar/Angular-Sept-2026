import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '#first,.custClass',
  imports: [CommonModule],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {

  static count = 0;  // static variable

  // name: string = 'First Component';  //Instance variable
  
   name: string = '<span style="color:red">First Component</span>';  //Instance variable
 
  //  show(){
  //   let i =0;  //Local variable

  //   console.log(this.name);
  //  }

  names= ['Vishal', 'Rohit', 'Ramesh', 'Suresh', 'Mahesh'];  //Instance variable

  show(eve: any){
    debugger;

    let i =0;  //Local variable

     console.log(this.name);

  }
}
