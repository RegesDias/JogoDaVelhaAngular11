import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from '../shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor( private jdv :JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jdv.inicializar();
  }
  showInicio(): boolean {
    return this.jdv.showInicio
  }
  showFinal() :boolean{
    return this.jdv.showFinal;
  }
  showTabuleiro(): boolean{
    return this.jdv.showTabuleiro;
  }
  iniciarJogo(): void{
    this.jdv.iniciarJogo();
  }
  jogar(posX: number, posY: number): void{
    this.jdv.jogar(posX,posY);
  }
  exibirX(posX: number, posY: number): boolean{
    return this.jdv.exibirX(posX, posY);
  }
  exibirO(posX: number, posY: number): boolean{
    return this.jdv.exibirO(posX, posY);
  }
  exibirVitoria(posX: number, posY: number): boolean{
    return this.jdv.exibirVitoria(posX, posY);
  }
  novoJogo():void{
    this.jdv.novoJogo();
  }
  resultado(): number{
    return this.jdv.jogador;
  }

}
