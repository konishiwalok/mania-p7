(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-041a0ec0"],{"173a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-vh-100 d-flex flex-column justify-content-between"},[s("NavbarPost"),s("h1",{staticClass:"listeuti"},[t._v("Le team de Groupomania")]),s("hr",{staticClass:"line w-100 mt-1 mb-0 p-0"}),t._m(0),t._l(t.users,(function(e){return s("AllProfiles",{key:e.id,scopedSlots:t._u([{key:"AllUsers",fn:function(){return[s("div",{staticClass:"row"},[s("span",{staticClass:"col-1 text-white font-weight-bold px-0 my-auto"},[t._v(t._s(e.id))]),s("b-img-lazy",{staticClass:"col-2 my-auto py-2",attrs:{id:"imgProfile",src:e.imageUrl}}),s("span",{staticClass:"col-1 text-white font-weight-bold px-0 my-auto"},[t._v(t._s(e.pseudo))]),s("span",{staticClass:"col-4 text-white font-weight-bold px-0 my-auto"},[t._v(t._s(e.email))]),s("span",{staticClass:"col-1 text-white font-weight-bold px-0 my-auto"},[t._v(t._s(e.isAdmin))]),s("span",{staticClass:"col-2 text-white font-weight-bold px-0 my-auto"},[t._v(t._s(e.createdAt.substr(0,10).split("-").reverse().join("-")))]),s("button",{staticClass:"col-1 badge badge-danger font-weight-bold my-auto",on:{click:function(s){return s.preventDefault(),t.deleteUser(e.id)}}},[t._v(" Erase ")]),t.confirmDelete?s("b-alert",{attrs:{show:"",dismissible:"",variant:"success"}},[t._v("Profil supprimé")]):t._e(),t.errorDelete?s("b-alert",{attrs:{show:"",dismissible:"",variant:"danger"}},[t._v("Une erreur est survenue.")]):t._e()],1)]},proxy:!0}],null,!0)})})),s("Footer")],2)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col col-md-8 mx-auto"},[s("div",{staticClass:"row mx-0 py-2 border rounded bg-primary"},[s("span",{staticClass:"col-1  font-weight-bold px-0 my-auto"},[t._v("ID")]),s("span",{staticClass:"col-2  font-weight-bold px-0 my-auto"},[t._v("PHOTO")]),s("span",{staticClass:"col-1  font-weight-bold px-0 my-auto"},[t._v("PSEUDO")]),s("span",{staticClass:"col-4  font-weight-bold px-0 my-auto"},[t._v("EMAIL")]),s("span",{staticClass:"col-1  font-weight-bold px-0 my-auto"},[t._v("ADMIN")]),s("span",{staticClass:"col-2  font-weight-bold px-0 my-auto"},[t._v("CRÉÉ LE")])])])}],n=s("1da1"),r=(s("d3b7"),s("96cf"),s("77a4")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row mx-auto"},[s("div",{staticClass:"col col-md-8 mx-auto border rounded mimania"},[t._t("AllUsers")],2)])])},l=[],c={name:"AllUsers",data:function(){return{}}},u=c,d=(s("a13f"),s("2877")),f=Object(d["a"])(u,i,l,!1,null,"bd154c46",null),p=f.exports,m=s("fd2d"),h=s("bc3a"),w=s.n(h),b={name:"AllUsers",components:{NavbarPost:r["a"],AllProfiles:p,Footer:m["a"]},data:function(){return{userId:parseInt(localStorage.getItem("userId")),users:[],user:{id:"",pseudo:"",email:"",imageUrl:"",createdAt:"",isAdmin:"",confirmDelete:!1,errorDelete:!1}}},beforeCreate:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("http://localhost:3000/api/users",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){t.users=e.data,console.log(e)})).catch((function(e){console.log(e+"User inconnu ou Users indisponibles"),t.$router.push("/allpost")}));case 2:case"end":return e.stop()}}),e)})))()},methods:{deleteUser:function(t){var e=this;w.a.delete("http://localhost:3000/api/users/"+t,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(){e.confirmDelete=!0})).catch((function(t){console.log("cannot delete user "+t),e.errorDelete=!0})).finally((function(){e.$router.go()}))}}},v=b,g=(s("226a"),Object(d["a"])(v,a,o,!1,null,"419e8231",null));e["default"]=g.exports},"226a":function(t,e,s){"use strict";s("6c19")},"6c19":function(t,e,s){},"81fd":function(t,e,s){},a13f:function(t,e,s){"use strict";s("81fd")}}]);
//# sourceMappingURL=chunk-041a0ec0.c04b9a5c.js.map