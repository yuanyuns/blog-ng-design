import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.less']
})
export class ArticleCardComponent implements OnInit {

  @Input()
  article: Article;

  colors: Array<string> = ['primary', 'accent', 'warn'];

  i = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

}
