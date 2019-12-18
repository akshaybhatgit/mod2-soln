// (function () {
// 'use strict';
//
// angular.module('ShoppingListCheckOff', [])
//
// .controller('ToBuyController', ToBuyController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
//
// ToBuyController.$inject = ['ShoppingListCheckOffService'];
// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//
// function ToBuyController(ShoppingListCheckOffService) {
//   var buylist = this;
//
//   buylist.items = ShoppingListCheckOffService.getItems();
//
//   buylist.removeItem = function (itemIndex) {
// try {
//   ShoppingListCheckOffService.removeItem(itemIndex);
// } catch(error) {
//   buylist.Message = error.message;
//
// }
//
//     };
//
//
// }
// function AlreadyBoughtController(ShoppingListCheckOffService) {
//   var boughtList = this;
//   boughtList.bought = ShoppingListCheckOffService.getboughtItems();
// }
//
//
// function ShoppingListCheckOffService() {
//   var service = this;
//
//   // List of shopping items
//   var bought = [];
//
//   var items = [{"name": "Cake", "quantity": "10"},
// {"name": "Chips", "quantity": "20"},
// {"name": "Cookies", "quantity": "50"},
// {"name": "CupCake", "quantity": "70"},
// {"name": "Icecream", "quantity": "10"},
// {"name": "Halwa", "quantity": "100"}];
//
//
//   service.removeItem = function (itemIdex) {
//     var item = {
//        name: items[itemIdex].name,
//        quantity:items[itemIdex].quantity
//      };
//
//      bought.push(item);
//
//       items.splice(itemIdex, 1);
//      if(items.length==0)
//       {
// throw new Error("Everything is bought!");
//    }
//   };
//
//   service.getItems = function () {
//     return items;
//   };
//   service.getboughtItems = function () {
//
//     return bought;
//   };
// }
//
// })();
!function(){"use strict";function t(t){var e=this;e.items=t.getItems(),e.removeItem=function(n){try{t.removeItem(n)}catch(t){e.Message=t.message}}}function e(t){this.bought=t.getboughtItems()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var t=[],e=[{name:"Cake",quantity:"10"},{name:"Chips",quantity:"20"},{name:"Cookies",quantity:"50"},{name:"CupCake",quantity:"70"},{name:"Icecream",quantity:"10"},{name:"Halwa",quantity:"100"}];this.removeItem=function(n){var i={name:e[n].name,quantity:e[n].quantity};if(t.push(i),e.splice(n,1),0==e.length)throw new Error("Everything is bought!")},this.getItems=function(){return e},this.getboughtItems=function(){return t}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
