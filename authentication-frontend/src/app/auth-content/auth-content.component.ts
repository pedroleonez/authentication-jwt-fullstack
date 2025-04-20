import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-content',
  imports: [CommonModule],
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {
  data: string[] = [];

  constructor(private readonly axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then(
      (response) => this.data = response.data
    );
  }
}
