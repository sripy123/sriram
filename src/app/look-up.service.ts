import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LookUpService {

  constructor(private _httpClient: HttpClient) { }

  getDistricts() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=district");
  }

  getReqTypes() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=reqtype");
  }

  getAssetTypes() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=assettype");    
  }

  getAssetNames() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=asset");    
  }

  
  getStates() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=state");    
  }

  getSchoolTypes() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=schooltype");    
  }
}
