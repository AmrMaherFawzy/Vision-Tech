import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  url1:string="http://www.facebook.com/MaherAmr871";
  url2:string="http://www.instagram.com/captnamrmaher/?igshid=MzNlNGNkZWQ4Mg%3D%3D";
  url3:string="http://twitter.com/Mahe2Amr";
  url4:string="http://www.linkedin.com/in/captain-amr-fawzy-888294236/";
  phone1:string="tel:+201022270213";
  phone2:string="tel:+201022270213";
  email:string="mailto:maheramr871@gmail.com";
  name1:string="Facebook";
  name2:string="Instagram";
  name3:string="Twitter";
  name4:string="Linkedin";
  name5:string="Whatsapp";
  name6:string="E_Mail";
  name7:string="Phone";
  text:string="Copyright © Vision Tech All rights reserved";
}
