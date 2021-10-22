import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortUrlService } from '../short-url.service';
import { url } from '../modal';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  flag=0;
  currentdate = new Date(); 
  datetime =  this.currentdate.getDate() + "/"
                + (this.currentdate.getMonth()+1)  + "/" 
                + this.currentdate.getFullYear()
  short:string="";
  UrlObject:url={
    "longURL":"",
    "short":"",
    "count":0,
  }
  count=0
  constructor(private activeRoute: ActivatedRoute,private router:Router,private ShortUrlService:ShortUrlService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.short = paramsData.id;
      console.log(this.short);
      this.ShortUrlService.getAllURL().subscribe((data) => {
        console.log(data)
        data.forEach((url)=>{
          if(url.short===this.short)
          {
           // console.log(url.time)
            //console.log(url.id);
           // console.log(url.short);
          //  if(url.time.length==0){
          //   url.time.push({"datetime":this.datetime,"count":1})
          //  }  
               
               
            this.UrlObject={
              "longURL":url.longURL,
              "short":url.short,
              "count":url.count+1
            }
            this.ShortUrlService.updateUrlById(this.UrlObject,url.id).subscribe((data)=>{
              //console.log(data);
              this.ngOnInit();
             //window.location.href = this.UrlObject.longURL;
            })

          }
        })
        
      })
    })
  }

}
