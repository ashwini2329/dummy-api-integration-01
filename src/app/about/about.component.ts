import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DummyServiceService } from '../dummy-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DummyServiceService]
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: NgForm;

  public about = 'hello';

  constructor(private dummyService: DummyServiceService) {}

  ngOnInit(): void {
    this.about = this.dummyService.getAbout();
  }

  ngAfterViewInit(): void {
    if (this.form) {
      this.form.valueChanges?.subscribe((value) => {
        console.log('Form value changed:', value);
      });
    }
  }

  onSubmit(formData: NgForm) {
    if (formData.invalid) {
      return;
    }
    const enteredEmail = formData.value.email;
    const enteredPassword = formData.value.password;
    console.log(enteredEmail, enteredPassword);

    formData.reset();
  }
}
