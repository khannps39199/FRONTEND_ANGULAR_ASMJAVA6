import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
@Component({
  selector: 'loaddataintotemplate',
  standalone: true, // ✅ Bắt buộc có nếu là standalone component
  imports: [CommonModule], // ✅ Bổ sung CommonModule để dùng *ngFor
  templateUrl: './loadHeader.component.html',
  styleUrls: ['./loadHeader.component.css']
})
export class TryToLoadHeaderComponent {
  
}
