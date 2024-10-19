import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  name1:string="Home";
  name2:string="Web";
  name3:string="Desktop Application";
  name4:string="Contact Us";
  url1:string="#Home";
  url2:string="#Web";
  url3:string="#DesktopApplication";
  url4:string="#ContactUs";
}
