import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';

@Component( {
    selector: 'my-app',
    directives: [MediaItemComponent, MediaItemListComponent],
    templateUrl: 'partials/app.component.html',
    styleUrls: ['css/app.component.css']
})

export class AppComponent {
    onMediaItemDeleted(mediaItem) {
    }
}
