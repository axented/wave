(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{xeWB:function(b,o,e){"use strict";e.r(o),e.d(o,"PreferencesModule",function(){return s});var t=e("ofXK"),n=e("K3ix"),i=e("tyNb"),c=e("fXoL"),a=e("tL+4"),l=e("eSIH");const r=[{path:"",component:(()=>{class b{constructor(b,o){this.commonService=b,this.modalService=o}ngOnInit(){}}return b.\u0275fac=function(o){return new(o||b)(c.Pb(a.a),c.Pb(n.a))},b.\u0275cmp=c.Jb({type:b,selectors:[["app-preferences"]],decls:114,vars:0,consts:[[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row","form-group"],["for","currencyLabel",1,"col-sm-3","col-form-label","input-label"],[1,"col-sm-9"],["id","currencyLabel","width","100%",1,"select"],["for","languageLabel",1,"col-sm-3","col-form-label","input-label"],["id","languageLabel","width","100%",1,"select"],["for","timezoneLabel",1,"col-sm-3","col-form-label","input-label"],["id","timezoneLabel","width","100%",1,"select"],["for","dateformat",1,"col-sm-3","col-form-label","input-label"],["id","dateformat","width","100%",1,"select"],["for","financialyear",1,"col-sm-3","col-form-label","input-label"],["id","financialyear","width","100%",1,"select"],["for","preferencesSwitch1",1,"row","form-group","toggle-switch"],[1,"col-8","col-sm-9","toggle-switch-content","ml-0"],[1,"d-block","text-dark"],[1,"d-block","text-muted"],[1,"col-4","col-sm-3"],["type","checkbox","id","preferencesSwitch1",1,"toggle-switch-input"],[1,"toggle-switch-label","ml-auto"],[1,"toggle-switch-indicator"],[1,"text-right"],["type","button",1,"btn","btn-primary"]],template:function(b,o){1&b&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"h5",2),c.Dc(3,"Preferences"),c.Tb(),c.Tb(),c.Ub(4,"div",3),c.Ub(5,"form"),c.Ub(6,"div",4),c.Ub(7,"label",5),c.Dc(8,"Currency"),c.Tb(),c.Ub(9,"div",6),c.Ub(10,"ng-select2",7),c.Ub(11,"option"),c.Dc(12,"USD - US Dollar"),c.Tb(),c.Ub(13,"option"),c.Dc(14,"GBP - British Pound"),c.Tb(),c.Ub(15,"option"),c.Dc(16,"EUR - Euro"),c.Tb(),c.Ub(17,"option"),c.Dc(18,"INR - Indian Rupee"),c.Tb(),c.Ub(19,"option"),c.Dc(20,"AUD - Australian Dollar"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(21,"div",4),c.Ub(22,"label",8),c.Dc(23,"Language"),c.Tb(),c.Ub(24,"div",6),c.Ub(25,"ng-select2",9),c.Ub(26,"option"),c.Dc(27,"English"),c.Tb(),c.Ub(28,"option"),c.Dc(29,"French"),c.Tb(),c.Ub(30,"option"),c.Dc(31,"German"),c.Tb(),c.Ub(32,"option"),c.Dc(33,"Italian"),c.Tb(),c.Ub(34,"option"),c.Dc(35,"Spanish"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(36,"div",4),c.Ub(37,"label",10),c.Dc(38,"Time Zone"),c.Tb(),c.Ub(39,"div",6),c.Ub(40,"ng-select2",11),c.Ub(41,"option"),c.Dc(42,"English"),c.Tb(),c.Ub(43,"option"),c.Dc(44,"French"),c.Tb(),c.Ub(45,"option"),c.Dc(46,"German"),c.Tb(),c.Ub(47,"option"),c.Dc(48,"Italian"),c.Tb(),c.Ub(49,"option"),c.Dc(50,"Spanish"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(51,"div",4),c.Ub(52,"label",12),c.Dc(53,"Date Format"),c.Tb(),c.Ub(54,"div",6),c.Ub(55,"ng-select2",13),c.Ub(56,"option"),c.Dc(57,"2020 Nov 09"),c.Tb(),c.Ub(58,"option"),c.Dc(59,"09 Nov 2020"),c.Tb(),c.Ub(60,"option"),c.Dc(61,"09/11/2020"),c.Tb(),c.Ub(62,"option"),c.Dc(63,"09.11.2020"),c.Tb(),c.Ub(64,"option"),c.Dc(65,"09-11-2020"),c.Tb(),c.Ub(66,"option"),c.Dc(67,"11/09/2020"),c.Tb(),c.Ub(68,"option"),c.Dc(69,"2020/11/09"),c.Tb(),c.Ub(70,"option"),c.Dc(71,"2020-11-09"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(72,"div",4),c.Ub(73,"label",14),c.Dc(74,"Financial Year"),c.Tb(),c.Ub(75,"div",6),c.Ub(76,"ng-select2",15),c.Ub(77,"option"),c.Dc(78,"january-december"),c.Tb(),c.Ub(79,"option"),c.Dc(80,"february-january"),c.Tb(),c.Ub(81,"option"),c.Dc(82,"march-february"),c.Tb(),c.Ub(83,"option"),c.Dc(84,"april-march"),c.Tb(),c.Ub(85,"option"),c.Dc(86,"may-april"),c.Tb(),c.Ub(87,"option"),c.Dc(88,"june-may"),c.Tb(),c.Ub(89,"option"),c.Dc(90,"july-june"),c.Tb(),c.Ub(91,"option"),c.Dc(92,"august-july"),c.Tb(),c.Ub(93,"option"),c.Dc(94,"september-august"),c.Tb(),c.Ub(95,"option"),c.Dc(96,"october-september"),c.Tb(),c.Ub(97,"option"),c.Dc(98,"november-october"),c.Tb(),c.Ub(99,"option"),c.Dc(100,"december-november"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(101,"label",16),c.Ub(102,"span",17),c.Ub(103,"span",18),c.Dc(104,"Discount Per Item"),c.Tb(),c.Ub(105,"span",19),c.Dc(106,"Enable this if you want to add Discount to individual invoice items. By default, Discount is added directly to the invoice."),c.Tb(),c.Tb(),c.Ub(107,"span",20),c.Qb(108,"input",21),c.Ub(109,"span",22),c.Qb(110,"span",23),c.Tb(),c.Tb(),c.Tb(),c.Ub(111,"div",24),c.Ub(112,"button",25),c.Dc(113,"Save Changes"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb())},directives:[l.a],styles:["h4.modal-title.pull-left[_ngcontent-%COMP%]{font-size:20px!important;margin-bottom:0!important;line-height:1.5!important}"]}),b})()}];let p=(()=>{class b{}return b.\u0275mod=c.Nb({type:b}),b.\u0275inj=c.Mb({factory:function(o){return new(o||b)},imports:[[i.e.forChild(r)],i.e]}),b})(),s=(()=>{class b{}return b.\u0275mod=c.Nb({type:b}),b.\u0275inj=c.Mb({factory:function(o){return new(o||b)},imports:[[t.b,p,l.b,n.b.forRoot()]]}),b})()}}]);