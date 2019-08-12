import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProviderData } from '../mock/provider-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryLexisNexisDataService implements InMemoryDbService {
  createDb() {
    const LexisNexisData: ProviderData[] = [
      {
        Source: 'LexisNexis',
        LastName: 'Lu',
        MiddleName: 'Null',
        FirstName: 'Kay',
        NPI: '779693442',
        DOB: '07/07/1996',
        BillingAddress: '123 Boston',
        Specialty: 'Brain Surgeon',
        ZipCode: 11212
      },
      {
        Source: 'LexisNexis',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Risheng',
        NPI: '779693441',
        DOB: '02/27/1996',
        BillingAddress: '123 NewYork',
        Specialty: 'Heart Surgeon',
        ZipCode: 11220
      },
      {
        Source: 'LexisNexis',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Kay',
        NPI: '779693440',
        DOB: '07/07/1997',
        BillingAddress: '1234 NYBoston',
        Specialty: 'Lung Disease',
        ZipCode: 11213
      },
      {
        Source: 'LexisNexis',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Lu',
        NPI: '779693443',
        DOB: '07/07/1998',
        BillingAddress: '321 Boston',
        Specialty: 'Internal Medician',
        ZipCode: 11211
      },
      {
        Source: 'LexisNexis',
        LastName: 'Lu',
        MiddleName: 'Tan',
        FirstName: 'Kay',
        NPI: '779693448',
        DOB: '07/07/1999',
        BillingAddress: 'The Centria',
        Specialty: 'Brain Surgeon',
        ZipCode: 11222
      },
    ];
    return { LexisNexisData };


    const EchoData: ProviderData[] = [
      {
        Source: 'Echo',
        LastName: 'Lu',
        MiddleName: '',
        FirstName: 'KayY',
        NPI: '779693442',
        DOB: '07/07/1996',
        BillingAddress: '123 Boston',
        Specialty: 'Lung Disease',
        ZipCode: 11212
      },
      {
        Source: 'Echo',
        LastName: 'Tan',
        MiddleName: '',
        FirstName: 'Risheng',
        NPI: '779693441',
        DOB: '02/27/1996',
        BillingAddress: '123 NewYork',
        Specialty: 'Heart Surgeon',
        ZipCode: 11220
      },
      {
        Source: 'Echo',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Kay',
        NPI: '779693440',
        DOB: '07/07/1997',
        BillingAddress: '1234 NYBoston',
        Specialty: ' Brain Surgeon',
        ZipCode: 11213
      },
      {
        Source: 'Echo',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Lu',
        NPI: '779693443',
        DOB: '07/07/1998',
        BillingAddress: '321 Boston',
        Specialty: 'Internal Medician',
        ZipCode: 11211
      },
      {
        Source: 'Echo',
        LastName: 'Lu',
        MiddleName: 'Tan',
        FirstName: 'Kay',
        NPI: '779693448',
        DOB: '07/07/1999',
        BillingAddress: 'The Centria',
        Specialty: 'Internal Medician',
        ZipCode: 11222
      },
    ];
    return { EchoData };
  }
}
