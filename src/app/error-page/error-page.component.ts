import { ActivatedRoute, Data } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.errorMessage = data["message"];
    });
  }
}
