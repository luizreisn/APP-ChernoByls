import { Injectable } from '@angular/core';
import { Produto, ProdutosService } from './produtos.service';

export interface Dados{
  id: number;
  nome: string;
  telefone: number;
  cpf: number;
  nascimento: Date;
  sexo: string;
  email: string;
  senha: string;
  dadosEndereco:{
    cep: number;
    endereco: string;
    numero: number;
    complemento: string;
  };
  produtosFavoritos: string [];
  carrinho: Produto[];
}

@Injectable({
  providedIn: 'root'
})

export class DadosService {

  public usuarios: Dados[] = [];

  constructor() { }

  public getUsuarioId(id: number){
    return JSON.parse(JSON.stringify(this.usuarios.find(u => u.id === id)));
  }

  public cadastrarUsuario(usuarioNovo: Dados){
    usuarioNovo.id = 1 + Math.max(0, ...this.usuarios.map(u => u.id));
    this.usuarios.push(usuarioNovo);
  }

  public atualizarUsuario(usuarioAtualizado: Dados){
    const index = this.usuarios.findIndex(u => u.id === usuarioAtualizado.id);
    this.usuarios[index] = usuarioAtualizado;
  }

  public atualizarFavorito(produto: Produto, id: number){
    const usuario = this.usuarios.find(u => u.id === id);
    if(usuario.produtosFavoritos.find(p => p === produto.id)){
      const index = usuario.produtosFavoritos.findIndex(p => p === produto.id);
      usuario.produtosFavoritos.splice(index, 1)
      console.log('Tirar Favorito',usuario.produtosFavoritos)
    }else{
      usuario.produtosFavoritos.push(produto.id)
      console.log('Favorito', usuario.produtosFavoritos)
    }
  }

  public adicionarNoCarrinho(id: number, prod: Produto){
    const usuario = this.usuarios.find(u => u.id === id)
    usuario.carrinho.push(JSON.parse(JSON.stringify(prod)))
    console.log(usuario.carrinho)
  }

  public excluirDoCarrinho(id: number, prod: Produto){
    const usuario = this.usuarios.find(u => u.id === id);
    const index = usuario.carrinho.indexOf(prod);
    usuario.carrinho.splice(index, 1)
    console.log(usuario.carrinho)
  }

  public sair(id: number){
    const index = this.usuarios.findIndex(u => u.id === id);
    this.usuarios.splice(index, 1);
  }

}
