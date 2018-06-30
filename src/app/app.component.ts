import { Component, ViewChild, ElementRef } from '@angular/core';
import {D3SeatingChart} from 'd3-seating-chart'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('x') svg;
  svgContent:string;
  private d3sc

  

  title = 'app';

  ngAfterViewInit() {
    var svgDoc = this.svg.nativeElement;
    this.svgContent = svgDoc.outerHTML;
    this.d3sc = D3SeatingChart.attach(svgDoc);

  }

  goToBoard(){
    this.d3sc.goToBoard();
  }

  selectSeat(element){
    console.log(element)
  }
}


