function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function x(){return S(" ")}function E(){return S("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:k(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,s,r=!1){I(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,s){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function R(t,e,n){return C(t,e,n,y)}function K(t,e,n){return C(t,e,n,w)}function O(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>S(e)),!0)}function H(t){return O(t," ")}function U(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function j(t,e){const n=U(t,"HTML_TAG_START",0),s=U(t,"HTML_TAG_END",n);if(n===s)return new z(void 0,e);I(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(o,e)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function G(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function q(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=G();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function J(t){h=t}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function W(t){V().$$.on_mount.push(t)}function F(t){V().$$.after_update.push(t)}function Y(t){V().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function st(t){Z.push(t)}const rt=new Set;let ot=0;function it(){const t=h;do{for(;ot<X.length;){const t=X[ot];ot++,J(t),at(t.$$)}for(J(null),X.length=0,ot=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];rt.has(e)||(rt.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,rt.clear(),J(t)}function at(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function dt(){lt.r||r(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function pt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||st((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(st)}function _t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,o,i,a,c,l,u=[-1]){const d=h;J(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&$t(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const t=P(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),p=!1,it()}J(d)}class wt{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const St=[];function xt(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!St.length;for(const t of r)t[1](),St.push(t,e);if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Et={};var Tt={owner:"server-KaTys",repo:"status",sites:[{name:"Portfolio @ Tiana Lemesle",url:"https://tianalemesle.fr",expectedStatusCodes:[200]},{name:"Shields @ KaKi87",url:"https://shields.kaki87.net",expectedStatusCodes:[404]},{name:"Gitea @ KaKi87",url:"https://git.kaki87.net",expectedStatusCodes:[200]},{name:"Play Search @ KaKi87",url:"https://api.playsearch.kaki87.net",expectedStatusCodes:[404]},{name:"Unrestrict @ KaKi87",url:"https://unrestrict.kaki87.net/",expectedStatusCodes:[200]},{name:"LibreSpeed @ KaKi87",url:"https://speedtest.kaki87.net/",expectedStatusCodes:[200]},{name:"General API @ KaKi87",url:"https://api.kaki87.net",expectedStatusCodes:[404]},{name:"CestLaGreve API @ KaKi87",url:"https://cestlagreve.api.kaki87.net",expectedStatusCodes:[204]},{name:"SSHception @ KaKi87",url:"kaki87.net",port:3100,check:"tcp-ping"},{name:"SSHception web @ KaKi87",url:"https://ssh.kaki87.net",expectedStatusCodes:[200]},{name:"cv.vg dev API @ KaKi87",url:"https://d.cv.vg",expectedStatusCodes:[200]},{name:"Tolgee @ KaKi87",url:"https://i18n.kaki87.net",expectedStatusCodes:[200]},{name:"Netdata",url:"https://netdata.katys.cf",expectedStatusCodes:[200]},{name:"Glitchgit @ KaKi87",url:"https://glitchgit.kaki87.net",expectedStatusCodes:[204]},{name:"Apache",url:"148.251.48.170",port:443,check:"tcp-ping"}],"status-website":{cname:"status.katys.cf",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"KaTys status",introTitle:"**KaTys** server status",introMessage:"This page shows the status of the services hosted on the KaTys server.",navbar:[{title:"Status",href:"/"},{title:"About",href:"https://katys.cf"}],theme:"night"},assignees:["KaKi87"],path:"https://status.katys.cf",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function At(t,e,n){const s=t.slice();return s[1]=e[n],s}function kt(e){let n,s,r,o,i=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=R(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){k(n,"alt",""),c(n.src,s=Tt["status-website"].logoUrl)||k(n,"src",s),k(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),a=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,s,r=Tt["status-website"].name+"";return{c(){n=y("div"),s=S(r)},l(t){n=R(t,"DIV",{});var e=P(n);s=O(e,r),e.forEach(_)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("div"),s=y("a"),i&&i.c(),r=x(),a&&a.c(),this.h()},l(t){n=R(t,"DIV",{});var e=P(n);s=R(e,"A",{href:!0,class:!0});var o=P(s);i&&i.l(o),r=H(o),a&&a.l(o),o.forEach(_),e.forEach(_),this.h()},h(){k(s,"href",o=Tt["status-website"].logoHref||Tt.path),k(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),i&&i.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&i.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&_(n),i&&i.d(),a&&a.d()}}}function Nt(t){let e,n,s,r,o,i,a=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=S(a),i=x(),this.h()},l(t){e=R(t,"LI",{});var r=P(e);n=R(r,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);s=O(o,a),o.forEach(_),i=H(r),r.forEach(_),this.h()},h(){k(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),k(n,"href",o=t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),k(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,i)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&k(n,"aria-current",r)},d(t){t&&_(e)}}}function Pt(e){let n,s,r,o,i,a=Tt["status-website"]&&Tt["status-website"].logoUrl&&kt(),c=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Nt(At(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=Tt["status-website"].navbar,o=0;o<n.length;o+=1){const i=At(t,n,o);s[o]?s[o].p(i,r):(s[o]=Nt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),l=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,s,r,o,i=Tt.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=S(i),this.h()},l(t){n=R(t,"LI",{});var e=P(n);s=R(e,"A",{href:!0,class:!0});var o=P(s);r=O(o,i),o.forEach(_),e.forEach(_),this.h()},h(){k(s,"href",o=`https://github.com/${Tt.owner}/${Tt.repo}`),k(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("nav"),s=y("div"),a&&a.c(),r=x(),o=y("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=R(t,"NAV",{class:!0});var e=P(n);s=R(e,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=H(u),o=R(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=H(d),l&&l.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){k(o,"class","svelte-a08hsz"),k(s,"class","container svelte-a08hsz"),k(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&a.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&c.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Lt extends wt{constructor(t){super(),yt(this,t,It,Pt,i,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Rt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Kt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ot(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Rt(Kt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ot(Rt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Kt(r[8])+'" alt="'+Kt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Kt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ot(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Kt(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Mt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=R(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Dt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=R(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Gt(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=R(t,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,s=e[8].src)||k(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=R(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){k(n,"rel",e[3].rel),k(n,"href",e[3].href),k(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=R(t,"META",{name:!0,content:!0}),this.h()},h(){k(n,"name",e[3].name),k(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n,s,r,o,i,a,c,u,d,f,h,p,m,b,w,S,T,A,N=Ot(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",I=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new z(!1),s=E(),this.h()},l(t){n=j(t,!1),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let L=((Tt["status-website"]||{}).themeUrl?Dt:Mt)(e),C=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Gt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=jt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Gt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),K=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ut(t,n,o);s[o]?s[o].p(i,r):(s[o]=qt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),O=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ht(t,n,o);s[o]?s[o].p(i,r):(s[o]=Bt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),U=Tt["status-website"].css&&function(e){let n,s,r=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new z(!1),s=E(),this.h()},l(t){n=j(t,!1),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),M=Tt["status-website"].js&&function(e){let n,s,r=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new z(!1),s=E(),this.h()},l(t){n=j(t,!1),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),D=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new z(!1),s=E(),this.h()},l(t){n=j(t,!1),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();p=new Lt({props:{segment:e[0]}});const G=e[2].default,q=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(G,e,e[1],null);return{c(){I&&I.c(),n=E(),L.c(),s=y("link"),r=y("link"),o=y("link"),C&&C.c(),i=E(),K&&K.c(),a=E(),O&&O.c(),c=E(),U&&U.c(),u=E(),M&&M.c(),d=E(),f=x(),D&&D.c(),h=x(),gt(p.$$.fragment),m=x(),b=y("main"),q&&q.c(),w=x(),S=y("footer"),T=y("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);I&&I.l(e),n=E(),L.l(e),s=R(e,"LINK",{rel:!0,href:!0}),r=R(e,"LINK",{rel:!0,type:!0,href:!0}),o=R(e,"LINK",{rel:!0,type:!0,href:!0}),C&&C.l(e),i=E(),K&&K.l(e),a=E(),O&&O.l(e),c=E(),U&&U.l(e),u=E(),M&&M.l(e),d=E(),e.forEach(_),f=H(t),D&&D.l(t),h=H(t),bt(p.$$.fragment,t),m=H(t),b=R(t,"MAIN",{class:!0});var l=P(b);q&&q.l(l),l.forEach(_),w=H(t),S=R(t,"FOOTER",{class:!0});var g=P(S);T=R(g,"P",{}),P(T).forEach(_),g.forEach(_),this.h()},h(){k(s,"rel","stylesheet"),k(s,"href",`${Tt.path}/global.css`),k(r,"rel","icon"),k(r,"type","image/svg"),k(r,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),k(o,"rel","icon"),k(o,"type","image/png"),k(o,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),k(b,"class","container"),k(S,"class","svelte-jbr799")},m(t,e){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),C&&C.m(document.head,null),g(document.head,i),K&&K.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),v(t,f,e),D&&D.m(t,e),v(t,h,e),vt(p,t,e),v(t,m,e),v(t,b,e),q&&q.m(b,null),v(t,w,e),v(t,S,e),g(S,T),T.innerHTML=N,A=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&I.p(t,e),L.p(t,e),(Tt["status-website"]||{}).scripts&&C.p(t,e),(Tt["status-website"]||{}).links&&K.p(t,e),(Tt["status-website"]||{}).metaTags&&O.p(t,e),Tt["status-website"].css&&U.p(t,e),Tt["status-website"].js&&M.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!A||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(q,G,t,t[1],A?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ft(p.$$.fragment,t),ft(q,t),A=!0)},o(t){ht(p.$$.fragment,t),ht(q,t),A=!1},d(t){I&&I.d(t),_(n),L.d(t),_(s),_(r),_(o),C&&C.d(t),_(i),K&&K.d(t),_(a),O&&O.d(t),_(c),U&&U.d(t),_(u),M&&M.d(t),_(d),t&&_(f),D&&D.d(t),t&&_(h),_t(p,t),t&&_(m),t&&_(b),q&&q.d(t),t&&_(w),t&&_(S)}}}function Jt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Vt extends wt{constructor(t){super(),yt(this,t,Jt,zt,i,{segment:0})}}function Wt(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=S(s)},l(t){e=R(t,"PRE",{});var r=P(e);n=O(r,s),r.forEach(_)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&_(e)}}}function Ft(e){let n,s,r,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Wt(e);return{c(){s=x(),r=y("h1"),o=S(e[0]),i=x(),a=y("p"),c=S(d),l=x(),f&&f.c(),u=E(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=H(t),r=R(t,"H1",{class:!0});var n=P(r);o=O(n,e[0]),n.forEach(_),i=H(t),a=R(t,"P",{class:!0});var h=P(a);c=O(h,d),h.forEach(_),l=H(t),f&&f.l(t),u=E(),this.h()},h(){k(r,"class","svelte-17w3omn"),k(a,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&d!==(d=t[1].message+"")&&M(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Wt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(i),t&&_(a),t&&_(l),f&&f.d(t),t&&_(u)}}}function Yt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Xt extends wt{constructor(t){super(),yt(this,t,Yt,Ft,i,{status:0,error:1})}}function Qt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),s=E()},l(t){n&&bt(n.$$.fragment,t),s=E()},m(t,e){n&&vt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?pt(o,[mt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{_t(t,1)})),dt()}i?(n=new i(a()),gt(n.$$.fragment),ft(n.$$.fragment,1),vt(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&ft(n.$$.fragment,t),r=!0)},o(t){n&&ht(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&_t(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,s){vt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function te(t){let e,n,s,r;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=E()},l(t){n.l(t),s=E()},m(t,n){i[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ut(),ht(i[c],1,1,(()=>{i[c]=null})),dt(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(s.parentNode,s))},i(t){r||(ft(n),r=!0)},o(t){ht(n),r=!1},d(t){i[e].d(t),t&&_(s)}}}function ee(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Vt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){vt(n,t,e),s=!0},p(t,[e]){const s=12&e?pt(r,[4&e&&{segment:t[2][0]},8&e&&mt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ft(n.$$.fragment,t),s=!0)},o(t){ht(n.$$.fragment,t),s=!1},d(t){_t(n,t)}}}function ne(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return F(l),u=Et,d=s,V().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class se extends wt{constructor(t){super(),yt(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],oe=[{js:()=>Promise.all([import("./index.45b90994.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-f8cadfc8.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.c6d53de8.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.ed5a908c.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.bbac7941.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-27f5577c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.a4485755.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,de=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let pe,me;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const s=ie[n],r=s.pattern.exec(e);if(r){const n=ge(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=be(r);if(o){ye(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),fe.pushState({id:ue},"",r.href)}}function _e(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(he[ue]=_e(),t.state){const e=be(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){ue=t}(de),fe.replaceState({id:ue},"",location.href)}function ye(t,e,n,s){return ce(this,void 0,void 0,(function*(){const r=!!e;if(r)ue=e;else{const t=_e();he[ue]=t,ue=e=++de,he[ue]=n?t:{x:0,y:0}}if(yield me(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function we(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Se,xe=null;function Ee(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,we(document)));if(e)xe&&t===xe.href||(xe={href:t,promise:Ge(e)}),xe.promise}(e.href)}function Te(t){clearTimeout(Se),Se=setTimeout((()=>{Ee(t)}),20)}function Ae(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,we(document)));if(n){const s=ye(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),s}return location.href=t,new Promise((()=>{}))}const ke="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ne,Pe,Ie,Le=!1,Ce=[],Re="{}";const Ke={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:xt(null),session:xt(ke&&ke.session)};let Oe,He,Ue;function je(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return ce(this,void 0,void 0,(function*(){Ne&&Ke.preloading.set(!0);const e=function(t){return xe&&xe.href===t.href?xe.promise:Ge(t)}(t),n=Pe={},s=yield e,{redirect:r}=s;if(n===Pe)if(r)yield Ae(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield De(n,e,je(e,t.page))}}))}function De(t,e,n){return ce(this,void 0,void 0,(function*(){Ke.page.set(n),Ke.preloading.set(!1),Ne?Ne.$set(e):(e.stores={page:{subscribe:Ke.page.subscribe},preloading:{subscribe:Ke.preloading.subscribe},session:Ke.session},e.level0={props:yield Ie},e.notify=Ke.page.notify,Ne=new se({target:Ue,props:e,hydrate:!0})),Ce=t,Re=JSON.stringify(n.query),Le=!0,He=!1}))}function Ge(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=ke.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Oe)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ce(this,void 0,void 0,(function*(){const d=s[a];if(function(t,e,n,s){if(s!==Re)return!0;const r=Ce[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:d};const f=c++;let h;if(He||u||!Ce[a]||Ce[a].part!==e.i){u=!1;const{default:s,preload:r}=yield oe[e.i].js();let o;o=Le||!ke.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Oe):{}:ke.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=Ce[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var qe,Be,ze;Ke.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(Oe=t,!Le)return;He=!0;const e=be(new URL(location.href)),n=Pe={},{redirect:s,props:r,branch:o}=yield Ge(e);n===Pe&&(s?yield Ae(s.location,{replaceState:!0}):yield De(o,r,je(r,e.page)))})))),qe={target:document.querySelector("#sapper")},Be=qe.target,Ue=Be,ze=ke.baseUrl,pe=ze,me=Me,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",$e),addEventListener("touchstart",Ee),addEventListener("mousemove",Te),ke.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=ke;Ie||(Ie=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Ie},level1:{props:{status:o,error:i},component:Xt},segments:r},c=ge(n);De([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:de},"",e);const n=be(new URL(location.href));if(n)return ye(n,de,!0,t)}));export{_t as A,T as B,r as C,Q as D,j as E,c as F,d as G,z as H,B as I,Ot as J,w as K,K as L,Ae as M,D as N,A as O,e as P,N as Q,pt as R,wt as S,F as T,Y as U,u as V,mt as W,st as X,q as Y,P as a,O as b,R as c,_ as d,y as e,k as f,v as g,g as h,yt as i,x as j,H as k,ut as l,ht as m,t as n,dt as o,ft as p,W as q,Tt as r,i as s,S as t,M as u,E as v,$ as w,gt as x,bt as y,vt as z};

import __inject_styles from './inject_styles.803b7e80.js';