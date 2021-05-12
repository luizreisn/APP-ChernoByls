import { Injectable } from '@angular/core';

export interface MenuEsp{
  id: string;
  titulo: string;
  categorias:{
    id: string;
    titulo: string;
  }[]
}[]

@Injectable({
  providedIn: 'root'
})
export class MenusEspService {

  public menusEsp: MenuEsp[] = [
    {
      id: 'lanches',
      titulo: 'Lanches',
      categorias: [
        {
          id: 'lancheCarne',
          titulo: 'Lanches de Carne'
        },{
          id: 'lancheFrango',
          titulo: 'Lanches de Frango'
        },{
          id: 'lancheVegano',
          titulo: 'Lanches Veganos'
        }
      ] 
    },{
      id: 'comidas',
      titulo: 'Comidas',
      categorias: [
        {
          id: 'pratoCarne',
          titulo: 'Pratos com Carne'
        },{
          id: 'pratoFrango',
          titulo: 'Pratos com Frango'
        },{
          id: 'pratoVegano',
          titulo: 'Pratos Veganos'
        },{
          id: 'saladas',
          titulo: 'Saladas'
        }
      ]
    },{
      id: 'bebidas',
      titulo: 'Bebidas',
      categorias: [
        {
          id: 'refrigerantes',
          titulo: 'Refrigerantes'
        },{
          id: 'sucos',
          titulo: 'Sucos'
        },{
          id: 'alcoolicas',
          titulo: 'Bebidas Alcoolicas'
        }
      ]
    },{
      id: 'sobremesas',
      titulo: 'Sobremesas',
      categorias: [
        {
          id: 'bolos',
          titulo: 'Bolos'
        },{
          id: 'sorvetes',
          titulo: 'Sorvetes'
        },{
          id: 'milkShakes',
          titulo: 'MilkShakes'
        }
      ]
    },{
      id: 'novidades',
      titulo: 'Novidades',
      categorias: [

      ]
    },{
      id: 'promocoes',
      titulo: 'Promoções',
      categorias: [

      ]
    }
  ]

  constructor() { }

  public getMenusId(id: string){
    return { ...this.menusEsp.find(m => m.id === id)};
  }

}
