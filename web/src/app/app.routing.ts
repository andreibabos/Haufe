import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, HomeComponentY, HomeComponentZ } from './home';
import { Error404Component} from './errors/404.component'
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '/', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'homeY', component: HomeComponentY, canActivate: [AuthGuard] },
    { path: 'homeZ', component: HomeComponentZ, canActivate: [AuthGuard] },
    { path: '404', component: Error404Component },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    
    { path: '', redirectTo: '/', pathMatch: 'full'},
];

export const appRoutingModule = RouterModule.forRoot(routes);