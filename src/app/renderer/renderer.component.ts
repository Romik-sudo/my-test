import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {
  @Input() _input:any;
  public isRed: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isRed = this._input <= 0;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('_input' in changes) {
      this.isRed = this._input <= 0;
    }
  }
}
