import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;
  responseJson: string = null;
  permissions : string[] = [];
  constructor(public auth: AuthService, private api: ApiService) { }
  
  ngOnInit() {
    var p = this.auth.userProfile$.subscribe(
      profile => this.profileJson = JSON.stringify(profile, null, 2)
    );
    this.permissions = this.auth.permissions
    
  }
}
