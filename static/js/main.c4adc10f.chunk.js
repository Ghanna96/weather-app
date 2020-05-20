(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(1),l=a.n(i),s=a(4),m=a(5),u=a(6),p=a(8),h=a(7);a(15);var d=function(e){var t=e.onChange,a=e.onSubmit;return r.a.createElement("form",{className:"flexbox",onSubmit:a},r.a.createElement("input",{className:"textbox",type:"search",placeholder:"Location",onChange:t}))};var v=function(e){return r.a.createElement(d,{onSubmit:e.onSubmit,onChange:e.onChange})};var f=function(e){var t="https://openweathermap.org/img/wn/".concat(e.icon,"@2x.png");return r.a.createElement("span",null,r.a.createElement("img",{src:t,alt:""}))};var E=function(e){var t=e.data,a=t.location,n=t.weather,c=t.temp,o=t.min,i=t.max,l=t.feels,s=t.icon,m=t.humidity,u=t.pressure,p=t.wind;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"location"},r.a.createElement("span",null,a," ")),r.a.createElement("div",{className:"weather"},r.a.createElement("span",null,r.a.createElement(f,{icon:s})),r.a.createElement("span",null," ",n)),r.a.createElement("div",{className:"temp"},r.a.createElement("div",null," ",c," \xb0C"),r.a.createElement("span",null,"Feels like ",l," \xb0C")),r.a.createElement("div",{className:"minmax"},r.a.createElement("span",null,"Max: ",i," \xb0C"),r.a.createElement("span",null,"Min: ",o," \xb0C")),r.a.createElement("div",{className:"details"},r.a.createElement("span",null,"Humidity: ",m," % "),r.a.createElement("span",null,"Pressure: ",u," hpa"),r.a.createElement("span",null,"Wind: ",p," m/s")))},w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={location:"",json:[],actualData:[]},e.getData=function(){var t={location:"",weather:"",temp:"",max:"",min:"",feels:"",icon:"",humidity:"",pressure:"",wind:""},a=e.state.json;t.location=a.name,t.weather=a.weather[0].description,t.icon=a.weather[0].icon,t.temp=Math.round(a.main.temp),t.max=Math.round(a.main.temp_max),t.min=Math.round(a.main.temp_min),t.feels=Math.round(a.main.feels_like),t.humidity=a.main.humidity,t.pressure=a.main.pressure,t.wind=a.wind.speed,e.setState({actualData:t}),console.log("obj ",t)},e.getApi=function(){var t=Object(s.a)(l.a.mark((function t(a){var n,r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a||e.state.location,t.prev=1,n="https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&units=metric&appid=73bb57b7d1fab98dc011bd2055bf4c84"),t.next=5,fetch(n,{mode:"cors"});case 5:return c=t.sent,t.next=8,c.json();case 8:o=t.sent,e.setState({json:o}),e.getData(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}(),e.locationInput=function(t){var a=e.state.location;a=t.target.value,e.setState({location:a})},e.handleSubmit=function(t){t.preventDefault(),e.getApi(),console.log(e.state.actualData)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getApi("Milano")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h3",{className:""},"Weather App")),r.a.createElement(v,{onChange:this.locationInput,onSubmit:this.handleSubmit}),r.a.createElement(E,{data:this.state.actualData,icon:this.state.actualData.icon}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c4adc10f.chunk.js.map