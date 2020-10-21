import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {
  dish: Dish;

  constructor() { }

  ngOnInit(): void {
    this.dish = new Dish();
  }

  createDish(dishForm) {
    console.log(dishForm);
  }

  appear(parag_id) {
    let element = document.getElementById(parag_id);
    if (!element.classList.contains('appear')) {
      element.classList.add('appear');
    } else {
      element.classList.remove('appear');
    }
  }

}
