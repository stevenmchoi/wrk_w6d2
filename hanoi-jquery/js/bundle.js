!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n){},function(t,n){t.exports=class{constructor(){this.towers=[[3,2,1],[],[]]}isValidMove(t,n){const e=this.towers[t],o=this.towers[n];return 0!==e.length&&(0==o.length||e[e.length-1]<o[o.length-1])}isWon(){return 3==this.towers[2].length||3==this.towers[1].length}move(t,n){return!!this.isValidMove(t,n)&&(this.towers[n].push(this.towers[t].pop()),!0)}print(){console.log(JSON.stringify(this.towers))}promptMove(t,n){this.print(),t.question("Enter a starting tower: ",e=>{const o=parseInt(e);t.question("Enter an ending tower: ",t=>{const e=parseInt(t);n(o,e)})})}run(t,n){this.promptMove(t,(e,o)=>{this.move(e,o)||console.log("Invalid move!"),this.isWon()?(this.print(),console.log("You win!"),n()):this.run(t,n)})}}},function(t,n,e){const o=e(1),r=e(0);$(()=>{const t=$(".hanoi"),n=new o;new r(n,t)})}]);