import {Component} from 'angular2/core';

@Component( {
    selector: 'media-item',
    templateUrl: 'partials/media-item.component.html',
    styleUrls: ['css/media-item.component.css']
})

export class MediaItemComponent {
    name =  'The Redemption';

    wasWatched() {
        return true;
    }

    onDelete() {
        console.log("Delete")
    }
}
