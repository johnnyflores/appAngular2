import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';

@Component( {
    selector: 'my-app',
    directives: [MediaItemComponent],
    templateUrl: 'partials/app.component.html',
    styleUrls: ['css/app.component.css']
})

export class AppComponent {}
