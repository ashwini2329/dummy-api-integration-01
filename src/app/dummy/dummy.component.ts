import { Component, OnInit } from '@angular/core';
import { DummyServiceService } from '../dummy-service.service';

interface Product {
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  public apiData: Product[] = [];

  constructor(private dummyService: DummyServiceService) {}

  ngOnInit(): void {
    this.dummyService.getDummyData().subscribe((data: any) => {
      this.apiData = data.products;
      console.log(`received API data = ${JSON.stringify(this.apiData)}`);
    });
  }
}
