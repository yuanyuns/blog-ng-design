import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../core/article/posts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  articleList: Article[];

  constructor(private service: PostsService) {
  }


  ngOnInit(): void {
    this.service.getArticleList().subscribe((res: any) => {
      this.articleList = res.data.content;
    });
  }

}
