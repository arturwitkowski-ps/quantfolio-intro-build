(this["webpackJsonpintro-project"]=this["webpackJsonpintro-project"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(7),s=n.n(r),i=(n(14),n(9)),a=n(2),l=n.p+"static/media/logo-bright.1ab74d6b.png",u={EUR:"EUR",NOK:"NOK",USD:"USD"},d=["red","yellow","green","royalblue","aqua","hotpink","darkblue"],j="https://apps.lukaszpiotrkowski.pl/stockapp/",h=function(t,e,n){return fetch("".concat(j,"/time_series?stocks=").concat(t.join(),"&currency=").concat(e)).then((function(t){return t.json()})).then((function(t){return function(t,e){var n=[];return t.forEach((function(t){var c=[new Date(t.recorded).getTime(),t.open,t.high,t.low,t.close],o=n.find((function(e){return e._id===t.stock_id}));if(o)o.data.push(c);else{var r=e.find((function(e){return e.id===t.stock_id}));n.push({data:[c],name:r.name,color:d[t.stock_id-1],turboThreshold:2e4,_id:t.stock_id})}})),n}(t,n)}))},b=(n(15),n(16),n(0)),f=function(t){var e=t.stocksInfo,n=t.zoom;return Object(b.jsxs)("section",{className:"stocks",children:[Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"Stock"}),Object(b.jsx)("td",{children:"CAGR"}),Object(b.jsx)("td",{children:"Sharpe"})]})}),Object(b.jsx)("tbody",{children:e?e.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{className:"stock-circle",style:{backgroundColor:d[t.id-1]}})}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:"".concat(t[n].cagr,"%")}),Object(b.jsx)("td",{children:t[n].sharpe})]},"stockTable-".concat(t.id))})):null})]}),e?"":Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("h3",{children:"Loading..."})})]})},O=(n(18),function(t){var e=t.stocksInfo,n=t.selectedStocks,c=t.toggleStock,o=t.highlightStock;return Object(b.jsx)("section",{className:"legend",children:e?e.map((function(t){var e=t.name,r=t.id,s=t.symbol;return Object(b.jsxs)("div",{className:"legend-stock".concat(n.includes(s)?"":" legend-stock--hidden"),onClick:function(){return c(s)},onMouseEnter:function(){return o(e,"hover")},onMouseLeave:function(){return o(e,"normal")},children:[Object(b.jsx)("div",{className:"stock-circle",style:{backgroundColor:d[r-1]}}),Object(b.jsx)("div",{className:"legend-text",children:e})]},"stockLegend-".concat(r))})):Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("h3",{children:"Loading..."})})})}),g=n(6),p=n.n(g),x=n(8),k=n.n(x);n(20);p.a.setOptions({lang:{rangeSelectorZoom:"Period"}});var m=function(t){var e=t.highchartsConfig,n=t.chartComponent,c=t.changeCurrency,o=t.selectedCurrency;return Object(b.jsxs)("section",{className:"chart",children:[Object(b.jsx)(k.a,{highcharts:p.a,constructorType:"stockChart",options:e,ref:n}),Object(b.jsx)("div",{className:"currency",children:Object.values(u).map((function(t){return Object(b.jsx)("div",{className:"currency-button".concat(o===t?" currency-button--selected":""),onClick:function(){return c(t)},children:t},t)}))})]})},y=function(){var t=Object(c.useRef)(null),e=Object(c.useState)([]),n=Object(a.a)(e,2),o=n[0],r=n[1],s=Object(c.useState)(),d=Object(a.a)(s,2),g=d[0],p=d[1],x=Object(c.useState)(!1),k=Object(a.a)(x,2),y=k[0],v=k[1],S=Object(c.useState)("1y"),C=Object(a.a)(S,2),F=C[0],N=C[1],w=Object(c.useState)(u.USD),E=Object(a.a)(w,2),D=E[0],L=E[1],T=Object(c.useState)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return{series:[],chart:{type:"ohlc",backgroundColor:"transparent",style:{color:"#FFF"},panning:{enabled:!1}},tooltip:{split:!1},xAxis:{labels:{style:{color:"#FFF"}},title:{style:{color:"#FFF"}}},yAxis:{lineColor:"#DDD",labels:{style:{color:"#FFF"}},title:{style:{color:"#FFF"}}},scrollbar:{enabled:!1},navigator:{enabled:!1},credits:{enabled:!1},rangeSelector:{inputEnabled:!1,allButtonsEnabled:!0,labelStyle:{color:"white"},buttons:[{type:"year",count:1,text:"1Y",dataGrouping:{units:[["day",[1]]]},events:{click:function(){return t("1y")}}},{type:"year",count:5,text:"5Y",dataGrouping:{units:[["day",[1]]]},events:{click:function(){return t("5y")}}},{type:"all",text:"MAX",dataGrouping:{units:[["day",[1]]]},events:{click:function(){return t("max")}}}],buttonTheme:{width:40},selected:0}}}(N)),_=Object(a.a)(T,2),I=_[0],A=_[1],U=Object(c.useCallback)((function(t,e){g&&(G(!0),h(t,e,g).then((function(t){A({series:t})})).catch((function(t){return console.log(t)})).finally((function(){return G(!1)})))}),[g]),G=function(e){e?t.current.chart.showLoading():t.current.chart.hideLoading(),v(e)};return Object(c.useEffect)((function(){fetch("".concat(j,"/stocks?period=1,5,max")).then((function(t){return t.json()})).then((function(t){t.sort((function(t,e){return t.id>e.id})),p(t)})).catch((function(t){return console.log(t)}))}),[]),Object(b.jsxs)("div",{className:"introProject",children:[Object(b.jsx)("header",{children:Object(b.jsx)("img",{src:l,alt:"Quantfol.io logo"})}),Object(b.jsxs)("main",{children:[Object(b.jsx)(m,{highchartsConfig:I,chartComponent:t,changeCurrency:function(t){L(t),U(o,t)},selectedCurrency:D}),Object(b.jsx)(O,{stocksInfo:g,selectedStocks:o,toggleStock:function(t){y||r((function(e){var n=e.indexOf(t),c=Object(i.a)(e);return-1!==n?c.splice(n,1):c.push(t),U(c,D),c}))},highlightStock:function(e,n){if(0!==o.length){var c=t.current.chart.series.find((function(t){return t.name===e}));c&&c.points.forEach((function(t){t.setState(n)}))}}}),Object(b.jsx)(f,{stocksInfo:g,zoom:F})]})]})},v=(n(21),function(){return Object(b.jsx)("div",{id:"App",children:Object(b.jsx)(y,{})})}),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),r(t),s(t)}))};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),S()}],[[22,1,2]]]);
//# sourceMappingURL=main.7b92dae3.chunk.js.map