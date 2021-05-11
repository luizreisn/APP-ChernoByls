import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController } from '@ionic/angular';
import { DadosService, Dados } from '../services/dados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  @ViewChild(IonSlides) slides: IonSlides;

  public novoUsuario: Dados = {
    id: 0,
    nome: '',
    telefone: null,
    cpf: null,
    nascimento: null,
    sexo: '',
    email: '',
    senha: '',
    dadosEndereco:{
      cep: null,
      endereco: '',
      numero: null,
      complemento: ''
    }
  }

  constructor(private dadosService: DadosService,
              private carregando: LoadingController,
              private alerta: AlertController,
              private rota: Router) { }

  public segmentChanged(event: any){
    if(event.detail.value == 'login'){
      this.slides.slidePrev();
    }else if(event.detail.value == 'cadastro'){
      this.slides.slideNext();
    }
  }

  public login(){
    this.dadosService.cadastrarUsuario(this.novoUsuario)
    this.carregar();
    console.log(this.novoUsuario);
  }

  public cadastrar(){
    this.dadosService.cadastrarUsuario(this.novoUsuario);
    this.carregar();
    console.log(this.novoUsuario);
  }

  private async carregar(){
    const loading = await this.carregando.create({
      message: 'Por favor aguarde ...',
      duration: 1000
    });
    await loading.present();
    this.rota.navigate(['home']);
  }

  public async alertaSenha(){
    const alert = await this.alerta.create({
      header: 'Digite o E-Mail cadastrado',
      message: 'Enviaremos um E-Mail para redefinir sua senha.',
      inputs: [{
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu E-Mail'
      }],
      buttons: [
        'Cancelar',
        {
          text: 'Confirmar',
          handler: (alertData) => {
            console.log('email:', alertData.email);
          }
        }
      ]
    });
    await alert.present();
  }

}
