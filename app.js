"use strict";

// 表示文はすべて肯定的で、性別や人格を決めつけない表現にしています。
const PRAISES = [
  "人の気持ちを想像できる、やさしいまなざしがあります",
  "自分なりのペースを大切にできる素敵さがあります",
  "小さな喜びを見つける感性を持っています",
  "周りの空気をふんわり和らげる魅力があります",
  "ここまで歩んできた、その一歩一歩が素晴らしいです",
  "新しいことを受け取れる、しなやかな心があります",
  "誰かをそっと応援できるあたたかさがあります",
  "丁寧に考えようとする誠実さがあります",
  "あなたにしかない視点が、毎日を豊かにしています",
  "頑張った自分を認められる力が育っています",
  "何気ない瞬間にも彩りを添えられる人です",
  "自分の心に耳を傾けようとする姿勢が素敵です",
  "言葉にぬくもりを込められる魅力があります",
  "変化の中でも、自分らしさを見つけられます",
  "今日をより良くしようとする気持ちが素敵です",
  "人とのご縁を大切にできるあたたかさがあります",
  "ひと休みを選べることも、あなたの立派な力です",
  "好奇心を味方に、新しい景色へ進めます"
];

const STEMS = ["木の陽","木の陰","火の陽","火の陰","土の陽","土の陰","金の陽","金の陰","水の陽","水の陰"];
const SHICHU = [
  "今日は、気になることを小さく始めてみるのがおすすめです。最初の一歩が心地よい流れをつくります。",
  "今日は、身近な人へのひと言を大切に。あなたの自然なやさしさが、あたたかな循環につながりそうです。",
  "今日は、好きなものに触れて心を明るく整えたい日。楽しむ気持ちが次のひらめきを運んでくれます。",
  "今日は、急いで答えを出さなくても大丈夫。落ち着いて選んだことが、あなたらしい前進になります。",
  "今日は、足元をひとつ整えると心にも余白が生まれそう。できたことを丁寧に数えてみてください。",
  "今日は、受け取ることにも心を開いて。人の好意やうれしい言葉を、そのまま味わってよい日です。",
  "今日は、優先したいことをひとつに絞ると軽やかに進めます。小さな達成を喜びましょう。",
  "今日は、いつもの中に少し新鮮さを加えてみて。新しい道や選び方が気分転換になりそうです。",
  "今日は、自分の心の声を静かに聞く時間を。直感をメモすると、大切なヒントが見えてきます。",
  "今日は、流れにゆだねる柔らかさを大切に。無理なく続けられる方法が、よいご縁を運びます。"
];
const MAYAN_THEMES = ["新しい始まりを楽しむ日","人とのつながりを育てる日","自分の感覚を信頼する日","好奇心を自由に広げる日","身の回りを心地よく整える日","言葉で思いを分かち合う日","小さな変化を歓迎する日","心と体の調和を意識する日","受け取ったものに感謝する日","自分らしいリズムを取り戻す日","ひらめきを形にしてみる日","ゆっくり味わい、満たす日","次の一歩を思い描く日"];
const MAYAN_ACTIONS = ["朝いちばんに、今日楽しみたいことをひとつ決めてみて。","気になっていた人へ、短いメッセージを送ってみて。","心がほっとする飲み物で、ひと息つく時間をつくって。","いつもと違う道を歩いて、新しい景色を探してみて。","机やバッグの中をひとつだけ整えてみて。","うれしかったことを、誰かに言葉で伝えてみて。","思いついたアイデアを、まずはメモに残してみて。","肩の力を抜いて、深呼吸を3回してみて。","今日受け取った親切に、笑顔でありがとうを伝えて。","予定の間に5分だけ、自分のための余白をつくって。","好きな音楽を1曲聴いて、気持ちを切り替えてみて。","食事やお茶を、いつもよりゆっくり味わって。","明日の自分が喜ぶことを、ひとつ準備してみて。"];
const COLORS = [
  ["ターコイズブルー","#52c7c1","小物や洋服に少し取り入れてみて"],["ミルキーホワイト","#eeeae0","白いハンカチで気持ちも軽やかに"],["コーラルピンク","#ef9f97","頬や指先にやさしく添えてみて"],["セージグリーン","#91ad93","植物の色を眺めてリフレッシュ"],["ラベンダー","#a99bc9","休憩時間にこの色を思い出して"],["レモンイエロー","#e6ca61","小さな差し色で気分を明るく"],["スカイブルー","#82bddd","空を見上げて深呼吸してみて"],["アプリコット","#e9ae7f","あたたかな色を身近に置いてみて"],["パールグレー","#aeb9b7","落ち着いた色で余白を楽しんで"],["ミントグリーン","#82c9b1","爽やかな色をスマホ画面にも"]
];
const ITEMS = [["お気に入りのノート","思いついたことを書き留めてみて"],["小さな鏡","笑顔の自分にひと言かけてみて"],["ハンドクリーム","よい香りと一緒にひと休みして"],["マイボトル","こまめな水分補給を味方にして"],["腕時計","心地よい時間の使い方を意識して"],["イヤホン","好きな音を今日のお守りにして"],["ハンカチ","丁寧な所作を楽しんでみて"],["お気に入りのペン","今日の予定を楽しく書き込んで"],["小さなポーチ","大切なものをひとまとめにして"],["香りのアイテム","好きな香りで気持ちを整えて"],["歩きやすい靴","少しだけ遠回りを楽しんでみて"],["温かいマグカップ","飲み物と一緒に余白の時間を"]];

