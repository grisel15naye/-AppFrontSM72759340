import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor (private router :Router,
    private route: ActivatedRoute,
  ){
  }
  irPosts(){
    this.router.navigate(["posts"], {relativeTo: this.route})
  }

  irUsers(){
    this.router.navigate(["users"], {relativeTo: this.route})
  }
}

