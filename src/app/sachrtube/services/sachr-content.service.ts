import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SachrContentService {

  private Key:string = 'tCVeLf0xa3XwHravJOoK94zlpUFZS0Rl';
  private url:string = 'api.giphy.com/v1/gifs'

  constructor(
    private actionsServices : HttpClient
  ) { }

  getContent (Query : string){

    if (Query.length < 0) {
      return
    }

    const addparams = new HttpParams()
    .set('apy_key', this.Key)
    .set('limit', 20)
    .set('q', Query)

    this.actionsServices.get(`${this.url}/search`, {params: addparams}).subscribe(results => {
      console.log(results);
    })
  }
}
