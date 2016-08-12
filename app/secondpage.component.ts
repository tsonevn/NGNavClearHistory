import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES, RouterExtensions} from 'nativescript-angular/router';



@Component({
    selector: "second",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="Second component" class="title"></Label>
        <Button text="GO TO FIRST" [nsRouterLink]="['/first']"  clearHistory="true"  class="link"></Button>
        <Button text="GO TO SECOND"  (tap)="nextPage()" class="link"></Button>
    </StackLayout>`
})
export class SecondComponent {
     constructor(private routerExtensions:RouterExtensions){
    }

    public nextPage(){
        this.routerExtensions.navigate(["/first"], { clearHistory: true });
    }
 }