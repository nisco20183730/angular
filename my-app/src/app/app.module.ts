import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// HTTP クライアントのための import
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// 追加
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './base/base.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { CommonService } from './service/common.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material
import { MatIconModule,
          MatChipsModule,
          MatButtonModule,
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatListModule,
          MatSidenavModule,
          MatTabsModule,
          MatToolbarModule,
        } from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling'; 

@NgModule({
  declarations: [
    AppComponent,
    // 追加
    HomeComponent,
    BaseComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    ScrollDispatchModule,
    // Angular Material --------------------
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
