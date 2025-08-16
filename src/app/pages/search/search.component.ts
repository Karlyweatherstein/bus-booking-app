import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, FormsModule, DatePipe, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  locations$: Observable<any[]> = new Observable<any[]>();
  busList: any[] = [];

  serachObj: any = {
    fromLocation: '',
    toLocation: '',
    travelDate: '',
  };

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locations$ = of();
  }

  onSearch() {
    console.log('searching....');
  }
}
