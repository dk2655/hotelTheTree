const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Nav-ETUSCAOh.js","./react-vendor-BY6hK92n.js","./vendor-CJqjzh_o.js","./vendor-DHBATib1.css","./Header-BaIhiVbf.js","./About-WbjviuKG.js","./ServicesDesc-DDZjIfIr.js","./animation-vendor-DOIa3dt8.js","./Rooms-fiHjZ8h7.js","./room2-DURNC4y3.js","./Amenities-Dw3AgF1m.js","./Founders-D_o6uOGz.js","./Footer-CA39DcWe.js","./BookNow-DbifKkAs.js","./PaymentReview-JhSZk301.js"])))=>i.map(i=>d[i]);
import{r as n,a as e,H as E,u as T,R as V,b as N,c as _}from"./react-vendor-BY6hK92n.js";import"./vendor-CJqjzh_o.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const x="modulepreload",j=function(c,m){return new URL(c,m).href},A={},i=function(m,a,d){let r=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),D=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(a.map(l=>{if(l=j(l,d),l in A)return;A[l]=!0;const f=l.endsWith(".css"),b=f?'[rel="stylesheet"]':"";if(!!d)for(let p=o.length-1;p>=0;p--){const h=o[p];if(h.href===l&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${b}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":x,f||(u.as="script"),u.crossOrigin="",u.href=l,D&&u.setAttribute("nonce",D),document.head.appendChild(u),f)return new Promise((p,h)=>{u.addEventListener("load",p),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function t(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return r.then(o=>{for(const s of o||[])s.status==="rejected"&&t(s.reason);return m().catch(t)})},U=n.lazy(()=>i(()=>import("./Nav-ETUSCAOh.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),y=n.lazy(()=>i(()=>import("./Header-BaIhiVbf.js"),__vite__mapDeps([4,1,2,3]),import.meta.url)),I=n.lazy(()=>i(()=>import("./About-WbjviuKG.js"),__vite__mapDeps([5,1,2,3]),import.meta.url)),S=n.lazy(()=>i(()=>import("./ServicesDesc-DDZjIfIr.js"),__vite__mapDeps([6,1,2,3,7]),import.meta.url)),k=n.lazy(()=>i(()=>import("./Rooms-fiHjZ8h7.js"),__vite__mapDeps([8,1,2,3,9]),import.meta.url)),C=n.lazy(()=>i(()=>import("./Amenities-Dw3AgF1m.js"),__vite__mapDeps([10,1,2,3]),import.meta.url)),H=n.lazy(()=>i(()=>import("./Founders-D_o6uOGz.js"),__vite__mapDeps([11,1,2,3]),import.meta.url)),R=n.lazy(()=>i(()=>import("./Footer-CA39DcWe.js"),__vite__mapDeps([12,1,2,3]),import.meta.url)),P=n.lazy(()=>i(()=>import("./BookNow-DbifKkAs.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),Y=n.lazy(()=>i(()=>import("./PaymentReview-JhSZk301.js"),__vite__mapDeps([14,1,2,3,9]),import.meta.url));function L(){const c=T();return e.jsxDEV(n.Suspense,{fallback:e.jsxDEV("div",{style:{textAlign:"center",padding:"50px"},children:"Your website is being loaded,Please wait..."},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:20,columnNumber:25},this),children:[!["/book","/payment"].includes(c.pathname)&&e.jsxDEV(U,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:22,columnNumber:62},this),e.jsxDEV(V,{children:[e.jsxDEV(N,{path:"/",element:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(y,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:27,columnNumber:13},this),e.jsxDEV(I,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:28,columnNumber:13},this),e.jsxDEV(S,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:29,columnNumber:13},this),e.jsxDEV(k,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:30,columnNumber:13},this),e.jsxDEV(C,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:31,columnNumber:13},this),e.jsxDEV(H,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:32,columnNumber:13},this),e.jsxDEV(R,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:33,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:26,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:25,columnNumber:9},this),e.jsxDEV(N,{path:"/book",element:e.jsxDEV(P,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:37,columnNumber:38},this)},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:37,columnNumber:9},this),e.jsxDEV(N,{path:"/payment",element:e.jsxDEV(Y,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:38,columnNumber:41},this)},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:38,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:24,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:20,columnNumber:5},this)}function g(){return e.jsxDEV(E,{children:e.jsxDEV(L,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:47,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/App.jsx",lineNumber:46,columnNumber:5},this)}_.createRoot(document.getElementById("root")).render(e.jsxDEV(n.StrictMode,{children:e.jsxDEV(g,{},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/main.jsx",lineNumber:8,columnNumber:5},void 0)},void 0,!1,{fileName:"C:/Users/DIVYANSHU/Desktop/hotelTheTree/src/main.jsx",lineNumber:7,columnNumber:3},void 0));
