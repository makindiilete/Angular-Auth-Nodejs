import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { EventsComponent } from './Components/events/events.component';
import { SpecialEventsComponent } from './Components/special-events/special-events.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './Services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EventsService } from './Services/events.service';
import { AuthGuard } from './Services/auth.guard';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    AuthService,
    EventsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, // wat exactly r we providing
      useClass: TokenInterceptorService, // d interceptor service we want to provide
      multi: true, // so we can use multiple interceptors if required
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
