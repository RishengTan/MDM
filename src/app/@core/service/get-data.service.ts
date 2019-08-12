import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private LexisNexisUrl = 'api/LexisNexisData';
  private NPPESUrl = 'api/NPPESData';
  private EchoUrl = 'api/EchoData';
  private QNXTUrl = 'api/QNXTData';
  constructor( private http: HttpClient,) { 
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
