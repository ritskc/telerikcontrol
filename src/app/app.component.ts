import { Component } from '@angular/core';

import { MarkerType } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-app',
    template: `
        <kendo-chart id="chart" renderAs="canvas" [categoryAxis]="{ categories: categories }">
            <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
            <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
            <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
            <kendo-chart-series>
                <kendo-chart-series-item *ngFor="let item of capital"
                    type="line" style="smooth" [data]="item.data" [name]="item.name" dashType ="dashDot">
					<kendo-chart-series-item-markers [type]="squareMarkerType">
          </kendo-chart-series-item-markers>
                </kendo-chart-series-item>
				<kendo-chart-series-item *ngFor="let item of customer"
                    type="line" style="smooth" [data]="item.data" [name]="item.name">
					<kendo-chart-series-item-markers [type]="circleMarkerType">
          </kendo-chart-series-item-markers>
                </kendo-chart-series-item>
				<kendo-chart-series-item *ngFor="let item of projected"
                    type="line" style="smooth" [data]="item.data" [name]="item.name">
					<kendo-chart-series-item-markers [type]="triangleMarkerType">
          </kendo-chart-series-item-markers>
                </kendo-chart-series-item>
				<kendo-chart-series-item *ngFor="let item of costOfCapital"
                    type="area" style="smooth" [data]="item.data" [name]="item.name" color="lightGray" opacity = "9" mousewheel? = "true">					>
					<kendo-chart-series-item-markers [type]="crossMarkerType">
          </kendo-chart-series-item-markers>
                </kendo-chart-series-item>
				 
            </kendo-chart-series>
        </kendo-chart>

		<button onclick="onSeriesClick();">Click me</button>

    `
})
export class AppComponent {
 private capital: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }];
  private customer: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }];
  private projected: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }];
   private costOfCapital: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }];
  private categories: any[] = [];

  private seriesData: number[] = [1, 2, 3, 5];
 
  public squareMarkerType: MarkerType = "square";
  public circleMarkerType: MarkerType = "circle";
  public triangleMarkerType: MarkerType = "triangle";
  public crossMarkerType: MarkerType = "cross";

    

	constructor() {
        this.capital = [ {
    name: "Capital",
    data: [11, 12, 13,]
  }];

  this.customer=[ {
    name: "Customer",
    data: [12, 10, 15, ]
  }];

  this.projected = [{
    name: "Projected",
    data: [, , 15, 17]
  }];

   this.costOfCapital = [{
    name: "Cost Of Capital",
    data: [12, 12, 12,]
  }];
   this.categories = ['Feb 2014', 'Feb 2015', 'Feb 2016', 'Feb 2017'];

   this.seriesData = [1, 2, 3, 5];

        // Inspect the resulting data structure in the console
        //console.log(JSON.stringify(this.series, null, 2));
    }

	
}


