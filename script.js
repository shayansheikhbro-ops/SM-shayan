
const $=s=>document.querySelector(s);
const ic={
 send:'<path d="M3 11l18-8-8 18-2-8-8-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" stroke-width="1.8"/>',
 chart:'<path d="M4 20V10m6 10V4m6 16v-7m6 7H2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
 chat:'<path d="M4 5h16v11H10l-5 4v-4H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
 bot:'<rect x="4" y="8" width="16" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8V4m-4 8h.01M16 12h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
 users:'<circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6M17 5a3.5 3.5 0 010 7m2 3c2 .7 3 2.300 3 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'};
const P=[
 {n:'Bulk Campaigns',c:'Messaging',i:'send',g:'#2b3cff,#6a7bff',d:'Send one message to thousands of customers in a single click.',f:['Upload contacts from a sheet','Schedule for the best time','Personal names in every message']},
 {n:'OTP Verify',c:'Security',i:'lock',g:'#0b0f2a,#3b4290',d:'Confirm every sign-up and payment with a one-time code.',f:['Codes arrive in under 5 seconds','Expiry and retry limits','Works with any website or app']},
 {n:'Insight Board',c:'Insights',i:'chart',g:'#ff6b5b,#ffb56b',d:'A live dashboard that shows how each campaign performs.',f:['Opens, clicks and replies','Compare campaigns side by side','Download reports']},
 {n:'Chat Widget',c:'Messaging',i:'chat',g:'#00a98f,#5ee0c0',d:'Let visitors message you straight from your website.',f:['One line to install','Replies sent to your phone','Match your brand colors']},
 {n:'Auto Reply Bot',c:'Messaging',i:'bot',g:'#7b3df2,#b28cff',d:'Answer common questions instantly, day and night.',f:['Set your own answers','Hand over to a person anytime','Speaks English and Urdu']},
 {n:'Audience Manager',c:'Insights',i:'users',g:'#e58a00,#ffd166',d:'Group your customers so each one gets the right message.',f:['Smart groups by activity','Remove duplicates','Respect opt-outs']}];
const cats=['All','Messaging','Security','Insights'];let cur='All';
function chips(){const w=$('#chips');w.innerHTML='';cats.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.className=c===cur?'on':'';b.onclick=()=>{cur=c;chips();grid()};w.appendChild(b)})}
const art=p=>'background:linear-gradient(135deg,'+p.g+')';
function grid(){const w=$('#grid');w.innerHTML='';
 P.filter(p=>cur==='All'||p.c===cur).forEach((p,i)=>{
  const b=document.createElement('button');b.className='pc';b.style.animationDelay=i*70+'ms';
  b.innerHTML='<div class="art" style="'+art(p)+'"><svg viewBox="0 0 24 24">'+ic[p.i]+'</svg></div><span class="tag"></span><h3></h3><p></p>';
  b.querySelector('.tag').textContent=p.c;b.querySelector('h3').textContent=p.n;b.querySelector('p').textContent=p.d;
  b.onmousemove=e=>{const r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='perspective(700px) rotateY('+x*10+'deg) rotateX('+-y*10+'deg)'};
  b.onmouseleave=()=>b.style.transform='';
  b.onclick=()=>open(p);w.appendChild(b)})}
function open(p){const a=$('#dart');a.style.cssText=art(p);a.innerHTML='<svg viewBox="0 0 24 24">'+ic[p.i]+'</svg>';
 const d=$('#dbody');d.innerHTML='<span class="tag"></span><h3 style="font-size:24px;margin-bottom:10px"></h3><p style="color:var(--mute)"></p><ul></ul><a class="btn" href="#contact">Request a demo</a>';
 d.querySelector('.tag').textContent=p.c;d.querySelector('h3').textContent=p.n;d.querySelector('p').textContent=p.d;
 p.f.forEach(t=>{const l=document.createElement('li');l.textContent=t;d.querySelector('ul').appendChild(l)});
 d.querySelector('.btn').onclick=()=>$('#dlg').close();$('#dlg').showModal()}
$('#dlg').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
$('#f').onsubmit=e=>{e.preventDefault();$('#ok').style.display='block';e.target.reset()};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const t=+e.target.dataset.n,t0=performance.now();
 (function s(n){const k=Math.min(1,(n-t0)/1400);e.target.textContent=Math.round(t*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(s)})(t0)}));
document.querySelectorAll('[data-n]').forEach(n=>io.observe(n));
chips();grid();
