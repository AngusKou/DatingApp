import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Output() cancelReigister = new EventEmitter();
  message: any;

  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    //console.log(this.valuesFromHome);
  }

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("registered");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelReigister.emit(false);
    console.log("cancelled");
  }
}
