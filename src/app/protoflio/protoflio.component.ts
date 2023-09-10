import { Component } from '@angular/core';

export interface Portfolio {
  id: number
  image: string
}

@Component({
  selector: 'app-protoflio',
  templateUrl: './protoflio.component.html',
  styleUrls: ['./protoflio.component.css']
})
export class ProtoflioComponent {


  data: Portfolio[] = [
    {
      "id": 1,
      "image": "assets/img/poert1.png"
    },
    {
      "id": 2,
      "image": "assets/img/port2.png"
    },
    {
      "id": 3,
      "image": "assets/img/port3.png"
    },
    {
      "id": 4,
      "image": "assets/img/poert1.png"
    },
    {
      "id": 5,
      "image": "assets/img/port2.png"
    },
    {
      "id": 6,
      "image": "assets/img/port3.png"
    }
  ]

  cardDetails:any = {}
  showModal(data:any): void{
    this.cardDetails = data
  }
}