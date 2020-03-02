
          window.__NEXT_REGISTER_PAGE('/roadmap', function() {
            var comp = module.exports=webpackJsonp([39],{118:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),n=r(l),o=a(67),s=r(o),d=[{title:"Quarter 3, 2019",description:'<a href="https://paycent.com/">Paycent</a> Partnership<br><a href="https://www.xceltrip.com/">XcelTrip</a> Partnership<br><a href="https://www.xcelpay.io/">XcelPay</a> Partnership<br>iOS Update v1.1.1<br><a href="https://www.abra.com/">Abra</a> adds Verge support to their platform.<br><A href="https://nowpayments.io/">NowPayments</a> and <a href="https://nownodes.io/">NowNodes</a> integrate Verge into their platform.<br>'},{title:"Quarter 4, 2019",description:"Verge added to EviEx & BitNovo Exchanges"},{title:"Quarter 1, 2020",description:""},{title:"Quarter 2, 2020",description:"TBD!"}];t.default=function(e){var t=e.start,a=void 0===t?0:t,r=e.maxLength,l=void 0===r?d.length:r;return d.slice(a,a+l).map(function(e){return n.default.createElement("li",{className:"roadmap__item roadmap__item--"+(e.done?"done":"planned")},n.default.createElement("h3",null,e.title),e.description," ",n.default.createElement("br",null),e.done?n.default.createElement("div",{className:"roadmap-update-progress"},n.default.createElement("span",null,"Released")," ",n.default.createElement("div",{className:"progress progress-text"},e.doneDate)):n.default.createElement(s.default,{percentage:e.progress,text:e.progressState}))})}},413:function(e,t,a){e.exports=a(414)},414:function(e,t,a){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.t;return o.default.createElement(u.default,null,o.default.createElement(d.default,null,o.default.createElement("title",{key:"title"},t("common:meta.roadmap.title",{defaultValue:"Roadmap - VergeCurrency.com"}))),o.default.createElement("div",{className:"roadmap"},o.default.createElement("div",{className:"themed-container__gray themed-container__gray--roadmap"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row center-xs roadmap"},o.default.createElement("div",{className:"col-xs-11 col-sm-8 col-lg-6 start-xs center-sm"},o.default.createElement("h6",null,t("roadmap:body.title",{defaultValue:"Roadmap"})),o.default.createElement("h2",{dangerouslySetInnerHTML:{__html:t("roadmap:body.text1",{defaultValue:"A roadmap with great features to come.<br /> Join us while we're still growing!"})}}),o.default.createElement("p",null,t("roadmap:body.text2",{defaultValue:"As an open-source community and volunteer-driven project, our roadmap is meant as a general guideline for how we are developing Verge into one of the best cryptocurrency options out there."})),o.default.createElement("p",null,t("roadmap:body.text3",{defaultValue:"In the spirit of transparency and in good faith to the community, we want this roadmap to be made public. However, please keep in mind that this roadmap is subject to change based on priorities, unplanned developments and new ideas."})),o.default.createElement("div",{className:"row start-xs center-sm pt"},o.default.createElement("div",{className:"col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs"},o.default.createElement("ul",{className:"roadmap__timeline"},o.default.createElement("li",{className:"roadmap__year roadmap__year--current"},o.default.createElement("span",null)),o.default.createElement(h.default,null),o.default.createElement("li",{className:"roadmap__year roadmap__year--next"},o.default.createElement("span",null)))))))))))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=r(n),s=a(8),d=r(s),c=a(2),u=r(c),i=a(7),m=a(9),p=r(m),f=a(118),h=r(f),g=(0,i.translate)(["common","roadmap"],{i18n:p.default,wait:e.browser})(l);t.default=g}).call(t,a(6))},67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){var t=e.size,a=void 0===t?25:t,r=e.percentage,n=e.text,o=r/100;return l.default.createElement("div",{className:"roadmap-update-progress"},l.default.createElement("svg",{className:"progress",width:a,height:a,viewBox:"0 0 120 120"},l.default.createElement("circle",{className:"progress__meter",cx:"60",cy:"60",r:"54",strokeWidth:"12"}),l.default.createElement("circle",{className:"progress__value",cx:"60",cy:"60",r:"54",strokeWidth:"12",style:{strokeDashoffset:2*Math.PI*54*(1-o),strokeDasharray:2*Math.PI*54}})),l.default.createElement("p",{className:"progress progress-text"},r,"% - ",n))}}},[413]);
            return { page: comp.default }
          })
        