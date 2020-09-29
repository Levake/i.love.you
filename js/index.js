'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

var TextScramble = function () {
  function TextScramble(el) {
    _classCallCheck(this, TextScramble);

    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_0987654321';
    this.update = this.update.bind(this);
  }

  TextScramble.prototype.setText = function setText(newText) {
    var _this = this;

    var oldText = this.el.innerText;
    var length = Math.max(oldText.length, newText.length);
    var promise = new Promise(function (resolve) {
      return _this.resolve = resolve;
    });
    this.queue = [];
    for (var i = 0; i < length; i++) {
      var from = oldText[i] || '';
      var to = newText[i] || '';
      var start = Math.floor(Math.random() * 40);
      var end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from: from, to: to, start: start, end: end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  };

  TextScramble.prototype.update = function update() {
    var output = '';
    var complete = 0;
    for (var i = 0, n = this.queue.length; i < n; i++) {
      var _queue$i = this.queue[i];
      var from = _queue$i.from;
      var to = _queue$i.to;
      var start = _queue$i.start;
      var end = _queue$i.end;
      var char = _queue$i.char;

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += '<span class="dud">' + char + '</span>';
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  TextScramble.prototype.randomChar = function randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  };

  return TextScramble;
}();

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

var phrases = ['Я 🙂'
,'люблю тебя. ♥️'
,'Это всего лишь год, 🕓'
,'каких-то 365 дней 📅'
,'мы справимся. 😚'
,'Правда? 🤗'
,'Не плачь. 😔'
,'Тебе не идут слёзы, 😥'
,'кроме слёз радости, 😂'
,'помнишь? 🤭'
,'Самое главной не забывай 🙃'
,'меня и наши воспоминания. ✨'
,'Это наше всё... 🥺'
,'на данный момент. 🙄'
,'И вот я вернусь 🚂'
,'и начнём с чистого листа. 📝'
,'Если ты захочешь. 🥰'
,'Ну а сейчас, 😘'
,'я там, ты тут. 😔'
,'Вроде расстояние, 🌏'
,'но всё равно я чувствую, 💕'
,'тебя рядом. 😉'
,'Ну, а это сообщение, 💌'
,'будет повторяться, 🔄'
,'бесконечно. 🔃'
,'А всё потому что... ❣️'];

var el = document.querySelector('.text');
var fx = new TextScramble(el);

var counter = 0;
var next = function next() {
  fx.setText(phrases[counter]).then(function () {
    setTimeout(next, 2500);
  });
  counter = (counter + 1) % phrases.length;
};

var onclick = function onclick() 
{
  let button = document.getElementById("button");
  button.style.display = 'none';
  
  let button4 = document.getElementById("button2");
  button4.style.display = 'none';
  
  let button1 = document.getElementById("div1");
  button1.style.display = 'flex';
  
  let button2 = document.getElementById("div2");
  button2.style.display = 'flex';
  
  var audio = new Audio();
  audio.src = 'misuc/music.mp3';
  audio.play();
  
  next();
}