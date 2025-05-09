import{D as S,G as oe,L as pe,Oa as R,a as m,b as F,d as k,k as f,oa as he,pa as E,ta as ue,x as ae}from"./chunk-CLDE5SD5.js";import{Ab as P,Bc as Z,Bd as D,Cb as y,Dc as ee,Ea as C,Mb as d,Nb as h,Pb as j,Qb as K,Rb as T,Xc as I,Zb as g,Zc as te,_b as v,cc as U,da as A,dc as H,ea as B,fa as O,gc as M,hc as l,ic as q,jb as c,jc as X,ka as Q,ld as ie,mc as L,nc as Y,nd as ne,oc as x,od as se,pc as w,qc as J,rb as G,rc as W,rd as re,sd as le,ua as o,va as p,wb as b,xb as N,ya as _,zd as V}from"./chunk-XTQ7PXWD.js";var de=["*"],ge=["panel"],me=["container"],fe=n=>({display:"flex","flex-wrap":"nowrap","flex-direction":n});function Se(n,z){n&1&&U(0)}function ze(n,z){if(n&1){let e=H();g(0,"div",6),M("mousedown",function(i){o(e);let s=l().index,r=l();return p(r.onGutterMouseDown(i,s))})("touchstart",function(i){o(e);let s=l().index,r=l();return p(r.onGutterTouchStart(i,s))})("touchmove",function(i){o(e);let s=l(2);return p(s.onGutterTouchMove(i))})("touchend",function(i){o(e);let s=l(2);return p(s.onGutterTouchEnd(i))}),g(1,"div",7),M("keyup",function(i){o(e);let s=l(2);return p(s.onGutterKeyUp(i))})("keydown",function(i){o(e);let s=l().index,r=l();return p(r.onGutterKeyDown(i,s))}),v()()}if(n&2){let e=l(2);d("data-p-gutter-resizing",!1)("data-pc-section","gutter"),c(),h("ngStyle",e.gutterStyle()),d("aria-orientation",e.layout)("aria-valuenow",e.prevSize)("data-pc-section","gutterhandle")}}function _e(n,z){if(n&1&&(g(0,"div",3),y(1,Se,1,0,"ng-container",4),v(),y(2,ze,2,6,"div",5)),n&2){let e=z.$implicit,t=z.index,i=l();T(i.panelStyleClass),h("ngClass",i.panelContainerClass())("ngStyle",i.panelStyle),d("data-pc-name","splitter")("data-pc-section","root"),c(),h("ngTemplateOutlet",e),c(),h("ngIf",t!==i.panels.length-1)}}var ye=({dt:n})=>`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid ${n("splitter.border.color")};
    background: ${n("splitter.background")};
    border-radius: ${n("border.radius.md")};
    color: ${n("splitter.color")};
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
    background: ${n("splitter.gutter.background")};
}

.p-splitter-gutter-handle {
    border-radius: ${n("splitter.handle.border.radius")};
    background: ${n("splitter.handle.background")};
    transition: outline-color ${n("splitter.transition.duration")}, box-shadow ${n("splitter.transition.duration")};
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: ${n("splitter.handle.focus.ring.shadow")};
    outline: ${n("splitter.handle.focus.ring.width")} ${n("splitter.handle.focus.ring.style")} ${n("splitter.handle.focus.ring.color")};
    outline-offset: ${n("splitter.handle.focus.ring.offset")};
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
    height: ${n("splitter.handle.size")};
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: ${n("splitter.handle.size")};
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
`,ve={root:({props:n})=>["p-splitter p-component","p-splitter-"+n.layout],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},ce=(()=>{class n extends ue{name="splitter";theme=ye;classes=ve;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(n)))(i||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();var xe=(()=>{class n extends R{splitter=G(A(()=>$));nestedState=te(()=>this.splitter());static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["p-splitter-panel"]],contentQueries:function(t,i,s){t&1&&J(s,i.splitter,$,5),t&2&&W()},hostAttrs:[1,"p-splitterpanel"],features:[P],ngContentSelectors:de,decls:1,vars:0,template:function(t,i){t&1&&(q(),X(0))},dependencies:[V],encapsulation:2,changeDetection:0})}return n})(),$=(()=>{class n extends R{styleClass;panelStyleClass;style;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(e){if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let t=[...this.el.nativeElement.children[0].children].filter(s=>m(s,"p-splitterpanel")),i=[];this.panels.map((s,r)=>{let u=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;i[r]=u,t[r].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new C;onResizeStart=new C;containerViewChild;templates;panelChildren;nested=!1;panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=Q(ce);ngOnInit(){super.ngOnInit(),this.nested=this.isNested()}ngAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(e=>{switch(e.getType()){case"panel":this.panels.push(e.template);break;default:this.panels.push(e.template);break}}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(e=>{this.panels.push(e)})}ngAfterViewInit(){if(super.ngAfterViewInit(),D(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let t=[...this.el.nativeElement.children[0].children].filter(s=>m(s,"p-splitterpanel")),i=[];this.panels.map((s,r)=>{let u=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;i[r]=u,t[r].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=i,this.prevSize=parseFloat(i[0]).toFixed(4)}}}resizeStart(e,t,i){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?oe(this.containerViewChild.nativeElement):ae(this.containerViewChild.nativeElement),i||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,i?(this.prevPanelSize=this.horizontal()?f(this.prevPanelElement,!0):S(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?f(this.nextPanelElement,!0):S(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?f(this.prevPanelElement,!0):S(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?f(this.nextPanelElement,!0):S(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=t,F(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),F(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.containerViewChild.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,t,i){let s,r,a;i?this.horizontal()?(r=100*(this.prevPanelSize+t)/this.size,a=100*(this.nextPanelSize-t)/this.size):(r=100*(this.prevPanelSize-t)/this.size,a=100*(this.nextPanelSize+t)/this.size):(this.horizontal()?pe(this.el.nativeElement)?s=(this.startPos-e.pageX)*100/this.size:s=(e.pageX-this.startPos)*100/this.size:s=(e.pageY-this.startPos)*100/this.size,r=this.prevPanelSize+s,a=this.nextPanelSize-s),this.prevSize=parseFloat(r).toFixed(4),this.validateResize(r,a)&&(this.prevPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+a+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=r,this._panelSizes[this.prevPanelIndex+1]=a)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),k(this.gutterElement,"p-splitter-gutter-resizing"),k(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,t){this.resizeStart(e,t),this.bindMouseListeners()}onGutterTouchStart(e,t){e.cancelable&&(this.resizeStart(e,t),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,t,i){this.resizeStart(e,t,!0),this.onResize(e,i,!0)}setTimer(e,t,i){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,t,i)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,t){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,t,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,t,this.step),e.preventDefault();break}default:break}}validateResize(e,t){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>t)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isNested(){if(this.el.nativeElement){let e=this.el.nativeElement.parentElement;for(;e&&!m(e,"p-splitter");)e=e.parentElement;return e!==null}else return!1}isStateful(){return this.stateKey!=null}getStorage(){if(D(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView.localStorage;case"session":return this.document.defaultView.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let t=this.getStorage().getItem(this.stateKey);return t?(this._panelSizes=JSON.parse(t),[...this.containerViewChild.nativeElement.children].filter(s=>m(s,"p-splitterpanel")).forEach((s,r)=>{s.style.flexBasis="calc("+this._panelSizes[r]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}containerClass(){return{"p-splitter p-component":!0,"p-splitter-horizontal":this.layout==="horizontal","p-splitter-vertical":this.layout==="vertical"}}panelContainerClass(){return{"p-splitterpanel":!0,"p-splitterpanel-nested":!0}}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["p-splitter"]],contentQueries:function(t,i,s){if(t&1&&(L(s,he,4),L(s,ge,4)),t&2){let r;x(r=w())&&(i.templates=r),x(r=w())&&(i.panelChildren=r)}},viewQuery:function(t,i){if(t&1&&Y(me,5),t&2){let s;x(s=w())&&(i.containerViewChild=s.first)}},hostVars:2,hostBindings:function(t,i){t&2&&j("p-splitterpanel-nested",i.nested)},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",style:"style",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",I],step:[2,"step","step",I],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[Z([ce]),P],decls:3,vars:12,consts:[["container",""],[3,"ngClass","ngStyle"],["ngFor","",3,"ngForOf"],["tabindex","-1",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet"],["class","p-splitter-gutter","role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",1,"p-splitter-gutter",3,"mousedown","touchstart","touchmove","touchend"],["tabindex","0",1,"p-splitter-gutter-handle",3,"keyup","keydown","ngStyle"]],template:function(t,i){t&1&&(g(0,"div",1,0),y(2,_e,3,8,"ng-template",2),v()),t&2&&(K(ee(10,fe,i.layout==="vertical"?"column":"")),T(i.styleClass),h("ngClass",i.containerClass())("ngStyle",i.style),d("data-pc-name","splitter")("data-p-gutter-resizing",!1)("data-pc-section","root"),c(2),h("ngForOf",i.panels))},dependencies:[V,ie,ne,se,le,re,E],encapsulation:2,changeDetection:0})}return n})(),Oe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=N({type:n});static \u0275inj=O({imports:[$,xe,E,E]})}return n})();export{$ as a,Oe as b};
