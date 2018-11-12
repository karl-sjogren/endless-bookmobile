define("app",["exports","module","game"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var r=i(n);t.exports=function(){var e=document.querySelector(".game-container"),t=new r["default"](e);t.setupScene(),t.run()}}),define("backdrop",["exports","module","object-base"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},a=i(n),c=function(e){function t(e){r(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.y=e.height-200,this.element=e.createDOMElement("backdrop"),this.element.style.width=e.width+"px",this.element.style.height=e.height+"px",this.element.style.backgroundImage='url("images/backdrop.jpg")'}return o(t,e),s(t,[{key:"update",value:function(e){this.y+=.3*e}},{key:"draw",value:function(){this.element.style.backgroundPositionY=this.y+"px"}}]),t}(a["default"]);t.exports=c}),define("collidable",["exports","module","object-base"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},a=i(n),c=function(e){function t(){r(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),s(t,[{key:"collide",value:function(){}}]),t}(a["default"]);t.exports=c}),define("collision-helpers",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.height+e.y>t.y};e.box_collision=t}),define("controller",["exports","module"],function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=40,o=38,s=37,u=39,a=13,c=32,l=function(){function e(t){var i=this;n(this,e),this._keys={up:!1,down:!1,right:!1,left:!1,enter:!1,space:!1},$(document).on("keydown",function(e){switch(e.keyCode){case r:i._keys.down=!0;break;case o:i._keys.up=!0;break;case s:i._keys.left=!0;break;case u:i._keys.right=!0;break;case a:i._keys.enter=!0;break;case c:i._keys.space=!0}}),$(document).on("keyup",function(e){switch(e.keyCode){case r:i._keys.down=!1;break;case o:i._keys.up=!1;break;case s:i._keys.left=!1;break;case u:i._keys.right=!1;break;case a:i._keys.enter=!1;break;case c:i._keys.space=!1}})}return i(e,[{key:"keys",get:function(){return this._keys}}]),e}();t.exports=l}),define("difficulty-manager",["exports","module"],function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){n(this,e),this.difficulty=1}return i(e,[{key:"increaseDifficulty",value:function(){this.difficulty<10&&this.difficulty++}},{key:"reset",value:function(){this.difficulty=1}},{key:"spawnSpeedMultiplier",get:function(){return Math.log10(this.difficulty)}},{key:"lorrySpeedMultiplier",get:function(){var e=Math.log(this.difficulty);return e<1&&(e=1),e}}]),e}();t.exports=r}),define("entity-spawner",["exports","module","object-base","goodie","moose"],function(e,t,n,i,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},l=o(n),f=o(i),h=o(r),p=function(e){function t(e){s(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.nextSpawn}return u(t,e),a(t,[{key:"update",value:function(e,t){var n=this.scene.difficultyManager.spawnSpeedMultiplier;this.nextSpawn||(this.nextSpawn=t+(400-200*n)),this.nextSpawn<=t&&(this.nextSpawn=t+(400-200*n),Math.random()>.3?this.spawnGoodie():this.spawnBadie())}},{key:"spawnGoodie",value:function(){var e=60,t=this.scene.width-2*e,n=e+Math.random()*t,i=-200;this.scene.addObject(new f["default"](this.scene,n,i))}},{key:"spawnBadie",value:function(){var e=60,t=this.scene.width-2*e,n=e+Math.random()*t,i=-200;this.scene.addObject(new h["default"](this.scene,n,i))}},{key:"draw",value:function(){}}]),t}(l["default"]);t.exports=p}),define("fps-counter",["exports","module","object-base"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},a=i(n),c=function(e){function t(e){r(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.width=300,this.height=32,this.element=e.createDOMElement("fps-counter"),this.element.style.right="16px",this.element.style.bottom="16px",this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this._times=[],this._fps=0}return o(t,e),s(t,[{key:"update",value:function(e,t){for(;this._times.length>0&&this._times[0]<=t-1e3;)this._times.shift();this._times.push(t),this._fps=this._times.length}},{key:"draw",value:function(){this.element.textContent=this._fps}}]),t}(a["default"]);t.exports=c}),define("game-over-sign",["exports","module"],function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){n(this,e),this.scene=t,this.element=t.createDOMElement("game-over-sign"),this.element.textContent="Game over"}return i(e,[{key:"update",value:function(e){}},{key:"draw",value:function(){}}]),e}();t.exports=r}),define("game",["exports","module","scene","lorry","backdrop","score","fps-counter","entity-spawner"],function(e,t,n,i,r,o,s,u){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f=a(n),h=a(i),p=a(r),y=a(o),d=a(s),v=a(u),b=function(){function e(t){c(this,e),this.lastFrameTime=performance.now(),this.scene=new f["default"](t)}return l(e,[{key:"setupScene",value:function(){this.scene.addObject(new p["default"](this.scene)),this.scene.addObject(new y["default"](this.scene)),this.scene.addObject(new d["default"](this.scene)),this.scene.addObject(new h["default"](this.scene)),this.scene.addObject(new v["default"](this.scene))}},{key:"run",value:function(){var e=performance.now(),t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.scene.gameOver)(this.scene.controller.keys.space||this.scene.controller.keys.enter)&&(this.scene.reset(),this.setupScene());else{for(var n=0;n<this.scene.objects.length;n++){var i=this.scene.objects[n];i.isAlive&&i.update(t,e)}for(var n=0;n<this.scene.objects.length;n++){var i=this.scene.objects[n];i.isAlive&&i.draw(t,e)}}requestAnimationFrame(this.run.bind(this))}}]),e}();t.exports=b}),define("goodie",["exports","module","collidable","particle-cannon"],function(e,t,n,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},c=r(n),l=r(i),f=function(e){function t(e,n,i){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.x=n,this.y=i,this.width=32,this.height=32,this.element=e.createDOMElement("goodie"),this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this.particleCannon=new l["default"](e)}return s(t,e),u(t,[{key:"update",value:function(e){this.y+=.3*e;var t=60;this.x>this.scene.width-this.width-t?this.x=this.scene.width-this.width-t:this.x<=t&&(this.x=t),this.y>this.scene.height&&(this._isAlive=!1,this.scene.removeDOMElement(this.element))}},{key:"collide",value:function(){this.isAlive&&(this.scene.addScore(1e3),this.particleCannon.fire(this.x+this.width/2,this.y+this.width/2,40)),this._isAlive=!1,this.scene.removeDOMElement(this.element)}},{key:"draw",value:function(){this.element.style.left=this.x+"px",this.element.style.top=this.y+"px"}}]),t}(c["default"]);t.exports=f}),define("lorry",["exports","module","object-base","collidable","collision-helpers"],function(e,t,n,i,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},l=o(n),f=o(i),h=function(e){function t(e){s(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.x=e.width/2,this.y=e.height-200,this.width=65,this.height=150,this.element=e.createDOMElement("lorry"),this.element.style.width=this.width+"px",this.element.style.height=this.height+"px"}return u(t,e),a(t,[{key:"update",value:function(e){var t=this.scene.difficultyManager.lorrySpeedMultiplier,n=this.scene.controller;n.keys.left?this.x-=.5*e*t:n.keys.right&&(this.x+=.5*e*t),n.keys.up?this.y-=.3*e*t:n.keys.down&&(this.y+=.5*e*t);var i=60;this.x>this.scene.width-this.width-i?this.x=this.scene.width-this.width-i:this.x<=i&&(this.x=i),this.y>this.scene.height-this.height?this.y=this.scene.height-this.height:this.y<=0&&(this.y=0);for(var o=this.scene.objects.filter(function(e){return e instanceof f["default"]}),s=0;s<o.length;s++){var u=o[s];if(u.isAlive){var a=(0,r.box_collision)(u,this);a&&u.collide()}}}},{key:"draw",value:function(){this.element.style.left=this.x+"px",this.element.style.top=this.y+"px"}}]),t}(l["default"]);t.exports=h}),define("moose",["exports","module","collidable"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},a=i(n),c=function(e){function t(e,n,i){r(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.x=n,this.y=i,this.initialX=n,this.movingLeft=Math.random()>.5,this.width=64,this.height=58,this.element=e.createDOMElement("moose"),this.element.style.width=this.width+"px",this.element.style.height=this.height+"px"}return o(t,e),s(t,[{key:"update",value:function(e){this.y+=.3*e,this.movingLeft?this.x-=.1*e:this.x+=.1*e;var t=60;this.x<this.initialX-t?(this.x=this.initialX-t,this.movingLeft=!1):this.x>this.initialX+t&&(this.x=this.initialX+t,this.movingLeft=!0);var n=60;this.x>this.scene.width-this.width-n?(this.x=this.scene.width-this.width-n,this.movingLeft=!0):this.x<=n&&(this.x=n,this.movingLeft=!1),this.y>this.scene.height&&(this._isAlive=!1,this.scene.removeDOMElement(this.element))}},{key:"collide",value:function(){this.isAlive&&(this.scene.setGameOver(),this._isAlive=!1)}},{key:"draw",value:function(){this.element.style.left=this.x+"px",this.element.style.top=this.y+"px"}}]),t}(a["default"]);t.exports=c}),define("object-base",["exports","module"],function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){n(this,e),this._isAlive=!0}return i(e,[{key:"update",value:function(){}},{key:"draw",value:function(){}},{key:"isAlive",get:function(){return this._isAlive}}]),e}();t.exports=r}),define("particle-cannon",["exports","module","particle"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=i(n),u=function(){function e(t){r(this,e),this.scene=t}return o(e,[{key:"fire",value:function(e,t,n){for(var i=0;i<n;i++)this.scene.addObject(new s["default"](this.scene,e,t))}},{key:"update",value:function(){}},{key:"draw",value:function(){}}]),e}();t.exports=u}),define("particle",["exports","module","object-base"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},a=i(n),c=function(e){function t(e,n,i){r(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.x=n,this.y=i,this.life=100*Math.random()+100,this.speedX=2*Math.random()-1,this.speedY=2*Math.random()-1,this.width=16*Math.random(),this.height=.4*this.width,this.rotation=360*Math.random(),this.rotationSpeed=4*Math.random(),this.skew=80*Math.random()-40,this.skewSpeed=this.rotationSpeed/2,this.element=e.createDOMElement("particle"),this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this.element.style.backgroundColor=this.randomColor()}return o(t,e),s(t,[{key:"randomColor",value:function(){var e=Math.random();return e>.66?"red":e>.33?"blue":"green"}},{key:"update",value:function(e){this.x-=this.speedX*e*.5,this.y-=this.speedY*e*.5,this.rotation+=this.rotationSpeed*e,this.skew+=this.skewSpeed*e,this.skew>40&&(this.skew=-40),this.life-=.1*e,this.life<0&&(this._isAlive=!1,this.scene.removeDOMElement(this.element))}},{key:"draw",value:function(){this.element.style.left=this.x+"px",this.element.style.top=this.y+"px",this.element.style.transform="rotate("+this.rotation+"deg) skew("+this.skew+"deg,"+this.skew+"deg)",this.element.style.opacity=this.life/200}}]),t}(a["default"]);t.exports=c}),define("scene",["exports","module","controller","game-over-sign","difficulty-manager"],function(e,t,n,i,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=o(n),l=o(i),f=o(r),h=function(){function e(t){u(this,e),this.gameContainer=t,this.width=t.clientWidth,this.height=t.clientHeight,this._score=0,this._objects=[],this._gameOver=!1,this._controller=new c["default"],this.difficultyManager=new f["default"]}return a(e,[{key:"addScore",value:function(e){this._score+=e,this._score%5e3===0&&this.difficultyManager.increaseDifficulty()}},{key:"addObject",value:function(e){this._objects.push(e)}},{key:"reset",value:function(){var e=this;this._objects=[],this._gameOver=!1,this._score=0,this.difficultyManager.reset(),this.gameContainer.classList.remove("game-over");var t=[].concat(s(this.gameContainer.children));t.forEach(function(t){return e.gameContainer.removeChild(t)})}},{key:"setGameOver",value:function(){this._gameOver=!0,this.addObject(new l["default"](this)),this.gameContainer.classList.add("game-over")}},{key:"createDOMElement",value:function(e){var t=document.createElement("div");return t.classList.add("game-object"),t.classList.add(e),this.gameContainer.appendChild(t),t}},{key:"removeDOMElement",value:function(e){var t=[].concat(s(this.gameContainer.children)),n=t.some(function(t){return t===e});n&&this.gameContainer.removeChild(e)}},{key:"objects",get:function(){return this._objects}},{key:"controller",get:function(){return this._controller}},{key:"score",get:function(){return this._score}},{key:"gameOver",get:function(){return this._gameOver}}]),e}();t.exports=h}),define("score",["exports","module","object-base"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=function(e,t,n){for(var i=!0;i;){var r=e,o=t,s=n;i=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,o);if(void 0!==u){if("value"in u)return u.value;var a=u.get;if(void 0===a)return;return a.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=o,n=s,i=!0,u=c=void 0}},a=i(n),c=function(e){function t(e){r(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.scene=e,this.width=300,this.height=32,this.element=e.createDOMElement("score"),this.element.style.right="16px",this.element.style.top="16px",this.element.style.width=this.width+"px",this.element.style.height=this.height+"px"}return o(t,e),s(t,[{key:"update",value:function(e){}},{key:"draw",value:function(){this.element.textContent=this.scene.score.toLocaleString()}}]),t}(a["default"]);t.exports=c});
//# sourceMappingURL=app.js.map
