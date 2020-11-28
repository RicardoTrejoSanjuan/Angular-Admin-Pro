import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // Ejemplo 'retornaObservable'
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs: ', valor),
    //   error => console.error('Error: ', error),
    //   () => console.info('Obs Terminado')
    // );

    // retornar intervalo simpre con MAP
    // this.retornarIntervalo().subscribe(console.log);

    this.intervalSubs = this.retornarIntervaloPar().subscribe(console.log);

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  public retornarIntervaloPar(): Observable<number> {
    return interval(100)
    .pipe(
      take(10),
      map(valor => valor + 1), // 0 => 1
      filter(valor => (valor % 2 === 0) ? true : false),
    );
  }

  public retornarIntervalo(): Observable<number> {
    const intervalo$ = interval(1000)
                        .pipe(
                          take(4),
                          map(valor => {
                            return valor + 1;
                            // console.log(valo);
                          })
                        );

    return intervalo$;
  }

  public retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llego al valor 2');
        }
      }, 1000);
    });
    
    return obs$;
  }

  ngOnInit(): void {
  }

}
