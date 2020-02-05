import { Component, ViewChild, ElementRef, OnInit, NgModule } from '@angular/core'
import { Scene } from '../models/scene'

@Component({
    selector: 'renderer',
    templateUrl: '../views/renderer.component.html'
})
export class Renderer implements OnInit{
    scene: Scene = new Scene()
    @ViewChild('viewCanvas', {static: true}) viewCanvas: ElementRef;

    ngOnInit(){
        let context: CanvasRenderingContext2D = this.viewCanvas.nativeElement.getContext('2d');

        context.beginPath();
        context.fillStyle = "#f00";
        context.fillRect(0, 0, this.viewCanvas.nativeElement.width, this.viewCanvas.nativeElement.height);
    }

    graphicsLoop(){
        requestAnimationFrame(this.graphicsLoop);


    }
}