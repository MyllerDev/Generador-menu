/* =========================================================
   GENERADOR DE MENÚS
========================================================= */


/* =========================================================
   RECETAS ORIGINALES
========================================================= */

const defaultRecipes = {

    sopas: [
        "Sopa campesina",
        "Sopa de pollo",
        "Sopa de pollo con mazorca",
        "Sopa de cebada",
        "Sopa de plátano",
        "Sopa de sancocho",
        "Sopa de ajiaco",
        "Sopa de sancocho de pescado",
        "Sopa de arroz",
        "Sopa de menudencias",
        "Sopa de arracacha",
        "Sopa de fideos",
        "Sopa de colicero",
        "Sopa de verduras",
        "Sopa de patacón",
        "Sopa de macarrones"
    ],

    complementos: [
        "Fruta",
        "Gelatina",
        "Arroz con leche",
        "Salpicón"
    ],

    principios: [
        "Maíz con huevo",
        "Casquito de papa",
        "Habichuelas cremosas",
        "Lasaña de zuquini",
        "Coliflor gratinado",
        "Brócoli en salsa de queso",
        "Spaghetti",
        "Caraotas enchorizadas",
        "Verduras shop suey",
        "Ensalada roja",
        "Coliflor con mazorca",
        "Macarrones",
        "Poteca de ahuyama",
        "Acelga con pollo",
        "Lentejas",
        "Garbanzos",
        "Calabacín con atún",
        "Habichuela con huevo",
        "Puré de papa",
        "Puré de plátano",
        "Frijoles",
        "Zanahoria salteada con tocineta",
        "Papa con huevo",
        "Caraotas guisadas",
        "Pasta con pollo",
        "Pasta boloñesa",
        "Calabacín con huevo",
        "Calabacín con pollo",
        "Arvejas",
        "Coliflor en salsa de queso",
        "Pepino con pollo",
        "Torta de zanahoria",
        "Ensalada rusa",
        "Torta de naranja",
        "Tortilla de acelga",
        "Tortilla de espinaca",
        "Tortilla de plátano",
        "Torta de banano",
        "Pepino con huevo",
        "Zuquini salteado",
        "Frijol cabecita negra",
        "Zuquini con pollo",
        "Papa criolla salsa tocineta"
    ],

    pechuga: [
        "Pechuga con aceitunas",
        "Pechuga rellena",
        "Pechuga en salsa de bocadillo",
        "Pechuga en salsa de tocineta",
        "Pechuga hawaiana",
        "Pechuga en salsa de mazorca",
        "Pechuga con salsa de ciruela",
        "Pechuga limón y cilantro",
        "Pechuga al pesto",
        "Pechuga agridulce",
        "Pechuga con salsa de maracuyá",
        "Pechuga carbonara",
        "Pechuga en salsa tártara",
        "Pechuga desmechada",
        "Pechuga champiñón",
        "Pechuga en salsa de uchuva",
        "Pechuga al ajo y mantequilla",
        "Pechuga gratinada",
        "Pechuga en salsa de limón",
        "Pechuga plancha",
        "Pechuga al ajillo",
        "Pechuga miel mostaza",
        "Pechuga BBQ"
    ],

    piernaPernil: [
        "Pierna pernil a la Coca-Cola",
        "Pierna pernil encocada",
        "Pierna pernil en champiñones",
        "Pierna pernil en tocineta",
        "Pierna pernil búfalo",
        "Pierna pernil sudada",
        "Pierna pernil al horno",
        "Pierna pernil a la naranja",
        "Pierna pernil en salsa de tocineta",
        "Pierna pernil dorada",
        "Estofado de pierna pernil",
        "Pierna a las finas hierbas",
        "Pierna pernil dorada BBQ",
        "Pierna pernil apanada",
        "Pierna pernil jamaiquina"
    ],

    carne: [
        "Carne mexicana",
        "Carne con cebolla caramelizada",
        "Fajitas de carne a la Coca-Cola",
        "Carne con guacamole",
        "Carne con pico de gallo",
        "Carne Stroganof",
        "Carne sudada",
        "Carne de bistec a caballo",
        "Carne llanera",
        "Carne bistec",
        "Carne al pimentón",
        "Carne goulash",
        "Bistec ranchero",
        "Albóndigas"
    ],

    cerdo: [
        "Cerdo en salsa de limón",
        "Cerdo africano",
        "Cerdo Jamaiquino",
        "Cerdo hawaiano",
        "Cerdo en salsa de ajo",
        "Cerdo con ceviche de mango",
        "Cerdo con ceviche de aguacate",
        "Cerdo a la naranja",
        "Cerdo con cebolla caramelizada",
        "Fajitas de cerdo al pimentón",
        "Estofado de cerdo",
        "Cerdo miel mostaza",
        "Cerdo encebollado",
        "Cerdo con pimentón salteado",
        "Cerdo Stroganof",
        "Cerdo gratinado",
        "Cerdo ranchero",
        "Cerdo teriyaki",
        "Cerdo con chimichurri",
        "Cerdo en guacamole",
        "Cerdo BBQ",
        "Cerdo en salsa africana",
        "Chuleta valluna",
        "Cerdo en ceviche de aguacate",
        "Cerdo en salsa de champiñones",
        "Cerdo en salsa de ajo"
    ],

    higado: [
        "Hígado encebollado"
    ]
};


