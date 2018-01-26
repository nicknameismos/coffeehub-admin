import { Component, OnInit, ViewChild, } from '@angular/core';
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
  private campimgAdding;
  private campaignData: any = {};
  private changeImage: boolean = false;

  constructor(private router: Router, private server: ServerConfig, private pubsub: PubSubService, private campaignService: CampaignService) {

    this.pubsub.$pub('loading', true);
  }

  ngOnInit() {
    this.initialize();
    this.initialize_campaignType();
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
    this.campaignData.status = false;
    $(this.modalCampaign.nativeElement).modal('show');
  }
  selectCampaignImg() {
    this.uploadCampaign.nativeElement.click();
  }

  onCampaignImgChange($event) {
    const fileBrowser = this.uploadCampaign.nativeElement;
    const reader = new FileReader();
    reader.readAsDataURL(fileBrowser.files[0]);
    if (fileBrowser.files.length > 0) {
      reader.onload = () => {
        this.campimgAdding = reader.result.replace(/\n/g, '');
        this.changeImage = true;
      };
    }
  }

  editCampaign(item) {
    console.log(item);
    this.CE_CAMPAIGN_ACTION = 'แก้ไข';
    let itemdata = JSON.parse(JSON.stringify(item));
    this.campaignData = itemdata;
    // this.campaignData.effectivedatestart = itemdata.effectivedatestart.toString().substring(0, 16);
    // this.campaignData.effectivedateend = itemdata.effectivedateend.toString().substring(0, 16);
    this.campimgAdding = item.image;
    $(this.modalCampaign.nativeElement).modal('show');
  }

  saveCampaign() {
    this.pubsub.$pub('loading', true);
    // console.log(this.campaignData);
    if (this.CE_CAMPAIGN_ACTION == 'เพิ่ม') {
      if (this.changeImage == true && this.campimgAdding) {
        this.campaignService.uploadImage(this.campimgAdding).subscribe((UpImg) => {
          console.log(UpImg);
          let sendCampaign = {
            name: this.campaignData.name,
            detail: this.campaignData.detail,
            coin_give: this.campaignData.coin_give,
            effectivedatestart: this.campaignData.effectivedatestart,
            effectivedateend: this.campaignData.effectivedateend,
            type: this.campaignData.type,
            status: this.campaignData.status,
            image: UpImg.imageURL,
            remark: this.campaignData.remark
          }
          console.log(sendCampaign);
          this.campaignService.postCampaign(sendCampaign).subscribe((data) => {
            this.changeImage = false;
            alert("ระบบทำการเพิ่มแคมเปญเรียบร้อยแล้วค่ะ");
            $(this.modalCampaign.nativeElement).modal('hide');
            this.initialize();
          }, (err) => {
            this.pubsub.$pub('loading', false);
            alert("ระบบไม่สามารถเพิ่มแคมเปญได้ค่ะ");
          })
        }, (err) => {
          this.pubsub.$pub('loading', false);
          alert("ระบบไม่สามารถทำการเพิ่มรูปภาพแคมเปญได้ค่ะ");
        })
      } else {
        alert("ERR");
      }

    } else if (this.CE_CAMPAIGN_ACTION == 'แก้ไข') {
      if (this.changeImage == false) {
        let sendCampaign = {
          _id: this.campaignData._id,
          name: this.campaignData.name,
          detail: this.campaignData.detail,
          coin_give: this.campaignData.coin_give,
          effectivedatestart: this.campaignData.effectivedatestart,
          effectivedateend: this.campaignData.effectivedateend,
          type: this.campaignData.type,
          status: this.campaignData.status,
          image: this.campaignData.image,
          remark: this.campaignData.remark
        }
        this.campaignService.putCampaign(sendCampaign).subscribe((data) => {
          alert("ระบบทำการแก้ไขแคมเปญเรียบร้อยแล้วค่ะ");
          $(this.modalCampaign.nativeElement).modal('hide');
          this.initialize();
        }, (err) => {
          this.pubsub.$pub('loading', false);
          alert("ระบบไม่สามารถแก้ไขแคมเปญได้ค่ะ");
        })
      } else if (this.changeImage == true) {
        this.campaignService.uploadImage(this.campimgAdding).subscribe((UpImg) => {
          let sendCampaign = {
            _id: this.campaignData._id,
            name: this.campaignData.name,
            detail: this.campaignData.detail,
            coin_give: this.campaignData.coin_give,
            effectivedatestart: this.campaignData.effectivedatestart,
            effectivedateend: this.campaignData.effectivedateend,
            type: this.campaignData.type,
            status: this.campaignData.status,
            image: UpImg.imageURL,
            remark: this.campaignData.remark
          }
          this.campaignService.putCampaign(sendCampaign).subscribe((data) => {
            this.changeImage = false;
            alert("ระบบทำการแก้ไขแคมเปญเรียบร้อยแล้วค่ะ");
            $(this.modalCampaign.nativeElement).modal('hide');
            this.initialize();
          }, (err) => {
            this.pubsub.$pub('loading', false);
            alert("ระบบไม่สามารถแก้ไขแคมเปญได้ค่ะ");
          })
        }, (err) => {
          this.pubsub.$pub('loading', false);
          alert("ระบบไม่สามารถทำการเพิ่มรูปภาพแคมเปญได้ค่ะ");
        })
      }
    }
  }

  cancelAddCampaign() {
    this.campaignData = {};
    this.campimgAdding = null;
    this.changeImage = false;
    $(this.modalCampaign.nativeElement).modal('hide');

  }

  deleteCampaign(item) {
    const cfDelete = confirm('คุณต้องการลบแคมเปญนี้ใช่หรือไม่');
    console.log(item);
    if (cfDelete) {
      this.pubsub.$pub('loading', true);
      this.campaignService.deleteCampaign(item).subscribe(data => {
        this.pubsub.$pub('loading', false);
        alert("ระบบได้ทำการลบแคมเปญเรียบร้อยแล้วค่ะ");
        this.cancelAddCampaign();
        this.pubsub.$pub('loading', true);
        this.initialize();
      }, err => {
        this.pubsub.$pub('loading', false);
        alert("ระบบไม่สามารภทำการลบแคมเปญได้ในขณะนี้ค่ะ กรุณาลองใหม่อีกครั้งค่ะ");
        console.log(err);
      });
    }
  }
}
