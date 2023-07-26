import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
 providedIn: 'root',
})
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
 new Recipe('B0001',
            'Đắc nhân tâm',
            'https://m.media-amazon.com/images/I/61YvLnnYfmL._AC_UF1000,1000_QL80_.jpg',
            '20',
            'Đắc nhân tâm, tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.'
 , 
 ),
 new Recipe('B0002', 
            'Người giả kim',
            'https://static.8cache.com/cover/o/eJzLyTDW1zULTa4wdYuyiA8I1A8zytT1cDIwzfDy1HeEgoC0bH1j78QU55DEcnMzRw-TwjwPf3MXT0en7NzMdJNMt8x033Rn53z9YgMAsFUYBA==/nha-gia-kim-cau-chuyen-mot-giac-mo.jpg',
            '30',
            'Nhà giả kim là cuốn sách nổi tiếng của tác giả Paulo Coelho và bán chạy nhất trong lịch sử. Cuốn sách kể về anh chàng chăn cừu Santiago và chuyến hành trình để nhận ra “Huyền thoại của bản thân” đã để lại những bài học quý giá và truyền cảm hứng cho biết bao con người trên toàn thế giới để sống với ước mơ của chính mình.'
 ,
 ),
 new Recipe('B0003',
            'Tội ác và hình phạt',
            'https://reviewmaydocsach.com/wp-content/uploads/2022/06/cover-78.jpg',
            '50',
            'Tội ác và hình phạt là một tiểu thuyết của nhà văn Nga Fyodor Mikhailovich Dostoyevsky. Tiểu thuyết này cùng với Anh em nhà Karamazov là hai tác phẩm nổi tiếng nhất của Dostoevsky. Tạp chí Times đã bình chọn Tội ác và hình phạt là một trong số những cuốn sách vĩ đại nhất mọi thời đại.'
 
 ),
 new Recipe('B0004',
            'Ngồi khóc trên cây',
            'https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg',
            '5',
            'Ngồi khóc trên cây đây là một tiểu thuyết dành cho thanh niên và thanh thiếu niên của nhà văn Nguyễn Nhật Ánh, xuất bản lần đầu tại Việt Nam vào ngày 27 tháng 6 năm 2013 bởi Nhà xuất bản Trẻ, với phần tranh minh họa do Đỗ Hoàng Tường thực hiện.'
 ),
 ];
 constructor(private slService: ShoppingListService) {}
 getRecipes() {
 return this.recipes;
 }
 getRecipe(index: number) {
 return this.recipes[index];
 }
 addIngredientsToShoppingList(ingredients: Ingredient[]) {
 this.slService.addIngredients(ingredients);
 }
 addRecipe(recipe: Recipe) {
 this.recipes.push(recipe);
 }
 updateRecipe(index: number, newRecipe: Recipe) {
 this.recipes[index] = newRecipe;
 }
 deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    }
   
}