/* =========================================================
   CARGAR RECETAS
========================================================= */

function loadRecipes() {

    const saved =
        localStorage.getItem("restaurantRecipes");

    if (!saved) {

        return structuredClone(defaultRecipes);

    }

    try {

        const parsed = JSON.parse(saved);

        return {

            sopas: parsed.sopas || [...defaultRecipes.sopas],

            complementos:
                parsed.complementos ||
                [...defaultRecipes.complementos],

            principios:
                parsed.principios ||
                [...defaultRecipes.principios],

            pechuga:
                parsed.pechuga ||
                [...defaultRecipes.pechuga],

            piernaPernil:
                parsed.piernaPernil ||
                [...defaultRecipes.piernaPernil],

            carne:
                parsed.carne ||
                [...defaultRecipes.carne],

            cerdo:
                parsed.cerdo ||
                [...defaultRecipes.cerdo],

            higado:
                parsed.higado ||
                [...defaultRecipes.higado]

        };

    } catch (error) {

        console.error(error);

        return structuredClone(defaultRecipes);

    }

}


let recipes = loadRecipes();


/* =========================================================
   GUARDAR RECETAS
========================================================= */

function saveRecipes() {

    localStorage.setItem(
        "restaurantRecipes",
        JSON.stringify(recipes)
    );

}


/* =========================================================
   DATOS DEL MENU
========================================================= */

const data = {

    entradas: [
        "",
        ""
    ],

    principios: [
        "",
        "",
        ""
    ],

    proteinas: {
        pechuga: "",
        piernaPernil: "",
        carne: "",
        cerdo: "",
        higado: ""
    },

    menu2: []

};


/* =========================================================
   CONTENEDORES
========================================================= */

const entradasContainer =
    document.getElementById(
        "entradasContainer"
    );

const principiosContainer =
    document.getElementById(
        "principiosContainer"
    );

const proteinasContainer =
    document.getElementById(
        "proteinasContainer"
    );

const menu2Container =
    document.getElementById(
        "menu2Container"
    );


/* =========================================================
   CATEGORIAS
========================================================= */

const proteinLabels = {

    pechuga: "Pechuga",

    piernaPernil: "Pierna pernil",

    carne: "Carne",

    cerdo: "Cerdo",

    higado: "Hígado"

};


/* =========================================================
   CREAR SELECTOR DE RECETA
========================================================= */

