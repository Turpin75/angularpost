import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpost';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Anim laboris exercitation aute sit quis sunt consequat sunt. Laboris nostrud eiusmod consectetur in elit incididunt enim deserunt enim amet nisi sit commodo. Sit labore esse enim ullamco non consequat dolor. Do veniam et veniam laboris.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Eiusmod esse eu amet non ad. Veniam laborum est quis aliqua ad incididunt ex consequat cillum irure eiusmod. Veniam deserunt Lorem et cillum nulla ullamco minim tempor nisi incididunt Lorem et Lorem. Excepteur quis anim in id aliqua laboris minim do aute.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Ut anim officia duis ipsum ex. Occaecat ipsum sint do mollit commodo occaecat Lorem ea cillum aliqua reprehenderit laboris aute labore. Magna amet eiusmod veniam officia consectetur excepteur aliqua pariatur sunt eu dolor mollit. Eu sunt sit reprehenderit occaecat ullamco minim consectetur aliqua.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
