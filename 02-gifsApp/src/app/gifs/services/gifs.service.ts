import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, SearchGifsResponse} from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = "7vMc055Mi5rV8hHVkoHjZwJmwVOPtYcT"
  private servicioUrl : string = 'http://api.giphy.com/v1/gifs'
  private _historial: string[] = []
  public resultados: Gif[] = []

  get historial() {
    return [...this._historial]
  }
  constructor(private http: HttpClient) {
      if(localStorage.getItem('historial')){
        this._historial = JSON.parse(localStorage.getItem('historial')!) || []
      }
      if(localStorage.getItem('images')){
        this.resultados = JSON.parse(localStorage.getItem('images')!) || []
      }
  }

  buscarGifs (query: string = '') {
    query = query.trim().toLowerCase()
    if (!this._historial.includes(query)) {
    this._historial.unshift(query)
      this._historial = this._historial.slice(0, 9)

      localStorage.setItem('historial',JSON.stringify(this._historial))


    }


    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe( (resp ) => {
        this.resultados = resp.data

        localStorage.setItem('images', JSON.stringify(this.resultados))

      })

  }
}
