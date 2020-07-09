import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

interface Page {
  page: number;
  pageSize: number;
  totalElements: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  article: Article[];

  constructor(private click: HttpClient) {
  }

  getHello(): string {
    console.log('server');
    return 'hello world';
  }

  getArticleList(): any {
    return this.click.get('http://localhost:8866/posts/showList');
  }

  getArticleInfo(id: string): any {
    const params = new HttpParams().set('id', id);
    return this.click.get('http://localhost:8866/posts/getInfo', { params });
  }
}
