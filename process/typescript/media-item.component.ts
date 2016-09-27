import {Component, Input Output, EventEmitter} from 'angular2/core';
import {FavoriteDirective} from './favorite.directive';

@Component( {
    selector: 'media-item',
    directives: [FavoriteDirective],
    templateUrl: 'partials/media-item.component.html',
    styleUrls: ['css/media-item.component.css']
})

export class MediaItemComponent {

    @Input('mediaItemToWatch') mediaItem;

    @Output('deleted') delete = new EventEmitter();

    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}
