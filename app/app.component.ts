import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <img [class]="getEyes()" src="app/img/eyes.svg"/>
    <div class="gitte gitte012"
    (click)="fat = !fat"
    [class]="getFat()"
    ></div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      height: 100vh;
      position: relative;
      animation: idle 1000ms ease-in-out;
      animation-iteration-count: infinite;
    }
    img {
      position: absolute;
      width: 100px;
      height: 100px;
      z-index: 10;
      left: 50%;
      transition: all 0.2s;
    }
    .small {
      width: 100px; height: 100px;
    }
    .big {
      width: 250px; height: 120px;
    }
    .gitte {
      width: 300px; height: 300px;
      display: block;
      background: transparent url(app/img/body.svg) center center no-repeat;
      background-size: contain;
    }
    .gitte:before {
      content:"";
      position:absolute;
      z-index:-1;
      box-shadow:0 0 10px rgba(0,0,0,1);
      bottom: -100px;
      left:50%;
      width:200px;
      height:20px;
      border-radius:100%;
      background-color: #666;
    }
    .gitte012 {
      animation: g012 1000ms linear both;
    }
    .gitte014 {
      animation: g014 1000ms linear both;
    }
    .gitte016 {
      animation: g016 1000ms linear both;
    }
    .gitte018 {
      animation: g018 1000ms linear both;
    }
    .gitte02 {
      animation: g02 1000ms linear both;
    }

    @keyframes idle {
      0% { top: 0; }
      50% { top: 10px; }
      100% { top: 0; }
    }

    @keyframes g012 {
      0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      3.4% { transform: matrix3d(1.063, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      4.7% { transform: matrix3d(1.09, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      6.81% { transform: matrix3d(1.132, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      9.41% { transform: matrix3d(1.177, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      10.21% { transform: matrix3d(1.188, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      13.61% { transform: matrix3d(1.225, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      14.11% { transform: matrix3d(1.228, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      17.52% { transform: matrix3d(1.242, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      18.72% { transform: matrix3d(1.242, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      21.32% { transform: matrix3d(1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      24.32% { transform: matrix3d(1.23, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      25.23% { transform: matrix3d(1.227, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.03% { transform: matrix3d(1.213, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.93% { transform: matrix3d(1.21, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      35.54% { transform: matrix3d(1.196, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      36.74% { transform: matrix3d(1.194, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      41.04% { transform: matrix3d(1.192, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      44.44% { transform: matrix3d(1.193, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      52.15% { transform: matrix3d(1.198, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      59.86% { transform: matrix3d(1.201, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      63.26% { transform: matrix3d(1.201, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      75.28% { transform: matrix3d(1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      85.49% { transform: matrix3d(1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      90.69% { transform: matrix3d(1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      100% { transform: matrix3d(1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }


    @keyframes g014 {
      0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      3.4% { transform: matrix3d(1.126, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      4.7% { transform: matrix3d(1.18, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      6.81% { transform: matrix3d(1.264, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      9.41% { transform: matrix3d(1.353, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      10.21% { transform: matrix3d(1.377, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      13.61% { transform: matrix3d(1.449, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      14.11% { transform: matrix3d(1.456, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      17.52% { transform: matrix3d(1.483, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      18.72% { transform: matrix3d(1.485, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      21.32% { transform: matrix3d(1.478, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      24.32% { transform: matrix3d(1.46, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      25.23% { transform: matrix3d(1.454, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.03% { transform: matrix3d(1.425, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.93% { transform: matrix3d(1.419, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      35.54% { transform: matrix3d(1.392, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      36.74% { transform: matrix3d(1.389, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      41.04% { transform: matrix3d(1.384, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      44.44% { transform: matrix3d(1.386, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      52.15% { transform: matrix3d(1.396, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      59.86% { transform: matrix3d(1.402, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      63.26% { transform: matrix3d(1.403, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      75.28% { transform: matrix3d(1.4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      85.49% { transform: matrix3d(1.399, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      90.69% { transform: matrix3d(1.4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      100% { transform: matrix3d(1.4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }


    @keyframes g016 {
      0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      3.4% { transform: matrix3d(1.189, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      4.7% { transform: matrix3d(1.27, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      6.81% { transform: matrix3d(1.396, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      9.41% { transform: matrix3d(1.53, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      10.21% { transform: matrix3d(1.565, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      13.61% { transform: matrix3d(1.674, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      14.11% { transform: matrix3d(1.685, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      17.52% { transform: matrix3d(1.725, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      18.72% { transform: matrix3d(1.727, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      21.32% { transform: matrix3d(1.718, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      24.32% { transform: matrix3d(1.69, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      25.23% { transform: matrix3d(1.68, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.03% { transform: matrix3d(1.638, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.93% { transform: matrix3d(1.629, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      35.54% { transform: matrix3d(1.588, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      36.74% { transform: matrix3d(1.583, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      41.04% { transform: matrix3d(1.576, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      44.44% { transform: matrix3d(1.58, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      52.15% { transform: matrix3d(1.595, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      59.86% { transform: matrix3d(1.604, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      63.26% { transform: matrix3d(1.604, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      75.28% { transform: matrix3d(1.601, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      85.49% { transform: matrix3d(1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      90.69% { transform: matrix3d(1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      100% { transform: matrix3d(1.6, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }


    @keyframes g018 {
      0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      3.4% { transform: matrix3d(1.252, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      4.7% { transform: matrix3d(1.36, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      6.81% { transform: matrix3d(1.527, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      9.41% { transform: matrix3d(1.707, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      10.21% { transform: matrix3d(1.753, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      13.61% { transform: matrix3d(1.898, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      14.11% { transform: matrix3d(1.913, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      17.52% { transform: matrix3d(1.966, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      18.72% { transform: matrix3d(1.97, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      21.32% { transform: matrix3d(1.957, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      24.32% { transform: matrix3d(1.92, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      25.23% { transform: matrix3d(1.907, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.03% { transform: matrix3d(1.85, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.93% { transform: matrix3d(1.838, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      35.54% { transform: matrix3d(1.784, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      36.74% { transform: matrix3d(1.777, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      41.04% { transform: matrix3d(1.769, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      44.44% { transform: matrix3d(1.773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      52.15% { transform: matrix3d(1.793, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      59.86% { transform: matrix3d(1.805, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      63.26% { transform: matrix3d(1.806, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      75.28% { transform: matrix3d(1.801, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      85.49% { transform: matrix3d(1.799, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      90.69% { transform: matrix3d(1.799, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      100% { transform: matrix3d(1.8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }



    @keyframes g02 {
      0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      3.4% { transform: matrix3d(1.316, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      4.7% { transform: matrix3d(1.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      6.81% { transform: matrix3d(1.659, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      9.41% { transform: matrix3d(1.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      10.21% { transform: matrix3d(1.942, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      13.61% { transform: matrix3d(2.123, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      14.11% { transform: matrix3d(2.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      17.52% { transform: matrix3d(2.208, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      18.72% { transform: matrix3d(2.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      21.32% { transform: matrix3d(2.196, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      24.32% { transform: matrix3d(2.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      25.23% { transform: matrix3d(2.134, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.03% { transform: matrix3d(2.063, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      29.93% { transform: matrix3d(2.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      35.54% { transform: matrix3d(1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      36.74% { transform: matrix3d(1.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      41.04% { transform: matrix3d(1.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      44.44% { transform: matrix3d(1.966, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      52.15% { transform: matrix3d(1.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      59.86% { transform: matrix3d(2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      63.26% { transform: matrix3d(2.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      75.28% { transform: matrix3d(2.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      85.49% { transform: matrix3d(1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      90.69% { transform: matrix3d(1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      100% { transform: matrix3d(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }




  `]
})
export class AppComponent {
  title = 'Gitte';
  fat: false;

  constructor() {
  }

  getFat() {
    if(this.fat){
      return "gitte gitte02";
    } else {
      return "gitte gitte012";
    }
  }
  getEyes() {
    if(this.fat){
      return "big";
    } else {
      return "small";
    }
  }
}
