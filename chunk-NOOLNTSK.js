import{b as gt,c as wt}from"./chunk-JM5LJ4YY.js";import{a as at,b as nt}from"./chunk-INRJP2BX.js";import{$b as bt,Ab as rt,Cb as I,Eb as lt,Fb as st,Jb as pt,Ka as it,La as ot,Lb as ct,Nb as ht,Pb as dt,Rb as mt,Sb as ft,Tb as ut,_b as vt,hb as F,na as Z,ra as tt,ua as p,va as et,za as P}from"./chunk-YO4VYWVM.js";import"./chunk-WCGJ44IN.js";import{a as L}from"./chunk-62HDJCME.js";import{a as J,c as K,d as k,h as u}from"./chunk-J6QA2CVF.js";import"./chunk-QWWJFNO7.js";import{$b as c,Ab as U,Ac as W,J as $,Ka as H,Nb as M,Pb as z,Zb as r,_b as s,ea as C,fa as x,fc as Y,hc as B,ic as V,jb as b,ka as v,mc as X,nc as q,ob as f,oc as G,sc as m,uc as Q,vd as S,wb as d,xb as y,ya as D}from"./chunk-XL4EU3MI.js";import"./chunk-VOSPIT4N.js";var St=["*"],kt=({dt:i})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${i("floatlabel.font.weight")};
    inset-inline-start: ${i("floatlabel.position.x")};
    color: ${i("floatlabel.color")};
    transition-duration: ${i("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${i("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${i("form.field.padding.x")} * 2) + ${i("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${i("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${i("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${i("floatlabel.active.font.size")};
    font-weight: ${i("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${i("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${i("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${i("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${i("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${i("floatlabel.on.border.radius")};
    background: ${i("floatlabel.on.active.background")};
    padding: ${i("floatlabel.on.active.padding")};
}
`,Pt={root:({instance:i,props:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},xt=(()=>{class i extends tt{name="floatlabel";theme=kt;classes=Pt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(i)))(o||i)}})();static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();var yt=(()=>{class i extends ot{_componentStyle=v(xt);variant="over";static \u0275fac=(()=>{let t;return function(o){return(t||(t=D(i)))(o||i)}})();static \u0275cmp=d({type:i,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(a,o){a&2&&z("p-floatlabel",!0)("p-floatlabel-over",o.variant==="over")("p-floatlabel-on",o.variant==="on")("p-floatlabel-in",o.variant==="in")},inputs:{variant:"variant"},features:[W([xt]),U],ngContentSelectors:St,decls:1,vars:0,template:function(a,o){a&1&&(B(),V(0))},dependencies:[S,Z],encapsulation:2,changeDetection:0})}return i})();var A=class i{constructor(e,t,a,o){this.authService=e;this.authTokenManagerService=t;this.router=a;this.apiUrlService=o}fb=v(dt);loginForm=this.fb.group({username:this.fb.control("",I.required),password:this.fb.control("",I.required),apiUrl:this.fb.control(L.apiUrls[0],I.required)});currentYear=new Date().getFullYear();apiOptions=[...L.apiUrls.map(e=>({label:e,value:e}))];onSubmit(){if(this.loginForm.valid){let{username:e,password:t,apiUrl:a}=this.loginForm.getRawValue();this.apiUrlService.setApiUrl(a),this.authService.login(e,t).subscribe({next:o=>{this.authTokenManagerService.storeTokens(o),this.router.navigate(["/"]).catch(()=>{})},error:()=>{this.loginForm.controls.password.reset()}})}}static \u0275fac=function(t){return new(t||i)(f(at),f(nt),f(k),f(it))};static \u0275cmp=d({type:i,selectors:[["app-login"]],decls:26,vars:6,consts:[[1,"panel","login-box","flex","flex-col","items-stretch","w-full","max-w-[700px]","mx-auto","pb-8"],[1,"bg-white","p-[15px_34px_35px]","justify-start","rounded-none"],[1,"flex","flex-col"],[1,"mt-8","text-[1.62rem]","font-normal","leading-[2.25]","text-center","!text-gray-500"],[1,"mx-12","mt-10",3,"ngSubmit","formGroup"],[1,"grid","gap-6"],["for","apiUrl"],["id","apiUrl","formControlName","apiUrl","optionLabel","label","optionValue","value",1,"w-full",3,"options"],["id","username","pInputText","","formControlName","username","autocomplete","username",1,"w-full"],["for","username"],["formControlName","password","autocomplete","current-password",3,"feedback","toggleMask"],["for","password"],[1,"flex","justify-center","items-center","my-6"],["type","submit",1,"w-[120px]","h-[50px]","text-white","rounded","border-none","bg-[#378bc0]",3,"disabled"],[1,"!text-white","pt-4","underline","cursor-pointer","self-center"],[1,"!text-white","self-center"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),m(4," Welcome to Cypherview "),s(),r(5,"form",4),Y("ngSubmit",function(){return a.onSubmit()}),r(6,"div",5)(7,"p-floatlabel")(8,"label",6),m(9,"API URL*"),s(),c(10,"p-select",7),s(),r(11,"p-floatlabel"),c(12,"input",8),r(13,"label",9),m(14,"Username*"),s()(),r(15,"p-floatlabel"),c(16,"p-password",10),r(17,"label",11),m(18,"Password*"),s()()(),r(19,"div",12)(20,"button",13),m(21," Login "),s()()()()(),r(22,"a",14),m(23,"Forgotten Password?"),s(),r(24,"a",15),m(25),s()()),t&2&&(b(5),M("formGroup",a.loginForm),b(5),M("options",a.apiOptions),b(6),M("feedback",!1)("toggleMask",!0),b(4),M("disabled",a.loginForm.invalid),b(5),Q(" Copyright ",a.currentYear,". All rights reserved. "))},dependencies:[u,mt,pt,rt,lt,st,ct,ht,yt,F,wt,gt,ut,ft,bt,vt],styles:["[_nghost-%COMP%]{display:flex;width:100%;align-items:center}[_nghost-%COMP%]     .p-inputtext{color:var(--form-field-color)!important;background:var(--p-inputtext-background)!important;border:1px solid var(--p-inputtext-border-color)!important}[_nghost-%COMP%]     .p-inputtext:enabled:focus{border-color:#378bc0!important}[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, [_nghost-%COMP%]     .p-floatlabel:has(input:focus) label{color:#378bc0}[_nghost-%COMP%]     p-select{background:var(--p-select-background)!important;border-color:var(--p-select-border-color)!important}[_nghost-%COMP%]     p-select .p-select-label{color:var(--form-field-color)!important}[_nghost-%COMP%]     p-password .p-password, [_nghost-%COMP%]     p-password input{width:100%}[_nghost-%COMP%]     p-password input, [_nghost-%COMP%]     p-password textarea, [_nghost-%COMP%]     p-password p-select, [_nghost-%COMP%]     p-password .p-inputgroupaddon{color:var(--form-field-color)!important}@media (min-width: 640px){.panel[_ngcontent-%COMP%]{bottom:0;margin-bottom:0;height:100vh;padding:0}.login-box[_ngcontent-%COMP%]{top:0;height:100%;width:100%;padding:0}}"]})};var N=class i{canvas;ctx;particles=[];animationFrameId;mouse={x:0,y:0};running=!1;mouseMoveHandler=e=>{let t=this.canvas.getBoundingClientRect(),a=this.canvas.width/t.width,o=this.canvas.height/t.height;this.mouse.x=(e.clientX-t.left)*a,this.mouse.y=(e.clientY-t.top)*o};touchMoveHandler=e=>{if(p(this.canvas)||!P(this.canvas))return;let t=this.canvas.getBoundingClientRect(),a=this.canvas.width/t.width,o=this.canvas.height/t.height;this.mouse.x=(e.touches[0].clientX-t.left)*a,this.mouse.y=(e.touches[0].clientY-t.top)*o};resizeHandler=()=>{if(p(this.canvas)||!P(this.canvas))return;let e=this.canvas.width,t=this.canvas.height;this.resizeCanvas();let a=this.canvas.width/e,o=this.canvas.height/t;this.particles.forEach(n=>{n.x*=a,n.y*=o,n.x<0&&(n.x=0),n.x>this.canvas.width&&(n.x=this.canvas.width),n.y<0&&(n.y=0),n.y>this.canvas.height&&(n.y=this.canvas.height)})};initAnimation(e){if(p(e)||!P(e))return;this.canvas=e;let t=e.getContext("2d");t&&(this.ctx=t,this.resizeCanvas(),window.addEventListener("mousemove",this.mouseMoveHandler),window.addEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler),this.running=!0,this.init())}init(){if(p(this.canvas)||p(this.ctx))return;this.particles=[];let e=this.canvas.width*this.canvas.height,t=1920*1080,a=Math.min(1,e/t),o=200,n=20,l=Math.floor(o*a),w=Math.floor(n*a);for(let h=0;h<l;h++)this.particles.push(new O(this.canvas,this.particles));for(let h=0;h<w;h++)this.particles.push(new j(this.canvas,this.particles));this.animate()}resizeCanvas(){this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}animate(){if(p(this.canvas)||p(this.ctx)||!this.running)return;let e=this.ctx.createLinearGradient(0,0,0,this.canvas.height);e.addColorStop(0,"#000B1E"),e.addColorStop(1,"#000000"),this.ctx.fillStyle=e,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.particles.forEach(t=>{t.update(this.mouse),t.draw(this.ctx)}),this.drawConnections(),this.animationFrameId=requestAnimationFrame(()=>this.animate())}drawConnections(){if(!(p(this.canvas)||p(this.ctx)))for(let e=0;e<this.particles.length;e++)for(let t=e+1;t<this.particles.length;t++){let a=this.particles[e].x-this.particles[t].x,o=this.particles[e].y-this.particles[t].y,n=Math.sqrt(a*a+o*o);if(n>150&&n<350){let l=1-(n-150)/100;this.ctx.beginPath(),this.ctx.strokeStyle=`rgba(255, 255, 255, ${l*.3})`,this.ctx.lineWidth=.5,this.ctx.moveTo(this.particles[e].x,this.particles[e].y),this.ctx.lineTo(this.particles[t].x,this.particles[t].y),this.ctx.stroke()}}}destroy(){this.running=!1,et(this.animationFrameId)&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("mousemove",this.mouseMoveHandler),window.removeEventListener("touchmove",this.touchMoveHandler),window.removeEventListener("resize",this.resizeHandler)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=C({token:i,factory:i.\u0275fac,providedIn:"root"})},O=class{constructor(e,t){this.canvas=e;this.particles=t;this.x=this.baseX=Math.random()*e.width,this.y=this.baseY=Math.random()*e.height}x;y;speed=.25;direction=Math.random()*Math.PI*2;radius=Math.random()*4.5+.5;baseX;baseY;update(e){this.x+=Math.cos(this.direction)*this.speed,this.y+=Math.sin(this.direction)*this.speed;let t=e.x-this.x,a=e.y-this.y,o=Math.sqrt(t*t+a*a);if(o<150){let n=(200-o)/200,l=Math.atan2(a,t);this.x-=Math.cos(l)*n*5,this.y-=Math.sin(l)*n*5}this.particles.forEach(n=>{if(n!==this){let l=n.x-this.x,w=n.y-this.y,h=Math.sqrt(l*l+w*w);if(h<100){let T=(100-h)/100;this.x-=l*T*.1,this.y-=w*T*.1}}}),(this.x<0||this.x>this.canvas.width)&&(this.direction=Math.PI-this.direction),(this.y<0||this.y>this.canvas.height)&&(this.direction=-this.direction)}draw(e){let t=e.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);t.addColorStop(0,"rgba(255, 255, 255, 0.5)"),t.addColorStop(1,"rgba(255, 255, 255, 0)"),e.beginPath(),e.arc(this.x,this.y,this.radius,0,Math.PI*2),e.fillStyle=t,e.fill()}},j=class extends O{originalX;amplitude=Math.random()*10+1;period=Math.random()*.25+.02;phase=Math.random()*Math.PI*2;constructor(e,t){super(e,t),this.originalX=this.x,this.speed=.01+Math.random()*.2}update(e){this.y-=this.speed,this.x=this.originalX+Math.sin(this.y*this.period+this.phase)*this.amplitude;let t=e.x-this.x,a=e.y-this.y,o=Math.sqrt(t*t+a*a);if(o<400){let n=(200-o)/200,l=Math.atan2(a,t);this.x-=Math.cos(l)*n*5,this.y-=Math.sin(l)*n*5}this.y<0&&(this.y=this.canvas.height,this.originalX=Math.random()*this.canvas.width)}};var At=["canvas"],E=class i{constructor(e){this.networkAnimationService=e}canvasRef;ngAfterViewInit(){this.networkAnimationService.initAnimation(this.canvasRef.nativeElement)}static \u0275fac=function(t){return new(t||i)(f(N))};static \u0275cmp=d({type:i,selectors:[["app-network-animation"]],viewQuery:function(t,a){if(t&1&&X(At,5),t&2){let o;q(o=G())&&(a.canvasRef=o.first)}},decls:2,vars:0,consts:[["canvas",""],[1,"network-animation"]],template:function(t,a){t&1&&c(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:-1;overflow:hidden;margin:0;padding:0}canvas.network-animation[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:auto;image-rendering:-webkit-crisp-edges;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;image-rendering:pixelated;-webkit-backface-visibility:hidden;backface-visibility:hidden}"]})};var _=class i{isRouteActive=H(!1);router=v(k);async ngOnInit(){await this.router.navigate(["/auth/login"]),this.router.events.pipe($(e=>e instanceof J)).subscribe(()=>{this.isRouteActive.set(this.router.url!=="/auth")})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["app-container"]],decls:5,vars:0,consts:[[1,"wrapper","bg-cover","bg-center","h-screen"],[1,"flex","flex-col","items-center","h-auto","sm:h-full"],["src","assets/images/logo.svg","alt","Cypherview logo",1,"logo-filter","w-1/2","my-16","max-w-[1050px]","hidden","sm:block"]],template:function(t,a){t&1&&(r(0,"div",0),c(1,"app-network-animation"),r(2,"div",1),c(3,"img",2)(4,"router-outlet"),s()())},dependencies:[u,K,F,E],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;background:var(--color-background-dark, #000b1e);overflow:hidden;width:100%}.wrapper[_ngcontent-%COMP%]   app-network-animation[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]{position:relative;z-index:1}.wrapper[_ngcontent-%COMP%]   .logo-filter[_ngcontent-%COMP%]{filter:brightness(0) invert(1);transition:filter .2s ease}"]})};var Nt=[{path:"",component:_,children:[{path:"login",component:A}]}],R=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=y({type:i});static \u0275inj=x({imports:[u.forChild(Nt),u]})};var Ct=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=y({type:i});static \u0275inj=x({imports:[S,R]})};export{Ct as AuthModule};
