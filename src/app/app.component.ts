import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        setTimeout(function () {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }, 1000);
      }
    });
  }
}
