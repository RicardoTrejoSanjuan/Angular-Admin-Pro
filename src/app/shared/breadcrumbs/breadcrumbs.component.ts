import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {

    console.log(activateRoute.snapshot.children[0].data);

    this.tituloSubs$ = this.getArgumentosRuta()
    .subscribe((data: any) => {
      console.log(data);
      this.titulo = data.titulo;
      document.title = `AdminPro - ${data.titulo}`;
    });

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  public getArgumentosRuta(): any {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data ),
      );
  }

}
