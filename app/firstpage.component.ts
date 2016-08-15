import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES, RouterExtensions} from 'nativescript-angular/router';

@Component({
    selector: "first",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="First component" class="title"></Label>
        <Button text="GO TO SECOND" [nsRouterLink]="['/second']" clearHistory="true" class="link"></Button>
        <Button text="Navigate sending param" (tap)="gotoSecondPage()"  class="link"></Button>
    </StackLayout>`
})
export class FirstComponent {
    constructor(private routerExtensions:RouterExtensions){
        var myJSON ={"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}
        global.myjson=JSON.stringify(myJSON)
    }

    public gotoSecondPage(){
        this.routerExtensions.navigate(["second", "1"]);
    }

 }