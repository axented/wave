(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BaRP:function(b,t,e){"use strict";e.r(t),e.d(t,"AddPaymentsModule",function(){return T});var i=e("ofXK"),n=e("njyG"),o=e("tyNb"),a=e("fXoL"),c=e("tL+4"),l=e("eSIH");const r=[{path:"",component:(()=>{class b{constructor(b){this.commonService=b}ngOnInit(){}deleteModal(b){}}return b.\u0275fac=function(t){return new(t||b)(a.Pb(c.a))},b.\u0275cmp=a.Jb({type:b,selectors:[["app-add-payments"]],decls:168,vars:2,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"col-md-6"],[1,"form-group"],["type","text",1,"form-control"],["type","email",1,"form-control"],["width","100%"],[1,"card-title","mt-4"],["rows","5","cols","5","placeholder","Enter Address",1,"form-control"],["selected",""],[1,"text-right"],["type","button",1,"btn","btn-outline-primary","btn-sm"],["value","Afganistan"],["value","Albania"],["value","Algeria"],["value","American Samoa"],["value","Andorra"],["value","Angola"],["value","Anguilla"],[1,"text-right","mt-4"],["type","button",1,"btn","btn-primary"]],template:function(b,t){1&b&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Ub(2,"div",2),a.Ub(3,"div",3),a.Ub(4,"div",4),a.Ub(5,"h3",5),a.Dc(6,"Customers"),a.Tb(),a.Ub(7,"ul",6),a.Ub(8,"li",7),a.Ub(9,"a",8),a.Dc(10,"Dashboard"),a.Tb(),a.Tb(),a.Ub(11,"li",7),a.Ub(12,"a",8),a.Dc(13,"Payments"),a.Tb(),a.Tb(),a.Ub(14,"li",9),a.Dc(15,"Add Payment"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(16,"div",3),a.Ub(17,"div",10),a.Ub(18,"div",11),a.Ub(19,"div",12),a.Ub(20,"h4",13),a.Dc(21,"Basic Info"),a.Tb(),a.Ub(22,"form"),a.Ub(23,"div",3),a.Ub(24,"div",14),a.Ub(25,"div",15),a.Ub(26,"label"),a.Dc(27,"Name"),a.Tb(),a.Qb(28,"input",16),a.Tb(),a.Ub(29,"div",15),a.Ub(30,"label"),a.Dc(31,"Email"),a.Tb(),a.Qb(32,"input",17),a.Tb(),a.Ub(33,"div",15),a.Ub(34,"label"),a.Dc(35,"Primary Currency"),a.Tb(),a.Ub(36,"ng-select2",18),a.Ub(37,"option"),a.Dc(38,"Select Currency"),a.Tb(),a.Ub(39,"option"),a.Dc(40,"EUR Euro"),a.Tb(),a.Ub(41,"option"),a.Dc(42,"INR Indoan Rupee"),a.Tb(),a.Ub(43,"option"),a.Dc(44,"USD- US Dollar"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(45,"div",14),a.Ub(46,"div",15),a.Ub(47,"label"),a.Dc(48,"Primary Contact Name"),a.Tb(),a.Qb(49,"input",16),a.Tb(),a.Ub(50,"div",15),a.Ub(51,"label"),a.Dc(52,"Phone"),a.Tb(),a.Qb(53,"input",16),a.Tb(),a.Ub(54,"div",15),a.Ub(55,"label"),a.Dc(56,"Website"),a.Tb(),a.Qb(57,"input",16),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(58,"h4",19),a.Dc(59,"Billing Address"),a.Tb(),a.Ub(60,"form"),a.Ub(61,"div",3),a.Ub(62,"div",14),a.Ub(63,"div",15),a.Ub(64,"label"),a.Dc(65,"Name"),a.Tb(),a.Qb(66,"input",16),a.Tb(),a.Ub(67,"div",15),a.Ub(68,"label"),a.Dc(69,"State"),a.Tb(),a.Qb(70,"input",16),a.Tb(),a.Ub(71,"div",15),a.Ub(72,"label"),a.Dc(73,"Address"),a.Tb(),a.Qb(74,"textarea",20),a.Tb(),a.Tb(),a.Ub(75,"div",14),a.Ub(76,"div",15),a.Ub(77,"label"),a.Dc(78,"Country"),a.Tb(),a.Ub(79,"ng-select2",18),a.Ub(80,"option"),a.Dc(81,"Select Country"),a.Tb(),a.Ub(82,"option"),a.Dc(83,"Afghanistan"),a.Tb(),a.Ub(84,"option"),a.Dc(85,"Afghanistan"),a.Tb(),a.Ub(86,"option"),a.Dc(87,"Albania"),a.Tb(),a.Ub(88,"option"),a.Dc(89,"Algeria"),a.Tb(),a.Ub(90,"option"),a.Dc(91,"American Samoa"),a.Tb(),a.Ub(92,"option"),a.Dc(93,"Andorra"),a.Tb(),a.Ub(94,"option"),a.Dc(95,"Angola"),a.Tb(),a.Ub(96,"option"),a.Dc(97,"Anguilla"),a.Tb(),a.Ub(98,"option",21),a.Dc(99,"United States"),a.Tb(),a.Tb(),a.Tb(),a.Ub(100,"div",15),a.Ub(101,"label"),a.Dc(102,"City"),a.Tb(),a.Qb(103,"input",16),a.Tb(),a.Ub(104,"div",15),a.Ub(105,"label"),a.Dc(106,"Phone"),a.Tb(),a.Qb(107,"input",16),a.Tb(),a.Ub(108,"div",15),a.Ub(109,"label"),a.Dc(110,"Zip Code"),a.Tb(),a.Qb(111,"input",16),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(112,"h4",19),a.Dc(113,"Shipping Address"),a.Tb(),a.Ub(114,"form"),a.Ub(115,"div",22),a.Ub(116,"button",23),a.Dc(117,"Copy from Billing"),a.Tb(),a.Tb(),a.Ub(118,"div",3),a.Ub(119,"div",14),a.Ub(120,"div",15),a.Ub(121,"label"),a.Dc(122,"Name:"),a.Tb(),a.Qb(123,"input",16),a.Tb(),a.Ub(124,"div",15),a.Ub(125,"label"),a.Dc(126,"State:"),a.Tb(),a.Qb(127,"input",16),a.Tb(),a.Ub(128,"div",15),a.Ub(129,"label"),a.Dc(130,"Address:"),a.Tb(),a.Qb(131,"textarea",20),a.Tb(),a.Tb(),a.Ub(132,"div",14),a.Ub(133,"div",15),a.Ub(134,"label"),a.Dc(135,"Country:"),a.Tb(),a.Ub(136,"ng-select2",18),a.Ub(137,"option"),a.Dc(138,"Select Country"),a.Tb(),a.Ub(139,"option",24),a.Dc(140,"Afghanistan"),a.Tb(),a.Ub(141,"option",25),a.Dc(142,"Albania"),a.Tb(),a.Ub(143,"option",26),a.Dc(144,"Algeria"),a.Tb(),a.Ub(145,"option",27),a.Dc(146,"American Samoa"),a.Tb(),a.Ub(147,"option",28),a.Dc(148,"Andorra"),a.Tb(),a.Ub(149,"option",29),a.Dc(150,"Angola"),a.Tb(),a.Ub(151,"option",30),a.Dc(152,"Anguilla"),a.Tb(),a.Tb(),a.Tb(),a.Ub(153,"div",15),a.Ub(154,"label"),a.Dc(155,"City:"),a.Tb(),a.Qb(156,"input",16),a.Tb(),a.Ub(157,"div",15),a.Ub(158,"label"),a.Dc(159,"Phone:"),a.Tb(),a.Qb(160,"input",16),a.Tb(),a.Ub(161,"div",15),a.Ub(162,"label"),a.Dc(163,"Zip Code:"),a.Tb(),a.Qb(164,"input",16),a.Tb(),a.Tb(),a.Tb(),a.Ub(165,"div",31),a.Ub(166,"button",32),a.Dc(167,"Add Customer"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&b&&(a.Db(9),a.mc("routerLink",""),a.Db(3),a.mc("routerLink","payments"))},directives:[o.d,l.a],styles:[""]}),b})()}];let U=(()=>{class b{}return b.\u0275mod=a.Nb({type:b}),b.\u0275inj=a.Mb({factory:function(t){return new(t||b)},imports:[[o.e.forChild(r)],o.e]}),b})(),T=(()=>{class b{}return b.\u0275mod=a.Nb({type:b}),b.\u0275inj=a.Mb({factory:function(t){return new(t||b)},imports:[[i.b,U,n.a,l.b]]}),b})()}}]);