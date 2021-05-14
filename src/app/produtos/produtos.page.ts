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

  constructor(private produtosService: ProdutosService,
              private dadosService: DadosService,
              route: ActivatedRoute) { 
    const produtoid = route.snapshot.paramMap.get('produtoid');
    this.produto = produtosService.getProdutoId(produtoid);
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
  }

  public favoritar(produto: Produto){
    this.dadosService.atualizarFavorito(produto, this.usuario.id)
  }

}
