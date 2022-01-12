import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { StoreService } from "../../../services/store.service";

@Component({
  selector: "register",
  templateUrl: "register.component.html",
  styleUrls: ["register.component.css"],
})
export class RegisterComponent {
  constructor(
    public userSvc: UserService,
    private router: Router,
    private storeSvc: StoreService
  ) {}

  data={email:null,password:null};

  register() {
    this.userSvc.signup(this.data).subscribe({
      next: (res) => {
        console.log(res);
        this.storeSvc.setUserData(res);
        this.router.navigate(["shop"]);
      },
      error: (err) => {
        console.log(err);
        alert("Error al registrarse !");
      },
    });
  }
}
