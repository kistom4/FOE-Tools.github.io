(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{244:function(t,e,a){"use strict";a.r(e);var r=a(53),i="routes.secure_position.",o={head:function(){return this.$store.commit("SET_HERO",{title:i+"hero.title",subtitle:i+"hero.subtitle"}),{title:this.$t(i+"title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","secure_position"),{i18nPrefix:i}},components:{securePosition:r.a}},s=a(10),n=Object(s.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("secure-position",{attrs:{"can-permalink":!0}})},[],!1,null,null,null);n.options.__file="SecurePosition.vue";e.default=n.exports},333:function(t,e,a){"use strict";a(21);var r=a(3),i=a.n(r),o=a(2),s=a(6);function n(t,e,a){if("number"!=typeof a)throw s.default.InvalidTypeError("number",i()(a),'for parameter "'.concat(t,'" of ').concat(e));if(a<0)throw s.default.BoundExceededError(s.default.AvailableBoundTypes["<"],a,0,'for parameter "'.concat(t,'" of ').concat(e))}function c(t,e,a){if(!(a instanceof Array))throw s.default.InvalidTypeError("Array",i()(a),'for parameter "'.concat(t,'" of ').concat(e));a.forEach(function(a,r){n("".concat(t,"[").concat(r,"]"),e,a)})}function l(t,e,a){if(!(a instanceof Array))throw s.default.InvalidTypeError("Array",i()(a),'for parameter "'.concat(t,'" of ').concat(e));a.forEach(function(a,r){if(!("cost"in a))throw s.default.KeyNotFoundError("cost","".concat(t,"[").concat(r,"]"),'in "checkGbData" called by '.concat(e));if(!("reward"in a))throw s.default.KeyNotFoundError("reward","".concat(t,"[").concat(r,"]"),'in "checkGbData" called by '.concat(e));n("".concat(t,"[").concat(r,"].cost"),e,a.cost),c("".concat(t,"[").concat(r,"].reward"),e,a.reward)})}e.a={Submit:function(t,e,a,r){var i="Submit(currentLevel, investorPercentage, gb, defaultParticipation)";if(l("gb",i,a),!o.a.inRange(t,1,a.length))throw s.default.NotInBoundsError(t,1,a.length,'for parameter "currentLevel" of '.concat(i));return c("investorPercentage",i,e),c("defaultParticipation",i,r),function(t,e,a,r){var i={};i.cost=t[e-1].cost,i.investment=[];for(var o=!1,n=0,c=0,l=0;l<t[e-1].reward.length;l++){var p={},u=1+a[l]/100;if(p.reward=t[e-1].reward[l],p.participation=0,p.reward>0)p.participation=Math.round(p.reward*u);else if(!o){if(r[l]>i.investment[i.investment.length-1].participation)throw s.default.InvalidParticipationException(l);p.participation=r[l]}p.preparation=i.cost-(n+2*p.participation),p.preparation=p.preparation<0?0:p.preparation,i.investment.length>0&&p.preparation<i.investment[i.investment.length-1].preparation&&(p.preparation=i.investment[i.investment.length-1].preparation),n+=p.participation,c=Math.max(c,p.preparation),p.cumulativeInvestment=n+c,!o&&n+c>=i.cost&&(o=!0),i.investment[i.investment.length]=p}return i.totalPreparations=i.cost-n,i.totalPreparations=i.totalPreparations<0?0:i.totalPreparations,i.level=e,i}(a,t,e,r)},SubmitRange:function(t,e,a,r){var i,n,p="SubmitRange(from, to, investorPercentage, gb)";if(l("gb",p,r),!o.a.inRange(t,1,r.length))throw s.default.NotInBoundsError(t,1,r.length,'for parameter "from" of '.concat(p));if(!o.a.inRange(e,1,r.length))throw s.default.NotInBoundsError(e,1,r.length,'for parameter "to" of '.concat(p));c("investorPercentage",p,a),t>e?(i=e,n=t):(i=t,n=e);for(var u={global:{cost:0,totalPreparations:0},levels:[]},h=i;h<=n;h++)u.levels.push(this.Submit(h,a,r,Array.apply(null,Array(r[h-1].reward.length)).map(function(){return 0}))),u.global.cost+=u.levels[u.levels.length-1].cost,u.global.totalPreparations+=u.levels[u.levels.length-1].totalPreparations;return u},ComputeSecurePlace:function(t,e,a,r,i,o){var s="ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward)";n("levelCost",s,t),n("currentDeposits",s,e),n("yourParticipation",s,a),n("otherParticipation",s,r),n("yourArcBonus",s,i),n("fpTargetReward",s,o);var c=Math.ceil((t-e-(r-a))/2)+r;if(c<=r)return{fp:-1,roi:0};var l=0;if(i>=0&&o>0){var p=c>a?c:a,u=(100+i)/100;l=Math.round(u*o-p)}return{fp:c,roi:l}}}},53:function(t,e,a){"use strict";a(38);var r=a(2),i=a(333),o={levelCost:"sp_lc",currentDeposits:"sp_cd",yourParticipation:"sp_yp",otherParticipation:"sp_op",yourArcBonus:"sp_yab",fpTargetReward:"sp_ftr"},s={levelCost:{comparator:[">",0],type:"int"},currentDeposits:{comparator:[">=",0],type:"int"},yourParticipation:{comparator:[">=",0],type:"int"},otherParticipation:{comparator:[">=",0],type:"int"},yourArcBonus:{comparator:[">=",0],type:"float"},fpTargetReward:{comparator:[">=",0],type:"int"}},n={name:"SecurePosition",props:{levelData:{type:Object,default:null},canPermalink:{type:Boolean,default:!1},ns:{type:String,default:""}},data:function(){var t={i18nPrefix:"components.secure_position.",fp:0,yourParticipation:0,otherParticipation:0,levelCost:this.haveInputLevelCost()?this.$props.levelData.cost:0,currentDeposits:0,yourArcBonus:void 0===this.$cookies.get("yourArcBonus")?0:this.$cookies.get("yourArcBonus"),fpTargetReward:0,roi:0,formValid:!1,errors:{levelCost:!1,currentDeposits:!1,yourParticipation:!1,otherParticipation:!1,yourArcBonus:!1,fpTargetReward:!1},change:this.haveInputLevelCost()};return Object.assign(t,this.checkQuery()),this.$store.commit("ADD_URL_QUERY",{key:o.levelCost,value:t.levelCost,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:o.currentDeposits,value:t.currentDeposits,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:o.yourParticipation,value:t.yourParticipation,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:o.otherParticipation,value:t.otherParticipation,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:o.yourArcBonus,value:t.yourArcBonus,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:o.fpTargetReward,value:t.fpTargetReward,ns:this.$props.ns}),t},computed:{isPermalink:function(){return this.$store.state.isPermalink},permaLink:function(){return{path:this.$i18n.path("secure-position/"),query:this.$store.getters.getUrlQuery(this.$props.ns)}}},watch:{levelData:function(t){this.$data.change=!0,this.$data.levelCost=t.cost},levelCost:function(t,e){"number"==typeof t&&(this.$data.change=!0,r.a.handlerForm(this,"levelCost",0===t.length?0:t,e,s.levelCost.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.levelCost,value:t,ns:this.$props.ns}),this.calculate()))},currentDeposits:function(t,e){"number"==typeof t&&(this.$data.change=!0,r.a.handlerForm(this,"currentDeposits",0===t.length?0:t,e,s.currentDeposits.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.currentDeposits,value:t,ns:this.$props.ns}),this.calculate()))},yourParticipation:function(t,e){"number"==typeof t&&(this.$data.change=!0,r.a.handlerForm(this,"yourParticipation",0===t.length?0:t,e,s.yourParticipation.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.yourParticipation,value:t,ns:this.$props.ns}),this.calculate()))},otherParticipation:function(t,e){"number"==typeof t&&(this.$data.change=!0,""===t?this.$data.otherParticipation=0:r.a.handlerForm(this,"otherParticipation",0===t.length?0:t,e,s.otherParticipation.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.otherParticipation,value:t,ns:this.$props.ns}),this.calculate()))},yourArcBonus:function(t,e){"number"==typeof t&&(this.$data.change=!0,r.a.handlerForm(this,"yourArcBonus",0===t.length?0:t,e,s.yourArcBonus.comparator,!this.isPermalink,"/","float")===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.yourArcBonus,value:t,ns:this.$props.ns}),this.calculate()))},fpTargetReward:function(t,e){"number"==typeof t&&(this.$data.change=!0,this.haveInputLevelCost()&&(this.$props.levelData.investment.map(function(t){return t.reward}).indexOf(t)>=0?(this.$data.errors.fpTargetReward=!1,this.$store.commit("UPDATE_URL_QUERY",{key:o.fpTargetReward,value:t,ns:this.$props.ns}),this.calculate()):this.$data.errors.fpTargetReward=!0),r.a.handlerForm(this,"fpTargetReward",0===t.length?0:t,e,s.fpTargetReward.comparator)===r.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:o.fpTargetReward,value:t,ns:this.$props.ns}),this.calculate()))}},methods:{haveInputLevelCost:function(){return null!==this.$props.levelData},getNumberOfRemainingPoints:function(){return isNaN(this.$data.levelCost)||isNaN(this.$data.currentDeposits)||this.$data.levelCost-this.$data.currentDeposits<0?this.$t("components.secure_position.block_place.unknown"):this.$data.levelCost-this.$data.currentDeposits},calculate:function(){if(this.$data.change&&this.checkFormValid()){var t=i.a.ComputeSecurePlace(this.$data.levelCost,this.$data.currentDeposits,this.$data.yourParticipation,this.$data.otherParticipation,this.$data.yourArcBonus,this.$data.fpTargetReward);this.$data.fp=t.fp,this.$data.roi=t.roi}},checkFormValid:function(){return this.$data.formValid=!0,this.$data.errors.levelCost=!1,this.$data.errors.currentDeposits=!1,this.$data.errors.yourParticipation=!1,this.$data.errors.otherParticipation=!1,"number"==typeof this.$data.levelCost&&"number"==typeof this.$data.currentDeposits&&"number"==typeof this.$data.yourParticipation&&"number"==typeof this.$data.otherParticipation&&"number"==typeof this.$data.yourArcBonus&&"number"==typeof this.$data.fpTargetReward&&(this.$data.levelCost===this.$data.currentDeposits===this.$data.yourParticipation===this.$data.otherParticipation&&0===this.$data.levelCost||(this.$data.levelCost>0||(this.$data.formValid=!1,this.$data.errors.levelCost=!0),this.$data.currentDeposits<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.levelCost=!0,this.$data.errors.currentDeposits=!0),this.$data.yourParticipation<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.levelCost=!0),this.$data.otherParticipation<this.$data.levelCost||(this.$data.formValid=!1,this.$data.errors.otherParticipation=!0,this.$data.errors.levelCost=!0),this.$data.yourParticipation+this.$data.otherParticipation<=this.$data.currentDeposits||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.otherParticipation=!0,this.$data.errors.currentDeposits=!0),this.$data.formValid))},haveError:function(t){return this.$data.errors[t]?"is-danger":""},checkQuery:function(){var t,e={},a=r.a.FormCheck.NO_CHANGE;for(var i in s)(t=r.a.checkFormNumeric(this.$route.query[o[i]],-1,s[i].comparator,s[i].type)).state===r.a.FormCheck.VALID&&(a=r.a.FormCheck.VALID,e[i]=t.value);return a===r.a.FormCheck.VALID&&(this.$store.commit("IS_PERMALINK",!0),e.change=!0),e}},mounted:function(){this.calculate()}},c=a(10),l=Object(c.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.title")))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.canPermalink,expression:"canPermalink"}],staticClass:"column is-half"},[a("div",{staticClass:"field"},[a("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.permaLink,exact:""}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("p",[t._v(t._s(t.$t("utils.description.p1")))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.level_cost"),"label-for":"splevelCost",type:t.haveError("levelCost")}},[a("b-input",{attrs:{type:"number",min:"0",name:"level-cost",id:"splevelCost",autocomplete:"off",disabled:t.haveInputLevelCost(),autofocus:t.canPermalink},model:{value:t.levelCost,callback:function(e){t.levelCost=t._n(e)},expression:"levelCost"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.current_deposits"),"label-for":"spCurrentDeposits",type:t.haveError("currentDeposits")}},[a("b-input",{attrs:{type:"number",min:"0",name:"current-deposits",id:"spCurrentDeposits",autocomplete:"off"},model:{value:t.currentDeposits,callback:function(e){t.currentDeposits=t._n(e)},expression:"currentDeposits"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_participation"),"label-for":"spYourParticipation",type:t.haveError("yourParticipation")}},[a("b-input",{attrs:{type:"number",min:"0",name:"your-participation",id:"spYourParticipation",autocomplete:"off"},model:{value:t.yourParticipation,callback:function(e){t.yourParticipation=t._n(e)},expression:"yourParticipation"}})],1)],1),a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.other_participation"),"label-for":"spOtherParticipation",type:t.haveError("otherParticipation")}},[a("b-input",{attrs:{type:"number",min:"0",name:"other-participation",id:"spOtherParticipation",autocomplete:"off"},model:{value:t.otherParticipation,callback:function(e){t.otherParticipation=t._n(e)},expression:"otherParticipation"}})],1)],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_arc_bonus"),"label-for":"spYourArcBonus",type:t.haveError("yourArcBonus")}},[a("b-input",{attrs:{type:"number",min:"0",step:"0.1",name:"your-arc-bonus",id:"spYourArcBonus",autocomplete:"off"},model:{value:t.yourArcBonus,callback:function(e){t.yourArcBonus=t._n(e)},expression:"yourArcBonus"}})],1)],1),a("div",{staticClass:"column is-half"},[t.haveInputLevelCost()?a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.target_reward"),"label-for":"fpTargetReward",type:t.haveError("fpTargetReward")}},[a("b-select",{attrs:{id:"fpTargetReward",name:"fp-target-reward",expanded:""},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=e},expression:"fpTargetReward"}},t._l(t.levelData.investment,function(e,r){return a("option",{key:r,attrs:{id:"option_"+r,autocomplete:"off"},domProps:{value:e.reward}},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.place",{place:r+1,count:e.reward})))])}))],1):a("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.fp_target_reward"),"label-for":"spFpTargetReward",type:t.haveError("fpTargetReward")}},[a("b-input",{attrs:{type:"number",min:"0",step:"5",name:"fp-target-reward",id:"spFpTargetReward",autocomplete:"off"},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=t._n(e)},expression:"fpTargetReward"}})],1)],1)]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_complete_level",{count:t.getNumberOfRemainingPoints()})))]),t.formValid?t.fp>0?a("div",[t.fp<=t.yourParticipation?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.already_blocked")))]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.default",{count:t.fp})))]),t.fp>=t.yourParticipation&&t.fp-t.yourParticipation>0&&t.yourParticipation>0?a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.fp_to_secure_html",{count:t.fp-t.yourParticipation})))]):t._e()]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.cant_block")))]):a("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.error")))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.fp>0&&t.yourArcBonus>=0&&t.fpTargetReward>0,expression:"(fp > 0) && (yourArcBonus >= 0) && (fpTargetReward > 0)"}],staticClass:"margin-top-one-em"},[a("article",{staticClass:"message",class:{"is-success":t.roi>0,"is-danger":t.roi<0}},[a("div",{staticClass:"message-body has-text-dark"},[t.roi>0?a("p",[t._m(0),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.profit",{count:Math.abs(t.roi)})))]):t.roi<0?a("p",[t._m(1),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.loss",{count:Math.abs(t.roi)})))]):a("p",[t._m(2),t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.roi.neutral")))])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium has-text-success",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium has-text-danger",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-exchange-alt"})])}],!1,null,null,null);l.options.__file="SecurePosition.vue";e.a=l.exports}}]);