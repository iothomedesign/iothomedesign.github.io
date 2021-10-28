// var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
// 			var container, stats;
// 			var camera, scene, renderer;
// 			var particles, particle, count = 0;
// 			var mouseX = 0, mouseY = 0;
// 			var windowHalfX = window.innerWidth / 2;
// 			var windowHalfY = window.innerHeight / 2;
// 			init();
// 			animate();
// 			function init() {
// 				container = document.createElement('div',{  id: "particles", class: "particles"});
        
//  document.getElementById('homepage-hero').appendChild( container );
// 				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
// 				camera.position.z = 1000;
// 				scene = new THREE.Scene();
// 				particles = new Array();
// 				var PI2 = Math.PI * 2;
// 				var material = new THREE.SpriteCanvasMaterial( {
// 					//color: 0x3f6e86,
//          color: 0x49c5b1,
//           // color: 0xffffff,
// 					program: function ( context ) {
// 						context.beginPath();
// 						context.arc( 0, 0, 0.2, 0, PI2, true );
// 						context.fill();
// 					}
// 				} );
// 				var i = 0;
// 				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
// 					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
// 						particle = particles[ i ++ ] = new THREE.Sprite( material );
// 						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
// 						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
//            // scene.background = new THREE.Color( 0x254a5d ); // UPDATED
// 						scene.add( particle );
// 					}
// 				}
// 				renderer = new THREE.CanvasRenderer();
// 				renderer.setPixelRatio( window.devicePixelRatio );
//         renderer = new THREE.CanvasRenderer( { alpha: true }); // gradient
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 				container.appendChild( renderer.domElement );
// 				//stats = new Stats();
// 				//container.appendChild( stats.dom );
// 				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
// 				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
// 				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
// 				//
// 				window.addEventListener( 'resize', onWindowResize, false );
// 			}
// 			function onWindowResize() {
// 				windowHalfX = window.innerWidth / 2;
// 				windowHalfY = window.innerHeight / 2;
// 				camera.aspect = window.innerWidth / window.innerHeight;
// 				camera.updateProjectionMatrix();
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 			}
// 			//
// 			function onDocumentMouseMove( event ) {
// 				mouseX = event.clientX - windowHalfX;
// 				mouseY = event.clientY - windowHalfY;
// 			}
// 			function onDocumentTouchStart( event ) {
// 				if ( event.touches.length === 1 ) {
// 					event.preventDefault();
// 					mouseX = event.touches[ 0 ].pageX - windowHalfX;
// 					mouseY = event.touches[ 0 ].pageY - windowHalfY;
// 				}
// 			}
// 			function onDocumentTouchMove( event ) {
// 				if ( event.touches.length === 1 ) {
// 					event.preventDefault();
// 					mouseX = event.touches[ 0 ].pageX - windowHalfX;
// 					mouseY = event.touches[ 0 ].pageY - windowHalfY;
// 				}
// 			}
// 			//
// 			function animate() {
// 				requestAnimationFrame( animate );
// 				render();
// 				//stats.update();
       
// 			}
// 			function render() {
// 				camera.position.x += ( mouseX - camera.position.x ) * .05;
// 				camera.position.y += ( - mouseY - camera.position.y ) * .05;
// 				camera.lookAt( scene.position );
// 				var i = 0;
// 				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
// 					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
// 						particle = particles[ i++ ];
// 						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
// 							( Math.sin( ( iy + count ) * 0.5 ) * 50 );
// 						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
// 							( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
// 					}
// 				}
        
// 				renderer.render( scene, camera );
// 				count += 0.1;
// 			}
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

// class TextScramble {
//     constructor(el) {
//       this.el = el
//       this.chars = '!<>-_\\/[]{}—=+*^?#________'
//       this.update = this.update.bind(this)
//     }
//     setText(newText) {
//       const oldText = this.el.innerText
//       const length = Math.max(oldText.length, newText.length)
//       const promise = new Promise((resolve) => this.resolve = resolve)
//       this.queue = []
//       for (let i = 0; i < length; i++) {
//         const from = oldText[i] || ''
//         const to = newText[i] || ''
//         const start = Math.floor(Math.random() * 40)
//         const end = start + Math.floor(Math.random() * 40)
//         this.queue.push({ from, to, start, end })
//       }
//       cancelAnimationFrame(this.frameRequest)
//       this.frame = 0
//       this.update()
//       return promise
//     }
//     update() {
//       let output = ''
//       let complete = 0
//       for (let i = 0, n = this.queue.length; i < n; i++) {
//         let { from, to, start, end, char } = this.queue[i]
//         if (this.frame >= end) {
//           complete++
//           output += to
//         } else if (this.frame >= start) {
//           if (!char || Math.random() < 0.28) {
//             char = this.randomChar()
//             this.queue[i].char = char
//           }
//           output += `<span class="dud">${char}</span>`
//         } else {
//           output += from
//         }
//       }
//       this.el.innerHTML = output
//       if (complete === this.queue.length) {
//         this.resolve()
//       } else {
//         this.frameRequest = requestAnimationFrame(this.update)
//         this.frame++
//       }
//     }
//     randomChar() {
//       return this.chars[Math.floor(Math.random() * this.chars.length)]
//     }
//   }
  
//   // ——————————————————————————————————————————————————
//   // Example
//   // ——————————————————————————————————————————————————
  
//   const phrases = [
//     '我是谁,',
//     'sooner or later',
//     '你睡 going to realize',
//     'just as I did',
//     '卧室\'s a difference',
//     'between knowing the path',
//     'and walking the path'
//   ]
  
//   const el = document.querySelector('.text1')
//   const fx = new TextScramble(el)
  
//   let counter = 0
//   const next = () => {
//     fx.setText(phrases[counter]).then(() => {
//       setTimeout(next, 800)
//     })
//     counter = (counter + 1) % phrases.length
//   }
  
//   next()

$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

"use strict";
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);