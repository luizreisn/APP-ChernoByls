import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dados, DadosService } from '../services/dados.service';
import { MenuEsp, MenusEspService } from '../services/menus-esp.service';
import { Produto, ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage{

  public menusEsp: MenuEsp[] = this.menusEspService.menusEsp;

  public produtos: Produto[] = this.produtosService.produtos;

  public produtosFiltrados = this.produtos;

  public usuario: Dados;

  public menu;

  constructor(private menusEspService: MenusEspService,
              private produtosService: ProdutosService,
              private dadosService: DadosService,
              route: ActivatedRoute){ 
    const menuid = route.snapshot.paramMap.get('menuid');
    this.menu = menusEspService.getMenusId(menuid);
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
  }

  public filtrarProdutos(categoria: String){
    this.produtosFiltrados = this.produtos.filter(p => p.categoria === categoria)
    return this.produtosFiltrados
  }

}
