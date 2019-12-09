import { Component, Output, EventEmitter, ContentChild, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

    showMessage = false;

    @Output()
    submitted = new EventEmitter();

    @ViewChild(AuthMessageComponent, { static: true })
    message: AuthMessageComponent;


    @ContentChild(AuthRememberComponent, {static: true })
    remember: AuthRememberComponent;

    ngAfterViewInit() {
        console.log('ngAfterViewInit called!!');
        console.log(this.message);
    }

    ngAfterContentInit() {
        if (this.message) {
            this.message.days = 30;
        }
        console.log('ngAfterContentInit called!!');
        if (this.remember) {
            console.log(this.remember);
            // this.remember.forEach((item) => {
            //     item.checked.subscribe((checked: boolean) => this.showMessage = checked);
            // });
            this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
        }
    }

    onSubmit(value: boolean) {
        this.submitted.emit(value);
    }
}
