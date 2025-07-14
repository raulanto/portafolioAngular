import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Nav } from '../nav/nav';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-skeleton',
  imports: [RouterOutlet, RouterModule, Nav, Sidebar],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css'
})
export class Skeleton {

}
