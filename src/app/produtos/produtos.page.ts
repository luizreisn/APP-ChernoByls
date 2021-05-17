import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dados, DadosService } from '../services/dados.service';
import { MenusEspService } from '../services/menus-esp.service';
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

  public quantidade = 1;

  public valorTotal: number;

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
    this.quantidade++;
    this.atualizarValor();
  }

  public retirar(){
    if(this.quantidade <= 1){
      return;
    }else{
      this.quantidade--;
      this.atualizarValor();
    }
  }

  public atualizarValor(){
    this.valorTotal = this.produto.valor * this.quantidade;
  }

  public adicionarProd(){
    console.log(this.produto, this.valorTotal, this.quantidade)
    this.quantidade = 1;
    this.atualizarValor();
  }


}

