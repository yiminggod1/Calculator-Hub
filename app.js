(() => {
  const $ = (s) => document.querySelector(s);
  const ICONS={"percentage-calculator":"M6 18 18 6|M7 7h.01M17 17h.01","percentage-change-calculator":"M5 17 10 12l3 3 6-8|M15 7h4v4","fraction-calculator":"M6 9h12M6 15h12|M9 6l-2 2 2 2","ratio-calculator":"M8 12h8|M8 9a3 3 0 1 0 0 6M16 9a3 3 0 1 0 0 6","average-calculator":"M5 17V7h4l3 6 3-6h4v10|M8 19h8","scientific-calculator":"M6 4h12v16H6z|M8 8h8M8 12h2M12 12h2M8 16h2M12 16h2","random-number-generator":"M5 7h4l6 10h4|M16 7h3v3","standard-deviation-calculator":"M5 18 9 6l3 12 3-12 4 12|M5 21h14","probability-calculator":"M8 15 16 9|M9 9h.01M15 15h.01","gcf-calculator":"M6 6h12v12H6z|M9 9h6v6H9z","lcm-calculator":"M5 8h14M5 12h14M5 16h14|M8 5v14M16 5v14","quadratic-formula-calculator":"M5 17 9 7l3 10 3-10 4 10|M5 20h14","mortgage-calculator":"m4 11 8-7 8 7|M6 10v9h12v-9","loan-calculator":"M5 5h14v14H5z|M8 9h8M8 13h2M12 13h2","auto-loan-calculator":"M5 15l2-6h10l2 6|M4 15h16v3H4z","compound-interest-calculator":"M5 18V7h14v11z|M8 14l3-3 2 2 4-5","simple-interest-calculator":"M14 9c0-2-5-2-5 1s5 1 5 4-5 3-5 0|M12 6v12","investment-calculator":"M5 18V8M10 18V5M15 18v-7M20 18V3|M4 19h17","retirement-calculator":"M7 19h10M9 16h6|M12 4c3 2 5 4 5 7H7c0-3 2-5 5-7z","savings-calculator":"M4 9h16v10H4z|M7 9V6h10v3","debt-payoff-calculator":"M5 7h14v11H5z|M8 11h8M8 15h5","tip-calculator":"M6 5h12v14H6z|M9 9h6M9 13h2M13 13h2","discount-calculator":"M9 15 15 9|M9 9h.01M15 15h.01","sales-tax-calculator":"M6 4h12v16H6z|M9 8h6M9 12h6M9 16h2","profit-margin-calculator":"M5 18 9 13l3 3 7-9|M16 7h3v3","bmi-calculator":"M12 5v14M7 12h10|M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16","bmr-calculator":"M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 3-6","tdee-calculator":"M6 18c2-4 3-8 6-13 1 4 4 6 6 8-1 4-4 6-6 6","calorie-calculator":"M12 4c3 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 3-6|M12 10c1 1 2 2 2 3a2 2 0 0 1-4 0","body-fat-calculator":"M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6|M7 21v-3a5 5 0 0 1 10 0v3","ideal-weight-calculator":"M12 4v16M8 20h8|M7 7h10M7 10h10M7 13h10M7 16h10","pace-calculator":"M5 16a7 7 0 1 1 14 0|M12 12l4-3M7 19h10","age-calculator":"M8 3v4M16 3v4M5 9h14|M8 12h.01M12 12h.01M16 12h.01","date-difference-calculator":"M8 3v4M16 3v4M5 9h14|M8 13h8M8 16h5","days-between-dates-calculator":"M8 3v4M16 3v4M5 9h14|M8 13h3M13 13h3","business-days-calculator":"M8 4v4M16 4v4M4 10h16|M9 16l2 2 4-4","time-duration-calculator":"M12 7v5l4 2M9 3h6|M12 12a8 8 0 1 0 0 .01","countdown-calculator":"M9 3h6M12 6v2M12 13l3 2|M8 5 6 3M16 5l2-2","day-of-week-calculator":"M8 3v4M16 3v4M5 9h14|M9 13h6M9 16h6","time-zone-converter":"M4 12h16|M12 4c2 2 3 5 3 8s-1 6-3 8c-2-2-3-5-3-8s1-6 3-8","unit-converter":"M5 8h10|M12 5l3 3-3 3M19 16H9M12 13l-3 3 3 3","length-converter":"M5 17 17 5l2 2-12 12|M9 13l3 3M12 10l3 3M15 7l3 3","weight-converter":"M7 9h10l2 11H5z|M9 9a3 3 0 0 1 6 0","temperature-converter":"M10 5a2 2 0 1 1 4 0v8a4 4 0 1 1-4 0z|M12 11v6","volume-converter":"M6 7h12l-1 12H7z|M9 7V4h6v3","area-calculator":"M5 5h14v14H5z|M8 8h8v8H8z","speed-calculator":"M5 16a7 7 0 1 1 14 0|M12 12l4-3M7 19h10","fuel-cost-calculator":"M7 19V6h8v13|M9 9h4M15 9h2l2 2v6","paint-calculator":"M7 6h10v8H7z|M10 14v5h4v-5","concrete-calculator":"M5 7h14v11H5z|M8 10h8M8 14h8M8 18h8"};
  const TOPIC_ICONS={math:"M5 12h14M12 5v14|M7 7h10v10H7z",finance:"M5 8h14v11H5z|M8 8V5h8v3M9 13h6",health:"M12 20s-7-4.2-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.8-7 9-7 9z","date-time":"M8 3v4M16 3v4M5 9h14|M12 12v3l2 1",converters:"M5 8h10|M12 5l3 3-3 3M19 16H9M12 13l-3 3 3 3"};
  const makeIcon=(d,cls)=>{const p=String(d||"M8 12h8|M12 8v8").split("|");return '<svg class="'+(cls||"tool-svg")+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+p[0]+'"/>'+(p[1]?'<path d="'+p[1]+'"/>':"")+"</svg>";};
  const slugOf=h=>{try{return new URL(h,location.href).pathname.split("/").filter(Boolean).pop()||""}catch{return ""}};
  const TOOL_TOPICS={
    "percentage-calculator":"math","percentage-change-calculator":"math","fraction-calculator":"math","ratio-calculator":"math","average-calculator":"math","scientific-calculator":"math","random-number-generator":"math","standard-deviation-calculator":"math","probability-calculator":"math","gcf-calculator":"math","lcm-calculator":"math","quadratic-formula-calculator":"math",
    "mortgage-calculator":"finance","loan-calculator":"finance","auto-loan-calculator":"finance","compound-interest-calculator":"finance","simple-interest-calculator":"finance","investment-calculator":"finance","retirement-calculator":"finance","savings-calculator":"finance","debt-payoff-calculator":"finance","tip-calculator":"finance","discount-calculator":"finance","sales-tax-calculator":"finance","profit-margin-calculator":"finance",
    "bmi-calculator":"health","bmr-calculator":"health","tdee-calculator":"health","calorie-calculator":"health","body-fat-calculator":"health","ideal-weight-calculator":"health","pace-calculator":"health",
    "age-calculator":"date","date-difference-calculator":"date","days-between-dates-calculator":"date","business-days-calculator":"date","time-duration-calculator":"date","countdown-calculator":"date","day-of-week-calculator":"date","time-zone-converter":"date",
    "unit-converter":"convert","length-converter":"convert","weight-converter":"convert","temperature-converter":"convert","volume-converter":"convert","area-calculator":"convert","speed-calculator":"convert","fuel-cost-calculator":"convert","paint-calculator":"convert","concrete-calculator":"convert"
  };
  function decorateVisuals(){
    document.querySelectorAll(".card[href]").forEach(card=>{
      const s=slugOf(card.getAttribute("href")), topic=TOOL_TOPICS[s];
      const d=ICONS[s]||TOPIC_ICONS[s]; if(!d)return;
      if(topic)card.classList.add("tone-"+topic);
      let holder=card.querySelector(".icon");
      if(!holder){holder=document.createElement("span");holder.className="icon";card.insertBefore(holder,card.firstChild)}
      holder.className="icon card-icon";holder.innerHTML=makeIcon(d,"card-svg");
    });
    const s=document.body.dataset.calc,h=document.querySelector(".panel h1"),topic=TOOL_TOPICS[s];
    if(topic)document.querySelector(".panel")?.classList.add("tool-tone-"+topic);
    if(s&&h&&!h.parentElement.classList.contains("tool-title-row")){
      const row=document.createElement("div");row.className="tool-title-row";
      const ico=document.createElement("span");ico.className="tool-title-icon";ico.innerHTML=makeIcon(ICONS[s]);
      h.parentNode.insertBefore(row,h);row.append(ico,h);
    }
  }
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
    const n=Math.round(years*12), r=annualRate/1200;
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
const SEARCH_INTENTS={
"percentage-calculator":["percentage","percent","what percent","percent of","calculate a percent","percentage of a number","百分比","百分之多少"],
"percentage-change-calculator":["percentage change","percent change","increase percentage","decrease percentage","percent increase","percent decrease","涨幅","跌幅","百分比变化"],
"fraction-calculator":["fraction","fractions","mixed fraction","add fractions","subtract fractions","multiply fractions","divide fractions","分数","分数计算"],
"ratio-calculator":["ratio","ratios","ratio of","compare two numbers","比例","比值","比例计算"],
"average-calculator":["average","mean","average number","average of","find the average","均值","平均数","平均值"],
"scientific-calculator":["scientific calculator","advanced calculator","sin cos tan","log calculator","powers","roots","scientific math","科学计算器"],
"random-number-generator":["random number","random number generator","pick a random number","generate random numbers","random integer","随机数","随机数字"],
"standard-deviation-calculator":["standard deviation","std deviation","spread of data","data variability","数据标准差","标准差"],
"probability-calculator":["probability","chance","odds","likelihood","probability of","概率","几率"],
"gcf-calculator":["gcf","greatest common factor","common factor","highest common factor","最大公因数","最大公约数"],
"lcm-calculator":["lcm","least common multiple","common multiple","最小公倍数"],
"quadratic-formula-calculator":["quadratic equation","quadratic formula","solve quadratic","x squared equation","二次方程","二次公式"],

"mortgage-calculator":["mortgage","home loan","house loan","home payment","house payment","mortgage payment","monthly mortgage","monthly house payment","buying a house","how much is my mortgage","房贷","房屋贷款","买房贷款","房贷月供"],
"loan-calculator":["loan","personal loan","borrow money","loan payment","monthly loan payment","how much will my loan cost","借钱","贷款","贷款月供","每月还款"],
"auto-loan-calculator":["car loan","auto loan","vehicle loan","car payment","monthly car payment","how much is my car payment","financing a car","buy a car","买车贷款","车贷","汽车贷款","车贷月供"],
"compound-interest-calculator":["compound interest","compound growth","money grows","interest on interest","future value with interest","bank interest","钱会变多少","复利","复利计算","存钱增长"],
"simple-interest-calculator":["simple interest","simple interest loan","interest only","simple rate","单利","单利计算"],
"investment-calculator":["investment","investing","investment growth","portfolio growth","return on investment","how much will my investment grow","投资收益","投资计算"],
"retirement-calculator":["retirement","retire","retirement savings","how much to save for retirement","retirement nest egg","when can i retire","退休","退休储蓄","退休要存多少钱"],
"savings-calculator":["savings","save money","savings account","saving each month","how much will i save","savings growth","存钱","储蓄","存款会变多少"],
"debt-payoff-calculator":["debt payoff","pay off debt","credit card debt","debt free","how long to pay off debt","debt payment","还清债务","还债","信用卡债务"],
"tip-calculator":["tip","gratuity","restaurant tip","how much tip","tip percentage","split the tip","小费","小费怎么算","餐厅小费"],
"discount-calculator":["discount","sale price","sale discount","discounted price","how much after discount","percent off","打折","折扣","打折后多少钱"],
"sales-tax-calculator":["sales tax","tax on purchase","purchase tax","tax included price","how much tax","sales tax rate","销售税","消费税","买东西税"],
"profit-margin-calculator":["profit margin","profit percentage","margin","gross margin","business profit","profit on sale","利润率","利润百分比"],

"bmi-calculator":["bmi","body mass index","am i overweight","am i underweight","healthy weight index","body mass","how fat am i","我胖不胖","体重指数","BMI"],
"bmr-calculator":["bmr","basal metabolic rate","resting calories","calories at rest","metabolism calculator","基础代谢","基础代谢率"],
"tdee-calculator":["tdee","total daily energy expenditure","daily calorie burn","maintenance calories","calories to maintain weight","how many calories do i burn","每日消耗","维持体重热量"],
"calorie-calculator":["calorie","calories","daily calories","how many calories should i eat","calorie needs","calorie intake","吃多少热量","一天应该吃多少","卡路里"],
"body-fat-calculator":["body fat","body fat percentage","fat percentage","body composition","estimate body fat","体脂","体脂率"],
"ideal-weight-calculator":["ideal weight","healthy weight","target weight","what should i weigh","ideal body weight","标准体重","理想体重"],
"pace-calculator":["pace","running pace","run pace","5k pace","mile pace","minutes per mile","race pace","跑步配速","配速"],

"age-calculator":["age","how old am i","calculate my age","exact age","birthday age","how old","年龄","多大"],
"date-difference-calculator":["date difference","difference between dates","dates apart","how far apart are two dates","date gap","两个日期差多少","日期差"],
"days-between-dates-calculator":["days between","days until","number of days between dates","how many days between","days apart","两个日期相差几天","相差几天"],
"business-days-calculator":["business days","working days","workdays","weekdays between dates","week days","how many work days","工作日","工作日计算"],
"time-duration-calculator":["time duration","duration between times","how long between times","hours between","minutes between","time difference","时间差","时长","两个时间相差多久"],
"countdown-calculator":["countdown","countdown timer","days until","time until","how long until","countdown to a date","倒计时","还有多久"],
"day-of-week-calculator":["day of week","what day is","which day was","what day will","day for a date","what day is today","今天星期几","日期是星期几"],
"time-zone-converter":["time zone","timezone","convert time zones","time in another country","time in london","time in new york","international time","时区","时区转换"],

"unit-converter":["unit converter","convert units","unit conversion","convert measurement","convert miles","convert meters","单位换算","单位转换"],
"length-converter":["length converter","distance converter","miles to km","km to miles","feet to meters","inches to cm","length conversion","长度换算","公里英里"],
"weight-converter":["weight converter","mass converter","kg to lb","lbs to kg","pounds to kilograms","kilograms to pounds","weight conversion","重量换算","公斤磅"],
"temperature-converter":["temperature converter","celsius to fahrenheit","fahrenheit to celsius","c to f","f to c","degrees conversion","温度换算","摄氏华氏"],
"volume-converter":["volume converter","liters to gallons","gallons to liters","cups to ml","ml to oz","volume conversion","体积换算","升加仑"],
"area-calculator":["area","area calculator","area of a room","square footage","square feet","area of rectangle","area of circle","面积","面积计算"],
"speed-calculator":["speed","speed calculator","distance divided by time","miles per hour","mph","kmh","how fast","速度","时速"],
"fuel-cost-calculator":["fuel cost","gas cost","gas money","fuel expense","cost to drive","cost of a road trip","how much gas will i use","油钱","汽油费","开车油费"],
"paint-calculator":["paint","paint calculator","how much paint","paint a room","gallons of paint","wall paint","paint coverage","油漆","需要多少油漆","刷墙"],
"concrete-calculator":["concrete","concrete calculator","how much concrete","concrete volume","cement for slab","concrete slab","混凝土","水泥","需要多少混凝土"]
};

const SEARCH_SUGGESTIONS=[
["How much is my monthly mortgage payment?","mortgage-calculator"],
["What will my car payment be?","auto-loan-calculator"],
["What is 20% of 500?","percentage-calculator"],
["How much should I tip at a restaurant?","tip-calculator"],
["How many days are between two dates?","days-between-dates-calculator"],
["How many calories should I eat?","calorie-calculator"],
["How much paint do I need for a room?","paint-calculator"],
["What is my BMI?","bmi"]
];

function searchNormalize(value){
  return String(value||"").toLowerCase()
    .replace(/[’']/g,"")
    .replace(/[^\p{L}\p{N}%]+/gu," ")
    .trim();
}
const SEARCH_STOP=new Set(["a","an","the","i","my","me","is","am","are","to","of","for","how","what","will","can","do","does","should","would","be","calculate","calculator","please","find","get","on","in","and","or","with","from","between","this","that","two","number","numbers"]);
function searchTokens(value){
  return searchNormalize(value).split(/\s+/).filter(x=>x.length>1&&!SEARCH_STOP.has(x));
}
function searchScore(card,q){
  const href=(card.getAttribute("href")||"").replace(/\/$/,"").split("/").pop();
  const title=searchNormalize(card.querySelector("h3")?.textContent||"");
  const text=searchNormalize(card.textContent+" "+href);
  const aliases=(SEARCH_INTENTS[href]||[]);
  if(!q)return 0;
  let score=0;
  if(text.includes(q))score+=38;
  if(title.includes(q))score+=45;
  for(const alias of aliases){
    const a=searchNormalize(alias);
    if(!a)continue;
    if(a===q)score+=90;
    else if(a.includes(q)||q.includes(a))score+=65;
    else{
      const qt=searchTokens(q), at=searchTokens(a);
      if(qt.length&&at.length){
        const overlap=qt.filter(t=>at.some(x=>x===t||x.startsWith(t)||t.startsWith(x))).length;
        score+=overlap*12;
      }
    }
  }
  const qt=searchTokens(q);
  for(const t of qt){
    if(text.split(/\s+/).some(x=>x===t||x.startsWith(t)||t.startsWith(x)))score+=8;
  }
  return score;
}
function initSearch(){
  const inputs=[document.getElementById("search"),document.getElementById("catalogSearch")].filter(Boolean);
  if(!inputs.length)return;
  const cards=[...document.querySelectorAll("#calculators .grid .card")];
  const categories=[...document.querySelectorAll("#calculators .category")];
  const clear=document.getElementById("clearSearch");
  const status=document.getElementById("searchStatus");

  if(!document.getElementById("searchSuggestionStyle")){
    const style=document.createElement("style");
    style.id="searchSuggestionStyle";
    style.textContent=`
      .search,.catalog-search{position:relative;z-index:20}
      .search-suggestions{position:absolute;left:0;right:0;top:calc(100% + 10px);background:rgba(255,255,255,.98);border:1px solid #e3e6f2;border-radius:18px;box-shadow:0 18px 50px rgba(30,35,70,.14);padding:8px;overflow:hidden;z-index:100;backdrop-filter:blur(16px)}
      .search-suggestion{display:flex;align-items:center;gap:12px;width:100%;border:0;background:transparent;text-align:left;padding:12px 14px;border-radius:12px;color:#17213b;cursor:pointer;font:inherit}
      .search-suggestion:hover,.search-suggestion:focus-visible{background:#f2f1ff;outline:none}
      .search-suggestion-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:#eeecff;color:#5147d8;flex:none}
      .search-suggestion-copy{min-width:0;display:flex;flex-direction:column;gap:2px}
      .search-suggestion-copy strong{font-size:14px;line-height:1.3}
      .search-suggestion-copy span{font-size:11px;color:#7a829a}
      .search-suggestion-empty{padding:15px;color:#727b94;font-size:13px}
      @media(max-width:640px){.search-suggestions{left:-4px;right:-4px}.search-suggestion{padding:13px 11px}}
    `;
    document.head.appendChild(style);
  }

  const dropdowns=new Map();
  const makeDropdown=input=>{
    let box=document.createElement("div");
    box.className="search-suggestions";
    box.hidden=true;
    box.setAttribute("role","listbox");
    input.parentElement?.appendChild(box);
    dropdowns.set(input,box);
    return box;
  };
  inputs.forEach(makeDropdown);

  const renderSuggestions=(input,value)=>{
    const box=dropdowns.get(input);
    if(!box)return;
    const q=searchNormalize(value);
    box.innerHTML="";
    let results;
    if(!q){
      results=SEARCH_SUGGESTIONS.map(([prompt,slug])=>({prompt,slug,score:1}));
    }else{
      results=cards.map(card=>({card,slug:(card.getAttribute("href")||"").replace(/\/$/,"").split("/").pop(),score:searchScore(card,q)}))
        .filter(x=>x.score>=8).sort((a,b)=>b.score-a.score).slice(0,6)
        .map(x=>({prompt:x.card.querySelector("h3")?.textContent||x.slug,slug:x.slug,card:x.card,score:x.score}));
    }
    if(!results.length){
      box.innerHTML='<div class="search-suggestion-empty">No close match yet. Try describing what you want to calculate.</div>';
      box.hidden=false;
      return;
    }
    results.forEach(item=>{
      const button=document.createElement("button");
      button.type="button";
      button.className="search-suggestion";
      button.setAttribute("role","option");
      const card=item.card;
      const label=card?.querySelector("h3")?.textContent||item.prompt;
      const icon=card?.querySelector(".icon")?.textContent?.trim()||"⌕";
      button.innerHTML='<span class="search-suggestion-icon" aria-hidden="true">'+icon+'</span><span class="search-suggestion-copy"><strong></strong><span></span></span>';
      button.querySelector("strong").textContent=q?(item.prompt):item.prompt;
      button.querySelector("span span").textContent=label===item.prompt?"Open calculator":label;
      button.addEventListener("click",()=>{window.location.href=item.slug+"/";});
      box.appendChild(button);
    });
    box.hidden=false;
  };

  const hideAll=()=>dropdowns.forEach(box=>box.hidden=true);
  const run=(value,activeInput)=>{
    const q=searchNormalize(value);
    let ranked=cards.map(card=>({card,score:searchScore(card,q)}));
    if(q)ranked=ranked.filter(x=>x.score>0);
    ranked.sort((a,b)=>b.score-a.score);
    const matched=new Set(ranked.map(x=>x.card));
    cards.forEach(card=>card.hidden=!!q&&!matched.has(card));
    categories.forEach(cat=>{
      const hasVisible=cat.querySelector(".grid .card:not([hidden])");
      cat.hidden=!!q&&!hasVisible;
    });
    inputs.forEach(input=>{if(input.value!==value)input.value=value;});
    if(clear)clear.hidden=!q;
    if(status)status.textContent=q?(ranked.length+" result"+(ranked.length===1?"":"s")):"50 tools";
    renderSuggestions(activeInput||inputs[0],value);
  };

  inputs.forEach(input=>{
    input.setAttribute("autocomplete","off");
    input.addEventListener("focus",()=>renderSuggestions(input,input.value));
    input.addEventListener("input",()=>run(input.value,input));
    input.addEventListener("keydown",ev=>{
      if(ev.key==="Escape"){hideAll();return;}
      if(ev.key==="Enter"){
        const q=searchNormalize(input.value);
        const best=cards.map(card=>({card,score:searchScore(card,q)})).sort((a,b)=>b.score-a.score)[0];
        if(q&&best&&best.score>0){ev.preventDefault();window.location.href=best.card.getAttribute("href");}
      }
    });
  });
  document.addEventListener("click",ev=>{if(!inputs.some(input=>input.parentElement?.contains(ev.target)))hideAll();});
  clear?.addEventListener("click",()=>{run("",inputs[0]);inputs[0]?.focus();});
  run("",inputs[0]);
}
document.addEventListener("DOMContentLoaded",initSearch);