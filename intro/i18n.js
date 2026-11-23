// 開場動畫的緬文翻譯：網址有 ?l=my，或外層喜帖目前是緬文時自動換成緬文
(function(){
  var my=false;
  try{ my = /[?&]l=my\b/.test(location.search) || (window.parent!==window && window.parent.LANG==='my'); }catch(e){}
  if(!my) return;
  var MY={
    // 共用
    '看喜帖 ↓':'ဖိတ်စာ ကြည့်ရန် ↓',
    '看其他開場 ↻':'အခြား အဖွင့်များ ကြည့်ရန် ↻',
    '用手指滑一下，或點一下也可以喔':'လက်ဖြင့် ပွတ်ဆွဲပါ၊ သို့မဟုတ် တစ်ချက် နှိပ်ပါ',
    // 嫁了娶了
    '咦？好像拿反了！':'ဟင်… ပြောင်းပြန် ကိုင်မိနေသလိုပဲ!',
    '幫我們換回來 ♡':'ကျွန်ုပ်တို့ကို ပြန်လဲပေးပါ ♡',
    '剛剛那樣才是對的！':'ခုနက ပုံစံက မှန်တာပါ!',
    '新娘不服氣？滑回去換她娶 ↻':'သတို့သမီး မကျေနပ်ဘူးလား? ပြန်ပွတ်ဆွဲပြီး သူမကို လက်ထပ်ခွင့်ပေးပါ ↻',
    '好啦好啦，還是你娶 ↻':'ကောင်းပါပြီ၊ မင်းပဲ လက်ထပ်ပါ ↻',
    '誰娶誰都一樣，反正我們結婚啦 ♡':'ဘယ်သူက ဘယ်သူ့ကို လက်ထပ်ထပ်၊ ကျွန်ုပ်တို့ လက်ထပ်ကြပြီ ♡',
    // 窗簾
    '我們有事要宣布…':'ကျွန်ုပ်တို့ ကြေညာစရာ ရှိပါတယ်…',
    '好害羞～快把簾子拉上 ⇢⇠':'ရှက်လိုက်တာ～ လိုက်ကာ မြန်မြန် ပိတ်ပေးပါ ⇢⇠',
    '好啦～再偷看一次 ♡':'ကောင်းပါပြီ～ နောက်တစ်ခါ ချောင်းကြည့်ပါ ♡',
    '新娘：還看！快拉上啦 ⇢⇠':'သတို့သမီး - ထပ်ကြည့်နေတုန်း! မြန်မြန် ပိတ်ပါ ⇢⇠',
    '新郎：沒關係，讓大家看 ♡ 再拉開 ⇠⇢':'သတို့သား - ရပါတယ်၊ အားလုံး ကြည့်ပါစေ ♡ ပြန်ဖွင့်ပါ ⇠⇢',
    '3/13 來現場看更清楚 ♡':'မတ် ၁၃ ရက်နေ့ ကိုယ်တိုင်လာပြီး ပိုရှင်းရှင်း ကြည့်ပါ ♡',
    // 拉愛心
    '把愛心往右拉，幫新娘把新郎拉過來 ♡':'နှလုံးသားကို ညာဘက်သို့ ဆွဲပြီး သတို့သမီးအတွက် သတို့သားကို ဆွဲယူပေးပါ ♡',
    '再往左拉一次，換新郎反擊！':'ဘယ်ဘက်သို့ ထပ်ဆွဲပါ၊ ယခု သတို့သား၏ အလှည့်!',
    '用手指按住愛心，往旁邊拉 ↔':'လက်ဖြင့် နှလုံးသားကို ဖိထားပြီး ဘေးသို့ ဆွဲပါ ↔',
    '抓到你了！':'ဖမ်းမိပြီ!',
    '換我抓你！':'ငါ့အလှည့်!',
    '誰也跑不掉！':'ပြေးလို့ မရဘူး!',
    '把兩個人綁在一起 ♡':'နှစ်ယောက်ကို အတူ ချည်နှောင်လိုက်ပါ ♡'
  };
  var KEYS=Object.keys(MY).sort(function(a,b){return b.length-a.length;});
  function fix(n){
    if(n.nodeType===3){ var v=n.nodeValue, t=v.trim(); if(MY[t]) n.nodeValue=v.replace(t,MY[t]); return; }
    if(n.nodeType!==1||n.tagName==='SCRIPT'||n.tagName==='STYLE') return;
    for(var c=n.firstChild;c;c=c.nextSibling) fix(c);
  }
  function go(){
    document.documentElement.lang='my';
    var st=document.createElement('style');
    st.textContent="body,button,.sw,.cta,.bubble,.idle,#hint,.hint,.go,.nx{font-family:'Noto Sans Myanmar','Padauk',sans-serif!important;line-height:1.6}"+".hint,#hint,.sw,.idle{height:auto!important;min-height:20px;letter-spacing:0!important;padding:0 18px;box-sizing:border-box;text-align:center;font-size:13px!important;max-width:100vw}";
    document.head.appendChild(st);
    var l=document.createElement('link'); l.rel='stylesheet'; l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@500;700&display=swap'; document.head.appendChild(l);
    fix(document.body);
    new MutationObserver(function(ms){ ms.forEach(function(m){ if(m.type==='characterData') fix(m.target); else m.addedNodes.forEach(fix); }); })
      .observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',go); else go();
})();
