/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.6.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
var A=!0,B=!1;
function Visitor(o,t){if(!o)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.6.0";var m=window,i=m.Visitor;i.version=a.version;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c="Visitor";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=a;m.s_c_in++;a.ia={Ca:[]};var p=m.document,h=i.pb;h||(h=null);var C=i.qb;C||(C=void 0);var k=i.Ia;k||(k=A);var l=i.Ga;l||(l=B);a.ea=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.v=function(a){var c="0123456789",
b="",e="",f,g=8,j=10,h=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*j),b+=c.substring(f,f+1),0==a&&9==f?j=3:(1==a||2==a)&&10!=j&&2>f?j=10:2<a&&(j=10),f=Math.floor(Math.random()*h),e+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10);return b+e};a.Ka=function(){var a;!a&&m.location&&(a=m.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a=
"";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+p.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(p.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.g=h;a.K=function(a,c){try{"function"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(b){}};a.Oa=function(d,c){c&&(a.g==h&&(a.g={}),a.g[d]==C&&(a.g[d]=[]),a.g[d].push(c))};a.q=function(d,c){if(a.g!=h){var b=a.g[d];if(b)for(;0<b.length;)a.K(b.shift(),
c)}};a.J=function(a,c){var b,e=encodeURIComponent("d_fieldgroup")+"="+encodeURIComponent(c);if(-1===a.indexOf("?"))return a+"?"+e;var f=a.split("?"),g=f[0]+"?",f=f[1].split("&");f.splice(null!=b?b:1,0,e);return g+f.join("&")};a.j=h;a.Ma=function(d,c,b,e){c=a.J(c,d);e.url=a.J(e.url,d);e.k=a.J(e.k,d);e===Object(e)&&e.k&&"XMLHttpRequest"===a.ka.C.D?a.ka.$a(e,b,d):a.useCORSOnly||a.ha(d,c,b)};a.ha=function(d,c,b){var e=0,f=0,g;if(c&&p){for(g=0;!e&&2>g;){try{e=(e=p.getElementsByTagName(0<g?"HEAD":"head"))&&
0<e.length?e[0]:0}catch(j){e=0}g++}if(!e)try{p.body&&(e=p.body)}catch(k){e=0}if(e)for(g=0;!f&&2>g;){try{f=p.createElement(0<g?"SCRIPT":"script")}catch(i){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,n.e[d]={requestStart:n.o(),url:c,sa:e,qa:n.va(),ra:0},b&&(a.j==h&&(a.j={}),a.j[d]=setTimeout(function(){b(A)},e)),a.ia.Ca.push(c))};a.Ja=function(d){a.j!=h&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.fa=l;a.ga=
l;a.isAllowed=function(){if(!a.fa&&(a.fa=k,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.ga=k;return a.ga};a.b=h;a.d=h;var F=i.Hb;F||(F="MC");var u=i.Mb;u||(u="MCMID");var G=i.Ib;G||(G="MCCIDH");var H=i.Lb;H||(H="MCSYNCS");var I=i.Jb;I||(I="MCIDTS");var x=i.Kb;x||(x="MCOPTOUT");var D=i.Fb;D||(D="A");var q=i.Cb;q||(q="MCAID");var z=i.Gb;z||(z="AAM");var y=i.Eb;y||(y="MCAAMLH");var r=i.Db;r||(r="MCAAMB");var s=i.Nb;s||(s="NONE");a.M=0;a.da=function(){if(!a.M){var d=a.version;a.audienceManagerServer&&
(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.M=a.ea(d)}return a.M};a.ja=l;a.f=function(){if(!a.ja){a.ja=k;var d=a.da(),c=l,b=a.cookieRead(a.cookieName),e,f,g,j,i=new Date;a.b==h&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=k),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(j=parseInt(e[1],10),e=0<e[1].indexOf("s")):(j=0,e=l),c&&(f==G&&
(g=""),0<j&&(j=i.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<j&&(a.b["expire"+f]=j+(e?"s":""),i.getTime()>=1E3*j||e&&!a.cookieRead(a.sessionCookieName))))a.d||(a.d={}),a.d[f]=k}if(!a.a(q)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.c(q,g))}};a.Qa=function(){var d=a.da(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?
"-"+a.b["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=h&&(c||!a.d||!a.d[d])?a.b[d]:h};a.c=function(d,c,b){a.b==h&&(a.b={});a.b[d]=c;b||a.Qa()};a.La=function(d,c){var b=a.a(d,c);return b?b.split("*"):h};a.Pa=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.wb=function(d,c){var b=a.La(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return h};a.yb=function(d,c,b){var e=h,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.Pa(d,
e,b)};a.m=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.b==h&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.d||(a.d={}),a.d[d]=k):a.d&&(a.d[d]=l);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.ca=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=s)),!a||a!=s&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.Ja(d);
a.h!=h&&(a.h[d]=l);n.e[d]&&(n.e[d].nb=n.o(),n.I(d));if(d==F){var b=a.a(u);if(!b){b="object"==typeof c&&c.mid?c.mid:a.ca(c);if(!b){if(a.B){a.getAnalyticsVisitorID(h,l,k);return}b=a.v()}a.c(u,b)}if(!b||b==s)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(z,c),a.B&&c.mid&&a.i(D,{id:c.id}));a.q(u,[b])}if(d==z&&"object"==typeof c){b=604800;c.id_sync_ttl!=C&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.a(y);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.m(y,b),a.c(y,e)));
e||(e="");a.q(y,[e]);e=a.a(r);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.m(r,b),a.c(r,e);e||(e="");a.q(r,[e]);!c.error_msg&&a.z&&a.c(G,a.z)}if(d==D){b=a.a(q);b||((b=a.ca(c))?b!==s&&a.m(r,-1):b=s,a.c(q,b));if(!b||b==s)b="";a.q(q,[b])}a.idSyncDisableSyncs?v.wa=k:(v.wa=l,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,v.kb(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(x));f||(f=s,c.d_optout&&c.d_optout instanceof Array&&(f=c.d_optout.join(",")),b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.m(x,b,A),
a.c(x,f));a.q(x,[f])}};a.h=h;a.r=function(d,c,b,e,f){var g="",j;if(a.isAllowed()&&(a.f(),g=a.a(d),!g&&(d==u||d==x?j=F:d==y||d==r?j=z:d==q&&(j=D),j))){if(c&&(a.h==h||!a.h[j]))a.h==h&&(a.h={}),a.h[j]=k,a.Ma(j,c,function(b,c){if(!a.a(d))if(n.e[j]&&(n.e[j].timeout=n.o(),n.e[j].eb=!!b,n.I(j)),c===Object(c)&&!a.useCORSOnly)a.ha(j,c.url,c.G);else{var e="";d==u?e=a.v():j==z&&(e={error_msg:"timeout"});a.i(j,e)}},f);a.Oa(d,b);c||a.i(j,{id:s});return""}if((d==u||d==q)&&g==s)g="",e=k;b&&e&&a.K(b,[g]);return g};
a._setMarketingCloudFields=function(d){a.f();a.i(F,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.B=l;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.B=k);var b=a.w("_setMarketingCloudFields");return a.r(u,b.url,d,c,b)}return""};a.Na=function(){a.getAudienceManagerBlob()};i.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.u={};a.ba=l;a.z="";a.setCustomerIDs=function(d){if(a.isAllowed()&&
d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=C&&(e.authState=b.authState);a.u[c]=e}else a.u[c]={id:b};var d=a.getCustomerIDs(),e=a.a(G),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.z=a.ea(f);a.z!=e&&(a.ba=k,a.Na())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.u)Object.prototype[c]||(b=a.u[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),
d[c].authState=b.authState!=C?b.authState:i.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.i(D,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,k)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));
var j={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),h=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields";j.k=f+"?"+e;j.oa=h}j.url=g;return a.r(b?u:q,g,d,c,j)}}return""};a._setAudienceManagerFields=function(d){a.f();a.i(z,
d)};a.w=function(d){var c=a.audienceManagerServer,b="",e=a.a(u),f=a.a(r,k),g=a.a(q),g=g&&g!=s?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),j,h;if(b)for(j in b)Object.prototype[j]||(h=b[j],g+="&d_cid_ic="+encodeURIComponent(j)+"%01"+encodeURIComponent(h.id?h.id:"")+(h.authState?"%01"+h.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+
a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.B?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,k:c+"?"+e,oa:f}}return{url:b}};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,
k)})){var b=a.a(q);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,k)}));if(b)return b=a.w(),a.r(y,b.url,d,c,b)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,k)})){var b=a.a(q);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,k)}));if(b){var b=a.w(),e=b.url;a.ba&&a.m(r,-1);return a.r(r,e,d,c,b)}}return""};a.s="";a.A={};a.N="";a.O={};a.getSupplementalDataID=function(d,
c){!a.s&&!c&&(a.s=a.v(1));var b=a.s;a.N&&!a.O[d]?(b=a.N,a.O[d]=k):b&&(a.A[d]&&(a.N=a.s,a.O=a.A,a.s=b=!c?a.v(1):"",a.A={}),b&&(a.A[d]=k));return b};i.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.w("_setMarketingCloudFields");return a.r(x,b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=i.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.K(d,[b==i.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==i.OptOut.GLOBAL||0<=b.indexOf(c):h):l};var w={p:!!m.postMessage,
Fa:1,aa:864E5};a.rb=w;a.ma={postMessage:function(a,c,b){var e=1;c&&(w.p?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},V:function(a,c){var b;try{if(w.p)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&c(b.origin)===B)return B;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,B);else window[a?"attachEvent":"detachEvent"]("onmessage",
b)}catch(e){}}};var J={na:function(){if(p.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},l)};if(p.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===h)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},
Za:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)}};a.xb=J;var K={C:function(){var a="none",c=k;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=l),0<Object.prototype.toString.call(window.ob).indexOf("Constructor")&&
(c=l));return{D:a,Ab:c}}(),ab:function(){return"none"===this.C.D?h:new window[this.C.D]},$a:function(d,c,b){var e=this;c&&(d.G=c);try{var f=this.ab();f.open("get",d.k+"&ts="+(new Date).getTime(),A);"XMLHttpRequest"===this.C.D&&(f.withCredentials=k,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,null,"Response is not JSON");
break a}}catch(b){e.n(d,b,"Error parsing response as JSON");break a}try{for(var c=d.oa,f=window,g=0;g<c.length;g++)f=f[c[g]];f(a)}catch(h){e.n(d,h,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();n.e[b]={requestStart:n.o(),url:d.k,sa:f.timeout,qa:n.va(),ra:1};a.ia.Ca.push(d.k)}catch(g){this.n(d,g,"try-catch")}},n:function(d,c,b){a.CORSErrors.push({Bb:d,error:c,description:b});d.G&&("ontimeout"===b?d.G(A):d.G(B,
d))}};a.ka=K;var v={Ha:3E4,$:649,Ea:l,id:h,S:h,ua:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},l:h,url:h,bb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(p.location.href);this.l||(this.l="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.l+".demdex.net/dest5.html"+c;this.S=this.ua(d);this.id="destination_publishing_iframe_"+this.l+"_"+a.idSyncContainerID;return d},Ta:function(){var d=
"?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(p.location.href);"string"===typeof a.L&&a.L.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.S=this.ua(a.L),this.url=a.L+d)},wa:h,ta:l,X:l,F:h,Ob:h,jb:h,Pb:h,W:l,H:[],hb:[],ib:[],ya:w.p?15:100,T:[],fb:[],pa:k,Ba:l,Aa:function(){return!a.idSyncDisable3rdPartySyncing&&(this.ta||a.tb)&&this.l&&"nosubdomainreturned"!==this.l&&this.url&&!this.X},Q:function(){function a(){e=document.createElement("iframe");
e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.jb=k;c();document.body.appendChild(e)}function c(){J.na(e,"load",function(){e.className="aamIframeLoaded";b.F=k;b.t()})}this.X=k;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.F=k,this.xa=e,this.t()):a();this.xa=e},t:function(d){var c=this;d===Object(d)&&this.T.push(d);
if((this.Ba||!w.p||this.F)&&this.T.length)this.I(this.T.shift()),this.t();!a.idSyncDisableSyncs&&this.F&&this.H.length&&!this.W&&(this.Ea||(this.Ea=k,setTimeout(function(){c.ya=w.p?15:150},this.Ha)),this.W=k,this.Da())},I:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),J.Za(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],this.pa?this.P(h.join("|")):g.fireURLSync&&this.Ua(g,h.join("|"));
this.fb.push(a)},Ua:function(d,c){a.f();var b=a.a(H),e=l,f=l,g=Math.ceil((new Date).getTime()/w.aa);if(b){if(b=b.split("*"),f=this.lb(b,d.id,g),e=f.Xa,f=f.Ya,!e||!f)this.P(c),b.push(d.id+"-"+(g+Math.ceil(d.ttl/60/24))),this.gb(b),a.c(H,b.join("*"))}else this.P(c),a.c(H,d.id+"-"+(g+Math.ceil(d.ttl/60/24)))},lb:function(a,c,b){var e=l,f=l,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=k,b<i?f=k:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{Xa:e,Ya:f}},
gb:function(a){if(a.join("*").length>this.$)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.$;)a.shift()},P:function(d){var c=encodeURIComponent;this.H.push((a.ub?c("---destpub-debug---"):c("---destpub---"))+d)},Da:function(){var d=this,c;this.H.length?(c=this.H.shift(),a.ma.postMessage(c,this.url,this.xa.contentWindow),this.hb.push(c),setTimeout(function(){d.Da()},this.ya)):this.W=l},V:function(a){var c=/^---destpub-to-parent---/;
"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.pa="true"===c[1]?k:l,this.Ba=k,this.t()),this.ib.push(a))},kb:function(d){this.url===h&&(this.l="string"===typeof a.la&&a.la.length?a.la:d.subdomain||"",this.url=this.bb());d.ibs instanceof Array&&d.ibs.length&&(this.ta=k);this.Aa()&&(a.idSyncAttachIframeASAP?this.Ra():(i.Z||"complete"===p.readyState||"loaded"===p.readyState)&&this.Q());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):
this.t(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},Sa:function(d,c){return a.vb||!d||c-d>w.Fa},Ra:function(){function a(){c.X||(document.body?c.Q():setTimeout(a,30))}var c=this;a()}};a.sb=v;a.timeoutMetricsLog=[];var n={Wa:window.performance&&window.performance.timing?1:0,za:window.performance&&window.performance.timing?window.performance.timing:h,Y:h,R:h,e:{},U:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&
c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.Wa+"&d_winload="+this.cb()+"&d_ld="+this.o();(new Image).src=d;a.timeoutMetricsLog.push(d)}},cb:function(){this.R===h&&(this.R=this.za?this.Y-this.za.navigationStart:this.Y-i.Va);return this.R},o:function(){return(new Date).getTime()},I:function(a){var c=this.e[a],b={};b.d_visid_stg_timeout_captured=
c.sa;b.d_visid_cors=c.ra;b.d_fieldgroup=a;b.d_settimeout_overriden=c.qa;c.timeout?c.eb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,b.d_visid_response=c.nb-c.requestStart);b.d_visid_url=c.url;i.Z?this.send(b):this.U.push(b);delete this.e[a]},mb:function(){for(var a=0,c=this.U.length;a<c;a++)this.send(this.U[a])},va:function(){return"function"===
typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.zb=n;0>o.indexOf("@")&&(o+="@AdobeOrg");a.marketingCloudOrgID=o;a.cookieName="AMCV_"+o;a.sessionCookieName="AMCVS_"+o;a.cookieDomain=a.Ka();a.cookieDomain==m.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=m.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";if(t&&"object"==typeof t){for(var E in t)!Object.prototype[E]&&
(a[E]=t[E]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();K=a.a(I);E=Math.ceil((new Date).getTime()/w.aa);!a.idSyncDisableSyncs&&v.Sa(K,E)&&(a.m(r,-1),a.c(I,E));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){v.Ta();J.na(window,"load",function(){i.Z=k;n.Y=n.o();n.mb();var a=v;a.Aa()&&a.Q()});try{a.ma.V(function(a){v.V(a.data)},v.S)}catch(L){}}}
Visitor.getInstance=function(o,t){var a,m=window.s_c_il,i;0>o.indexOf("@")&&(o+="@AdobeOrg");if(m)for(i=0;i<m.length;i++)if((a=m[i])&&"Visitor"==a._c&&a.marketingCloudOrgID==o)return a;return new Visitor(o,t)};(function(){function o(){t.Z=a}var t=window.Visitor,a=t.Ia,m=t.Ga;a||(a=A);m||(m=B);window.addEventListener?window.addEventListener("load",o):window.attachEvent&&window.attachEvent("onload",o);t.Va=(new Date).getTime()})();

var visitor = Visitor.getInstance("9931097853514DDC0A490D4C@AdobeOrg", {
trackingServer: "rsawadasj.sc.omtrdc.net", // same as s.trackingServer
trackingServerSecure: "rsawadasj.sc.omtrdc.net" // same as s.trackingServerSecure

// To enable CNAME support, add the following configuration variables
// If you are not using CNAME, DO NOT include these variables
// marketingCloudServer: "INSERT-TRACKING-SERVER-HERE",
// marketingCloudServerSecure: "INSERT-SECURE-TRACKING-SERVER-HERE" // same as s.trackingServerSecure
});
