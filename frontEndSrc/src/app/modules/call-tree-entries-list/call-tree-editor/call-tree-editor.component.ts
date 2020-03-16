import { Component, Input, OnInit } from '@angular/core';
import { CallTree } from 'src/app/classes/CallTree';

@Component({
  selector: 'app-call-tree-editor',
  templateUrl: './call-tree-editor.component.html',
  styleUrls: ['./call-tree-editor.component.css']
})
export class CallTreeEditorComponent implements OnInit {
  @Input () callTree: CallTree;
  constructor() { }

  ngOnInit(): void {
  }

}
