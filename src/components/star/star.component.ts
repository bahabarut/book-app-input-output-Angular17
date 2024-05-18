import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent implements OnInit {
  @Input({ required: true }) starNumber: string | number = "";

  ngOnInit(): void {
    this.starNumber = Math.ceil(Number(this.starNumber));
  }

}