const $ = (id) => document.getElementById(id);
let currentResult = null;
let praiseRound = 0;

// 文字列から同じ環境で同じ値を作る32bitハッシュ。
function hashSeed(text) { let h = 2166136261; for (const c of text) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function seededRandom(seed) { let x = seed >>> 0; return () => { x += 0x6D2B79F5; let t = x; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function mod(n, m) { return ((n % m) + m) % m; }
function pad(n) { return String(n).padStart(2, "0"); }
function localDateKey(date = new Date()) { return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }

// グレゴリオ暦をユリウス通日(JDN)へ変換。時刻を使わず暦日単位で計算します。
function julianDayNumber(y, m, d) { const a=Math.floor((14-m)/12), yy=y+4800-a, mm=m+12*a-3; return d+Math.floor((153*mm+2)/5)+365*yy+Math.floor(yy/4)-Math.floor(yy/100)+Math.floor(yy/400)-32045; }

// Dreamspell系の260日周期。既知の対応日 2012-12-21=KIN207 を基準にしています。
function kinNumber(y,m,d) { return mod(julianDayNumber(y,m,d) + 143, 260) + 1; }

function selectPraises(seed) { const random=seededRandom(seed); const pool=[...PRAISES]; for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];} return pool.slice(0,3); }

function fillDateInputs(){ const now=new Date(), year=$("birth-year"); year.innerHTML='<option value="">----</option>'; for(let y=now.getFullYear();y>=1920;y--) year.add(new Option(y,y)); const month=$("birth-month"); month.innerHTML='<option value="">--</option>'; for(let m=1;m<=12;m++) month.add(new Option(m,m)); updateDays(); }
function updateDays(){ const y=Number($("birth-year").value)||2000,m=Number($("birth-month").value)||1,old=$("birth-day").value,max=new Date(y,m,0).getDate(); $("birth-day").innerHTML='<option value="">--</option>'; for(let d=1;d<=max;d++) $("birth-day").add(new Option(d,d)); if(Number(old)<=max) $("birth-day").value=old; }

function buildResult(y,m,d){
  const today=new Date(), dateKey=localDateKey(today), birthKey=`${y}-${pad(m)}-${pad(d)}`, seed=hashSeed(`${birthKey}|${dateKey}`);
  const birthJdn=julianDayNumber(y,m,d), todayJdn=julianDayNumber(today.getFullYear(),today.getMonth()+1,today.getDate());
  // 六十干支の日柱は「JDN+49 を60で割った余り」を甲子=0として算出。出生時刻・出生地を使わない簡易版です。
  const birthStem=mod(birthJdn+49,10), todayStem=mod(todayJdn+49,10), relation=mod(todayStem-birthStem,10);
  const birthKin=kinNumber(y,m,d), todayKin=kinNumber(today.getFullYear(),today.getMonth()+1,today.getDate());
  const mayanIndex=mod((todayKin-1)+(birthKin-1),13), color=COLORS[seed%COLORS.length], item=ITEMS[Math.floor(seed/17)%ITEMS.length];
  return {y,m,d,dateKey,seed,birthStem,todayStem,relation,birthKin,todayKin,mayanIndex,color,item};
}

function render(result){ currentResult=result; praiseRound=0; $("today-label").textContent=new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"}).format(new Date()); renderPraises();
  $("shichu-message").textContent=SHICHU[result.relation]; $("shichu-note").textContent=`生年月日だけで見る簡易版（日の性質：${STEMS[result.birthStem]}／今日：${STEMS[result.todayStem]}）`;
  $("mayan-theme").textContent=MAYAN_THEMES[result.mayanIndex]; $("mayan-action").textContent=MAYAN_ACTIONS[(result.mayanIndex+Math.floor(result.seed/101))%MAYAN_ACTIONS.length]; $("mayan-note").textContent=`Dreamspell方式：あなたのKIN ${result.birthKin} ／ 今日のKIN ${result.todayKin}`;
  $("lucky-color").textContent=result.color[0]; $("color-swatch").style.color=result.color[1]; $("color-tip").textContent=result.color[2]; $("lucky-item").textContent=result.item[0]; $("item-tip").textContent=result.item[1];
  $("input-screen").hidden=true; $("result-screen").hidden=false; window.scrollTo({top:0,behavior:"smooth"});
}
function renderPraises(){ const list=selectPraises(currentResult.seed+Math.imul(praiseRound,7919)); $("praise-list").innerHTML=list.map(x=>`<li>${x}</li>`).join(""); }
function toast(message){ $("toast").textContent=message; $("toast").classList.add("is-visible"); setTimeout(()=>$("toast").classList.remove("is-visible"),2200); }
function share(){ const text=`今日の私へのメッセージ✨\n四柱推命では…${$("shichu-message").textContent}\nマヤ暦では…${$("mayan-theme").textContent}\nラッキーカラーは…${currentResult.color[0]}\n#今日のわたし日和`; if(navigator.share){navigator.share({title:"今日のわたし日和",text}).catch(()=>{});}else{navigator.clipboard.writeText(text).then(()=>toast("結果をコピーしました")).catch(()=>toast("コピーできませんでした"));} }

fillDateInputs();
$("birth-year").addEventListener("change",updateDays); $("birth-month").addEventListener("change",updateDays);
$("birthday-form").addEventListener("submit",e=>{e.preventDefault(); const y=Number($("birth-year").value),m=Number($("birth-month").value),d=Number($("birth-day").value); if(!y||!m||!d){$("form-error").textContent="生年月日をすべて選んでください";return;} $("form-error").textContent="";render(buildResult(y,m,d));});
// 完成画面をすぐ確認できるプレビュー。占い処理は通常入力とまったく同じです。
$("demo-button").addEventListener("click",()=>render(buildResult(1990,1,1)));
$("reroll-button").addEventListener("click",()=>{praiseRound++;renderPraises();}); $("share-button").addEventListener("click",share); $("reset-button").addEventListener("click",()=>{$("result-screen").hidden=true;$("input-screen").hidden=false;currentResult=null;window.scrollTo({top:0,behavior:"smooth"});});

// URL末尾に ?preview=result を付けると、iPadなどで結果画面を直接プレビューできます。
if(new URLSearchParams(window.location.search).get("preview")==="result") render(buildResult(1990,1,1));
