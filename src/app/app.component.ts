import { Component, OnInit, OnChanges, Input , SimpleChanges} from '@angular/core';
import { User } from './user';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {DocktalkService} from './docktalk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnChanges*/ {
  title = 'DocTalk Task';
  @Input() userQ: string;
  users: User[];

  user: User;

  constructor(
  	private docktalkService: DocktalkService,
  	private sanitizer: DomSanitizer)
  {

  }

  ngOnInit() {
  }

  valueChange(query: any){
  	//console.log(query.srcElement.value);
  	this.getAllUsers(query.srcElement.value);
  }

  getAllUsers(query: string){
    console.log('query: '+query);
    this.docktalkService.getUsers(query)
    .subscribe(response =>{
      this.users = response.items;
      console.log(response/* + '\n' + this.users*/);
    });
  }


  userValueChanged(newVal){
  	console.log(newVal);
  }

  userSelected(username: string){
    this.docktalkService.getUserFromUsername(username)
    .subscribe(response =>{
      this.user = response;
      console.log(response/* + '\n' + this.users*/);
    });
  }

  userAutocompleListFormatter = (data: any) => {
    let html = `<span>${data.login}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