function createRecipePicker({

    category,
    label,
    value,
    onSelect

}) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "recipe-field";


    const labelContainer =
        document.createElement("div");

    labelContainer.className =
        "recipe-label";


    const labelElement =
        document.createElement("strong");

    labelElement.textContent =
        label;


    const categoryText =
        document.createElement("span");

    categoryText.textContent =
        `${recipes[category].length} opciones`;


    labelContainer.appendChild(
        labelElement
    );

    labelContainer.appendChild(
        categoryText
    );


    const picker =
        document.createElement("div");

    picker.className =
        "recipe-picker";


    const search =
        document.createElement("input");

    search.type =
        "text";

    search.className =
        "recipe-search";

    search.placeholder =
        "🔎 Buscar receta...";

    search.autocomplete =
        "off";


    const dropdown =
        document.createElement("div");

    dropdown.className =
        "recipe-dropdown";


    const selected =
        document.createElement("div");

    selected.className =
        "recipe-selected";


    const selectedText =
        document.createElement("span");


    const remove =
        document.createElement("button");

    remove.type =
        "button";

    remove.innerHTML =
        "×";

    remove.title =
        "Quitar selección";


    selected.appendChild(
        selectedText
    );

    selected.appendChild(
        remove
    );


    function renderDropdown() {

        const query =
            search.value
                .trim()
                .toLowerCase();


        const results =
            recipes[category]
                .filter(recipe =>
                    recipe
                        .toLowerCase()
                        .includes(query)
                );


        dropdown.innerHTML = "";


        if (!results.length) {

            const empty =
                document.createElement("div");

            empty.className =
                "recipe-option-empty";

            empty.textContent =
                "No se encontraron recetas";

            dropdown.appendChild(empty);

        } else {

            results.forEach(recipe => {

                const option =
                    document.createElement("div");

                option.className =
                    "recipe-option";

                option.textContent =
                    recipe;


                option.addEventListener(
                    "click",
                    () => {

                        onSelect(recipe);

                        selectedText.textContent =
                            recipe;

                        selected.classList.remove(
                            "empty"
                        );

                        search.value =
                            recipe;

                        dropdown.classList.remove(
                            "open"
                        );

                    }
                );


                dropdown.appendChild(
                    option
                );

            });

        }

    }


    search.addEventListener(
        "focus",
        () => {

            renderDropdown();

            dropdown.classList.add(
                "open"
            );

        }
    );


    search.addEventListener(
        "input",
        () => {

            renderDropdown();

            dropdown.classList.add(
                "open"
            );

        }
    );


    remove.addEventListener(
        "click",
        () => {

            onSelect("");

            search.value =
                "";

            selected.classList.add(
                "empty"
            );

            dropdown.classList.remove(
                "open"
            );

        }
    );


    picker.appendChild(search);

    picker.appendChild(dropdown);

    wrapper.appendChild(labelContainer);

    wrapper.appendChild(picker);

    wrapper.appendChild(selected);


    /* NUEVA RECETA */

    const actions =
        document.createElement("div");

    actions.className =
        "recipe-actions";


    const newButton =
        document.createElement("button");

    newButton.type =
        "button";

    newButton.className =
        "recipe-new-btn";

    newButton.textContent =
        "+ Nueva receta";


    newButton.addEventListener(
        "click",
        () => {

            openRecipeModal(
                category,
                onSelect
            );

        }
    );


    actions.appendChild(
        newButton
    );

    wrapper.appendChild(
        actions
    );


    /* VALOR INICIAL */

    if (value) {

        selectedText.textContent =
            value;

        selected.classList.remove(
            "empty"
        );

        search.value =
            value;

    } else {

        selected.classList.add(
            "empty"
        );

    }


    return wrapper;

}


/* =========================================================
   ENTRADAS
========================================================= */

function renderEntradas() {

    entradasContainer.innerHTML = "";


    const soupPicker =
        createRecipePicker({

            category: "sopas",

            label: "Entrada 1 · Sopa",

            value: data.entradas[0],

            onSelect: value => {

                data.entradas[0] =
                    value;

                updatePreview();

            }

        });


    const secondPicker =
        createRecipePicker({

            category: "complementos",

            label: "Entrada 2",

            value: data.entradas[1],

            onSelect: value => {

                data.entradas[1] =
                    value;

                updatePreview();

            }

        });


    entradasContainer.appendChild(
        soupPicker
    );

    entradasContainer.appendChild(
        secondPicker
    );

}


/* =========================================================
   PRINCIPIOS
========================================================= */

function renderPrincipios() {

    principiosContainer.innerHTML = "";


    data.principios.forEach(
        (value, index) => {

            const picker =
                createRecipePicker({

                    category: "principios",

                    label:
                        `Principio ${index + 1}`,

                    value: value,

                    onSelect: selectedValue => {

                        data.principios[index] =
                            selectedValue;

                        updatePreview();

                    }

                });


            principiosContainer.appendChild(
                picker
            );

        }
    );

}


/* =========================================================
   PROTEINAS
========================================================= */

