(function(){
var cover=document.getElementById('cover'),on=false;
document.getElementById('open').onclick=function(){cover.classList.add('open');setTimeout(function(){cover.style.display='none'},1900);setTimeout(go,900)};
function go(){if(on)return;on=true;
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.3});
 document.querySelectorAll('.in').forEach(function(el){io.observe(el)})}
var T=Date.UTC(2026,10,14,5,30);
function tick(){var s=Math.max(0,Math.floor((T-Date.now())/1000));
 var v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
 ['dd','hh','mm','ss'].forEach(function(id,i){document.getElementById(id).textContent=v[i]})}
tick();setInterval(tick,1000);
// twinkling gold sparkles
var cv=document.getElementById('c'),x=cv.getContext('2d'),W,H,st=[],d=devicePixelRatio||1;
function rs(){W=cv.width=innerWidth*d;H=cv.height=innerHeight*d}rs();addEventListener('resize',rs);
for(var i=0;i<60;i++)st.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.8,p:Math.random()*6,s:.01+Math.random()*.03,v:.00004+Math.random()*.00012});
function draw(){x.clearRect(0,0,W,H);
 st.forEach(function(s){s.p+=s.s;s.y-=s.v;if(s.y<-.02)s.y=1.02;
  x.globalAlpha=.15+.75*Math.abs(Math.sin(s.p));x.fillStyle='#dcbb7c';x.beginPath();x.arc(s.x*W,s.y*H,s.r*d,0,6.283);x.fill()});
 requestAnimationFrame(draw)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)draw();
})();
