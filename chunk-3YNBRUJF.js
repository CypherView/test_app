import{H as _t,K as me,O as Ye,S as Ct,U as be,da as Ot,na as Jt,oa as H,r as ge,sa as Z,va as j,wa as Xe,x as vt,ya as ft}from"./chunk-VK6QSP4D.js";import{a as Ke}from"./chunk-YJVTBVYL.js";import{$a as he,$c as kt,Ab as et,Ac as qe,Bb as je,Cb as $,Cc as E,Dc as Qe,Ec as ht,Fc as pt,Ic as fe,Jb as O,Kb as P,Lb as A,Lc as Ze,Mb as q,Nb as Q,Ob as ct,Pb as We,Q as jt,R as st,Rb as it,S as k,Sb as S,Sc as Ut,T as z,Tb as dt,Tc as Je,Ub as ut,Uc as qt,V as yt,Vc as Qt,Wa as g,Wb as K,Wc as Zt,Xa as u,Xb as pe,Y as M,Yb as W,Zb as G,Zc as X,ac as $t,bb as Ft,bc as Wt,cc as Gt,f as Te,fa as tt,ga as Ne,gb as F,ha as ze,hb as B,i as ke,ia as at,ib as I,ic as V,jc as Ge,ka as b,kb as p,kc as ot,lc as At,mb as wt,mc as Ue,nb as D,o as Oe,qa as L,qb as Re,ra as Be,u as Pe,ua as lt,va as Mt,xb as x,xc as Tt,yb as c,za as Le,zb as He}from"./chunk-JFLOAJK7.js";import{a as T,b as R}from"./chunk-DAQOROHW.js";var tn=class e{apiUrl=Ke.apiUrls[0];cachedUrlObj=null;constructor(){let i=localStorage.getItem("apiUrl")||this.apiUrl;this.setApiUrl(i)}setApiUrl(i){if(!i.trim())throw new Error("Empty API URL");try{let t=new URL(i);this.cachedUrlObj=t,this.apiUrl=i,localStorage.setItem("apiUrl",i)}catch(t){throw this.cachedUrlObj=null,t}}getCurrentApiUrl(){return this.apiUrl}getUrlObject(){if(!this.cachedUrlObj)throw new Error("No valid API URL configured. Please check your settings.");return this.cachedUrlObj}static \u0275fac=function(t){return new(t||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})};var Ho=(()=>{class e extends ft{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["CheckIcon"]],features:[p],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(at(),O(0,"svg",0),A(1,"path",1),P()),n&2&&($(o.getClassNames()),x("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var ye=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=_=>{if(_)return getComputedStyle(_).getPropertyValue("position")==="relative"?_:r(_.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),h=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),y=this.getViewport(),v=r(t)?.getBoundingClientRect()||{top:-1*h,left:-1*d},w,N;l.top+a+s.height>y.height?(w=l.top-v.top-s.height,t.style.transformOrigin="bottom",l.top+w<0&&(w=-1*l.top)):(w=a+l.top-v.top,t.style.transformOrigin="top");let f=l.left+s.width-y.width,m=l.left-v.left;s.width>y.width?N=(l.left-v.left)*-1:f>0?N=m-f:N=l.left-v.left,t.style.top=w+"px",t.style.left=N+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,h=n.offsetWidth,d=n.getBoundingClientRect(),y=this.getWindowScrollTop(),C=this.getWindowScrollLeft(),v=this.getViewport(),w,N;d.top+l+s>v.height?(w=d.top+y-s,t.style.transformOrigin="bottom",w<0&&(w=y)):(w=l+d.top+y,t.style.transformOrigin="top"),d.left+a>v.width?N=Math.max(0,d.left+C+h-a):N=d.left+C,t.style.top=w+"px",t.style.left=N+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let h=l.split(",");for(let d of h){let y=this.findSingle(a,d);y&&s(y)&&n.push(y)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,y=t.scrollTop,C=t.clientHeight,v=this.getOuterHeight(n);d<0?t.scrollTop=y+d:d+v>C&&(t.scrollTop=y+d-C+v)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,h)=>{if(h!=null){let d=typeof h;if(d==="string"||d==="number")l.push(h);else if(d==="object"){let y=Array.isArray(h)?o(r,h):Object.entries(h).map(([C,v])=>r==="style"&&(v||v===0)?`${C.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${v}`:v?C:void 0);l=y.length?l.concat(y.filter(C=>!!C)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),en=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=ye.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var nn=(()=>{class e extends j{autofocus=!1;_autofocus=!1;focused=!1;platformId=M(Le);document=M(Ze);host=M(Mt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){kt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=ye.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",E],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[wt,p]})}return e})(),Ko=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({})}return e})();var Un=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,qn={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":be(e.value)&&String(e.value).length===1,"p-badge-dot":Ct(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},on=(()=>{class e extends Z{name="badge";theme=Un;classes=qn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var ve=(()=>{class e extends j{styleClass=lt();style=lt();badgeSize=lt();size=lt();severity=lt();value=lt();badgeDisabled=lt(!1,{transform:E});_componentStyle=M(on);containerClass=ht(()=>{let t="p-badge p-component";return be(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Ct(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(je(o.style()),$(o.containerClass()),He("display",o.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[V([on]),p],decls:1,vars:1,template:function(n,o){n&1&&Wt(0),n&2&&Gt(o.value())},dependencies:[X,H],encapsulation:2,changeDetection:0})}return e})(),rn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({imports:[ve,H,H]})}return e})();var mr=(()=>{class e extends ft{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["ChevronDownIcon"]],features:[p],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,o){n&1&&(at(),O(0,"svg",0),A(1,"path",1),P()),n&2&&($(o.getClassNames()),x("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var _r=(()=>{class e extends ft{pathId;ngOnInit(){this.pathId="url(#"+Ot()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["SearchIcon"]],features:[p],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(at(),O(0,"svg",0)(1,"g"),A(2,"path",1),P(),O(3,"defs")(4,"clipPath",2),A(5,"rect",3),P()()()),n&2&&($(o.getClassNames()),x("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),g(),x("clip-path",o.pathId),g(3),c("id",o.pathId))},encapsulation:2})}return e})();var Yt=(()=>{class e extends ft{pathId;ngOnInit(){this.pathId="url(#"+Ot()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["SpinnerIcon"]],features:[p],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(at(),O(0,"svg",0)(1,"g"),A(2,"path",1),P(),O(3,"defs")(4,"clipPath",2),A(5,"rect",3),P()()()),n&2&&($(o.getClassNames()),x("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),g(),x("clip-path",o.pathId),g(3),c("id",o.pathId))},encapsulation:2})}return e})();var Jn=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Yn={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},sn=(()=>{class e extends Z{name="button";theme=Jn;classes=Yn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var Kn=["content"],Xn=["loading"],ti=["icon"],ei=["*"],an=e=>({class:e});function ni(e,i){e&1&&ct(0)}function ii(e,i){if(e&1&&A(0,"span",8),e&2){let t=S(3);c("ngClass",t.iconClass()),x("aria-hidden",!0)("data-pc-section","loadingicon")}}function oi(e,i){if(e&1&&A(0,"SpinnerIcon",9),e&2){let t=S(3);c("styleClass",t.spinnerIconClass())("spin",!0),x("aria-hidden",!0)("data-pc-section","loadingicon")}}function ri(e,i){if(e&1&&(q(0),D(1,ii,1,3,"span",6)(2,oi,1,4,"SpinnerIcon",7),Q()),e&2){let t=S(2);g(),c("ngIf",t.loadingIcon),g(),c("ngIf",!t.loadingIcon)}}function si(e,i){}function ai(e,i){if(e&1&&D(0,si,0,0,"ng-template",10),e&2){let t=S(2);c("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function li(e,i){if(e&1&&(q(0),D(1,ri,3,2,"ng-container",2)(2,ai,1,1,null,5),Q()),e&2){let t=S();g(),c("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),g(),c("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",ot(3,an,t.iconClass()))}}function ci(e,i){if(e&1&&A(0,"span",8),e&2){let t=S(2);$(t.icon),c("ngClass",t.iconClass()),x("data-pc-section","icon")}}function di(e,i){}function ui(e,i){if(e&1&&D(0,di,0,0,"ng-template",10),e&2){let t=S(2);c("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function hi(e,i){if(e&1&&(q(0),D(1,ci,1,4,"span",11)(2,ui,1,1,null,5),Q()),e&2){let t=S();g(),c("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),g(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",ot(3,an,t.iconClass()))}}function pi(e,i){if(e&1&&(O(0,"span",12),Wt(1),P()),e&2){let t=S();x("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),g(),Gt(t.label)}}function fi(e,i){if(e&1&&A(0,"p-badge",13),e&2){let t=S();c("value",t.badge)("severity",t.badgeSeverity)}}var gi=(()=>{class e extends j{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new L;onFocus=new L;onBlur=new L;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ct(this.fluid)?!!n:this.fluid}_componentStyle=M(sn);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(K(r,Kn,5),K(r,Xn,5),K(r,ti,5),K(r,Jt,4)),n&2){let s;W(s=G())&&(o.contentTemplate=s.first),W(s=G())&&(o.loadingIconTemplate=s.first),W(s=G())&&(o.iconTemplate=s.first),W(s=G())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",E],loading:[2,"loading","loading",E],loadingIcon:"loadingIcon",raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],plain:[2,"plain","plain",E],severity:"severity",outlined:[2,"outlined","outlined",E],link:[2,"link","link",E],tabindex:[2,"tabindex","tabindex",Qe],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",E],fluid:[2,"fluid","fluid",E],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[V([sn]),wt,p,tt],ngContentSelectors:ei,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(dt(),O(0,"button",0),it("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),ut(1),D(2,ni,1,0,"ng-container",1)(3,li,3,5,"ng-container",2)(4,hi,3,5,"ng-container",2)(5,pi,2,3,"span",3)(6,fi,1,2,"p-badge",4),P()),n&2&&(c("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),x("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),g(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),g(),c("ngIf",o.loading),g(),c("ngIf",!o.loading),g(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),g(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[X,Ut,qt,Zt,Qt,Xe,nn,Yt,rn,ve,H],encapsulation:2,changeDetection:0})}return e})(),Qr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({imports:[X,gi,H,H]})}return e})();var Jr="app-client",Yr="accessToken",Kr="refreshToken",Xr="tokenExpiry";var ts=[10,25,50,100],es="00000000-0000-0000-0000-000000000000",ns=100,is={id:"00000000-0000-0000-0000-000000000000",name:"Default",state:"active"};var mn=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(u(he),u(Mt))};static \u0275dir=I({type:e})}return e})(),mi=(()=>{class e extends mn{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,features:[p]})}return e})(),le=new yt("");var bi={provide:le,useExisting:st(()=>bn),multi:!0};function yi(){let e=fe()?fe().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var vi=new yt(""),bn=(()=>{class e extends mn{_compositionMode;_composing=!1;constructor(t,n,o){super(t,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!yi())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(u(he),u(Mt),u(vi,8))};static \u0275dir=I({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&it("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[V([bi]),p]})}return e})();function gt(e){return e==null||(typeof e=="string"||Array.isArray(e))&&e.length===0}function yn(e){return e!=null&&typeof e.length=="number"}var Vt=new yt(""),Et=new yt(""),_i=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ln=class{static min(i){return Ci(i)}static max(i){return wi(i)}static required(i){return Si(i)}static requiredTrue(i){return xi(i)}static email(i){return Ii(i)}static minLength(i){return Di(i)}static maxLength(i){return Vi(i)}static pattern(i){return Ei(i)}static nullValidator(i){return vn(i)}static compose(i){return In(i)}static composeAsync(i){return Vn(i)}};function Ci(e){return i=>{if(gt(i.value)||gt(e))return null;let t=parseFloat(i.value);return!isNaN(t)&&t<e?{min:{min:e,actual:i.value}}:null}}function wi(e){return i=>{if(gt(i.value)||gt(e))return null;let t=parseFloat(i.value);return!isNaN(t)&&t>e?{max:{max:e,actual:i.value}}:null}}function Si(e){return gt(e.value)?{required:!0}:null}function xi(e){return e.value===!0?null:{required:!0}}function Ii(e){return gt(e.value)||_i.test(e.value)?null:{email:!0}}function Di(e){return i=>gt(i.value)||!yn(i.value)?null:i.value.length<e?{minlength:{requiredLength:e,actualLength:i.value.length}}:null}function Vi(e){return i=>yn(i.value)&&i.value.length>e?{maxlength:{requiredLength:e,actualLength:i.value.length}}:null}function Ei(e){if(!e)return vn;let i,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),i=new RegExp(t)):(t=e.toString(),i=e),n=>{if(gt(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function vn(e){return null}function _n(e){return e!=null}function Cn(e){return Re(e)?ke(e):e}function wn(e){let i={};return e.forEach(t=>{i=t!=null?T(T({},i),t):i}),Object.keys(i).length===0?null:i}function Sn(e,i){return i.map(t=>t(e))}function Mi(e){return!e.validate}function xn(e){return e.map(i=>Mi(i)?i:t=>i.validate(t))}function In(e){if(!e)return null;let i=e.filter(_n);return i.length==0?null:function(t){return wn(Sn(t,i))}}function Dn(e){return e!=null?In(xn(e)):null}function Vn(e){if(!e)return null;let i=e.filter(_n);return i.length==0?null:function(t){let n=Sn(t,i).map(Cn);return Pe(n).pipe(Oe(wn))}}function En(e){return e!=null?Vn(xn(e)):null}function cn(e,i){return e===null?[i]:Array.isArray(e)?[...e,i]:[e,i]}function Mn(e){return e._rawValidators}function Fn(e){return e._rawAsyncValidators}function _e(e){return e?Array.isArray(e)?e:[e]:[]}function Xt(e,i){return Array.isArray(e)?e.includes(i):e===i}function dn(e,i){let t=_e(i);return _e(e).forEach(o=>{Xt(t,o)||t.push(o)}),t}function un(e,i){return _e(i).filter(t=>!Xt(e,t))}var te=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Dn(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=En(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},U=class extends te{name;get formDirective(){return null}get path(){return null}},rt=class extends te{_parent=null;name=null;valueAccessor=null},ee=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Fi={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Vs=R(T({},Fi),{"[class.ng-submitted]":"isSubmitted"}),Es=(()=>{class e extends ee{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(u(rt,2))};static \u0275dir=I({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&et("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[p]})}return e})(),Ms=(()=>{class e extends ee{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(u(U,10))};static \u0275dir=I({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&et("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[p]})}return e})();var Pt="VALID",Kt="INVALID",xt="PENDING",Nt="DISABLED",mt=class{},ne=class extends mt{value;source;constructor(i,t){super(),this.value=i,this.source=t}},zt=class extends mt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},Bt=class extends mt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},It=class extends mt{status;source;constructor(i,t){super(),this.status=i,this.source=t}},Ce=class extends mt{source;constructor(i){super(),this.source=i}},we=class extends mt{source;constructor(i){super(),this.source=i}};function Ie(e){return(ce(e)?e.validators:e)||null}function $i(e){return Array.isArray(e)?Dn(e):e||null}function De(e,i){return(ce(i)?i.asyncValidators:e)||null}function Ai(e){return Array.isArray(e)?En(e):e||null}function ce(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function $n(e,i,t){let n=e.controls;if(!(i?Object.keys(n):n).length)throw new jt(1e3,"");if(!n[t])throw new jt(1001,"")}function An(e,i,t){e._forEachChild((n,o)=>{if(t[o]===void 0)throw new jt(1002,"")})}var Dt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return pt(this.statusReactive)}set status(i){pt(()=>this.statusReactive.set(i))}_status=ht(()=>this.statusReactive());statusReactive=Ft(void 0);get valid(){return this.status===Pt}get invalid(){return this.status===Kt}get pending(){return this.status==xt}get disabled(){return this.status===Nt}get enabled(){return this.status!==Nt}errors;get pristine(){return pt(this.pristineReactive)}set pristine(i){pt(()=>this.pristineReactive.set(i))}_pristine=ht(()=>this.pristineReactive());pristineReactive=Ft(!0);get dirty(){return!this.pristine}get touched(){return pt(this.touchedReactive)}set touched(i){pt(()=>this.touchedReactive.set(i))}_touched=ht(()=>this.touchedReactive());touchedReactive=Ft(!1);get untouched(){return!this.touched}_events=new Te;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(dn(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(dn(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(un(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(un(i,this._rawAsyncValidators))}hasValidator(i){return Xt(this._rawValidators,i)}hasAsyncValidator(i){return Xt(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(R(T({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new Bt(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),t&&i.emitEvent!==!1&&this._events.next(new Bt(!1,n))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(R(T({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new zt(!1,n))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),t&&i.emitEvent!==!1&&this._events.next(new zt(!0,n))}markAsPending(i={}){this.status=xt;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new It(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(R(T({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Nt,this.errors=null,this._forEachChild(o=>{o.disable(R(T({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ne(this.value,n)),this._events.next(new It(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(R(T({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Pt,this._forEachChild(n=>{n.enable(R(T({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(R(T({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,t){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Pt||this.status===xt)&&this._runAsyncValidator(n,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ne(this.value,t)),this._events.next(new It(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(R(T({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Nt:Pt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=xt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Cn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,o)=>n&&n._find(o),this)}getError(i,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new It(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,n)}_initObservables(){this.valueChanges=new L,this.statusChanges=new L}_calculateStatus(){return this._allControlsDisabled()?Nt:this.errors?Kt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xt)?xt:this._anyControlsHaveStatus(Kt)?Kt:Pt}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,t),o&&this._events.next(new zt(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new Bt(this.touched,t)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){ce(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let t=this._parent&&this._parent.dirty;return!i&&!!t&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=$i(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Ai(this._rawAsyncValidators)}},ie=class extends Dt{constructor(i,t,n){super(Ie(t),De(n,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this.controls[i]?this.controls[i]:(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,n={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,t={}){An(this,!0,i),Object.keys(i).forEach(n=>{$n(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(i,t,n)=>(i[n]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&i(n,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(t,n,o)=>((n.enabled||this.disabled)&&(t[o]=n.value),t))}_reduceChildren(i,t){let n=i;return this._forEachChild((o,r)=>{n=t(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Se=class extends ie{};var Rt=new yt("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function ue(e,i){return[...i.path,e]}function oe(e,i,t=de){Ve(e,i),i.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(e.disabled),ki(e,i),Pi(e,i),Oi(e,i),Ti(e,i)}function re(e,i,t=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),ae(e,i),e&&(i._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function se(e,i){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function Ti(e,i){if(i.valueAccessor.setDisabledState){let t=n=>{i.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),i._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Ve(e,i){let t=Mn(e);i.validator!==null?e.setValidators(cn(t,i.validator)):typeof t=="function"&&e.setValidators([t]);let n=Fn(e);i.asyncValidator!==null?e.setAsyncValidators(cn(n,i.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let o=()=>e.updateValueAndValidity();se(i._rawValidators,o),se(i._rawAsyncValidators,o)}function ae(e,i){let t=!1;if(e!==null){if(i.validator!==null){let o=Mn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(t=!0,e.setValidators(r))}}if(i.asyncValidator!==null){let o=Fn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(t=!0,e.setAsyncValidators(r))}}}let n=()=>{};return se(i._rawValidators,n),se(i._rawAsyncValidators,n),t}function ki(e,i){i.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Tn(e,i)})}function Oi(e,i){i.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Tn(e,i),e.updateOn!=="submit"&&e.markAsTouched()})}function Tn(e,i){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Pi(e,i){let t=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};e.registerOnChange(t),i._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Ni(e,i){e==null,Ve(e,i)}function zi(e,i){return ae(e,i)}function Ee(e,i){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function Bi(e){return Object.getPrototypeOf(e.constructor)===mi}function Li(e,i){e._syncPendingControls(),i.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Me(e,i){if(!i)return null;Array.isArray(i);let t,n,o;return i.forEach(r=>{r.constructor===bn?t=r:Bi(r)?n=r:o=r}),o||n||t||null}function Ri(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function hn(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function pn(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Lt=class extends Dt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,n){super(Ie(t),De(n,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ce(t)&&(t.nonNullable||t.initialValueIsDefault)&&(pn(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){hn(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){hn(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){pn(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Hi=e=>e instanceof Lt,ji=(()=>{class e extends U{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return ue(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,standalone:!1,features:[p]})}return e})();var Wi={provide:rt,useExisting:st(()=>Fe)},fn=Promise.resolve(),Fe=(()=>{class e extends rt{_changeDetectorRef;callSetDisabledState;control=new Lt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new L;constructor(t,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Me(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ee(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){oe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){fn.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,o=n!==0&&E(n);fn.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ue(t,this._parent):[t]}static \u0275fac=function(n){return new(n||e)(u(U,9),u(Vt,10),u(Et,10),u(le,10),u(qe,8),u(Rt,8))};static \u0275dir=I({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[V([Wi]),p,tt]})}return e})(),$s=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=I({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var $e=new yt(""),Gi={provide:rt,useExisting:st(()=>Ui)},Ui=(()=>{class e extends rt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new L;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,o,r,s){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=s,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=Me(this,o)}ngOnChanges(t){if(this._isControlChanged(t)){let n=t.form.previousValue;n&&re(n,this,!1),oe(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Ee(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&re(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(n){return new(n||e)(u(Vt,10),u(Et,10),u(le,10),u($e,8),u(Rt,8))};static \u0275dir=I({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[V([Gi]),p,tt]})}return e})(),qi={provide:U,useExisting:st(()=>kn)},kn=(()=>{class e extends U{callSetDisabledState;get submitted(){return pt(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=ht(()=>this._submittedReactive());_submittedReactive=Ft(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new L;constructor(t,n,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ae(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return oe(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){re(t.control||null,t,!1),Ri(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),Li(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Ce(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new we(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,o=this.form.get(t.path);n!==o&&(re(n||null,t),Hi(o)&&(oe(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Ni(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&zi(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ve(this.form,this),this._oldForm&&ae(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||e)(u(Vt,10),u(Et,10),u(Rt,8))};static \u0275dir=I({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&it("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[V([qi]),p,tt]})}return e})(),Qi={provide:U,useExisting:st(()=>On)},On=(()=>{class e extends ji{name=null;constructor(t,n,o){super(),this._parent=t,this._setValidators(n),this._setAsyncValidators(o)}_checkParentType(){Nn(this._parent)}static \u0275fac=function(n){return new(n||e)(u(U,13),u(Vt,10),u(Et,10))};static \u0275dir=I({type:e,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[V([Qi]),p]})}return e})(),Zi={provide:U,useExisting:st(()=>Pn)},Pn=(()=>{class e extends U{_parent;name=null;constructor(t,n,o){super(),this._parent=t,this._setValidators(n),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ue(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){Nn(this._parent)}static \u0275fac=function(n){return new(n||e)(u(U,13),u(Vt,10),u(Et,10))};static \u0275dir=I({type:e,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[V([Zi]),p]})}return e})();function Nn(e){return!(e instanceof On)&&!(e instanceof kn)&&!(e instanceof Pn)}var Ji={provide:rt,useExisting:st(()=>Yi)},Yi=(()=>{class e extends rt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new L;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Me(this,r)}ngOnChanges(t){this._added||this._setUpControl(),Ee(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ue(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||e)(u(U,13),u(Vt,10),u(Et,10),u(le,10),u($e,8))};static \u0275dir=I({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[V([Ji]),p,tt]})}return e})();var zn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({})}return e})(),xe=class extends Dt{constructor(i,t,n){super(Ie(t),De(n,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,t={}){this.controls.push(i),this._registerControl(i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(i,t,n={}){this.controls.splice(i,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,t={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(i,t,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,t={}){An(this,!1,i),i.forEach((n,o)=>{$n(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i=[],t={}){this._forEachChild((n,o)=>{n.reset(i[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((t,n)=>{i(t,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(t=>t.enabled&&i(t))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};function gn(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var Ki=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,n=null){let o=this._reduceControls(t),r={};return gn(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new ie(o,r)}record(t,n=null){let o=this._reduceControls(t);return new Se(o,n)}control(t,n,o){let r={};return this.useNonNullable?(gn(n)?r=n:(r.validators=n,r.asyncValidators=o),new Lt(t,R(T({},r),{nonNullable:!0}))):new Lt(t,n,o)}array(t,n,o){let r=t.map(s=>this._createControl(s));return new xe(r,n,o)}_reduceControls(t){let n={};return Object.keys(t).forEach(o=>{n[o]=this._createControl(t[o])}),n}_createControl(t){if(t instanceof Lt)return t;if(t instanceof Dt)return t;if(Array.isArray(t)){let n=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(n,o,r)}else return this.control(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),As=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=k({token:e,factory:()=>M(Ki).nonNullable,providedIn:"root"})}return e})();var Ts=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Rt,useValue:t.callSetDisabledState??de}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({imports:[zn]})}return e})(),ks=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:$e,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Rt,useValue:t.callSetDisabledState??de}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({imports:[zn]})}return e})();var to=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,eo={root:({instance:e,props:i})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},Bn=(()=>{class e extends Z{name="inputtext";theme=to;classes=eo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var Us=(()=>{class e extends j{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=M(Bn);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ct(this.fluid)?!!n:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||e)(u(Fe,8))};static \u0275dir=I({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,o){n&1&&it("input",function(s){return o.onInput(s)}),n&2&&et("p-filled",o.filled)("p-variant-filled",o.variant==="filled"||o.config.inputStyle()==="filled"||o.config.inputVariant()==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",E],pSize:"pSize"},features:[V([Bn]),wt,p]})}return e})(),qs=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({})}return e})();var no=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,io={root:"p-iconfield"},Ln=(()=>{class e extends Z{name="iconfield";theme=no;classes=io;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var oo=["*"],sa=(()=>{class e extends j{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=M(Ln);static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(n,o){n&2&&($(o._styleClass),et("p-iconfield-left",o.iconPosition==="left")("p-iconfield-right",o.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[V([Ln]),p],ngContentSelectors:oo,decls:1,vars:0,template:function(n,o){n&1&&(dt(),ut(0))},dependencies:[X],encapsulation:2,changeDetection:0})}return e})();var ro={root:"p-inputicon"},Rn=(()=>{class e extends Z{name="inputicon";classes=ro;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),so=["*"],_a=(()=>{class e extends j{styleClass;get hostClasses(){return this.styleClass}_componentStyle=M(Rn);static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=F({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(n,o){n&2&&($(o.hostClasses),et("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[V([Rn]),p],ngContentSelectors:so,decls:1,vars:0,template:function(n,o){n&1&&(dt(),ut(0))},dependencies:[X,H],encapsulation:2,changeDetection:0})}return e})();var ao=({dt:e})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e("virtualscroller.loader.mask.background")};
    color: ${e("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${e("virtualscroller.loader.icon.size")};
    width: ${e("virtualscroller.loader.icon.size")};
    height: ${e("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Hn=(()=>{class e extends Z{name="virtualscroller";theme=ao;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var jn=["content"],lo=["item"],co=["loader"],uo=["loadericon"],ho=["element"],po=["*"],fo=(e,i,t)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":e,"p-virtualscroller-both p-both-scroll":i,"p-virtualscroller-horizontal p-horizontal-scroll":t}),Ae=(e,i)=>({$implicit:e,options:i}),go=e=>({"p-virtualscroller-loading ":e}),mo=e=>({"p-virtualscroller-loader-mask":e}),bo=e=>({numCols:e}),Wn=e=>({options:e}),yo=()=>({styleClass:"p-virtualscroller-loading-icon"}),vo=(e,i)=>({rows:e,columns:i});function _o(e,i){e&1&&ct(0)}function Co(e,i){if(e&1&&(q(0),D(1,_o,1,0,"ng-container",10),Q()),e&2){let t=S(2);g(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",At(2,Ae,t.loadedItems,t.getContentOptions()))}}function wo(e,i){e&1&&ct(0)}function So(e,i){if(e&1&&(q(0),D(1,wo,1,0,"ng-container",10),Q()),e&2){let t=i.$implicit,n=i.index,o=S(3);g(),c("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",At(2,Ae,t,o.getOptions(n)))}}function xo(e,i){if(e&1&&(O(0,"div",11,3),D(2,So,2,5,"ng-container",12),P()),e&2){let t=S(2);c("ngClass",ot(5,go,t.d_loading))("ngStyle",t.contentStyle),x("data-pc-section","content"),g(2),c("ngForOf",t.loadedItems)("ngForTrackBy",t._trackBy)}}function Io(e,i){if(e&1&&A(0,"div",13),e&2){let t=S(2);c("ngStyle",t.spacerStyle),x("data-pc-section","spacer")}}function Do(e,i){e&1&&ct(0)}function Vo(e,i){if(e&1&&(q(0),D(1,Do,1,0,"ng-container",10),Q()),e&2){let t=i.index,n=S(4);g(),c("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",ot(4,Wn,n.getLoaderOptions(t,n.both&&ot(2,bo,n.numItemsInViewport.cols))))}}function Eo(e,i){if(e&1&&(q(0),D(1,Vo,2,6,"ng-container",15),Q()),e&2){let t=S(3);g(),c("ngForOf",t.loaderArr)}}function Mo(e,i){e&1&&ct(0)}function Fo(e,i){if(e&1&&(q(0),D(1,Mo,1,0,"ng-container",10),Q()),e&2){let t=S(4);g(),c("ngTemplateOutlet",t.loaderIconTemplate||t._loaderIconTemplate)("ngTemplateOutletContext",ot(3,Wn,Ge(2,yo)))}}function $o(e,i){e&1&&A(0,"SpinnerIcon",16),e&2&&(c("styleClass","p-virtualscroller-loading-icon pi-spin"),x("data-pc-section","loadingIcon"))}function Ao(e,i){if(e&1&&D(0,Fo,2,5,"ng-container",6)(1,$o,1,2,"ng-template",null,5,Tt),e&2){let t=$t(2),n=S(3);c("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",t)}}function To(e,i){if(e&1&&(O(0,"div",14),D(1,Eo,2,1,"ng-container",6)(2,Ao,3,2,"ng-template",null,4,Tt),P()),e&2){let t=$t(3),n=S(2);c("ngClass",ot(4,mo,!n.loaderTemplate)),x("data-pc-section","loader"),g(),c("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",t)}}function ko(e,i){if(e&1){let t=We();q(0),O(1,"div",7,1),it("scroll",function(o){Ne(t);let r=S();return ze(r.onContainerScroll(o))}),D(3,Co,2,5,"ng-container",6)(4,xo,3,7,"ng-template",null,2,Tt)(6,Io,1,2,"div",8)(7,To,4,6,"div",9),P(),Q()}if(e&2){let t=$t(5),n=S();g(),$(n._styleClass),c("ngStyle",n._style)("ngClass",Ue(12,fo,n.inline,n.both,n.horizontal)),x("id",n._id)("tabindex",n.tabindex)("data-pc-name","scroller")("data-pc-section","root"),g(2),c("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),g(3),c("ngIf",n._showSpacer),g(),c("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function Oo(e,i){e&1&&ct(0)}function Po(e,i){if(e&1&&(q(0),D(1,Oo,1,0,"ng-container",10),Q()),e&2){let t=S(2);g(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",At(5,Ae,t.items,At(2,vo,t._items,t.loadedColumns)))}}function No(e,i){if(e&1&&(ut(0),D(1,Po,2,8,"ng-container",17)),e&2){let t=S();g(),c("ngIf",t.contentTemplate||t._contentTemplate)}}var zo=(()=>{class e extends j{zone;get id(){return this._id}set id(t){this._id=t}get style(){return this._style}set style(t){this._style=t}get styleClass(){return this._styleClass}set styleClass(t){this._styleClass=t}get tabindex(){return this._tabindex}set tabindex(t){this._tabindex=t}get items(){return this._items}set items(t){this._items=t}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t}get scrollHeight(){return this._scrollHeight}set scrollHeight(t){this._scrollHeight=t}get scrollWidth(){return this._scrollWidth}set scrollWidth(t){this._scrollWidth=t}get orientation(){return this._orientation}set orientation(t){this._orientation=t}get step(){return this._step}set step(t){this._step=t}get delay(){return this._delay}set delay(t){this._delay=t}get resizeDelay(){return this._resizeDelay}set resizeDelay(t){this._resizeDelay=t}get appendOnly(){return this._appendOnly}set appendOnly(t){this._appendOnly=t}get inline(){return this._inline}set inline(t){this._inline=t}get lazy(){return this._lazy}set lazy(t){this._lazy=t}get disabled(){return this._disabled}set disabled(t){this._disabled=t}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(t){this._loaderDisabled=t}get columns(){return this._columns}set columns(t){this._columns=t}get showSpacer(){return this._showSpacer}set showSpacer(t){this._showSpacer=t}get showLoader(){return this._showLoader}set showLoader(t){this._showLoader=t}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(t){this._numToleratedItems=t}get loading(){return this._loading}set loading(t){this._loading=t}get autoSize(){return this._autoSize}set autoSize(t){this._autoSize=t}get trackBy(){return this._trackBy}set trackBy(t){this._trackBy=t}get options(){return this._options}set options(t){this._options=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}onLazyLoad=new L;onScroll=new L;onScrollIndexChange=new L;elementViewChild;contentViewChild;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(t=>this._columns?t:t.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=M(Hn);constructor(t){super(),this.zone=t}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(t){super.ngOnChanges(t);let n=!1;if(t.loading){let{previousValue:o,currentValue:r}=t.loading;this.lazy&&o!==r&&r!==this.d_loading&&(this.d_loading=r,n=!0)}if(t.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),t.numToleratedItems){let{previousValue:o,currentValue:r}=t.numToleratedItems;o!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(t.options){let{previousValue:o,currentValue:r}=t.options;this.lazy&&o?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,n=!0),o?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!n&&(t.items?.previousValue?.length!==t.items?.currentValue?.length||t.itemSize||t.scrollHeight||t.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"loader":this._loaderTemplate=t.template;break;case"loadericon":this._loaderIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){kt(this.platformId)&&!this.initialized&&me(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=_t(this.elementViewChild?.nativeElement),this.defaultHeight=vt(this.elementViewChild?.nativeElement),this.defaultContentWidth=_t(this.contentEl),this.defaultContentHeight=vt(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(t){this.contentEl=t||this.contentViewChild?.nativeElement||ge(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[],this.spacerStyle={},this.contentStyle={}}getElementRef(){return this.elementViewChild}getPageByFirst(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(t){return this._step?this.page!==this.getPageByFirst(t??this.first):!0}scrollTo(t){this.elementViewChild?.nativeElement?.scrollTo(t)}scrollToIndex(t,n="auto"){if(this.both?t.every(r=>r>-1):t>-1){let r=this.first,{scrollTop:s=0,scrollLeft:a=0}=this.elementViewChild?.nativeElement,{numToleratedItems:l}=this.calculateNumItems(),h=this.getContentPosition(),d=this.itemSize,y=(m=0,_)=>m<=_?0:m,C=(m,_,Y)=>m*_+Y,v=(m=0,_=0)=>this.scrollTo({left:m,top:_,behavior:n}),w=this.both?{rows:0,cols:0}:0,N=!1,f=!1;this.both?(w={rows:y(t[0],l[0]),cols:y(t[1],l[1])},v(C(w.cols,d[1],h.left),C(w.rows,d[0],h.top)),f=this.lastScrollPos.top!==s||this.lastScrollPos.left!==a,N=w.rows!==r.rows||w.cols!==r.cols):(w=y(t,l),this.horizontal?v(C(w,d,h.left),s):v(a,C(w,d,h.top)),f=this.lastScrollPos!==(this.horizontal?a:s),N=w!==r),this.isRangeChanged=N,f&&(this.first=w)}}scrollInView(t,n,o="auto"){if(n){let{first:r,viewport:s}=this.getRenderedRange(),a=(d=0,y=0)=>this.scrollTo({left:d,top:y,behavior:o}),l=n==="to-start",h=n==="to-end";if(l){if(this.both)s.first.rows-r.rows>t[0]?a(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>t[1]&&a((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>t){let d=(s.first-1)*this._itemSize;this.horizontal?a(d,0):a(0,d)}}else if(h){if(this.both)s.last.rows-r.rows<=t[0]+1?a(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=t[1]+1&&a((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=t+1){let d=(s.first+1)*this._itemSize;this.horizontal?a(d,0):a(0,d)}}}else this.scrollToIndex(t,o)}getRenderedRange(){let t=(r,s)=>s||r?Math.floor(r/(s||r)):0,n=this.first,o=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)n={rows:t(r,this._itemSize[0]),cols:t(s,this._itemSize[1])},o={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let a=this.horizontal?s:r;n=t(a,this._itemSize),o=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:o}}}calculateNumItems(){let t=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-t.left:0)||0,o=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-t.top:0)||0,r=(h,d)=>d||h?Math.ceil(h/(d||h)):0,s=h=>Math.ceil(h/2),a=this.both?{rows:r(o,this._itemSize[0]),cols:r(n,this._itemSize[1])}:r(this.horizontal?n:o,this._itemSize),l=this.d_numToleratedItems||(this.both?[s(a.rows),s(a.cols)]:s(a));return{numItemsInViewport:a,numToleratedItems:l}}calculateOptions(){let{numItemsInViewport:t,numToleratedItems:n}=this.calculateNumItems(),o=(a,l,h,d=!1)=>this.getLast(a+l+(a<h?2:3)*h,d),r=this.first,s=this.both?{rows:o(this.first.rows,t.rows,n[0]),cols:o(this.first.cols,t.cols,n[1],!0)}:o(this.first,t,n);this.last=s,this.numItemsInViewport=t,this.d_numToleratedItems=n,this.showLoader&&(this.loaderArr=this.both?Array.from({length:t.rows}).map(()=>Array.from({length:t.cols})):Array.from({length:t})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[t,n]=[_t(this.contentEl),vt(this.contentEl)];t!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[o,r]=[_t(this.elementViewChild.nativeElement),vt(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=o<this.defaultWidth?o+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(t=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,t):0}getContentPosition(){if(this.contentEl){let t=getComputedStyle(this.contentEl),n=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),o=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),r=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:n,right:o,top:r,bottom:s,x:n+o,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let t=this.elementViewChild.nativeElement.parentElement.parentElement,n=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||t.offsetWidth}px`,o=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||t.offsetHeight}px`,r=(s,a)=>this.elementViewChild.nativeElement.style[s]=a;this.both||this.horizontal?(r("height",o),r("width",n)):r("height",o)}}setSpacerSize(){if(this._items){let t=this.getContentPosition(),n=(o,r,s,a=0)=>this.spacerStyle=R(T({},this.spacerStyle),{[`${o}`]:(r||[]).length*s+a+"px"});this.both?(n("height",this._items,this._itemSize[0],t.y),n("width",this._columns||this._items[1],this._itemSize[1],t.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,t.x):n("height",this._items,this._itemSize,t.y)}}setContentPosition(t){if(this.contentEl&&!this._appendOnly){let n=t?t.first:this.first,o=(s,a)=>s*a,r=(s=0,a=0)=>this.contentStyle=R(T({},this.contentStyle),{transform:`translate3d(${s}px, ${a}px, 0)`});if(this.both)r(o(n.cols,this._itemSize[1]),o(n.rows,this._itemSize[0]));else{let s=o(n,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(t){let n=t.target,o=this.getContentPosition(),r=(f,m)=>f?f>m?f-m:f:0,s=(f,m)=>m||f?Math.floor(f/(m||f)):0,a=(f,m,_,Y,nt,bt)=>f<=nt?nt:bt?_-Y-nt:m+nt-1,l=(f,m,_,Y,nt,bt,Ht)=>f<=bt?0:Math.max(0,Ht?f<m?_:f-bt:f>m?_:f-2*bt),h=(f,m,_,Y,nt,bt=!1)=>{let Ht=m+Y+2*nt;return f>=nt&&(Ht+=nt+1),this.getLast(Ht,bt)},d=r(n.scrollTop,o.top),y=r(n.scrollLeft,o.left),C=this.both?{rows:0,cols:0}:0,v=this.last,w=!1,N=this.lastScrollPos;if(this.both){let f=this.lastScrollPos.top<=d,m=this.lastScrollPos.left<=y;if(!this._appendOnly||this._appendOnly&&(f||m)){let _={rows:s(d,this._itemSize[0]),cols:s(y,this._itemSize[1])},Y={rows:a(_.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],f),cols:a(_.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};C={rows:l(_.rows,Y.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],f),cols:l(_.cols,Y.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},v={rows:h(_.rows,C.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:h(_.cols,C.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},w=C.rows!==this.first.rows||v.rows!==this.last.rows||C.cols!==this.first.cols||v.cols!==this.last.cols||this.isRangeChanged,N={top:d,left:y}}}else{let f=this.horizontal?y:d,m=this.lastScrollPos<=f;if(!this._appendOnly||this._appendOnly&&m){let _=s(f,this._itemSize),Y=a(_,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);C=l(_,Y,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),v=h(_,C,this.last,this.numItemsInViewport,this.d_numToleratedItems),w=C!==this.first||v!==this.last||this.isRangeChanged,N=f}}return{first:C,last:v,isRangeChanged:w,scrollPos:N}}onScrollChange(t){let{first:n,last:o,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(t);if(r){let a={first:n,last:o};if(this.setContentPosition(a),this.first=n,this.last=o,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",a),this._lazy&&this.isPageChanged(n)){let l={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this.items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:o,this.items.length)};(this.lazyLoadState.first!==l.first||this.lazyLoadState.last!==l.last)&&this.handleEvents("onLazyLoad",l),this.lazyLoadState=l}}}onContainerScroll(t){if(this.handleEvents("onScroll",{originalEvent:t}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(t);(n||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(t)}bindResizeListener(){kt(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let t=this.document.defaultView,n=Ye()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(t,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(me(this.elementViewChild?.nativeElement)){let[t,n]=[_t(this.elementViewChild?.nativeElement),vt(this.elementViewChild?.nativeElement)],[o,r]=[t!==this.defaultWidth,n!==this.defaultHeight];(this.both?o||r:this.horizontal?o:this.vertical?r:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=t,this.defaultHeight=n,this.defaultContentWidth=_t(this.contentEl),this.defaultContentHeight=vt(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(t,n){return this.options&&this.options[t]?this.options[t](n):this[t].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:t=>this.getOptions(t),loading:this.d_loading,getLoaderOptions:(t,n)=>this.getLoaderOptions(t,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(t){let n=(this._items||[]).length,o=this.both?this.first.rows+t:this.first+t;return{index:o,count:n,first:o===0,last:o===n-1,even:o%2===0,odd:o%2!==0}}getLoaderOptions(t,n){let o=this.loaderArr.length;return T({index:t,count:o,first:t===0,last:t===o-1,even:t%2===0,odd:t%2!==0},n)}static \u0275fac=function(n){return new(n||e)(u(Be))};static \u0275cmp=F({type:e,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,o,r){if(n&1&&(K(r,jn,4),K(r,lo,4),K(r,co,4),K(r,uo,4),K(r,Jt,4)),n&2){let s;W(s=G())&&(o.contentTemplate=s.first),W(s=G())&&(o.itemTemplate=s.first),W(s=G())&&(o.loaderTemplate=s.first),W(s=G())&&(o.loaderIconTemplate=s.first),W(s=G())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(pe(ho,5),pe(jn,5)),n&2){let r;W(r=G())&&(o.elementViewChild=r.first),W(r=G())&&(o.contentViewChild=r.first)}},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[V([Hn]),p,tt],ngContentSelectors:po,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-virtualscroller-content",3,"ngClass","ngStyle"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(n,o){if(n&1&&(dt(),D(0,ko,8,16,"ng-container",6)(1,No,2,1,"ng-template",null,0,Tt)),n&2){let r=$t(2);c("ngIf",!o._disabled)("ngIfElse",r)}},dependencies:[X,Ut,Je,qt,Zt,Qt,Yt,H],encapsulation:2})}return e})(),Ba=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=z({imports:[zo,H,H]})}return e})();export{tn as a,ve as b,rn as c,ye as d,en as e,nn as f,Ko as g,Ho as h,mr as i,_r as j,Yt as k,gi as l,Qr as m,Jr as n,Yr as o,Kr as p,Xr as q,ts as r,es as s,ns as t,is as u,le as v,bn as w,Vt as x,ln as y,rt as z,Es as A,Ms as B,Fe as C,$s as D,Ui as E,kn as F,On as G,Yi as H,Ki as I,As as J,Ts as K,ks as L,Us as M,qs as N,sa as O,_a as P,zo as Q,Ba as R};
