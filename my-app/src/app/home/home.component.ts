import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

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

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.getInfomation()
    .subscribe((res) => this.infomation = res.result);
  }
}
