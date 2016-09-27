import {Component} from 'angular2/core';

@Component({
    selector: 'media-item-form',
    templateUrl: 'partials/media-item-form.component.html',
    styleUrls: ['css/media-item-form.component.css']
})

export class MediaItemFormComponent {
    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}
