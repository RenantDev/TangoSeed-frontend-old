import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {StarterViewComponent} from './starterview.component';
import {LoginComponent} from './login.component';

import {PeityModule} from '../../components/charts/peity';
import {SparklineModule} from '../../components/charts/sparkline';

@NgModule({
    declarations: [
        StarterViewComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        PeityModule,
        SparklineModule
    ],
    providers: [],
    exports: [
        StarterViewComponent,
        LoginComponent
    ],
})

export class AppviewsModule {
}
