import { Injectable } from '@angular/core';
import{Blog} from './blog'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Category} from '../shared/category'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog:Blog[];
  cat:Category[];
  blogData: Blog=new Blog();
  formData=new Blog();
  constructor(private httpClient:HttpClient) {
   }

  
    
    getAllPost():Observable<any>{
      alert("");
      return this.httpClient.get(environment.apiUrl+"/api/blog");
    }
  


    delBlog(id:number)
    {
      alert("");
      return this.httpClient.delete(environment.apiUrl+"api/blog/"+id);
    }


    insertBlog(post:Blog):Observable<any>
  {
    alert(environment.apiUrl+"api/empc");
    return this.httpClient.post(environment.apiUrl+"/api/blog",post);
  }
    

    bindListPost(){
      this.httpClient.get(environment.apiUrl+'/api/blog')
      .toPromise().then(
        response=>{
          this.blog= response as Blog[]
          alert(this.blog);
        }
      )
    }


    bindListCat(){
      this.httpClient.get(environment.apiUrl+'/api/blogcat')
      .toPromise().then(
        response=>{
        this.cat=response as Category[];
          console.log(this.cat);
        }
      )
    }

}
