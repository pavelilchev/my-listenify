import {NgModule} from "@angular/core"
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { MyChanelComponent } from './youtube/my.chanel.component';
import { PlaylistComponent } from './youtube/playlist.component';

export const ROUTES = [
    { path: 'user/register', component: RegisterComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/chanel', component: MyChanelComponent },
    { path: 'user/playlist/:id', component: PlaylistComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
    ],
    exports: [ RouterModule ]
})
export class RoutesModule { }