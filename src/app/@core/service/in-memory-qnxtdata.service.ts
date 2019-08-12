import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProviderData } from '../mock/provider-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryQNXTDataService implements InMemoryDbService {
  createDb() {
    const QNXTData : ProviderData[] = [
      {
        Source: 'QNXT',
        LastName: 'Lu',
        MiddleName: 'Null',
        FirstName: 'Kay',
        NPI: '779693442',
        DOB: '07/07/1996',
        BillingAddress: '607 Boston',
        Specialty: 'Brain Surgeon',
        ZipCode: 11212
    },
    {
        Source: 'QNXT',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Risheng',
        NPI: '779693441',
        DOB: '02/27/1996',
        BillingAddress: '520 NewYork',
        Specialty: 'Heart Surgeon',
        ZipCode: 11220
    },
    {
        Source: 'QNXT',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Kay',
        NPI: '779693440',
        DOB: '07/07/1997',
        BillingAddress: '521 NYBoston',
        Specialty: 'Lung Disease',
        ZipCode: 11213
    },
    {
        Source: 'QNXT',
        LastName: 'Tan',
        MiddleName: 'Null',
        FirstName: 'Lu',
        NPI: '779693443',
        DOB: '07/07/1998',
        BillingAddress: '121 Boston',
        Specialty: 'Internal Medician',
        ZipCode: 11211
    },
    {
        Source: 'QNXT',
        LastName: 'Lu',
        MiddleName: 'Tan',
        FirstName: 'Kay',
        NPI: '779693448',
        DOB: '07/07/1999',
        BillingAddress: 'The Centria 888',
        Specialty: 'Brain Surgeon',
        ZipCode: 11222
    },
    ];
    return {QNXTData};
  }
}

