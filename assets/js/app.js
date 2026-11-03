(() => {
 "use strict";
 const categories=window.LA_RONDA_CATEGORIES||[];
 const local=p=>typeof p==="string"&&p.startsWith("assets/archivos/")&&!p.includes("..")&&!/^https?:/i.test(p);
 const catalog=(window.LA_RONDA_CATALOG||[]).filter(x=>x&&x.verified===true&&local(x.file)&&local(x.preview)&&x.title&&x.author&&x.license&&x.credit&&x.source);
 const grid=document.getElementById("category-grid"),materials=document.getElementById("materials-grid");
 const search=document.getElementById("search"),clear=document.getElementById("clear-search"),count=document.getElementById("catalog-count");
 const filter=document.getElementById("active-filter"),filterLabel=document.getElementById("active-filter-label");
 let activeCategory="",activeShelf="all";
 const norm=v=>String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
 const label=id=>(categories.find(c=>c.id===id)||{}).name||"Colección";
 function renderCategories(query=""){
  grid.replaceChildren();
  const list=categories.filter(c=>!query||norm(c.name+" "+c.description).includes(norm(query)));
  list.forEach(c=>{
   const a=document.createElement("button");a.type="button";a.className="category-card";a.setAttribute("aria-pressed",String(activeCategory===c.id));
   const img=document.createElement("img");img.src=c.image;img.alt="";img.loading="lazy";
   const copy=document.createElement("span");copy.className="category-card-copy";
   const title=document.createElement("strong");title.textContent=c.name;
   const desc=document.createElement("small");desc.textContent=c.description;
   const arrow=document.createElement("span");arrow.className="category-arrow";arrow.textContent="↗";
   copy.append(title,desc);a.append(img,copy,arrow);
   a.addEventListener("click",()=>{activeCategory=activeCategory===c.id?"":c.id;renderCategories(search.value);renderMaterials(search.value);updateFilter();});
   grid.append(a);
  });
  if(!list.length){const p=document.createElement("p");p.className="empty-state";p.textContent="No encontramos una categoría con esas palabras.";grid.append(p);}
 }
 function updateFilter(){
  const active=activeCategory||activeShelf!=="all";
  filter.hidden=!active;
  if(activeCategory)filterLabel.textContent="Estás explorando: "+label(activeCategory);
  else if(activeShelf==="print")filterLabel.textContent="Mostrando materiales para imprimir";
  else filterLabel.textContent="Mostrando: "+label(activeShelf);
 }
 function renderMaterials(query=""){
  materials.replaceChildren();
  const term=norm(query);
  const list=catalog.filter(x=>{
   const categoryOK=!activeCategory||x.category===activeCategory;
   const shelfOK=activeShelf==="all"||(activeShelf==="print"&&/svg|pdf|imprim/i.test(x.format+" "+x.description))||x.category===activeShelf;
   const words=norm([x.title,x.author,x.description,label(x.category)].join(" "));
   return categoryOK&&shelfOK&&(!term||words.includes(term));
  });
  count.textContent=list.length?(list.length===1?"1 material disponible":list.length+" materiales disponibles"):"Colección en preparación";
  if(!list.length){
   const box=document.createElement("div");box.className="empty-state";
   const icon=document.createElement("div");icon.className="empty-icon";icon.textContent="🌿";
   const h=document.createElement("h4");h.textContent=term||activeCategory||activeShelf!=="all"?"Todavía no encontramos ese material":"Estamos preparando más materiales";
   const p=document.createElement("p");p.textContent="La biblioteca crece de a poco y con cuidado. Solo incorporamos archivos completos, disponibles aquí y con sus condiciones de uso revisadas.";
   box.append(icon,h,p);materials.append(box);return;
  }
  list.forEach(x=>{
   const card=document.createElement("article");card.className="material-card";
   const preview=document.createElement("a");preview.className="material-preview";preview.href=x.preview;preview.target="_blank";preview.rel="noopener";preview.setAttribute("aria-label","Abrir vista previa de "+x.title);
   const img=document.createElement("img");img.src=x.preview;img.alt="Vista previa: "+x.title;img.loading="lazy";preview.append(img);
   const h=document.createElement("h4");h.textContent=x.title;
   const p=document.createElement("p");p.textContent=x.description||"";
   const meta=document.createElement("small");meta.className="material-meta";meta.textContent=[label(x.category),x.format,x.size].filter(Boolean).join(" · ");
   const credit=document.createElement("small");credit.className="material-credit";credit.textContent=x.credit;
   const rights=document.createElement("small");rights.className="material-rights";rights.textContent=x.license;
   const actions=document.createElement("div");actions.className="material-actions";
   const view=document.createElement("a");view.className="button button-soft";view.href=x.file;view.target="_blank";view.rel="noopener";view.textContent="Ver archivo";
   const download=document.createElement("a");download.className="button button-primary";download.href=x.file;download.setAttribute("download","");download.textContent="Descargar";
   actions.append(view,download);card.append(preview,h,p,meta,credit,rights,actions);materials.append(card);
  });
 }
 search.addEventListener("input",()=>{clear.hidden=!search.value;renderCategories(search.value);renderMaterials(search.value);});
 clear.addEventListener("click",()=>{search.value="";clear.hidden=true;activeCategory="";activeShelf="all";setTabs();renderCategories();renderMaterials();updateFilter();search.focus();});
 document.getElementById("reset-filter").addEventListener("click",()=>{activeCategory="";activeShelf="all";setTabs();renderCategories(search.value);renderMaterials(search.value);updateFilter();});
 function setTabs(){document.querySelectorAll("[data-shelf]").forEach(b=>{const on=b.dataset.shelf===activeShelf;b.classList.toggle("is-active",on);b.setAttribute("aria-pressed",String(on));});}
 document.querySelectorAll("[data-shelf]").forEach(b=>b.addEventListener("click",()=>{activeShelf=b.dataset.shelf;activeCategory="";setTabs();renderCategories(search.value);renderMaterials(search.value);updateFilter();}));
 renderCategories();renderMaterials();updateFilter();
})();