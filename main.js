// ConectaCT — lógica simples para dados e acessibilidade

// SUBSTITUA pelo link do seu Google Forms:
var FORM_URL = "https://www.joinville.sc.gov.br/institucional/sas/ctu/";

document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("dt").textContent = new Date().toLocaleDateString("pt-BR");

  const formBtns = [document.getElementById("btn-form"), document.getElementById("btn-form-2")];
  formBtns.forEach(btn => { if (btn) btn.href = FORM_URL; });

  // Carregar eventos
  try {
    const res = await fetch("data/events.json");
    const events = await res.json();
    renderEvents(events);
  } catch (e) {
    renderEvents([]);
  }

  // Carregar contatos
  try {
    const resC = await fetch("data/contacts.json");
    const contacts = await resC.json();
    renderContacts(contacts);
  } catch (e) {
    renderContacts([]);
  }
});

function renderEvents(events) {
  const list = document.getElementById("event-list");
  list.setAttribute("aria-busy", "false");
  if (!events.length) {
    list.innerHTML = `<div class="card"><p class="muted">Sem eventos cadastrados no momento. Use o botão “Enviar ação / evento”.</p></div>`;
    return;
  }
  list.innerHTML = events.map(ev => `
    <article class="card">
      <span class="badge">${ev.type}</span>
      <h3>${ev.title}</h3>
      <p class="muted">${ev.place} — ${ev.date}</p>
      <p>${ev.summary}</p>
      ${ev.link ? `<p><a target="_blank" rel="noopener" href="${ev.link}">saiba mais</a></p>` : ""}
    </article>
  `).join("");
}

function renderContacts(contacts) {
  const ul = document.getElementById("contact-list");
  if (!contacts.length) {
    ul.innerHTML = `<li class="muted">Personalize com os contatos do seu município.</li>`;
    return;
  }
  ul.innerHTML = contacts.map(c => `
    <li>
      <strong>${c.name}:</strong>
      ${c.phone ? ` ${c.phone} |` : ""}
      ${c.address ? ` Endereço: ${c.address} |` : ""}
      ${c.site ? ` <a target="_blank" rel="noopener" href="${c.site}">site</a>` : ""}
    </li>
  `).join("");
}
