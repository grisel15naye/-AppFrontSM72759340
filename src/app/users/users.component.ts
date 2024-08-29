import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MaterialModule } from '../angular-material/material/material.module';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => this.users = data);
  }
}