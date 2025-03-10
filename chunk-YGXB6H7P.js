import{b as ht,c as vt}from"./chunk-Y57KYFHZ.js";import{B as j,Da as k,F,Ia as J,Ja as ft,K as q,T as W,aa as ut,k as rt,ka as pt,la as U,pa as dt,q as lt,r as ct,s as I,w as bt}from"./chunk-EMPEPJED.js";import{Ab as _,Cc as C,Dc as it,Eb as T,Ec as s,Gc as at,Jb as B,Kb as N,Lb as S,Ob as z,Pb as O,R as D,Rb as L,S as X,Sb as d,Sc as ot,T as Y,Tb as y,Ub as w,Wa as v,Wb as A,Xb as x,Y as f,Yb as l,Zb as c,Zc as st,ad as $,bb as E,cd as K,db as V,ga as M,gb as g,ha as P,hb as Z,ic as et,ka as h,kb as m,kc as nt,lb as tt,nb as u,ua as p,xb as r,yb as R}from"./chunk-HQ3G3WZN.js";var Tt=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,yt={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},gt=(()=>{class e extends dt{name="tabs";theme=Tt;classes=yt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275prov=X({token:e,factory:e.\u0275fac})}return e})();var wt=["previcon"],xt=["nexticon"],Ct=["content"],$t=["prevButton"],kt=["nextButton"],Dt=["inkbar"],Bt=["tabs"],Lt=["*"],It=e=>({"p-tablist-viewport":e});function Ft(e,b){e&1&&z(0)}function Mt(e,b){if(e&1&&u(0,Ft,1,0,"ng-container",11),e&2){let t=d(2);R("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Pt(e,b){e&1&&S(0,"ChevronLeftIcon")}function Et(e,b){if(e&1){let t=O();B(0,"button",10,3),L("click",function(){M(t);let n=d();return P(n.onPrevButtonClick())}),u(2,Mt,1,1,"ng-container")(3,Pt,1,0,"ChevronLeftIcon"),N()}if(e&2){let t=d();r("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex)("data-pc-group-section","navigator"),v(2),T(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Vt(e,b){e&1&&z(0)}function Rt(e,b){if(e&1&&u(0,Vt,1,0,"ng-container",11),e&2){let t=d(2);R("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Nt(e,b){e&1&&S(0,"ChevronRightIcon")}function St(e,b){if(e&1){let t=O();B(0,"button",12,4),L("click",function(){M(t);let n=d();return P(n.onNextButtonClick())}),u(2,Rt,1,1,"ng-container")(3,Nt,1,0,"ChevronRightIcon"),N()}if(e&2){let t=d();r("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex)("data-pc-group-section","navigator"),v(2),T(t.nextIconTemplate||t._nextIconTemplate?2:3)}}var mt=(()=>{class e extends k{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=f(D(()=>H));isPrevButtonEnabled=E(!1);isNextButtonEnabled=E(!1);resizeObserver;showNavigators=s(()=>this.pcTabs.showNavigators());tabindex=s(()=>this.pcTabs.tabindex());scrollable=s(()=>this.pcTabs.scrollable());constructor(){super(),at(()=>{this.pcTabs.value(),K(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&K(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=F(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=q(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=F(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,o=n>=a?a:n;t.scrollLeft=q(t)?-1*o:o}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollTop:n,scrollWidth:a,scrollHeight:o,offsetWidth:Q,offsetHeight:Wt}=t,G=Math.abs(t.scrollLeft),[_t,Ut]=[F(t),bt(t)];this.isPrevButtonEnabled.set(G!==0),this.isNextButtonEnabled.set(i.offsetWidth>=Q&&G!==a-_t)}updateInkBar(){let t=this.content.nativeElement,i=this.inkbar.nativeElement,n=this.tabs.nativeElement,a=lt(t,'[data-pc-name="tab"][data-p-active="true"]');i.style.width=rt(a)+"px",i.style.left=j(a).left-j(n).left+"px"}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,a)=>a?n+F(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=g({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&(A(a,wt,4),A(a,xt,4),A(a,pt,4)),i&2){let o;l(o=c())&&(n.prevIconTemplate=o.first),l(o=c())&&(n.nextIconTemplate=o.first),l(o=c())&&(n.templates=o)}},viewQuery:function(i,n){if(i&1&&(x(Ct,5),x($t,5),x(kt,5),x(Dt,5),x(Bt,5)),i&2){let a;l(a=c())&&(n.content=a.first),l(a=c())&&(n.prevButton=a.first),l(a=c())&&(n.nextButton=a.first),l(a=c())&&(n.inkbar=a.first),l(a=c())&&(n.tabs=a.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(r("data-pc-name","tablist"),_("p-tablist",!0)("p-component",!0))},features:[m],ngContentSelectors:Lt,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){if(i&1){let a=O();y(),u(0,Et,4,4,"button",5),B(1,"div",6,0),L("scroll",function(Q){return M(a),P(n.onScroll(Q))}),B(3,"div",7,1),w(5),S(6,"span",8,2),N()(),u(8,St,4,4,"button",9)}i&2&&(T(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),v(),R("ngClass",nt(4,It,n.scrollable())),v(5),r("data-pc-section","inkbar"),v(2),T(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[$,ot,st,ht,vt,ft,J,U],encapsulation:2,changeDetection:0})}return e})(),Ot=["*"],At=(()=>{class e extends k{value=V();disabled=p(!1,{transform:C});pcTabs=f(D(()=>H));pcTabList=f(D(()=>mt));ripple=s(()=>this.config.ripple());id=s(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=s(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=s(()=>W(this.pcTabs.value(),this.value()));tabindex=s(()=>this.active()?this.pcTabs.tabindex():-1);onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?I(n,"data-p-disabled")||I(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?I(n,"data-p-disabled")||I(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){ct(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&L("focus",function(o){return n.onFocus(o)})("click",function(o){return n.onClick(o)})("keydown",function(o){return n.onKeyDown(o)}),i&2&&(r("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),_("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[tt([J]),m],ngContentSelectors:Ot,decls:1,vars:0,template:function(i,n){i&1&&(y(),w(0))},dependencies:[$,U],encapsulation:2,changeDetection:0})}return e})(),Ht=["*"];function Qt(e,b){e&1&&w(0)}var zt=(()=>{class e extends k{pcTabs=f(D(()=>H));value=V(void 0);id=s(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=s(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=s(()=>W(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(r("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),_("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[m],ngContentSelectors:Ht,decls:1,vars:1,template:function(i,n){i&1&&(y(),u(0,Qt,1,0)),i&2&&T(n.active()?0:-1)},dependencies:[$],encapsulation:2,changeDetection:0})}return e})(),Kt=["*"],jt=(()=>{class e extends k{static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(r("data-pc-name","tabpanels")("role","presentation"),_("p-tabpanels",!0)("p-component",!0))},features:[m],ngContentSelectors:Kt,decls:1,vars:0,template:function(i,n){i&1&&(y(),w(0))},dependencies:[$],encapsulation:2,changeDetection:0})}return e})(),qt=["*"],H=(()=>{class e extends k{value=V(void 0);scrollable=p(!1,{transform:C});lazy=p(!1,{transform:C});selectOnFocus=p(!1,{transform:C});showNavigators=p(!0,{transform:C});tabindex=p(0,{transform:it});id=E(ut("pn_id_"));_componentStyle=f(gt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(r("data-pc-name","tabs")("id",n.id),_("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[et([gt]),m],ngContentSelectors:qt,decls:1,vars:0,template:function(i,n){i&1&&(y(),w(0))},dependencies:[$],encapsulation:2,changeDetection:0})}return e})(),ge=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[H,jt,zt,mt,At]})}return e})();export{mt as a,At as b,H as c,ge as d};
