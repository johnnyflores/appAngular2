import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';

@Component( {
    selector: 'media-item-list',
    directives: [MediaItemComponent],
    pipes: [CategoryListPipe],
    templateUrl: 'partials/media-item-list.component.html',
    styleUrls: ['css/media-item-list.component.css']
})

export class MediaItemListComponent {
    onMediaItemDeleted(mediaItem) {

    }
    mediaItems = [
    {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 12944166565384,
        isFavorite: false
    },
    {
        id: 2,
        name: "The small Tall",
        medium: "Movies",
        category: "Comedy",
        year: 2015,
        watchedOn: null,
        isFavorite: true
    },
    {
        id: 3,
        name: "The Revolution",
        medium: "Movies",
        category: "Science Fiction",
        year: 2016,
        watchedOn: null,
        isFavorite: false
    },
    {
        id: 4,
        name: "The Coporation",
        medium: "Series",
        category: "Documental",
        year: 2012,
        watchedOn: null,
        isFavorite: true
    }
    ]
}
