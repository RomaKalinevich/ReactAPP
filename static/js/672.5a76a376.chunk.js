"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[672],{5672:function(n,e,s){s.r(e),s.d(e,{default:function(){return D}});var i=s(2807),a=(s(2791),"Dialogs_dialogs__QSFb6"),t="Dialogs_dialogsItem__5BvEh",r="Dialogs_active__HegyQ",o="Dialogs_messages__FIySL",u="Dialogs_message__L6Ra1",d=s(3504),c=s(184),l=function(n){var e="/dialogs"+n.id;return(0,c.jsx)("div",{className:a+" "+r,children:(0,c.jsx)(d.OL,{to:e,children:n.name})})},g=function(n){return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:u,children:n.text})})},m=s(6139),h=s(704),f=s(2911),x=s(5304),j=(0,x.D)(50),p=(0,h.Z)({form:"addDialogsMessage"})((function(n){return(0,c.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(m.Z,{placeholder:"Enter your message",name:"newMessageBody",component:f.gx,validate:[x.C,j]})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"Send"})})]})})),v=function(n){var e=n.dialogsPage,s=e.dialogs.map((function(n){return(0,c.jsx)(l,{name:n.name,id:n.id},n.id)})),i=e.messages.map((function(n){return(0,c.jsx)(g,{text:n.message},n.id)}));return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("div",{className:t,children:s}),(0,c.jsx)("div",{className:o,children:i}),(0,c.jsx)(p,{onSubmit:function(e){n.sendMessage(e.newMessageBody)}})]})},_=s(8687),y=s(5927),D=(0,s(7781).qC)((0,_.$j)((function(n){return{dialogsPage:n.dialogsPage}}),(function(n){return{sendMessage:function(e){n((0,i.XE)(e))}}})),y.D)(v)},5927:function(n,e,s){s.d(e,{D:function(){return g}});var i=s(1413),a=s(5671),t=s(3144),r=s(136),o=s(5716),u=s(6871),d=s(2791),c=s(8687),l=s(184),g=function(n){var e=function(e){(0,r.Z)(d,e);var s=(0,o.Z)(d);function d(){return(0,a.Z)(this,d),s.apply(this,arguments)}return(0,t.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(n,(0,i.Z)({},this.props)):(0,l.jsx)(u.Fg,{to:"/login"})}}]),d}(d.Component);return(0,c.$j)((function(n){return{isAuth:n.auth.isAuth}}))(e)}}}]);
//# sourceMappingURL=672.5a76a376.chunk.js.map