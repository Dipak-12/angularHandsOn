export class product{
  id:number;
  name:String;
  imgPath:String;
  category:String;
  Price:number;

  constructor(  id:number,
    name:String,
    imgPath:String,
    category:String,
    Price:number){
      this.id = id;
      this.name = name;
      this.imgPath = imgPath;
      this.category = category;
      this.Price = Price;
    }
}
