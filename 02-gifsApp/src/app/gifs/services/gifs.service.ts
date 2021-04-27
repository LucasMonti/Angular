import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = "7vMc055Mi5rV8hHVkoHjZwJmwVOPtYcT"
  private _historial: string[] = []
  public resultados: any[] = []

  get historial() {
    return [...this._historial]
  }
  constructor(private http: HttpClient) { }

  buscarGifs (query: string = '') {
    query = query.trim().toLowerCase()
    if (!this._historial.includes(query)) {
    this._historial.unshift(query)
      console.log(this._historial);
      this._historial = this._historial.slice(0, 9)
    }

    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=7vMc055Mi5rV8hHVkoHjZwJmwVOPtYcT&q=${query}&limit=10`)
      .subscribe( (resp : any) => {
        this.resultados = resp.data
        console.log(resp);
      })

  }
}
