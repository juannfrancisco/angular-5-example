import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { pipe } from 'rxjs/util/pipe';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { filter, map, retry, catchError } from 'rxjs/operators';




@Injectable()
export class ReactiveService {

  constructor() { }

  basicx(){
    const obs = new Observable<number>( subscribe =>{
      subscribe.next(1);
      subscribe.next(2);
      subscribe.next(3);
      subscribe.complete();
    });

    obs.pipe(
      map( (element:number) => {
        return element * element
      }),
      filter( (element:number) => {
        return element%2 == 0;
      })
    );

    obs.subscribe( {
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });    
  }

    stopwatchValue: number;
    stopwatchValue$: Observable<number>;

    start() {
      this.stopwatchValue$.subscribe(num =>
        this.stopwatchValue = num
      );
    }


  promesas(){

    const data = fromPromise( fetch('https://swapi.co/api/people/1/') );
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });

    
  
  }


  contador(){
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>
      console.log(`Han pasado ${n} segundos desde la subscripcion!`));
  }

  evento(){
    const el = document.getElementById('my-element');
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      if (evt.clientX < 40 && evt.clientY < 40) {
       subscription.unsubscribe();
      }
    });
  }


  mapFunc(){
    const nums = of(1, 2, 3);  
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(x => console.log(x));
  }
  

  geolocalizacion(){
    const locations = new Observable((observer) => {    
      const {next, error} = observer;
      let watchId;
      
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(next, error);
      } else {
        error('Geolocation not available');
      }

      return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
    });
    
    const locationsSubscription = locations.subscribe({
      next(position) { console.log('Current Position: ', position); },
      error(msg) { console.log('Error Getting Location: ', msg); }
    });
    
    // Stop listening for location after 10 seconds
    setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);
  }



  basicObserver(){
    
    const myObservable = of(1, 2, 3);
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    myObservable.subscribe(myObserver);
  }


  basicObserver2(){
    // This function runs when subscribe() is called
    function sequenceSubscriber(observer) {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {unsubscribe() {}};
    }

    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }


  multicasting(){
    
    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(observer=>{
      const seq = [1, 2, 3, 4, 5];
      let timeoutId;

      function doSequence(arr, idx) {
        timeoutId = setTimeout(() => {
          observer.next(arr[idx]);
          if (idx === arr.length - 1) {
            observer.complete();
          } else {
            doSequence(arr, idx+ 1);
          }
        }, 1000);
      }
    
      doSequence(seq, 0);
      return {unsubscribe() {
        clearTimeout(timeoutId);
      }};
    });
    
    sequence.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });

    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
  }


/**   
  pipeFunc(){

    const nums = of(1, 2, 3, 4, 5);  
    const squareOddVals = pipe(
      filter(n => n % 2),
      map(n => n * n)
    );

    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe(x => console.log(x));

  }


  pipeFunc(){
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );

    // Subscribe to get values
    squareOdd.subscribe(x => console.log(x));
  }


  retry(){
    const apiData = ajax('/api/data').pipe(
      retry(3), // Retry up to 3 times before failing
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );
    
    apiData.subscribe({
      next(x) { console.log('data: ', x); },
      error(err) { console.log('errors already caught... will not run'); }
    });
  }

  */

}
