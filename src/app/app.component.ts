import { Component, OnInit } from '@angular/core';
import { ReusableTableComponent } from './ReusableTable/ReusableTable.component';
import { TryToLoadHeaderComponent } from './TryToLoadHeader/loadHeader.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Phải có
  imports: [TryToLoadHeaderComponent], // ✅ Import các standalone component khác
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('http://localhost:8080/getUser?page=0&size=5') // ✅ Gọi API
      .then(response => response.json()) // Chuyển dữ liệu thành JSON
      .then(data => {
        this.users = data; // Lưu vào biến users
      })
      .catch(error => console.error('Lỗi khi gọi API:', error));
  }
}
