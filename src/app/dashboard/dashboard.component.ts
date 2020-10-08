import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from '../animations/animations';
import { SidenavService } from '../services/sidenav.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ onMainContentChange ]
})
export class DashboardComponent implements OnInit {
  public onSideNavChange: boolean;
  public linegraph_options;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  constructor(private _sidenavService: SidenavService) { 
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    this.lineGraph()
  }
  lineGraph() {

    this.linegraph_options = {
      color: ['#2b8bf4', '#2b8bf4', '#2b8bf4', '#2b8bf4',],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['12JUN', '14JUN', '16JUN', '18JUN', '20JUN', '22JUN', '24JUN'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '',
          position: 'left'
        }
      ],
      series: [
        {
          name: 'Sale',
          type: 'line',
          smooth: true,
          data: [10,20,30,40,40,60],
        }
      ]
    };
  }
}
