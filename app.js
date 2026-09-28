(() => {
  const $ = (s) => document.querySelector(s);
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
    const prec={"+":1,"-":1,"*":2,"/":2,"^":3};
    const output=[], ops=[];
    ts.forEach(tok=>{
      if(tok.t==="num") output.push(tok);
      else if(tok.t==="fn") ops.push(tok);
      else if(tok.t===","){while(ops.length&&ops[ops.length-1].t!=="(")output.push(ops.pop());}
      else if(tok.t==="(") ops.push(tok);
      else if(tok.t===")"){
        while(ops.length&&ops[ops.length-1].t!=="(")output.push(ops.pop());
        if(!ops.length)throw Error("paren");
        ops.pop(); if(ops.length&&ops[ops.length-1].t==="fn")output.push(ops.pop());
      } else {
        while(ops.length && ops[ops.length-1].t!=="(" && ops[ops.length-1].t!=="fn" &&
          (prec[ops[ops.length-1].t]>prec[tok.t] || (prec[ops[ops.length-1].t]===prec[tok.t]&&tok.t!=="^"))) output.push(ops.pop());
        ops.push(tok);
      }
    });
    while(ops.length){if(ops[ops.length-1].t==="(")throw Error("paren");output.push(ops.pop());}
    const st=[];
    for(const tok of output){
      if(tok.t==="num")st.push(tok.v);
      else if(tok.t==="fn"){const x=st.pop();if(x===undefined)throw Error("fn");const f={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,log:Math.log10,ln:Math.log,abs:Math.abs}[tok.v];st.push(f(x));}
      else {const y=st.pop(),x=st.pop();if(x===undefined||y===undefined)throw Error("op");st.push(({"+":(a,b)=>a+b,"-":(a,b)=>a-b,"*":(a,b)=>a*b,"/":(a,b)=>a/b,"^":(a,b)=>Math.pow(a,b)})[tok.t](x,y));}
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
    if(t==="gcf"||t==="lcm"){if(!Number.isFinite(a)||!Number.isFinite(b)||a===0||b===0)return out("Error","Enter two non-zero integers");const g=gcd(a,b);return out(t==="gcf"?"GCF":"LCM",String(t==="gcf"?g:Math.abs(a*b)/g));}
    if(t==="random"){if(!Number.isFinite(a)||!Number.isFinite(b))return out("Error","Enter minimum and maximum");let lo=Math.ceil(a),hi=Math.floor(b);if(lo>hi)[lo,hi]=[hi,lo];return out("Random number",String(Math.floor(Math.random()*(hi-lo+1))+lo),"Inclusive range: "+lo+" to "+hi);}
    if(t==="probability"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<=0||a>b)return out("Error","Use favorable outcomes ≥ 0 and total outcomes > 0");return out("Probability",((a/b)*100).toFixed(2)+"%");}
    if(t==="quadratic-formula-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a===0)return out("Error","A must be non-zero");const disc=b*b-4*a*c;if(disc<0)return out("Complex roots",(-b/(2*a)).toFixed(4)+" ± "+(Math.sqrt(-disc)/(2*a)).toFixed(4)+"i");const s=Math.sqrt(disc);return out("Roots",(((-b+s)/(2*a)).toFixed(4))+" and "+(((-b-s)/(2*a)).toFixed(4)));}
    if(t==="fraction-calculator"){if(![a,b,c,d].every(Number.isFinite)||b===0||d===0)return out("Error","Enter valid fractions with non-zero denominators");const op=$("#op")?.value||"+";let n,q;if(op==="+"){n=a*d+c*b;q=b*d}else if(op==="-"){n=a*d-c*b;q=b*d}else if(op==="×"){n=a*c;q=b*d}else{if(c===0)return out("Error","Cannot divide by zero");n=a*d;q=b*c}if(q<0){n=-n;q=-q}const g=gcd(n,q)||1;return out("Result",(n/g)+"/"+(q/g));}
    if(t==="ratio-calculator"){if(![a,b,c].every(Number.isFinite)||b===0)return out("Error","Enter ratio A:B and a known value");return out("Equivalent value",(a/b*c).toLocaleString(undefined,{maximumFractionDigits:8}),"Scaled from "+a+":"+b);}
    if(t==="standard-deviation-calculator"){const x=values("values"),sample=$("#sample")?.checked;if(x.length<(sample?2:1))return out("Error",sample?"Enter at least 2 values":"Enter at least 1 value");const mean=x.reduce((p,q)=>p+q,0)/x.length;const variance=x.reduce((p,q)=>p+(q-mean)**2,0)/(x.length-(sample?1:0));return out("Standard deviation",Math.sqrt(variance).toFixed(6),sample?"Sample standard deviation":"Population standard deviation");}
    if(t==="scientific-calculator"){const expr=$("#expression")?.value?.trim();if(!expr)return out("Error","Enter an expression");try{return out("Result",String(Number(evalScientific(expr).toFixed(12))),"Supports +, −, ×, ÷, powers, parentheses, π, sqrt, sin, cos, tan, log, ln and abs.");}catch(err){return out("Error","Unsupported or invalid expression");}}

    if(t==="mortgage"||t==="loan"){const p=monthlyPayment(a,b,c);if(p===null)return out("Error","Enter a positive amount, valid rate, and term");const n=Math.round(c*12);return out("Monthly payment",money(p),"Total interest: "+money(p*n-a));}
    if(t==="auto-loan-calculator"){const down=Math.max(0,Number.isFinite(d)?d:0);if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||a<=0||down>=a)return out("Error","Check vehicle price, down payment, rate, and term");const p=monthlyPayment(a-down,b,c);const n=Math.round(c*12);return out("Monthly payment",money(p),"Amount financed: "+money(a-down)+" · Total interest: "+money(p*n-(a-down)));}
    if(["compound","investment-calculator","savings-calculator","retirement-calculator"].includes(t)){const fv=futureValue(a,b,c,d||12,e||0);if(fv===null)return out("Error","Check principal, rate, years, frequency, and contribution");const count=Math.round(c*(d||12));return out("Estimated future value",money(fv),"Contributions: "+money((e||0)*count)+" · Estimate only.");}
    if(t==="simple-interest-calculator"){if(![a,b,c].every(Number.isFinite)||a<0||c<0)return out("Error","Enter principal, rate, and non-negative time");const interest=a*b/100*c;return out("Interest",money(interest),"Total amount: "+money(a+interest));}
    if(t==="debt-payoff-calculator"){if(![a,b,c].every(Number.isFinite)||a<=0||c<=0)return out("Error","Enter balance, APR, and monthly payment");const r=b/1200;if(r&&c<=a*r)return out("Error","Payment must exceed monthly interest");const months=r?-Math.log(1-a*r/c)/Math.log(1+r):a/c;return out("Estimated payoff",Math.ceil(months)+" months","Estimated interest: "+money(c*months-a));}
    if(t==="tip"){if(!Number.isFinite(a)||!Number.isFinite(b))return out("Error","Enter bill and tip rate");const tip=a*b/100,total=a+tip,people=Math.max(1,Math.trunc(Number.isFinite(c)?c:1));return out("Total / per person",money(total)+" / "+money(total/people),"Tip: "+money(tip)+" · "+people+" person(s)");}
    if(t==="discount"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0)return out("Error","Enter a valid original price and discount");const save=a*b/100;return out("Sale price / savings",money(a-save)+" / "+money(save));}
    if(t==="sales-tax-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0)return out("Error","Enter a valid price and tax rate");const tax=a*b/100;return out("Total / tax",money(a+tax)+" / "+money(tax));}
    if(t==="profit-margin-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0)return out("Error","Revenue must be greater than 0");return out("Profit margin",(((a-b)/a)*100).toFixed(2)+"%","Profit: "+money(a-b)+" · Revenue: "+money(a));}

    if(t==="bmi"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0)return out("Error","Enter positive weight and height");const h=b/100,bmi=a/(h*h);return out("BMI",bmi.toFixed(1),"Weight "+a+" kg · Height "+b+" cm");}
    if(t==="bmr"){const sex=$("#sex")?.value||"male";if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||c<=0)return out("Error","Enter weight, height, and age");const base=10*a+6.25*b-5*c+(sex==="female"?-161:5);return out("Estimated BMR",Math.round(base)+" kcal/day","Mifflin–St Jeor estimate.");}
    if(t==="tdee"||t==="calorie-calculator"){const sex=$("#sex")?.value||"male",activity=Number.isFinite(d)?d:1.2;if(![a,b,c].every(Number.isFinite)||a<=0||b<=0||c<=0||activity<=0)return out("Error","Enter weight, height, age, and activity");const base=10*a+6.25*b-5*c+(sex==="female"?-161:5);return out("Estimated daily calories",Math.round(base*activity)+" kcal/day","Mifflin–St Jeor × activity factor; general estimate.");}
    if(t==="body-fat-calculator"){const sex=$("#sex")?.value||"male";if(!Number.isFinite(a)||!Number.isFinite(b)||a<=0||b<=0)return out("Error","Enter BMI and age");const bf=1.2*a+0.23*b-(sex==="female"?10.8:5.4)-5.4;return out("Estimated body fat",Math.max(0,bf).toFixed(1)+"%","Deurenberg-style estimate; not a direct measurement.");}
    if(t==="ideal-weight-calculator"){const sex=$("#sex")?.value||"male";if(!Number.isFinite(b)||b<=0)return out("Error","Enter height");const inches=b/2.54,base=sex==="female"?45.5:50;return out("Estimated ideal weight",(base+2.3*Math.max(0,inches-60)).toFixed(1)+" kg","Devine formula estimate; not a health target.");}
    if(t==="pace-calculator"){if(!Number.isFinite(a)||!Number.isFinite(b)||a<0||b<=0)return out("Error","Enter time and a positive distance");return out("Pace",(a/b).toFixed(2)+" min/unit");}
    if(t==="speed"){if(!Number.isFinite(a)||!Number.isFinite(b)||b<=0)return out("Error","Time must be greater than 0");return out("Speed",(a/b).toFixed(3)+" distance/time");}

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
  });
  window.CalculatorHub={calc};
})();
function initSearch(){const s=document.getElementById("search");if(!s)return;const cards=[...document.querySelectorAll(".card")];s.addEventListener("input",()=>{const q=s.value.trim().toLowerCase();cards.forEach(c=>{c.style.display=!q||c.textContent.toLowerCase().includes(q)?"":"none"})})}
document.addEventListener("DOMContentLoaded",initSearch);