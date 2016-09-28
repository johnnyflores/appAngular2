import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'partials/media-item-form.component.html',
    styleUrls: ['css/media-item-form.component.css']
})

export class MediaItemFormComponent {
    form;

    ngOnInit() {
        this.form =  new ControlGroup({
            'medium': new Control('Movies'),
            'name': new Control(''),
            'category': new Control(''),
            'year': new Control('', this.yearValidator)
        });
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) return null;
        var year = parseInt(control.value);
        var minYear = 1900;
        var maxYear = 2100;
        if (year >= minYear && year <= maxYear) return null;
        return {'year': {'min':minYear, 'max':maxYear}};
    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}
