(() => {
  "use strict";
  const categories = window.LA_RONDA_CATEGORIES || [];
  const isLocalFile = path => typeof path === "string" &&
    path.startsWith("assets/archivos/") &&
    !path.includes("..") &&
    !/^https?:/i.test(path);
  const catalog = (window.LA_RONDA_CATALOG || []).filter(item =>
    item && item.verified === true &&
    isLocalFile(item.file) &&
    isLocalFile(item.preview) &&
    item.title && item.author && item.license && item.credit && item.source
  );
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
    const filtered = categories.filter(category => !query ||
      normalize(category.name + " " + category.description).includes(normalize(query)));
    filtered.forEach(category => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-card tone-" + category.tone;
      button.setAttribute("aria-pressed", String(activeCategory === category.id));
      const icon = document.createElement("span");
      icon.className = "category-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = category.icon;
      const textWrap = document.createElement("span");
      const strong = document.createElement("strong");
      const small = document.createElement("small");
      strong.textContent = category.name;
      small.textContent = category.description;
      textWrap.append(strong, small);
      button.append(icon, textWrap);
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
    count.textContent = filtered.length ? filtered.length + (filtered.length === 1 ? " material disponible" : " materiales disponibles") : "Colección en preparación";
    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      const icon = document.createElement("div");
      icon.className = "empty-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "🌿";
      const title = document.createElement("h4");
      const paragraph = document.createElement("p");
      title.textContent = query || activeCategory ? "Todavía no encontramos ese material" : "Estamos preparando más materiales";
      paragraph.textContent = query || activeCategory
        ? "Probá con otras palabras o elegí otra carpeta. Solo incorporamos archivos completos y con derechos revisados."
        : "La biblioteca crece de a poco y con cuidado. Ya hay primeros imprimibles listos para usar.";
      empty.append(icon, title, paragraph);
      materials.append(empty);
      return;
    }
    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "material-card";
      const previewLink = document.createElement("a");
      previewLink.className = "material-preview";
      previewLink.href = item.preview;
      previewLink.target = "_blank";
      previewLink.rel = "noopener";
      previewLink.setAttribute("aria-label", "Abrir vista previa de " + item.title);
      const image = document.createElement("img");
      image.src = item.preview;
      image.alt = "Vista previa: " + item.title;
      image.loading = "lazy";
      previewLink.append(image);
      const title = document.createElement("h4");
      title.textContent = item.title;
      const description = document.createElement("p");
      description.textContent = item.description || "";
      const meta = document.createElement("small");
      meta.textContent = [categoryLabel(item.category), item.format, item.size].filter(Boolean).join(" · ");
      const credit = document.createElement("small");
      credit.className = "material-credit";
      credit.textContent = item.credit;
      const actions = document.createElement("div");
      actions.className = "material-actions";
      const view = document.createElement("a");
      view.className = "button button-soft";
      view.href = item.file;
      view.target = "_blank";
      view.rel = "noopener";
      view.textContent = "Ver";
      const download = document.createElement("a");
      download.className = "button button-primary";
      download.href = item.file;
      download.setAttribute("download", "");
      download.textContent = "Descargar";
      actions.append(view, download);
      card.append(previewLink, title, description, meta, credit, actions);
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