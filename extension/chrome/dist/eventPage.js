!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isFilm=1,chrome.browserAction.setBadgeBackgroundColor({color:"#ff0000"}),chrome.tabs.onUpdated.addListener(function(e,t,n){"complete"===t.status&&n.active&&u.checkFilms(n)}),chrome.tabs.onActivated.addListener(function(e){chrome.tabs.get(e.tabId,function(e){u.checkFilms(e)})}),chrome.browserAction.onClicked.addListener(function(a){if(2===u.isFilm){u.badgeShow();chrome.tabs.executeScript(a.id,{code:"document.querySelector('video').currentSrc;"},function(e){if(null!==e[0])u.seasonvarHD(e[0]);else{chrome.tabs.executeScript(a.id,{code:"alert('A different player is in use, or the video is not loaded');"}),u.badgeHide()}})}else if(3===u.isFilm){u.badgeShow();var e="https://serial.koljasha.ru/api/?coldfilm="+a.url;u.fetch_(e).then(function(e){e.json().then(function(e){if(0<e.length){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var c=o.value;u.newTab(c)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}else{chrome.tabs.executeScript(a.id,{code:"alert('A different player is in use, or the video is not loaded');"})}u.badgeHide()})}).catch(function(e){var t="alert('".concat(e,"');");chrome.tabs.executeScript(a.id,{code:t}),u.badgeHide()})}}),chrome.contextMenus.removeAll(),chrome.contextMenus.create({title:"Разблокировать",documentUrlPatterns:["http://seasonvar.ru/serial-*"]}),chrome.contextMenus.onClicked.addListener(function(e,t){chrome.tabs.create({url:"http://datalock.ru/player/"+e.pageUrl.split("-")[1]})})}var t,n,r;return t=e,(n=[{key:"fetch_",value:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1e4;return Promise.race([fetch(e,t),new Promise(function(e,t){return setTimeout(function(){return t(new Error("timeout"))},n)})])}},{key:"seasonvarHD",value:function(t){var n=this,r=t,o=r.split("/");r="hd"+(r=o[5]).substring(2),o[5]=r,o[2]="data-hd.datalock.ru",r=o.join("/"),this.fetch_(r,{method:"HEAD"}).then(function(e){200===e.status?(n.newTab(r),n.badgeHide()):(o[2]="data-hd-temp.datalock.ru",r=o.join("/"),n.fetch_(r,{method:"HEAD"}).then(function(e){200===e.status?n.newTab(r):n.newTab(t),n.badgeHide()}))}).catch(function(){n.newTab(t),n.badgeHide()})}},{key:"checkFilms",value:function(e){var t=/http:\/\/seasonvar.*\/serial-/.test(e.url),n=/http:\/\/coldfilm.*\/news\//.test(e.url);(t||n)&&e.active?(chrome.browserAction.setIcon({path:"icon_16.png"}),this.isFilm=t?2:3):(chrome.browserAction.setIcon({path:"icon_16_def.png"}),this.isFilm=1)}},{key:"badgeShow",value:function(){chrome.browserAction.setBadgeText({text:"⌛"})}},{key:"badgeHide",value:function(){chrome.browserAction.setBadgeText({text:""})}},{key:"newTab",value:function(e){chrome.tabs.create({url:e},function(e){chrome.tabs.executeScript(e.id,{code:"\nconst body = document.querySelector('body');\nconst script = document.createElement('script');\nscript.innerHTML = `\nwindow.onload = () => {\n\n    const video = document.querySelector('video');\n\n    //disable fo Firefox\n    video.addEventListener('keydown', (event) => {\n        if (event.key === 'ArrowRight') {\n            event.preventDefault();\n        } else if (event.key === 'ArrowLeft') {\n            event.preventDefault();\n        }\n    });\n\n    //main listener\n    addEventListener('keydown', (event) => {\n        if (event.key === 'ArrowRight') {\n            if (video.currentTime + 30 <= video.duration) {\n                video.currentTime += 30;\n            } else {\n                video.currentTime = video.duration;\n            }\n        } else if (event.key === 'ArrowLeft') {\n            if (video.currentTime - 30 >= 0) {\n                video.currentTime -= 30;\n            } else {\n                video.currentTime = 0;\n            }\n        }\n    });\n\n};\n`;\nbody.append(script);\n            "})})}}])&&o(t.prototype,n),r&&o(t,r),e}())}]);