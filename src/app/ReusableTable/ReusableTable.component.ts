import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
@Component({
  selector: 'app-reusable-table',
  standalone: true, // ✅ Bắt buộc có nếu là standalone component
  imports: [CommonModule], // ✅ Bổ sung CommonModule để dùng *ngFor
  templateUrl: './ReusableTable.component.html',
  styleUrls: ['./ReusableTable.component.css']
})
export class ReusableTableComponent {
  @Input() data: any[] = [];
  columns: string[] = []; // Danh sách cột sẽ tự động lấy từ JSON

  ngOnChanges(): void {
    if (this.data.length > 0) {
      this.columns = Object.keys(this.data[0]); // Lấy key từ object đầu tiên
    }
  }
}
