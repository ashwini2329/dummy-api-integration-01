import { Component, OnInit } from '@angular/core';
import { DummyServiceService } from '../dummy-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DummyServiceService]
})
export class AboutComponent implements OnInit {
  public about = 'hello'
  constructor(private dummyService: DummyServiceService){}

  ngOnInit(): void {
      this.about = this.dummyService.getAbout();
  }
}
