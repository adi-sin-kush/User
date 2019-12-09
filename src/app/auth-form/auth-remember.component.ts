import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-arem',
    styleUrls: ['./auth-form.component.scss'],
    templateUrl: './auth-remember.component.html'
})
export class AuthRememberComponent {

    @Output()
    checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChecked(value: boolean) {
        console.log('from auth-remember component', value);
        this.checked.emit(value);
    }
}
