import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderData } from '../mock/provider-data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private LexisNexisUrl = 'http://localhost:58078/api/goldenrecord?lastName=&middleName=&firstName=&NPI=&dob=&speciality=&billingAddress=&zipCode=';
  private NPPESUrl = '';
  private EchoUrl = '';
  private QNXTUrl = '';

  constructor(private http: HttpClient, ) {
  }

  searchbyNPI(NPI): Observable<ProviderData[]> {
    return this.http.get<ProviderData[]>(`http://localhost:58078/api/goldenrecord?lastName=&middleName=&firstName=&NPI=${NPI}&dob=&speciality=&billingAddress=&zipCode=`);
  }
  getLexisNexis(): Observable<ProviderData[]> {
    return this.http.get<ProviderData[]>(this.LexisNexisUrl)
  }

  getLexisNexisByLastName(LastName): Observable<ProviderData[]> {
    return this.http.get<ProviderData[]>(`http://localhost:58078/api/goldenrecord?lastName=${LastName}&middleName=&firstName=&NPI=&dob=&speciality=&billingAddress=&zipCode=`)
  }
  getLexisNexisByFirstName(FirstName): Observable<ProviderData[]> {
    return this.http.get<ProviderData[]>(`http://localhost:58078/api/goldenrecord?lastName=&middleName=&firstName=${FirstName}&NPI=&dob=&speciality=&billingAddress=&zipCode=`)
  }






  getQNXT() {
    return this.http.get(this.QNXTUrl)
  }
  getNPPES() {
    return this.http.get(this.NPPESUrl)
  }
  getEcho() {
    return this.http.get(this.EchoUrl)
  }
}
