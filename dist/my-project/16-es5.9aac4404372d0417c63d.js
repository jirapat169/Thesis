function _classCallCheck(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,c){for(var t=0;t<c.length;t++){var n=c[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,c,t){return c&&_defineProperties(e.prototype,c),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"J/hq":function(e,c,t){"use strict";t.r(c),t.d(c,"ClearaccessModule",(function(){return p}));var n=t("ofXK"),i=t("fXoL"),r=t("OaWH");function s(e,c){if(1&e){var t=i.fc();i.ec(0,"tr"),i.ec(1,"td",9),i.Zb(2,"input",12),i.dc(),i.ec(3,"td",10),i.Wc(4),i.dc(),i.ec(5,"td",10),i.Wc(6),i.dc(),i.ec(7,"td",10),i.Wc(8),i.dc(),i.ec(9,"td"),i.ec(10,"button",6),i.mc("click",(function(){i.Nc(t);var e=c.$implicit;return i.qc(2).deleteAccressStudent("'"+e.uid+"'")})),i.Wc(11," \u0e25\u0e1a "),i.dc(),i.dc(),i.dc()}if(2&e){var n=c.$implicit,r=i.qc(2);i.Lb(2),i.zc("id","check_",n.uid,""),i.Lb(2),i.ad(" ",n.prename,"",n.firstNameThai," ",n.lastNameThai," "),i.Lb(2),i.Yc(" ",n.ip_address," "),i.Lb(2),i.Yc(" ",r.readTimeEnd(n.time_end)," ")}}function a(e,c){if(1&e&&(i.ec(0,"table",8),i.ec(1,"thead"),i.ec(2,"tr"),i.Zb(3,"th",9),i.ec(4,"th",10),i.Wc(5,"\u0e0a\u0e37\u0e48\u0e2d"),i.dc(),i.ec(6,"th",10),i.Wc(7,"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48 IP"),i.dc(),i.ec(8,"th",10),i.Wc(9,"\u0e40\u0e27\u0e25\u0e32\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38"),i.dc(),i.Zb(10,"th",10),i.dc(),i.dc(),i.ec(11,"tbody"),i.Uc(12,s,12,6,"tr",11),i.dc(),i.dc()),2&e){var t=i.qc();i.Lb(12),i.yc("ngForOf",t.accessStudentRecord)}}var o,d,l,u=((o=function(){function e(c){var t=this;_classCallCheck(this,e),this.service=c,this.accessStudentRecord=null,this.checkAllselect=!1,this.getAccessStudent=function(){t.accessStudentRecord=null,t.service.httpGet("/getaccess/".concat(t.service.localStorage.get("userLogin").uid,"?token=").concat(t.service.localStorage.get("userLogin").token)).then((function(e){e.success&&e.result.length>0&&(t.accessStudentRecord=e.result.filter((function(e){return 1e3*parseInt(e.time_end)>=(new Date).getTime()})))}))},this.deleteAccressStudent=function(e){t.service.httpPost("/logoutsso?token=".concat(t.service.localStorage.get("userLogin").token,"&username=").concat(e,"&status=\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a\u0e42\u0e14\u0e22\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c"),"").then((function(e){console.log(e),t.getAccessStudent()}))},this.deleteSelect=function(){var e=[];t.accessStudentRecord.forEach((function(c){1==document.getElementById("check_"+c.uid).checked&&e.push("'".concat(c.uid,"'"))})),e.length>0&&t.deleteAccressStudent(e.join(", "))},this.tableCheck=function(e){var c=document.getElementById("check_"+e);c.checked=!c.checked},this.readTimeEnd=function(e){var c=1e3*parseInt(e);return""+new Date(c+252e5).toISOString().replace("T"," ").replace(".000Z","")}}return _createClass(e,[{key:"ngOnInit",value:function(){this.getAccessStudent()}}]),e}()).\u0275fac=function(e){return new(e||o)(i.Yb(r.a))},o.\u0275cmp=i.Sb({type:o,selectors:[["app-clearaccess"]],decls:12,vars:1,consts:[[1,"box-padding"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-6","mb-3"],[1,"text-right"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],["class","table table-sm table-borderless table-hover",4,"ngIf"],[1,"table","table-sm","table-borderless","table-hover"],[2,"text-align","center","vertical-align","middle"],[2,"vertical-align","middle"],[4,"ngFor","ngForOf"],["type","checkbox","aria-label","Checkbox Body",3,"id"]],template:function(e,c){1&e&&(i.ec(0,"div",0),i.ec(1,"div",1),i.ec(2,"div",2),i.ec(3,"div",3),i.ec(4,"div",4),i.ec(5,"h2"),i.Wc(6,"\u0e25\u0e1a\u0e2a\u0e16\u0e32\u0e19\u0e30\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"),i.dc(),i.dc(),i.ec(7,"div",4),i.ec(8,"div",5),i.ec(9,"button",6),i.mc("click",(function(){return c.deleteSelect()})),i.Wc(10," \u0e25\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e2d\u0e01 "),i.dc(),i.dc(),i.dc(),i.dc(),i.Uc(11,a,13,1,"table",7),i.dc(),i.dc(),i.dc()),2&e&&(i.Lb(11),i.yc("ngIf",null!=c.accessStudentRecord))},directives:[n.m,n.l],styles:[""]}),o),f=t("tyNb"),h=[{path:"",component:u}],b=((l=function e(){_classCallCheck(this,e)}).\u0275mod=i.Wb({type:l}),l.\u0275inj=i.Vb({factory:function(e){return new(e||l)},imports:[[f.f.forChild(h)],f.f]}),l),p=((d=function e(){_classCallCheck(this,e)}).\u0275mod=i.Wb({type:d}),d.\u0275inj=i.Vb({factory:function(e){return new(e||d)},imports:[[n.c,b]]}),d)}}]);