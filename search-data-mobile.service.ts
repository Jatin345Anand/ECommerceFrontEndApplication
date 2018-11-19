import { Injectable } from '@angular/core';
import { Mobileproduct } from './mobileproduct';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SearchDataMobileService {
  public MobileProductList:Mobileproduct[];
  public isSearchMobileButtonClick:boolean
  constructor(private http:Http,private httpClient:HttpClient) {
     this.isSearchMobileButtonClick=false;
     this.MobileProductList=[];
  }
  DoAjaxByhttp():Promise<Mobileproduct[]>{
    var url:string = 'https://raw.githubusercontent.com/Jatin345Anand/Mobile-DataJSON/master/Mobile/Asus.json';
    return this.http.get(url).toPromise().then((response)=>{
      return response.json().asusmobile as Mobileproduct[];
  }).catch((error)=>{
    console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  });
  }
  DoAjaxByObservable():Observable<Mobileproduct[]>{
    const url = 'https://raw.githubusercontent.com/Jatin345Anand/Mobile-DataJSON/master/Mobile/Asus.json';
     console.log("Observable call..");
     return  this.httpClient.get<Mobileproduct[]>(url);
    
    }
  getData():string{


    return 'This is the data coming from the Service.......';
  }
  CallbyLoginRegister():void{
   console.log('Called Login register...');
   console.log('Current Status of Search Button Click ',this.isSearchMobileButtonClick);
   console.log('Mobile List is ',this.MobileProductList);
  }
  SetMobileProductList(MobileList):void{
    console.log('List in service ',MobileList);
     this.MobileProductList=MobileList;
     console.log('Service private list is ',this.MobileProductList);
  }
  GetMobileProductList():Mobileproduct[]{
    console.log("Now data list in service");
    return this.MobileProductList;
  }
}
