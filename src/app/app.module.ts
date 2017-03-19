import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule }    from '@angular/http';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { StockDataService } from './stock-data.service';
import { StockChartModule } from '@progress/kendo-angular-charts';


//import 'hammerjs';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, ChartsModule,JsonpModule,StockChartModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ], 
    providers: [StockDataService]
})

export class AppModule { }
