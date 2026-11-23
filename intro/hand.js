// 滑動手勢提示：一段時間沒操作就示範一次滑動，碰到畫面就消失
(function(){
  var C=window.HAND||{}; var el=document.querySelector(C.target); if(!el) return;
  var css=document.createElement('style');
  css.textContent='.hand{position:fixed;z-index:50;width:54px;height:54px;margin:-14px 0 0 -14px;pointer-events:none;opacity:0}'+
   '.hand .dot{position:absolute;left:0;top:0;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.85);box-shadow:0 0 0 6px rgba(255,255,255,.35),0 3px 10px rgba(120,40,50,.35)}'+
   '.hand svg{position:absolute;left:8px;top:6px;width:44px;height:44px;filter:drop-shadow(0 3px 5px rgba(80,30,40,.35))}';
  document.head.appendChild(css);
  var h=document.createElement('div'); h.className='hand';
  h.innerHTML='<div class="dot"></div><svg viewBox="0 0 48 48"><path d="M17 26V9.5a3.5 3.5 0 0 1 7 0V22l1-.2V18a3.3 3.3 0 0 1 6.6 0v4.2l1 .1v-2.3a3.2 3.2 0 0 1 6.4 0V31c0 7-4.6 12-11.5 12h-3.2c-3.6 0-6.4-1.5-8.6-4.6L9 31.5c-1.3-1.9-.8-4.2 1-5.3 1.7-1 3.8-.6 5 1z" fill="#fff" stroke="#A9484E" stroke-width="2" stroke-linejoin="round"/></svg>';
  document.body.appendChild(h);
  var t=null, anim=null, touched=false, DONE=false, SEEN=false;
  function play(){
    var done=document.body.classList.contains('done')||(C.isDone&&C.isDone());
    if(done && !SEEN){ SEEN=true; sched(2500); return; }
    var r=el.getBoundingClientRect(), d=(C.dir?C.dir():1)||1, len=Math.min(130,r.width*.34);
    if(done) d=C.rev?C.rev():-d;
    var cx=done&&C.revX!=null ? r.left+r.width*C.revX+d*len/2 : r.left+r.width/2;
    var x0=cx-d*len/2, y=r.top+r.height*(C.y||.55), x1=x0+d*len;
    if(C.path){ var q=C.path(); x0=r.left+r.width*q[0]; y=r.top+r.height*q[1]; x1=r.left+r.width*q[2]; }
    var dx=x1-x0, dy=0;
    if(C.vpath && !done){ var v=C.vpath(); if(v){ x0=v[0]; y=v[1]; dx=0; dy=v[2]-v[1]; } }  // 往下拉的提示
    DONE=done;
    h.style.left=x0+'px'; h.style.top=y+'px';
    anim=h.animate([
      {opacity:0,transform:'translate(0,0) scale(1.15)'},
      {opacity:1,transform:'translate(0,0) scale(1)',offset:.15},
      {opacity:1,transform:'translate('+dx+'px,'+dy+'px) scale(1)',offset:.7},
      {opacity:0,transform:'translate('+dx+'px,'+dy+'px) scale(1)'}],
      {duration:1500,iterations:done?2:3,easing:'ease-in-out'});
    anim.onfinish=function(){ sched(DONE?6000:2500); };
  }
  function stop(){ clearTimeout(t); if(anim){ anim.cancel(); anim=null; } h.style.opacity=0; }
  function sched(ms){ clearTimeout(t); t=setTimeout(play,ms); }
  addEventListener('pointerdown',function(){ touched=true; stop(); },true);
  addEventListener('pointerup',function(){ sched(1200); },true);
  window.HANDKICK=function(ms){ sched(ms||1500); };
  sched(C.first||1000);
})();