function renderProteinas() {

    proteinasContainer.innerHTML = "";


    Object.keys(
        data.proteinas
    ).forEach(category => {

        const picker =
            createRecipePicker({

                category: category,

                label:
                    `Proteína · ${proteinLabels[category]}`,

                value:
                    data.proteinas[category],

                onSelect: selectedValue => {

                    data.proteinas[category] =
                        selectedValue;

                    updatePreview();

                }

            });


        proteinasContainer.appendChild(
            picker
        );

    });

}


/* =========================================================
   MODAL NUEVA RECETA
========================================================= */

let modalCategory = null;

let modalCallback = null;


function openRecipeModal(
    category,
    callback
) {

    modalCategory =
        category;

    modalCallback =
        callback;


    const select =
        document.getElementById(
            "newRecipeCategory"
        );


    select.innerHTML = "";


    const categories = {

        sopas: "Entrada · Sopas",

        complementos:
            "Entrada · Fruta / Gelatina / Arroz con leche / Salpicón",

        principios: "Principios",

        pechuga: "Proteína · Pechuga",

        piernaPernil:
            "Proteína · Pierna pernil",

        carne:
            "Proteína · Carne",

        cerdo:
            "Proteína · Cerdo",

        higado:
            "Proteína · Hígado"

    };


    Object.entries(categories)
        .forEach(
            ([key, text]) => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    key;

                option.textContent =
                    text;


                if (
                    key === category
                ) {

                    option.selected =
                        true;

                }


                select.appendChild(
                    option
                );

            }
        );


    document.getElementById(
        "newRecipeName"
    ).value = "";


    document.getElementById(
        "recipeModal"
    ).classList.remove(
        "hidden"
    );


    setTimeout(() => {

        document.getElementById(
            "newRecipeName"
        ).focus();

    }, 100);

}


function closeRecipeModal() {

    document.getElementById(
        "recipeModal"
    ).classList.add(
        "hidden"
    );

    modalCategory =
        null;

    modalCallback =
        null;

}


/* =========================================================
   GUARDAR NUEVA RECETA
========================================================= */

function saveNewRecipe() {

    const name =
        document.getElementById(
            "newRecipeName"
        ).value.trim();


    const category =
        document.getElementById(
            "newRecipeCategory"
        ).value;


    if (!name) {

        alert(
            "Escribe el nombre de la receta."
        );

        return;

    }


    const exists =
        recipes[category]
            .some(recipe =>
                recipe.toLowerCase() ===
                name.toLowerCase()
            );


    if (exists) {

        alert(
            "Esta receta ya existe."
        );

        return;

    }


    recipes[category].push(
        name
    );


    recipes[category].sort(
        (a, b) =>
            a.localeCompare(
                b,
                "es",
                {
                    sensitivity: "base"
                }
            )
    );


    saveRecipes();


    /*
     * Si la receta se creó desde
     * un campo específico,
     * seleccionarla automáticamente.
     */

    if (
        modalCallback &&
        category === modalCategory
    ) {

        modalCallback(name);

    }


    closeRecipeModal();


    renderAllRecipeFields();

    updatePreview();

}


/* =========================================================
   RENDER CAMPOS
========================================================= */

function renderAllRecipeFields() {

    renderEntradas();

    renderPrincipios();

    renderProteinas();

}


/* =========================================================
   MENU 2
========================================================= */

function addMenu2Item(
    value = ""
) {

    data.menu2.push({
        id:
            Date.now() +
            Math.random(),

        value:
            value
    });


    renderMenu2();

    updatePreview();

}


function renderMenu2() {

    menu2Container.innerHTML = "";


    data.menu2.forEach(
        (item, index) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "dynamic-item";


            const input =
                document.createElement(
                    "input"
                );

            input.type =
                "text";

            input.placeholder =
                "Ej: Churrasco";

            input.value =
                item.value;


            input.addEventListener(
                "input",
                function () {

                    data.menu2[index].value =
                        this.value;

                    updatePreview();

                }
            );


            const remove =
                document.createElement(
                    "button"
                );

            remove.type =
                "button";

            remove.className =
                "remove-item";

            remove.innerHTML =
                "×";


            remove.addEventListener(
                "click",
                () => {

                    data.menu2.splice(
                        index,
                        1
                    );

                    renderMenu2();

                    updatePreview();

                }
            );


            row.appendChild(input);

            row.appendChild(remove);

            menu2Container.appendChild(row);

        }
    );

}


