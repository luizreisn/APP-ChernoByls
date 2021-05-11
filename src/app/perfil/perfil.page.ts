import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Dados, DadosService } from '../services/dados.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage{

  public usuario: Dados;

  constructor(private dadosService: DadosService,
              private alerta: AlertController,
              private toast: ToastController,
              private route: ActivatedRoute,) { 
    const id = +route.snapshot.paramMap.get('id');
    this.usuario = dadosService.getUsuarioId(id);
  }

  public async confirmaAtualizacao(){
    const alert = await this.alerta.create({
      header: 'Deseja mesmo atualizar esses dados?',
      message: 'Os dados antigos serão excluidos permanentemente.',
      buttons:[
        'Cancel',
      {
        text: 'Atualizar',
        handler: () => {
          console.log('Confima OK')
          this.atualizar()
        }
      }]
    })
    await alert.present()    
  }

  private atualizar(){
    this.dadosService.atualizarUsuario(this.usuario);
    this.toastAtualizado()
    console.log(this.usuario);
  }

  private async toastAtualizado(){
    const toast = await this.toast.create({
      color: 'primary',
      duration: 2000,
      message: 'Dados atualizados com sucesso'
    })
    await toast.present()    
  }

}
