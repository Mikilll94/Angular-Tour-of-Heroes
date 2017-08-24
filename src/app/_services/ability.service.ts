import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Ability } from "../_models/ability";

@Injectable()
export class AbilityService {
  private abilitiesUrl = 'api/abilities';  
  private headers = new Headers({'Content-Type': 'application/json'});  

  constructor(private http: Http) { }

  create(name: string): Promise<Ability> {
    return this.http
      .post(this.abilitiesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Ability)
      .catch(this.handleError);
  }

  getAbilities(): Promise<Ability[]> {
    return this.http.get(this.abilitiesUrl)
      .toPromise()
      .then(res => res.json().data as Ability[])
      .catch(this.handleError);
  }

  getAbility(id: number): Promise<Ability> {
    const url = `${this.abilitiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Ability)
      .catch(this.handleError);
  }

  update(ability: Ability): Promise<Ability> {
    const url = `${this.abilitiesUrl}/${ability.id}`;
    return this.http
      .put(url, JSON.stringify(ability), {headers: this.headers})
      .toPromise()
      .then(() => ability)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.abilitiesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}