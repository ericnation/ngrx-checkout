import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@ngrx/router';

@Component({
  moduleId: module.id,
  selector: 'progress-nav',
  templateUrl: 'progress-nav.component.html',
  styleUrls: ['progress-nav.component.css']
})
export class ProgressNavComponent implements OnInit {
  @Input() checkoutProgress;
  constructor() {}

  ngOnInit() {
  }

}
