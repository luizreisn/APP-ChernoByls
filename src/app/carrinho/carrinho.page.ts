import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dados, DadosService } from '../services/dados.service';
import { Produto, ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage{

  public usuario: Dados;

  public produtos: Produto[] = this.produtosService.produtos;

  constructor(private dadosService: DadosService,
              private produtosService: ProdutosService,
              route: ActivatedRoute){ 
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id); 
  }

  public excluirDoCarrinho(produto: Produto){
    this.dadosService.excluirDoCarrinho(this.usuario.id, produto)
    console.log(this.usuario.carrinho)
  }

}
