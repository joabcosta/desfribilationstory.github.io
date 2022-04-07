import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpRequest
{
    private url = 'http://localhost:3000/equipamentos';
    
    httpOptions={
        Headers: new HttpHeaders({'content-type' : 'application/json' })
    }

    constructor(private rest : HttpClient){}

    requestGet(){
        return this.rest.get(this.url);
    }
}