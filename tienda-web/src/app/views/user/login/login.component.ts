import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "src/app/services/store.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent {
  constructor(
    public userSvc: UserService,
    private router: Router,
    private storeSvc: StoreService
  ) {}

  data={email:null,password:null};

  login() {
    this.userSvc.signin(this.data).subscribe({
      next: (res) => {
        console.log(res);
        this.storeSvc.setUserData(res);
        this.router.navigate(["shop"]);
      },
      error: (err) => {
        console.log(err);
        alert("Error al firmarse !");
      },
    });
  }
}
