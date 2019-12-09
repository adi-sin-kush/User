import { Component } from '@angular/core';

@Component({
    selector: 'app-amess',
    template: `
    <div>
        You will be Logged In for {{ days }} days !!
    </div>
    `
})
export class AuthMessageComponent {
    days = 7;
}
