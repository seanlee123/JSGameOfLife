// Generated by CoffeeScript 1.6.3
/*
This is Game Of Life
Author Rafael Cosman
This code is Maddy approved.
*/(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_;e=jQuery;N=typeof exports!="undefined"&&exports!==null?exports:this;u=document.getElementById("myCanvas");f=u.getContext("2d");r=function(){var e;e=1e5;return f.fillRect(-e,-e,2*e,2*e)};L=function(t){return e(t).css("visibility","visible")};k=function(t){return e(t).css("visibility","hidden")};g=function(){var e,t,n,r;r=[];for(e=n=0;0<=v?n<v:n>v;e=0<=v?++n:--n)r.push(function(){var e,n;n=[];for(t=e=0;0<=p?e<p:e>p;t=0<=p?++e:--e)n.push(0);return n}());return r};this.clearGrid=function(){var e,t,r,i;i=[];for(e=r=0;0<=v?r<v:r>v;e=0<=v?++r:--r)i.push(function(){var r,i;i=[];for(t=r=0;0<=p?r<p:r>p;t=0<=p?++r:--r)i.push(n[e][t]=0);return i}());return i};E=function(){var e,t,n,r;r=[];for(e=n=0;0<=v?n<v:n>v;e=0<=v?++n:--n)r.push(function(){var e,n;n=[];for(t=e=0;0<=p?e<p:e>p;t=0<=p?++e:--e)n.push(Math.floor(Math.random()+.4));return n}());return r};S=function(){var e,t,r,i;i=[];for(e=r=0;0<=v?r<v:r>v;e=0<=v?++r:--r)i.push(function(){var r,i;i=[];for(t=r=0;0<=p?r<p:r>p;t=0<=p?++r:--r)i.push(n[e][t]=Math.floor(Math.random()+.4));return i}());return i};h=function(e){return e===0?0:1};m=function(e,t,n){if(t>=0&&n>=0&&t<e.length&&n<e[0].length)return e[t][n]++};_=function(e,t,n){if(t>=0&&n>=0&&t<e.length&&n<e[0].length)return e[t][n]=0};x=function(e,t,n){return"rgb("+e+","+t+","+n+")"};T=function(e,t,n,r){return"rgba("+e+","+t+","+n+","+r+")"};t=function(e,t,n){var r,i,s,o,u,a,f,l;o=Math.floor(e*6);i=e*6-o;u=n*(1-t);a=n*(1-i*t);l=n*(1-(1-i)*t);switch(o%6){case 0:f=n;s=l;r=u;break;case 1:f=a;s=n;r=u;break;case 2:f=u;s=n;r=l;break;case 3:f=u;s=a;r=n;break;case 4:f=l;s=u;r=n;break;case 5:f=n;s=u;r=a}return x(Math.floor(f*255),Math.floor(s*255),Math.floor(r*255))};this.help=function(){N.helpShown=!N.helpShown;N.paused=N.helpShown;return helpShown?L(".helpBox"):k(".helpBox")};this.pause=function(){return N.paused=!N.paused};this.toggleRule=function(e,t){return C[e][t]=!C[e][t]};y={x:0,y:0,down:[!1,!1,!1,!1,!1,!1,!1,!1,!1],getX:function(){return this.x},getY:function(){return this.y},getButtonX:function(){return Math.floor(this.x/o)},getButtonY:function(){return Math.floor(this.y/s)},getGridX:function(){return Math.floor(this.x/d)},getGridY:function(){return Math.floor(this.y/d)},distanceTo:function(e,t){return Math.sqrt(Math.pow(e-this.x,2)+Math.pow(t-this.y,2))}};e("#myCanvas").mousedown(function(e){return y.down[e.which]=!0});e("#myCanvas").mouseup(function(e){return y.down[e.which]=!1});e("#myCanvas").mousemove(function(e){var t,r,i,s,o,u,a,f,l,c,h,p,d,v,g,b,w;y.x=e.pageX;y.y=e.pageY;r=y.getGridX();i=y.getGridY();t=2;if(y.down[1]){s=!0;k("#tutorialCreateCells");A||L("#tutorialChangeRules");for(u=f=h=r-t,p=r+1+t;h<=p?f<p:f>p;u=h<=p?++f:--f)for(a=l=d=i-t,v=i+1+t;d<=v?l<v:l>v;a=d<=v?++l:--l)m(n,u,a)}if(y.down[3]){o=!0;w=[];for(u=c=g=r-t,b=r+1+t;g<=b?c<b:c>b;u=g<=b?++c:--c)w.push(function(){var e,r,s,o;o=[];for(a=e=r=i-t,s=i+1+t;r<=s?e<s:e>s;a=r<=s?++e:--e)o.push(_(n,u,a));return o}());return w}});e(window).resize(function(){var e,t,n,r;u.width=window.innerWidth;u.height=window.innerHeight;t=50;e=u.height/9;r=u.width/d;return n=u.width/d});a=function(){var e,t,r,i,s,o,u;e=g();for(t=i=0;0<=v?i<v:i>v;t=0<=v?++i:--i)for(r=s=0;0<=p?s<p:s>p;r=0<=p?++s:--s)if(n[t][r]!==0){m(e,t-1,r-1);m(e,t-1,r);m(e,t-1,r+1);m(e,t,r-1);m(e,t,r+1);m(e,t+1,r-1);m(e,t+1,r);m(e,t+1,r+1)}u=[];for(t=o=0;0<=v?o<v:o>v;t=0<=v?++o:--o)u.push(function(){var i,s;s=[];for(r=i=0;0<=p?i<p:i>p;r=0<=p?++i:--i)C[h(n[t][r])][e[t][r]]?s.push(n[t][r]++):s.push(n[t][r]=0);return s}());return u};c=function(){var e,r,s,o,u,a,l;s=(new Date).getTime()/1e4;l=[];for(o=a=0;0<=v?a<v:a>v;o=0<=v?++a:--a)l.push(function(){var a,l;l=[];for(u=a=0;0<=p?a<p:a>p;u=0<=p?++a:--a){e=n[o][u];if(e!==0){r=Math.sqrt(e);r*=.2;f.fillStyle=t((r+s)%1,1,1);l.push(f.fillRect(d*o,d*u,d-i,d-i))}else l.push(void 0)}return l}());return l};l=function(){N.paused||a();f.fillStyle=x(0,0,0);r();c();if(n[y.getGridX()][y.getGridY()]!==0){f.fillStyle=T(255,255,255,.7);f.fillRect(y.getGridX()*d,y.getGridY()*d,d-i,d-i)}return setTimeout(l,0)};e(".ruleButton").click(function(){var t;e(this).toggleClass("down");if(!t){t=!0;k("#tutorialChangeRules");setTimeout(function(){return L("#tutorialLeftCol")},1e3);setTimeout(function(){return k("#tutorialLeftCol")},5e3);setTimeout(function(){return L("#tutorialRightCol")},5e3);return setTimeout(function(){return k("#tutorialRightCol")},9e3)}});O=!1;A=!1;M=!1;setTimeout(function(){return L("#tutorialCreateCells")},1e3);u.width=window.innerWidth;u.height=window.innerHeight;o=50;s=u.height/9;d=15;i=3;v=u.width/d;p=u.width/d;b=0;w=0;n=E();C=[[!1,!1,!1,!0,!1,!1,!1,!1,!1],[!1,!1,!0,!0,!1,!1,!1,!1,!1]];N.helpShown=!1;N.paused=!1;f.font="20px Georgia";l()}).call(this);