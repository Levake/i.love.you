function _classCallCheck(instance, Constructor) 
{ 
		if (!(instance instanceof Constructor))
		{ 
				throw new TypeError("Cannot call a class as a function");
		} 
}
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

		var audio = new Audio();
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
,'Обожаю'];

var el = document.querySelector('.text');
var fx = new TextScramble(el);

var counter = 0;
var next = function next() {
  if(!(counter == phrases.length - 1))
		{
				fx.setText(phrases[counter]).then(function () {
    
    setTimeout(next, 3500);
  });
				
										counter = (counter + 1) % phrases.length;
		}
		else
		{
				
				let button1 = document.getElementById("div1");
  button1.style.display = 'none';
						
						let button2 = document.getElementById("div2");
  button2.style.display = 'none';
				
				let message1 = document.getElementById("message1");
  message1.style.display = 'flex';
				
				let message2 = document.getElementById("message2");
  message2.style.display = 'flex';
				
				let message3 = document.getElementById("message3");
  message3.style.display = 'flex';
				
				let message4 = document.getElementById("message4");
  message4.style.display = 'flex';
				
				let message5 = document.getElementById("message5");
  message5.style.display = 'flex';
				
				let message6 = document.getElementById("message6");
  message6.style.display = 'flex';
				
				let message7 = document.getElementById("message7");
  message7.style.display = 'flex';
				
				let message8 = document.getElementById("message8");
  message8.style.display = 'flex';
				
				let message9 = document.getElementById("message9");
  message9.style.display = 'flex';
				
				let message10 = document.getElementById("message10");
  message10.style.display = 'flex';
				
				let message11 = document.getElementById("message11");
  message11.style.display = 'flex';
				
				let message12 = document.getElementById("message12");
  message12.style.display = 'flex';
				
				let message13 = document.getElementById("message13");
  message13.style.display = 'flex';
				
				let message14 = document.getElementById("message14");
  message14.style.display = 'flex';
				
				let message15 = document.getElementById("message15");
  message15.style.display = 'flex';
				
		}
};

var playmusic = function playmusic(val)
{
						audio.pause();
		
		if(val == 1)
		{
				audio.src = 'Misuc/music.mp3'; // это локалка, Misuc для гитхаба
 audio.play();
				
				setTimeout(function()
				{
						let button4 = document.getElementById("button2");
  button4.style.display = 'none';
  
  let button1 = document.getElementById("div1");
  button1.style.display = 'flex';
						
						let button2 = document.getElementById("div2");
  button2.style.display = 'flex';
				next();
						
				}, 6000);
		}
		
		if(val == 2)
		{
				audio.src = 'Misuc/music2.mp3'; // это локалка, Misuc для гитхаба
 audio.play();
		}
		
		if(val == 3)
		{
				audio.src = 'Misuc/music3.mp3'; // это локалка, Misuc для гитхаба
 audio.play();
		}
		
		if(val == 4)
		{
				audio.src = 'Misuc/music4.mp3'; // это локалка, Misuc для гитхаба
 audio.play();
		}
		
		if(val == 5)
		{
				audio.src = 'Misuc/music5.mp3'; // это локалка, Misuc для гитхаба
 audio.play();
		}
		
		if(val == 6)
		{
				audio.src = 'Misuc/music6.mp3'; // это локалка, Misuc для гитхаба
 audio.play();
		}
		
}