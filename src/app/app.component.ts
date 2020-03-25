import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  keypair = {};

  constructor(private dataSvc: DataService) {}

  generate() {
    this.dataSvc.newKeyPair().subscribe(keypair => {
      console.log(keypair);
      this.keypair = keypair;
    });
  }
}
