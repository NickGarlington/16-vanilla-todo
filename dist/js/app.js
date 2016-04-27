(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _Todo = require("./modules/Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var submitButton = document.querySelector("#submitButton");
var toDoArray = [];

submitButton.addEventListener("click", function (createToDoArray) {
  createToDoArray.preventDefault();
  var item = document.querySelector("#todoText").value;
  var todo = new _Todo2.default(item);
  toDoArray.push(todo);
  document.querySelector("#todoText").value = "";
});

},{"./modules/Todo":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
  function Todo(item) {
    _classCallCheck(this, Todo);

    this.item = item;
    this.completed = false;
    this.render();
  }

  _createClass(Todo, [{
    key: "render",
    value: function render() {
      var toDoList = document.querySelector("#toDoList");
      var div = document.createElement("div");
      div.classList.add("items");
      div.textContent = this.item;
      toDoList.appendChild(div);

      //vv this is where brain stopped, should probably be in markComplete() vv
      div.addEventListener("click", function (e) {
        if (this.classList.contains("completed")) {
          this.classList.remove("completed");
        } else {
          this.classList.add("completed");
        }
      });
    }
  }]);

  return Todo;
}();

exports.default = Todo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvVG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7Ozs7OztBQUhBLElBQUksZUFBZSxTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxJQUFJLFlBQVksRUFBaEI7O0FBSUEsYUFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFTLGVBQVQsRUFBMEI7QUFDL0Qsa0JBQWdCLGNBQWhCO0FBQ0EsTUFBSSxPQUFRLFNBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxLQUFoRDtBQUNBLE1BQUksT0FBTyxtQkFBUyxJQUFULENBQVg7QUFDQSxZQUFVLElBQVYsQ0FBZSxJQUFmO0FBQ0EsV0FBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDLEdBQTRDLEVBQTVDO0FBQ0QsQ0FORDs7Ozs7Ozs7Ozs7OztJQ0xNLEk7QUFDSixnQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLLE1BQUw7QUFFRDs7Ozs2QkFFUTtBQUNQLFVBQUksV0FBVyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLFVBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFVBQUksU0FBSixDQUFjLEdBQWQsQ0FBa0IsT0FBbEI7QUFDQSxVQUFJLFdBQUosR0FBa0IsS0FBSyxJQUF2QjtBQUNBLGVBQVMsV0FBVCxDQUFxQixHQUFyQjs7O0FBR0EsVUFBSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFTLENBQVQsRUFBVztBQUN2QyxZQUFHLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsV0FBeEIsQ0FBSCxFQUF3QztBQUN0QyxlQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFdBQXRCO0FBQ0QsU0FGRCxNQUVLO0FBQ0gsZUFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixXQUFuQjtBQUNEO0FBQ0YsT0FORDtBQU9EOzs7Ozs7a0JBS1ksSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdXR0b25cIik7XG5sZXQgdG9Eb0FycmF5ID0gW107XG5cbmltcG9ydCBUb2RvIGZyb20gJy4vbW9kdWxlcy9Ub2RvJztcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihjcmVhdGVUb0RvQXJyYXkpIHtcbiAgY3JlYXRlVG9Eb0FycmF5LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBpdGVtID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1RleHRcIikudmFsdWUpO1xuICBsZXQgdG9kbyA9IG5ldyBUb2RvKGl0ZW0pO1xuICB0b0RvQXJyYXkucHVzaCh0b2RvKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGV4dFwiKS52YWx1ZSA9IFwiXCI7XG59KTtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9MaXN0XCIpO1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gdGhpcy5pdGVtO1xuICAgIHRvRG9MaXN0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvL3Z2IHRoaXMgaXMgd2hlcmUgYnJhaW4gc3RvcHBlZCwgc2hvdWxkIHByb2JhYmx5IGJlIGluIG1hcmtDb21wbGV0ZSgpIHZ2XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKXtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdfQ==
