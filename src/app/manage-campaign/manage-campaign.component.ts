import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from 'app/provider/server.config';
import { PubSubService } from 'angular2-pubsub';
import { CampaignService } from 'app/manage-campaign/manage-campaign.service';
declare let $: any;
@Component({
  selector: 'app-manage-campaign',
  templateUrl: './manage-campaign.component.html',
  styleUrls: ['./manage-campaign.component.scss']
})
export class ManageCampaignComponent implements OnInit {
  @ViewChild('modalCampaignType') modalCampaignType;
  @ViewChild('modalCampaign') modalCampaign;
  @ViewChild('uploadCampaign') uploadCampaign;

  private campaignTypeList: Array<any> = [];
  private campaignList: Array<any> = [];
  private CE_CAMPAIGN_ACTION: string = '';
  private campimgAdding: string = '';

  constructor(private router: Router, private server: ServerConfig, private pubsub: PubSubService, private campaignService: CampaignService) {

    this.pubsub.$pub('loading', true);
  }

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.campaignService.getCampaign().subscribe((data) => {
      this.pubsub.$pub('loading', false);
      this.campaignList = data;
      console.log(data);
    }, (err) => {
      this.pubsub.$pub('loading', false);
      alert("ระบบไม่สามารถทำการโหลดข้อมูลแคมเปญได้ค่ะ กรุณาลองใหม่อีกครั้ง");
    });
  }

  initialize_campaignType() {
    this.campaignService.getCampaignTypeList().subscribe((data) => {
      this.pubsub.$pub('loading', false);
      this.campaignTypeList = data;
      console.log(data);
    }, (err) => {
      this.pubsub.$pub('loading', false);
      alert("ระบบไม่สามารถทำการโหลดข้อมูลประเภทแคมเปญได้ค่ะ");
    });
  }


  campaignManage() {
    $(this.modalCampaignType.nativeElement).modal('show');
    this.pubsub.$pub('loading', true);
    this.initialize_campaignType();
  }

  addType(name) {
    this.pubsub.$pub('loading', true);
    let sendType = {
      name: name
    }
    this.campaignService.postCampaignType(sendType).subscribe((data) => {
      console.log(data);
      alert("ระบบได้ทำการเพิ่มประเภทแคมเปญเรียบร้อยแล้วค่ะ");
      this.initialize_campaignType();
    }, (err) => {
      this.pubsub.$pub('loading', false);
      alert("ระบบwม่สามารถเพิ่มประเภทแคมเปญได้ค่ะ");
    });

  }
  deleteCampType(Camp) {
    this.pubsub.$pub('loading', true);
    this.campaignService.deleteCampType(Camp).subscribe((data) => {

      alert("ระบบได้ทำการลบประเภทแคมเปญเรียบร้อยแล้วค่ะ");
      this.initialize_campaignType();
    }, (err) => {

    })
  }

  addCampaign() {
    this.CE_CAMPAIGN_ACTION = 'เพิ่ม';
    $(this.modalCampaign.nativeElement).modal('show');
  }
  selectCampaignImg() {
    this.uploadCampaign.nativeElement.click();
  }

  onCampaignImgChange($event){
    const fileBrowser = this.uploadCampaign.nativeElement;
    const reader = new FileReader();
    reader.readAsDataURL(fileBrowser.files[0]);
    if (fileBrowser.files.length > 0) {
      reader.onload = () => {
        this.campimgAdding = reader.result.replace(/\n/g, '');
      };
    }
  }
}
