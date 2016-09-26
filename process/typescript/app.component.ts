import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';

@Component( {
    selector: 'my-app',
    directives: [MediaItemComponent],
    templateUrl: 'partials/app.component.html',
    styleUrls: ['css/app.component.css']
})

export class AppComponent {
    onMediaItemDeleted(mediaItem) {

    }
    firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    };

}