/* =========================================================
   CREAR LISTA HTML
========================================================= */

function createItemsHTML(
    items
) {

    return items
        .filter(Boolean)
        .map(item => {

            return `
                <div class="menu-item">
                    ${escapeHTML(item)}
                </div>
            `;

        })
        .join("");

}


/* =========================================================
   ESCAPAR HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================================================
   PRECIO
========================================================= */

function formatPrice(value) {

    if (!value) {
        return "$0";
    }

    return "$" +
        Number(value)
            .toLocaleString("es-CO");

}


/* =========================================================
   OBTENER VALOR
========================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value.trim()
        : "";

}


/* =========================================================
   PREVIEW
========================================================= */

function updatePreview() {

    const sheet =
        document.getElementById(
            "menuSheet"
        );


    const cards =
        sheet.querySelectorAll(
            ".menu-card"
        );


    const restaurantName =
        getValue(
            "restaurantName"
        ) ||
        "RESTAURANTE";


    const phone1 =
        getValue("phone1");

    const phone2 =
        getValue("phone2");

    const address =
        getValue("address");

    const highlight =
        getValue("highlight") ||
        "MENÚ";


    const phones =
        [
            phone1,
            phone2
        ]
        .filter(Boolean)
        .join(" - ");


    const priceSalon1 =
        formatPrice(
            getValue(
                "priceSalon1"
            )
        );


    const priceDelivery1 =
        formatPrice(
            getValue(
                "priceDelivery1"
            )
        );


    const priceSalon2 =
        formatPrice(
            getValue(
                "priceSalon2"
            )
        );


    const priceDelivery2 =
        formatPrice(
            getValue(
                "priceDelivery2"
            )
        );


    const proteinList = [

        data.proteinas.pechuga,

        data.proteinas.piernaPernil,

        data.proteinas.carne,

        data.proteinas.cerdo,

        data.proteinas.higado

    ];


    cards.forEach(card => {

        card.innerHTML = "";


        const template =
            document
                .getElementById(
                    "menuTemplate"
                )
                .content
                .cloneNode(true);


        template
            .querySelector(
                ".restaurant-name"
            )
            .textContent =
            restaurantName;


        template
            .querySelector(
                ".phones"
            )
            .textContent =
            phones;


        template
            .querySelector(
                ".address"
            )
            .textContent =
            address;


        template
            .querySelector(
                ".entradas-preview"
            )
            .innerHTML =
            createItemsHTML(
                data.entradas
            );


        template
            .querySelector(
                ".principios-preview"
            )
            .innerHTML =
            createItemsHTML(
                data.principios
            );


        template
            .querySelector(
                ".proteinas-preview"
            )
            .innerHTML =
            createItemsHTML(
                proteinList
            );


        template
            .querySelector(
                ".menu2-preview"
            )
            .innerHTML =
            createItemsHTML(
                data.menu2.map(
                    item =>
                        item.value
                )
            );


        template
            .querySelector(
                ".price-salon-1"
            )
            .textContent =
            priceSalon1;


        template
            .querySelector(
                ".price-delivery-1"
            )
            .textContent =
            priceDelivery1;


        template
            .querySelector(
                ".price-salon-2"
            )
            .textContent =
            priceSalon2;


        template
            .querySelector(
                ".price-delivery-2"
            )
            .textContent =
            priceDelivery2;


        card.appendChild(
            template
        );

    });


    adjustFontSizes();

}


/* =========================================================
   AJUSTE AUTOMATICO
========================================================= */

function adjustFontSizes() {

    const cards =
        document.querySelectorAll(
            ".menu-card"
        );


    cards.forEach(card => {

        const items =
            card.querySelectorAll(
                ".menu-item"
            );


        items.forEach(item => {

            item.style.fontSize =
                "";

        });


        let fontSize =
            9.7;


        const content =
            card.querySelector(
                ".menu-inner"
            );


        if (!content) {
            return;
        }


        while (
            content.scrollHeight >
            content.clientHeight &&
            fontSize > 6.8
        ) {

            fontSize -= 0.3;


            items.forEach(item => {

                item.style.fontSize =
                    `${fontSize}px`;

            });

        }

    });

}


/* =========================================================
   INPUTS GENERALES
========================================================= */

