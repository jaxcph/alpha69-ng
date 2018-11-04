import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LovenseToyCommand } from './lovense.model';

import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class LovenseService {

  private commands: Map<string, LovenseToyCommand[]>;
  private images: Map<string, string>;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {

    // the supported commands
    this.commands = new Map<string, LovenseToyCommand[]>();
    this.commands.set('edge', [ {action: 'Vibrate', value_min: 0, value_max: 20}, {action: 'Preset', value_min: 0, value_max: 3}]);
    this.commands.set('lush,', [ {action: 'Vibrate', value_min: 0, value_max: 20}, {action: 'Preset', value_min: 0, value_max: 3}]);
    this.commands.set('hush', [ {action: 'Vibrate', value_min: 0, value_max: 20}, {action: 'Preset', value_min: 0, value_max: 3}]);
    this.commands.set('ambi', [ {action: 'Vibrate', value_min: 0, value_max: 20}, {action: 'Preset', value_min: 0, value_max: 3}]);
    this.commands.set('domi', [ {action: 'Vibrate', value_min: 0, value_max: 20}, {action: 'Preset', value_min: 0, value_max: 3}]);
    this.commands.set('osci', [ {action: 'Vibrate', value_min: 0, value_max: 20}, {action: 'Preset', value_min: 0, value_max: 3}]);
    this.commands.set('nora', [
      {action: 'Vibrate', value_min: 0, value_max: 20},
      {action: 'RotateAntiClockwise', value_min: 0, value_max: 20},
      {action: 'RotateClockwise', value_min: 0, value_max: 20},
      {action: 'RotateChange', value_min: -1, value_max: -1}]);
    this.commands.set('max', [
        {action: 'Vibrate', value_min: 0, value_max: 20},
        {action: 'AirAuto', value_min: 0, value_max: 3},
        {action: 'AirIn', value_min: -1, value_max: -1},
        {action: 'AirOut', value_min: -1, value_max: -1}]);


    this.images = new Map<string, string>();
    // tslint:disable-next-line:max-line-length
    this.images.set('edge', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-edge.png?alt=media&token=b5bfb121-9256-4ebc-b315-77de642580ee');
    // tslint:disable-next-line:max-line-length
    this.images.set('lush', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-lush.png?alt=media&token=6891b882-f427-4756-96d9-c9f68976d363');
    // tslint:disable-next-line:max-line-length
    this.images.set('hush', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-hush.png?alt=media&token=bcd7102c-5aa2-4c6f-b7cb-eb697e76a995');
    // tslint:disable-next-line:max-line-length
    this.images.set('ambi', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-ambi.png?alt=media&token=821ed57d-7402-4f3e-937e-c74ec5c73cac');
    // tslint:disable-next-line:max-line-length
    this.images.set('domi', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-domi.png?alt=media&token=1987777a-b00a-4c69-b8f3-48ea743406b5');
    // tslint:disable-next-line:max-line-length
    this.images.set('osci', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-osci.png?alt=media&token=98619722-fc02-4309-9ab5-37ce7da52cc5');
    // tslint:disable-next-line:max-line-length
    this.images.set('nora', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-nora.png?alt=media&token=fecadde4-60fe-4771-885a-e10cca75829b');
    // tslint:disable-next-line:max-line-length
    this.images.set('max', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-max.png?alt=media&token=846f8907-7824-4a0e-a94c-7a2804d521db');

   }

   getToyCommands(toyModel: string) {
    return this.commands.get(toyModel);
   }

   getToyImage(toyModel: string) {
    return this.images.get(toyModel);
   }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getToys(): Observable<any> {
    const endpoint = 'https://api.lovense.com/api/lan/getToys';
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }


// https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
