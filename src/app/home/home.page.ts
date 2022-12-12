import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public messages: string ="";
  public isAvailable: boolean = true;
  public valueA: number =5;
  public valueB:number =7;

  constructor() {}

}
