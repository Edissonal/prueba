import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  constructor(private usuariosService:UsuariosService) { }

  usuarios:any[] =[];

  ngOnInit(): void {
  
    this.listado();
  }


  listado(){
  
    this.usuariosService.getusuarios()
    .subscribe((res:any)=>{
      
      this.usuarios = res;
      console.log(this.usuarios);
    })

  }

}
