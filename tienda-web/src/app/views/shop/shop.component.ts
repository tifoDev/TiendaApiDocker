import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'shop',
    templateUrl: './shop.component.html',
    styles: []
})
export class ShopComponent implements OnInit {


    public constructor(public storeSvc: StoreService) {

    }

    ngOnInit() {
        
    }

}
