import { Component, OnInit } from '@angular/core';
import { HttpRequest } from 'src/services/httpRest.component.service';

@Component({
  selector: 'app-page-b-lista',
  templateUrl: './page-b-lista.component.html',
  styleUrls: ['./page-b-lista.component.css']
})
export class PageBListaComponent implements OnInit {
  request: HttpRequest;
  equipamentosArray: any;

  constructor(request: HttpRequest) { 
    this.request = request;
  }

  ngOnInit(): void {
    this.equipamentosArray = this.request.requestGet().subscribe((
      data =>
      {
        this.equipamentosArray = data;
        console.log('hey');
        console.log(this.equipamentosArray);
      }
    ));
  }

  iteratorItens(n: number): Array<number>{
    return Array(n);
  }
}
