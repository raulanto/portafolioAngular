import { Component } from '@angular/core';
import {getCurrentDate} from '../../utils/getCurrentDate';

import { Address } from "../../components/address/address";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [ Address, RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  getCurrentDate() {
    return getCurrentDate();
  }
}
