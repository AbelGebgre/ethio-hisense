(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GTEe:function(e,t,i){"use strict";i.r(t),i.d(t,"RefuelModule",function(){return ie});var a=i("5EWq"),o=i("Xa2L"),r=i("/1cH"),n=i("iadO"),l=i("1jcm"),s=i("d3UM"),c=i("NFeN"),u=i("qFsG"),d=i("kmnG"),b=i("0IaG"),p=i("V5BG"),m=i("Q4Mo"),f=i("jIHw"),h=i("7kUa"),v=i("3Pt+"),g=i("rEr+"),C=i("PCNd"),D=i("ofXK"),y=i("mrSG"),V=i("LRne"),W=i("7+5H"),k=i("12jx"),_=i("4ZtF"),M=i("nnAt"),I=i("fXoL"),w=i("otk6"),O=i("H0VJ"),Q=i("FKr1"),R=i("xivw");function x(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Sc("",e.displayMessage.date," ")}}function N(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Sc("",e.displayMessage.price," ")}}function K(e,t){if(1&e&&(I.Wb(0,"mat-option",35),I.Wb(1,"span",36),I.Wb(2,"b"),I.Qc(3),I.Vb(),I.Vb(),I.Rb(4,"br"),I.Wb(5,"small",36),I.Qc(6),I.Vb(),I.Rb(7,"br"),I.Vb()),2&e){const e=t.$implicit;I.oc("value",e.id),I.Cb(3),I.Rc(e.plateNo),I.Cb(3),I.Rc(" "+e.brand+" - "+e.model)}}function S(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Rc(e.displayMessage.carID)}}function B(e,t){if(1&e&&(I.Wb(0,"mat-option",35),I.Wb(1,"span",36),I.Qc(2),I.Vb(),I.Vb()),2&e){const e=t.$implicit;I.oc("value",e.id),I.Cb(2),I.Rc(e.name)}}function j(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Rc(e.displayMessage.driverID)}}function q(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Sc("",e.displayMessage.previous_KM_On_Refuel," ")}}function L(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Sc("",e.displayMessage.current_KM_On_Refuel," ")}}function P(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Sc("",e.displayMessage.priceInLiter," ")}}function F(e,t){if(1&e&&(I.Wb(0,"mat-error",8),I.Qc(1),I.Vb()),2&e){const e=I.hc();I.Cb(1),I.Sc("",e.displayMessage.liter," ")}}let A=(()=>{class e{constructor(e,t,i,a,o,r){var n,l,s,c,u,d,b,p,m,f,h,g,C,D,y,V,W,k,w,O,Q,R,x;this.fb=e,this.fun=t,this.dialogServices=i,this.datePipe=a,this.dateAdapter=o,this.config=r,this.formSubmit=new I.o,this.formClose=new I.o,this.drivers=[],this.cars=[],this.columns=["name","label","type","required"],this.actions=[{icon:"pencil",color:"warning",disable:!1},{icon:"trash",color:"danger"}],this.isPublished=!0,this.minValue=null,this.dialogConfig={width:"500px"},this.displayMessage={},this.dateAdapter.setLocale("en-GB"),this.image=Object(_.k)(null===(n=this.config.formData)||void 0===n?void 0:n.image)?null===(l=this.config.formData)||void 0===l?void 0:l.image:Object(_.p)(null===(s=this.config.formData)||void 0===s?void 0:s.image)?[null===(c=this.config.formData)||void 0===c?void 0:c.image]:Object(_.q)(null===(u=this.config.formData)||void 0===u?void 0:u.image)?[null===(d=this.config.formData)||void 0===d?void 0:d.image]:[],null===(p=null===(b=this.config.lookupData)||void 0===b?void 0:b.drivers)||void 0===p||p.subscribe(e=>{this.drivers=this.fun.extractData(e)}),null===(f=null===(m=this.config.lookupData)||void 0===m?void 0:m.cars)||void 0===f||f.subscribe(e=>{this.cars=this.fun.extractData(e)}),this.isPublished=void 0===(null===(h=this.config.formData)||void 0===h?void 0:h.status)||(null===(g=this.config.formData)||void 0===g?void 0:g.status),this.form=this.fb.group({id:null===(C=this.config.formData)||void 0===C?void 0:C.id,date:[(null===(D=this.config.formData)||void 0===D?void 0:D.date)?new Date(null===(y=this.config.formData)||void 0===y?void 0:y.date):(new Date).toISOString(),v.x.required],price:[null===(V=this.config.formData)||void 0===V?void 0:V.price,v.x.required],driverID:[null===(W=this.config.formData)||void 0===W?void 0:W.driverID,v.x.required],carID:[null===(k=this.config.formData)||void 0===k?void 0:k.carID,v.x.required],previous_KM_On_Refuel:[null===(w=this.config.formData)||void 0===w?void 0:w.previous_KM_On_Refuel,v.x.required],current_KM_On_Refuel:[null===(O=this.config.formData)||void 0===O?void 0:O.current_KM_On_Refuel,[v.x.required,v.x.min(3)]],priceInLiter:null===(Q=this.config.formData)||void 0===Q?void 0:Q.priceInLiter,liter:null===(R=this.config.formData)||void 0===R?void 0:R.liter,image:this.image,created_at:null===(x=this.config.formData)||void 0===x?void 0:x.created_at}),this.validationMessages={driverID:{required:"field is required."},date:{required:"field is required.",max:"date can't be pass current date"},price:{required:"field is required."},carID:{required:"field is required."},previous_KM_On_Refuel:{required:"field is required."},current_KM_On_Refuel:{required:"field is required.",min:"KM should be greaterthan previous refueling."}},this.genericValidator=new M.a(this.validationMessages)}ngOnInit(){this.today=new Date,this.form.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.form))}blur(e=null){parseFloat(null==e?void 0:e.value)>0&&parseFloat(null==e?void 0:e.value)<=parseFloat(this.form.value.previous_KM_On_Refuel)&&this.form.controls.current_KM_On_Refuel.setErrors({min:!0}),this.displayMessage=this.genericValidator.processMessages(this.form)}keyDown(e,t){return e.key?this.fun.allowedKey(e.key,t):(e.target.value=this.fun.removeNotAllowedKey(e.target.value,t),!0)}onChange(e,t="car"){var i,a,o,r,n,l,s,c;if("priceInLiter"===t)null!==(null===(a=null===(i=this.form)||void 0===i?void 0:i.value)||void 0===a?void 0:a.priceInLiter)&&null!==(null===(r=null===(o=this.form)||void 0===o?void 0:o.value)||void 0===r?void 0:r.price)?this.form.controls.liter.patchValue((parseFloat(this.form.value.price)/parseFloat(null===(l=null===(n=this.form)||void 0===n?void 0:n.value)||void 0===l?void 0:l.priceInLiter)).toFixed(2)):this.form.controls.liter.patchValue(null);else if("car"===t){const t=null===(s=this.cars.filter(t=>t.id===e.value)[0])||void 0===s?void 0:s.driverID;this.form.controls.driverID.patchValue(t||null)}else{const t=null===(c=this.cars.filter(t=>t.driverID===e.value)[0])||void 0===c?void 0:c.id;null===this.form.value.carID&&this.form.controls.carID.patchValue(t||null)}}setValidation(e=null){this.form.controls.plateNo.setErrors({found:!0}),this.displayMessage=this.genericValidator.processMessages(this.form)}getFile(e){this.form.controls.image.setValue((null==e?void 0:e.upload.length)>0?null==e?void 0:e.upload:[])}onSubmit(){var e,t,i;const a=this.form.value,o=null===(e=this.drivers)||void 0===e?void 0:e.filter(e=>e.id===a.driverID)[0],r=null===(t=this.cars)||void 0===t?void 0:t.filter(e=>e.id===a.carID)[0],n=(null==a?void 0:a.date)?new Date(null==a?void 0:a.date):null,l=Object.assign(Object.assign({},a),{driverName:null===(i=null==o?void 0:o.name)||void 0===i?void 0:i.split(" ")[0],plateNo:null==r?void 0:r.plateNo,date:n});this.formSubmit.emit(l)}onCancel(){this.formClose.emit()}}return e.\u0275fac=function(t){return new(t||e)(I.Qb(v.e),I.Qb(w.a),I.Qb(O.a),I.Qb(D.e),I.Qb(Q.a),I.Qb(b.a))},e.\u0275cmp=I.Kb({type:e,selectors:[["app-refuel-form"]],outputs:{formSubmit:"formSubmit",formClose:"formClose"},decls:94,vars:18,consts:[["autocomplete","off",3,"formGroup","submit"],["mat-dialog-title","",1,"p-dialog-header","p-d-flex","p-jc-lg-between",2,"padding","0.2re 0.3rem"],[1,"p-dialog-title","capitalize"],["pButton","","pRipple","","icon","pi pi-times",1,"shadow-none","p-button-rounded","p-button-plain","p-button-text","p-mr-1",3,"click"],["mat-dialog-content","",1,"p-dialog-content"],[1,"p-grid"],[1,"p-col-12","p-md-6"],[1,"full-width"],[1,"error"],["matInput","","formControlName","date",3,"matDatepicker","max"],["matSuffix","",3,"for"],["dp3",""],["class","error",4,"ngIf"],["matInput","","tabindex","0","type","text","value","","formControlName","price",3,"blur","input","keydown"],["price",""],["placeholder","choose car","formControlName","carID",3,"selectionChange","closed"],[3,"value",4,"ngFor","ngForOf"],["placeholder","choose driver","formControlName","driverID",3,"selectionChange","closed"],["matInput","","tabindex","0","type","text","value","","formControlName","previous_KM_On_Refuel",3,"blur","input","keydown"],["previous_KM_On_Refuel",""],["matInput","","tabindex","0","type","text","value","","formControlName","current_KM_On_Refuel",3,"blur","input","keydown"],["current_KM_On_Refuel",""],["matInput","","tabindex","0","type","text","value","","formControlName","priceInLiter",3,"blur","input","keydown"],["liter",""],["readonly","","matInput","","tabindex","0","type","text","value","","formControlName","liter",3,"blur","input","keydown"],[1,"p-col-12"],[3,"uploadedFile","limit","fileDropped"],["fileImage",""],["mat-dialog-actions","",1,"p-dialog-footer","button-row"],["pbutton","","pripple","","label","Cancel","type","button","icon","pi pi-times",1,"p-button-text","p-ripple","p-button","p-component","shadow-none","p-mr-2",3,"click"],["aria-hidden","true",1,"p-button-icon","p-button-icon-left","pi","pi-times"],[1,"p-button-label"],[1,"p-ink"],["pbutton","","pripple","","label","Save","icon","pi pi-check","type","submit",1,"p-button-text","p-ripple","p-button","p-component","shadow-none",3,"disabled"],["aria-hidden","true",1,"p-button-icon","p-button-icon-left","pi","pi-check"],[3,"value"],[1,"capitalize"]],template:function(e,t){if(1&e){const e=I.Xb();I.Wb(0,"form",0),I.ec("submit",function(){return t.onSubmit()}),I.Wb(1,"div",1),I.Wb(2,"div",2),I.Qc(3),I.Vb(),I.Wb(4,"button",3),I.ec("click",function(){return t.onCancel()}),I.Vb(),I.Vb(),I.Wb(5,"div",4),I.Wb(6,"div",5),I.Wb(7,"div",6),I.Wb(8,"mat-form-field",7),I.Wb(9,"mat-label"),I.Qc(10,"Date"),I.Wb(11,"span",8),I.Qc(12,"*"),I.Vb(),I.Vb(),I.Rb(13,"input",9),I.Wb(14,"mat-hint"),I.Qc(15,"MM/DD/YYYY"),I.Vb(),I.Rb(16,"mat-datepicker-toggle",10),I.Rb(17,"mat-datepicker",null,11),I.Oc(19,x,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(20,"div",6),I.Wb(21,"mat-form-field",7),I.Wb(22,"mat-label"),I.Qc(23,"Price"),I.Wb(24,"span",8),I.Qc(25,"*"),I.Vb(),I.Vb(),I.Wb(26,"input",13,14),I.ec("blur",function(){return t.blur()})("input",function(e){return t.keyDown(e,"price"),t.onChange(e.value,"priceInLiter")})("keydown",function(e){return t.keyDown(e,"price")}),I.Vb(),I.Oc(28,N,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(29,"div",6),I.Wb(30,"mat-form-field",7),I.Wb(31,"mat-label"),I.Qc(32,"Car"),I.Wb(33,"span",8),I.Qc(34,"*"),I.Vb(),I.Vb(),I.Wb(35,"mat-select",15),I.ec("selectionChange",function(e){return t.onChange(e,"car")})("closed",function(){return t.blur()}),I.Oc(36,K,8,3,"mat-option",16),I.Vb(),I.Oc(37,S,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(38,"div",6),I.Wb(39,"mat-form-field",7),I.Wb(40,"mat-label"),I.Qc(41,"Driver"),I.Wb(42,"span",8),I.Qc(43,"*"),I.Vb(),I.Vb(),I.Wb(44,"mat-select",17),I.ec("selectionChange",function(e){return t.onChange(e,"driver")})("closed",function(){return t.blur()}),I.Oc(45,B,3,2,"mat-option",16),I.Vb(),I.Oc(46,j,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(47,"div",6),I.Wb(48,"mat-form-field",7),I.Wb(49,"mat-label"),I.Qc(50,"Previous KM On Refuel"),I.Wb(51,"span",8),I.Qc(52,"*"),I.Vb(),I.Vb(),I.Wb(53,"input",18,19),I.ec("blur",function(){return t.blur()})("input",function(e){return t.keyDown(e,"float")})("keydown",function(e){return t.keyDown(e,"float")}),I.Vb(),I.Oc(55,q,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(56,"div",6),I.Wb(57,"mat-form-field",7),I.Wb(58,"mat-label"),I.Qc(59,"Current KM On Refuel"),I.Wb(60,"span",8),I.Qc(61,"*"),I.Vb(),I.Vb(),I.Wb(62,"input",20,21),I.ec("blur",function(){I.Ec(e);const i=I.Bc(63);return t.blur(i)})("input",function(e){return t.keyDown(e,"float")})("keydown",function(e){return t.keyDown(e,"float")}),I.Vb(),I.Oc(64,L,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(65,"div",6),I.Wb(66,"mat-form-field",7),I.Wb(67,"mat-label"),I.Qc(68,"Price IN Litter"),I.Vb(),I.Wb(69,"input",22,23),I.ec("blur",function(){return t.blur()})("input",function(e){return t.keyDown(e,"float"),t.onChange(e.value,"priceInLiter")})("keydown",function(e){return t.keyDown(e,"float")}),I.Vb(),I.Oc(71,P,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(72,"div",6),I.Wb(73,"mat-form-field",7),I.Wb(74,"mat-label"),I.Qc(75,"Liter"),I.Vb(),I.Wb(76,"input",24,23),I.ec("blur",function(){return t.blur()})("input",function(e){return t.keyDown(e,"float")})("keydown",function(e){return t.keyDown(e,"float")}),I.Vb(),I.Oc(78,F,2,1,"mat-error",12),I.Vb(),I.Vb(),I.Wb(79,"div",25),I.Wb(80,"div",7),I.Wb(81,"app-file-upload-template",26,27),I.ec("fileDropped",function(e){return t.getFile(e)}),I.Vb(),I.Vb(),I.Vb(),I.Vb(),I.Vb(),I.Wb(83,"div",28),I.Wb(84,"button",29),I.ec("click",function(){return t.onCancel()}),I.Rb(85,"span",30),I.Wb(86,"span",31),I.Qc(87,"Cancel"),I.Vb(),I.Rb(88,"span",32),I.Vb(),I.Wb(89,"button",33),I.Rb(90,"span",34),I.Wb(91,"span",31),I.Qc(92,"Save"),I.Vb(),I.Rb(93,"span",32),I.Vb(),I.Vb(),I.Vb()}if(2&e){const e=I.Bc(18);I.oc("formGroup",t.form),I.Cb(3),I.Rc(t.config.title),I.Cb(10),I.oc("matDatepicker",e)("max",t.today),I.Cb(3),I.oc("for",e),I.Cb(3),I.oc("ngIf",t.displayMessage.date),I.Cb(9),I.oc("ngIf",t.displayMessage.price),I.Cb(8),I.oc("ngForOf",t.cars),I.Cb(1),I.oc("ngIf",t.displayMessage.carID),I.Cb(8),I.oc("ngForOf",t.drivers),I.Cb(1),I.oc("ngIf",t.displayMessage.driverID),I.Cb(9),I.oc("ngIf",t.displayMessage.previous_KM_On_Refuel),I.Cb(9),I.oc("ngIf",t.displayMessage.current_KM_On_Refuel),I.Cb(7),I.oc("ngIf",t.displayMessage.priceInLiter),I.Cb(7),I.oc("ngIf",t.displayMessage.liter),I.Cb(3),I.oc("uploadedFile",t.image)("limit",10),I.Cb(8),I.oc("disabled",!t.form.valid)}},directives:[v.y,v.r,v.i,b.g,f.b,m.a,b.e,d.c,d.g,u.b,v.c,n.g,v.q,v.g,d.f,n.j,d.h,n.f,D.m,s.a,D.l,R.a,b.c,d.b,Q.i],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-end}"],changeDetection:0}),Object(y.__decorate)([Object(k.a)()],e.prototype,"blockUI",void 0),e})();var G=i("wd/R"),$=i("DYbl"),E=i("/zas"),Y=i("SRE/"),T=i("NAU6"),U=i("sSZD"),H=i("WLRH");function X(e,t){1&e&&(I.Wb(0,"mat-error"),I.Qc(1,"Invalid start date"),I.Vb())}function z(e,t){1&e&&(I.Wb(0,"mat-error"),I.Qc(1,"Invalid end date"),I.Vb())}let J=(()=>{class e{constructor(e,t,i,a,o,r,n,l){this.carService=e,this.sessionQuery=t,this.userService=i,this.refuelService=a,this.dialogServices=o,this.dateAdapter=r,this.db=n,this.fun=l,this.caption="Refuel",this.columns=[{label:"Date",name:"date",type:"mediumDate",sortable:!0},{label:"Driver",name:"driverName",type:"link",sortable:!0},{label:"Car",name:"plateNo",type:"link",sortable:!0},{label:"Price",name:"price",type:"price",sortable:!0},{label:"Image",name:"image",type:"image",sortable:!1},{label:"Liter",name:"liter",sortable:!0},{label:"Previous KM",name:"previous_KM_On_Refuel",sortable:!0},{label:"Current KM",name:"current_KM_On_Refuel",sortable:!0},{label:"Travel",name:"travel",sortable:!0}],this.actions=[{icon:"pencil",color:"warning",disable:!1},{icon:"trash",color:"danger"}],this.toolBarActions=[{position:"right",action:[]},{position:"left",action:[{label:"Create",icon:"plus",color:"",tooltip:null}]}],this.dates=["monday","tuesday"],this.range=new v.h({start:new v.f(null),end:new v.f(null)}),this.today=new Date,this.duration="day",this.groupedBy=[],this.user$=this.sessionQuery.select(e=>e.user),this.dialogConfig={width:"550px",formComponent:A,service:this.refuelService},this.dialogConfigModal={closable:!0,formComponent:W.a}}ngOnInit(){let e,t;this.user$.subscribe(e=>{this.role=null==e?void 0:e.role,"supervisor"===(null==e?void 0:e.role)&&(this.actions=[],this.toolBarActions=[])}),this.dateAdapter.setLocale("en-GB"),this.onColumnsChange({value:this.duration}),this.onDateChange(),this.cars$=e=this.carService.get(!0).snapshotChanges(),e.subscribe(e=>this.cars=this.fun.extractData(e)),this.users$=t=this.userService.get("driver").snapshotChanges(),t.subscribe(e=>this.users=this.fun.extractData(e))}add(){this.dialogConfig.title="New Refueling",this.dialogConfig.formData="",this.dialogConfig.lookupData={drivers:this.users$,cars:this.cars$},this.dialogServices.handleDialog(this.dialogConfig)}update(e){this.dialogConfig.title="Edit Refueling",this.dialogConfig.formData=e,this.dialogConfig.lookupData={drivers:this.users$,cars:this.cars$},this.dialogServices.handleDialog(this.dialogConfig)}getChangedData(){var e;(null===(e=this.range.value)||void 0===e?void 0:e.end)&&(this.refuel$=this.onDateChange())}onDateChange(){var e;if(null===(e=this.range.value)||void 0===e?void 0:e.end){let e;this.blockUI.start("Loading...");const{start:t,end:i}=this.range.value,a=G(t).subtract(1,"day").toDate();return e=this.data=this.refuelService.fitch({start:a,end:i}).snapshotChanges(),e.subscribe(e=>{this.refuel=this.fun.extractData(e),this.blockUI.stop(),this.onGroupedByChange({value:this.groupedBy})}),e}}onGroupedByChange(e){var t;if((null===(t=null==e?void 0:e.value)||void 0===t?void 0:t.length)>0){let t=this.refuel;const i=this.fun.groupedBy(t,e.value);if(0===(null==i?void 0:i.length))return;t=i.map(e=>({driverName:e.driverName,driverID:e.driverID,plateNo:e.plateNo,date:e.date,carID:e.carID,price:this.fun.sumObjArr(null==e?void 0:e.items,"price"),count:e.items.length,items:e.items})),this.refuel$=Object(V.a)(t),this.columns=[{label:"Date",name:"date",type:"mediumDate",sortable:!0},{label:"Driver",name:"driverName",type:"link",sortable:!0},{label:"Car",name:"plateNo",type:"link",sortable:!0},{label:"Price",name:"price",type:"price",sortable:!0},{label:"refuels",name:"count",type:"link",sortable:!0}]}else this.columns=[{label:"Date",name:"date",type:"mediumDate",sortable:!0},{label:"Driver",name:"driverName",type:"link",sortable:!0},{label:"Car",name:"plateNo",type:"link",sortable:!0},{label:"Price",name:"price",type:"price",sortable:!0},{label:"Image",name:"image",type:"image",sortable:!1},{label:"Liter",name:"liter",sortable:!0},{label:"Previous KM",name:"previous_KM_On_Refuel",sortable:!0},{label:"Current KM",name:"current_KM_On_Refuel",sortable:!0},{label:"Travel",name:"travel",sortable:!0}],this.data.subscribe(e=>{const t=this.fun.extractData(e).map(e=>Object.assign(Object.assign({},e),{travel:e.current_KM_On_Refuel-e.previous_KM_On_Refuel}));this.refuel$=Object(V.a)(t)})}onColumnsChange(e){if("isoWeek"===e.value||"month"===e.value||"day"===e.value){let t,i;const a=G().format("dddd").toLowerCase();i=this.dates.includes(a)&&"isoWeek"===e.value?G().subtract(1,"weeks").startOf("isoWeek").toDate():G().startOf(e.value).toDate(),t=G().endOf(e.value).toDate(),t=t>new Date?new Date:t,this.range.controls.start.patchValue(i),this.range.controls.end.patchValue(t)}}onActionClick(e){"pencil"===e.type?this.update(e.data):"trash"===e.type?(this.blockUI.start("Deleting..."),this.refuelService.delete(e.data.id).then(this.blockUI.stop())):"link"===e.type&&("driverName"===e.position?this.users$.subscribe(t=>{const i=this.fun.extractData(t).filter(t=>{var i;return(null==t?void 0:t.id)===(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.driverID)}).map(e=>{var{name:t,phone:i,email:a,image:o,role:r}=e;return Object(y.__rest)(e,["name","phone","email","image","role"]),{name:t,phone:i,email:a,image:o,role:r}});if(i.length>0){const e=Object.keys(i[0]),t=this.fun.getColumns(e);this.showModalTable("Driver Info",t,i)}}):"plateNo"===e.position?this.cars$.subscribe(t=>{const i=this.fun.extractData(t).filter(t=>{var i;return(null==t?void 0:t.id)===(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.carID)}).map(e=>{var{plateNo:t,brand:i,model:a,driverName:o,image:r,status:n,company:l}=e;return Object(y.__rest)(e,["plateNo","brand","model","driverName","image","status","company"]),{plateNo:t,brand:i,model:a,driverName:o,image:r,status:n,company:l}});if(i.length>0){const e=Object.keys(i[0]),t=this.fun.getColumns(e);this.showModalTable("Car Info",t,i)}}):"count"===e.position&&this.showModalTable("refuel",[{label:"Date",name:"date",type:"mediumDate",sortable:!0},{label:"Price",name:"price",type:"price",sortable:!0},{label:"Driver",name:"driverName",type:"link",sortable:!0},{label:"Car",name:"plateNo",type:"link",sortable:!0},{label:"Image",name:"image",type:"image",sortable:!1},{label:"Liter",name:"liter",sortable:!0},{label:"Previous KM",name:"previous_KM_On_Refuel",sortable:!0},{label:"Current KM",name:"current_KM_On_Refuel",sortable:!0},{label:"Travel",name:"travel",sortable:!0}],e.data.items))}showModalTable(e,t,i,a="1000px"){this.dialogConfigModal.width=a,this.dialogConfigModal.lookupData={caption:e,columns:t,data:i},this.dialogServices.handleDialog(this.dialogConfigModal)}onToolBarActionClick(e){"plus"===e&&this.add()}}return e.\u0275fac=function(t){return new(t||e)(I.Qb($.a),I.Qb(E.a),I.Qb(Y.a),I.Qb(T.a),I.Qb(O.a),I.Qb(Q.a),I.Qb(U.a),I.Qb(w.a))},e.\u0275cmp=I.Kb({type:e,selectors:[["app-refuel"]],decls:39,vars:19,consts:[[1,"card"],[1,"p-toolbar-group-left"],[1,"p-mr-3"],[3,"value","valueChange","selectionChange"],["value","day"],["value","isoWeek"],["value","month"],[1,"p-ml-3"],["multiple","",3,"value","valueChange","selectionChange"],["value","driverID"],["value","carID"],["value","date"],[3,"formGroup","rangePicker","max"],["matStartDate","","formControlName","start","placeholder","Start date"],["matEndDate","","formControlName","end","placeholder","End date",3,"ngModelChange"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],[3,"caption","columns","data","actions","selectedColumns","first","rows","sortBy","toolBarActions","buttonClick","toolBarButtonClick"]],template:function(e,t){if(1&e&&(I.Wb(0,"div",0),I.Wb(1,"p-toolbar"),I.Wb(2,"div",1),I.Wb(3,"mat-form-field",2),I.Wb(4,"mat-label"),I.Qc(5,"Duration"),I.Vb(),I.Wb(6,"mat-select",3),I.ec("valueChange",function(e){return t.duration=e})("selectionChange",function(e){return t.onColumnsChange(e)}),I.Wb(7,"mat-option",4),I.Qc(8,"Daily"),I.Vb(),I.Wb(9,"mat-option",5),I.Qc(10,"Weekly"),I.Vb(),I.Wb(11,"mat-option",6),I.Qc(12,"Monthly"),I.Vb(),I.Vb(),I.Vb(),I.Wb(13,"mat-form-field",7),I.Wb(14,"mat-label"),I.Qc(15,"Grouped By"),I.Vb(),I.Wb(16,"mat-select",8),I.ec("valueChange",function(e){return t.groupedBy=e})("selectionChange",function(e){return t.onGroupedByChange(e)}),I.Wb(17,"mat-option",9),I.Qc(18,"Driver"),I.Vb(),I.Wb(19,"mat-option",10),I.Qc(20,"Car"),I.Vb(),I.Wb(21,"mat-option",11),I.Qc(22,"Date"),I.Vb(),I.Vb(),I.Vb(),I.Vb(),I.Wb(23,"div",1),I.Wb(24,"mat-form-field"),I.Wb(25,"mat-label"),I.Qc(26,"Enter a date range"),I.Vb(),I.Wb(27,"mat-date-range-input",12),I.Rb(28,"input",13),I.Wb(29,"input",14),I.ec("ngModelChange",function(){return t.getChangedData()}),I.Vb(),I.Vb(),I.Wb(30,"mat-hint"),I.Qc(31,"DD/MM/YYYY \u2013 DD/MM/YYYY"),I.Vb(),I.Rb(32,"mat-datepicker-toggle",15),I.Rb(33,"mat-date-range-picker",null,16),I.Oc(35,X,2,0,"mat-error",17),I.Oc(36,z,2,0,"mat-error",17),I.Vb(),I.Vb(),I.Vb(),I.Vb(),I.Wb(37,"app-table-template",18),I.ec("buttonClick",function(e){return t.onActionClick(e)})("toolBarButtonClick",function(e){return t.onToolBarActionClick(e)}),I.ic(38,"async"),I.Vb()),2&e){const e=I.Bc(34);I.Cb(6),I.oc("value",t.duration),I.Cb(10),I.oc("value",t.groupedBy),I.Cb(11),I.oc("formGroup",t.range)("rangePicker",e)("max",t.today),I.Cb(5),I.oc("for",e),I.Cb(3),I.oc("ngIf",t.range.controls.start.hasError("matStartDateInvalid")),I.Cb(1),I.oc("ngIf",t.range.controls.end.hasError("matEndDateInvalid")),I.Cb(1),I.oc("caption",t.caption)("columns",t.columns)("data",I.jc(38,17,t.refuel$))("actions",t.actions)("selectedColumns",t.columns)("first",(null==t.currentPage?null:t.currentPage.first)||0)("rows",(null==t.currentPage?null:t.currentPage.rows)||10)("sortBy",t.sortBy)("toolBarActions",t.toolBarActions)}},directives:[a.a,d.c,d.g,s.a,Q.i,n.d,v.r,v.i,n.l,v.c,v.q,v.g,n.k,d.f,n.j,d.h,n.e,D.m,H.a,d.b],pipes:[D.b],styles:[""]}),Object(y.__decorate)([Object(k.a)()],e.prototype,"blockUI",void 0),e})();var Z=i("tyNb");const ee=[{path:"",component:J},{path:"**",redirectTo:""}];let te=(()=>{class e{}return e.\u0275mod=I.Ob({type:e}),e.\u0275inj=I.Nb({factory:function(t){return new(t||e)},imports:[[Z.e.forChild(ee)],Z.e]}),e})(),ie=(()=>{class e{}return e.\u0275mod=I.Ob({type:e}),e.\u0275inj=I.Nb({factory:function(t){return new(t||e)},imports:[[D.c,te,C.a,g.f,v.k,v.v,h.b,f.c,m.b,a.b,p.a,b.f,d.e,u.c,c.b,s.b,l.b,n.i,r.a,o.a]]}),e})()}}]);