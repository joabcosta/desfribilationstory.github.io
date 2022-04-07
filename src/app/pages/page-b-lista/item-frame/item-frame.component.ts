import { Component, Input, OnInit } from '@angular/core';
import { RestEquipament } from 'src/services/model/equipamento';

@Component({
  selector: 'app-item-frame',
  templateUrl: './item-frame.component.html',
  styleUrls: ['./item-frame.component.css']
})
export class ItemFrameComponent implements OnInit {
  @Input()
  equipamento!: RestEquipament;
  
  constructor() { }

  ngOnInit(): void {
  }

}
