(this["webpackJsonpgoit-react-hw-02feedback"]=this["webpackJsonpgoit-react-hw-02feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={section:"Feedback_section__2onwQ",container:"Feedback_container__2WYc2",title:"Feedback_title__3MkJG",button:"Feedback_button__2BYXU",message:"Feedback_message__1eQ95"}},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(5),i=a.n(s),o=(a(15),a(6)),r=a(7),l=a(8),b=a(10),d=a(9),u=a(3),j=a.n(u),h=a(0),m=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:j.a.liItem,children:["Good: ",t]}),Object(h.jsxs)("li",{className:j.a.liItem,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:j.a.liItem,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:j.a.liItem,children:["Total: ",n]}),Object(h.jsxs)("li",{className:j.a.liItem,children:["Positive feedback: ",s]})]})})},k=a(1),O=a.n(k),f=function(e){var t=e.onLeaveFeedback,a=e.name;return Object(h.jsx)("div",{children:a.map((function(e,a){return Object(h.jsx)("button",{type:"button",onClick:t,name:e,className:O.a.button,children:e},a)}))})},v=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:O.a.title,children:t}),a]})},g=function(e){var t=e.message;return Object(h.jsx)("p",{className:O.a.message,children:t})},x=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.buttonFeedback=function(t){e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(this.state.good/this.countTotalFeedback()*100)+"%"}},{key:"render",value:function(){return Object(h.jsx)("section",{className:O.a.section,children:Object(h.jsxs)("div",{className:O.a.container,children:[Object(h.jsx)(v,{title:"PLease leave feedback",children:Object(h.jsx)(f,{onLeaveFeedback:this.buttonFeedback,name:Object.keys(this.state)})}),Object(h.jsx)(v,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(g,{message:"No feedback given"})})]})})}}]),a}(n.a.Component),_=x;a(17);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={liItem:"Statistics_liItem__1zYdg"}}},[[18,1,2]]]);
//# sourceMappingURL=main.8114cb15.chunk.js.map