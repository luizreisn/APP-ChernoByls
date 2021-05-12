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
  }
}

@Injectable({
  providedIn: 'root'
})

export class DadosService {

  public usuarios: Dados[] = [];

  constructor() { }

  public getUsuarioId(id: number){
    return { ...this.usuarios.find(u => u.id === id)};
  }

  public cadastrarUsuario(usuarioNovo: Dados){
    usuarioNovo.id = 1 + Math.max(0, ...this.usuarios.map(u => u.id));
    this.usuarios.push(usuarioNovo);
  }

  public atualizarUsuario(usuarioAtualizado: Dados){
    const index = this.usuarios.findIndex(u => u.id === usuarioAtualizado.id);
    this.usuarios[index] = usuarioAtualizado;
  }

  public sair(id: number){
    const index = this.usuarios.findIndex(u => u.id === id);
    this.usuarios.splice(index, 1);
  }

}
