import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { MyChanelComponent } from './youtube/my.chanel.component';
import { PlaylistComponent } from './youtube/playlist.component';

import { Requester } from './utils/requester';
import { Authenticator } from './utils/authenticator';
import { UserService } from './users/user.service';
import { YoutubeService } from './youtube/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MyChanelComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    Requester,
    UserService,
    Authenticator,
    YoutubeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
