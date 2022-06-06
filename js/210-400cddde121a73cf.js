"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{1034:function(e,t,n){function r(e,t){var n=void 0!==e;return[n,n&&void 0!==e?e:t]}n.d(t,{p:function(){return r}}),n(7294)},6150:function(e,t,n){n.d(t,{r:function(){return C}});var r=n(762),a=n(639),o=n(1034),i=n(8327),l=n(2947),c=n(658),u=n(4461),s=n(7248),d=n(5415),f=n(7294);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){void 0===e&&(e={});var{defaultIsChecked:t,defaultChecked:n=t,isChecked:h,isFocusable:b,isDisabled:k,isReadOnly:m,isRequired:g,onChange:y,isIndeterminate:x,isInvalid:C,name:w,value:P,id:B,onBlur:_,onFocus:L,"aria-label":E,"aria-labelledby":T,"aria-invalid":M,"aria-describedby":O}=e,N=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isIndeterminate","isInvalid","name","value","id","onBlur","onFocus","aria-label","aria-labelledby","aria-invalid","aria-describedby"]),I=(0,r.W)(y),R=(0,r.W)(_),A=(0,r.W)(L),[S,D]=(0,a.k)(),[j,H]=(0,a.k)(),[W,F]=(0,a.k)(),K=(0,f.useRef)(null),[q,G]=(0,f.useState)(!0),[U,Z]=(0,f.useState)(!!n),[$,z]=(0,o.p)(h,U);(0,c.ZK)({condition:!!t,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var V=(0,f.useCallback)((e=>{m||k?e.preventDefault():($||Z(z?e.target.checked:!!x||e.target.checked),null==I||I(e))}),[m,k,z,$,x,I]);(0,i.G)((()=>{K.current&&(K.current.indeterminate=Boolean(x))}),[x]);var X=k&&!b,J=(0,f.useCallback)((e=>{" "===e.key&&F.on()}),[F]),Q=(0,f.useCallback)((e=>{" "===e.key&&F.off()}),[F]);(0,i.G)((()=>{K.current&&K.current.checked!==z&&Z(K.current.checked)}),[K.current]);var Y=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,"data-active":(0,u.PB)(W),"data-hover":(0,u.PB)(j),"data-checked":(0,u.PB)(z),"data-focus":(0,u.PB)(S),"data-indeterminate":(0,u.PB)(x),"data-disabled":(0,u.PB)(k),"data-invalid":(0,u.PB)(C),"data-readonly":(0,u.PB)(m),"aria-hidden":!0,onMouseDown:(0,c.v0)(e.onMouseDown,(e=>{e.preventDefault(),F.on()})),onMouseUp:(0,c.v0)(e.onMouseUp,F.off),onMouseEnter:(0,c.v0)(e.onMouseEnter,H.on),onMouseLeave:(0,c.v0)(e.onMouseLeave,H.off)})}),[W,z,k,S,j,x,C,m,F,H.off,H.on]),ee=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},N,e,{ref:(0,l.l)(t,(e=>{e&&G("LABEL"===e.tagName)})),onClick:(0,c.v0)(e.onClick,(()=>{var e;q||(null==(e=K.current)||e.click(),(0,s.T)(K.current,{nextTick:!0}))})),"data-disabled":(0,u.PB)(k)})}),[N,k,q]),te=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:(0,l.l)(K,t),type:"checkbox",name:w,value:P,id:B,onChange:(0,c.v0)(e.onChange,V),onBlur:(0,c.v0)(e.onBlur,R,D.off),onFocus:(0,c.v0)(e.onFocus,A,D.on),onKeyDown:(0,c.v0)(e.onKeyDown,J),onKeyUp:(0,c.v0)(e.onKeyUp,Q),required:g,checked:z,disabled:X,readOnly:m,"aria-label":E,"aria-labelledby":T,"aria-invalid":M?Boolean(M):C,"aria-describedby":O,"aria-disabled":k,style:d.NL})}),[w,P,B,V,D.off,D.on,R,A,J,Q,g,z,X,m,E,T,M,C,O,k]),ne=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,onMouseDown:(0,c.v0)(e.onMouseDown,p),onTouchStart:(0,c.v0)(e.onTouchStart,p),"data-disabled":(0,u.PB)(k),"data-checked":(0,u.PB)(z),"data-invalid":(0,u.PB)(C)})}),[z,k,C]);return{state:{isInvalid:C,isFocused:S,isChecked:z,isActive:W,isHovered:j,isIndeterminate:x,isDisabled:k,isReadOnly:m,isRequired:g},getRootProps:ee,getCheckboxProps:Y,getInputProps:te,getLabelProps:ne,htmlProps:N}}function p(e){e.preventDefault(),e.stopPropagation()}var b=n(63),k=n(4915),m=n(5284),g=n(660),y=n(3808);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var C=(0,b.G)(((e,t)=>{var n=(0,k.j)("Switch",e),r=(0,m.Lr)(e),{spacing:a="0.5rem",children:o}=r,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["spacing","children"]),{state:l,getInputProps:c,getCheckboxProps:s,getRootProps:d,getLabelProps:v}=h(i),p=f.useMemo((()=>x({display:"inline-block",verticalAlign:"middle",lineHeight:"normal"},n.container)),[n.container]),b=f.useMemo((()=>x({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},n.track)),[n.track]),y=f.useMemo((()=>x({userSelect:"none",marginStart:a},n.label)),[a,n.label]);return f.createElement(g.m$.label,x({},d(),{className:(0,u.cx)("chakra-switch",e.className),__css:p}),f.createElement("input",x({className:"chakra-switch__input"},c({},t))),f.createElement(g.m$.span,x({},s(),{className:"chakra-switch__track",__css:b}),f.createElement(g.m$.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":(0,u.PB)(l.isChecked),"data-hover":(0,u.PB)(l.isHovered)})),o&&f.createElement(g.m$.span,x({className:"chakra-switch__label"},v(),{__css:y}),o))}));y.Ts&&(C.displayName="Switch")},7248:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(4461),a=n(658),o=n(7768);function i(e,t){void 0===t&&(t={});var{isActive:n=o.H9,nextTick:i,preventScroll:c=!0,selectTextIfInput:u=!0}=t;if(!e||n(e))return-1;function s(){if(e){if(function(){if(null==l){l=!1;try{document.createElement("div").focus({get preventScroll(){return l=!0,!0}})}catch(e){}}return l}())e.focus({preventScroll:c});else if(e.focus(),c){!function(e){for(var{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(function(e){for(var t,n=(0,r.lZ)(e),a=null!=(t=n.defaultView)?t:window,o=e.parentNode,i=[],l=n.scrollingElement||n.documentElement;o instanceof a.HTMLElement&&o!==l;)(o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth)&&i.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),o=o.parentNode;return l instanceof a.HTMLElement&&i.push({element:l,scrollTop:l.scrollTop,scrollLeft:l.scrollLeft}),i}(e))}(0,o.cK)(e)&&u&&e.select()}else(0,a.ZK)({condition:!0,message:"[chakra-ui]: can't call focus() on `null` or `undefined` element"})}return i?requestAnimationFrame(s):(s(),-1)}var l=null},7768:function(e,t,n){n.d(t,{cK:function(){return o},H9:function(){return i},EB:function(){return c},Wq:function(){return u}});var r=n(4461),a=e=>e.hasAttribute("tabindex");function o(e){return(0,r.Re)(e)&&"input"===e.tagName.toLowerCase()&&"select"in e}function i(e){return((0,r.Re)(e)?(0,r.lZ)(e):document).activeElement===e}function l(e){return!(!e.parentElement||!l(e.parentElement))||e.hidden}function c(e){if(!(0,r.Re)(e)||l(e)||function(e){return!0===Boolean(e.getAttribute("disabled"))||!0===Boolean(e.getAttribute("aria-disabled"))}(e))return!1;var{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;var n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in n?n[t]():!!function(e){var t=e.getAttribute("contenteditable");return"false"!==t&&null!=t}(e)||a(e)}function u(e){return!!e&&(0,r.Re)(e)&&c(e)&&!(e=>a(e)&&-1===e.tabIndex)(e)}},6893:function(e,t,n){n.d(t,{wOW:function(){return a},kXG:function(){return o}});var r=n(8357);function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}}}]);