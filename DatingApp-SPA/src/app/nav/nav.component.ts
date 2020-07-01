import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    //console.log(this.model);
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log("login ok");
      },
      (error) => {
        console.log("login failed");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("token");
    console.log("logged out");
  }
}
