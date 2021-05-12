import { Injectable } from '@angular/core';

export interface Produto{
  id: string;
  categoria: string;
  nome: string;
  descricao;
  valor: number;
  favorito: boolean;
  imagem: string;
  condimentos: {
    nome: string;
    marcado: boolean;
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public produtos: Produto[] = [
    {
      id: 'xradiacao',
      categoria: 'lancheCarne',
      nome: 'X-Radiação',
      descricao: 'Hamburguer diretamente de chernobyl, radiação pura. Contém pão, hamburger bolvino, cheddar, maionese temperada, cebola caramelizada, bacon e nosso molho especial.',
      valor: 25.00,
      favorito: false,
      imagem: '/assets/img/xRadiacao.png',
      condimentos: [
        {nome: 'Sem Cheddar', marcado: false},
        {nome: 'Sem Maionese Verde', marcado: false},
        {nome: 'Sem Cebola Caramelizada', marcado: false},
        {nome: 'Sem Bacon', marcado: false},
        {nome: 'Sem Molho Especial', marcado: false}
      ]
    },{
      id: 'cherno&byls',
      categoria: 'lancheCarne',
      nome: 'Cherno & Byls´s',
      descricao: 'Como o proprio nome diz, nosso carro chefe, é um verdadeiro monstro. Contém pão de brioche, 2 hamburgers bolvinos, queijo suíço, onion rings, molho barbecue e maionese da casa.',
      valor: 30.00,
      favorito: false,
      imagem: '/assets/img/xRadiacao.png',
      condimentos: [
        {nome: 'Sem Queijo Suíço', marcado: false},
        {nome: 'Sem Onion Rings', marcado: false},
        {nome: 'Sem Molho Barbecue', marcado: false},
        {nome: 'Sem Maionese da Casa', marcado: false}
      ]
    },{
      id: 'celsio137',
      categoria: 'pratoCarne',
      nome: 'Celsio 137',
      descricao: 'Nosso monstro Brasileiro, verdadeiramente delicioso. Contém pão francês, hamburger de linguiça, vinagrete, batata palha e maionese temperada.',
      valor: 28.00,
      favorito: false,
      imagem: '/assets/img/xRadiacao.png',
      condimentos: [
        {nome: 'Sem Vinagrete', marcado: false},
        {nome: 'Sem Batata Palha', marcado: false},
        {nome: 'Sem Maionese Temperada', marcado: false}
      ]
    }
  ]

  constructor() { }

  public getProdutoId(id: String){
    return { ...this.produtos.find(p => p.id === id)}
  }

}
