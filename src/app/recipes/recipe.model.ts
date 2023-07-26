import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public price: string;
    public imagePath: string;
    public about: string;

    constructor(name:string, decs:string, imagePath:string, price:string, about:string) {
        this.name = name;
        this.description = decs;
        this.price = price;
        this.imagePath = imagePath;
        this.about = about;
    }
}