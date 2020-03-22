import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Data} from "../../interfaces/data";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.authService.getProfile());
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      // console.log(this.user);
    },
      err => {
      console.log(err);
      return false;
      });
  }

}
