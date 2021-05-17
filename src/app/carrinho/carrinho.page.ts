import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dados, DadosService } from '../services/dados.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage{

  public usuario: Dados;

  constructor(private dadosService: DadosService,
              route: ActivatedRoute){ 
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id); 
  }

}
