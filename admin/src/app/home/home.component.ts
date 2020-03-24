import { AuthenticationService } from '../modules/utility/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { CallTreeEntryService } from '../modules/utility/services/call-tree-entry.service';
import { OperationResult } from 'src/app/classes/OperationResult';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private callTreeEntryService: CallTreeEntryService) {
    /*
    this.callTreeEntryService.getAllCallTreeEntry().subscribe((res: OperationResult) => {
      console.log(res.success);
    });
    */
  }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    location.href = '../admin';
  }
}
