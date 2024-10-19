import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { WEBComponent } from "./web/web.component";
import { DesktopapplicationComponent } from "./desktopapplication/desktopapplication.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, WEBComponent, DesktopapplicationComponent, ContactusComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VisionTech';
}
