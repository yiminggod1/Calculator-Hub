(() => {
  const $ = (s) => document.querySelector(s);
  const ICONS={
"percentage-calculator":"M5 18 19 6|M7 7h.01|M17 17h.01|M5 5h4v4H5z|M15 15h4v4h-4z",
"percentage-change-calculator":"M5 17 9 13l3 3 7-9|M16 7h3v3|M5 6h5|M5 9h3",
"fraction-calculator":"M5 12h14|M8 5h8|M8 19h8|M9 8l-2 2 2 2|M15 14l-2 2 2 2",
"ratio-calculator":"M5 8h5v3H5z|M14 13h5v3h-5z|M10 10l4 4|M8 7v7|M16 10v7",
"average-calculator":"M5 17V7h3l4 7 4-7h3v10|M8 20h8|M7 4h10",
"scientific-calculator":"M5 4h14v16H5z|M8 7h8v3H8z|M8 13h2M12 13h2M16 13h0|M8 17h2M12 17h2M16 17h0",
"random-number-generator":"M5 7h5l4 10h5|M14 7h5|M17 4l3 3-3 3|M7 17h3",
"standard-deviation-calculator":"M5 18l3-12 3 12 3-12 5 12|M5 21h14|M8 4h8",
"probability-calculator":"M6 6h12v12H6z|M8 16l8-8|M9 9h.01M15 15h.01|M9 15h.01M15 9h.01",
"gcf-calculator":"M5 5h14v14H5z|M8 8h8v8H8z|M11 11h2v2h-2z",
"lcm-calculator":"M5 7h14M5 12h14M5 17h14|M8 5v14M12 5v14M16 5v14",
"quadratic-formula-calculator":"M5 18 8 8l4 10 4-10 3 10|M5 21h14|M8 5h8|M11 3h2",
"mortgage-calculator":"M4 11 12 4l8 7|M6 10v9h12v-9|M9 19v-5h6v5|M7 12h2v2H7z|M15 12h2v2h-2z",
"loan-calculator":"M5 5h14v14H5z|M8 9h8M8 13h5M8 16h3|M16 16h1",
"auto-loan-calculator":"M4 15l2-7h12l2 7|M6 15h12v4H6z|M8 12h3M13 12h3|M7 16h2M15 16h2|M8 8l2-3h4l2 3",
"compound-interest-calculator":"M5 18V7h14v11z|M8 14l3-3 2 2 4-6|M15 7h4v4|M8 17h8",
"simple-interest-calculator":"M14 8c0-2-5-2-5 1s5 1 5 4-5 3-5 0|M12 5v14|M7 5h10|M7 19h10",
"investment-calculator":"M5 18V11h3v7z|M10 18V8h3v10z|M15 18V5h3v13z|M4 20h16|M16 3h4v4",
"retirement-calculator":"M6 19h12|M8 16h8|M9 13h6|M7 10c0-3 2-5 5-7 3 2 5 4 5 7H7z|M12 7v3",
"savings-calculator":"M4 9h16v10H4z|M7 9V6h10v3|M8 13h3M8 16h6|M15 13h2",
"debt-payoff-calculator":"M5 6h14v13H5z|M8 10h8M8 14h5M8 17h3|M15 17h1|M8 3v3M16 3v3",
"tip-calculator":"M6 4h12v16H6z|M9 8h6|M9 12h2M13 12h2|M9 16h6|M8 6h8",
"discount-calculator":"M6 5h12v14H6z|M9 15l6-6|M9 9h.01M15 15h.01|M8 7h2",
"sales-tax-calculator":"M5 4h14v16H5z|M8 8h8M8 12h8M8 16h4|M16 16h.01",
"profit-margin-calculator":"M5 18 9 14l3 2 7-9|M16 7h3v3|M5 21h14|M8 10h2",
"bmi-calculator":"M12 5v14M7 12h10|M12 4a8 8 0 1 0 0 16 8 8 0 0 0-8-8|M9 8h6|M9 16h6",
"bmr-calculator":"M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 3-6|M12 9c1 1 2 2 2 3a2 2 0 0 1-4 0c0-1 1-2 2-3",
"tdee-calculator":"M6 18c2-4 3-8 6-13 1 4 4 6 6 8-1 4-4 6-6 6|M8 20h8|M12 5v4",
"calorie-calculator":"M12 4c3 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 3-6|M12 10c1 1 2 2 2 3a2 2 0 0 1-4 0|M9 20h6",
"body-fat-calculator":"M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6|M7 21v-4a5 5 0 0 1 10 0v4|M9 15h6|M9 19h6",
"ideal-weight-calculator":"M12 4v16|M7 7h10M7 10h10M7 13h10M7 16h10|M8 20h8|M9 4h6",
"pace-calculator":"M5 16a7 7 0 1 1 14 0|M12 12l4-3|M7 19h10|M9 5h6|M12 5v2",
"age-calculator":"M5 7h14v13H5z|M8 3v5M16 3v5|M5 11h14|M9 15h2M13 15h2M9 18h6",
"date-difference-calculator":"M5 7h14v13H5z|M8 3v5M16 3v5|M5 11h14|M8 15h8|M8 18h5|M12 13v7",
"days-between-dates-calculator":"M5 7h14v13H5z|M8 3v5M16 3v5|M5 11h14|M8 15h3M13 15h3|M11 18h2",
"business-days-calculator":"M5 7h14v13H5z|M8 3v5M16 3v5|M5 11h14|M8 16l2 2 5-5|M16 16h.01",
"time-duration-calculator":"M12 6v6l4 2|M9 3h6|M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16|M6 12H4M20 12h-2",
"countdown-calculator":"M9 3h6|M12 6v3|M8 5 6 3M16 5l2-2|M12 9l-3 4h3l-1 4 4-6h-3z|M7 20h10",
"day-of-week-calculator":"M5 7h14v13H5z|M8 3v5M16 3v5|M5 11h14|M9 15h6M9 18h6|M12 13v2",
"time-zone-converter":"M4 12h16|M12 4c2 2 3 5 3 8s-1 6-3 8c-2-2-3-5-3-8s1-6 3-8|M5 9h14M5 15h14|M8 6c-1 2-1 10 0 12M16 6c1 2 1 10 0 12",
"unit-converter":"M5 8h10|M12 5l3 3-3 3|M19 16H9|M12 13l-3 3 3 3|M7 6v4M17 14v4",
"length-converter":"M5 18 18 5l2 2L7 20z|M9 14l3 3M12 11l3 3M15 8l3 3|M5 18h4M18 5v4",
"weight-converter":"M7 9h10l2 11H5z|M9 9a3 3 0 0 1 6 0|M8 13h8M9 16h6|M11 19h2",
"temperature-converter":"M10 5a2 2 0 1 1 4 0v8a4 4 0 1 1-4 0z|M12 11v7|M9 20h6|M7 7h2M7 10h2",
"volume-converter":"M6 7h12l-1 12H7z|M9 7V4h6v3|M9 12h6M10 16h4|M8 19h8",
"area-calculator":"M5 5h14v14H5z|M8 8h8v8H8z|M5 11h3M16 11h3M11 5v3M11 16v3",
"speed-calculator":"M5 16a7 7 0 1 1 14 0|M12 12l4-3|M7 19h10|M9 8h6",
"fuel-cost-calculator":"M7 19V6h8v13|M9 9h4M9 12h4M9 15h3|M15 8h2l2 2v6|M19 16h-2|M9 4h4v2H9z",
"paint-calculator":"M6 5h12v8H6z|M9 13v7h6v-7|M12 5v3|M8 9h8|M10 17h4",
"concrete-calculator":"M5 7h14v12H5z|M8 10h8M8 14h8M8 17h8|M8 7V4h8v3|M11 4v-1h2v1"
};
const makeIcon=(d,cls)=>{const p=String(d||"M8 12h8|M12 8v8").split("|");return '<svg class="'+(cls||"tool-svg")+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p.map(x=>'<path d="'+x+'"/>').join("")+"</svg>";};const TOPIC_ICONS={math:"M5 12h14M12 5v14|M7 7h10v10H7z",finance:"M5 8h14v11H5z|M8 8V5h8v3M9 13h6",health:"M12 20s-7-4.2-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.8-7 9-7 9z", "date-time":"M8 3v4M16 3v4M5 9h14|M12 12v3l2 1",converters:"M5 8h10|M12 5l3 3-3 3M19 16H9M12 13l-3 3 3 3"};
const slugOf=h=>{try{return new URL(h,location.href).pathname.split("/").filter(Boolean).pop()||""}catch{return ""}};
  const TOOL_TOPICS={
    "percentage-calculator":"math","percentage-change-calculator":"math","fraction-calculator":"math","ratio-calculator":"math","average-calculator":"math","scientific-calculator":"math","random-number-generator":"math","standard-deviation-calculator":"math","probability-calculator":"math","gcf-calculator":"math","lcm-calculator":"math","quadratic-formula-calculator":"math",
    "mortgage-calculator":"finance","loan-calculator":"finance","auto-loan-calculator":"finance","compound-interest-calculator":"finance","simple-interest-calculator":"finance","investment-calculator":"finance","retirement-calculator":"finance","savings-calculator":"finance","debt-payoff-calculator":"finance","tip-calculator":"finance","discount-calculator":"finance","sales-tax-calculator":"finance","profit-margin-calculator":"finance",
    "bmi-calculator":"health","bmr-calculator":"health","tdee-calculator":"health","calorie-calculator":"health","body-fat-calculator":"health","ideal-weight-calculator":"health","pace-calculator":"health",
    "age-calculator":"date","date-difference-calculator":"date","days-between-dates-calculator":"date","business-days-calculator":"date","time-duration-calculator":"date","countdown-calculator":"date","day-of-week-calculator":"date","time-zone-converter":"date",
    "unit-converter":"convert","length-converter":"convert","weight-converter":"convert","temperature-converter":"convert","volume-converter":"convert","area-calculator":"convert","speed-calculator":"convert","fuel-cost-calculator":"convert","paint-calculator":"convert","concrete-calculator":"convert"
  };
  const TOOL_BLURBS={
"percentage-calculator":"Find a percentage, amount, or rate in seconds.",
"percentage-change-calculator":"Measure how much a value increased or decreased.",
"fraction-calculator":"Add, subtract, multiply, and divide fractions.",
"ratio-calculator":"Solve ratios, proportions, and equivalent values.",
"average-calculator":"Find the mean of a set of numbers quickly.",
"scientific-calculator":"Handle advanced expressions, functions, and powers.",
"random-number-generator":"Generate a random number within your chosen range.",
"standard-deviation-calculator":"Measure how spread out your numbers are.",
"probability-calculator":"Work out the chance of an event or outcome.",
"gcf-calculator":"Find the greatest common factor of your numbers.",
"lcm-calculator":"Find the least common multiple of your numbers.",
"quadratic-formula-calculator":"Solve quadratic equations and inspect the roots.",
"mortgage-calculator":"Estimate monthly payments, interest, and total cost.",
"loan-calculator":"See monthly loan payments and total interest.",
"auto-loan-calculator":"Estimate your car payment and financing cost.",
"compound-interest-calculator":"See how money grows with compounding over time.",
"simple-interest-calculator":"Calculate simple interest and the final balance.",
"investment-calculator":"Project growth from investing and regular contributions.",
"retirement-calculator":"Estimate how much you may need for retirement.",
"savings-calculator":"Plan savings growth from deposits and interest.",
"debt-payoff-calculator":"Estimate payoff time and interest on your debt.",
"tip-calculator":"Calculate a tip and split the bill with ease.",
"discount-calculator":"Find sale prices and exactly how much you save.",
"sales-tax-calculator":"Add sales tax and see the final purchase price.",
"profit-margin-calculator":"Calculate profit, margin, and markup from your numbers.",
"bmi-calculator":"Calculate body mass index from height and weight.",
"bmr-calculator":"Estimate the calories your body uses at rest.",
"tdee-calculator":"Estimate daily calorie needs from activity level.",
"calorie-calculator":"Estimate daily calories for your chosen goal.",
"body-fat-calculator":"Estimate body fat percentage from key measurements.",
"ideal-weight-calculator":"Explore a healthy-weight estimate for your height.",
"pace-calculator":"Find running pace, speed, or finish time.",
"age-calculator":"Calculate your exact age between two dates.",
"date-difference-calculator":"Measure the exact distance between two dates.",
"days-between-dates-calculator":"Count the days separating any two calendar dates.",
"business-days-calculator":"Count weekdays while excluding weekends.",
"time-duration-calculator":"Find the duration between two times.",
"countdown-calculator":"Count down precisely to a future date and time.",
"day-of-week-calculator":"Find which weekday a date falls on.",
"time-zone-converter":"Convert a local time across world time zones.",
"unit-converter":"Convert common units quickly in one place.",
"length-converter":"Convert distance and length between common units.",
"weight-converter":"Convert weight and mass between common units.",
"temperature-converter":"Convert Celsius, Fahrenheit, and Kelvin.",
"volume-converter":"Convert liquid and dry volume measurements.",
"area-calculator":"Calculate area for common shapes and spaces.",
"speed-calculator":"Convert or calculate speed from distance and time.",
"fuel-cost-calculator":"Estimate fuel use and the cost of a trip.",
"paint-calculator":"Estimate how much paint a room or surface needs.",
"concrete-calculator":"Estimate concrete volume for common projects."
};
  function decorateVisuals(){
    document.querySelectorAll(".card[href]").forEach(card=>{
      const s=slugOf(card.getAttribute("href")), topic=TOOL_TOPICS[s];
      const d=ICONS[s]||TOPIC_ICONS[s]; if(!d)return;
      if(topic)card.classList.add("tone-"+topic);
      let holder=card.querySelector(".icon");
      if(!holder){holder=document.createElement("span");holder.className="icon";card.insertBefore(holder,card.firstChild)}
      holder.className="icon card-icon";
      holder.innerHTML=makeIcon(d,"card-svg");
      if(card.closest("#calculators")){
        card.classList.add("tool-card");
        const h=card.querySelector("h3"),p=card.querySelector("p");
        if(h){
          let meta=card.querySelector(".card-meta");
          if(!meta){meta=document.createElement("span");meta.className="card-meta";h.before(meta)}
          meta.textContent=(topic==="math"?"MATH":topic==="finance"?"FINANCE":topic==="health"?"HEALTH":topic==="date"?"DATE & TIME":"EVERYDAY");
        }
        if(p&&TOOL_BLURBS[s])p.textContent=TOOL_BLURBS[s];
        if(!card.querySelector(".card-arrow")){
          const a=document.createElement("span");a.className="card-arrow";a.setAttribute("aria-hidden","true");a.textContent="→";card.append(a);
        }
        if(!card.querySelector(".card-watermark")){
          const w=document.createElement("span");w.className="card-watermark";w.innerHTML=makeIcon(d,"watermark-svg");w.setAttribute("aria-hidden","true");card.append(w);
        }
      }
    });
    const bodySlug=document.body.dataset.calc,h=document.querySelector(".panel h1"),topic=TOOL_TOPICS[bodySlug];
    if(topic)document.querySelector(".panel")?.classList.add("tool-tone-"+topic);
    if(bodySlug&&h&&!h.parentElement.classList.contains("tool-title-row")){
      const row=document.createElement("div");row.className="tool-title-row";
      const ico=document.createElement("span");ico.className="tool-title-icon";ico.innerHTML=makeIcon(ICONS[bodySlug]);
      h.parentNode.insertBefore(row,h);row.append(ico,h);
    }
  }
  function enhanceToolSEO(){
    const slug=slugOf(location.pathname)||document.body.dataset.calc;
    if(!slug)return;
    const title=(document.querySelector("h1")?.textContent||document.title.replace(/\s*\|.*$/,"")).trim();
    const desc=(document.querySelector(".desc")?.textContent||document.querySelector('meta[name="description"]')?.content||"").trim();
    const canonical=document.querySelector('link[rel="canonical"]')?.href||location.href;
    const topic=TOOL_TOPICS[slug];
    const topicName=topic==="math"?"Math":topic==="finance"?"Finance":topic==="health"?"Health & Fitness":topic==="date"?"Date & Time":"Converters & Everyday";
    const topicPath=topic==="math"?"math/":topic==="finance"?"finance/":topic==="health"?"health/":topic==="date"?"date-time/":"converters/";
    const upsertMeta=(key,value,attr="name")=>{
      if(!value)return;
      let m=document.head.querySelector('meta['+attr+'="'+key+'"]');
      if(!m){m=document.createElement("meta");m.setAttribute(attr,key);document.head.appendChild(m)}
      m.content=value;
    };
    upsertMeta("og:title",title,"property");
    upsertMeta("og:description",desc,"property");
    upsertMeta("og:url",canonical,"property");
    upsertMeta("og:type","website","property");
    upsertMeta("twitter:card","summary");
    upsertMeta("twitter:title",title);
    upsertMeta("twitter:description",desc);
    if(!document.querySelector(".breadcrumb")){
      const nav=document.createElement("nav");
      nav.className="breadcrumb";
      nav.setAttribute("aria-label","Breadcrumb");
      nav.innerHTML='<a href="../">Calculator Hub</a><span aria-hidden="true">/</span><a href="../'+topicPath+'">'+topicName+'</a><span aria-hidden="true">/</span><strong>'+title.replace(/</g,"&lt;").replace(/>/g,"&gt;")+'</strong>';
      const panel=document.querySelector(".panel");
      if(panel)panel.prepend(nav);
    }
    if(!document.head.querySelector('script[data-breadcrumb-schema]')){
      const script=document.createElement("script");
      script.type="application/ld+json";
      script.dataset.breadcrumbSchema="1";
      script.textContent=JSON.stringify({
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem",position:1,name:"Calculator Hub",item:"https://yiminggod1.github.io/Calculator-Hub/"},
          {"@type":"ListItem",position:2,name:topicName,item:"https://yiminggod1.github.io/Calculator-Hub/"+topicPath},
          {"@type":"ListItem",position:3,name:title,item:canonical}
        ]
      });
      document.head.appendChild(script);
    }
  }
  enhanceToolSEO();
  decorateVisuals();
  const num = (id, fallback = NaN) => {
    const el = document.getElementById(id);
    const n = Number(el?.value);
    return Number.isFinite(n) ? n : fallback;
  };
  const money = (n) => Number.isFinite(n) ? "$" + n.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}) : "—";
  const out = (label, value, note="Calculated locally in your browser.") => {
    const r = $("#result");
    if (r) r.innerHTML = "<span>"+label+"</span><strong>"+value+"</strong><small>"+note+"</small>";
  };
  const gcd = (a,b) => {
    a=Math.abs(Math.trunc(a)); b=Math.abs(Math.trunc(b));
    while(b){[a,b]=[b,a%b]} return a;
  };
  const values = (id="a") => ($("#"+id)?.value||"").split(",").map(v=>Number(v.trim())).filter(Number.isFinite);

  function monthlyPayment(principal, annualRate, years){
    if(!Number.isFinite(principal)||!Number.isFinite(annualRate)||!Number.isFinite(years)||principal<=0||years<=0||annualRate<0) return null;
    const n=Math.max(1,Math.round(years*12)), r=annualRate/1200;
    return r ? principal*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1) : principal/n;
  }
  function futureValue(principal, annualRate, years, periods, contribution){
    if(!Number.isFinite(principal)||!Number.isFinite(annualRate)||!Number.isFinite(years)||!Number.isFinite(periods)||!Number.isFinite(contribution)||principal<0||years<0||periods<=0||contribution<0) return null;
    const rate=annualRate/100, p=Math.max(1,Math.round(periods)), count=Math.round(years*p), periodic=rate/p;
    if(periodic===-1) return null;
    const growth=Math.pow(1+periodic,count);
    return principal*growth + contribution*(periodic ? ((growth-1)/periodic) : count);
  }

  function tokenize(expr){
    const tokens=[]; let i=0;
    const isDigit=c=>/[0-9.]/.test(c);
    while(i<expr.length){
      const ch=expr[i];
      if(/\s/.test(ch)){i++;continue}
      if(isDigit(ch)){
        let j=i+1; while(j<expr.length && /[0-9.eE+-]/.test(expr[j])){
          if((expr[j]==='+'||expr[j]==='-') && !/[eE]/.test(expr[j-1])) break;
          j++;
        }
        const n=Number(expr.slice(i,j)); if(!Number.isFinite(n)) throw Error("number"); tokens.push({t:"num",v:n}); i=j; continue;
      }
      if(/[+\-*/^(),]/.test(ch)){tokens.push({t:ch});i++;continue}
      if(/[a-z]/i.test(ch)){
        let j=i+1; while(j<expr.length&&/[a-z]/i.test(expr[j]))j++;
        const name=expr.slice(i,j).toLowerCase();
        if(name==="pi")tokens.push({t:"num",v:Math.PI});
        else if(["sqrt","sin","cos","tan","log","ln","abs"].includes(name))tokens.push({t:"fn",v:name});
        else throw Error("name");
        i=j; continue;
      }
      throw Error("char");
    }
    return tokens;
  }
  function evalScientific(expr){
    const ts=tokenize(expr.replace(/π/g,"pi").replace(/×/g,"*").replace(/÷/g,"/"));
    const prec={"+":1,"-":1,"*":2,"/":2,"^":4,"u+":5,"u-":5};
    const output=[],ops=[];
    let expectValue=true;
    for(const raw of ts){
      const tok={...raw};
      if(tok.t==="num"){output.push(tok);expectValue=false;continue}
      if(tok.t==="fn"){ops.push(tok);expectValue=true;continue}
      if(tok.t==="("){ops.push(tok);expectValue=true;continue}
      if(tok.t===")"){
        while(ops.length&&ops[ops.length-1].t!=="(")output.push(ops.pop());
        if(!ops.length)throw Error("paren");
        ops.pop();
        if(ops.length&&ops[ops.length-1].t==="fn")output.push(ops.pop());
        expectValue=false;continue;
      }
      if(tok.t===","){
        while(ops.length&&ops[ops.length-1].t!=="(")output.push(ops.pop());
        expectValue=true;continue;
      }
      if((tok.t==="+"||tok.t==="-")&&expectValue)tok.t=tok.t==="-"?"u-":"u+";
      while(ops.length&&ops[ops.length-1].t!=="("&&ops[ops.length-1].t!=="fn"&&
        (prec[ops[ops.length-1].t]>prec[tok.t]||(prec[ops[ops.length-1].t]===prec[tok.t]&&tok.t!=="^"&&tok.t!=="u-"&&tok.t!=="u+"))) output.push(ops.pop());
      ops.push(tok);expectValue=true;
    }
    while(ops.length){if(ops[ops.length-1].t==="(")throw Error("paren");output.push(ops.pop());}
    const st=[];
    for(const tok of output){
      if(tok.t==="num")st.push(tok.v);
      else if(tok.t==="fn"){
        const x=st.pop();if(x===undefined)throw Error("fn");
        const f={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,log:Math.log10,ln:Math.log,abs:Math.abs}[tok.v];
        st.push(f(x));
      } else if(tok.t==="u-"||tok.t==="u+"){
        const x=st.pop();if(x===undefined)throw Error("unary");st.push(tok.t==="u-"?-x:+x);
      } else {
        const y=st.pop(),x=st.pop();if(x===undefined||y===undefined)throw Error("op");
        st.push(({"+":(a,b)=>a+b,"-":(a,b)=>a-b,"*":(a,b)=>a*b,"/":(a,b)=>a/b,"^":(a,b)=>Math.pow(a,b)})[tok.t](x,y));
      }
    }
    if(st.length!==1||!Number.isFinite(st[0]))throw Error("result");
    return st[0];
  }

  function calc(){
    const t=document.body.dataset.calc;
    const a=num("a"),b=num("b"),c=num("c"),d=num("d"),e=num("e");

    if(t==="percentage"){if(!Number.isFinite(a)||!Number.isFinite(b))return out("Error","Enter both values");return out("Percentage",(a*b/100).toLocaleString(undefined,{maximumFractionDigits:8}),b+"% of "+a);}
    if(t==="percentage-change"){if(!Number.isFinite(a)||!Number.isFinite(b)||a===0)return out("Error","Starting value must be non-zero");return out("Percentage change",(((b-a)/Math.abs(a))*100).toFixed(2)+"%","From "+a+" to "+b);}
    if(t==="average"){const x=values();return out(x.length?"Average":"Error",x.length?(x.reduce((p,q)=>p+q,0)/x.length).toFixed(4):"Enter comma-separated numbers");}
    if(t==="gcf"||t==="lcm"){if(![a,b].every(Number.isInteger)||a===0||b===0)return out("Error","Enter two non-zero integers");const g=gcd(a,b);return out(t==="gcf"?"GCF":"LCM",String(t==="gcf"?g:Math.abs(a*b)/g));}
    if(t==="random"){if(!Number.isFinite(a)||!Number.isFinite(b))return out("Error","Enter minimum and maximum");let lo=Math.ceil(a),hi=Math.floor(b);if(lo>hi)[lo,hi]=[hi,lo];return out("Random number",String(Math.floor(Math.random()*(hi-lo+1))+lo),"Inclusive range: "+lo+" to "+hi);}
    if(t==="probability"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<=0||a>b)return out("Error","Use favorable outcomes ≥ 0 and total outcomes > 0");return out("Probability",((a/b)*100).toFixed(2)+"%");}
    if(t==="quadratic-formula-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a===0)return out("Error","A must be non-zero");const disc=b*b-4*a*c;if(disc<0)return out("Complex roots",(-b/(2*a)).toFixed(4)+" ± "+(Math.sqrt(-disc)/(2*a)).toFixed(4)+"i");const s=Math.sqrt(disc);return out("Roots",(((-b+s)/(2*a)).toFixed(4))+" and "+(((-b-s)/(2*a)).toFixed(4)));}
    if(t==="fraction-calculator"){if(![a,b,c,d].every(Number.isFinite)||b===0||d===0)return out("Error","Enter valid fractions with non-zero denominators");const op=$("#op")?.value||"+";let n,q;if(op==="+"){n=a*d+c*b;q=b*d}else if(op==="-"){n=a*d-c*b;q=b*d}else if(op==="×"){n=a*c;q=b*d}else{if(c===0)return out("Error","Cannot divide by zero");n=a*d;q=b*c}if(q<0){n=-n;q=-q}const g=gcd(n,q)||1;return out("Result",(n/g)+"/"+(q/g));}
    if(t==="ratio-calculator"){if(![a,b,c].every(Number.isFinite)||b===0)return out("Error","Enter ratio A:B and a known value");return out("Equivalent value",(a/b*c).toLocaleString(undefined,{maximumFractionDigits:8}),"Scaled from "+a+":"+b);}
    if(t==="standard-deviation-calculator"){const x=values("values"),sample=$("#sample")?.checked;if(x.length<(sample?2:1))return out("Error",sample?"Enter at least 2 values":"Enter at least 1 value");const mean=x.reduce((p,q)=>p+q,0)/x.length;const variance=x.reduce((p,q)=>p+(q-mean)**2,0)/(x.length-(sample?1:0));return out("Standard deviation",Math.sqrt(variance).toFixed(6),sample?"Sample standard deviation":"Population standard deviation");}
    if(t==="scientific-calculator"){const expr=$("#expression")?.value?.trim();if(!expr)return out("Error","Enter an expression");try{return out("Result",String(Number(evalScientific(expr).toFixed(12))),"Supports +, −, ×, ÷, powers, parentheses, π, sqrt, sin, cos, tan, log, ln and abs.");}catch(err){return out("Error","Unsupported or invalid expression");}}

    if(t==="mortgage"||t==="loan"){const p=monthlyPayment(a,b,c);if(p===null)return out("Error","Enter a positive amount, valid rate, and term");const n=Math.round(c*12);return out("Monthly payment",money(p),"Total interest: "+money(p*n-a));}
    if(t==="auto-loan-calculator"){const down=Number.isFinite(d)?d:0;if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||!Number.isFinite(d)||a<=0||down<0||down>=a)return out("Error","Check vehicle price, down payment, rate, and term");const p=monthlyPayment(a-down,b,c);const n=Math.round(c*12);return out("Monthly payment",money(p),"Amount financed: "+money(a-down)+" · Total interest: "+money(p*n-(a-down)));}
    if(["compound","investment-calculator","savings-calculator","retirement-calculator"].includes(t)){if(![a,b,c,d].every(Number.isFinite)||a<0||c<0||d<=0||b<=-100)return out("Error","Check principal, rate, years, and compounding frequency");const contribution=Number.isFinite(e)?e:0;if(contribution<0)return out("Error","Contribution cannot be negative");const fv=futureValue(a,b,c,d,contribution);if(fv===null)return out("Error","Check principal, rate, years, frequency, and contribution");const count=Math.round(c*d);return out("Estimated future value",money(fv),"Contributions: "+money(contribution*count)+" · Estimate only.");}
    if(t==="simple-interest-calculator"){if(![a,b,c].every(Number.isFinite)||a<0||b<0||c<0)return out("Error","Enter non-negative principal, rate, and time");const interest=a*b/100*c;return out("Interest",money(interest),"Total amount: "+money(a+interest));}
    if(t==="debt-payoff-calculator"){if(![a,b,c].every(Number.isFinite)||a<=0||b<0||c<=0)return out("Error","Enter a positive balance, non-negative APR, and payment");const r=b/1200;if(r&&c<=a*r)return out("Error","Payment must exceed monthly interest");const months=r?-Math.log(1-a*r/c)/Math.log(1+r):a/c;return out("Estimated payoff",Math.ceil(months)+" months","Estimated interest: "+money(c*months-a));}
    if(t==="tip"){if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a<0||b<0||c<1)return out("Error","Enter a non-negative bill, tip rate, and at least 1 person");const tip=a*b/100,total=a+tip,people=Math.max(1,Math.trunc(Number.isFinite(c)?c:1));return out("Total / per person",money(total)+" / "+money(total/people),"Tip: "+money(tip)+" · "+people+" person(s)");}
    if(t==="discount"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<0||b>100)return out("Error","Enter a price and a discount from 0% to 100%");const save=a*b/100;return out("Sale price / savings",money(a-save)+" / "+money(save));}
    if(t==="sales-tax-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<0)return out("Error","Enter a non-negative price and tax rate");const tax=a*b/100;return out("Total / tax",money(a+tax)+" / "+money(tax));}
    if(t==="profit-margin-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<0)return out("Error","Revenue must be greater than 0 and cost cannot be negative");return out("Profit margin",(((a-b)/a)*100).toFixed(2)+"%","Profit: "+money(a-b)+" · Revenue: "+money(a));}

    if(t==="bmi"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0)return out("Error","Enter positive weight and height");const h=b/100,bmi=a/(h*h);return out("BMI",bmi.toFixed(1),"Weight "+a+" kg · Height "+b+" cm");}
    if(t==="bmr"){const sex=$("#sex")?.value||"male";if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||c<=0)return out("Error","Enter weight, height, and age");const base=10*a+6.25*b-5*c+(sex==="female"?-161:5);return out("Estimated BMR",Math.round(base)+" kcal/day","Mifflin–St Jeor estimate.");}
    if(t==="tdee"||t==="calorie-calculator"){const sex=$("#sex")?.value||"male",activity=Number.isFinite(d)?d:1.2;if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||c<=0||activity<=0)return out("Error","Enter weight, height, age, and activity");const base=10*a+6.25*b-5*c+(sex==="female"?-161:5);return out("Estimated daily calories",Math.round(base*activity)+" kcal/day","Mifflin–St Jeor × activity factor; general estimate.");}
    if(t==="body-fat-calculator"){const sex=$("#sex")?.value||"male";if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0)return out("Error","Enter BMI and age");const sexFactor=sex==="male"?1:0;const bf=1.2*a+0.23*b-10.8*sexFactor-5.4;return out("Estimated body fat",Math.max(0,bf).toFixed(1)+"%","Deurenberg-style estimate; not a direct measurement.");}
    if(t==="ideal-weight-calculator"){const sex=$("#sex")?.value||"male";if(!Number.isFinite(b)||b<=0)return out("Error","Enter height");const inches=b/2.54,base=sex==="female"?45.5:50;return out("Estimated ideal weight",(base+2.3*Math.max(0,inches-60)).toFixed(1)+" kg","Devine formula estimate; not a health target.");}
    if(t==="pace-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<=0)return out("Error","Enter time and a positive distance");return out("Pace",(a/b).toFixed(2)+" min/unit");}
    if(t==="speed"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<=0)return out("Error","Enter a non-negative distance and positive time");return out("Speed",(a/b).toFixed(3)+" distance/time");}

    if(t==="fuel-cost-calculator"){if(![a,b,c].every(Number.isFinite)||a<0||b<=0||c<0)return out("Error","Enter distance, fuel economy, and fuel price");return out("Fuel cost",money(a/b*c),"Estimated fuel used: "+(a/b).toFixed(2)+" gallons");}
    if(t==="area-calculator"){const shape=$("#shape")?.value||"rectangle";let area;if(shape==="circle"){if(!Number.isFinite(a)||a<=0)return out("Error","Enter a positive radius");area=Math.PI*a*a}else if(shape==="triangle"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0)return out("Error","Enter positive base and height");area=a*b/2}else{if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0)return out("Error","Enter positive length and width");area=a*b}return out("Area",area.toFixed(4)+" square units");}
    if(t==="paint-calculator"){if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||c<=0)return out("Error","Enter wall area, coverage, and coats");return out("Paint needed",Math.ceil(a*c/b)+" gallons","Estimated; allow extra for texture, waste, and touch-ups.");}
    if(t==="concrete-calculator"){if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||c<=0)return out("Error","Enter positive length, width, and depth");return out("Concrete volume",(a*b*c).toFixed(3)+" cubic units");}

    if(["unit-converter","length-converter","weight-converter","volume-converter"].includes(t)){
      const v=a,from=$("#from")?.value,to=$("#to")?.value;
      const groups={length:{m:1,km:1000,mi:1609.344,ft:.3048,in:.0254},mass:{kg:1,lb:.45359237},volume:{l:1,gal:3.785411784}};
      const groupName=t==="length-converter"?"length":t==="weight-converter"?"mass":t==="volume-converter"?"volume":null;
      let g=groupName?groups[groupName]:Object.values(groups).find(x=>x[from]!==undefined&&x[to]!==undefined);
      if(!g||!Number.isFinite(v)||g[from]===undefined||g[to]===undefined)return out("Error","Choose compatible units and enter a value");
      return out("Converted value",(v*g[from]/g[to]).toLocaleString(undefined,{maximumFractionDigits:10}),from+" → "+to);
    }
    if(t==="temperature-converter"){if(!Number.isFinite(a))return out("Error","Enter a temperature");const from=$("#from")?.value||"C",to=$("#to")?.value||"F";let celsius=from==="C"?a:from==="F"?(a-32)*5/9:a-273.15;let y=to==="C"?celsius:to==="F"?celsius*9/5+32:celsius+273.15;return out("Converted temperature",y.toFixed(2)+" °"+to,from+" → "+to);}
    
    if(t==="date-difference-calculator"||t==="days-between-dates-calculator"||t==="business-days-calculator"){const s=$("#start")?.value,e1=$("#end")?.value;if(!s||!e1)return out("Error","Select both dates");let d1=new Date(s+"T00:00:00"),d2=new Date(e1+"T00:00:00");if(d2<d1)[d1,d2]=[d2,d1];const calendarDays=Math.round((d2-d1)/86400000);if(t==="business-days-calculator"){let n=0;for(const x=new Date(d1);x<=d2;x.setDate(x.getDate()+1)){const day=x.getDay();if(day!==0&&day!==6)n++;}return out("Business days",String(n),"Inclusive count; weekends excluded.");}return out("Days between",String(calendarDays),"Elapsed calendar days; start date is not counted as a full day.");}
    if(t==="day-of-week-calculator"){const x=$("#date")?.value;if(!x)return out("Error","Select a date");return out("Day",new Date(x+"T00:00:00").toLocaleDateString(undefined,{weekday:"long"}));}
    if(t==="age"){const x=$("#date")?.value;if(!x)return out("Error","Select a birth date");const birth=new Date(x+"T00:00:00"),now=new Date();if(birth>now)return out("Error","Birth date cannot be in the future");let years=now.getFullYear()-birth.getFullYear(),months=now.getMonth()-birth.getMonth(),days=now.getDate()-birth.getDate();if(days<0){months--;days+=new Date(now.getFullYear(),now.getMonth(),0).getDate()}if(months<0){years--;months+=12}return out("Age",years+" years, "+months+" months, "+days+" days");}
    if(t==="time-duration-calculator"){const s=$("#startTime")?.value,e1=$("#endTime")?.value;if(!s||!e1)return out("Error","Select both times");let [sh,sm]=s.split(":").map(Number),[eh,em]=e1.split(":").map(Number),mins=eh*60+em-(sh*60+sm);if(mins<0)mins+=1440;return out("Duration",Math.floor(mins/60)+"h "+(mins%60)+"m",mins+" minutes total; assumes the next day when end time is earlier.");}
    if(t==="countdown-calculator"){const date=$("#date")?.value,time=$("#time")?.value||"00:00";if(!date)return out("Error","Select a target date");const target=new Date(date+"T"+time+":00");const ms=target-Date.now();if(ms<=0)return out("Countdown","Target reached");const sec=Math.floor(ms/1000),days=Math.floor(sec/86400),hours=Math.floor(sec%86400/3600),mins=Math.floor(sec%3600/60);return out("Time remaining",days+"d "+hours+"h "+mins+"m "+(sec%60)+"s");}
    if(t==="time-zone-converter"){const date=$("#date")?.value,time=$("#time")?.value,from=$("#from")?.value,to=$("#to")?.value;if(!date||!time||!from||!to)return out("Error","Select date, time, and both time zones");try{const naive=Date.parse(date+"T"+time+":00Z"),fmt=zone=>new Intl.DateTimeFormat("en-US",{timeZone:zone,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(new Date(naive)).reduce((o,p)=>(o[p.type]=p.value,o),{}),fp=fmt(from),offset=Date.UTC(+fp.year,+fp.month-1,+fp.day,+fp.hour,+fp.minute)-naive,actual=new Date(naive-offset),tp=fmt(to);return out("Converted time",tp.month+"/"+tp.day+"/"+tp.year+" "+tp.hour+":"+tp.minute+" ("+to+")","Source local time: "+date+" "+time+" ("+from+")");}catch(err){return out("Error","Unsupported time zone or date");}}
    out("Result","Enter values and calculate");
  }

  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-action=calc]").forEach(btn=>btn.addEventListener("click",(ev)=>{ev.preventDefault();calc();}));
    const shape=$("#shape");
    const areaFields={rectangle:["a","b"],circle:["a"],triangle:["a","b"]};
    const syncAreaFields=()=>{
      if(!shape)return;
      const labels={rectangle:["Length","Width"],circle:["Radius"],triangle:["Base","Height"]}[shape.value]||["Value","Second value"];
      const ids=areaFields[shape.value]||areaFields.rectangle;
      document.querySelectorAll("[data-area-field]").forEach(el=>el.hidden=true);
      ids.forEach((id,i)=>{const wrap=document.querySelector('[data-area-field="'+id+'"]');if(wrap){wrap.hidden=false;const label=wrap.querySelector("label");if(label)label.textContent=labels[i]||"Value";}});
    };
    shape?.addEventListener("change",syncAreaFields);
    syncAreaFields();
  });
  window.CalculatorHub={calc};
})();
