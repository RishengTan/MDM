import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private LexisNexisUrl = 'http://localhost:58078/api/goldenrecord';
  private NPPESUrl = '';
  private EchoUrl = '';
  private QNXTUrl = '';
  constructor( private http: HttpClient,) { 
  }

  searchbyNPI(NPI){
    return this.http.get('http://localhost:58078/api/goldenrecord?NPI=' + NPI);
  }
  getLexisNexis(){
    return this.http.get(this.LexisNexisUrl)
  }
  getQNXT(){
    return this.http.get(this.QNXTUrl)
  }
  getNPPES(){
    return this.http.get(this.NPPESUrl)
  }
  getEcho(){
    return this.http.get(this.EchoUrl)
  }
}
