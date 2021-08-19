import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent implements OnInit {
  public strVal = true;
  public conditionalVal = "red"; 
  public colors = ["red", "green", "yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