const generalInputs = [

    "restaurantName",
    "phone1",
    "phone2",
    "address",
    "highlight",
    "priceSalon1",
    "priceDelivery1",
    "priceSalon2",
    "priceDelivery2"

];


generalInputs.forEach(id => {

    const input =
        document.getElementById(id);


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        updatePreview
    );

});


/* =========================================================
   LIMPIAR FORMULARIO
========================================================= */

function clearForm() {

    const confirmed =
        confirm(
            "¿Seguro que quieres limpiar todo el menú?"
        );


    if (!confirmed) {
        return;
    }


    document.getElementById(
        "restaurantName"
    ).value = "";


    document.getElementById(
        "phone1"
    ).value = "";


    document.getElementById(
        "phone2"
    ).value = "";


    document.getElementById(
        "address"
    ).value = "";


    document.getElementById(
        "highlight"
    ).value = "MENÚ";


    document.getElementById(
        "priceSalon1"
    ).value = "";


    document.getElementById(
        "priceDelivery1"
    ).value = "";


    document.getElementById(
        "priceSalon2"
    ).value = "";


    document.getElementById(
        "priceDelivery2"
    ).value = "";


    data.entradas = [
        "",
        ""
    ];


    data.principios = [
        "",
        "",
        ""
    ];


    data.proteinas = {

        pechuga: "",
        piernaPernil: "",
        carne: "",
        cerdo: "",
        higado: ""

    };


    data.menu2 = [];


    renderAllRecipeFields();

    renderMenu2();

    updatePreview();

}

/* =========================================================
   PDF
========================================================= */

async function generatePDF() {

    const button =
        document.querySelector(".pdf-btn");

    const originalText =
        button.innerHTML;

    button.innerHTML =
        "Generando PDF...";

    button.disabled = true;

    let container = null;

    try {

        const original =
            document.getElementById("menuSheet");

        if (!original) {

            throw new Error(
                "No se encontró el menú."
            );

        }


        /* =====================================================
           CREAR COPIA DEL MENÚ
        ===================================================== */

        const clone =
            original.cloneNode(true);


        container =
            document.createElement("div");


        container.style.position =
            "fixed";

        container.style.left =
            "-10000px";

        container.style.top =
            "0";

        container.style.width =
            "794px";

        container.style.height =
            "1123px";

        container.style.background =
            "#ffffff";

        container.style.overflow =
            "hidden";


        /* =====================================================
           QUITAR CUALQUIER ESCALA DEL MOBILE
        ===================================================== */

        clone.style.width =
            "794px";

        clone.style.height =
            "1123px";

        clone.style.transform =
            "none";

        clone.style.transformOrigin =
            "initial";

        clone.style.margin =
            "0";

        clone.style.position =
            "relative";


        container.appendChild(clone);

        document.body.appendChild(container);


        /* =====================================================
           ESPERAR A QUE EL NAVEGADOR RENDERICE
        ===================================================== */

        await new Promise(resolve => {

            requestAnimationFrame(() => {

                requestAnimationFrame(resolve);

            });

        });


        /* =====================================================
           GENERAR CANVAS
        ===================================================== */

        const canvas =
            await html2canvas(
                clone,
                {

                    scale: 3,

                    useCORS: true,

                    allowTaint: false,

                    backgroundColor:
                        "#ffffff",

                    logging: false,

                    width: 794,

                    height: 1123,

                    windowWidth: 794,

                    windowHeight: 1123

                }
            );


        /* =====================================================
           ELIMINAR COPIA
        ===================================================== */

        document.body.removeChild(
            container
        );

        container = null;


        /* =====================================================
           CREAR PDF A4
        ===================================================== */

        const imgData =
            canvas.toDataURL(
                "image/png"
            );


        const {
            jsPDF
        } = window.jspdf;


        const pdf =
            new jsPDF({

                orientation:
                    "portrait",

                unit:
                    "mm",

                format:
                    "a4",

                compress:
                    true

            });


        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            210,
            297,
            undefined,
            "FAST"
        );


        /* =====================================================
           NOMBRE DEL ARCHIVO
        ===================================================== */

        const restaurant =
            getValue(
                "restaurantName"
            ) ||
            "menu";


        const safeName =
            restaurant
                .replace(
                    /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]/g,
                    ""
                )
                .replace(
                    /\s+/g,
                    "-"
                )
                .toLowerCase();


        const date =
            new Date()
                .toISOString()
                .split("T")[0];


        pdf.save(
            `${safeName}-menu-${date}.pdf`
        );


    } catch (error) {

        console.error(
            "Error generando PDF:",
            error
        );


        if (container &&
            document.body.contains(container)) {

            document.body.removeChild(
                container
            );

        }


        alert(
            "No fue posible generar el PDF."
        );


    } finally {

        button.innerHTML =
            originalText;

        button.disabled =
            false;

    }

}

