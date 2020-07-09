import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../../core/article/posts.service';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-json';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.less']
})
export class ArticleBodyComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private service: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.getArticle(param.id);
      }
    );
  }

  getArticle(id: string): void {
    this.service.getArticleInfo(id).subscribe((res: any) => {
      this.article = res.data;
    });
  }

}
