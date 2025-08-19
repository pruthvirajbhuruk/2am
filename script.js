let user = { id: Date.now(), username: "@frontend_pp_bot" }; // will be replaced by Telegram automatically
document.getElementById("username").innerText = user.username;
document.getElementById("refLink").value = `https://t.me/frontend_pp_bot?start=${user.id}`;

function showPage(p){
  ["home","invest","portfolio","admin"].forEach(id=>{
    document.getElementById(id).style.display = (id===p)?"block":"none";
  });
}

function copyRef(){
  navigator.clipboard.writeText(document.getElementById("refLink").value);
  alert("Copied referral link!");
}

// localStorage fake portfolio
function submitInvestment(){
  const plan = plan.value, amt = amount.value, hash = document.getElementById("hash").value;
  if(!plan || !amt || !hash) return alert("Please fill all fields!");
  const fake = {plan, amount: amt, next:"30 days", earn: "0", ref:"0"};
  localStorage.setItem("pf", JSON.stringify(fake));
  alert("Submitted (simulation).");
  loadPortfolio();
}

function loadPortfolio(){
  const d = JSON.parse(localStorage.getItem("pf")||"{}");
  document.getElementById("pPlan").innerText = d.plan || "-";
  document.getElementById("pAmt").innerText = d.amount || "0";
  document.getElementById("pDate").innerText = d.next || "-";
  document.getElementById("pEarn").innerText= d.earn || "0";
  document.getElementById("pRef").innerText = d.ref  || "0";
}
loadPortfolio();
