import{r}from"./react-JHr-MqlU.js";import{A as w,p as f,c as E}from"./history-CX9YJugq.js";/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const y=r.createContext(null),h=r.createContext(null),R=r.createContext({outlet:null,matches:[]});function p(t,e){throw new Error(e)}function S(t,e){e===void 0&&(e="/");let{pathname:n,search:o="",hash:a=""}=typeof t=="string"?f(t):t;return{pathname:n?n.startsWith("/")?n:W(n,e):e,search:N(o),hash:z(a)}}function W(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function B(t,e,n){let o=typeof t=="string"?f(t):t,a=t===""||o.pathname===""?"/":o.pathname,i;if(a==null)i=n;else{let l=e.length-1;if(a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),l-=1;o.pathname=u.join("/")}i=l>=0?e[l]:"/"}let s=S(o,i);return a&&a!=="/"&&a.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function L(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const b=t=>t.join("/").replace(/\/\/+/g,"/"),j=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),N=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,z=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function m(){return r.useContext(h)!=null}function J(){return m()||p(),r.useContext(h).location}function I(){m()||p();let{basename:t,navigator:e}=r.useContext(y),{matches:n}=r.useContext(R),{pathname:o}=J(),a=JSON.stringify(n.map(l=>l.pathnameBase)),i=r.useRef(!1);return r.useEffect(()=>{i.current=!0}),r.useCallback(function(l,u){if(u===void 0&&(u={}),!i.current)return;if(typeof l=="number"){e.go(l);return}let c=B(l,JSON.parse(a),o);t!=="/"&&(c.pathname=b([t,c.pathname])),(u.replace?e.replace:e.push)(c,u.state)},[t,e,a,o])}function T(t){let{basename:e="/",children:n=null,location:o,navigationType:a=w.Pop,navigator:i,static:s=!1}=t;m()&&p();let l=j(e),u=r.useMemo(()=>({basename:l,navigator:i,static:s}),[l,i,s]);typeof o=="string"&&(o=f(o));let{pathname:c="/",search:v="",hash:g="",state:x=null,key:C="default"}=o,d=r.useMemo(()=>{let P=L(c,l);return P==null?null:{pathname:P,search:v,hash:g,state:x,key:C}},[l,c,v,g,x,C]);return d==null?null:r.createElement(y.Provider,{value:u},r.createElement(h.Provider,{children:n,value:{location:d,navigationType:a}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function M(t){let{basename:e,children:n,window:o}=t,a=r.useRef();a.current==null&&(a.current=E({window:o}));let i=a.current,[s,l]=r.useState({action:i.action,location:i.location});return r.useLayoutEffect(()=>i.listen(l),[i]),r.createElement(T,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:i})}export{M as B,J as a,I as u};
