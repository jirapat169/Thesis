(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{m6ud:function(e,r,t){"use strict";t.r(r),t.d(r,"ForgetPasswordModule",(function(){return l}));var o=t("ofXK"),s=t("3Pt+"),n=t("fXoL"),c=t("OaWH"),i=t("kmnG"),a=t("qFsG");let d=(()=>{class e{constructor(e,r){this.service=e,this.formBuilder=r,this.onForgetpassword=()=>{console.log(this.formForgetpass.value),this.service.httpPost("/rememberpw",JSON.stringify(this.formForgetpass.value)).then(e=>{e.success?(this.service.showAlert("",e.message,"success"),this.service.navRouter("/login")):this.service.showAlert("",e.message,"error")})}}ngOnInit(){this.formForgetpass=this.formBuilder.group({username:["",s.v.required],fname:["",s.v.required],lname:["",s.v.required],personalId:["",s.v.required],password:["",s.v.required]})}}return e.\u0275fac=function(r){return new(r||e)(n.Yb(c.a),n.Yb(s.d))},e.\u0275cmp=n.Sb({type:e,selectors:[["app-forget-password"]],decls:22,vars:1,consts:[[1,"text-center","mb-3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["matInput","","placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49","type","text","required","","formControlName","username"],["matInput","","placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e08\u0e23\u0e34\u0e07","type","text","required","","formControlName","fname"],["matInput","","placeholder","\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25","type","text","required","","formControlName","lname"],["matInput","","placeholder","\u0e23\u0e2b\u0e31\u0e2a\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19","type","text","required","","formControlName","personalId"],["matInput","","placeholder","\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48","type","password","required","","formControlName","password"],[1,"text-center","mb-1",2,"margin-top","20px"],["type","submit",1,"btn","btn-primary"]],template:function(e,r){1&e&&(n.ec(0,"p"),n.Wc(1,"forget-password works!"),n.dc(),n.ec(2,"div",0),n.ec(3,"form",1),n.mc("ngSubmit",(function(){return r.formForgetpass.valid?r.onForgetpassword():""})),n.ec(4,"div",2),n.ec(5,"mat-form-field"),n.Zb(6,"input",3),n.dc(),n.dc(),n.ec(7,"div",2),n.ec(8,"mat-form-field"),n.Zb(9,"input",4),n.dc(),n.dc(),n.ec(10,"div",2),n.ec(11,"mat-form-field"),n.Zb(12,"input",5),n.dc(),n.dc(),n.ec(13,"div",2),n.ec(14,"mat-form-field"),n.Zb(15,"input",6),n.dc(),n.dc(),n.ec(16,"div",2),n.ec(17,"mat-form-field"),n.Zb(18,"input",7),n.dc(),n.dc(),n.ec(19,"div",8),n.ec(20,"button",9),n.Wc(21," \u0e15\u0e01\u0e25\u0e07 "),n.dc(),n.dc(),n.dc(),n.dc()),2&e&&(n.Lb(3),n.yc("formGroup",r.formForgetpass))},directives:[s.w,s.p,s.h,i.b,a.b,s.b,s.u,s.o,s.g],styles:[""]}),e})();var m=t("tyNb");const p=[{path:"",component:d}];let u=(()=>{class e{}return e.\u0275mod=n.Wb({type:e}),e.\u0275inj=n.Vb({factory:function(r){return new(r||e)},imports:[[m.f.forChild(p)],m.f]}),e})();var f=t("+fd8");let l=(()=>{class e{}return e.\u0275mod=n.Wb({type:e}),e.\u0275inj=n.Vb({factory:function(r){return new(r||e)},imports:[[o.c,u,f.a]]}),e})()}}]);