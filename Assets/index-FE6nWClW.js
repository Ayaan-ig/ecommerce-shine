(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function H0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hp={exports:{}},pl={},fp={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),W0=Symbol.for("react.portal"),G0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),X0=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),q0=Symbol.for("react.forward_ref"),J0=Symbol.for("react.suspense"),Z0=Symbol.for("react.memo"),ey=Symbol.for("react.lazy"),Jd=Symbol.iterator;function ty(e){return e===null||typeof e!="object"?null:(e=Jd&&e[Jd]||e["@@iterator"],typeof e=="function"?e:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,mp={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=mp,this.updater=n||pp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vp(){}vp.prototype=Xr.prototype;function dc(e,t,n){this.props=e,this.context=t,this.refs=mp,this.updater=n||pp}var hc=dc.prototype=new vp;hc.constructor=dc;gp(hc,Xr.prototype);hc.isPureReactComponent=!0;var Zd=Array.isArray,yp=Object.prototype.hasOwnProperty,fc={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)yp.call(t,r)&&!wp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fo,type:e,key:o,ref:s,props:i,_owner:fc.current}}function ny(e,t){return{$$typeof:fo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function ry(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eh=/\/+/g;function na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ry(""+e.key):t.toString(36)}function os(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fo:case W0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+na(s,0):r,Zd(i)?(n="",e!=null&&(n=e.replace(eh,"$&/")+"/"),os(i,t,n,"",function(u){return u})):i!=null&&(pc(i)&&(i=ny(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(eh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zd(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+na(o,l);s+=os(o,t,n,a,i)}else if(a=ty(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+na(o,l++),s+=os(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Lo(e,t,n){if(e==null)return e;var r=[],i=0;return os(e,r,"","",function(o){return t.call(n,o,i++)}),r}function iy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},ss={transition:null},oy={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ss,ReactCurrentOwner:fc};M.Children={map:Lo,forEach:function(e,t,n){Lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lo(e,function(){t++}),t},toArray:function(e){return Lo(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Xr;M.Fragment=G0;M.Profiler=X0;M.PureComponent=dc;M.StrictMode=K0;M.Suspense=J0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=fc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)yp.call(t,a)&&!wp.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fo,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Q0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Y0,_context:e},e.Consumer=e};M.createElement=_p;M.createFactory=function(e){var t=_p.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:q0,render:e}};M.isValidElement=pc;M.lazy=function(e){return{$$typeof:ey,_payload:{_status:-1,_result:e},_init:iy}};M.memo=function(e,t){return{$$typeof:Z0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return Oe.current.useCallback(e,t)};M.useContext=function(e){return Oe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};M.useEffect=function(e,t){return Oe.current.useEffect(e,t)};M.useId=function(){return Oe.current.useId()};M.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Oe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};M.useRef=function(e){return Oe.current.useRef(e)};M.useState=function(e){return Oe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Oe.current.useTransition()};M.version="18.2.0";fp.exports=M;var ne=fp.exports;const Li=H0(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=ne,ly=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,cy=sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dy={key:!0,ref:!0,__self:!0,__source:!0};function Ep(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)uy.call(t,r)&&!dy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ly,type:e,key:o,ref:s,props:i,_owner:cy.current}}pl.Fragment=ay;pl.jsx=Ep;pl.jsxs=Ep;hp.exports=pl;var ls=hp.exports,Wa={},Sp={exports:{}},Xe={},kp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,x){var O=C.length;C.push(x);e:for(;0<O;){var H=O-1>>>1,W=C[H];if(0<i(W,x))C[H]=x,C[O]=W,O=H;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var x=C[0],O=C.pop();if(O!==x){C[0]=O;e:for(var H=0,W=C.length,On=W>>>1;H<On;){var ot=2*(H+1)-1,Kt=C[ot],be=ot+1,Ct=C[be];if(0>i(Kt,O))be<W&&0>i(Ct,Kt)?(C[H]=Ct,C[be]=O,H=be):(C[H]=Kt,C[ot]=O,H=ot);else if(be<W&&0>i(Ct,O))C[H]=Ct,C[be]=O,H=be;else break e}}return x}function i(C,x){var O=C.sortIndex-x.sortIndex;return O!==0?O:C.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,p=null,g=3,m=!1,y=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=C)r(u),x.sortIndex=x.expirationTime,t(a,x);else break;x=n(u)}}function v(C){if(w=!1,f(C),!y)if(n(a)!==null)y=!0,ii(k);else{var x=n(u);x!==null&&Nn(v,x.startTime-C)}}function k(C,x){y=!1,w&&(w=!1,h(A),A=-1),m=!0;var O=g;try{for(f(x),p=n(a);p!==null&&(!(p.expirationTime>x)||C&&!je());){var H=p.callback;if(typeof H=="function"){p.callback=null,g=p.priorityLevel;var W=H(p.expirationTime<=x);x=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(a)&&r(a),f(x)}else r(a);p=n(a)}if(p!==null)var On=!0;else{var ot=n(u);ot!==null&&Nn(v,ot.startTime-x),On=!1}return On}finally{p=null,g=O,m=!1}}var S=!1,_=null,A=-1,F=5,L=-1;function je(){return!(e.unstable_now()-L<F)}function xn(){if(_!==null){var C=e.unstable_now();L=C;var x=!0;try{x=_(!0,C)}finally{x?Rn():(S=!1,_=null)}}else S=!1}var Rn;if(typeof c=="function")Rn=function(){c(xn)};else if(typeof MessageChannel<"u"){var $o=new MessageChannel,ea=$o.port2;$o.port1.onmessage=xn,Rn=function(){ea.postMessage(null)}}else Rn=function(){$(xn,0)};function ii(C){_=C,S||(S=!0,Rn())}function Nn(C,x){A=$(function(){C(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,ii(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var x=3;break;default:x=g}var O=g;g=x;try{return C()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,x){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=g;g=C;try{return x()}finally{g=O}},e.unstable_scheduleCallback=function(C,x,O){var H=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?H+O:H):O=H,C){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,C={id:d++,callback:x,priorityLevel:C,startTime:O,expirationTime:W,sortIndex:-1},O>H?(C.sortIndex=O,t(u,C),n(a)===null&&C===n(u)&&(w?(h(A),A=-1):w=!0,Nn(v,O-H))):(C.sortIndex=W,t(a,C),y||m||(y=!0,ii(k))),C},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(C){var x=g;return function(){var O=g;g=x;try{return C.apply(this,arguments)}finally{g=O}}}})(Ip);kp.exports=Ip;var hy=kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=ne,Ke=hy;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,Mi={};function rr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Mi[e]=t,e=0;e<t.length;e++)Cp.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ga=Object.prototype.hasOwnProperty,fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function py(e){return Ga.call(nh,e)?!0:Ga.call(th,e)?!1:fy.test(e)?nh[e]=!0:(th[e]=!0,!1)}function gy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function my(e,t,n,r){if(t===null||typeof t>"u"||gy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gc,mc);ye[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gc,mc);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gc,mc);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function vc(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(my(t,n,i,r)&&(n=null),r||i===null?py(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),ar=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Ap=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Ya=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),xp=Symbol.for("react.offscreen"),rh=Symbol.iterator;function si(e){return e===null||typeof e!="object"?null:(e=rh&&e[rh]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ra;function mi(e){if(ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ra=t&&t[1]||""}return`
`+ra+e}var ia=!1;function oa(e,t){if(!e||ia)return"";ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mi(e):""}function vy(e){switch(e.tag){case 5:return mi(e.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return e=oa(e.type,!1),e;case 11:return e=oa(e.type.render,!1),e;case 1:return e=oa(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case ar:return"Portal";case Ka:return"Profiler";case yc:return"StrictMode";case Xa:return"Suspense";case Ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ap:return(e.displayName||"Context")+".Consumer";case Pp:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _c:return t=e.displayName||null,t!==null?t:Qa(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Qa(e(t))}catch{}}return null}function yy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wy(e){var t=Rp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){e._valueTracker||(e._valueTracker=wy(e))}function Np(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ih(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Op(e,t){t=t.checked,t!=null&&vc(e,"checked",t,!1)}function Ja(e,t){Op(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Za(e,t.type,n):t.hasOwnProperty("defaultValue")&&Za(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Za(e,t,n){(t!=="number"||Ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vi=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(vi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function $p(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,Lp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_y=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){_y.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function Mp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function Up(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ey=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(e,t){if(t){if(Ey[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function Ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ou=null,Ir=null,Tr=null;function ah(e){if(e=mo(e)){if(typeof ou!="function")throw Error(E(280));var t=e.stateNode;t&&(t=wl(t),ou(e.stateNode,e.type,t))}}function zp(e){Ir?Tr?Tr.push(e):Tr=[e]:Ir=e}function Fp(){if(Ir){var e=Ir,t=Tr;if(Tr=Ir=null,ah(e),t)for(e=0;e<t.length;e++)ah(t[e])}}function jp(e,t){return e(t)}function bp(){}var sa=!1;function Bp(e,t,n){if(sa)return e(t,n);sa=!0;try{return jp(e,t,n)}finally{sa=!1,(Ir!==null||Tr!==null)&&(bp(),Fp())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var su=!1;if(Ut)try{var li={};Object.defineProperty(li,"passive",{get:function(){su=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{su=!1}function Sy(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ii=!1,As=null,xs=!1,lu=null,ky={onError:function(e){Ii=!0,As=e}};function Iy(e,t,n,r,i,o,s,l,a){Ii=!1,As=null,Sy.apply(ky,arguments)}function Ty(e,t,n,r,i,o,s,l,a){if(Iy.apply(this,arguments),Ii){if(Ii){var u=As;Ii=!1,As=null}else throw Error(E(198));xs||(xs=!0,lu=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uh(e){if(ir(e)!==e)throw Error(E(188))}function Cy(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return uh(i),e;if(o===r)return uh(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Hp(e){return e=Cy(e),e!==null?Wp(e):null}function Wp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wp(e);if(t!==null)return t;e=e.sibling}return null}var Gp=Ke.unstable_scheduleCallback,ch=Ke.unstable_cancelCallback,Py=Ke.unstable_shouldYield,Ay=Ke.unstable_requestPaint,re=Ke.unstable_now,xy=Ke.unstable_getCurrentPriorityLevel,Sc=Ke.unstable_ImmediatePriority,Kp=Ke.unstable_UserBlockingPriority,Rs=Ke.unstable_NormalPriority,Ry=Ke.unstable_LowPriority,Xp=Ke.unstable_IdlePriority,gl=null,Et=null;function Ny(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Dy,Oy=Math.log,$y=Math.LN2;function Dy(e){return e>>>=0,e===0?32:31-(Oy(e)/$y|0)|0}var Fo=64,jo=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=yi(l):(o&=s,o!==0&&(r=yi(o)))}else s=n&~i,s!==0?r=yi(s):o!==0&&(r=yi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function Ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function My(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Ly(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yp(){var e=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),e}function la(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Uy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Qp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qp,Ic,Jp,Zp,eg,uu=!1,bo=[],cn=null,dn=null,hn=null,Fi=new Map,ji=new Map,en=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=mo(t),t!==null&&Ic(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fy(e,t,n,r,i){switch(t){case"focusin":return cn=ai(cn,e,t,n,r,i),!0;case"dragenter":return dn=ai(dn,e,t,n,r,i),!0;case"mouseover":return hn=ai(hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fi.set(o,ai(Fi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ji.set(o,ai(ji.get(o)||null,e,t,n,r,i)),!0}return!1}function tg(e){var t=Un(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Vp(n),t!==null){e.blockedOn=t,eg(e.priority,function(){Jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return t=mo(n),t!==null&&Ic(t),e.blockedOn=n,!1;t.shift()}return!0}function hh(e,t,n){as(e)&&n.delete(t)}function jy(){uu=!1,cn!==null&&as(cn)&&(cn=null),dn!==null&&as(dn)&&(dn=null),hn!==null&&as(hn)&&(hn=null),Fi.forEach(hh),ji.forEach(hh)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,uu||(uu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,jy)))}function bi(e){function t(i){return ui(i,e)}if(0<bo.length){ui(bo[0],e);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&ui(cn,e),dn!==null&&ui(dn,e),hn!==null&&ui(hn,e),Fi.forEach(t),ji.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&en.shift()}var Cr=Wt.ReactCurrentBatchConfig,Os=!0;function by(e,t,n,r){var i=B,o=Cr.transition;Cr.transition=null;try{B=1,Tc(e,t,n,r)}finally{B=i,Cr.transition=o}}function By(e,t,n,r){var i=B,o=Cr.transition;Cr.transition=null;try{B=4,Tc(e,t,n,r)}finally{B=i,Cr.transition=o}}function Tc(e,t,n,r){if(Os){var i=cu(e,t,n,r);if(i===null)va(e,t,r,$s,n),dh(e,r);else if(Fy(i,e,t,n,r))r.stopPropagation();else if(dh(e,r),t&4&&-1<zy.indexOf(e)){for(;i!==null;){var o=mo(i);if(o!==null&&qp(o),o=cu(e,t,n,r),o===null&&va(e,t,r,$s,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else va(e,t,r,null,n)}}var $s=null;function cu(e,t,n,r){if($s=null,e=Ec(r),e=Un(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $s=e,null}function ng(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case Sc:return 1;case Kp:return 4;case Rs:case Ry:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var an=null,Cc=null,us=null;function rg(){if(us)return us;var e,t=Cc,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return us=i.slice(e,1<r?1-r:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function fh(){return!1}function Ye(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bo:fh,this.isPropagationStopped=fh,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Ye(Yr),go=ee({},Yr,{view:0,detail:0}),Vy=Ye(go),aa,ua,ci,ml=ee({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(aa=e.screenX-ci.screenX,ua=e.screenY-ci.screenY):ua=aa=0,ci=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),ph=Ye(ml),Hy=ee({},ml,{dataTransfer:0}),Wy=Ye(Hy),Gy=ee({},go,{relatedTarget:0}),ca=Ye(Gy),Ky=ee({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=Ye(Ky),Yy=ee({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qy=Ye(Yy),qy=ee({},Yr,{data:0}),gh=Ye(qy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e1[e])?!!t[e]:!1}function Ac(){return t1}var n1=ee({},go,{key:function(e){if(e.key){var t=Jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r1=Ye(n1),i1=ee({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Ye(i1),o1=ee({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),s1=Ye(o1),l1=ee({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),a1=Ye(l1),u1=ee({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c1=Ye(u1),d1=[9,13,27,32],xc=Ut&&"CompositionEvent"in window,Ti=null;Ut&&"documentMode"in document&&(Ti=document.documentMode);var h1=Ut&&"TextEvent"in window&&!Ti,ig=Ut&&(!xc||Ti&&8<Ti&&11>=Ti),vh=" ",yh=!1;function og(e,t){switch(e){case"keyup":return d1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function f1(e,t){switch(e){case"compositionend":return sg(t);case"keypress":return t.which!==32?null:(yh=!0,vh);case"textInput":return e=t.data,e===vh&&yh?null:e;default:return null}}function p1(e,t){if(cr)return e==="compositionend"||!xc&&og(e,t)?(e=rg(),us=Cc=an=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ig&&t.locale!=="ko"?null:t.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g1[e.type]:t==="textarea"}function lg(e,t,n,r){zp(r),t=Ds(t,"onChange"),0<t.length&&(n=new Pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ci=null,Bi=null;function m1(e){yg(e,0)}function vl(e){var t=fr(e);if(Np(t))return e}function v1(e,t){if(e==="change")return t}var ag=!1;if(Ut){var da;if(Ut){var ha="oninput"in document;if(!ha){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),ha=typeof _h.oninput=="function"}da=ha}else da=!1;ag=da&&(!document.documentMode||9<document.documentMode)}function Eh(){Ci&&(Ci.detachEvent("onpropertychange",ug),Bi=Ci=null)}function ug(e){if(e.propertyName==="value"&&vl(Bi)){var t=[];lg(t,Bi,e,Ec(e)),Bp(m1,t)}}function y1(e,t,n){e==="focusin"?(Eh(),Ci=t,Bi=n,Ci.attachEvent("onpropertychange",ug)):e==="focusout"&&Eh()}function w1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Bi)}function _1(e,t){if(e==="click")return vl(t)}function E1(e,t){if(e==="input"||e==="change")return vl(t)}function S1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:S1;function Vi(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ga.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Sh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kh(e,t){var n=Sh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sh(n)}}function cg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dg(){for(var e=window,t=Ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ps(e.document)}return t}function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function k1(e){var t=dg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(r!==null&&Rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kh(n,o);var s=kh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I1=Ut&&"documentMode"in document&&11>=document.documentMode,dr=null,du=null,Pi=null,hu=!1;function Ih(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||dr==null||dr!==Ps(r)||(r=dr,"selectionStart"in r&&Rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Vi(Pi,r)||(Pi=r,r=Ds(du,"onSelect"),0<r.length&&(t=new Pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dr)))}function Vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},fa={},hg={};Ut&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function yl(e){if(fa[e])return fa[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hg)return fa[e]=t[n];return e}var fg=yl("animationend"),pg=yl("animationiteration"),gg=yl("animationstart"),mg=yl("transitionend"),vg=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){vg.set(e,t),rr(t,[e])}for(var pa=0;pa<Th.length;pa++){var ga=Th[pa],T1=ga.toLowerCase(),C1=ga[0].toUpperCase()+ga.slice(1);kn(T1,"on"+C1)}kn(fg,"onAnimationEnd");kn(pg,"onAnimationIteration");kn(gg,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(mg,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Ch(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ty(r,t,void 0,e),e.currentTarget=null}function yg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Ch(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Ch(i,l,u),o=a}}}if(xs)throw e=lu,xs=!1,lu=null,e}function K(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var r=e+"__bubble";n.has(r)||(wg(t,e,2,!1),n.add(r))}function ma(e,t,n){var r=0;t&&(r|=4),wg(n,e,r,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function Hi(e){if(!e[Ho]){e[Ho]=!0,Cp.forEach(function(n){n!=="selectionchange"&&(P1.has(n)||ma(n,!1,e),ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,ma("selectionchange",!1,t))}}function wg(e,t,n,r){switch(ng(t)){case 1:var i=by;break;case 4:i=By;break;default:i=Tc}n=i.bind(null,t,n,e),i=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function va(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Un(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Bp(function(){var u=o,d=Ec(n),p=[];e:{var g=vg.get(e);if(g!==void 0){var m=Pc,y=e;switch(e){case"keypress":if(cs(n)===0)break e;case"keydown":case"keyup":m=r1;break;case"focusin":y="focus",m=ca;break;case"focusout":y="blur",m=ca;break;case"beforeblur":case"afterblur":m=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=s1;break;case fg:case pg:case gg:m=Xy;break;case mg:m=a1;break;case"scroll":m=Vy;break;case"wheel":m=c1;break;case"copy":case"cut":case"paste":m=Qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mh}var w=(t&4)!==0,$=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,h!==null&&(v=zi(c,h),v!=null&&w.push(Wi(c,v,f)))),$)break;c=c.return}0<w.length&&(g=new m(g,y,null,n,d),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==iu&&(y=n.relatedTarget||n.fromElement)&&(Un(y)||y[zt]))break e;if((m||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Un(y):null,y!==null&&($=ir(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=ph,v="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=mh,v="onPointerLeave",h="onPointerEnter",c="pointer"),$=m==null?g:fr(m),f=y==null?g:fr(y),g=new w(v,c+"leave",m,n,d),g.target=$,g.relatedTarget=f,v=null,Un(d)===u&&(w=new w(h,c+"enter",y,n,d),w.target=f,w.relatedTarget=$,v=w),$=v,m&&y)t:{for(w=m,h=y,c=0,f=w;f;f=or(f))c++;for(f=0,v=h;v;v=or(v))f++;for(;0<c-f;)w=or(w),c--;for(;0<f-c;)h=or(h),f--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=or(w),h=or(h)}w=null}else w=null;m!==null&&Ph(p,g,m,w,!1),y!==null&&$!==null&&Ph(p,$,y,w,!0)}}e:{if(g=u?fr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var k=v1;else if(wh(g))if(ag)k=E1;else{k=w1;var S=y1}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=_1);if(k&&(k=k(e,u))){lg(p,k,n,d);break e}S&&S(e,g,u),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Za(g,"number",g.value)}switch(S=u?fr(u):window,e){case"focusin":(wh(S)||S.contentEditable==="true")&&(dr=S,du=u,Pi=null);break;case"focusout":Pi=du=dr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Ih(p,n,d);break;case"selectionchange":if(I1)break;case"keydown":case"keyup":Ih(p,n,d)}var _;if(xc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else cr?og(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(ig&&n.locale!=="ko"&&(cr||A!=="onCompositionStart"?A==="onCompositionEnd"&&cr&&(_=rg()):(an=d,Cc="value"in an?an.value:an.textContent,cr=!0)),S=Ds(u,A),0<S.length&&(A=new gh(A,e,null,n,d),p.push({event:A,listeners:S}),_?A.data=_:(_=sg(n),_!==null&&(A.data=_)))),(_=h1?f1(e,n):p1(e,n))&&(u=Ds(u,"onBeforeInput"),0<u.length&&(d=new gh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=_))}yg(p,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zi(e,n),o!=null&&r.unshift(Wi(e,o,i)),o=zi(e,t),o!=null&&r.push(Wi(e,o,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ph(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=zi(n,o),a!=null&&s.unshift(Wi(n,a,l))):i||(a=zi(n,o),a!=null&&s.push(Wi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var A1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(A1,`
`).replace(x1,"")}function Wo(e,t,n){if(t=Ah(t),Ah(e)!==t&&n)throw Error(E(425))}function Ls(){}var fu=null,pu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,R1=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,N1=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(e){return xh.resolve(null).then(e).catch(O1)}:mu;function O1(e){setTimeout(function(){throw e})}function ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bi(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Qr,Gi="__reactProps$"+Qr,zt="__reactContainer$"+Qr,vu="__reactEvents$"+Qr,$1="__reactListeners$"+Qr,D1="__reactHandles$"+Qr;function Un(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rh(e);e!==null;){if(n=e[vt])return n;e=Rh(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[vt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function wl(e){return e[Gi]||null}var yu=[],pr=-1;function In(e){return{current:e}}function Q(e){0>pr||(e.current=yu[pr],yu[pr]=null,pr--)}function G(e,t){pr++,yu[pr]=e.current,e.current=t}var Sn={},Pe=In(Sn),Ue=In(!1),Yn=Sn;function Dr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function Ms(){Q(Ue),Q(Pe)}function Nh(e,t,n){if(Pe.current!==Sn)throw Error(E(168));G(Pe,t),G(Ue,n)}function _g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,yy(e)||"Unknown",i));return ee({},n,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Yn=Pe.current,G(Pe,e),G(Ue,Ue.current),!0}function Oh(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=_g(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,Q(Ue),Q(Pe),G(Pe,e)):Q(Ue),G(Ue,n)}var Rt=null,_l=!1,wa=!1;function Eg(e){Rt===null?Rt=[e]:Rt.push(e)}function L1(e){_l=!0,Eg(e)}function Tn(){if(!wa&&Rt!==null){wa=!0;var e=0,t=B;try{var n=Rt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,_l=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),Gp(Sc,Tn),i}finally{B=t,wa=!1}}return null}var gr=[],mr=0,zs=null,Fs=0,Qe=[],qe=0,Qn=null,Nt=1,Ot="";function Dn(e,t){gr[mr++]=Fs,gr[mr++]=zs,zs=e,Fs=t}function Sg(e,t,n){Qe[qe++]=Nt,Qe[qe++]=Ot,Qe[qe++]=Qn,Qn=e;var r=Nt;e=Ot;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nt=1<<32-ct(t)+i|n<<i|r,Ot=o+e}else Nt=1<<o|n<<i|r,Ot=e}function Nc(e){e.return!==null&&(Dn(e,1),Sg(e,1,0))}function Oc(e){for(;e===zs;)zs=gr[--mr],gr[mr]=null,Fs=gr[--mr],gr[mr]=null;for(;e===Qn;)Qn=Qe[--qe],Qe[qe]=null,Ot=Qe[--qe],Qe[qe]=null,Nt=Qe[--qe],Qe[qe]=null}var Ge=null,He=null,q=!1,ut=null;function kg(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $h(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,He=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Nt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,He=null,!0):!1;default:return!1}}function wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(q){var t=He;if(t){var n=t;if(!$h(e,t)){if(wu(e))throw Error(E(418));t=fn(n.nextSibling);var r=Ge;t&&$h(e,t)?kg(r,n):(e.flags=e.flags&-4097|2,q=!1,Ge=e)}}else{if(wu(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Ge=e}}}function Dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Go(e){if(e!==Ge)return!1;if(!q)return Dh(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=He)){if(wu(e))throw Ig(),Error(E(418));for(;t;)kg(e,t),t=fn(t.nextSibling)}if(Dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ge?fn(e.stateNode.nextSibling):null;return!0}function Ig(){for(var e=He;e;)e=fn(e.nextSibling)}function Lr(){He=Ge=null,q=!1}function $c(e){ut===null?ut=[e]:ut.push(e)}var M1=Wt.ReactCurrentBatchConfig;function lt(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var js=In(null),bs=null,vr=null,Dc=null;function Lc(){Dc=vr=bs=null}function Mc(e){var t=js.current;Q(js),e._currentValue=t}function Eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pr(e,t){bs=e,Dc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Dc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(bs===null)throw Error(E(308));vr=e,bs.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var zn=null;function Uc(e){zn===null?zn=[e]:zn.push(e)}function Tg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Uc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Uc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}function Lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,d=u=a=null,l=o;do{var g=l.lane,m=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(g=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(m,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(m,p,g):y,g==null)break e;p=ee({},p,g);break e;case 2:Zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=p):d=d.next=m,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jn|=s,e.lanes=s,e.memoizedState=p}}function Mh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Pg=new Tp.Component().refs;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var El={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=mn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(dt(t,e,i,r),ds(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=mn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(dt(t,e,i,r),ds(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=mn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(dt(t,e,r,n),ds(t,e,r))}};function Uh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,o):!0}function Ag(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=ze(t)?Yn:Pe.current,r=t.contextTypes,o=(r=r!=null)?Dr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=El,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&El.enqueueReplaceState(t,t.state,null)}function ku(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Pg,zc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=ze(t)?Yn:Pe.current,i.context=Dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Su(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&El.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Pg&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fh(e){var t=e._init;return t(e._payload)}function xg(e){function t(h,c){if(e){var f=h.deletions;f===null?(h.deletions=[c],h.flags|=16):f.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=vn(h,c),h.index=0,h.sibling=null,h}function o(h,c,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<c?(h.flags|=2,c):f):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,c,f,v){return c===null||c.tag!==6?(c=Ca(f,h.mode,v),c.return=h,c):(c=i(c,f),c.return=h,c)}function a(h,c,f,v){var k=f.type;return k===ur?d(h,c,f.props.children,v,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Jt&&Fh(k)===c.type)?(v=i(c,f.props),v.ref=di(h,c,f),v.return=h,v):(v=vs(f.type,f.key,f.props,null,h.mode,v),v.ref=di(h,c,f),v.return=h,v)}function u(h,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Pa(f,h.mode,v),c.return=h,c):(c=i(c,f.children||[]),c.return=h,c)}function d(h,c,f,v,k){return c===null||c.tag!==7?(c=Hn(f,h.mode,v,k),c.return=h,c):(c=i(c,f),c.return=h,c)}function p(h,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ca(""+c,h.mode,f),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Mo:return f=vs(c.type,c.key,c.props,null,h.mode,f),f.ref=di(h,null,c),f.return=h,f;case ar:return c=Pa(c,h.mode,f),c.return=h,c;case Jt:var v=c._init;return p(h,v(c._payload),f)}if(vi(c)||si(c))return c=Hn(c,h.mode,f,null),c.return=h,c;Ko(h,c)}return null}function g(h,c,f,v){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:l(h,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Mo:return f.key===k?a(h,c,f,v):null;case ar:return f.key===k?u(h,c,f,v):null;case Jt:return k=f._init,g(h,c,k(f._payload),v)}if(vi(f)||si(f))return k!==null?null:d(h,c,f,v,null);Ko(h,f)}return null}function m(h,c,f,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(f)||null,l(c,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mo:return h=h.get(v.key===null?f:v.key)||null,a(c,h,v,k);case ar:return h=h.get(v.key===null?f:v.key)||null,u(c,h,v,k);case Jt:var S=v._init;return m(h,c,f,S(v._payload),k)}if(vi(v)||si(v))return h=h.get(f)||null,d(c,h,v,k,null);Ko(c,v)}return null}function y(h,c,f,v){for(var k=null,S=null,_=c,A=c=0,F=null;_!==null&&A<f.length;A++){_.index>A?(F=_,_=null):F=_.sibling;var L=g(h,_,f[A],v);if(L===null){_===null&&(_=F);break}e&&_&&L.alternate===null&&t(h,_),c=o(L,c,A),S===null?k=L:S.sibling=L,S=L,_=F}if(A===f.length)return n(h,_),q&&Dn(h,A),k;if(_===null){for(;A<f.length;A++)_=p(h,f[A],v),_!==null&&(c=o(_,c,A),S===null?k=_:S.sibling=_,S=_);return q&&Dn(h,A),k}for(_=r(h,_);A<f.length;A++)F=m(_,h,A,f[A],v),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?A:F.key),c=o(F,c,A),S===null?k=F:S.sibling=F,S=F);return e&&_.forEach(function(je){return t(h,je)}),q&&Dn(h,A),k}function w(h,c,f,v){var k=si(f);if(typeof k!="function")throw Error(E(150));if(f=k.call(f),f==null)throw Error(E(151));for(var S=k=null,_=c,A=c=0,F=null,L=f.next();_!==null&&!L.done;A++,L=f.next()){_.index>A?(F=_,_=null):F=_.sibling;var je=g(h,_,L.value,v);if(je===null){_===null&&(_=F);break}e&&_&&je.alternate===null&&t(h,_),c=o(je,c,A),S===null?k=je:S.sibling=je,S=je,_=F}if(L.done)return n(h,_),q&&Dn(h,A),k;if(_===null){for(;!L.done;A++,L=f.next())L=p(h,L.value,v),L!==null&&(c=o(L,c,A),S===null?k=L:S.sibling=L,S=L);return q&&Dn(h,A),k}for(_=r(h,_);!L.done;A++,L=f.next())L=m(_,h,A,L.value,v),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?A:L.key),c=o(L,c,A),S===null?k=L:S.sibling=L,S=L);return e&&_.forEach(function(xn){return t(h,xn)}),q&&Dn(h,A),k}function $(h,c,f,v){if(typeof f=="object"&&f!==null&&f.type===ur&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Mo:e:{for(var k=f.key,S=c;S!==null;){if(S.key===k){if(k=f.type,k===ur){if(S.tag===7){n(h,S.sibling),c=i(S,f.props.children),c.return=h,h=c;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Jt&&Fh(k)===S.type){n(h,S.sibling),c=i(S,f.props),c.ref=di(h,S,f),c.return=h,h=c;break e}n(h,S);break}else t(h,S);S=S.sibling}f.type===ur?(c=Hn(f.props.children,h.mode,v,f.key),c.return=h,h=c):(v=vs(f.type,f.key,f.props,null,h.mode,v),v.ref=di(h,c,f),v.return=h,h=v)}return s(h);case ar:e:{for(S=f.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(h,c.sibling),c=i(c,f.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Pa(f,h.mode,v),c.return=h,h=c}return s(h);case Jt:return S=f._init,$(h,c,S(f._payload),v)}if(vi(f))return y(h,c,f,v);if(si(f))return w(h,c,f,v);Ko(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,f),c.return=h,h=c):(n(h,c),c=Ca(f,h.mode,v),c.return=h,h=c),s(h)):n(h,c)}return $}var Mr=xg(!0),Rg=xg(!1),vo={},St=In(vo),Ki=In(vo),Xi=In(vo);function Fn(e){if(e===vo)throw Error(E(174));return e}function Fc(e,t){switch(G(Xi,t),G(Ki,e),G(St,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tu(t,e)}Q(St),G(St,t)}function Ur(){Q(St),Q(Ki),Q(Xi)}function Ng(e){Fn(Xi.current);var t=Fn(St.current),n=tu(t,e.type);t!==n&&(G(Ki,e),G(St,n))}function jc(e){Ki.current===e&&(Q(St),Q(Ki))}var J=In(0);function Vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function bc(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var hs=Wt.ReactCurrentDispatcher,Ea=Wt.ReactCurrentBatchConfig,qn=0,Z=null,le=null,ue=null,Hs=!1,Ai=!1,Yi=0,U1=0;function we(){throw Error(E(321))}function Bc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Vc(e,t,n,r,i,o){if(qn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hs.current=e===null||e.memoizedState===null?b1:B1,e=n(r,i),Ai){o=0;do{if(Ai=!1,Yi=0,25<=o)throw Error(E(301));o+=1,ue=le=null,t.updateQueue=null,hs.current=V1,e=n(r,i)}while(Ai)}if(hs.current=Ws,t=le!==null&&le.next!==null,qn=0,ue=le=Z=null,Hs=!1,t)throw Error(E(300));return e}function Hc(){var e=Yi!==0;return Yi=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function nt(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Qi(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=nt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((qn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,Z.lanes|=d,Jn|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,ft(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=nt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ft(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Og(){}function $g(e,t){var n=Z,r=nt(),i=t(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,Le=!0),r=r.queue,Wc(Mg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,qi(9,Lg.bind(null,n,r,i,t),void 0,null),de===null)throw Error(E(349));qn&30||Dg(n,t,i)}return i}function Dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lg(e,t,n,r){t.value=n,t.getSnapshot=r,Ug(t)&&zg(e)}function Mg(e,t,n){return n(function(){Ug(t)&&zg(e)})}function Ug(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function zg(e){var t=Ft(e,1);t!==null&&dt(t,e,1,-1)}function jh(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=j1.bind(null,Z,e),[t.memoizedState,e]}function qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fg(){return nt().memoizedState}function fs(e,t,n,r){var i=gt();Z.flags|=e,i.memoizedState=qi(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(le!==null){var s=le.memoizedState;if(o=s.destroy,r!==null&&Bc(r,s.deps)){i.memoizedState=qi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=qi(1|t,n,o,r)}function bh(e,t){return fs(8390656,8,e,t)}function Wc(e,t){return Sl(2048,8,e,t)}function jg(e,t){return Sl(4,2,e,t)}function bg(e,t){return Sl(4,4,e,t)}function Bg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vg(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Bg.bind(null,t,e),n)}function Gc(){}function Hg(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wg(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gg(e,t,n){return qn&21?(ft(n,t)||(n=Yp(),Z.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function z1(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ea.transition;Ea.transition={};try{e(!1),t()}finally{B=n,Ea.transition=r}}function Kg(){return nt().memoizedState}function F1(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xg(e))Yg(t,n);else if(n=Tg(e,t,n,r),n!==null){var i=Ne();dt(n,e,r,i),Qg(n,t,r)}}function j1(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xg(e))Yg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,s)){var a=t.interleaved;a===null?(i.next=i,Uc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Tg(e,t,i,r),n!==null&&(i=Ne(),dt(n,e,r,i),Qg(n,t,r))}}function Xg(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Yg(e,t){Ai=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}var Ws={readContext:tt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},b1={readContext:tt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:bh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fs(4194308,4,Bg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return fs(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F1.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:jh,useDebugValue:Gc,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=jh(!1),t=e[0];return e=z1.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=gt();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),de===null)throw Error(E(349));qn&30||Dg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bh(Mg.bind(null,r,o,e),[e]),r.flags|=2048,qi(9,Lg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=de.identifierPrefix;if(q){var n=Ot,r=Nt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B1={readContext:tt,useCallback:Hg,useContext:tt,useEffect:Wc,useImperativeHandle:Vg,useInsertionEffect:jg,useLayoutEffect:bg,useMemo:Wg,useReducer:Sa,useRef:Fg,useState:function(){return Sa(Qi)},useDebugValue:Gc,useDeferredValue:function(e){var t=nt();return Gg(t,le.memoizedState,e)},useTransition:function(){var e=Sa(Qi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Og,useSyncExternalStore:$g,useId:Kg,unstable_isNewReconciler:!1},V1={readContext:tt,useCallback:Hg,useContext:tt,useEffect:Wc,useImperativeHandle:Vg,useInsertionEffect:jg,useLayoutEffect:bg,useMemo:Wg,useReducer:ka,useRef:Fg,useState:function(){return ka(Qi)},useDebugValue:Gc,useDeferredValue:function(e){var t=nt();return le===null?t.memoizedState=e:Gg(t,le.memoizedState,e)},useTransition:function(){var e=ka(Qi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Og,useSyncExternalStore:$g,useId:Kg,unstable_isNewReconciler:!1};function zr(e,t){try{var n="",r=t;do n+=vy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Iu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function qg(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ks||(Ks=!0,Du=r),Iu(e,t)},n}function Jg(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Iu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Iu(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new H1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iw.bind(null,e,t,n),t.then(e,e))}function Vh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var W1=Wt.ReactCurrentOwner,Le=!1;function xe(e,t,n,r){t.child=e===null?Rg(t,null,n,r):Mr(t,e.child,n,r)}function Wh(e,t,n,r,i){n=n.render;var o=t.ref;return Pr(t,i),r=Vc(e,t,n,r,o,i),n=Hc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(q&&n&&Nc(t),t.flags|=1,xe(e,t,r,i),t.child)}function Gh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ed(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Zg(e,t,o,r,i)):(e=vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(s,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Zg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,jt(e,t,i)}return Tu(e,t,n,r,i)}function em(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(wr,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(wr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(wr,Ve),Ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(wr,Ve),Ve|=r;return xe(e,t,i,n),t.child}function tm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tu(e,t,n,r,i){var o=ze(n)?Yn:Pe.current;return o=Dr(t,o),Pr(t,i),n=Vc(e,t,n,r,o,i),r=Hc(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(q&&r&&Nc(t),t.flags|=1,xe(e,t,n,i),t.child)}function Kh(e,t,n,r,i){if(ze(n)){var o=!0;Us(t)}else o=!1;if(Pr(t,i),t.stateNode===null)ps(e,t),Ag(t,n,r),ku(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=ze(n)?Yn:Pe.current,u=Dr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&zh(t,s,r,u),Zt=!1;var g=t.memoizedState;s.state=g,Bs(t,r,s,i),a=t.memoizedState,l!==r||g!==a||Ue.current||Zt?(typeof d=="function"&&(Su(t,n,d,r),a=t.memoizedState),(l=Zt||Uh(t,n,l,r,g,a,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Cg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:lt(t.type,l),s.props=u,p=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=ze(n)?Yn:Pe.current,a=Dr(t,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||g!==a)&&zh(t,s,r,a),Zt=!1,g=t.memoizedState,s.state=g,Bs(t,r,s,i);var y=t.memoizedState;l!==p||g!==y||Ue.current||Zt?(typeof m=="function"&&(Su(t,n,m,r),y=t.memoizedState),(u=Zt||Uh(t,n,u,r,g,y,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,o,i)}function Cu(e,t,n,r,i,o){tm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Oh(t,n,!1),jt(e,t,o);r=t.stateNode,W1.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Mr(t,e.child,null,o),t.child=Mr(t,null,l,o)):xe(e,t,l,o),t.memoizedState=r.state,i&&Oh(t,n,!0),t.child}function nm(e){var t=e.stateNode;t.pendingContext?Nh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nh(e,t.context,!1),Fc(e,t.containerInfo)}function Xh(e,t,n,r,i){return Lr(),$c(i),t.flags|=256,xe(e,t,n,r),t.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:null,transitions:null}}function rm(e,t,n){var r=t.pendingProps,i=J.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(J,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Tl(s,r,0,null),e=Hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Au(n),t.memoizedState=Pu,e):Kc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return G1(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=vn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=vn(l,o):(o=Hn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Au(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Pu,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kc(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xo(e,t,n,r){return r!==null&&$c(r),Mr(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function G1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ia(Error(E(422))),Xo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Tl({mode:"visible",children:r.children},i,0,null),o=Hn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Mr(t,e.child,null,s),t.child.memoizedState=Au(s),t.memoizedState=Pu,o);if(!(t.mode&1))return Xo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(E(419)),r=Ia(o,r,void 0),Xo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Le||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ft(e,i),dt(r,e,i,-1))}return Zc(),r=Ia(Error(E(421))),Xo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ow.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=fn(i.nextSibling),Ge=t,q=!0,ut=null,e!==null&&(Qe[qe++]=Nt,Qe[qe++]=Ot,Qe[qe++]=Qn,Nt=e.id,Ot=e.overflow,Qn=t),t=Kc(t,r.children),t.flags|=4096,t)}function Yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eu(e.return,t,n)}function Ta(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function im(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,n,t);else if(e.tag===19)Yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ta(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ta(t,!0,n,null,o);break;case"together":Ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K1(e,t,n){switch(t.tag){case 3:nm(t),Lr();break;case 5:Ng(t);break;case 1:ze(t.type)&&Us(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?rm(e,t,n):(G(J,J.current&1),e=jt(e,t,n),e!==null?e.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return im(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,em(e,t,n)}return jt(e,t,n)}var om,xu,sm,lm;om=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};sm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(St.current);var o=null;switch(n){case"input":i=qa(e,i),r=qa(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=eu(e,i),r=eu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ls)}nu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};lm=function(e,t,n,r){n!==r&&(t.flags|=4)};function hi(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function X1(e,t,n){var r=t.pendingProps;switch(Oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return ze(t.type)&&Ms(),_e(t),null;case 3:return r=t.stateNode,Ur(),Q(Ue),Q(Pe),bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Uu(ut),ut=null))),xu(e,t),_e(t),null;case 5:jc(t);var i=Fn(Xi.current);if(n=t.type,e!==null&&t.stateNode!=null)sm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return _e(t),null}if(e=Fn(St.current),Go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[Gi]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)K(wi[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":ih(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":sh(r,o),K("invalid",r)}nu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,l,e),i=["children",""+l]):Mi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":Uo(r),oh(r,o,!0);break;case"textarea":Uo(r),lh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ls)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[Gi]=r,om(e,t,!1,!1),t.stateNode=e;e:{switch(s=ru(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)K(wi[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":ih(e,r),i=qa(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",e);break;case"textarea":sh(e,r),i=eu(e,r),K("invalid",e);break;default:i=r}nu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Up(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lp(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ui(e,a):typeof a=="number"&&Ui(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mi.hasOwnProperty(o)?a!=null&&o==="onScroll"&&K("scroll",e):a!=null&&vc(e,o,a,s))}switch(n){case"input":Uo(e),oh(e,r,!1);break;case"textarea":Uo(e),lh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kr(e,!!r.multiple,o,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ls)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)lm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Fn(Xi.current),Fn(St.current),Go(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return _e(t),null;case 13:if(Q(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&He!==null&&t.mode&1&&!(t.flags&128))Ig(),Lr(),t.flags|=98560,o=!1;else if(o=Go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[vt]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),o=!1}else ut!==null&&(Uu(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):Zc())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Ur(),xu(e,t),e===null&&Hi(t.stateNode.containerInfo),_e(t),null;case 10:return Mc(t.type._context),_e(t),null;case 17:return ze(t.type)&&Ms(),_e(t),null;case 19:if(Q(J),o=t.memoizedState,o===null)return _e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hi(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vs(e),s!==null){for(t.flags|=128,hi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Fr&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Vs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return _e(t),null}else 2*re()-o.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=J.current,G(J,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return Jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Y1(e,t){switch(Oc(t),t.tag){case 1:return ze(t.type)&&Ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),Q(Ue),Q(Pe),bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(Q(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(J),null;case 4:return Ur(),null;case 10:return Mc(t.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var Yo=!1,Se=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,P=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){te(e,t,r)}}var Qh=!1;function q1(e,t){if(fu=Os,e=dg(),Rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,p=e,g=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)g=p,p=m;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++d===r&&(a=s),(m=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},Os=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,$=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),$);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Qh,Qh=!1,y}function xi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ru(t,n,o)}i=i.next}while(i!==r)}}function kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function am(e){var t=e.alternate;t!==null&&(e.alternate=null,am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Gi],delete t[vu],delete t[$1],delete t[D1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function um(e){return e.tag===5||e.tag===3||e.tag===4}function qh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ls));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function $u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($u(e,t,n),e=e.sibling;e!==null;)$u(e,t,n),e=e.sibling}var pe=null,at=!1;function Yt(e,t,n){for(n=n.child;n!==null;)cm(e,t,n),n=n.sibling}function cm(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:Se||yr(n,t);case 6:var r=pe,i=at;pe=null,Yt(e,t,n),pe=r,at=i,pe!==null&&(at?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(at?(e=pe,n=n.stateNode,e.nodeType===8?ya(e.parentNode,n):e.nodeType===1&&ya(e,n),bi(e)):ya(pe,n.stateNode));break;case 4:r=pe,i=at,pe=n.stateNode.containerInfo,at=!0,Yt(e,t,n),pe=r,at=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ru(n,t,s),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Se&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Yt(e,t,n),Se=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Jh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q1),t.forEach(function(r){var i=sw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,at=!1;break e;case 3:pe=l.stateNode.containerInfo,at=!0;break e;case 4:pe=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(pe===null)throw Error(E(160));cm(o,s,i),pe=null,at=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dm(t,e),t=t.sibling}function dm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),pt(e),r&4){try{xi(3,e,e.return),kl(3,e)}catch(w){te(e,e.return,w)}try{xi(5,e,e.return)}catch(w){te(e,e.return,w)}}break;case 1:st(t,e),pt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(st(t,e),pt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Ui(i,"")}catch(w){te(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Op(i,o),ru(l,s);var u=ru(l,o);for(s=0;s<a.length;s+=2){var d=a[s],p=a[s+1];d==="style"?Up(i,p):d==="dangerouslySetInnerHTML"?Lp(i,p):d==="children"?Ui(i,p):vc(i,d,p,u)}switch(l){case"input":Ja(i,o);break;case"textarea":$p(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?kr(i,!!o.multiple,m,!1):g!==!!o.multiple&&(o.defaultValue!=null?kr(i,!!o.multiple,o.defaultValue,!0):kr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gi]=o}catch(w){te(e,e.return,w)}}break;case 6:if(st(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){te(e,e.return,w)}}break;case 3:if(st(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(w){te(e,e.return,w)}break;case 4:st(t,e),pt(e);break;case 13:st(t,e),pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qc=re())),r&4&&Jh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||d,st(t,e),Se=u):st(t,e),pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(p=P=d;P!==null;){switch(g=P,m=g.child,g.tag){case 0:case 11:case 14:case 15:xi(4,g,g.return);break;case 1:yr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:yr(g,g.return);break;case 22:if(g.memoizedState!==null){ef(p);continue}}m!==null?(m.return=g,P=m):ef(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Mp("display",s))}catch(w){te(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){te(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:st(t,e),pt(e),r&4&&Jh(e);break;case 21:break;default:st(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(um(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var o=qh(e);$u(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=qh(e);Ou(e,l,s);break;default:throw Error(E(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J1(e,t,n){P=e,hm(e)}function hm(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Yo;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=Yo;var u=Se;if(Yo=s,(Se=a)&&!u)for(P=i;P!==null;)s=P,a=s.child,s.tag===22&&s.memoizedState!==null?tf(i):a!==null?(a.return=s,P=a):tf(i);for(;o!==null;)P=o,hm(o),o=o.sibling;P=i,Yo=l,Se=u}Zh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Zh(e)}}function Zh(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mh(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&bi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Se||t.flags&512&&Nu(t)}catch(g){te(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ef(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function tf(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kl(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var o=t.return;try{Nu(t)}catch(a){te(t,o,a)}break;case 5:var s=t.return;try{Nu(t)}catch(a){te(t,s,a)}}}catch(a){te(t,t.return,a)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Z1=Math.ceil,Gs=Wt.ReactCurrentDispatcher,Xc=Wt.ReactCurrentOwner,et=Wt.ReactCurrentBatchConfig,z=0,de=null,se=null,me=0,Ve=0,wr=In(0),ae=0,Ji=null,Jn=0,Il=0,Yc=0,Ri=null,De=null,Qc=0,Fr=1/0,At=null,Ks=!1,Du=null,gn=null,Qo=!1,un=null,Xs=0,Ni=0,Lu=null,gs=-1,ms=0;function Ne(){return z&6?re():gs!==-1?gs:gs=re()}function mn(e){return e.mode&1?z&2&&me!==0?me&-me:M1.transition!==null?(ms===0&&(ms=Yp()),ms):(e=B,e!==0||(e=window.event,e=e===void 0?16:ng(e.type)),e):1}function dt(e,t,n,r){if(50<Ni)throw Ni=0,Lu=null,Error(E(185));po(e,n,r),(!(z&2)||e!==de)&&(e===de&&(!(z&2)&&(Il|=n),ae===4&&tn(e,me)),Fe(e,r),n===1&&z===0&&!(t.mode&1)&&(Fr=re()+500,_l&&Tn()))}function Fe(e,t){var n=e.callbackNode;My(e,t);var r=Ns(e,e===de?me:0);if(r===0)n!==null&&ch(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ch(n),t===1)e.tag===0?L1(nf.bind(null,e)):Eg(nf.bind(null,e)),N1(function(){!(z&6)&&Tn()}),n=null;else{switch(Qp(r)){case 1:n=Sc;break;case 4:n=Kp;break;case 16:n=Rs;break;case 536870912:n=Xp;break;default:n=Rs}n=_m(n,fm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fm(e,t){if(gs=-1,ms=0,z&6)throw Error(E(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var r=Ns(e,e===de?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ys(e,r);else{t=r;var i=z;z|=2;var o=gm();(de!==e||me!==t)&&(At=null,Fr=re()+500,Vn(e,t));do try{nw();break}catch(l){pm(e,l)}while(!0);Lc(),Gs.current=o,z=i,se!==null?t=0:(de=null,me=0,t=ae)}if(t!==0){if(t===2&&(i=au(e),i!==0&&(r=i,t=Mu(e,i))),t===1)throw n=Ji,Vn(e,0),tn(e,r),Fe(e,re()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ew(i)&&(t=Ys(e,r),t===2&&(o=au(e),o!==0&&(r=o,t=Mu(e,o))),t===1))throw n=Ji,Vn(e,0),tn(e,r),Fe(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Ln(e,De,At);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Qc+500-re(),10<t)){if(Ns(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mu(Ln.bind(null,e,De,At),t);break}Ln(e,De,At);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z1(r/1960))-r,10<r){e.timeoutHandle=mu(Ln.bind(null,e,De,At),r);break}Ln(e,De,At);break;case 5:Ln(e,De,At);break;default:throw Error(E(329))}}}return Fe(e,re()),e.callbackNode===n?fm.bind(null,e):null}function Mu(e,t){var n=Ri;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Ys(e,t),e!==2&&(t=De,De=n,t!==null&&Uu(t)),e}function Uu(e){De===null?De=e:De.push.apply(De,e)}function ew(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Yc,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function nf(e){if(z&6)throw Error(E(327));Ar();var t=Ns(e,0);if(!(t&1))return Fe(e,re()),null;var n=Ys(e,t);if(e.tag!==0&&n===2){var r=au(e);r!==0&&(t=r,n=Mu(e,r))}if(n===1)throw n=Ji,Vn(e,0),tn(e,t),Fe(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,De,At),Fe(e,re()),null}function qc(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Fr=re()+500,_l&&Tn())}}function Zn(e){un!==null&&un.tag===0&&!(z&6)&&Ar();var t=z;z|=1;var n=et.transition,r=B;try{if(et.transition=null,B=1,e)return e()}finally{B=r,et.transition=n,z=t,!(z&6)&&Tn()}}function Jc(){Ve=wr.current,Q(wr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R1(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ms();break;case 3:Ur(),Q(Ue),Q(Pe),bc();break;case 5:jc(r);break;case 4:Ur();break;case 13:Q(J);break;case 19:Q(J);break;case 10:Mc(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(de=e,se=e=vn(e.current,null),me=Ve=t,ae=0,Ji=null,Yc=Il=Jn=0,De=Ri=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}zn=null}return e}function pm(e,t){do{var n=se;try{if(Lc(),hs.current=Ws,Hs){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hs=!1}if(qn=0,ue=le=Z=null,Ai=!1,Yi=0,Xc.current=null,n===null||n.return===null){ae=1,Ji=t,se=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=me,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Vh(s);if(m!==null){m.flags&=-257,Hh(m,s,l,o,t),m.mode&1&&Bh(o,u,t),t=m,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Bh(o,u,t),Zc();break e}a=Error(E(426))}}else if(q&&l.mode&1){var $=Vh(s);if($!==null){!($.flags&65536)&&($.flags|=256),Hh($,s,l,o,t),$c(zr(a,l));break e}}o=a=zr(a,l),ae!==4&&(ae=2),Ri===null?Ri=[o]:Ri.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=qg(o,a,t);Lh(o,h);break e;case 1:l=a;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gn===null||!gn.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Jg(o,l,t);Lh(o,v);break e}}o=o.return}while(o!==null)}vm(n)}catch(k){t=k,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function gm(){var e=Gs.current;return Gs.current=Ws,e===null?Ws:e}function Zc(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(Jn&268435455)&&!(Il&268435455)||tn(de,me)}function Ys(e,t){var n=z;z|=2;var r=gm();(de!==e||me!==t)&&(At=null,Vn(e,t));do try{tw();break}catch(i){pm(e,i)}while(!0);if(Lc(),z=n,Gs.current=r,se!==null)throw Error(E(261));return de=null,me=0,ae}function tw(){for(;se!==null;)mm(se)}function nw(){for(;se!==null&&!Py();)mm(se)}function mm(e){var t=wm(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?vm(e):se=t,Xc.current=null}function vm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Y1(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,se=null;return}}else if(n=X1(n,t,Ve),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ae===0&&(ae=5)}function Ln(e,t,n){var r=B,i=et.transition;try{et.transition=null,B=1,rw(e,t,n,r)}finally{et.transition=i,B=r}return null}function rw(e,t,n,r){do Ar();while(un!==null);if(z&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Uy(e,o),e===de&&(se=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,_m(Rs,function(){return Ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var s=B;B=1;var l=z;z|=4,Xc.current=null,q1(e,n),dm(n,e),k1(pu),Os=!!fu,pu=fu=null,e.current=n,J1(n),Ay(),z=l,B=s,et.transition=o}else e.current=n;if(Qo&&(Qo=!1,un=e,Xs=i),o=e.pendingLanes,o===0&&(gn=null),Ny(n.stateNode),Fe(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ks)throw Ks=!1,e=Du,Du=null,e;return Xs&1&&e.tag!==0&&Ar(),o=e.pendingLanes,o&1?e===Lu?Ni++:(Ni=0,Lu=e):Ni=0,Tn(),null}function Ar(){if(un!==null){var e=Qp(Xs),t=et.transition,n=B;try{if(et.transition=null,B=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,Xs=0,z&6)throw Error(E(331));var i=z;for(z|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:xi(8,d,o)}var p=d.child;if(p!==null)p.return=d,P=p;else for(;P!==null;){d=P;var g=d.sibling,m=d.return;if(am(d),d===u){P=null;break}if(g!==null){g.return=m,P=g;break}P=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,P=h;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){s=P;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,P=f;else e:for(s=c;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kl(9,l)}}catch(k){te(l,l.return,k)}if(l===s){P=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,P=v;break e}P=l.return}}if(z=i,Tn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{B=n,et.transition=t}}return!1}function rf(e,t,n){t=zr(n,t),t=qg(e,t,1),e=pn(e,t,1),t=Ne(),e!==null&&(po(e,1,t),Fe(e,t))}function te(e,t,n){if(e.tag===3)rf(e,e,n);else for(;t!==null;){if(t.tag===3){rf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=zr(n,e),e=Jg(t,e,1),t=pn(t,e,1),e=Ne(),t!==null&&(po(t,1,e),Fe(t,e));break}}t=t.return}}function iw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(ae===4||ae===3&&(me&130023424)===me&&500>re()-Qc?Vn(e,0):Yc|=n),Fe(e,t)}function ym(e,t){t===0&&(e.mode&1?(t=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):t=1);var n=Ne();e=Ft(e,t),e!==null&&(po(e,t,n),Fe(e,n))}function ow(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ym(e,n)}function sw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),ym(e,n)}var wm;wm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,K1(e,t,n);Le=!!(e.flags&131072)}else Le=!1,q&&t.flags&1048576&&Sg(t,Fs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ps(e,t),e=t.pendingProps;var i=Dr(t,Pe.current);Pr(t,n),i=Vc(null,t,r,e,i,n);var o=Hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,Us(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zc(t),i.updater=El,t.stateNode=i,i._reactInternals=t,ku(t,r,e,n),t=Cu(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Nc(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ps(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=aw(r),e=lt(r,e),i){case 0:t=Tu(null,t,r,e,n);break e;case 1:t=Kh(null,t,r,e,n);break e;case 11:t=Wh(null,t,r,e,n);break e;case 14:t=Gh(null,t,r,lt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Kh(e,t,r,i,n);case 3:e:{if(nm(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Cg(e,t),Bs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zr(Error(E(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(E(424)),t),t=Xh(e,t,r,n,i);break e}else for(He=fn(t.stateNode.containerInfo.firstChild),Ge=t,q=!0,ut=null,n=Rg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===i){t=jt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Ng(t),e===null&&_u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,gu(r,i)?s=null:o!==null&&gu(r,o)&&(t.flags|=32),tm(e,t),xe(e,t,s,n),t.child;case 6:return e===null&&_u(t),null;case 13:return rm(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Wh(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,G(js,r._currentValue),r._currentValue=s,o!==null)if(ft(o.value,s)){if(o.children===i.children&&!Ue.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Mt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Eu(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Eu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pr(t,n),i=tt(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),Gh(e,t,r,i,n);case 15:return Zg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),ps(e,t),t.tag=1,ze(r)?(e=!0,Us(t)):e=!1,Pr(t,n),Ag(t,r,i),ku(t,r,i,n),Cu(null,t,r,!0,e,n);case 19:return im(e,t,n);case 22:return em(e,t,n)}throw Error(E(156,t.tag))};function _m(e,t){return Gp(e,t)}function lw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new lw(e,t,n,r)}function ed(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aw(e){if(typeof e=="function")return ed(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===_c)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ed(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ur:return Hn(n.children,i,o,t);case yc:s=8,i|=8;break;case Ka:return e=Ze(12,n,t,i|2),e.elementType=Ka,e.lanes=o,e;case Xa:return e=Ze(13,n,t,i),e.elementType=Xa,e.lanes=o,e;case Ya:return e=Ze(19,n,t,i),e.elementType=Ya,e.lanes=o,e;case xp:return Tl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pp:s=10;break e;case Ap:s=9;break e;case wc:s=11;break e;case _c:s=14;break e;case Jt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ze(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=xp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(e,t,n,r,i,o,s,l,a){return e=new uw(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(o),e}function cw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Em(e){if(!e)return Sn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ze(n))return _g(e,n,t)}return t}function Sm(e,t,n,r,i,o,s,l,a){return e=td(n,r,!0,e,i,o,s,l,a),e.context=Em(null),n=e.current,r=Ne(),i=mn(n),o=Mt(r,i),o.callback=t??null,pn(n,o,i),e.current.lanes=i,po(e,i,r),Fe(e,r),e}function Cl(e,t,n,r){var i=t.current,o=Ne(),s=mn(i);return n=Em(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,s),e!==null&&(dt(e,i,s,o),ds(e,i,s)),s}function Qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nd(e,t){of(e,t),(e=e.alternate)&&of(e,t)}function dw(){return null}var km=typeof reportError=="function"?reportError:function(e){console.error(e)};function rd(e){this._internalRoot=e}Pl.prototype.render=rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Cl(e,t,null,null)};Pl.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Cl(null,e,null,null)}),t[zt]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&tg(e)}};function id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sf(){}function hw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Qs(s);o.call(u)}}var s=Sm(t,r,e,0,null,!1,!1,"",sf);return e._reactRootContainer=s,e[zt]=s.current,Hi(e.nodeType===8?e.parentNode:e),Zn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Qs(a);l.call(u)}}var a=td(e,0,!1,null,null,!1,!1,"",sf);return e._reactRootContainer=a,e[zt]=a.current,Hi(e.nodeType===8?e.parentNode:e),Zn(function(){Cl(t,a,n,r)}),a}function xl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Qs(s);l.call(a)}}Cl(t,s,e,i)}else s=hw(n,t,e,i,r);return Qs(s)}qp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(kc(t,n|1),Fe(t,re()),!(z&6)&&(Fr=re()+500,Tn()))}break;case 13:Zn(function(){var r=Ft(e,1);if(r!==null){var i=Ne();dt(r,e,1,i)}}),nd(e,1)}};Ic=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ne();dt(t,e,134217728,n)}nd(e,134217728)}};Jp=function(e){if(e.tag===13){var t=mn(e),n=Ft(e,t);if(n!==null){var r=Ne();dt(n,e,t,r)}nd(e,t)}};Zp=function(){return B};eg=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ou=function(e,t,n){switch(t){case"input":if(Ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(E(90));Np(r),Ja(r,i)}}}break;case"textarea":$p(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};jp=qc;bp=Zn;var fw={usingClientEntryPoint:!1,Events:[mo,fr,wl,zp,Fp,qc]},fi={findFiberByHostInstance:Un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pw={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hp(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{gl=qo.inject(pw),Et=qo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(t))throw Error(E(200));return cw(e,t,null,n)};Xe.createRoot=function(e,t){if(!id(e))throw Error(E(299));var n=!1,r="",i=km;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=td(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,Hi(e.nodeType===8?e.parentNode:e),new rd(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Hp(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return Zn(e)};Xe.hydrate=function(e,t,n){if(!Al(t))throw Error(E(200));return xl(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!id(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=km;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Sm(t,null,e,1,n??null,i,!1,o,s),e[zt]=t.current,Hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pl(t)};Xe.render=function(e,t,n){if(!Al(t))throw Error(E(200));return xl(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Al(e))throw Error(E(40));return e._reactRootContainer?(Zn(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Xe.unstable_batchedUpdates=qc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return xl(e,t,n,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),Sp.exports=Xe;var gw=Sp.exports,lf=gw;Wa.createRoot=lf.createRoot,Wa.hydrateRoot=lf.hydrateRoot;var Me=function(){return Me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Me.apply(this,arguments)};function od(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function qs(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var X="-ms-",Oi="-moz-",j="-webkit-",Tm="comm",Rl="rule",sd="decl",mw="@import",Cm="@keyframes",vw="@layer",Pm=Math.abs,ld=String.fromCharCode,zu=Object.assign;function yw(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Am(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ys(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function jr(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function xm(e){return e.length}function _i(e,t){return t.push(e),e}function ww(e,t){return e.map(t).join("")}function af(e,t){return e.filter(function(n){return!xt(n,t)})}var Nl=1,br=1,Rm=0,rt=0,oe=0,qr="";function Ol(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Nl,column:br,length:s,return:"",siblings:l}}function qt(e,t){return zu(Ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sr(e){for(;e.root;)e=qt(e.root,{children:[e]});_i(e,e.siblings)}function _w(){return oe}function Ew(){return oe=rt>0?ce(qr,--rt):0,br--,oe===10&&(br=1,Nl--),oe}function ht(){return oe=rt<Rm?ce(qr,rt++):0,br++,oe===10&&(br=1,Nl++),oe}function Wn(){return ce(qr,rt)}function ws(){return rt}function $l(e,t){return jr(qr,e,t)}function Fu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sw(e){return Nl=br=1,Rm=mt(qr=e),rt=0,[]}function kw(e){return qr="",e}function Aa(e){return Am($l(rt-1,ju(e===91?e+2:e===40?e+1:e)))}function Iw(e){for(;(oe=Wn())&&oe<33;)ht();return Fu(e)>2||Fu(oe)>3?"":" "}function Tw(e,t){for(;--t&&ht()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return $l(e,ws()+(t<6&&Wn()==32&&ht()==32))}function ju(e){for(;ht();)switch(oe){case e:return rt;case 34:case 39:e!==34&&e!==39&&ju(oe);break;case 40:e===41&&ju(e);break;case 92:ht();break}return rt}function Cw(e,t){for(;ht()&&e+oe!==57;)if(e+oe===84&&Wn()===47)break;return"/*"+$l(t,rt-1)+"*"+ld(e===47?e:ht())}function Pw(e){for(;!Fu(Wn());)ht();return $l(e,rt)}function Aw(e){return kw(_s("",null,null,null,[""],e=Sw(e),0,[0],e))}function _s(e,t,n,r,i,o,s,l,a){for(var u=0,d=0,p=s,g=0,m=0,y=0,w=1,$=1,h=1,c=0,f="",v=i,k=o,S=r,_=f;$;)switch(y=c,c=ht()){case 40:if(y!=108&&ce(_,p-1)==58){ys(_+=D(Aa(c),"&","&\f"),"&\f",Pm(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:_+=Aa(c);break;case 9:case 10:case 13:case 32:_+=Iw(y);break;case 92:_+=Tw(ws()-1,7);continue;case 47:switch(Wn()){case 42:case 47:_i(xw(Cw(ht(),ws()),t,n,a),a);break;default:_+="/"}break;case 123*w:l[u++]=mt(_)*h;case 125*w:case 59:case 0:switch(c){case 0:case 125:$=0;case 59+d:h==-1&&(_=D(_,/\f/g,"")),m>0&&mt(_)-p&&_i(m>32?cf(_+";",r,n,p-1,a):cf(D(_," ","")+";",r,n,p-2,a),a);break;case 59:_+=";";default:if(_i(S=uf(_,t,n,u,d,i,l,f,v=[],k=[],p,o),o),c===123)if(d===0)_s(_,t,S,S,v,o,p,l,k);else switch(g===99&&ce(_,3)===110?100:g){case 100:case 108:case 109:case 115:_s(e,S,S,r&&_i(uf(e,S,S,0,0,i,l,f,i,v=[],p,k),k),i,k,p,l,r?v:k);break;default:_s(_,S,S,S,[""],k,0,l,k)}}u=d=m=0,w=h=1,f=_="",p=s;break;case 58:p=1+mt(_),m=y;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&Ew()==125)continue}switch(_+=ld(c),c*w){case 38:h=d>0?1:(_+="\f",-1);break;case 44:l[u++]=(mt(_)-1)*h,h=1;break;case 64:Wn()===45&&(_+=Aa(ht())),g=Wn(),d=p=mt(f=_+=Pw(ws())),c++;break;case 45:y===45&&mt(_)==2&&(w=0)}}return o}function uf(e,t,n,r,i,o,s,l,a,u,d,p){for(var g=i-1,m=i===0?o:[""],y=xm(m),w=0,$=0,h=0;w<r;++w)for(var c=0,f=jr(e,g+1,g=Pm($=s[w])),v=e;c<y;++c)(v=Am($>0?m[c]+" "+f:D(f,/&\f/g,m[c])))&&(a[h++]=v);return Ol(e,t,n,i===0?Rl:l,a,u,d,p)}function xw(e,t,n,r){return Ol(e,t,n,Tm,ld(_w()),jr(e,2,-2),0,r)}function cf(e,t,n,r,i){return Ol(e,t,n,sd,jr(e,0,r),jr(e,r+1,-1),r,i)}function Nm(e,t,n){switch(yw(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return Oi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Oi+e+X+e+e;case 5936:switch(ce(e,t+11)){case 114:return j+e+X+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+X+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+X+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+X+e+e;case 6165:return j+e+X+"flex-"+e+e;case 5187:return j+e+D(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return j+e+X+"flex-item-"+D(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":X+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return j+e+X+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+X+D(e,"shrink","negative")+e;case 5292:return j+e+X+D(e,"basis","preferred-size")+e;case 6060:return j+"box-"+D(e,"-grow","")+j+e+X+D(e,"grow","positive")+e;case 4554:return j+D(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!xt(e,/flex-|baseline/))return X+"grid-column-align"+jr(e,t)+e;break;case 2592:case 3360:return X+D(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,xt(r.props,/grid-\w+-end/)})?~ys(e+(n=n[t].value),"span",0)?e:X+D(e,"-start","")+e+X+"grid-row-span:"+(~ys(n,"span",0)?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":X+D(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xt(r.props,/grid-\w+-start/)})?e:X+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+Oi+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ys(e,"stretch",0)?Nm(D(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,u){return X+i+":"+o+u+(s?X+i+"-span:"+(l?a:+a-+o)+u:"")+e});case 4949:if(ce(e,t+6)===121)return D(e,":",":"+j)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(ce(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+X+"$2box$3")+e;case 100:return D(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Js(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rw(e,t,n,r){switch(e.type){case vw:if(e.children.length)break;case mw:case sd:return e.return=e.return||e.value;case Tm:return"";case Cm:return e.return=e.value+"{"+Js(e.children,r)+"}";case Rl:if(!mt(e.value=e.props.join(",")))return""}return mt(n=Js(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nw(e){var t=xm(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function Ow(e){return function(t){t.root||(t=t.return)&&e(t)}}function $w(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sd:e.return=Nm(e.value,e.length,n);return;case Cm:return Js([qt(e,{value:D(e.value,"@","@"+j)})],r);case Rl:if(e.length)return ww(n=e.props,function(i){switch(xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(qt(e,{props:[D(i,/:(read-\w+)/,":"+Oi+"$1")]})),sr(qt(e,{props:[i]})),zu(e,{props:af(n,r)});break;case"::placeholder":sr(qt(e,{props:[D(i,/:(plac\w+)/,":"+j+"input-$1")]})),sr(qt(e,{props:[D(i,/:(plac\w+)/,":"+Oi+"$1")]})),sr(qt(e,{props:[D(i,/:(plac\w+)/,X+"input-$1")]})),sr(qt(e,{props:[i]})),zu(e,{props:af(n,r)});break}return""})}}var Dw={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},Br=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",Om="active",$m="data-styled-version",Dl="6.1.8",ad=`/*!sc*/
`,ud=typeof window<"u"&&"HTMLElement"in window,Lw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),Ll=Object.freeze([]),Vr=Object.freeze({});function Mw(e,t,n){return n===void 0&&(n=Vr),e.theme!==n.theme&&e.theme||t||n.theme}var Dm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Uw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zw=/(^-|-$)/g;function df(e){return e.replace(Uw,"-").replace(zw,"")}var Fw=/(a)(d)/gi,Jo=52,hf=function(e){return String.fromCharCode(e+(e>25?39:97))};function bu(e){var t,n="";for(t=Math.abs(e);t>Jo;t=t/Jo|0)n=hf(t%Jo)+n;return(hf(t%Jo)+n).replace(Fw,"$1-$2")}var xa,Lm=5381,_r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mm=function(e){return _r(Lm,e)};function jw(e){return bu(Mm(e)>>>0)}function bw(e){return e.displayName||e.name||"Component"}function Ra(e){return typeof e=="string"&&!0}var Um=typeof Symbol=="function"&&Symbol.for,zm=Um?Symbol.for("react.memo"):60115,Bw=Um?Symbol.for("react.forward_ref"):60112,Vw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Hw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ww=((xa={})[Bw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xa[zm]=Fm,xa);function ff(e){return("type"in(t=e)&&t.type.$$typeof)===zm?Fm:"$$typeof"in e?Ww[e.$$typeof]:Vw;var t}var Gw=Object.defineProperty,Kw=Object.getOwnPropertyNames,pf=Object.getOwnPropertySymbols,Xw=Object.getOwnPropertyDescriptor,Yw=Object.getPrototypeOf,gf=Object.prototype;function jm(e,t,n){if(typeof t!="string"){if(gf){var r=Yw(t);r&&r!==gf&&jm(e,r,n)}var i=Kw(t);pf&&(i=i.concat(pf(t)));for(var o=ff(e),s=ff(t),l=0;l<i.length;++l){var a=i[l];if(!(a in Hw||n&&n[a]||s&&a in s||o&&a in o)){var u=Xw(t,a);try{Gw(e,a,u)}catch{}}}}return e}function Hr(e){return typeof e=="function"}function cd(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bu(e,t,n){if(n===void 0&&(n=!1),!n&&!Zi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bu(e[r],t[r]);else if(Zi(t))for(var r in t)e[r]=Bu(e[r],t[r]);return e}function dd(e,t){Object.defineProperty(e,"toString",{value:t})}function yo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw yo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(ad);return n},e}(),Es=new Map,Zs=new Map,Ss=1,Zo=function(e){if(Es.has(e))return Es.get(e);for(;Zs.has(Ss);)Ss++;var t=Ss++;return Es.set(e,t),Zs.set(t,e),t},qw=function(e,t){Ss=t+1,Es.set(e,t),Zs.set(t,e)},Jw="style[".concat(Br,"][").concat($m,'="').concat(Dl,'"]'),Zw=new RegExp("^".concat(Br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),e_=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},t_=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ad),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(Zw);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(qw(d,u),e_(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function n_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(Br,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Br,Om),r.setAttribute($m,Dl);var s=n_();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},r_=function(){function e(t){this.element=bm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw yo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),i_=function(){function e(t){this.element=bm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),o_=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vf=ud,s_={isServer:!ud,useCSSOMInjection:!Lw},Bm=function(){function e(t,n,r){t===void 0&&(t=Vr),n===void 0&&(n={});var i=this;this.options=Me(Me({},s_),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ud&&vf&&(vf=!1,function(o){for(var s=document.querySelectorAll(Jw),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute(Br)!==Om&&(t_(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),dd(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",u=function(p){var g=function(h){return Zs.get(h)}(p);if(g===void 0)return"continue";var m=o.names.get(g),y=s.getGroup(p);if(m===void 0||y.length===0)return"continue";var w="".concat(Br,".g").concat(p,'[id="').concat(g,'"]'),$="";m!==void 0&&m.forEach(function(h){h.length>0&&($+="".concat(h,","))}),a+="".concat(y).concat(w,'{content:"').concat($,'"}').concat(ad)},d=0;d<l;d++)u(d);return a}(i)})}return e.registerId=function(t){return Zo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Me(Me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new o_(i):r?new r_(i):new i_(i)}(this.options),new Qw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Zo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Zo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Zo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),l_=/&/g,a_=/^\s*\/\/.*$/gm;function Vm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vm(n.children,t)),n})}function u_(e){var t,n,r,i=e===void 0?Vr:e,o=i.options,s=o===void 0?Vr:o,l=i.plugins,a=l===void 0?Ll:l,u=function(g,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},d=a.slice();d.push(function(g){g.type===Rl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(l_,n).replace(r,u))}),s.prefix&&d.push($w),d.push(Rw);var p=function(g,m,y,w){m===void 0&&(m=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var $=g.replace(a_,""),h=Aw(y||m?"".concat(y," ").concat(m," { ").concat($," }"):$);s.namespace&&(h=Vm(h,s.namespace));var c=[];return Js(h,Nw(d.concat(Ow(function(f){return c.push(f)})))),c};return p.hash=a.length?a.reduce(function(g,m){return m.name||yo(15),_r(g,m.name)},Lm).toString():"",p}var c_=new Bm,Vu=u_(),Hm=Li.createContext({shouldForwardProp:void 0,styleSheet:c_,stylis:Vu});Hm.Consumer;Li.createContext(void 0);function yf(){return ne.useContext(Hm)}var d_=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Vu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,dd(this,function(){throw yo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Vu),this.name+t.hash},e}(),h_=function(e){return e>="A"&&e<="Z"};function wf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;h_(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wm=function(e){return e==null||e===!1||e===""},Gm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Wm(o)&&(Array.isArray(o)&&o.isCss||Hr(o)?r.push("".concat(wf(i),":"),o,";"):Zi(o)?r.push.apply(r,qs(qs(["".concat(i," {")],Gm(o),!1),["}"],!1)):r.push("".concat(wf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Dw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gn(e,t,n,r){if(Wm(e))return[];if(cd(e))return[".".concat(e.styledComponentId)];if(Hr(e)){if(!Hr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Gn(i,t,n,r)}var o;return e instanceof d_?n?(e.inject(n,r),[e.getName(r)]):[e]:Zi(e)?Gm(e):Array.isArray(e)?Array.prototype.concat.apply(Ll,e.map(function(s){return Gn(s,t,n,r)})):[e.toString()]}function f_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!cd(n))return!1}return!0}var p_=Mm(Dl),g_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f_(t),this.componentId=n,this.baseHash=_r(p_,n),this.baseStyle=r,Bm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=jn(i,this.staticRulesId);else{var o=mf(Gn(this.rules,t,n,r)),s=bu(_r(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=jn(i,s),this.staticRulesId=s}else{for(var a=_r(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var g=mf(Gn(p,t,n,r));a=_r(a,g+d),u+=g}}if(u){var m=bu(a>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=jn(i,m)}}return i},e}(),Km=Li.createContext(void 0);Km.Consumer;var Na={};function m_(e,t,n){var r=cd(e),i=e,o=!Ra(e),s=t.attrs,l=s===void 0?Ll:s,a=t.componentId,u=a===void 0?function(v,k){var S=typeof v!="string"?"sc":df(v);Na[S]=(Na[S]||0)+1;var _="".concat(S,"-").concat(jw(Dl+S+Na[S]));return k?"".concat(k,"-").concat(_):_}(t.displayName,t.parentComponentId):a,d=t.displayName,p=d===void 0?function(v){return Ra(v)?"styled.".concat(v):"Styled(".concat(bw(v),")")}(e):d,g=t.displayName&&t.componentId?"".concat(df(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;y=function(v,k){return w(v,k)&&$(v,k)}}else y=w}var h=new g_(n,g,r?i.componentStyle:void 0);function c(v,k){return function(S,_,A){var F=S.attrs,L=S.componentStyle,je=S.defaultProps,xn=S.foldedComponentIds,Rn=S.styledComponentId,$o=S.target,ea=Li.useContext(Km),ii=yf(),Nn=S.shouldForwardProp||ii.shouldForwardProp,C=Mw(_,ea,je)||Vr,x=function(Kt,be,Ct){for(var oi,$n=Me(Me({},be),{className:void 0,theme:Ct}),ta=0;ta<Kt.length;ta+=1){var Do=Hr(oi=Kt[ta])?oi($n):oi;for(var Xt in Do)$n[Xt]=Xt==="className"?jn($n[Xt],Do[Xt]):Xt==="style"?Me(Me({},$n[Xt]),Do[Xt]):Do[Xt]}return be.className&&($n.className=jn($n.className,be.className)),$n}(F,_,C),O=x.as||$o,H={};for(var W in x)x[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&x.theme===C||(W==="forwardedAs"?H.as=x.forwardedAs:Nn&&!Nn(W,O)||(H[W]=x[W]));var On=function(Kt,be){var Ct=yf(),oi=Kt.generateAndInjectStyles(be,Ct.styleSheet,Ct.stylis);return oi}(L,x),ot=jn(xn,Rn);return On&&(ot+=" "+On),x.className&&(ot+=" "+x.className),H[Ra(O)&&!Dm.has(O)?"class":"className"]=ot,H.ref=A,ne.createElement(O,H)}(f,v,k)}c.displayName=p;var f=Li.forwardRef(c);return f.attrs=m,f.componentStyle=h,f.displayName=p,f.shouldForwardProp=y,f.foldedComponentIds=r?jn(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=g,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(k){for(var S=[],_=1;_<arguments.length;_++)S[_-1]=arguments[_];for(var A=0,F=S;A<F.length;A++)Bu(k,F[A],!0);return k}({},i.defaultProps,v):v}}),dd(f,function(){return".".concat(f.styledComponentId)}),o&&jm(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function _f(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ef=function(e){return Object.assign(e,{isCss:!0})};function v_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hr(e)||Zi(e))return Ef(Gn(_f(Ll,qs([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Gn(r):Ef(Gn(_f(r,t)))}function Hu(e,t,n){if(n===void 0&&(n=Vr),!t)throw yo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,v_.apply(void 0,qs([i],o,!1)))};return r.attrs=function(i){return Hu(e,t,Me(Me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hu(e,t,Me(Me({},n),i))},r}var Xm=function(e){return Hu(m_,e)},I=Xm;Dm.forEach(function(e){I[e]=Xm(e)});I.div`
  display: flex;
  /* margin-right: 2px; */
  position: ${e=>e.isP?"static":"absolute"};
  /* background-color: ${e=>e.isP?"red":"blue"}; */
  /* position: absolute; */
  top: -9px;
  right: 8rem;
  margin: 2rem auto;

 

`;I.input`
  height: 2.5rem;
  border-radius: 21px;
  outline: none;
  font-size: 1.3rem;
  background-color: #0c0b36;
  color: #cbcbef;
  /* margin-right: 2.5rem; */

  padding-left: ${e=>e.isactive?"10px":"0rem"};
  padding-right: ${e=>e.isactive?"2rem":"0rem"};
  width: ${e=>e.isactive?"16rem":"0rem"};
  border: ${e=>e.isactive?"3px solid #31316b":"none"};
  transition: width 0.3s;
  &::placeholder {
    color: #7878a9;
    font-size: 1.2rem;
    padding-left: 0.4rem;
  }
  &:hover {
    border: 3px solid #414191;
  }
  &:focus {
    border: ${e=>e.isactive?"3px solid #5d5dc6":"none"};
  }
`;I.div`
    display: flex;
    /* flex-direction: column; */
    gap: 8px;
    order: -1;
    
    
    `;I.div`
    display: flex;
    transition: all 0.3s;
    background-color: #191856;
    margin: 0 auto;
    margin-top: 0;
    padding-top: 0;
    gap:8px    ;
    top: 5rem;
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    flex-direction: column;
    >*{
        font-size: 1.5rem;
    }
`;var Sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},y_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],l=e[n++],a=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,l=s?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,d=o>>2,p=(o&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;a||(m=64,s||(g=64)),r.push(n[d],n[p],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ym(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):y_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new w_;const g=o<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),p!==64){const y=u<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class w_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const __=function(e){const t=Ym(e);return Qm.encodeByteArray(t,!0)},el=function(e){return __(e).replace(/\./g,"")},qm=function(e){try{return Qm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=()=>E_().__FIREBASE_DEFAULTS__,k_=()=>{if(typeof process>"u"||typeof Sf>"u")return;const e=Sf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},I_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qm(e[1]);return t&&JSON.parse(t)},hd=()=>{try{return S_()||k_()||I_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jm=e=>{var t,n;return(n=(t=hd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},T_=e=>{const t=Jm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Zm=()=>{var e;return(e=hd())===null||e===void 0?void 0:e.config},ev=e=>{var t;return(t=hd())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[el(JSON.stringify(n)),el(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function x_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function R_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N_(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="FirebaseError";class Gt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=D_,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?L_(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Gt(i,l,r)}}function L_(e,t){return e.replace(M_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const M_=/\{\$([^}]+)}/g;function U_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(kf(o)&&kf(s)){if(!tl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z_(e,t){const n=new F_(e,t);return n.subscribe.bind(n)}class F_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Oa),i.error===void 0&&(i.error=Oa),i.complete===void 0&&(i.complete=Oa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Oa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){return e&&e._delegate?e._delegate:e}class er{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new C_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(V_(t))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mn){return this.instances.has(t)}getOptions(t=Mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:B_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mn){return this.component?this.component.multipleInstances?t:Mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B_(e){return e===Mn?void 0:e}function V_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new b_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const W_={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},G_=b.INFO,K_={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},X_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=K_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fd{constructor(t){this.name=t,this._logLevel=G_,this._logHandler=X_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?W_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const Y_=(e,t)=>t.some(n=>e instanceof n);let If,Tf;function Q_(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q_(){return Tf||(Tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,Wu=new WeakMap,nv=new WeakMap,$a=new WeakMap,pd=new WeakMap;function J_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(yn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&tv.set(n,e)}).catch(()=>{}),pd.set(t,e),t}function Z_(e){if(Wu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Wu.set(e,t)}let Gu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||nv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function eE(e){Gu=e(Gu)}function tE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Da(this),t,...n);return nv.set(r,t.sort?t.sort():[t]),yn(r)}:q_().includes(e)?function(...t){return e.apply(Da(this),t),yn(tv.get(this))}:function(...t){return yn(e.apply(Da(this),t))}}function nE(e){return typeof e=="function"?tE(e):(e instanceof IDBTransaction&&Z_(e),Y_(e,Q_())?new Proxy(e,Gu):e)}function yn(e){if(e instanceof IDBRequest)return J_(e);if($a.has(e))return $a.get(e);const t=nE(e);return t!==e&&($a.set(e,t),pd.set(t,e)),t}const Da=e=>pd.get(e);function rE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),l=yn(s);return r&&s.addEventListener("upgradeneeded",a=>{r(yn(s.result),a.oldVersion,a.newVersion,yn(s.transaction),a)}),n&&s.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{o&&a.addEventListener("close",()=>o()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const iE=["get","getKey","getAll","getAllKeys","count"],oE=["put","add","delete","clear"],La=new Map;function Cf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(La.get(t))return La.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=oE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iE.includes(n)))return;const o=async function(s,...l){const a=this.transaction(s,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return La.set(t,o),o}eE(e=>({...e,get:(t,n,r)=>Cf(t,n)||e.get(t,n,r),has:(t,n)=>!!Cf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ku="@firebase/app",Pf="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new fd("@firebase/app"),aE="@firebase/app-compat",uE="@firebase/analytics-compat",cE="@firebase/analytics",dE="@firebase/app-check-compat",hE="@firebase/app-check",fE="@firebase/auth",pE="@firebase/auth-compat",gE="@firebase/database",mE="@firebase/database-compat",vE="@firebase/functions",yE="@firebase/functions-compat",wE="@firebase/installations",_E="@firebase/installations-compat",EE="@firebase/messaging",SE="@firebase/messaging-compat",kE="@firebase/performance",IE="@firebase/performance-compat",TE="@firebase/remote-config",CE="@firebase/remote-config-compat",PE="@firebase/storage",AE="@firebase/storage-compat",xE="@firebase/firestore",RE="@firebase/firestore-compat",NE="firebase",OE="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="[DEFAULT]",$E={[Ku]:"fire-core",[aE]:"fire-core-compat",[cE]:"fire-analytics",[uE]:"fire-analytics-compat",[hE]:"fire-app-check",[dE]:"fire-app-check-compat",[fE]:"fire-auth",[pE]:"fire-auth-compat",[gE]:"fire-rtdb",[mE]:"fire-rtdb-compat",[vE]:"fire-fn",[yE]:"fire-fn-compat",[wE]:"fire-iid",[_E]:"fire-iid-compat",[EE]:"fire-fcm",[SE]:"fire-fcm-compat",[kE]:"fire-perf",[IE]:"fire-perf-compat",[TE]:"fire-rc",[CE]:"fire-rc-compat",[PE]:"fire-gcs",[AE]:"fire-gcs-compat",[xE]:"fire-fst",[RE]:"fire-fst-compat","fire-js":"fire-js",[NE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,Yu=new Map;function DE(e,t){try{e.container.addComponent(t)}catch(n){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Wr(e){const t=e.name;if(Yu.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;Yu.set(t,e);for(const n of nl.values())DE(n,e);return!0}function gd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new wo("app","Firebase",LE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=OE;function rv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=Zm()),!n)throw wn.create("no-options");const o=nl.get(i);if(o){if(tl(n,o.options)&&tl(r,o.config))return o;throw wn.create("duplicate-app",{appName:i})}const s=new H_(i);for(const a of Yu.values())s.addComponent(a);const l=new ME(n,r,s);return nl.set(i,l),l}function iv(e=Xu){const t=nl.get(e);if(!t&&e===Xu&&Zm())return rv();if(!t)throw wn.create("no-app",{appName:e});return t}function _n(e,t,n){var r;let i=(r=$E[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(l.join(" "));return}Wr(new er(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="firebase-heartbeat-database",zE=1,eo="firebase-heartbeat-store";let Ma=null;function ov(){return Ma||(Ma=rE(UE,zE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(e=>{throw wn.create("idb-open",{originalErrorMessage:e.message})})),Ma}async function FE(e){try{return await(await ov()).transaction(eo).objectStore(eo).get(sv(e))}catch(t){if(t instanceof Gt)tr.warn(t.message);else{const n=wn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tr.warn(n.message)}}}async function Af(e,t){try{const r=(await ov()).transaction(eo,"readwrite");await r.objectStore(eo).put(t,sv(e)),await r.done}catch(n){if(n instanceof Gt)tr.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function sv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=1024,bE=30*24*60*60*1e3;class BE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=xf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=bE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:i}=VE(this._heartbeatsCache.heartbeats),o=el(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function xf(){return new Date().toISOString().substring(0,10)}function VE(e,t=jE){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Rf(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rf(e){return el(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(e){Wr(new er("platform-logger",t=>new sE(t),"PRIVATE")),Wr(new er("heartbeat",t=>new BE(t),"PRIVATE")),_n(Ku,Pf,e),_n(Ku,Pf,"esm2017"),_n("fire-js","")}WE("");function lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GE=lv,av=new wo("auth","Firebase",lv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new fd("@firebase/auth");function KE(e,...t){rl.logLevel<=b.WARN&&rl.warn(`Auth (${Zr}): ${e}`,...t)}function ks(e,...t){rl.logLevel<=b.ERROR&&rl.error(`Auth (${Zr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,...t){throw md(e,...t)}function kt(e,...t){return md(e,...t)}function XE(e,t,n){const r=Object.assign(Object.assign({},GE()),{[t]:n});return new wo("auth","Firebase",r).create(t,{appName:e.name})}function md(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return av.create(e,...t)}function N(e,t,...n){if(!e)throw md(t,...n)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ks(t),new Error(t)}function Bt(e,t){e||$t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function YE(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YE()||x_()||"connection"in navigator)?navigator.onLine:!0}function qE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Bt(n>t,"Short delay should be less than long delay!"),this.isMobile=A_()||R_()}get(){return QE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(e,t){Bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=new Eo(3e4,6e4);function yd(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ei(e,t,n,r,i={}){return cv(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const l=_o(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),uv.fetch()(dv(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},o))})}async function cv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},JE),t);try{const i=new tS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw es(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(e,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw es(e,"email-already-in-use",s);if(a==="USER_DISABLED")throw es(e,"user-disabled",s);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw XE(e,d,u);bt(e,d)}}catch(i){if(i instanceof Gt)throw i;bt(e,"network-request-failed",{message:String(i)})}}async function eS(e,t,n,r,i={}){const o=await ei(e,t,n,r,i);return"mfaPendingCredential"in o&&bt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function dv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?vd(e.config,i):`${e.config.apiScheme}://${i}`}class tS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),ZE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(e,t){return ei(e,"POST","/v1/accounts:delete",t)}async function rS(e,t){return ei(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iS(e,t=!1){const n=Jr(e),r=await n.getIdToken(t),i=wd(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:$i(Ua(i.auth_time)),issuedAtTime:$i(Ua(i.iat)),expirationTime:$i(Ua(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ua(e){return Number(e)*1e3}function wd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=qm(n);return i?JSON.parse(i):(ks("Failed to decode base64 JWT payload"),null)}catch(i){return ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function oS(e){const t=wd(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Gt&&sS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function sS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(e){var t;const n=e.auth,r=await e.getIdToken(),i=await to(e,rS(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?cS(o.providerUserInfo):[],l=uS(e.providerData,s),a=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new hv(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function aS(e){const t=Jr(e);await il(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function cS(e){return e.map(t=>{var{providerId:n}=t,r=od(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(e,t){const n=await cv(e,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=dv(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hS(e,t){return ei(e,"POST","/v2/accounts:revokeToken",yd(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):oS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await dS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new no;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Kn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=od(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new hv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await to(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return iS(this,t)}reload(){return aS(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Kn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await to(this,nS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,l,a,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:f,emailVerified:v,isAnonymous:k,providerData:S,stsTokenManager:_}=n;N(f&&_,t,"internal-error");const A=no.fromJSON(this.name,_);N(typeof f=="string",t,"internal-error"),Qt(p,t.name),Qt(g,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof k=="boolean",t,"internal-error"),Qt(m,t.name),Qt(y,t.name),Qt(w,t.name),Qt($,t.name),Qt(h,t.name),Qt(c,t.name);const F=new Kn({uid:f,auth:t,email:g,emailVerified:v,displayName:p,isAnonymous:k,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:A,createdAt:h,lastLoginAt:c});return S&&Array.isArray(S)&&(F.providerData=S.map(L=>Object.assign({},L))),$&&(F._redirectEventId=$),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new no;i.updateFromServerResponse(n);const o=new Kn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await il(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;function Dt(e){Bt(e instanceof Function,"Expected a class definition");let t=Of.get(e);return t?(Bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Of.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}fv.type="NONE";const $f=fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e,t,n){return`firebase:${e}:${t}:${n}`}class xr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,o),this.fullPersistenceKey=Is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Kn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xr(Dt($f),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Dt($f);const s=Is(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const d=await u._get(s);if(d){const p=Kn._fromJSON(t,d);u!==o&&(l=p),o=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!a.length?new xr(o,t,r):(o=a[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new xr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yv(t))return"Blackberry";if(wv(t))return"Webos";if(_d(t))return"Safari";if((t.includes("chrome/")||gv(t))&&!t.includes("edge/"))return"Chrome";if(vv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pv(e=Ae()){return/firefox\//i.test(e)}function _d(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gv(e=Ae()){return/crios\//i.test(e)}function mv(e=Ae()){return/iemobile/i.test(e)}function vv(e=Ae()){return/android/i.test(e)}function yv(e=Ae()){return/blackberry/i.test(e)}function wv(e=Ae()){return/webos/i.test(e)}function Ml(e=Ae()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fS(e=Ae()){var t;return Ml(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function pS(){return N_()&&document.documentMode===10}function _v(e=Ae()){return Ml(e)||vv(e)||wv(e)||yv(e)||/windows phone/i.test(e)||mv(e)}function gS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(e,t=[]){let n;switch(e){case"Browser":n=Df(Ae());break;case"Worker":n=`${Df(Ae())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,l)=>{try{const a=t(o);s(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(e,t={}){return ei(e,"GET","/v2/passwordPolicy",yd(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=6;class wS{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:yS,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsUppercaseLetter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(s=a.containsNumericCharacter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.beforeStateQueue=new mS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!s||s===l)&&(a!=null&&a.user)&&(i=a.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await il(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=qE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Jr(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vS(this),n=new wS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Dt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,i);return()=>{s=!0,a()}}else{const a=t.addObserver(n);return()=>{s=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&KE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ed(e){return Jr(e)}class Lf{constructor(t){this.auth=t,this.observer=null,this.addObserver=z_(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function SS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=kt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ES().appendChild(r)})}function kS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(e,t){const n=gd(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(tl(o,t??{}))return i;bt(i,"already-initialized")}return n.initialize({options:t})}function TS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function CS(e,t,n){const r=Ed(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Sv(t),{host:s,port:l}=PS(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||AS()}function Sv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function PS(e){const t=Sv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Mf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Mf(s)}}}function Mf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function AS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,n){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e,t){return eS(e,"POST","/v1/accounts:signInWithIdp",yd(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="http://localhost";class nr extends kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new nr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=od(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new nr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Rr(t,n)}buildRequest(){const t={requestUri:xS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=_o(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends So{constructor(){super("facebook.com")}static credential(t){return nr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return nn.credential(t.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return nr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends So{constructor(){super("github.com")}static credential(t){return nr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return on.credentialFromTaggedObject(t)}static credentialFromError(t){return on.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return on.credential(t.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends So{constructor(){super("twitter.com")}static credential(t,n){return nr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return sn.credentialFromTaggedObject(t)}static credentialFromError(t){return sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Kn._fromIdTokenResponse(t,r,i),s=Uf(r);return new Gr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Uf(r);return new Gr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Uf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Gt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ol(t,n,r,i)}}function Tv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(e,o,t,r):o})}async function RS(e,t,n=!1){const r=await to(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await to(e,Tv(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=wd(o.idToken);N(s,r,"internal-error");const{sub:l}=s;return N(e.uid===l,r,"user-mismatch"),Gr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(e,t,n=!1){const r="signIn",i=await Tv(e,r,t),o=await Gr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function $S(e,t,n,r){return Jr(e).onIdTokenChanged(t,n,r)}function DS(e,t,n){return Jr(e).beforeAuthStateChanged(t,n)}const sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){const e=Ae();return _d(e)||Ml(e)}const MS=1e3,US=10;class Pv extends Cv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LS()&&gS(),this.fallbackToPolling=_v(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,l,a)=>{this.notifyListeners(s,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);pS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,US):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pv.type="LOCAL";const zS=Pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Cv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Av.type="SESSION";const xv=Av;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ul(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async u=>u(n.origin,o)),a=await FS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,a)=>{const u=Sd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(g.data.response);break;default:clearTimeout(d),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function bS(e){It().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function BS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function HS(){return Rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="firebaseLocalStorageDb",WS=1,ll="firebaseLocalStorage",Ov="fbase_key";class ko{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(e,t){return e.transaction([ll],t?"readwrite":"readonly").objectStore(ll)}function GS(){const e=indexedDB.deleteDatabase(Nv);return new ko(e).toPromise()}function qu(){const e=indexedDB.open(Nv,WS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ll,{keyPath:Ov})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ll)?t(r):(r.close(),await GS(),t(await qu()))})})}async function zf(e,t,n){const r=zl(e,!0).put({[Ov]:t,value:n});return new ko(r).toPromise()}async function KS(e,t){const n=zl(e,!1).get(t),r=await new ko(n).toPromise();return r===void 0?null:r.value}function Ff(e,t){const n=zl(e,!0).delete(t);return new ko(n).toPromise()}const XS=800,YS=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>YS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(HS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await qu();return await zf(t,sl,"1"),await Ff(t,sl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>KS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=zl(i,!1).getAll();return new ko(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const QS=$v;new Eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(e,t){return t?Dt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends kv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function JS(e){return OS(e.auth,new kd(e),e.bypassAuthState)}function ZS(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),NS(n,new kd(e),e.bypassAuthState)}async function ek(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),RS(n,new kd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=t;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return JS;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return ZS;default:bt(this.auth,"internal-error")}}resolve(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Eo(2e3,1e4);class Er extends Dv{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const t=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,tk.get())};t()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="pendingRedirect",Ts=new Map;class rk extends Dv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ts.get(this.auth._key());if(!t){try{const r=await ik(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ts.set(this.auth._key(),t)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ik(e,t){const n=lk(t),r=sk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ok(e,t){Ts.set(e._key(),t)}function sk(e){return Dt(e._redirectPersistence)}function lk(e){return Is(nk,e.config.apiKey,e.name)}async function ak(e,t,n=!1){const r=Ed(e),i=qS(r,t),s=await new rk(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=10*60*1e3;class ck{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!dk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Lv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(t))}saveEventToCache(t){this.cachedEventUids.add(jf(t)),this.lastProcessedEventTime=Date.now()}}function jf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Lv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function dk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(e,t={}){return ei(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function gk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await hk(e);for(const n of t)try{if(mk(n))return}catch{}bt(e,"unauthorized-domain")}function mk(e){const t=Qu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!pk.test(n))return!1;if(fk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new Eo(3e4,6e4);function bf(){const e=It().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function yk(e){return new Promise((t,n)=>{var r,i,o;function s(){bf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bf(),n(kt(e,"network-request-failed"))},timeout:vk.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=It().gapi)===null||o===void 0)&&o.load)s();else{const l=kS("iframefcb");return It()[l]=()=>{gapi.load?s():n(kt(e,"network-request-failed"))},SS(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Cs=null,t})}let Cs=null;function wk(e){return Cs=Cs||yk(e),Cs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new Eo(5e3,15e3),Ek="__/auth/iframe",Sk="emulator/auth/iframe",kk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ik=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tk(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vd(t,Sk):`https://${e.config.authDomain}/${Ek}`,r={apiKey:t.apiKey,appName:e.name,v:Zr},i=Ik.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${_o(r).slice(1)}`}async function Ck(e){const t=await wk(e),n=It().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:Tk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kk,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=kt(e,"network-request-failed"),l=It().setTimeout(()=>{o(s)},_k.get());function a(){It().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ak=500,xk=600,Rk="_blank",Nk="http://localhost";class Bf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(e,t,n,r=Ak,i=xk){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Pk),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ae().toLowerCase();n&&(l=gv(u)?Rk:n),pv(u)&&(t=t||Nk,a.scrollbars="yes");const d=Object.entries(a).reduce((g,[m,y])=>`${g}${m}=${y},`,"");if(fS(u)&&l!=="_self")return $k(t||"",l),new Bf(null);const p=window.open(t||"",l,d);N(p,e,"popup-blocked");try{p.focus()}catch{}return new Bf(p)}function $k(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="__/auth/handler",Lk="emulator/auth/handler",Mk=encodeURIComponent("fac");async function Vf(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(t instanceof Iv){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",U_(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(o||{}))s[d]=p}if(t instanceof So){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const l=s;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await e._getAppCheckToken(),u=a?`#${Mk}=${encodeURIComponent(a)}`:"";return`${Uk(e)}?${_o(l).slice(1)}${u}`}function Uk({config:e}){return e.emulator?vd(e,Lk):`https://${e.authDomain}/${Dk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xv,this._completeRedirectFn=ak,this._overrideRedirectResult=ok}async _openPopup(t,n,r,i){var o;Bt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Vf(t,n,r,Qu(),i);return Ok(t,s,Sd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Vf(t,n,r,Qu(),i);return bS(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Ck(t),r=new ck(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(za,{type:za},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[za];s!==void 0&&n(!!s),bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _v()||_d()||Ml()}}const Fk=zk;var Hf="@firebase/auth",Wf="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Bk(e){Wr(new er("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:s,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ev(e)},u=new _S(r,i,o,a);return TS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Wr(new er("auth-internal",t=>{const n=Ed(t.getProvider("auth").getImmediate());return(r=>new jk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Hf,Wf,bk(e)),_n(Hf,Wf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=5*60,Hk=ev("authIdTokenMaxAge")||Vk;let Gf=null;const Wk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hk)return;const i=n==null?void 0:n.token;Gf!==i&&(Gf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gk(e=iv()){const t=gd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=IS(e,{popupRedirectResolver:Fk,persistence:[QS,zS,xv]}),r=ev("authTokenSyncURL");if(r){const o=Wk(r);DS(n,o,()=>o(n.currentUser)),$S(n,s=>o(s))}const i=Jm("auth");return i&&CS(n,`http://${i}`),n}Bk("Browser");var Kk="firebase",Xk="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(Kk,Xk,"app");var Yk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Id=Id||{},R=Yk||self;function Fl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Io(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Qk(e){return Object.prototype.hasOwnProperty.call(e,Fa)&&e[Fa]||(e[Fa]=++qk)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),qk=0;function Jk(e,t,n){return e.call.apply(e.bind,arguments)}function Zk(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Te(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=Jk:Te=Zk,Te.apply(null,arguments)}function ts(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function fe(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var s=Array(arguments.length-2),l=2;l<arguments.length;l++)s[l-2]=arguments[l];return t.prototype[i].apply(r,s)}}function Cn(){this.s=this.s,this.o=this.o}var eI=0;Cn.prototype.s=!1;Cn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eI!=0)&&Qk(this)};Cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Td(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Kf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fl(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var tI=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};R.addEventListener("test",n,t),R.removeEventListener("test",n,t)}catch{}return e}();function ro(e){return/^[\s\xa0]*$/.test(e)}function jl(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return jl().indexOf(e)!=-1}function Cd(e){return Cd[" "](e),e}Cd[" "]=function(){};function nI(e,t){var n=YI;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var rI=yt("Opera"),io=yt("Trident")||yt("MSIE"),Uv=yt("Edge"),Ju=Uv||io,zv=yt("Gecko")&&!(jl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),iI=jl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function Fv(){var e=R.document;return e?e.documentMode:void 0}e:{var Xf="",ja=function(){var e=jl();if(zv)return/rv:([^\);]+)(\)|;)/.exec(e);if(Uv)return/Edge\/([\d\.]+)/.exec(e);if(io)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(iI)return/WebKit\/(\S+)/.exec(e);if(rI)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ja&&(Xf=ja?ja[1]:""),io){var Yf=Fv();if(Yf!=null&&Yf>parseFloat(Xf))break e}}R.document&&io&&Fv();function oo(e,t){if(Ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(zv){e:{try{Cd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:oI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&oo.$.h.call(this)}}fe(oo,Ce);var oI={2:"touch",3:"pen",4:"mouse"};oo.prototype.h=function(){oo.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),sI=0;function lI(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++sI,this.fa=this.ia=!1}function bl(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Pd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function aI(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function jv(e){const t={};for(const n in e)t[n]=e[n];return t}const Qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<Qf.length;o++)n=Qf[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Bl(e){this.src=e,this.g={},this.h=0}Bl.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=ec(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new lI(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function Zu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Mv(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(bl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ec(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var Ad="closure_lm_"+(1e6*Math.random()|0),ba={};function Bv(e,t,n,r,i){if(r&&r.once)return Hv(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)Bv(e,t[o],n,r,i);return null}return n=Nd(n),e&&e[To]?e.O(t,n,Io(r)?!!r.capture:!!r,i):Vv(e,t,n,!1,r,i)}function Vv(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Io(i)?!!i.capture:!!i,l=Rd(e);if(l||(e[Ad]=l=new Bl(e)),n=l.add(t,n,r,s,o),n.proxy)return n;if(r=uI(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)tI||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Gv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uI(){function e(n){return t.call(e.src,e.listener,n)}const t=cI;return e}function Hv(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)Hv(e,t[o],n,r,i);return null}return n=Nd(n),e&&e[To]?e.P(t,n,Io(r)?!!r.capture:!!r,i):Vv(e,t,n,!0,r,i)}function Wv(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)Wv(e,t[o],n,r,i);else r=Io(r)?!!r.capture:!!r,n=Nd(n),e&&e[To]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=ec(o,n,r,i),-1<n&&(bl(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=Rd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ec(t,n,r,i)),(n=-1<e?t[e]:null)&&xd(n))}function xd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[To])Zu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Gv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Rd(t))?(Zu(n,e),n.h==0&&(n.src=null,t[Ad]=null)):bl(e)}}}function Gv(e){return e in ba?ba[e]:ba[e]="on"+e}function cI(e,t){if(e.fa)e=!0;else{t=new oo(t,this);var n=e.listener,r=e.la||e.src;e.ia&&xd(e),e=n.call(r,t)}return e}function Rd(e){return e=e[Ad],e instanceof Bl?e:null}var Ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nd(e){return typeof e=="function"?e:(e[Ba]||(e[Ba]=function(t){return e.handleEvent(t)}),e[Ba])}function he(){Cn.call(this),this.i=new Bl(this),this.S=this,this.J=null}fe(he,Cn);he.prototype[To]=!0;he.prototype.removeEventListener=function(e,t,n,r){Wv(this,e,t,n,r)};function ve(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ce(t,e);else if(t instanceof Ce)t.target=t.target||e;else{var i=t;t=new Ce(r,e),bv(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=ns(s,r,!0,t)&&i}if(s=t.g=e,i=ns(s,r,!0,t)&&i,i=ns(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=ns(s,r,!1,t)&&i}he.prototype.N=function(){if(he.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)bl(n[r]);delete e.g[t],e.h--}}this.J=null};he.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};he.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ns(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var l=s.listener,a=s.la||s.src;s.ia&&Zu(e.i,s),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Od=R.JSON.stringify;class dI{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function hI(){var e=$d;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class fI{constructor(){this.h=this.g=null}add(t,n){const r=Kv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Kv=new dI(()=>new pI,e=>e.reset());class pI{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gI(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function mI(e){R.setTimeout(()=>{throw e},0)}let so,lo=!1,$d=new fI,Xv=()=>{const e=R.Promise.resolve(void 0);so=()=>{e.then(vI)}};var vI=()=>{for(var e;e=hI();){try{e.h.call(e.g)}catch(n){mI(n)}var t=Kv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}lo=!1};function Vl(e,t){he.call(this),this.h=e||1,this.g=t||R,this.j=Te(this.qb,this),this.l=Date.now()}fe(Vl,he);T=Vl.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ve(this,"tick"),this.ga&&(Dd(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}T.N=function(){Vl.$.N.call(this),Dd(this),delete this.g};function Ld(e,t,n){if(typeof e=="function")n&&(e=Te(e,n));else if(e&&typeof e.handleEvent=="function")e=Te(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function Yv(e){e.g=Ld(()=>{e.g=null,e.i&&(e.i=!1,Yv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class yI extends Cn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Yv(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ao(e){Cn.call(this),this.h=e,this.g={}}fe(ao,Cn);var qf=[];function Qv(e,t,n,r){Array.isArray(n)||(n&&(qf[0]=n.toString()),n=qf);for(var i=0;i<n.length;i++){var o=Bv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function qv(e){Pd(e.g,function(t,n){this.g.hasOwnProperty(n)&&xd(t)},e),e.g={}}ao.prototype.N=function(){ao.$.N.call(this),qv(this)};ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hl(){this.g=!0}Hl.prototype.Ea=function(){this.g=!1};function wI(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",l=o.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var d=u[0];u=u[1];var p=d.split("_");s=2<=p.length&&p[1]=="type"?s+(d+"="+u+"&"):s+(d+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function _I(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Sr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+SI(e,n)+(r?" "+r:"")})}function EI(e,t){e.info(function(){return"TIMEOUT: "+t})}Hl.prototype.info=function(){};function SI(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Od(n)}catch{return t}}var ti={},Jf=null;function Md(){return Jf=Jf||new he}ti.Ta="serverreachability";function Jv(e){Ce.call(this,ti.Ta,e)}fe(Jv,Ce);function uo(e){const t=Md();ve(t,new Jv(t))}ti.STAT_EVENT="statevent";function Zv(e,t){Ce.call(this,ti.STAT_EVENT,e),this.stat=t}fe(Zv,Ce);function Re(e){const t=Md();ve(t,new Zv(t,e))}ti.Ua="timingevent";function e0(e,t){Ce.call(this,ti.Ua,e),this.size=t}fe(e0,Ce);function Co(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var Ud={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zd(){}zd.prototype.h=null;function Zf(e){return e.h||(e.h=e.i())}function II(){}var Po={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fd(){Ce.call(this,"d")}fe(Fd,Ce);function jd(){Ce.call(this,"c")}fe(jd,Ce);var tc;function Wl(){}fe(Wl,zd);Wl.prototype.g=function(){return new XMLHttpRequest};Wl.prototype.i=function(){return{}};tc=new Wl;function Ao(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ao(this),this.P=TI,e=Ju?125:void 0,this.V=new Vl(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new t0}function t0(){this.i=null,this.g="",this.h=!1}var TI=45e3,n0={},nc={};T=Ao.prototype;T.setTimeout=function(e){this.P=e};function rc(e,t,n){e.L=1,e.A=Kl(Vt(t)),e.u=n,e.S=!0,r0(e,null)}function r0(e,t){e.G=Date.now(),xo(e),e.B=Vt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),d0(n.i,"t",r),e.o=0,n=e.l.J,e.h=new t0,e.g=O0(e.l,n?t:null,!e.u),0<e.O&&(e.M=new yI(Te(e.Pa,e,e.g),e.O)),Qv(e.U,e.g,"readystatechange",e.nb),t=e.I?jv(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),uo(),wI(e.j,e.v,e.B,e.m,e.W,e.u)}T.nb=function(e){e=e.target;const t=this.M;t&&wt(e)==3?t.l():this.Pa(e)};T.Pa=function(e){try{if(e==this.g)e:{const d=wt(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>d)&&(d!=3||Ju||this.g&&(this.h.h||this.g.ja()||rp(this.g)))){this.J||d!=4||t==7||(t==8||0>=p?uo(3):uo(2)),Gl(this);var n=this.g.da();this.ca=n;t:if(i0(this)){var r=rp(this.g);e="";var i=r.length,o=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Di(this);var s="";break t}this.h.i=new R.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.length=0,this.h.g+=e,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,_I(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ro(l)){var u=l;break t}}u=null}if(n=u)Sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ic(this,n);else{this.i=!1,this.s=3,Re(12),bn(this),Di(this);break e}}this.S?(o0(this,d,s),Ju&&this.i&&d==3&&(Qv(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,s,null),ic(this,s)),d==4&&bn(this),this.i&&!this.J&&(d==4?A0(this.l,this):(this.i=!1,xo(this)))}else GI(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),bn(this),Di(this)}}}catch{}finally{}};function i0(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function o0(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=CI(e,n),i==nc){t==4&&(e.s=4,Re(14),r=!1),Sr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==n0){e.s=4,Re(15),Sr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Sr(e.j,e.m,i,null),ic(e,i);i0(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Re(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gd(t),t.M=!0,Re(11))):(Sr(e.j,e.m,n,"[Invalid Chunked Response]"),bn(e),Di(e))}T.mb=function(){if(this.g){var e=wt(this.g),t=this.g.ja();this.o<t.length&&(Gl(this),o0(this,e,t),this.i&&e!=4&&xo(this))}};function CI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?nc:(n=Number(t.substring(n,r)),isNaN(n)?n0:(r+=1,r+n>t.length?nc:(t=t.slice(r,r+n),e.o=r+n,t)))}T.cancel=function(){this.J=!0,bn(this)};function xo(e){e.Y=Date.now()+e.P,s0(e,e.P)}function s0(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Co(Te(e.lb,e),t)}function Gl(e){e.C&&(R.clearTimeout(e.C),e.C=null)}T.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(EI(this.j,this.B),this.L!=2&&(uo(),Re(17)),bn(this),this.s=2,Di(this)):s0(this,this.Y-e)};function Di(e){e.l.H==0||e.J||A0(e.l,e)}function bn(e){Gl(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Dd(e.V),qv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ic(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||oc(n.i,e))){if(!e.K&&oc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)cl(n),ql(n);else break e;Wd(n),Re(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Co(Te(n.ib,n),6e3));if(1>=p0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Bn(n,11)}else if((e.K||n.g==e)&&cl(n),!ro(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const p=u[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var o=r.i;o.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(bd(o,o.h),o.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Y(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=N0(r,r.J?r.pa:null,r.Y),s.K){g0(r.i,s);var l=s,a=r.L;a&&l.setTimeout(a),l.C&&(Gl(l),xo(l)),r.g=s}else C0(r);0<n.j.length&&Jl(n)}else u[0]!="stop"&&u[0]!="close"||Bn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bn(n,7):Hd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}uo(4)}catch{}}function PI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Fl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function AI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Fl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function l0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Fl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=AI(e),r=PI(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var a0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Xn){this.h=e.h,al(this,e.j),this.s=e.s,this.g=e.g,ul(this,e.m),this.l=e.l;var t=e.i,n=new co;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ep(this,n),this.o=e.o}else e&&(t=String(e).match(a0))?(this.h=!1,al(this,t[1]||"",!0),this.s=Ei(t[2]||""),this.g=Ei(t[3]||"",!0),ul(this,t[4]),this.l=Ei(t[5]||"",!0),ep(this,t[6]||"",!0),this.o=Ei(t[7]||"")):(this.h=!1,this.i=new co(null,this.h))}Xn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Si(t,tp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Si(t,tp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Si(n,n.charAt(0)=="/"?OI:NI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Si(n,DI)),e.join("")};function Vt(e){return new Xn(e)}function al(e,t,n){e.j=n?Ei(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ul(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ep(e,t,n){t instanceof co?(e.i=t,LI(e.i,e.h)):(n||(t=Si(t,$I)),e.i=new co(t,e.h))}function Y(e,t,n){e.i.set(t,n)}function Kl(e){return Y(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ei(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Si(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,RI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function RI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var tp=/[#\/\?@]/g,NI=/[#\?:]/g,OI=/[#\?]/g,$I=/[#\?@]/g,DI=/#/g;function co(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pn(e){e.g||(e.g=new Map,e.h=0,e.i&&xI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}T=co.prototype;T.add=function(e,t){Pn(this),this.i=null,e=ni(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function u0(e,t){Pn(e),t=ni(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function c0(e,t){return Pn(e),t=ni(e,t),e.g.has(t)}T.forEach=function(e,t){Pn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};T.ta=function(){Pn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};T.Z=function(e){Pn(this);let t=[];if(typeof e=="string")c0(this,e)&&(t=t.concat(this.g.get(ni(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};T.set=function(e,t){return Pn(this),this.i=null,e=ni(this,e),c0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};T.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function d0(e,t,n){u0(e,t),0<n.length&&(e.i=null,e.g.set(ni(e,t),Td(n)),e.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ni(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function LI(e,t){t&&!e.j&&(Pn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(u0(this,r),d0(this,i,n))},e)),e.j=t}var MI=class{constructor(e,t){this.g=e,this.map=t}};function h0(e){this.l=e||UI,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UI=10;function f0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function p0(e){return e.h?1:e.g?e.g.size:0}function oc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function bd(e,t){e.g?e.g.add(t):e.h=t}function g0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}h0.prototype.cancel=function(){if(this.i=m0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function m0(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Td(e.i)}var zI=class{stringify(e){return R.JSON.stringify(e,void 0)}parse(e){return R.JSON.parse(e,void 0)}};function FI(){this.g=new zI}function jI(e,t,n){const r=n||"";try{l0(e,function(i,o){let s=i;Io(i)&&(s=Od(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function bI(e,t){const n=new Hl;if(R.Image){const r=new Image;r.onload=ts(rs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ts(rs,n,r,"TestLoadImage: error",!1,t),r.onabort=ts(rs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ts(rs,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function rs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Xl(e){this.l=e.ec||null,this.j=e.ob||!1}fe(Xl,zd);Xl.prototype.g=function(){return new Yl(this.l,this.j)};Xl.prototype.i=function(e){return function(){return e}}({});function Yl(e,t){he.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Bd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}fe(Yl,he);var Bd=0;T=Yl.prototype;T.open=function(e,t){if(this.readyState!=Bd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ho(this)};T.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=Bd};T.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;v0(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function v0(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}T.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ro(this):ho(this),this.readyState==3&&v0(this)}};T.Za=function(e){this.g&&(this.response=this.responseText=e,Ro(this))};T.Ya=function(e){this.g&&(this.response=e,Ro(this))};T.ka=function(){this.g&&Ro(this)};function Ro(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ho(e)}T.setRequestHeader=function(e,t){this.v.append(e,t)};T.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ho(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var BI=R.JSON.parse;function ie(e){he.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=y0,this.L=this.M=!1}fe(ie,he);var y0="",VI=/^https?$/i,HI=["POST","PUT"];T=ie.prototype;T.Oa=function(e){this.M=e};T.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tc.g(),this.C=this.u?Zf(this.u):Zf(tc),this.g.onreadystatechange=Te(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){np(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=R.FormData&&e instanceof R.FormData,!(0<=Mv(HI,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{E0(this),0<this.B&&((this.L=WI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.ua,this)):this.A=Ld(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){np(this,o)}};function WI(e){return io&&typeof e.timeout=="number"&&e.ontimeout!==void 0}T.ua=function(){typeof Id<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ve(this,"timeout"),this.abort(8))};function np(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,w0(e),Ql(e)}function w0(e){e.F||(e.F=!0,ve(e,"complete"),ve(e,"error"))}T.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ve(this,"complete"),ve(this,"abort"),Ql(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ql(this,!0)),ie.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?_0(this):this.kb())};T.kb=function(){_0(this)};function _0(e){if(e.h&&typeof Id<"u"&&(!e.C[1]||wt(e)!=4||e.da()!=2)){if(e.v&&wt(e)==4)Ld(e.La,0,e);else if(ve(e,"readystatechange"),wt(e)==4){e.h=!1;try{const s=e.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=s===0){var i=String(e.I).match(a0)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!VI.test(i?i.toLowerCase():"")}n=r}if(n)ve(e,"complete"),ve(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",w0(e)}}finally{Ql(e)}}}}function Ql(e,t){if(e.g){E0(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ve(e,"ready");try{n.onreadystatechange=r}catch{}}}function E0(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}T.isActive=function(){return!!this.g};function wt(e){return e.g?e.g.readyState:0}T.da=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),BI(t)}};function rp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case y0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function GI(e){const t={};e=(e.g&&2<=wt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ro(e[r]))continue;var n=gI(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}aI(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function S0(e){let t="";return Pd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Vd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=S0(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Y(e,t,n))}function pi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function k0(e){this.Ga=0,this.j=[],this.l=new Hl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pi("baseRetryDelayMs",5e3,e),this.hb=pi("retryDelaySeedMs",1e4,e),this.eb=pi("forwardChannelMaxRetries",2,e),this.xa=pi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new h0(e&&e.concurrentRequestLimit),this.Ja=new FI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=k0.prototype;T.ra=8;T.H=1;function Hd(e){if(I0(e),e.H==3){var t=e.W++,n=Vt(e.I);if(Y(n,"SID",e.K),Y(n,"RID",t),Y(n,"TYPE","terminate"),No(e,n),t=new Ao(e,e.l,t),t.L=2,t.A=Kl(Vt(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&R.Image&&(new Image().src=t.A,n=!0),n||(t.g=O0(t.l,null),t.g.ha(t.A)),t.G=Date.now(),xo(t)}R0(e)}function ql(e){e.g&&(Gd(e),e.g.cancel(),e.g=null)}function I0(e){ql(e),e.u&&(R.clearTimeout(e.u),e.u=null),cl(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function Jl(e){if(!f0(e.i)&&!e.m){e.m=!0;var t=e.Na;so||Xv(),lo||(so(),lo=!0),$d.add(t,e),e.C=0}}function KI(e,t){return p0(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Co(Te(e.Na,e,t),x0(e,e.C)),e.C++,!0)}T.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ao(this,this.l,e);let o=this.s;if(this.U&&(o?(o=jv(o),bv(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=T0(this,i,t),n=Vt(this.I),Y(n,"RID",e),Y(n,"CVER",22),this.F&&Y(n,"X-HTTP-Session-Id",this.F),No(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(S0(o)))+"&"+t:this.o&&Vd(n,this.o,o)),bd(this.i,i),this.bb&&Y(n,"TYPE","init"),this.P?(Y(n,"$req",t),Y(n,"SID","null"),i.aa=!0,rc(i,n,null)):rc(i,n,t),this.H=2}}else this.H==3&&(e?ip(this,e):this.j.length==0||f0(this.i)||ip(this))};function ip(e,t){var n;t?n=t.m:n=e.W++;const r=Vt(e.I);Y(r,"SID",e.K),Y(r,"RID",n),Y(r,"AID",e.V),No(e,r),e.o&&e.s&&Vd(r,e.o,e.s),n=new Ao(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=T0(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),bd(e.i,n),rc(n,r,t)}function No(e,t){e.na&&Pd(e.na,function(n,r){Y(t,r,n)}),e.h&&l0({},function(n,r){Y(t,r,n)})}function T0(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Te(e.h.Va,e.h,e):null;e:{var i=e.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const d=i[a].map;if(u-=o,0>u)o=Math.max(0,i[a].g-100),l=!1;else try{jI(d,s,"req"+u+"_")}catch{r&&r(d)}}if(l){r=s.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function C0(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;so||Xv(),lo||(so(),lo=!0),$d.add(t,e),e.A=0}}function Wd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Co(Te(e.Ma,e),x0(e,e.A)),e.A++,!0)}T.Ma=function(){if(this.u=null,P0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Co(Te(this.jb,this),e)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Re(10),ql(this),P0(this))};function Gd(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function P0(e){e.g=new Ao(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Vt(e.wa);Y(t,"RID","rpc"),Y(t,"SID",e.K),Y(t,"AID",e.V),Y(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Y(t,"TO",e.qa),Y(t,"TYPE","xmlhttp"),No(e,t),e.o&&e.s&&Vd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Kl(Vt(t)),n.u=null,n.S=!0,r0(n,e)}T.ib=function(){this.v!=null&&(this.v=null,ql(this),Wd(this),Re(19))};function cl(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function A0(e,t){var n=null;if(e.g==t){cl(e),Gd(e),e.g=null;var r=2}else if(oc(e.i,t))n=t.F,g0(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Md(),ve(r,new e0(r,n)),Jl(e)}else C0(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&KI(e,t)||r==2&&Wd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Bn(e,5);break;case 4:Bn(e,10);break;case 3:Bn(e,6);break;default:Bn(e,2)}}}function x0(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Bn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Te(e.pb,e);n||(n=new Xn("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||al(n,"https"),Kl(n)),bI(n.toString(),r)}else Re(2);e.H=0,e.h&&e.h.za(t),R0(e),I0(e)}T.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Re(2)):(this.l.info("Failed to ping google.com"),Re(1))};function R0(e){if(e.H=0,e.ma=[],e.h){const t=m0(e.i);(t.length!=0||e.j.length!=0)&&(Kf(e.ma,t),Kf(e.ma,e.j),e.i.i.length=0,Td(e.j),e.j.length=0),e.h.ya()}}function N0(e,t,n){var r=n instanceof Xn?Vt(n):new Xn(n);if(r.g!="")t&&(r.g=t+"."+r.g),ul(r,r.m);else{var i=R.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Xn(null);r&&al(o,r),t&&(o.g=t),i&&ul(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&Y(r,n,t),Y(r,"VER",e.ra),No(e,r),r}function O0(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new ie(new Xl({ob:n})):new ie(e.va),t.Oa(e.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function $0(){}T=$0.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function it(e,t){he.call(this),this.g=new k0(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ro(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ro(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ri(this)}fe(it,he);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Re(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=N0(e,null,e.Y),Jl(e)};it.prototype.close=function(){Hd(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Od(e),e=n);t.j.push(new MI(t.fb++,e)),t.H==3&&Jl(t)};it.prototype.N=function(){this.g.h=null,delete this.j,Hd(this.g),delete this.g,it.$.N.call(this)};function D0(e){Fd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}fe(D0,Fd);function L0(){jd.call(this),this.status=1}fe(L0,jd);function ri(e){this.g=e}fe(ri,$0);ri.prototype.Ba=function(){ve(this.g,"a")};ri.prototype.Aa=function(e){ve(this.g,new D0(e))};ri.prototype.za=function(e){ve(this.g,new L0)};ri.prototype.ya=function(){ve(this.g,"b")};function XI(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}fe(Tt,XI);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Va(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}Tt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)Va(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){Va(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){Va(this,r),i=0;break}}this.h=i,this.i+=t};Tt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function V(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var YI={};function Kd(e){return-128<=e&&128>e?nI(e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return Nr;if(0>e)return ge(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=sc;return new V(t,0)}function M0(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ge(M0(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=Nr,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=_t(Math.pow(t,o)),r=r.R(o).add(_t(s))):(r=r.R(n),r=r.add(_t(s)))}return r}var sc=4294967296,Nr=Kd(0),lc=Kd(1),op=Kd(16777216);T=V.prototype;T.ea=function(){if(Je(this))return-ge(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:sc+r)*t,t*=sc}return e};T.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Lt(this))return"0";if(Je(this))return"-"+ge(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var i=hl(n,t).g;n=dl(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Lt(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};T.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Lt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Je(e){return e.h==-1}T.X=function(e){return e=dl(this,e),Je(e)?-1:Lt(e)?0:1};function ge(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new V(n,~e.h).add(lc)}T.abs=function(){return Je(this)?ge(this):this};T.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new V(n,n[n.length-1]&-2147483648?-1:0)};function dl(e,t){return e.add(ge(t))}T.R=function(e){if(Lt(this)||Lt(e))return Nr;if(Je(this))return Je(e)?ge(this).R(ge(e)):ge(ge(this).R(e));if(Je(e))return ge(this.R(ge(e)));if(0>this.X(op)&&0>e.X(op))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,l=e.D(i)>>>16,a=e.D(i)&65535;n[2*r+2*i]+=s*a,is(n,2*r+2*i),n[2*r+2*i+1]+=o*a,is(n,2*r+2*i+1),n[2*r+2*i+1]+=s*l,is(n,2*r+2*i+1),n[2*r+2*i+2]+=o*l,is(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new V(n,0)};function is(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function gi(e,t){this.g=e,this.h=t}function hl(e,t){if(Lt(t))throw Error("division by zero");if(Lt(e))return new gi(Nr,Nr);if(Je(e))return t=hl(ge(e),t),new gi(ge(t.g),ge(t.h));if(Je(t))return t=hl(e,ge(t)),new gi(ge(t.g),t.h);if(30<e.g.length){if(Je(e)||Je(t))throw Error("slowDivide_ only works with positive integers.");for(var n=lc,r=t;0>=r.X(e);)n=sp(n),r=sp(r);var i=lr(n,1),o=lr(r,1);for(r=lr(r,2),n=lr(n,2);!Lt(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=lr(r,1),n=lr(n,1)}return t=dl(e,i.R(t)),new gi(i,t)}for(i=Nr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=_t(n),s=o.R(t);Je(s)||0<s.X(e);)n-=r,o=_t(n),s=o.R(t);Lt(o)&&(o=lc),i=i.add(o),e=dl(e,s)}return new gi(i,e)}T.gb=function(e){return hl(this,e).h};T.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new V(n,this.h&e.h)};T.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new V(n,this.h|e.h)};T.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new V(n,this.h^e.h)};function sp(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new V(n,e.h)}function lr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new V(i,e.h)}it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Ud.NO_ERROR=0;Ud.TIMEOUT=8;Ud.HTTP_ERROR=6;kI.COMPLETE="complete";II.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";he.prototype.listen=he.prototype.O;ie.prototype.listenOnce=ie.prototype.P;ie.prototype.getLastError=ie.prototype.Sa;ie.prototype.getLastErrorCode=ie.prototype.Ia;ie.prototype.getStatus=ie.prototype.da;ie.prototype.getResponseJson=ie.prototype.Wa;ie.prototype.getResponseText=ie.prototype.ja;ie.prototype.send=ie.prototype.ha;ie.prototype.setWithCredentials=ie.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=_t;V.fromString=M0;var QI=V;const lp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new fd("@firebase/firestore");function We(e,...t){if(Kr.logLevel<=b.DEBUG){const n=t.map(Yd);Kr.debug(`Firestore (${Oo}): ${e}`,...n)}}function Xd(e,...t){if(Kr.logLevel<=b.ERROR){const n=t.map(Yd);Kr.error(`Firestore (${Oo}): ${e}`,...n)}}function qI(e,...t){if(Kr.logLevel<=b.WARN){const n=t.map(Yd);Kr.warn(`Firestore (${Oo}): ${e}`,...n)}}function Yd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(e="Unexpected state"){const t=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+e;throw Xd(t),new Error(t)}function ac(e,t){e||Qd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ie extends Gt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class JI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class ZI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eT{constructor(t){this.t=t,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let o=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Or,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const a=o;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{We("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(We("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Or)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(We("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ac(typeof r.accessToken=="string"),new U0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ac(t===null||typeof t=="string"),new Ee(t)}}class tT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new tT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&We("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,We("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{We("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):We("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ac(typeof n.token=="string"),this.R=n.token,new rT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=oT(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function z0(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(t,n,r,i,o,s,l,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class fl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new fl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ap,U;(U=ap||(ap={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new QI([4294967295,4294967295],0);function Ha(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(t,n,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&We("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,l=new qd(t,n,s,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ie(ke.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uT(e,t){if(Xd("AsyncQueue",`${t}: ${e}`),z0(e))return new Ie(ke.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=sT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{We("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(We("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ie(ke.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=uT(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function dT(e,t,n,r){if(t===!0&&r===!0)throw new Ie(ke.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function hT(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Qd()}function fT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ie(ke.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hT(e);throw new Ie(ke.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ie(ke.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ie(ke.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F0((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ie(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ie(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ie(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class j0{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ie(ke.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ie(ke.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JI;switch(r.type){case"firstParty":return new nT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ie(ke.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=up.get(n);r&&(We("ComponentProvider","Removing Datastore"),up.delete(n),r.terminate())}(this),Promise.resolve()}}function pT(e,t,n,r={}){var i;const o=(e=fT(e,j0))._getSettings(),s=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&qI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=Ee.MOCK_USER;else{l=P_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Ie(ke.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ee(u)}e._authCredentials=new ZI(new U0(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new aT(this,"async_queue_retry"),this._u=()=>{const n=Ha();n&&We("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Ha();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Ha();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Or;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!z0(t))throw t;We("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Xd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=qd.createAndSchedule(this,t,n,r,o=>this.lu(o));return this.nu.push(i),i}au(){this.ru&&Qd()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class mT extends j0{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new gT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yT(this),this._firestoreClient.terminate()}}function vT(e,t){const n=typeof e=="object"?e:iv(),r=typeof e=="string"?e:t||"(default)",i=gd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=T_("firestore");o&&pT(i,...o)}return i}function yT(e){var t,n,r;const i=e._freezeSettings(),o=function(l,a,u,d){return new lT(l,a,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,F0(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new cT(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){Oo=i})(Zr),Wr(new er("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new mT(new eT(r.getProvider("auth-internal")),new iT(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ie(ke.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fl(u.options.projectId,d)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),_n(lp,"4.4.1",t),_n(lp,"4.4.1","esm2017")})();const wT={apiKey:"AIzaSyCi0jnqYjdca8IVZztuv0-xGvZKQ2bmh2k",authDomain:"react-ecommerce-a3c3d.firebaseapp.com",projectId:"react-ecommerce-a3c3d",storageBucket:"react-ecommerce-a3c3d.appspot.com",messagingSenderId:"386169694267",appId:"1:386169694267:web:76241dc5328e3e6989541e"},b0=rv(wT);vT(b0);Gk(b0);I.form`
    display: flex;  
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 2rem auto;
    width: 100%;
    
`;I.div`
    position: relative;

`;I.label`
    position: absolute;
    color: #c4d0dd;
    top: -12px;
    left: 13px;
    font-weight: 600;
    padding: 0px 3px;
    background-color: #053b67;

    `;I.input`
    background-color: transparent;
    height: 2.3rem;
    width: 16rem;
    color: #ffffff;
    outline: none;
    border: 3px solid #2b6392;
    border-radius: 24px;
    padding-left: 14px;
    &:hover{
        border: 3px solid #427cac;
    }
    &:focus{
        border: 3px solid #5b91be;
    }


    
`;I.button`
    background-color: transparent;
    border: 3px solid #b9d5b9;
    color: #abceab;
    border-radius: 12px;
    padding: 6px 16px;
    
`;let _T={data:""},ET=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||_T,ST=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,kT=/\/\*[^]*?\*\/|  +/g,dp=/\n+/g,ln=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?ln(s,o):o+"{"+ln(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=ln(s,t?t.replace(/([^,])+/g,l=>o.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,l):l?l+" "+a:a)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ln.p?ln.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Pt={},B0=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+B0(e[n]);return t}return e},IT=(e,t,n,r,i)=>{let o=B0(e),s=Pt[o]||(Pt[o]=(a=>{let u=0,d=11;for(;u<a.length;)d=101*d+a.charCodeAt(u++)>>>0;return"go"+d})(o));if(!Pt[s]){let a=o!==e?e:(u=>{let d,p,g=[{}];for(;d=ST.exec(u.replace(kT,""));)d[4]?g.shift():d[3]?(p=d[3].replace(dp," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][d[1]]=d[2].replace(dp," ").trim();return g[0]})(e);Pt[s]=ln(i?{["@keyframes "+s]:a}:a,n?"":"."+s)}let l=n&&Pt.g?Pt.g:null;return n&&(Pt.g=Pt[s]),((a,u,d,p)=>{p?u.data=u.data.replace(p,a):u.data.indexOf(a)===-1&&(u.data=d?a+u.data:u.data+a)})(Pt[s],t,r,l),s},TT=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let l=s(n),a=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=a?"."+a:l&&typeof l=="object"?l.props?"":ln(l,""):l===!1?"":l}return r+i+(s??"")},"");function Zl(e){let t=this||{},n=e.call?e(t.p):e;return IT(n.unshift?n.raw?TT(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,ET(t.target),t.g,t.o,t.k)}let V0,uc,cc;Zl.bind({g:1});let Ht=Zl.bind({k:1});function CT(e,t,n,r){ln.p=t,V0=e,uc=n,cc=r}function An(e,t){let n=this||{};return function(){let r=arguments;function i(o,s){let l=Object.assign({},o),a=l.className||i.className;n.p=Object.assign({theme:uc&&uc()},l),n.o=/ *go\d+/.test(a),l.className=Zl.apply(n,r)+(a?" "+a:""),t&&(l.ref=s);let u=e;return e[0]&&(u=l.as||e,delete l.as),cc&&u[0]&&cc(l),V0(u,l)}return t?t(i):i}}var PT=e=>typeof e=="function",AT=(e,t)=>PT(e)?e(t):e,xT=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),RT=Ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,NT=Ht`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,OT=Ht`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$T=An("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${RT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${NT} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${OT} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,DT=Ht`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,LT=An("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${DT} 1s linear infinite;
`,MT=Ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,UT=Ht`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,zT=An("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${MT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${UT} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,FT=An("div")`
  position: absolute;
`,jT=An("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,bT=Ht`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,BT=An("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${bT} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,VT=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?ne.createElement(BT,null,t):t:n==="blank"?null:ne.createElement(jT,null,ne.createElement(LT,{...r}),n!=="loading"&&ne.createElement(FT,null,n==="error"?ne.createElement($T,{...r}):ne.createElement(zT,{...r})))},HT=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,WT=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,GT="0%{opacity:0;} 100%{opacity:1;}",KT="0%{opacity:1;} 100%{opacity:0;}",XT=An("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,YT=An("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,QT=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=xT()?[GT,KT]:[HT(n),WT(n)];return{animation:t?`${Ht(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ht(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};ne.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?QT(e.position||t||"top-center",e.visible):{opacity:0},o=ne.createElement(VT,{toast:e}),s=ne.createElement(YT,{...e.ariaProps},AT(e.message,e));return ne.createElement(XT,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:o,message:s}):ne.createElement(ne.Fragment,null,o,s))});CT(ne.createElement);Zl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;I.form`
    display: flex;  
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 2.4rem auto;
    width: 100%;    
`;I.div`
    position: relative;

`;I.label`
    position: absolute;
    color: #c4d0dd;
    top: -12px;
    left: 13px;
    font-weight: 600;
    padding: 0px 3px;
    background-color: #053b67;
    `;I.input`
    background-color: transparent;
    height: 2.3rem;
    width: 16rem;
    color: #ffffff;
    outline: none;
    border: 3px solid #2b6392;
    border-radius: 24px;
    padding-left: 14px;
    &:hover{
        border: 3px solid #427cac;
    }
    &:focus{
        border: 3px solid #5b91be;
    }

`;I.button`
    background-color: transparent;
    border: 3px solid #b9d5b9;
    color: #abceab;
    border-radius: 12px;
    padding: 6px 16px;
    
`;I.div`
    height: 25rem;
    width: 22rem;
    background-color: #053b67;
    position: fixed;
    margin-left: 40vw;
    margin-top: 20vh;
    z-index: 10;
    backdrop-filter: blur(10px);
    border-radius: 18px;

`;I.div`
text-align: center;
    
`;I.p`
    color: white;

    
`;I.a`
    color: steelblue;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;

    }
`;I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-radius: 27px; */
    background: ${e=>e.isVisible?"linear-gradient(45deg, #0f0f3b, #020212)":"none"};
    width: 14rem;
    padding-bottom: 1.4rem;
    margin-top: 0;
    transition: width 0.3s;
    @media (max-width: 1190px) {
    width: 12rem;
    }
    @media (max-width: 998px) {
        width: 9rem;
  }
    `;I.h1`
    color: #aeade7;
    cursor: pointer;
    user-select: none;
    font-size: 27px;
    text-transform: uppercase;
    white-space: nowrap;
    @media (max-width: 1190px) {
    font-size: 20px;
    }
    `;I.ul`
    display: ${e=>e.isVisible?"flex":"none"};
    text-transform: capitalize;
    flex-direction: column;
    gap: 1rem;
    white-space: nowrap;
    padding:0;
    margin: 0;
`;I.li`
    
`;I.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: #07063d;
  position: relative;
`;I.div`
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 2rem;
  margin-top:8px;
  @media (max-width: 840px) {
    margin: 4px auto;
  
  }
`;I.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #f00; /* Adjust the color as needed */
  transform: rotate(35deg);
  display: inline-block;
  margin: 20px;
  border-radius: 20px; /* Adjust the radius for rounded corners */

  @media (max-width: 1100px) {
    padding: 0;
    height: 3rem;
  }
`;I.h2`
  color: #ffffff;
  font-size: 3rem;
  font-family: "Dancing Script", cursive;
  text-transform: lowercase;
  font-weight: 400;
  user-select: none;
  transition: 0.3s;
  

  @media (max-width: 1190px) {
    font-size: 2.5rem;
  }
`;I.ul`
  /* margin-left: 3rem; */
  list-style-type: none;
  display: flex;
  transition: gap 0.3s;
  position: absolute;
  top: 1.3rem;
  left: 7.4rem;
  gap: 1rem;
  margin-top: 0;
  transition: all 0.3s;
  
  @media (max-width: 1236px) {
    gap: 0rem;
  }
  @media (max-width: 1190px) {
    top: 1rem;
  left: 3.4rem;
  }
  @media (max-width: 998px) {
  }
  `;I.p`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&family=Titillium+Web&display=swap");
  color: #d6d5ea;
  cursor: pointer;
  user-select: none;
  padding: 0;
  font-size: 20px;
  width: 10rem;
 
  transition: transform 0.3s;
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  &:hover {
    transform: scaleX(1.1);
    color: white;
    
  }
  &:active {
    color:#4c4992;
;
    
  }
  @media (max-width: 1190px) {
    font-size: 17px;
  }
`;I.div`
  display: flex;
  width: 127px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0.2rem;
  top: 1.3rem;
  overflow: visible;
`;I.button`
  border-radius: 24px;
  border: 1px solid black;
  text-align: center;
  padding: ${e=>e.isvertical?"6px 11px":"5px 24px"};
  background-color: transparent;
  cursor: pointer;
  padding: none;
  font-size: 1rem;
  color: steelblue;
  border: 1px solid steelblue;
  &:hover {
    transform: scale(1.05);
  }
`;I.button`
  border: 1px solid black;
  text-align: center;
  color: steelblue;
  border: none;
  font-weight: 600;
  padding: ${e=>e.isvertical?"6px 11px":"12px 24px"};
  background-color: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  white-space: nowrap;
`;I.button`
  border: 1px solid black;
  text-align: center;
  margin: auto;
  color: steelblue;
  border: none;
  font-weight: 600;
  padding: ${e=>e.isvertical?"6px 11px":"12px 36px"};
  background-color: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem;
`;I.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 1rem 0rem 0rem 0rem;
`;I.div`
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  right: -9px;
  font-size: 8px;
`;I.div`
  background-color: #000000;
  height: 100vh;
  z-index: 3;
  position: absolute;
  width: 100vw;
  opacity: 0.84;
`;I.div`
  color: white;
  width: 4rem;
  letter-spacing: nowrap;
  position: absolute;
  letter-spacing: nowrap;
  width: 9rem;
  top: -1rem;
  right: 0.4rem;
  text-align: center;
  font-size: 12px;
  color: #3a3986;
`;I.div`
    width: 16rem;
    min-height: 28rem;
    border: 2px solid grey;
    display: flex;
    background-color: white;
    box-shadow: rgba(231, 214, 214, 0.35) 0px 10px 25px;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    cursor: pointer;
    width: 18rem;
    height: 24rem;
`;I.p`
    font-size: 1.3rem;
    text-align: center;
    color: #8b87d3;
    `;I.img`
    width: 85%;
    margin: auto;
    padding-bottom: 3rem;
    transition: width 0.3s;
    overflow: hidden;
    &:hover{
        width: 95%;
    }

    `;I.p`
    font-weight:bold;
    text-align: center;
    color: #9a9494;

`;I.div`
    display: flex;
    flex-direction: column;
`;I.div`
  width: 100%;
  height: calc(100vh - 81px);
  background: linear-gradient(0deg, #000000, #07063d);
  display: flex;
  justify-content: ${e=>e.isPortrait?"":"space-around"};
  align-items: center;
`;I.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 27%;
  margin: ${e=>e.isPortrait?"6rem":""};
`;I.img`
  height: 36rem;
`;I.p`
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.5rem;
  color: white;
  white-space: nowrap;
`;I.h1`
  text-transform: lowercase;
  font-size: 4rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
`;I.button`
  background-color: #2b299d;
  padding: 1rem 2.8rem;
  border-radius: 32px;
  cursor: pointer;
  white-space: nowrap;
  color: white;
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    background-color: #1c1b72;
  }
  &:active {
    background-color: #111057;
  }
`;I.h1`
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  width: 100%;
  padding: 2rem 0rem;
  color: #555576;
  @media (max-width: 1128px) {
    font-size: 3rem;
  }
  @media (max-width: 730px) {
    font-size: 2.6rem;
  }
`;I.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 38px;
  justify-content: center;
  width: 80%;
`;I.div`
  width: 70%;
  height: 37rem;
  background: linear-gradient(
    180deg,
    #2f2b7b 0%,
    #13113d 58%,
    #000000 100%
  );
  margin: 6rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;I.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 22rem;
  color: #bebcda;
`;I.p`
  text-transform: uppercase;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;I.h1`
  text-transform: capitalize;
  font-size: 3rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;I.button`
  padding: 1rem 3rem;
  background-color: #b8ac25;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1rem;
  border-radius: 32px;
  cursor: pointer;
  white-space: nowrap;
`;I.img`
  width: 18rem;
`;I.div`
  width: 100%;
  background-color: black;
`;I.div`
    display: flex;
    width: 80%;
    margin: 3rem auto;
    gap: 4rem;
`;I.img`
    width: 34%;
`;I.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;I.h1`
    font-size: 3rem;
    color: #9a99c9;
`;I.p`
    font-size: 18px;
    color: #9997c4;
    `;I.p`
    font-weight: 600;
    color: #b5b5b5;
    
`;I.p`
    color: #b6b5d0;

`;I.div`
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
`;I.button`
  padding: 1rem 3rem;
  background-color: #5f5fc2;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    font-size: 1rem;
    border-radius: 32px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;
  &:hover{
    background-color: #4f4fad;
}
&:active{
    background-color: #1e1e67;
}
`;I.div`
  background-color: #07063d;
`;I.div`
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
  font-weight: 600;
  color: white;
`;I.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 38px;
  justify-content: center;
  width: 80%;
`;I.div`
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
`;I.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem auto;
    

`;I.img`
    height: 7rem;
    
`;I.h3`
    
`;I.p`
        font-size: 23px;
        color: #4f5108;
    
`;I.div`
    display: flex;
    gap: 6px;
`;I.button`
    
`;I.div`
    width: 100%;
    display: flex;
    
    
    `;I.div`
   width: 64%;
   display: flex;
   flex-direction: column;
   background-color: #030330;;
   border-radius: 1%;
   overflow: scroll;
   height: calc(100vh - 81px);
   &::-webkit-scrollbar{
    display: none;
   }

`;I.div`
    height: calc(100vh - 81px);
    width: 36%;
    background-color: #16164d;

`;I.p`
  margin: 4rem auto;
  font-size: 2.5rem;
  color: white;
`;I.div`
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
`;I.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 38px;
  justify-content: center;
  width: 80%;
  background-color: black;
  width: 100%;
  padding-top: 12rem;
  /* padding-top: ${e=>{e.isPortrait}}; */

`;function qT(){const[e,t]=ne.useState(null),[n,r]=ne.useState(window.innerWidth);return ne.useState(!1),window.addEventListener("resize",()=>{r(window.innerWidth)}),ne.useEffect(()=>{(async()=>{try{const s=await(await fetch("https://dummyjson.com/products")).json();t(s.products)}catch(o){console.error(o)}})()},[]),ls.jsx(ls.Fragment,{children:ls.jsx("p",{style:{color:"red"},children:"what the fuck is this"})})}Wa.createRoot(document.getElementById("root")).render(ls.jsx(qT,{}));
