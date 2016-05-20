!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(e){var t,r=function(e,t){return function(){return e.apply(t,arguments)}};t=n(2).EventEmitter,window.Bridge=function(){function n(){this._addAnalyticsOnPanelAppear=r(this._addAnalyticsOnPanelAppear,this),this._showChangelog=r(this._showChangelog,this),this._emitter=new t,this.isSketch=!0,this._analyticsAdded=!1,this.settingsDocumentsPath=Panels.settingsDocumentsPath(),window.callback=function(e){return function(t,n){var r,i,o;if(o=!0,n)try{n=JSON.parse(n)}catch(i){r=i,e.logError("Received malformed arguments: "+n,r),e._emitter.emit("_error","Received malformed arguments: "+n),o=!1}return o?e._emitter.emit(t,n):void 0}}(this),window.addEventListener("error",function(e){return function(t){return t?(e.log(t.message),e._emitter.emit("_error",t.message)):void 0}}(this)),this.once("panel-will-appear",this._addAnalyticsOnPanelAppear),this.on("show-changelog",this._showChangelog)}return n.prototype._showChangelog=function(){var e,t;return e=document.createElement("div"),e.className="changelog scrollbars-visible",e.innerHTML=Panels.getChangelog(),t=document.createElement("button"),t.className="close-button",t.innerHTML="×",t.addEventListener("click",this._onCloseChangelogClick),e.appendChild(t),document.body.appendChild(e)},n.prototype._onCloseChangelogClick=function(e){return document.body.removeChild(e.target.parentElement)},n.prototype._addAnalyticsOnPanelAppear=function(){var e;return this._analyticsAdded?void 0:(e=document.createElement("script"),e.type="text/javascript",e.src="./analytics.js",document.body.appendChild(e),this._analyticsAdded=!0)},n.prototype.emit=function(e,t){return Panels.call_(JSON.stringify({command:e,arguments:t}))},n.prototype.logError=function(e,t){return Panels.log_(e+" - "+t.message+"\n"+t.stack)},n.prototype.log=function(e){return Panels.log_(e)},n.prototype.set=function(e,t){return null!==t&&"object"==typeof t?Panels.setSettingsObject_forKey_(JSON.stringify(t),e):Panels.setSettingsValue_forKey_(t,e)},n.prototype.get=function(e){var t,n;return n=Panels.settingsValueForKey_(e),n?(t=JSON.parse(n),t.value):void 0},n.prototype.remove=function(e){return Panels.setSettingsValue_forKey_(null,e)},n.prototype.getSettings=function(){return JSON.parse(Panels.settings())},n.prototype.setGlobal=function(e,t){return Panels.setGlobalSettingsValue_forKey_(t,e)},n.prototype.getGlobal=function(e){return Panels.globalSettingsValueForKey_(e)},n.prototype.setManagerSetting=function(e,t){return Panels.setManagerSettingsValue_forKey_(t,e)},n.prototype.getManagerSetting=function(e){return Panels.managerSettingsValueForKey_(e)},n.prototype.getDocumentId=function(){return Panels.getDocumentId()},n.prototype.getChangelog=function(){return Panels.getChangelog()},n.prototype.getVersion=function(){return Panels.getVersion()},n.prototype.alert=function(t,n){return alert(t),"function"==typeof n?e.nextTick(function(){return n()}):void 0},n.prototype.confirm=function(t,n){return e.nextTick(function(){return n(confirm(t))})},n.prototype.prompt=function(t,n,r){return e.nextTick(function(){return r(prompt(t,n))})},n.prototype.open=function(e){return Panels.open_(e)},n.prototype.resize=function(e,t){return Panels.setWidth_height_(e,t)},n.prototype.getSize=function(){return JSON.parse(Panels.getSize())},n.prototype.writeFile=function(e,t){return Panels.writeString_toPath_(e,t)},n.prototype.readFile=function(e){return Panels.readStringFromPath_(e)},n.prototype.readFileBase64=function(e){return Panels.base64FromPath_(e)},n.prototype.copy=function(e){return Panels.copyString_(e)},n.prototype.showAction=function(e){return Panels.setHidden_forActionButton_(!1,e)},n.prototype.hideAction=function(e){return Panels.setHidden_forActionButton_(!0,e)},n.prototype.showItemInFolder=function(e){return Panels.showInFinder_(e)},n.prototype.on=function(e,t){return this._emitter.on(e,t)},n.prototype.once=function(e,t){return this._emitter.once(e,t)},n.prototype.removeListener=function(e,t){return this._emitter.removeListener(e,t)},n}()}).call(t,n(1))},function(e,t){function n(){l=!1,s.length?u=s.concat(u):c=-1,u.length&&r()}function r(){if(!l){var e=setTimeout(n);l=!0;for(var t=u.length;t;){for(s=u,u=[];++c<t;)s&&s[c].run();c=-1,t=u.length}s=null,l=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function o(){}var s,a=e.exports={},u=[],l=!1,c=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new i(e,t)),1!==u.length||l||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=o,a.addListener=o,a.once=o,a.off=o,a.removeListener=o,a.removeAllListeners=o,a.emit=o,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!i(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,i,a,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),l=n.slice(),i=l.length,u=0;i>u;u++)l[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(i=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,i,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){i=a;break}if(0>i)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}}]);