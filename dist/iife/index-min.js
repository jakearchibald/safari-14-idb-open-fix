var idbReady=function(){"use strict";return function(){if(!(/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)))return Promise.resolve();let e;return new Promise((t=>{const r=()=>indexedDB.databases().finally(t);e=setInterval(r,100),r()})).finally((()=>clearInterval(e)))}}();