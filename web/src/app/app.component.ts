import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

        // this for when a server is running
        // this.authenticationService.healthCheck().pipe(first()).subscribe(success => {
        //     if(!success){
        //         this.router.navigate(['/404']);
        //     }
        // });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}