import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DummyServiceService } from '../dummy-service.service';

@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.scss']
})
export class DataApiComponent implements OnInit {
  public commentaryList: any = [];

  constructor(private http: HttpClient, private dummyService: DummyServiceService) {}
  ngOnInit(): void {
    this.getRandomQuotes();
  }

  getRandomQuotes() {
    this.dummyService.getRandomQuotes()
      .subscribe((res: any) => {
        console.log(res);
        this.commentaryList = res.commentaryList;
      })
  }
}
