import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  page:number=1;
  filter="";
  constructor(public blogService : BlogService) { }

  ngOnInit(): void {
    alert("");
    this.blogService.bindListPost();
  }

  getBlogPost(){
    this.blogService.getAllPost().subscribe(
      response=>{
        console.log("as");
        console.log(response);
      },
      error=>{
        console.log("Error!!!" + error);
      }
    )
  }

  edit(id:number){
    alert(id);
  }

  delete(id:number)
  {
    if(confirm("Are U Sure..!!?")){
      this.blogService.delBlog(id).subscribe(
        response=>{
          this.blogService.bindListPost();
        },
        errror=>{
          console.log("Error");
        }
      )
    }
  }
}
