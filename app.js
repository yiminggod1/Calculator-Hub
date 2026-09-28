(() => {
  const $ = (s) => document.querySelector(s);
  const num = (id, fallback = 0) => {
    const el = document.getElementById(id);
    const n = Number(el?.value);
    return Number.isFinite(n) ? n : fallback;
  };
  const money = (n) => Number.isFinite(n) ? "$" + n.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}) : "—";
  const out = (label, value, note="Calculated locally in your browser.") => {
    const r = $("#result");
    if (r) r.innerHTML = "<span>"+label+"</span><strong>"+value+"</strong><small>"+note+"</small>";
  };
  const gcd=(a,b)=>{a=Math.abs(Math.trunc(a));b=Math.abs(Math.trunc(b));while(b){[a,b]=[b,a%b]}return a};
  const values=()=>($("#a")?.value||"").split(",").map(Number).filter(Number.isFinite);

  function calc() {
    const t=document.body.dataset.calc;
    const a=num("a"), b=num("b"), c=num("c"), d=num("d"), e=num("e");
    if (t==="percentage") return out("Percentage", (a*b/100).toLocaleString(undefined,{maximumFractionDigits:8}));
    if (t==="percentage-change") return a===0?out("Error","Starting value cannot be 0"):out("Percentage change",(((b-a)/a)*100).toFixed(2)+"%");
    if (t==="average") {const x=values();return out("Average",x.length?(x.reduce((p,q)=>p+q,0)/x.length).toFixed(4):"Enter comma-separated numbers");}
    if (t==="gcf"||t==="lcm"){const g=gcd(a,b);return out(t==="gcf"?"GCF":"LCM",String(t==="gcf"?g:(a&&b?Math.abs(a*b)/g:0)));}
    if (t==="random"){let lo=Math.ceil(a),hi=Math.floor(b);if(lo>hi)[lo,hi]=[hi,lo];return out("Random number",String(Math.floor(Math.random()*(hi-lo+1))+lo));}
    if (t==="probability") return b<=0?out("Error","Total outcomes must be greater than 0"):out("Probability",((a/b)*100).toFixed(2)+"%");
    if (t==="quadratic-formula-calculator"){const disc=b*b-4*a*c;if(a===0)return out("Error","A cannot be 0");if(disc<0)return out("Complex roots",(-b/(2*a)).toFixed(4)+" ± "+(Math.sqrt(-disc)/(2*a)).toFixed(4)+"i");return out("Roots",(((-b+Math.sqrt(disc))/(2*a)).toFixed(4))+" and "+(((-b-Math.sqrt(disc))/(2*a)).toFixed(4)));}
    if (t==="fraction-calculator"){if(b===0||d===0)return out("Error","Denominators cannot be 0");const op=(document.getElementById("op")?.value)||"+";let n1=a,n2=c,q1=b,q2=d;let n,q;if(op==="+"){n=n1*q2+n2*q1;q=q1*q2}else if(op==="-"){n=n1*q2-n2*q1;q=q1*q2}else if(op==="×"){n=n1*n2;q=q1*q2}else{n=n1*q2;q=q1*n2}const g=gcd(n,q);return out("Result",(n/g)+"/"+(q/g));}
    if (["mortgage","loan","auto-loan-calculator"].includes(t)){const r=b/1200,n=c*12;if(a<=0||c<=0)return out("Error","Enter positive loan amount and term");const pmt=r? a*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):a/n;return out("Monthly payment",money(pmt), "Estimated total interest: "+money(pmt*n-a));}
    if (t==="compound"||t==="investment-calculator"||t==="savings-calculator"||t==="retirement-calculator"){const rate=b/100, years=c, periods=Math.max(1,d||12), contrib=e||0;const periodic=rate/periods, count=years*periods;const growth=periodic?Math.pow(1+periodic,count):1;const fv=a*growth+contrib*((growth-1)/(periodic||1));return out("Estimated future value",money(fv),"Estimate only; actual returns vary.");}
    if (t==="simple-interest-calculator") return out("Interest",money(a*b/100*c),"Simple interest = principal × rate × time.");
    if (t==="debt-payoff-calculator"){const r=b/1200;if(a<=0||c<=0)return out("Error","Enter positive balance and payment");if(r&&c<=a*r)return out("Error","Payment must exceed monthly interest");const months=r? -Math.log(1-a*r/c)/Math.log(1+r):a/c;return out("Estimated payoff",Math.ceil(months)+" months","Estimated interest: "+money(c*months-a));}
    if (t==="tip") {const tip=a*b/100,total=a+tip,people=Math.max(1,Math.trunc(c)||1);return out("Total / per person",money(total)+" / "+money(total/people));}
    if (t==="discount"){const save=a*b/100;return out("Sale price / savings",money(a-save)+" / "+money(save));}
    if (t==="sales-tax-calculator"){const tax=a*b/100;return out("Total / tax",money(a+tax)+" / "+money(tax));}
    if (t==="profit-margin-calculator") return a===0?out("Error","Revenue cannot be 0"):out("Profit margin",(((a-b)/a)*100).toFixed(2)+"%");
    if (t==="bmi"){const h=b/100;return h<=0?out("Error","Enter height"):out("BMI",(a/(h*h)).toFixed(1),"Informational estimate; adult BMI categories are general screening ranges.");}
    if (t==="bmr"){const sex=(document.getElementById("sex")?.value)||"male";const h=b,w=a,age=c;const base=10*w+6.25*h-5*age+(sex==="female"?-161:5);return out("Estimated BMR",Math.round(base)+" kcal/day","General estimate using the Mifflin–St Jeor equation.");}
    if (t==="tdee"||t==="calorie-calculator"){const sex=(document.getElementById("sex")?.value)||"male";const h=b,w=a,age=c,activity=d||1.2;const base=10*w+6.25*h-5*age+(sex==="female"?-161:5);return out("Estimated daily calories",Math.round(base*activity)+" kcal/day","General informational estimate.");}
    if (t==="body-fat-calculator"){const sex=(document.getElementById("sex")?.value)||"male";const bmi=a,age=b;const bf=1.2*bmi+0.23*age-(sex==="female"?10.8:5.4)-5.4;return out("Estimated body fat",bf.toFixed(1)+"%","Formula-based estimate; not a measurement.");}
    if (t==="ideal-weight-calculator"){const inches=b/2.54;const base=sexVal()==="female"?45.5:50;return out("Estimated ideal weight",(base+2.3*Math.max(0,inches-60)).toFixed(1)+" kg","General formula estimate, not a health target.");}
    if (t==="pace-calculator"){const minutes=a, distance=b;return distance<=0?out("Error","Distance must be greater than 0"):out("Pace",(minutes/distance).toFixed(2)+" min/unit");}
    if (t==="speed") return b===0?out("Error","Time cannot be 0"):out("Speed",(a/b).toFixed(3)+" distance/time");
    if (t==="fuel-cost-calculator") return b<=0?out("Error","Fuel economy must be greater than 0"):out("Fuel cost",money(a/b*c));
    if (t==="area-calculator"){const shape=document.getElementById("shape")?.value||"rectangle";let area=shape==="circle"?Math.PI*a*a:shape==="triangle"?a*b/2:a*b;return out("Area",area.toFixed(4)+" square units");}
    if (t==="paint-calculator") return b<=0?out("Error","Coverage must be greater than 0"):out("Paint needed",Math.ceil((a*(c||1))/b)+" gallons","Estimate; add extra for texture, waste, and multiple coats.");
    if (t==="concrete-calculator") return out("Concrete volume",(a*b*c).toFixed(3)+" cubic units");
    if (t==="ratio-calculator") return b===0?out("Error","Second ratio value cannot be 0"):out("Equivalent value",(a/b*c).toFixed(4));
    if (t==="standard-deviation-calculator"){const x=values();if(!x.length)return out("Error","Enter comma-separated numbers");const mean=x.reduce((p,q)=>p+q,0)/x.length;const sample=document.getElementById("sample")?.checked;const sd=Math.sqrt(x.reduce((p,q)=>p+(q-mean)**2,0)/(x.length-(sample?1:0)));return out("Standard deviation",sd.toFixed(6));}
    if (t==="unit-converter"||t==="length-converter"){const factor=b||1;return out("Converted value",(a*factor).toLocaleString(undefined,{maximumFractionDigits:8}));}
    if (t==="weight-converter")return out("Converted value",(a*(b||1)).toLocaleString(undefined,{maximumFractionDigits:8}));
    if (t==="temperature-converter"){const from=document.getElementById("from")?.value||"C",to=document.getElementById("to")?.value||"F";let x=from==="C"?a:from==="F"?(a-32)*5/9:a-273.15;let y=to==="C"?x:to==="F"?x*9/5+32:x+273.15;return out("Converted temperature",y.toFixed(2)+" °"+to);}
    if (t==="volume-converter")return out("Converted volume",(a*(b||1)).toLocaleString(undefined,{maximumFractionDigits:8}));
    if (t==="date-difference-calculator"||t==="days-between-dates-calculator"||t==="business-days-calculator"){const s=$("#start")?.value,e1=$("#end")?.value;if(!s||!e1)return out("Result","Select both dates");let d1=new Date(s+"T00:00:00"),d2=new Date(e1+"T00:00:00");if(d2<d1)[d1,d2]=[d2,d1];let days=Math.round((d2-d1)/86400000);if(t==="business-days-calculator"){let n=0;for(let x=new Date(d1);x<=d2;x.setDate(x.getDate()+1)){const day=x.getDay();if(day!==0&&day!==6)n++}days=n}return out(t==="business-days-calculator"?"Business days":"Days",String(days));}
    if (t==="day-of-week-calculator"){const x=$("#date")?.value;if(!x)return out("Result","Select a date");return out("Day",new Date(x+"T00:00:00").toLocaleDateString(undefined,{weekday:"long"}));}
    if (t==="age"){const x=$("#date")?.value;if(!x)return out("Age","Select a birth date");const d0=new Date(x+"T00:00:00"),now=new Date();let age=now.getFullYear()-d0.getFullYear();if(new Date(now.getFullYear(),d0.getMonth(),d0.getDate())>now)age--;return out("Age",age+" years");}
    if (t==="time-duration-calculator")return out("Duration",Math.abs(a-b).toFixed(2)+" hours");
    if (t==="countdown-calculator"){const x=$("#date")?.value;if(!x)return out("Countdown","Select a date");const ms=new Date(x)-new Date();return out("Time remaining",ms>0?Math.floor(ms/86400000)+" days":"Target reached");}
    out("Result","Enter values and calculate");
  }
  function sexVal(){return document.getElementById("sex")?.value||"male";}
  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-action=calc]").forEach(btn=>btn.addEventListener("click",calc));
    document.addEventListener("click",(ev)=>{if(ev.target.closest("[data-action=calc]")){ev.preventDefault();ev.stopImmediatePropagation();calc();}},{capture:true});
  });
})();
function initSearch(){const s=document.getElementById("search");if(!s)return;const cards=[...document.querySelectorAll(".card")];s.addEventListener("input",()=>{const q=s.value.trim().toLowerCase();cards.forEach(c=>{c.style.display=!q||c.textContent.toLowerCase().includes(q)?"":"none"})})}
document.addEventListener("DOMContentLoaded",initSearch);