﻿import { Component } from '@angular/core';

import { User } from './../_models';
import { UserService, AuthenticationService } from './../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent  {
    currentUser: User;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }
}