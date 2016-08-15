import {Component} from '@angular/core';
import {NS_ROUTER_DIRECTIVES, RouterExtensions} from 'nativescript-angular/router';
import {ActivatedRoute} from "@angular/router";
 import {Observable} from "rxjs"



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
    public id:Observable<string>
     constructor(private routerExtensions:RouterExtensions, route: ActivatedRoute) {
        console.log(route.snapshot.params['data']);
        console.log(global.myjson);
    }
    public nextPage(){
        this.routerExtensions.navigate(["/first"], { clearHistory: true });
    }
 }