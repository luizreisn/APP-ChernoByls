import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Dados, DadosService } from '../services/dados.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage{

  public usuario: Dados;

  constructor(private dadosService: DadosService,
              private toast: ToastController,
              private nav: NavController,
              route: ActivatedRoute){ 
                
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
  }

  public confirmar(){
    this.dadosService.atualizarUsuario(this.usuario);
    this.confirmaAtualizacao();
    this.nav.back();
    console.log(this.usuario);
  }

  private async confirmaAtualizacao(){
    const toast = await this.toast.create({
      color: 'primary',
      duration: 1000,
      message: 'Endereço atualizado com sucesso!'
    })
    await toast.present();
  }

}
