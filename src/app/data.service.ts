import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  newKeyPair() {
    return this.http.get("http://localhost:3000/new/");
  }
}
