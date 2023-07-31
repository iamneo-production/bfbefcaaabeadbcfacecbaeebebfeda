import { Component,ElementRef, ViewChild ,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent {
  searchText:any;
  showAddFood:boolean=false;

  addName: any;
  addCalories: any;
  addimage: any;
  foodList:any=  [{ id: 1,"name":"Apple", "image":"data:image/jpeg;base64,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", "calories": 81,"qty":""}];
  todayFoodList:any=  [];

  addNewFoodShow() {
    this.showAddFood=true;
  }
  
  addFood(){
    this.showAddFood=false;
    const  product={
    id:this.foodList.length+1,
    name:this.addName,
    image:this.addimage,
    calories:this.addCalories };


    this.foodList.push(product);
    this.addName="";
    this.addimage="";
    this.addCalories="";
  }

  addQty(product1:any){

  var item= this.todayFoodList.filter(function (el:any) {
      return el.id == product1.id
  }
  );

  if(item.length== 0)
  {
    product1.qty=product1.qtyInput;
 
    this.todayFoodList.push(product1)
   
  }else{
    item[0].qty = parseInt(item[0].qty)+ parseInt(product1.qtyInput);
  }

  product1.qtyInput="";
}
}

interface product {
  id: number;
  name: string;
  image: string;
  calories: number;
  qty: number;
}