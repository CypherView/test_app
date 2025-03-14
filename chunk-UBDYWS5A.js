import{c as fe,t as Se}from"./chunk-ZZH5KQBC.js";import{b as me}from"./chunk-YU63NYW2.js";import{D as v,Ga as O,H as ue,M as ce,a as S,b as A,d as $,k as z,ma as de,na as b,ra as ge,x as he}from"./chunk-ZRJUX5WY.js";import{d as pe}from"./chunk-3HZ37MYL.js";import{$b as te,Ab as H,Bb as q,Cb as D,Dc as k,Ec as C,Jb as m,Kb as w,Ob as J,Pb as W,Rb as V,S as y,Sb as l,Sc as se,T as N,Tb as X,Ub as Y,Uc as re,Vc as le,Wa as g,Wb as R,Xb as Z,Y as p,Yb as E,Yc as ae,Zb as P,Zc as oe,_b as ee,ad as F,bb as Q,cb as j,cd as U,ga as h,gb as L,ha as u,hb as G,ic as ie,ka as _,kb as I,kc as ne,mb as K,nb as x,qa as T,xb as f,yb as c}from"./chunk-HQ3G3WZN.js";import{a as M}from"./chunk-DAQOROHW.js";var ze=class i{userProfileSignal=Q(null);router=p(pe);authService=p(fe);authTokensService=p(me);adminState=p(Se);profile=C(()=>this.userProfileSignal());getUserProfileSignal(){return this.userProfileSignal}getUserProfile(){return this.userProfileSignal()}setUserProfile(a){let e=this.userProfileSignal();e?this.userProfileSignal.set(M(M({},e),a)):this.userProfileSignal.set(a)}clearUserProfile(){this.userProfileSignal.set(null)}logout(){this.authService.signOut({}).subscribe({next:async()=>{this.authTokensService.clearTokens(),this.adminState.clearAllState(),await this.router.navigate(["/auth"])}})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=y({token:i,factory:i.\u0275fac,providedIn:"root"})};var _e=({dt:i})=>`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid ${i("splitter.border.color")};
    background: ${i("splitter.background")};
    border-radius: ${i("border.radius.md")};
    color: ${i("splitter.color")};
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: ${i("splitter.gutter.background")};
}

.p-splitter-gutter-handle {
    border-radius: ${i("splitter.handle.border.radius")};
    background: ${i("splitter.handle.background")};
    transition: outline-color ${i("splitter.transition.duration")}, box-shadow ${i("splitter.transition.duration")};
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: ${i("splitter.handle.focus.ring.shadow")};
    outline: ${i("splitter.handle.focus.ring.width")} ${i("splitter.handle.focus.ring.style")} ${i("splitter.handle.focus.ring.color")};
    outline-offset: ${i("splitter.handle.focus.ring.offset")};
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: ${i("splitter.handle.size")};
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: ${i("splitter.handle.size")};
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
    flex-grow: 1;
    justify-content: center;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`,xe={root:({props:i})=>["p-splitter p-component","p-splitter-"+i.layout],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},ve=(()=>{class i extends ge{name="splitter";theme=_e;classes=xe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275prov=y({token:i,factory:i.\u0275fac})}return i})();var we=["*"],Ee=["panel"],Pe=["container"],Ce=i=>({display:"flex","flex-wrap":"nowrap","flex-direction":i});function be(i,a){i&1&&J(0)}function Me(i,a){if(i&1){let e=W();m(0,"div",6),V("mousedown",function(n){h(e);let s=l().index,r=l();return u(r.onGutterMouseDown(n,s))})("touchstart",function(n){h(e);let s=l().index,r=l();return u(r.onGutterTouchStart(n,s))})("touchmove",function(n){h(e);let s=l(2);return u(s.onGutterTouchMove(n))})("touchend",function(n){h(e);let s=l(2);return u(s.onGutterTouchEnd(n))}),m(1,"div",7),V("keyup",function(n){h(e);let s=l(2);return u(s.onGutterKeyUp(n))})("keydown",function(n){h(e);let s=l().index,r=l();return u(r.onGutterKeyDown(n,s))}),w()()}if(i&2){let e=l(2);f("data-p-gutter-resizing",!1)("data-pc-section","gutter"),g(),c("ngStyle",e.gutterStyle()),f("aria-orientation",e.layout)("aria-valuenow",e.prevSize)("data-pc-section","gutterhandle")}}function Te(i,a){if(i&1&&(m(0,"div",3),x(1,be,1,0,"ng-container",4),w(),x(2,Me,2,6,"div",5)),i&2){let e=a.$implicit,t=a.index,n=l();D(n.panelStyleClass),c("ngClass",n.panelContainerClass())("ngStyle",n.panelStyle),f("data-pc-name","splitter")("data-pc-section","root"),g(),c("ngTemplateOutlet",e),g(),c("ngIf",t!==n.panels.length-1)}}var Le=(()=>{class i extends O{splitter=j(B);nestedState=C(()=>this.splitter());static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275cmp=L({type:i,selectors:[["p-splitter-panel"]],contentQueries:function(t,n,s){t&1&&ee(s,n.splitter,B,5),t&2&&te()},hostAttrs:[1,"p-splitterpanel"],features:[I],ngContentSelectors:we,decls:1,vars:0,template:function(t,n){t&1&&(X(),Y(0))},dependencies:[F],encapsulation:2,changeDetection:0})}return i})(),B=(()=>{class i extends O{styleClass;panelStyleClass;style;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(e){if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let t=[...this.el.nativeElement.children[0].children].filter(s=>S(s,"p-splitterpanel")),n=[];this.panels.map((s,r)=>{let d=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;n[r]=d,t[r].style.flexBasis="calc("+d+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new T;onResizeStart=new T;containerViewChild;templates;panelChildren;nested=!1;panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=p(ve);ngOnInit(){super.ngOnInit(),this.nested=this.isNested()}ngAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(e=>{switch(e.getType()){case"panel":this.panels.push(e.template);break;default:this.panels.push(e.template);break}}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(e=>{this.panels.push(e)})}ngAfterViewInit(){if(super.ngAfterViewInit(),U(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let t=[...this.el.nativeElement.children[0].children].filter(s=>S(s,"p-splitterpanel")),n=[];this.panels.map((s,r)=>{let d=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;n[r]=d,t[r].style.flexBasis="calc("+d+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=n,this.prevSize=parseFloat(n[0]).toFixed(4)}}}resizeStart(e,t,n){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?ue(this.containerViewChild.nativeElement):he(this.containerViewChild.nativeElement),n||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,n?(this.prevPanelSize=this.horizontal()?z(this.prevPanelElement,!0):v(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?z(this.nextPanelElement,!0):v(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?z(this.prevPanelElement,!0):v(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?z(this.nextPanelElement,!0):v(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=t,A(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),A(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.containerViewChild.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,t,n){let s,r,o;n?this.horizontal()?(r=100*(this.prevPanelSize+t)/this.size,o=100*(this.nextPanelSize-t)/this.size):(r=100*(this.prevPanelSize-t)/this.size,o=100*(this.nextPanelSize+t)/this.size):(this.horizontal()?ce(this.el.nativeElement)?s=(this.startPos-e.pageX)*100/this.size:s=(e.pageX-this.startPos)*100/this.size:s=(e.pageY-this.startPos)*100/this.size,r=this.prevPanelSize+s,o=this.nextPanelSize-s),this.prevSize=parseFloat(r).toFixed(4),this.validateResize(r,o)&&(this.prevPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=r,this._panelSizes[this.prevPanelIndex+1]=o)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),$(this.gutterElement,"p-splitter-gutter-resizing"),$(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,t){this.resizeStart(e,t),this.bindMouseListeners()}onGutterTouchStart(e,t){e.cancelable&&(this.resizeStart(e,t),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,t,n){this.resizeStart(e,t,!0),this.onResize(e,n,!0)}setTimer(e,t,n){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,t,n)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,t){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,t,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,t,this.step),e.preventDefault();break}default:break}}validateResize(e,t){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>t)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isNested(){if(this.el.nativeElement){let e=this.el.nativeElement.parentElement;for(;e&&!S(e,"p-splitter");)e=e.parentElement;return e!==null}else return!1}isStateful(){return this.stateKey!=null}getStorage(){if(U(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView.localStorage;case"session":return this.document.defaultView.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let t=this.getStorage().getItem(this.stateKey);return t?(this._panelSizes=JSON.parse(t),[...this.containerViewChild.nativeElement.children].filter(s=>S(s,"p-splitterpanel")).forEach((s,r)=>{s.style.flexBasis="calc("+this._panelSizes[r]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}containerClass(){return{"p-splitter p-component":!0,"p-splitter-horizontal":this.layout==="horizontal","p-splitter-vertical":this.layout==="vertical"}}panelContainerClass(){return{"p-splitterpanel":!0,"p-splitterpanel-nested":!0}}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275cmp=L({type:i,selectors:[["p-splitter"]],contentQueries:function(t,n,s){if(t&1&&(R(s,de,4),R(s,Ee,4)),t&2){let r;E(r=P())&&(n.templates=r),E(r=P())&&(n.panelChildren=r)}},viewQuery:function(t,n){if(t&1&&Z(Pe,5),t&2){let s;E(s=P())&&(n.containerViewChild=s.first)}},hostVars:2,hostBindings:function(t,n){t&2&&H("p-splitterpanel-nested",n.nested)},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",style:"style",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",k],step:[2,"step","step",k],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[ie([ve]),K,I],decls:3,vars:12,consts:[["container",""],[3,"ngClass","ngStyle"],["ngFor","",3,"ngForOf"],["tabindex","-1",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet"],["class","p-splitter-gutter","role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",1,"p-splitter-gutter",3,"mousedown","touchstart","touchmove","touchend"],["tabindex","0",1,"p-splitter-gutter-handle",3,"keyup","keydown","ngStyle"]],template:function(t,n){t&1&&(m(0,"div",1,0),x(2,Te,3,8,"ng-template",2),w()),t&2&&(q(ne(10,Ce,n.layout==="vertical"?"column":"")),D(n.styleClass),c("ngClass",n.containerClass())("ngStyle",n.style),f("data-pc-name","splitter")("data-p-gutter-resizing",!1)("data-pc-section","root"),g(2),c("ngForOf",n.panels))},dependencies:[F,se,re,le,oe,ae,b],encapsulation:2,changeDetection:0})}return i})(),st=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=G({type:i});static \u0275inj=N({imports:[B,Le,b,b]})}return i})();export{B as a,st as b,ze as c};
