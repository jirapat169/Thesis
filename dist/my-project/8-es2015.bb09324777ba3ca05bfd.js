(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fI17:function(e,t,r){e.exports=function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function a(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?c(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var i=function(e,t){return function(e){"undefined"!=typeof window&&function(t){var r=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,c=t.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),a=c&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),i=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,n=(c||i)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(e){var t,r,n,s,l,d,u,m,h;if(!(t=e.match(o)))throw new Error("invalid data URI");for(r=t[2]?t[1]:"text/plain"+(t[3]||";charset=US-ASCII"),n=!!t[4],s=e.slice(t[0].length),l=n?atob(s):decodeURIComponent(s),d=new ArrayBuffer(l.length),u=new Uint8Array(d),m=0;m<l.length;m+=1)u[m]=l.charCodeAt(m);return c?new Blob([a?u:d],{type:r}):((h=new i).append(d),h.getBlob(r))};t.HTMLCanvasElement&&!r.toBlob&&(r.mozGetAsFile?r.toBlob=function(e,t,c){var a=this;setTimeout((function(){e(c&&r.toDataURL&&n?n(a.toDataURL(t,c)):a.mozGetAsFile("blob",t))}))}:r.toDataURL&&n&&(r.toBlob=function(e,t,r){var c=this;setTimeout((function(){e(n(c.toDataURL(t,r)))}))})),e.exports?e.exports=n:t.dataURLtoBlob=n}(window)}(t={exports:{}}),t.exports}(),o={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,quality:.8,mimeType:"auto",convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},n="undefined"!=typeof window&&void 0!==window.document?window:{},s=Array.prototype.slice,l=/^image\/.+$/;function d(e){return l.test(e)}var u=String.fromCharCode,m=n.btoa,h=/\.\d*(?:0|9){12}\d*$/;function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return h.test(e)?Math.round(e*t)/t:e}var b=n.ArrayBuffer,p=n.FileReader,g=n.URL||n.webkitURL,v=/\.\w+$/,y=n.Compressor;return function(){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.file=e,this.image=new Image,this.options=a({},o,{},r),this.aborted=!1,this.result=null,this.init()}var c,l,h;return c=t,h=[{key:"noConflict",value:function(){return window.Compressor=y,t}},{key:"setDefaults",value:function(e){r(o,e)}}],(l=[{key:"init",value:function(){var e=this,t=this.file,c=this.options;if(a=t,"undefined"!=typeof Blob&&(a instanceof Blob||"[object Blob]"===Object.prototype.toString.call(a))){var a,i=t.type;if(d(i))if(g&&p)if(b||(c.checkOrientation=!1),g&&!c.checkOrientation)this.load({url:g.createObjectURL(t)});else{var o=new p,n=c.checkOrientation&&"image/jpeg"===i;this.reader=o,o.onload=function(c){var a=c.target.result,o={};if(n){var l=function(e){var t,r=new DataView(e);try{var c,a,i;if(255===r.getUint8(0)&&216===r.getUint8(1))for(var o=r.byteLength,n=2;n+1<o;){if(255===r.getUint8(n)&&225===r.getUint8(n+1)){a=n;break}n+=1}if(a){var s=a+10;if("Exif"===function(e,t,r){var c,a="";for(r+=t,c=t;c<r;c+=1)a+=u(e.getUint8(c));return a}(r,a+4,4)){var l=r.getUint16(s);if(((c=18761===l)||19789===l)&&42===r.getUint16(s+2,c)){var d=r.getUint32(s+4,c);d>=8&&(i=s+d)}}}if(i){var m,h,f=r.getUint16(i,c);for(h=0;h<f;h+=1)if(274===r.getUint16(m=i+12*h+2,c)){t=r.getUint16(m+=8,c),r.setUint16(m,1,c);break}}}catch(b){t=1}return t}(a);l>1||!g?(o.url=function(e,t){for(var r,c=[],a=new Uint8Array(e);a.length>0;)c.push(u.apply(null,(r=a.subarray(0,8192),Array.from?Array.from(r):s.call(r)))),a=a.subarray(8192);return"data:".concat(t,";base64,").concat(m(c.join("")))}(a,i),l>1&&r(o,function(e){var t=0,r=1,c=1;switch(e){case 2:r=-1;break;case 3:t=-180;break;case 4:c=-1;break;case 5:t=90,c=-1;break;case 6:t=90;break;case 7:t=90,r=-1;break;case 8:t=-90}return{rotate:t,scaleX:r,scaleY:c}}(l))):o.url=g.createObjectURL(t)}else o.url=a;e.load(o)},o.onabort=function(){e.fail(new Error("Aborted to read the image with FileReader."))},o.onerror=function(){e.fail(new Error("Failed to read the image with FileReader."))},o.onloadend=function(){e.reader=null},n?o.readAsArrayBuffer(t):o.readAsDataURL(t)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var t=this,r=this.file,c=this.image;c.onload=function(){t.draw(a({},e,{naturalWidth:c.naturalWidth,naturalHeight:c.naturalHeight}))},c.onabort=function(){t.fail(new Error("Aborted to load the image."))},c.onerror=function(){t.fail(new Error("Failed to load the image."))},n.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(n.navigator.userAgent)&&(c.crossOrigin="anonymous"),c.alt=r.name,c.src=e.url}},{key:"draw",value:function(e){var t=this,r=e.naturalWidth,c=e.naturalHeight,a=e.rotate,o=void 0===a?0:a,n=e.scaleX,s=void 0===n?1:n,l=e.scaleY,u=void 0===l?1:l,m=this.file,h=this.image,b=this.options,p=document.createElement("canvas"),g=p.getContext("2d"),v=r/c,y=Math.abs(o)%180==90,w=Math.max(b.maxWidth,0)||1/0,x=Math.max(b.maxHeight,0)||1/0,k=Math.max(b.minWidth,0)||0,L=Math.max(b.minHeight,0)||0,I=Math.max(b.width,0)||r,W=Math.max(b.height,0)||c;if(y){var S=[x,w];w=S[0],x=S[1];var O=[L,k];k=O[0],L=O[1];var U=[W,I];I=U[0],W=U[1]}w<1/0&&x<1/0?x*v>w?x=w/v:w=x*v:w<1/0?x=w/v:x<1/0&&(w=x*v),k>0&&L>0?L*v>k?L=k/v:k=L*v:k>0?L=k/v:L>0&&(k=L*v),W*v>I?W=I/v:I=W*v;var E=-(I=Math.floor(f(Math.min(Math.max(I,k),w))))/2,C=-(W=Math.floor(f(Math.min(Math.max(W,L),x))))/2,M=I,j=W;if(y){var T=[W,I];I=T[0],W=T[1]}p.width=I,p.height=W,d(b.mimeType)||(b.mimeType=m.type);var P="transparent";if(m.size>b.convertSize&&"image/png"===b.mimeType&&(P="#fff",b.mimeType="image/jpeg"),g.fillStyle=P,g.fillRect(0,0,I,W),b.beforeDraw&&b.beforeDraw.call(this,g,p),!this.aborted&&(g.save(),g.translate(I/2,W/2),g.rotate(o*Math.PI/180),g.scale(s,u),g.drawImage(h,E,C,M,j),g.restore(),b.drew&&b.drew.call(this,g,p),!this.aborted)){var D=function(e){t.aborted||t.done({naturalWidth:r,naturalHeight:c,result:e})};p.toBlob?p.toBlob(D,b.mimeType,b.quality):D(i(p.toDataURL(b.mimeType,b.quality)))}}},{key:"done",value:function(e){var t,r,c=e.naturalWidth,a=e.naturalHeight,i=e.result,o=this.file,n=this.options;if(g&&!n.checkOrientation&&g.revokeObjectURL(this.image.src),i)if(n.strict&&i.size>o.size&&n.mimeType===o.type&&!(n.width>c||n.height>a||n.minWidth>c||n.minHeight>a))i=o;else{var s=new Date;i.lastModified=s.getTime(),i.lastModifiedDate=s,i.name=o.name,i.name&&i.type!==o.type&&(i.name=i.name.replace(v,("jpeg"===(r=d(t=i.type)?t.substr(6):"")&&(r="jpg"),".".concat(r))))}else i=o;this.result=i,n.success&&n.success.call(this,i)}},{key:"fail",value:function(e){var t=this.options;if(!t.error)throw e;t.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}])&&e(c.prototype,l),h&&e(c,h),t}()}()},p9iW:function(e,t,r){"use strict";r.r(t),r.d(t,"ManageExamModule",(function(){return J}));var c=r("ofXK"),a=r("3Pt+"),i=r("FtGj"),o=r("fI17"),n=r.n(o),s=r("JX91"),l=r("lJxs"),d=r("fXoL"),u=r("OaWH"),m=r("kmnG"),h=r("d3UM"),f=r("FKr1"),b=r("WU05"),p=r("qFsG"),g=r("A5z7"),v=r("/1cH"),y=r("NFeN");const w=["keywordInput"];function x(e,t){if(1&e&&(d.ec(0,"mat-option",10),d.Wc(1),d.dc()),2&e){const e=t.$implicit,r=d.qc();d.yc("value",r.service.jsParse(e)),d.Lb(1),d.Zc(" ",r.service.jsParse(e).unit_name," : ",r.service.jsParse(e).purpose_name," ")}}function k(e,t){1&e&&(d.ec(0,"div",49),d.Wc(1," ** \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49 \u0e2b\u0e32\u0e01\u0e44\u0e21\u0e48\u0e17\u0e33\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e41\u0e25\u0e30\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c "),d.dc())}function L(e,t){if(1&e){const e=d.fc();d.ec(0,"button",58),d.mc("click",(function(){d.Nc(e);const t=d.qc().$implicit;return d.qc().selectExam(t)})),d.Wc(1," \u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a "),d.dc()}}function I(e,t){if(1&e){const e=d.fc();d.ec(0,"tr"),d.ec(1,"td",50),d.Wc(2),d.dc(),d.ec(3,"td",51),d.Wc(4),d.dc(),d.ec(5,"td",52),d.Wc(6),d.dc(),d.ec(7,"td",52),d.Wc(8),d.dc(),d.ec(9,"td",53),d.ec(10,"button",54),d.mc("click",(function(){d.Nc(e);const r=t.$implicit,c=d.qc();return c.examSelected=r,c.onCheckupdateexam(r)})),d.Wc(11," \u0e41\u0e2a\u0e14\u0e07 "),d.dc(),d.Uc(12,L,2,0,"button",55),d.ec(13,"button",56),d.mc("click",(function(){d.Nc(e);const r=t.$implicit;return d.qc().onCheckupdateexam(r)})),d.Wc(14," \u0e41\u0e01\u0e49\u0e44\u0e02 "),d.dc(),d.ec(15,"button",57),d.mc("click",(function(){d.Nc(e);const r=t.$implicit;return d.qc().onDeleteexam(r)})),d.Wc(16," \u0e25\u0e1a "),d.dc(),d.dc(),d.dc()}if(2&e){const e=t.$implicit,r=d.qc();d.Lb(2),d.Yc(" ",r.service.zeroPad(e.storeID,1e3)," "),d.Lb(2),d.Yc(" ",r.replaceText(e.text)," "),d.Lb(2),d.Yc(" ",e.databaseName," "),d.Lb(2),d.Yc(" ",e.score," "),d.Lb(4),d.yc("ngIf","shared"!=r.selectPurpose)}}function W(e,t){if(1&e&&(d.ec(0,"mat-option",10),d.Wc(1),d.dc()),2&e){const e=t.$implicit;d.yc("value",e.examUnitID),d.Lb(1),d.Xc(e.name)}}function S(e,t){if(1&e&&(d.ec(0,"mat-option",10),d.Wc(1),d.dc()),2&e){const e=t.$implicit;d.yc("value",e.exampurposeID),d.Lb(1),d.Xc(e.name)}}function O(e,t){if(1&e&&(d.ec(0,"mat-form-field"),d.ec(1,"mat-label"),d.Wc(2,"\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c"),d.dc(),d.ec(3,"mat-select",59),d.Uc(4,S,2,2,"mat-option",11),d.dc(),d.dc()),2&e){const e=d.qc();d.Lb(4),d.yc("ngForOf",e.getpurposeTable)}}function U(e,t){if(1&e&&(d.ec(0,"mat-option",10),d.Wc(1),d.dc()),2&e){const e=t.$implicit;d.yc("value",e.database_name),d.Lb(1),d.Xc(e.database_name)}}function E(e,t){if(1&e){const e=d.fc();d.ec(0,"mat-chip",60),d.mc("removed",(function(){d.Nc(e);const r=t.$implicit;return d.qc().remove(r)})),d.Wc(1),d.ec(2,"mat-icon",61),d.Wc(3,"cancel"),d.dc(),d.dc()}if(2&e){const e=t.$implicit;d.yc("selectable","true")("removable","true"),d.Lb(1),d.Yc(" ",e," ")}}function C(e,t){if(1&e&&(d.ec(0,"mat-option",10),d.Wc(1),d.dc()),2&e){const e=t.$implicit;d.yc("value",e),d.Lb(1),d.Yc(" ",e," ")}}function M(e,t){if(1&e&&(d.ec(0,"th"),d.Wc(1),d.dc()),2&e){const e=t.$implicit;d.Lb(1),d.Yc(" ",e," ")}}function j(e,t){if(1&e&&(d.ec(0,"td"),d.Wc(1),d.dc()),2&e){const e=t.$implicit,r=d.qc().$implicit;d.Lb(1),d.Xc(r[e])}}function T(e,t){if(1&e&&(d.ec(0,"tr"),d.Uc(1,j,2,1,"td",19),d.dc()),2&e){const e=t.$implicit,r=d.qc(4);d.Lb(1),d.yc("ngForOf",r.getKeyObject(e))}}function P(e,t){if(1&e&&(d.ec(0,"table",71),d.ec(1,"thead"),d.ec(2,"tr"),d.Uc(3,M,2,1,"th",19),d.dc(),d.dc(),d.ec(4,"tbody"),d.Uc(5,T,2,1,"tr",19),d.dc(),d.dc()),2&e){const e=d.qc(3);d.Lb(3),d.yc("ngForOf",e.getKeyObject(e.service.jsParse(e.examSelected.teacherResult).result)),d.Lb(2),d.yc("ngForOf",e.service.jsParse(e.examSelected.teacherResult).result)}}function D(e,t){if(1&e&&(d.ec(0,"div",69),d.ec(1,"h4",65),d.ec(2,"b"),d.Wc(3,"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c : "),d.dc(),d.dc(),d.Uc(4,P,6,2,"table",70),d.dc()),2&e){const e=d.qc(2);d.Lb(4),d.yc("ngIf",e.getKeyObject(e.service.jsParse(e.examSelected.teacherResult).result).length>0)}}function A(e,t){if(1&e&&(d.ec(0,"div",65),d.ec(1,"h4"),d.ec(2,"b"),d.Wc(3,"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c : "),d.dc(),d.Wc(4),d.dc(),d.dc()),2&e){const e=d.qc(2);d.Lb(4),d.Yc("",e.service.jsParse(e.examSelected.teacherResult).message," ")}}function N(e,t){if(1&e&&(d.ec(0,"div",62),d.ec(1,"div",23),d.ec(2,"div",24),d.ec(3,"div",63),d.ec(4,"h2"),d.Wc(5,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a"),d.dc(),d.ec(6,"h4"),d.Wc(7),d.dc(),d.dc(),d.ec(8,"button",26),d.ec(9,"span",27),d.Wc(10,"\xd7"),d.dc(),d.dc(),d.dc(),d.ec(11,"div",64),d.ec(12,"h4",65),d.ec(13,"b"),d.Wc(14,"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49 : "),d.dc(),d.Wc(15),d.dc(),d.ec(16,"h4",65),d.ec(17,"b"),d.Wc(18,"\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c : "),d.dc(),d.Wc(19),d.dc(),d.ec(20,"h4",65),d.ec(21,"b"),d.Wc(22,"\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 : "),d.dc(),d.Wc(23),d.dc(),d.ec(24,"h4",65),d.ec(25,"b"),d.Wc(26,"\u0e42\u0e08\u0e17\u0e22\u0e4c : "),d.dc(),d.dc(),d.Zb(27,"div",66),d.Uc(28,D,5,1,"div",67),d.Uc(29,A,5,1,"ng-template",null,68,d.Vc),d.ec(31,"h4",65),d.ec(32,"b"),d.Wc(33,"\u0e04\u0e33\u0e15\u0e2d\u0e1a : "),d.dc(),d.Wc(34),d.dc(),d.ec(35,"h4",65),d.ec(36,"b"),d.Wc(37,"\u0e04\u0e33\u0e2a\u0e33\u0e04\u0e31\u0e0d : "),d.dc(),d.Wc(38),d.dc(),d.ec(39,"h4",65),d.ec(40,"b"),d.Wc(41,"\u0e04\u0e30\u0e41\u0e19\u0e19 : "),d.dc(),d.Wc(42),d.dc(),d.dc(),d.dc(),d.dc()),2&e){const e=d.Kc(30),t=d.qc();d.Lb(7),d.Yc("\u0e23\u0e2b\u0e31\u0e2a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a ",t.examSelected.storeID,""),d.Lb(8),d.Yc("",t.examSelected.unit_name," "),d.Lb(4),d.Yc("",t.examSelected.purpose_name," "),d.Lb(4),d.Xc(t.examSelected.databaseName),d.Lb(4),d.yc("froalaView",t.examSelected.text),d.Lb(1),d.yc("ngIf",t.service.jsParse(t.examSelected.teacherResult).isQuery)("ngIfElse",e),d.Lb(6),d.Xc(t.examSelected.answer),d.Lb(4),d.Xc(t.showKeyword()),d.Lb(4),d.Xc(t.examSelected.score)}}function R(e,t){if(1&e){const e=d.fc();d.ec(0,"tr"),d.ec(1,"td",73),d.Wc(2),d.dc(),d.ec(3,"td",73),d.Wc(4),d.dc(),d.ec(5,"td",73),d.ec(6,"button",74),d.mc("click",(function(){d.Nc(e);const r=t.$implicit;return d.qc(2).shareExam(r)})),d.Wc(7," \u0e40\u0e25\u0e37\u0e2d\u0e01 "),d.dc(),d.dc(),d.dc()}if(2&e){const e=t.$implicit,r=t.index;d.Lb(2),d.Xc(r+1),d.Lb(2),d.ad(" ",e.prename,"",e.firstNameThai," ",e.lastNameThai," ")}}function q(e,t){if(1&e&&(d.ec(0,"div",62),d.ec(1,"div",23),d.ec(2,"div",24),d.ec(3,"div",72),d.ec(4,"h2"),d.Wc(5,"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1c\u0e39\u0e49\u0e17\u0e35\u0e48\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a"),d.dc(),d.ec(6,"h4"),d.Wc(7),d.dc(),d.dc(),d.ec(8,"button",26),d.ec(9,"span",27),d.Wc(10,"\xd7"),d.dc(),d.dc(),d.dc(),d.ec(11,"div",64),d.ec(12,"div",15),d.ec(13,"table",16),d.ec(14,"thead"),d.ec(15,"tr"),d.Zb(16,"th"),d.ec(17,"th"),d.Wc(18,"\u0e0a\u0e37\u0e48\u0e2d - \u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"),d.dc(),d.Zb(19,"th"),d.dc(),d.dc(),d.ec(20,"tbody"),d.Uc(21,R,8,4,"tr",19),d.dc(),d.dc(),d.dc(),d.dc(),d.dc(),d.dc()),2&e){const e=d.qc();d.Lb(7),d.Yc("\u0e23\u0e2b\u0e31\u0e2a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a ",e.examSelected.storeID,""),d.Lb(14),d.yc("ngForOf",e.teacherResult)}}const F=window;let B=null,$=(()=>{class e{constructor(e,t){this.service=e,this.formBuilder=t,this.getunit=null,this.getpurposeTable=null,this.databaseResult=null,this.examResult=[],this.checkEditexam=!1,this.separatorKeysCodes=[i.c],this.examSelected=null,this.selectPurpose="",this.teacherResult=null,this.allKeyword=["SUB QUERY","SELECT","INSERT","DELETE","UPDATE","LEFT JOIN","LIMIT"],this.keyword=[],this.keywordCtrl=new a.e,this.options={placeholderText:"\u0e42\u0e08\u0e17\u0e22\u0e4c",charCounterCount:!1,events:{"image.beforePasteUpload":function(e){if(e.src){let t={img:e.src,imgType:"png"};return B.service.httpPost("/upload?token="+B.service.localStorage.get("userLogin").token,JSON.stringify(t)).then(t=>{e.src=`${B.service.rootFile}${t.path}`}),!1}return!1},"image.beforeUpload":function(e){let t=this;return new n.a(e[0],{quality:.75,success(e){let r=new FileReader,c=e;r.onload=function(e){let r={img:e.target.result,imgType:c.name.split(".")[c.name.split(".").length-1]};B.service.httpPost("/upload?token="+B.service.localStorage.get("userLogin").token,JSON.stringify(r)).then(e=>{t.image.insert(`${B.service.rootFile}${e.path}`,null,null,t.image.get())})},r.readAsDataURL(e)},error(e){B.service.showAlert("\u0e44\u0e21\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e44\u0e1f\u0e25\u0e4c\u0e19\u0e35\u0e49","","error"),console.log(e.message)}}),this.popups.hideAll(),!1}}},this.replaceText=e=>{let t=document.createElement("div");t.innerHTML=e;let r=t.textContent||t.innerText||"";return r.length>30?r.substring(0,30)+"...":r},this.filterMyExam=()=>{if("shared"==this.selectPurpose)return this.examResult.filter((e,t)=>e.owner==this.service.localStorage.get("userLogin").uid&&"on"==e.status&&null==e.purposeID_fk);{let e=this.examResult.filter((e,t)=>e.owner==this.service.localStorage.get("userLogin").uid&&"on"==e.status&&null!=e.purposeID_fk);return"object"==typeof this.selectPurpose?e.filter(e=>e.purpose_name==this.selectPurpose.purpose_name&&e.unit_name==this.selectPurpose.unit_name):e}},this.readPurpose=()=>{if(this.examResult.length>0){let e=[];return this.examResult.filter(e=>null!=e.purpose_name).forEach(t=>{let r={};r.purpose_name=t.purpose_name,r.unit_name=t.unit_name,e.push(JSON.stringify(r))}),[...new Set(e)]}return[]},this.formExamInit=()=>{this.formInsertexam=this.formBuilder.group({purposeID_fk:["",a.v.required],databaseName:["",a.v.required],text:[""],answer:["",a.v.required],keyword:["",a.v.required],score:["",a.v.required],UnitID:["",a.v.required],owner:this.service.localStorage.get("userLogin").uid,oldOwner:this.service.localStorage.get("userLogin").uid}),this.keyword=[]},this.getUnittable=()=>{this.service.httpGet("/examunit/get/"+this.service.localStorage.get("userLogin").uid+"?token="+this.service.localStorage.get("userLogin").token).then(e=>{e.success?this.getunit=e.result:this.service.showAlert("",e.message,"error")})},this.onGetselectunit=e=>{this.service.httpGet("/exampurpose/get/"+e+"?token="+this.service.localStorage.get("userLogin").token).then(e=>{e.success?this.getpurposeTable=e.result:this.service.showAlert("",e.message,"error")})},this.onGetdatabse=()=>{this.service.httpGet(`/exdatabase/getall/${this.service.localStorage.get("userLogin").uid}?token=${this.service.localStorage.get("userLogin").token}`).then(e=>{e.success?this.databaseResult=e.result:this.service.showAlert("",e.message,"error")})},this.onGetexam=()=>{this.service.httpGet(`/exstore/get/${this.service.localStorage.get("userLogin").uid}?token=${this.service.localStorage.get("userLogin").token}`).then(e=>{e.success?this.examResult=e.result:this.service.showAlert("",e.message,"error")})},this.onInsartexam=()=>{this.formInsertexam.patchValue({answer:(""+this.formInsertexam.value.answer).replace(/\s\s+/g," ")}),this.checkEditexam?this.service.httpPost("/exstore/update?token="+this.service.localStorage.get("userLogin").token,JSON.stringify(this.formInsertexam.value)).then(e=>{e.success?(console.log(e),F.$("#exampleModalCreactExam").modal("hide"),this.checkEditexam=!1,this.onGetexam(),this.service.showAlert("","\u0e41\u0e01\u0e49\u0e44\u0e02\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08","success")):this.service.showAlert("",e.message,"error")}):this.service.httpPost("/exstore/insertexam?token="+this.service.localStorage.get("userLogin").token,JSON.stringify(this.formInsertexam.value)).then(e=>{e.success?(console.log(e),F.$("#exampleModalCreactExam").modal("hide"),this.onGetexam(),this.service.showAlert("","\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08","success")):this.service.showAlert("",e.message,"error")})},this.onCheckupdateexam=e=>{this.getUnittable(),this.onGetselectunit(e.examunitID_fk),this.keyword=JSON.parse(e.keyword),this.formInsertexam=this.formBuilder.group({answer:[e.answer,a.v.required],databaseName:[e.databaseName,a.v.required],keyword:[e.keyword,a.v.required],purposeID_fk:[e.purposeID_fk,a.v.required],score:[e.score,a.v.required],storeID:e.storeID,text:[e.text,a.v.required],owner:this.service.localStorage.get("userLogin").uid,UnitID:[e.examunitID_fk,a.v.required],oldID:e.oldID,oldOwner:e.oldOwner}),this.checkEditexam=!0},this.onDeleteexam=e=>{this.service.showConfirm("\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a","","warning").then(t=>{if(t){let t={storeID:e.storeID};this.service.httpPost("/exstore/delexam?token="+this.service.localStorage.get("userLogin").token,JSON.stringify(t)).then(e=>{e.success?(this.onGetexam(),this.service.showAlert("","\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08","success")):this.service.showAlert("",e.message,"error")})}})},this.showKeyword=()=>this.keyword.map(e=>e).join(),this.getTeacher=()=>{this.service.httpGet(`/exstore/getTeacher/${this.service.localStorage.get("userLogin").uid}?token=${this.service.localStorage.get("userLogin").token}`).then(e=>{e.success?this.teacherResult=e.result:this.service.showAlert("",e.message,"error")})},this.selectExam=e=>{this.examSelected=e},this.shareExam=e=>{this.service.showConfirm("\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a","","warning").then(t=>{if(t){let t={text:this.examSelected.text,answer:this.examSelected.answer,keyword:this.examSelected.keyword,databaseName:this.examSelected.databaseName,newOwner:e.uid,owner:this.service.localStorage.get("userLogin").uid,storeID:this.examSelected.storeID,score:this.examSelected.score};this.service.httpPost("/exstore/shareExam?token="+this.service.localStorage.get("userLogin").token,JSON.stringify(t)).then(e=>{e.success?(F.$("#exampleModalTeaher").modal("hide"),this.service.showAlert("","\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08","success")):this.service.showAlert("",e.message,"error")})}})},this.getKeyObject=e=>{if(e.length>0){let t=[...e];return Object.keys(t[0])}return"object"==typeof e?Object.keys(e):[]},B=this,this.filteredKeyword=this.keywordCtrl.valueChanges.pipe(Object(s.a)(null),Object(l.a)(e=>e?this._filter(e):this.allKeyword.slice()))}_filter(e){return this.allKeyword.filter(t=>0===t.toLowerCase().indexOf(e))}ngOnInit(){this.formExamInit(),this.getTeacher(),this.getUnittable(),this.onGetdatabse(),this.onGetexam(),F.$("#exampleModalCreactExam").on("hidden.bs.modal",e=>{this.formExamInit()})}add(e){const t=e.input,r=e.value;(r||"").trim()&&this.keyword.push(r.trim()),t&&(t.value=""),this.formInsertexam.patchValue({keyword:this.keyword.length>0?JSON.stringify(this.keyword):""})}selected(e){this.keyword.push(e.option.viewValue),this.keywordInput.nativeElement.value=null,this.keywordCtrl.setValue(null),this.keywordInput.nativeElement.blur(),this.formInsertexam.patchValue({keyword:this.keyword.length>0?JSON.stringify(this.keyword):""})}remove(e){const t=this.keyword.indexOf(e);t>=0&&this.keyword.splice(t,1),this.formInsertexam.patchValue({keyword:this.keyword.length>0?JSON.stringify(this.keyword):""})}}return e.\u0275fac=function(t){return new(t||e)(d.Yb(u.a),d.Yb(a.d))},e.\u0275cmp=d.Sb({type:e,selectors:[["app-manage-exam"]],viewQuery:function(e,t){var r;1&e&&d.cd(w,!0),2&e&&d.Jc(r=d.nc())&&(t.keywordInput=r.first)},decls:91,vars:25,consts:[[1,"card"],[1,"card-body",2,"overflow","auto"],[1,"row"],[1,"col-7","mb-3"],[1,"col-5","mb-3"],[1,"text-right"],["type","button","data-toggle","modal","data-target","#exampleModalCreactExam",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-xl-4","mb-3"],["appearance","outline"],[3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"col-xl-4"],["class","mb-3 text-danger",4,"ngIf"],[1,"mb-3"],[2,"overflow","auto"],[1,"table","table-sm","table-borderless","table-hover"],[1,"text-center"],[2,"text-align","left"],[4,"ngFor","ngForOf"],["id","exampleModalCreactExam","tabindex","-1","aria-labelledby","exampleModalCreactExamLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-xl"],[3,"formGroup","ngSubmit"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalCreactExamLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body","box-padding"],["formControlName","UnitID",3,"selectionChange"],["examUnitID",""],[4,"ngIf"],["formControlName","databaseName"],["formControlName","text",3,"froalaEditor"],["matInput","","placeholder","\u0e04\u0e33\u0e15\u0e2d\u0e1a","formControlName","answer","rows","3"],["aria-label","Fruit selection","required","","formControlName","keyword"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","\u0e04\u0e33\u0e2a\u0e33\u0e04\u0e31\u0e0d",3,"matChipInputFor","matAutocomplete","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","formControl","matChipInputTokenEnd"],["keywordInput",""],[3,"optionSelected"],["auto","matAutocomplete"],["matInput","","placeholder","\u0e04\u0e30\u0e41\u0e19\u0e19","type","number","required","","formControlName","score"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary","btn-sm"],["type","submit",1,"btn","btn-primary","btn-sm"],["id","exampleModalPreviewExam","tabindex","-1","aria-labelledby","exampleModalPreviewExamLabel","aria-hidden","true",1,"modal","fade"],["class","modal-dialog modal-lg",4,"ngIf"],["id","exampleModalTeaher","tabindex","-1","aria-labelledby","exampleModalTeaherLabel","aria-hidden","true",1,"modal","fade"],[1,"mb-3","text-danger"],[2,"vertical-align","middle","text-align","center","min-width","60px"],[2,"vertical-align","middle","min-width","200px"],[2,"vertical-align","middle","text-align","center","min-width","120px"],[2,"vertical-align","middle","text-align","center","min-width","350px"],["type","button","data-toggle","modal","data-target","#exampleModalPreviewExam",1,"btn","btn-primary","btn-sm","mr-2",3,"click"],["type","button","class","btn btn-primary btn-sm ml-2 mr-2","data-toggle","modal","data-target","#exampleModalTeaher",3,"click",4,"ngIf"],["type","button","data-toggle","modal","data-target","#exampleModalCreactExam",1,"btn","btn-warning","btn-sm","ml-2","mr-2",3,"click"],["type","button",1,"btn","btn-danger","btn-sm","ml-2",3,"click"],["type","button","data-toggle","modal","data-target","#exampleModalTeaher",1,"btn","btn-primary","btn-sm","ml-2","mr-2",3,"click"],["formControlName","purposeID_fk"],[3,"selectable","removable","removed"],["matChipRemove",""],[1,"modal-dialog","modal-lg"],["id","exampleModalPreviewExamLabel",1,"modal-title"],[1,"modal-body"],[1,"mb-2"],[1,"mb-2",3,"froalaView"],["style","overflow: auto","class","mb-2",4,"ngIf","ngIfElse"],["errQuery",""],[1,"mb-2",2,"overflow","auto"],["class","table table-sm table-bordered table-hover",4,"ngIf"],[1,"table","table-sm","table-bordered","table-hover"],["id","exampleModalTeaherLabel",1,"modal-title"],[2,"vertical-align","middle"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"]],template:function(e,t){if(1&e){const e=d.fc();d.ec(0,"div",0),d.ec(1,"div",1),d.ec(2,"div",2),d.ec(3,"div",3),d.ec(4,"h2"),d.Wc(5,"\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),d.dc(),d.dc(),d.ec(6,"div",4),d.ec(7,"div",5),d.ec(8,"button",6),d.mc("click",(function(){return t.formExamInit()})),d.Wc(9," \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a "),d.dc(),d.dc(),d.dc(),d.dc(),d.ec(10,"div",2),d.ec(11,"div",7),d.ec(12,"mat-form-field",8),d.ec(13,"mat-label"),d.Wc(14,"\u0e41\u0e2a\u0e14\u0e07\u0e15\u0e32\u0e21\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c"),d.dc(),d.ec(15,"mat-select",9),d.mc("ngModelChange",(function(e){return t.selectPurpose=e})),d.ec(16,"mat-option",10),d.Wc(17),d.dc(),d.ec(18,"mat-option",10),d.Wc(19),d.dc(),d.Uc(20,x,2,3,"mat-option",11),d.dc(),d.dc(),d.dc(),d.Zb(21,"div",12),d.Zb(22,"div",12),d.dc(),d.Uc(23,k,2,0,"div",13),d.ec(24,"div",14),d.ec(25,"div",15),d.ec(26,"table",16),d.ec(27,"thead"),d.ec(28,"tr",17),d.ec(29,"th"),d.Wc(30,"\u0e23\u0e2b\u0e31\u0e2a"),d.dc(),d.ec(31,"th",18),d.Wc(32,"\u0e42\u0e08\u0e17\u0e22\u0e4c"),d.dc(),d.ec(33,"th"),d.Wc(34,"\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"),d.dc(),d.ec(35,"th"),d.Wc(36,"\u0e04\u0e30\u0e41\u0e19\u0e19"),d.dc(),d.Zb(37,"th"),d.dc(),d.dc(),d.ec(38,"tbody"),d.Uc(39,I,17,5,"tr",19),d.dc(),d.dc(),d.dc(),d.dc(),d.dc(),d.dc(),d.ec(40,"div",20),d.ec(41,"div",21),d.ec(42,"form",22),d.mc("ngSubmit",(function(){return t.formInsertexam.valid?t.onInsartexam():""})),d.ec(43,"div",23),d.ec(44,"div",24),d.ec(45,"h2",25),d.Wc(46),d.dc(),d.ec(47,"button",26),d.ec(48,"span",27),d.Wc(49,"\xd7"),d.dc(),d.dc(),d.dc(),d.ec(50,"div",28),d.ec(51,"mat-form-field"),d.ec(52,"mat-label"),d.Wc(53,"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49"),d.dc(),d.ec(54,"mat-select",29,30),d.mc("selectionChange",(function(){d.Nc(e);const r=d.Kc(55);return t.onGetselectunit(r.value)})),d.Uc(56,W,2,2,"mat-option",11),d.dc(),d.dc(),d.Uc(57,O,5,1,"mat-form-field",31),d.ec(58,"mat-form-field"),d.ec(59,"mat-label"),d.Wc(60,"\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"),d.dc(),d.ec(61,"mat-select",32),d.Uc(62,U,2,2,"mat-option",11),d.dc(),d.dc(),d.ec(63,"div",14),d.Zb(64,"textarea",33),d.dc(),d.ec(65,"mat-form-field"),d.ec(66,"mat-label"),d.Wc(67,"\u0e04\u0e33\u0e15\u0e2d\u0e1a"),d.dc(),d.Zb(68,"textarea",34),d.dc(),d.ec(69,"mat-form-field"),d.ec(70,"mat-chip-list",35,36),d.Uc(72,E,4,3,"mat-chip",37),d.ec(73,"input",38,39),d.mc("matChipInputTokenEnd",(function(e){return t.add(e)})),d.dc(),d.dc(),d.ec(75,"mat-autocomplete",40,41),d.mc("optionSelected",(function(e){return t.selected(e)})),d.Uc(77,C,2,2,"mat-option",11),d.rc(78,"async"),d.dc(),d.dc(),d.ec(79,"div",14),d.ec(80,"mat-form-field"),d.Zb(81,"input",42),d.dc(),d.dc(),d.dc(),d.ec(82,"div",43),d.ec(83,"button",44),d.Wc(84," \u0e1b\u0e34\u0e14 "),d.dc(),d.ec(85,"button",45),d.Wc(86,"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"),d.dc(),d.dc(),d.dc(),d.dc(),d.dc(),d.dc(),d.ec(87,"div",46),d.Uc(88,N,43,10,"div",47),d.dc(),d.ec(89,"div",48),d.Uc(90,q,22,2,"div",47),d.dc()}if(2&e){const e=d.Kc(71),r=d.Kc(76);d.Lb(15),d.yc("ngModel",t.selectPurpose),d.Lb(1),d.yc("value",""),d.Lb(1),d.Yc(" ","\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"," "),d.Lb(1),d.yc("value","shared"),d.Lb(1),d.Yc(" ","\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a"," "),d.Lb(1),d.yc("ngForOf",t.readPurpose()),d.Lb(3),d.yc("ngIf","shared"==t.selectPurpose),d.Lb(16),d.yc("ngForOf",t.filterMyExam()),d.Lb(3),d.yc("formGroup",t.formInsertexam),d.Lb(4),d.Yc(" ",t.checkEditexam?"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a":"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a"," "),d.Lb(10),d.yc("ngForOf",t.getunit),d.Lb(1),d.yc("ngIf",null!=t.getpurposeTable),d.Lb(5),d.yc("ngForOf",t.databaseResult),d.Lb(2),d.yc("froalaEditor",t.options),d.Lb(8),d.yc("ngForOf",t.keyword),d.Lb(1),d.yc("matChipInputFor",e)("matAutocomplete",r)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur","true")("formControl",t.keywordCtrl),d.Lb(4),d.yc("ngForOf",d.sc(78,23,t.filteredKeyword)),d.Lb(11),d.yc("ngIf",t.examSelected),d.Lb(2),d.yc("ngIf",t.examSelected)}},directives:[m.b,m.f,h.a,a.o,a.r,f.o,c.l,c.m,a.w,a.p,a.h,a.g,a.b,b.a,p.b,g.c,a.u,g.b,v.c,a.f,v.a,a.s,g.a,y.a,g.d,b.c],pipes:[c.b],styles:[""]}),e})();var _=r("tyNb");const K=[{path:"",component:$}];let G=(()=>{class e{}return e.\u0275mod=d.Wb({type:e}),e.\u0275inj=d.Vb({factory:function(t){return new(t||e)},imports:[[_.f.forChild(K)],_.f]}),e})();var Y=r("+fd8");let J=(()=>{class e{}return e.\u0275mod=d.Wb({type:e}),e.\u0275inj=d.Vb({factory:function(t){return new(t||e)},imports:[[c.c,G,Y.a]]}),e})()}}]);