import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Titulo Grafica';
  @Input() labels: string[] = ['item 1', 'item 2', 'item 3'];
  @Input() data: [number[]] = [[33, 33, 33]];

  // Doughnut
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]
  // ];

  public colors: Color[] = [
    {backgroundColor: ['#9E120E', '#FF5800', '#FFB414']}
  ];

  public doughnutChartType: ChartType = 'doughnut';

}
