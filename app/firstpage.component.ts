import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES, RouterExtensions} from 'nativescript-angular/router';

@Component({
    selector: "first",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="First component" class="title"></Label>
        <Button text="GO TO SECOND" [nsRouterLink]="['/second']" clearHistory="true" class="link"></Button>
    </StackLayout>`
})
export class FirstComponent { }