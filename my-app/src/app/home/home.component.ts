import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonService } from '../service/common.service';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { identifierName } from '@angular/compiler';

export interface UserElement {
  user_id: string;
  user_name: string;
  menu_info: MenuElement[];
}
export interface MenuElement {
  item_name;
  url;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  infomation: string[];

  userAgent = navigator.userAgent;

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.getInfomation()
    .subscribe((res) => this.infomation = res.result);
  }
}
