(() => {
  "use strict";
  const categories = window.LA_RONDA_CATEGORIES || [];
  const catalog = (window.LA_RONDA_CATALOG || []).filter(item => item && item.verified === true && item.file && !/^https?:/i.test(item.file));
  const grid = document.getElementById("category-grid");
  const materials = document.getElementById("materials-grid");
  const search = document.getElementById("search");
  const clear = document.getElementById("clear-search");
  const count = document.getElementById("catalog-count");
  let activeCategory = "";

  const normalize = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const categoryLabel = id => (categories.find(category => category.id === id) || {}).name || "Colección";

  function renderCategories(query = "") {
    grid.replaceChildren();
    const filtered = categories.filter(category => {
      const haystack = normalize(category.name + " " + category.description);
      return !query || haystack.includes(normalize(query));
    });
    filtered.forEach(category => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-card tone-" + category.tone;
      button.setAttribute("aria-pressed", String(activeCategory === category.id));
      button.innerHTML = '<span class="category-icon" aria-hidden="true"></span><span><strong></strong><small></small></span>';
      button.querySelector(".category-icon").textContent = category.icon;
      button.querySelector("strong").textContent = category.name;
      button.querySelector("small").textContent = category.description;
      button.addEventListener("click", () => {
        activeCategory = activeCategory === category.id ? "" : category.id;
        renderCategories(search.value);
        renderMaterials(search.value);
      });
      grid.append(button);
    });
    if (!filtered.length) {
      const note = document.createElement("p");
      note.className = "empty-state";
      note.textContent = "No encontramos una categoría con esas palabras.";
      grid.append(note);
    }
  }

  function renderMaterials(query = "") {
    materials.replaceChildren();
    const term = normalize(query);
    const filtered = catalog.filter(item => {
      const matchesCategory = !activeCategory || item.category === activeCategory;
      const haystack = normalize([item.title, item.author, item.description, categoryLabel(item.category)].join(" "));
      return matchesCategory && (!term || haystack.includes(term));
    });
    count.textContent = filtered.length ? filtered.length + " materiales disponibles" : "Colección en preparación";
    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = '<div class="empty-icon" aria-hidden="true">🌿</div><h4></h4><p></p>';
      empty.querySelector("h4").textContent = query || activeCategory ? "Todavía no encontramos ese material" : "Estamos preparando los primeros materiales";
      empty.querySelector("p").textContent = query || activeCategory
        ? "Probá con otras palabras o elegí otra carpeta. Solo incorporamos archivos completos y con derechos verificados."
        : "La biblioteca se está armando con cuidado. Muy pronto vas a encontrar materiales reales, listos para leer, mirar y descargar desde acá.";
      materials.append(empty);
      return;
    }
    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "material-card";
      const title = document.createElement("h4");
      title.textContent = item.title;
      const description = document.createElement("p");
      description.textContent = item.description || "";
      const meta = document.createElement("small");
      meta.textContent = [item.author, item.format, item.size].filter(Boolean).join(" · ");
      const download = document.createElement("a");
      download.className = "button button-primary";
      download.href = item.file;
      download.setAttribute("download", "");
      download.textContent = "Descargar";
      card.append(title, description, meta, download);
      materials.append(card);
    });
  }

  search.addEventListener("input", () => {
    clear.hidden = !search.value;
    renderCategories(search.value);
    renderMaterials(search.value);
  });
  clear.addEventListener("click", () => {
    search.value = "";
    clear.hidden = true;
    activeCategory = "";
    renderCategories();
    renderMaterials();
    search.focus();
  });

  renderCategories();
  renderMaterials();
})();