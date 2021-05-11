import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';
import { BotoesHomeService, Aviso, BotaoMenuEsp, OpcaoMenu } from '../services/botoes-home.service';
import { Dados, DadosService } from '../services/dados.service';
import { Produto, ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public usuario: Dados;

  public focar = 0;

  public produtos: Produto[] = this.produtosService.produtos;

  public produtosFiltrados = this.produtos;

  @ViewChild(IonSlides) slides: IonSlides;

  public slideOpts = {
    initialSlide: 0,
    loop: true
  }

  public avisos: Aviso[] = this.botaoHome.avisos;

  public botoesMenuEsp: BotaoMenuEsp[] = this.botaoHome.botoesMenuEsp;

  public opcoesMenu: OpcaoMenu[] = this.botaoHome.opcoesMenu;
  
  constructor(private dadosService: DadosService,
              private botaoHome: BotoesHomeService,
              private produtosService: ProdutosService,
              private route: ActivatedRoute,
              private alerta: AlertController,
              private rota: Router) {
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
  }

  public busca(ev: CustomEvent){
    let val= ev.detail.value;
    if(val && val.trim() !== ''){
      this.produtosFiltrados = this.produtos.filter(termo =>
        termo.nome.toLocaleLowerCase().indexOf(val.toLocaleLowerCase().trim()) > -1)
    }else{
      this.produtosFiltrados = this.produtos;
    }
  }

  public focado(){
    this.focar = 1;
  }
  public desfocado(){
    this.focar = 0;
  }

  public voltarSlide(){
    this.slides.slidePrev();
  }
  public avancarSlide(){
    this.slides.slideNext();
  }

  public async sair(){
    const alertaSair = await this.alerta.create({
      header: 'Deseja mesmo sair?',
      buttons: [{
        text: 'Cancelar'
      },
      {
        text: 'Sair',
        handler: () => {
          console.log('Confirma OK'),
          this.dadosService.sair(this.usuario.id),
          this.rota.navigate(['login'])
        }
      }]
    })
    await alertaSair.present();
  }

}
