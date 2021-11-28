import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- <p>
{{ rando }}   

</p>  -->
<p>{{ value }}</p>
  `,
  styles: ['button {}'
  ]
})
export class SquareComponent  {


  // background-color: #fff;
  // border: 1px solid #000;
  // border-radius: 3px;
  // color: #000;
  // cursor: pointer;
  // font-size: 1.2em;
  // font-weight: bold;
  // padding: 0.5em 1em;
  // text-decoration: none;
  // height: 50px;
// rando: number | undefined;
// rando = Math.floor(Math.random() * 100);
// constructor() {
// setInterval(() => this.rando = Math.random(), 1000);
// }

  // rando: number | undefined;
  // rando = Math.floor(Math.random() * 100);
  // constructor() {
  // setInterval(() => this.rando = Math.random(), 1000);
  // }

  @Input()
  value: 'X' | 'O' | undefined;


}