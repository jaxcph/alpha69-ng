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
    this.images.set('lush', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');
    // tslint:disable-next-line:max-line-length
    this.images.set('hush', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');
    // tslint:disable-next-line:max-line-length
    this.images.set('ambi', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');
    // tslint:disable-next-line:max-line-length
    this.images.set('domi', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');
    // tslint:disable-next-line:max-line-length
    this.images.set('osci', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');
    // tslint:disable-next-line:max-line-length
    this.images.set('nora', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');
    // tslint:disable-next-line:max-line-length
    this.images.set('max', 'https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Flovense-logo.png?alt=media&token=972dc95f-e83b-43c8-bab7-fb6d4903adff');

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
