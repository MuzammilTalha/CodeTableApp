import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CodeTable } from '../../models/project';

@Component({
    selector: 'app-code-table-work-area',
    templateUrl: './code-table-work-area.component.html',
    styleUrls: ['./code-table-work-area.component.scss'],
    standalone: false
})
export class CodeTableWorkAreaComponent {
  displayedColumns: string[] = ['rowCount', 'tableName', 'newUpdateFlag', 'pk1', 'pk2', 'pk3'];
  codeTableItems: CodeTable[] = [
    {
      rowCount: 10,
      tableName: 'Table 1',
      newUpdateFlag: true,
      pk1: 'PK1-1',
      pk2: 'PK2-1',
      pk3: 'PK3-1'
    },
    {
      rowCount: 20,
      tableName: 'Table 2',
      newUpdateFlag: false,
      pk1: 'PK1-2',
      pk2: 'PK2-2',
      pk3: 'PK3-2'
    },
    {
      rowCount: 30,
      tableName: 'Table 3',
      newUpdateFlag: true,
      pk1: 'PK1-3',
      pk2: 'PK2-3',
      pk3: 'PK3-3'
    }
  ];

  dataSource = new MatTableDataSource<CodeTable>(this.codeTableItems);

}
