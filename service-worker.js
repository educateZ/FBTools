"use strict";var precacheConfig=[["/FBTools/index.html","59fa3a3ddc5d7f0cd81e7dd534b3b481"],["/FBTools/static/css/main.be7061f0.css","9c1492ebbea13bcb524041d9b347ac59"],["/FBTools/static/js/main.b857443c.js","4da9803a9bd2b7c7f624345e41171ea1"],["/FBTools/static/media/bg13.c9b95f45.jpg","c9b95f45e9b2f28c5b23ee95792b55d3"],["/FBTools/static/media/bg14.6cdd0e88.jpg","6cdd0e889a988dcdeeea445ac8ad13ea"],["/FBTools/static/media/bg15.1d547621.jpg","1d5476213e47699664a1641b17ba69e6"],["/FBTools/static/media/bg16.150b1c9b.jpg","150b1c9bce62ec7a525a2e4d3ae34837"],["/FBTools/static/media/emilyz.9fcf69e5.jpg","9fcf69e5359987c9b1545aae1c2c5faa"],["/FBTools/static/media/image_placeholder.ebe9884b.jpg","ebe9884b2152a08a525fcd5054019532"],["/FBTools/static/media/logo-white.eec7c7f6.svg","eec7c7f60134e712ef7174c96ca7ee5a"],["/FBTools/static/media/nucleo-outline.22a0bffe.ttf","22a0bffe789c286a9d78eb52670996a7"],["/FBTools/static/media/nucleo-outline.24e2d6b4.woff","24e2d6b43b1b0f84fdfaa06a4032f154"],["/FBTools/static/media/nucleo-outline.53a1bed7.eot","53a1bed7a3ec86d010fe100873828a89"],["/FBTools/static/media/nucleo-outline.8ebec31f.woff2","8ebec31f5ce59f908db84d86aed5947f"],["/FBTools/static/media/placeholder.f771455e.jpg","f771455e07d39b0841a3f0d4a2143c5d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/FBTools/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});