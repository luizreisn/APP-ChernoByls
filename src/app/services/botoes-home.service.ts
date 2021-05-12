import { Injectable } from '@angular/core';

export interface Aviso{
  id: string;
  nome: string;
  img: string;
  cor: string;
}

export interface BotaoMenuEsp{
  id: string;
  nome: string;
  img: string;
}

export interface OpcaoMenu{
  id: string;
  nome: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})

export class BotoesHomeService {

  public avisos: Aviso[]=[
    {
      id: 'promocoes',
      nome: 'Promoções',
      img: '/assets/img/promocaoTexto.png',
      cor: 'warning'
    },{
      id: 'lanches',
      nome: 'Lanches',
      img: '/assets/img/lanches.png',
      cor: 'success'
    },{
      id: 'xradiacao',
      nome: 'Novo Lanche',
      img: '/assets/img/xRadiacao.png',
      cor: 'danger'
    }
  ]

  public botoesMenuEsp: BotaoMenuEsp[] = [
    {
      id: 'lanches',
      nome: 'Lanches',
      img: '/assets/img/lanches.png'
    },{
      id: 'comidas',
      nome: 'Comidas',
      img: '/assets/img/comidas.png'
    },{
      id: 'bebidas',
      nome: 'Bebidas',
      img: '/assets/img/bebidas.png'
    },{
      id: 'sobremesas',
      nome: 'Sobremesas',
      img: '/assets/img/sobremesas.png'
    },{
      id: 'novidades',
      nome: 'Novidades',
      img: '/assets/img/novidades.png'
    },{
      id: 'promocoes',
      nome: 'Promoções',
      img: '/assets/img/promocoes.png'
    }
  ]

  public opcoesMenu: OpcaoMenu[] = [
    {
      id: 'perfil',
      nome: 'Perfil',
      icon: 'person-circle-outline'
    },{
      id: 'perfil',
      nome: 'Pedidos em Andamento',
      icon: 'bicycle-outline'
    },{
      id: 'perfil',
      nome: 'Pedidos Anteriores',
      icon: 'clipboard-outline'
    },{
      id: 'favoritos',
      nome: 'Favoritos',
      icon: 'heart'
    },{
      id: 'perfil',
      nome: 'Cupons',
      icon: 'wallet-outline'
    },{
      id: 'perfil',
      nome: 'Formas de Pagamento',
      icon: 'cash-outline'
    }
  ]

  constructor() { }
}
