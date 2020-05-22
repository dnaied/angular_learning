import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: String = "No server created";
  serverName: String = "";
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server is created";
  }

  /* onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  } */
}
