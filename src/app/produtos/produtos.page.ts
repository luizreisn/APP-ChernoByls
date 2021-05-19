import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dados, DadosService } from '../services/dados.service';
import { Produto, ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage {

  public produtos: Produto[] = this.produtosService.produtos;

  public usuario: Dados;

  public produto;

  constructor(private produtosService: ProdutosService,
              private dadosService: DadosService,
              route: ActivatedRoute) { 
    const produtoid = route.snapshot.paramMap.get('produtoid');
    this.produto = produtosService.getProdutoId(produtoid);
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
    this.atualizarValor();
  }

  public favoritar(produto: Produto){
    this.dadosService.atualizarFavorito(produto, this.usuario.id)
  }

  public adicionar(){
    this.produto.quantidade++;
    this.atualizarValor();
  }

  public retirar(){
    if(this.produto.quantidade <= 1){
      return;
    }else{
      this.produto.quantidade--;
      this.produto.atualizarValor();
    }
  }

  public atualizarValor(){
    this.produto.valorTotal = this.produto.valor * this.produto.quantidade;
  }

  public adicionarProd(){
    this.dadosService.adicionarNoCarrinho(this.usuario.id, this.produto)
    this.resetarProd()
  }

  public resetarProd(){
    this.produto.quantidade = 1
    this.atualizarValor()
    this.produto.condimentos.filter( condimento => {
      if(condimento.marcado === true){
        condimento.marcado = !condimento.marcado
      }
    });
    console.log(this.produto.condimentos)
  }


}

