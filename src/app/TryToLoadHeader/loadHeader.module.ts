import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  standalone: true, // ✅ Phải có để trở thành standalone component
  templateUrl: './loadHeader.component.html',
  styleUrls: ['./loadHeader.component.css']
})
export class ReusableTableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
}
