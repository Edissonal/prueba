import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

 url='https://restcountries.com/v3.1/lang/spa';


  getusuarios(){
  
    return this.http.get(this.url);

  }

}
