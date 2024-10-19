import { Component } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tittel:string="Welcome to VisionTech";
  text:string="At VisionTech, we pride ourselves on providing the latest advanced and innovative technical solutions to support your business growth and achieve your goals. We strive to provide the best software services that meet your needs and keep pace with the developments of the digital age. Our specialized team works passionately to design and develop smart solutions that help you successfully achieve your future vision.";
  namePag:string="Home";
}
