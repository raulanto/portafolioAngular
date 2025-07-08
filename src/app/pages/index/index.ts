import { Component } from '@angular/core';
import {getCurrentDate} from '../../utils/getCurrentDate';
import { Code } from "../../components/code/code";
import { Address } from "../../components/address/address";
@Component({
  selector: 'app-index',
  imports: [Code, Address],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  getCurrentDate() {
    return getCurrentDate();
  }
}
