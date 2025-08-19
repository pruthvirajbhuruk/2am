let user = { id: Date.now(), username: "@frontend_pp_bot" }; // fake user until Telegram provides
document.getElementById("username").innerText = user.username;
document.getElementById("refLink").value = `https://t.me/frontend_pp_bot?start=${user.id}`;

function showPage(p) {
  ["home","invest","portfolio","admin"].forEach(id=>{
    document.getElementById(id).style.display = (id===p)?"block":"none";
  });
}

// localStorage to simulate backend
function submitInvestment(){
  const plan = document.getElementById("plan").value;
  const amt  = document.getElementById("amount").value;
  const hash = document.getElementById("hash").value;
  if(!plan || !amt || !hash) return alert("Fill all fields!");
  const data={plan,amount:amt,hash, next: "30 days later", earn:0, ref:0};
  localStorage.setItem("portfolio", JSON.stringify(data));
  alert("Submitted! (fake)");
}

function loadPortfolio(){
  const d = JSON.parse(localStorage.getItem("portfolio")||"{}");
  document.getElementById("pPlan").innerText = d.plan || "-";
  document.getElementById("pAmt").innerText  = d.amount || "0";
  document.getElementById("pDate").innerText = d.next   || "-";
  document.getElementById("pEarn").innerText = d.earn  || "0";
  document.getElementById("pRef").innerText  = d.ref   || "0";
}
loadPortfolio();

function copyRef(){navigator.clipboard.writeText(document.getElementById("refLink").value);alert("Copied!")}
