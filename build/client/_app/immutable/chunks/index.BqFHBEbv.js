import{b as $}from"./index.BPbQtlAe.js";import{O as x,P as l}from"./scheduler._6DmXkuH.js";function b(o,{delay:s=0,duration:n=400,easing:a=x}={}){const c=+getComputedStyle(o).opacity;return{delay:s,duration:n,easing:a,css:r=>`opacity: ${r*c}`}}function O(o,{delay:s=0,duration:n=400,easing:a=$,x:c=0,y:r=0,opacity:e=0}={}){const t=getComputedStyle(o),i=+t.opacity,f=t.transform==="none"?"":t.transform,m=i*(1-e),[p,y]=l(c),[d,g]=l(r);return{delay:s,duration:n,easing:a,css:(u,_)=>`
			transform: ${f} translate(${(1-u)*p}${y}, ${(1-u)*d}${g});
			opacity: ${i-m*_}`}}function U(o,{delay:s=0,duration:n=400,easing:a=$,start:c=0,opacity:r=0}={}){const e=getComputedStyle(o),t=+e.opacity,i=e.transform==="none"?"":e.transform,f=1-c,m=t*(1-r);return{delay:s,duration:n,easing:a,css:(p,y)=>`
			transform: ${i} scale(${1-f*y});
			opacity: ${t-m*y}
		`}}export{O as a,b as f,U as s};
