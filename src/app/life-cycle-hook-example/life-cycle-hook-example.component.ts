import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-example',
  templateUrl: './life-cycle-hook-example.component.html',
  styleUrls: ['./life-cycle-hook-example.component.css']
})
export class LifeCycleHookExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