/* =========================================================
   PNG
========================================================= */

async function generatePNG() {

    const cards =
        document.querySelectorAll(
            ".menu-card"
        );


    if (!cards.length) {

        alert(
            "No se encontró el menú."
        );

        return;

    }


    try {

        const original =
            cards[0];


        const clone =
            original.cloneNode(true);


        const container =
            document.createElement(
                "div"
            );


        container.style.position =
            "fixed";

        container.style.left =
            "-10000px";

        container.style.top =
            "0";

        container.style.width =
            "397px";

        container.style.height =
            "374px";

        container.style.background =
            "#ffffff";


        clone.style.transform =
            "none";

        clone.style.transformOrigin =
            "initial";

        clone.style.width =
            "397px";

        clone.style.height =
            "374px";

        clone.style.margin =
            "0";


        container.appendChild(
            clone
        );


        document.body.appendChild(
            container
        );


        await new Promise(
            resolve =>
                setTimeout(
                    resolve,
                    150
                )
        );


        const canvas =
            await html2canvas(
                clone,
                {

                    scale: 3,

                    useCORS: true,

                    allowTaint: false,

                    backgroundColor:
                        "#ffffff",

                    logging: false,

                    width: 397,

                    height: 374,

                    windowWidth: 397,

                    windowHeight: 374

                }
            );


        document.body.removeChild(
            container
        );


        canvas.toBlob(
            function(blob) {

                if (!blob) {

                    alert(
                        "No se pudo generar la imagen."
                    );

                    return;

                }


                const file =
                    new File(
                        [blob],
                        "menu.png",
                        {
                            type:
                                "image/png"
                        }
                    );


                if (
                    navigator.share &&
                    navigator.canShare &&
                    navigator.canShare({
                        files: [file]
                    })
                ) {

                    navigator.share({

                        files: [file],

                        title:
                            "Menú del restaurante"

                    }).catch(
                        error =>
                            console.log(
                                "Compartir cancelado:",
                                error
                            )
                    );


                    return;

                }


                const url =
                    URL.createObjectURL(
                        blob
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    url;

                link.download =
                    "menu.png";


                document.body.appendChild(
                    link
                );


                link.click();


                document.body.removeChild(
                    link
                );


                setTimeout(
                    () =>
                        URL.revokeObjectURL(
                            url
                        ),
                    1000
                );

            },
            "image/png"
        );


    } catch (error) {

        console.error(
            "Error generando PNG:",
            error
        );

        alert(
            "No fue posible generar la imagen."
        );

    }

}


/* =========================================================
   CERRAR DROPDOWNS AL HACER CLICK AFUERA
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".recipe-picker"
            )
        ) {

            document
                .querySelectorAll(
                    ".recipe-dropdown"
                )
                .forEach(dropdown => {

                    dropdown.classList.remove(
                        "open"
                    );

                });

        }

    }
);


/* =========================================================
   ENTER EN MODAL
========================================================= */

document
    .getElementById(
        "newRecipeName"
    )
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                saveNewRecipe();

            }

            if (
                event.key === "Escape"
            ) {

                closeRecipeModal();

            }

        }
    );


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderAllRecipeFields();

        addMenu2Item(
            "COSTILLAS BBQ"
        );

        addMenu2Item(
            "CHURRASCO"
        );

        addMenu2Item(
            "PECHUGA"
        );
        addMenu2Item(
            "CERDO"
        );


        data.entradas = [
            "",
            ""
        ];


        data.principios = [
            "",
            "",
            ""
        ];


        data.proteinas = {

            pechuga:
                "",

            piernaPernil:
                "",

            carne:
                "",

            cerdo:
                "",

            higado:
                "Hígado encebollado"

        };


        renderAllRecipeFields();

        updatePreview();

    }
);