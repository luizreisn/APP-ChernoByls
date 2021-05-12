import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dados, DadosService } from '../services/dados.service';
import { Produto, ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage {

  public produtos: Produto[] = this.produtosService.produtos;

  public produtosFavoritos = this.produtos;

  public usuario: Dados;

  constructor(private produtosService: ProdutosService,
              private dadosService: DadosService,
              route: ActivatedRoute) { 
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
  }

  public filtrarFavoritos(){
    this.produtosFavoritos =  this.produtos.filter(p => p.favorito === true);
    return this.produtosFavoritos;
  }

  public darFavorito(produto: Produto){
    this.produtosService.darFavorito(produto)
    console.log(produto)
  }

}
