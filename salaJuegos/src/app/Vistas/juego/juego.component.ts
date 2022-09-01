import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  // template : es como el de jqery
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public usuario:Usuario = new Usuario();

  constructor() { 
  }

  ngOnInit(): void {

  }
}
