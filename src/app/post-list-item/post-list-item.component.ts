import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postlistitem: object;

  constructor() { }

  ngOnInit() {
  }

  onMoreLove(postlistitem) {
    postlistitem.loveIts += 1;
  }
 
  onLessLove(postlistitem) {
    postlistitem.loveIts -= 1;
  }
}
