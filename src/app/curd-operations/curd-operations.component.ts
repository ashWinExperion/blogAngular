import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-curd-operations',
  templateUrl: './curd-operations.component.html',
  styleUrls: ['./curd-operations.component.scss']
})
export class CurdOperationsComponent implements OnInit {

  constructor(public blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.bindListCat();
    this.blogService.formData.CreatedDate=new Date();
  }

  insertPostRecord(form?:NgForm){
    this.blogService.insertBlog(form.value).subscribe((result)=>
      {
        alert("");
        console.log(result);
      }
      )
  }

  onSubmit(form:NgForm){
    console.log(form.value);

    let addId=this.blogService.formData.PostId;
    if(addId==0||addId==null)
    {
      this.insertPostRecord(form);
    }
    else
    {

    }
    //Insert or Update
  }



}
