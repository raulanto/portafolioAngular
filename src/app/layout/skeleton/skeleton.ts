import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-skeleton',
  imports: [RouterOutlet, RouterModule, Nav],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css'
})
export class Skeleton {

}
