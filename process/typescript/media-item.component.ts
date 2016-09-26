import {Component, Input} from 'angular2/core';

@Component( {
    selector: 'media-item',
    templateUrl: 'partials/media-item.component.html',
    styleUrls: ['css/media-item.component.css']
})

export class MediaItemComponent {

    @Input('mediaItemToWatch') mediaItem;

    name =  'The Redemption';

    wasWatched() {
        return true;
    }

    onDelete() {
        console.log("Delete")
    }
}
