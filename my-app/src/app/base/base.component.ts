import { Component, OnInit } from '@angular/core';

export interface KouteiElement {
  koutei_no: string,
  koutei_name: string,
  keikaku_umu: string,
  jisseki_umu: string,
  status: string,
}

export interface KihonElement {
  kouji_no: string,
  fugou_1: string,
  fugou_2: string,
  renketu_umu: string,
  zaiban: string,
  kouji_status: string,
  hinmei: string,
  kouji_name: string,
  chuumon_moto: string,
  ikomi_date: string,
  nouki: string,
  kouji_end_date: string,
  comment: string,
  kouji_shikibetu_no: string,
  tenkai_shikibetu_no: string,
  order_koutei: KouteiElement[],
}

const KIHON_DATA: KihonElement[] = [
  {kouji_no:'XX00-0000',fugou_1:'001',fugou_2:'000',renketu_umu:'有',zaiban:'00X000000000/00X000000001',hinmei:'品名',kouji_name:'工事名称',chuumon_moto:'注文元',kouji_status:'T',ikomi_date:'2018/04/02',nouki:'2018/09/20',kouji_end_date:'',comment:'',kouji_shikibetu_no:'KJS00_00000',tenkai_shikibetu_no:'odr00_00000',
    order_koutei:[
      {koutei_no:'10',koutei_name:'工程10',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'20',koutei_name:'工程20',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'30',koutei_name:'工程30',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'40',koutei_name:'工程40',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'50',koutei_name:'工程50',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'60',koutei_name:'工程60',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'70',koutei_name:'工程70',keikaku_umu:null,jisseki_umu:null,status:null}
    ]
  },
  {kouji_no:'XX00-0002',fugou_1:'001',fugou_2:'000',renketu_umu:'有',zaiban:'00X000000000',hinmei:'品名',kouji_name:'工事名称',chuumon_moto:'注文元',kouji_status:'T',ikomi_date:'2018/04/02',nouki:'2018/09/20',kouji_end_date:'',comment:'',kouji_shikibetu_no:'KJS00_00000',tenkai_shikibetu_no:'odr00_00000',
    order_koutei:[
      {koutei_no:'10',koutei_name:'工程10',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'20',koutei_name:'工程20',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'30',koutei_name:'工程30',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'40',koutei_name:'工程40',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'50',koutei_name:'工程50',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'60',koutei_name:'工程60',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'70',koutei_name:'工程70',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'80',koutei_name:'工程80',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'90',koutei_name:'工程90',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'100',koutei_name:'工程100',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'110',koutei_name:'工程110',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'120',koutei_name:'工程120',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'130',koutei_name:'工程130',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'140',koutei_name:'工程140',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'150',koutei_name:'工程150',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'160',koutei_name:'工程160',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'170',koutei_name:'工程170',keikaku_umu:null,jisseki_umu:null,status:null}
    ]
  },
  {kouji_no:'XX00-0003',fugou_1:'001',fugou_2:'000',renketu_umu:'有',zaiban:'00X000000001',hinmei:'品名',kouji_name:'工事名称',chuumon_moto:'注文元',kouji_status:'T',ikomi_date:'2018/04/02',nouki:'2018/09/20',kouji_end_date:'',comment:'',kouji_shikibetu_no:'KJS00_00000',tenkai_shikibetu_no:'odr00_00000',
    order_koutei:[
      {koutei_no:'10',koutei_name:'工程10',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'20',koutei_name:'工程20',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'30',koutei_name:'工程30',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'40',koutei_name:'工程40',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'50',koutei_name:'工程50',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'60',koutei_name:'工程60',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'70',koutei_name:'工程70',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'80',koutei_name:'工程80',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'90',koutei_name:'工程90',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'100',koutei_name:'工程100',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'110',koutei_name:'工程110',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'120',koutei_name:'工程120',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'130',koutei_name:'工程130',keikaku_umu:null,jisseki_umu:null,status:null},
      {koutei_no:'140',koutei_name:'工程140',keikaku_umu:null,jisseki_umu:null,status:null},
    ]
  }
];

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  dataSource = KIHON_DATA;

  constructor() { }

  ngOnInit() {
  }

}
