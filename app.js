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
        localStorage.getItem(
            "restaurantRecipes"
        );


    if (!saved) {

        return structuredClone(
            defaultRecipes
        );

    }


    try {

        const parsed =
            JSON.parse(saved);


        return {

            sopas:
                parsed.sopas ||
                [...defaultRecipes.sopas],

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

        return structuredClone(
            defaultRecipes
        );

    }

}


let recipes =
    loadRecipes();


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

    menu2: [

        {
            id: 1,
            value: "COSTILLAS BBQ"
        },

        {
            id: 2,
            value: "CHURRASCO"
        },

        {
            id: 3,
            value: "PECHUGA"
        },

        {
            id: 4,
            value: "CERDO"
        }

    ],

    menu3: []

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


const menu3Container =
    document.getElementById(
        "menu3Container"
    );


/* =========================================================
   CATEGORIAS DE PROTEINAS
========================================================= */

const proteinLabels = {

    pechuga: "Pechuga",

    piernaPernil:
        "Pierna pernil",

    carne:
        "Carne",

    cerdo:
        "Cerdo",

    higado:
        "Hígado"

};


/* =========================================================
   SELECTOR DE RECETA
========================================================= */

function createRecipePicker({

    category,
    label,
    value,
    onSelect

}) {

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "recipe-field";


    const labelContainer =
        document.createElement(
            "div"
        );


    labelContainer.className =
        "recipe-label";


    const labelElement =
        document.createElement(
            "strong"
        );


    labelElement.textContent =
        label;


    const categoryText =
        document.createElement(
            "span"
        );


    categoryText.textContent =
        `${recipes[category].length} opciones`;


    labelContainer.appendChild(
        labelElement
    );


    labelContainer.appendChild(
        categoryText
    );


    const picker =
        document.createElement(
            "div"
        );


    picker.className =
        "recipe-picker";


    const search =
        document.createElement(
            "input"
        );


    search.type =
        "text";


    search.className =
        "recipe-search";


    search.placeholder =
        "🔎 Buscar receta...";


    search.autocomplete =
        "off";


    const dropdown =
        document.createElement(
            "div"
        );


    dropdown.className =
        "recipe-dropdown";


    const selected =
        document.createElement(
            "div"
        );


    selected.className =
        "recipe-selected";


    const selectedText =
        document.createElement(
            "span"
        );


    const remove =
        document.createElement(
            "button"
        );


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


        dropdown.innerHTML =
            "";


        if (!results.length) {

            const empty =
                document.createElement(
                    "div"
                );


            empty.className =
                "recipe-option-empty";


            empty.textContent =
                "No se encontraron recetas";


            dropdown.appendChild(
                empty
            );

        } else {

            results.forEach(
                recipe => {

                    const option =
                        document.createElement(
                            "div"
                        );


                    option.className =
                        "recipe-option";


                    option.textContent =
                        recipe;


                    option.addEventListener(
                        "click",
                        () => {

                            onSelect(
                                recipe
                            );


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


                            updatePreview();

                        }
                    );


                    dropdown.appendChild(
                        option
                    );

                }
            );

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

            updatePreview();

        }
    );


    picker.appendChild(
        search
    );


    picker.appendChild(
        dropdown
    );


    wrapper.appendChild(
        labelContainer
    );


    wrapper.appendChild(
        picker
    );


    wrapper.appendChild(
        selected
    );


    /* NUEVA RECETA */

    const actions =
        document.createElement(
            "div"
        );


    actions.className =
        "recipe-actions";


    const newButton =
        document.createElement(
            "button"
        );


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

    entradasContainer.innerHTML =
        "";


    data.entradas.forEach(
        (value, index) => {

            const isSoup =
                index === 0;


            const picker =
                createRecipePicker({

                    category:
                        isSoup
                            ? "sopas"
                            : "complementos",

                    label:
                        isSoup
                            ? "Entrada 1 · Sopa"
                            : `Entrada ${index + 1}`,

                    value:
                        value,

                    onSelect:
                        selectedValue => {

                            data.entradas[index] =
                                selectedValue;

                            updatePreview();

                        }

                });


            entradasContainer.appendChild(
                picker
            );

        }
    );

}


/* =========================================================
   AGREGAR ENTRADA
========================================================= */

function addEntrada() {

    data.entradas.push(
        ""
    );


    renderEntradas();

    updatePreview();

}


/* =========================================================
   PRINCIPIOS
========================================================= */

function renderPrincipios() {

    principiosContainer.innerHTML =
        "";


    data.principios.forEach(
        (value, index) => {

            const picker =
                createRecipePicker({

                    category:
                        "principios",

                    label:
                        `Principio ${index + 1}`,

                    value:
                        value,

                    onSelect:
                        selectedValue => {

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
   AGREGAR PRINCIPIO
========================================================= */

function addPrincipio() {

    data.principios.push(
        ""
    );


    renderPrincipios();

    updatePreview();

}


/* =========================================================
   PROTEINAS
========================================================= */

function renderProteinas() {

    proteinasContainer.innerHTML =
        "";


    Object.keys(
        data.proteinas
    ).forEach(
        category => {

            const picker =
                createRecipePicker({

                    category:
                        category,

                    label:
                        `Proteína · ${proteinLabels[category]}`,

                    value:
                        data.proteinas[category],

                    onSelect:
                        selectedValue => {

                            data.proteinas[category] =
                                selectedValue;

                            updatePreview();

                        }

                });


            proteinasContainer.appendChild(
                picker
            );

        }
    );

}


/* =========================================================
   AGREGAR NUEVA PROTEÍNA
========================================================= */

function addProteina() {

    const newCategory =
        `extra_${Date.now()}`;

    recipes[newCategory] =
        [];

    data.proteinas[newCategory] =
        "";

    proteinLabels[newCategory] =
        "Nueva proteína";

    renderProteinas();

    updatePreview();

}
/* =========================================================
   MODAL NUEVA RECETA
========================================================= */

let modalCategory =
    null;


let modalCallback =
    null;


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


    select.innerHTML =
        "";


    const categories = {

        sopas:
            "Entrada · Sopas",

        complementos:
            "Entrada · Fruta / Gelatina / Arroz con leche / Salpicón",

        principios:
            "Principios",

        pechuga:
            "Proteína · Pechuga",

        piernaPernil:
            "Proteína · Pierna pernil",

        carne:
            "Proteína · Carne",

        cerdo:
            "Proteína · Cerdo",

        higado:
            "Proteína · Hígado"

    };


    Object.entries(
        categories
    ).forEach(
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
    ).value =
        "";


    document.getElementById(
        "recipeModal"
    ).classList.remove(
        "hidden"
    );


    setTimeout(
        () => {

            document.getElementById(
                "newRecipeName"
            ).focus();

        },
        100
    );

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
        )
        .value
        .trim();


    const category =
        document.getElementById(
            "newRecipeCategory"
        )
        .value;


    if (!name) {

        alert(
            "Escribe el nombre de la receta."
        );

        return;

    }


    const exists =
        recipes[category]
            .some(
                recipe =>
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
                    sensitivity:
                        "base"
                }
            )
    );


    saveRecipes();


    if (
        modalCallback &&
        category === modalCategory
    ) {

        modalCallback(
            name
        );

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

    menu2Container.innerHTML =
        "";


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


            row.appendChild(
                input
            );


            row.appendChild(
                remove
            );


            menu2Container.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   MENU 3
========================================================= */

function addMenu3Item(
    value = ""
) {

    data.menu3.push({

        id:
            Date.now() +
            Math.random(),

        value:
            value

    });


    renderMenu3();

    updatePreview();

}


function renderMenu3() {

    menu3Container.innerHTML =
        "";


    data.menu3.forEach(
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
                "Ej: Especial de carne";


            input.value =
                item.value;


            input.addEventListener(
                "input",
                function () {

                    data.menu3[index].value =
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

                    data.menu3.splice(
                        index,
                        1
                    );

                    renderMenu3();

                    updatePreview();

                }
            );


            row.appendChild(
                input
            );


            row.appendChild(
                remove
            );


            menu3Container.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   ACTIVAR / DESACTIVAR MENU 3
========================================================= */

function toggleMenu3() {

    const enabled =
        document.getElementById(
            "enableMenu3"
        ).checked;


    const section =
        document.getElementById(
            "menu3Section"
        );


    const priceGroup =
        document.getElementById(
            "menu3PriceGroup"
        );


    if (enabled) {

        section.classList.remove(
            "hidden"
        );


        priceGroup.classList.remove(
            "hidden"
        );


        if (
            data.menu3.length === 0
        ) {

            addMenu3Item();

        }

    } else {

        section.classList.add(
            "hidden"
        );


        priceGroup.classList.add(
            "hidden"
        );

    }


    updatePreview();

}


/* =========================================================
   CREAR HTML DE ITEMS
========================================================= */

function createItemsHTML(
    items
) {

    return items
        .filter(Boolean)
        .map(
            item => {

                return `
                    <div class="menu-item">
                        ${escapeHTML(item)}
                    </div>
                `;

            }
        )
        .join("");

}


/* =========================================================
   ESCAPAR HTML
========================================================= */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================================================
   PRECIO
========================================================= */

function formatPrice(
    value
) {

    if (!value) {

        return "$0";

    }


    return "$" +
        Number(value)
            .toLocaleString(
                "es-CO"
            );

}


/* =========================================================
   OBTENER VALOR
========================================================= */

function getValue(
    id
) {

    const element =
        document.getElementById(
            id
        );


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


    if (!sheet) {
        return;
    }


    const cards =
        sheet.querySelectorAll(
            ".menu-card"
        );


    const restaurantName =
        getValue(
            "restaurantName"
        ) ||
        "RESTAURANTE";


    const phones =
        [
            getValue("phone1"),
            getValue("phone2")
        ]
        .filter(Boolean)
        .join(" - ");


    const address =
        getValue(
            "address"
        );


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


    const priceSalon3 =
        formatPrice(
            getValue(
                "priceSalon3"
            )
        );


    const priceDelivery3 =
        formatPrice(
            getValue(
                "priceDelivery3"
            )
        );


    const proteinList =
        Object.values(
            data.proteinas
        );


    const menu3Enabled =
        document.getElementById(
            "enableMenu3"
        )?.checked || false;


    cards.forEach(
        card => {

            card.innerHTML =
                "";


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
                    ".menu3-preview"
                )
                .innerHTML =
                createItemsHTML(
                    data.menu3.map(
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


            template
                .querySelector(
                    ".price-salon-3"
                )
                .textContent =
                priceSalon3;


            template
                .querySelector(
                    ".price-delivery-3"
                )
                .textContent =
                priceDelivery3;


            const menuThree =
                template.querySelector(
                    ".menu-three"
                );


            if (menu3Enabled) {

                menuThree.classList.remove(
                    "hidden"
                );

            } else {

                menuThree.classList.add(
                    "hidden"
                );

            }


            card.appendChild(
                template
            );

        }
    );


    adjustFontSizes();

}


/* =========================================================
   AJUSTE AUTOMATICO DE FUENTE
========================================================= */

function adjustFontSizes() {

    const cards =
        document.querySelectorAll(
            ".menu-card"
        );


    cards.forEach(
        card => {

            const items =
                card.querySelectorAll(
                    ".menu-item"
                );


            items.forEach(
                item => {

                    item.style.fontSize =
                        "";

                }
            );


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

                fontSize -=
                    0.3;


                items.forEach(
                    item => {

                        item.style.fontSize =
                            `${fontSize}px`;

                    }
                );

            }

        }
    );

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
    "priceDelivery2",

    "priceSalon3",
    "priceDelivery3"

];


generalInputs.forEach(
    id => {

        const input =
            document.getElementById(
                id
            );


        if (!input) {
            return;
        }


        input.addEventListener(
            "input",
            updatePreview
        );

    }
);


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
    ).value =
        "EXQUISIT RESTAURANT";


    document.getElementById(
        "phone1"
    ).value =
        "3001900104";


    document.getElementById(
        "phone2"
    ).value =
        "3142513029";


    document.getElementById(
        "address"
    ).value =
        "AV. CARACAS #34-17 LOCAL 2";


    document.getElementById(
        "highlight"
    ).value =
        "MENÚ";


    document.getElementById(
        "priceSalon1"
    ).value =
        "14000";


    document.getElementById(
        "priceDelivery1"
    ).value =
        "15000";


    document.getElementById(
        "priceSalon2"
    ).value =
        "22000";


    document.getElementById(
        "priceDelivery2"
    ).value =
        "23000";


    document.getElementById(
        "priceSalon3"
    ).value =
        "25000";


    document.getElementById(
        "priceDelivery3"
    ).value =
        "26000";


    /* MENU 3 SIEMPRE APAGADO AL LIMPIAR */

    document.getElementById(
        "enableMenu3"
    ).checked =
        false;


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


    data.menu2 = [

        {
            id: 1,
            value: "COSTILLAS BBQ"
        },

        {
            id: 2,
            value: "CHURRASCO"
        },

        {
            id: 3,
            value: "PECHUGA"
        },

        {
            id: 4,
            value: "CERDO"
        }

    ];


    data.menu3 = [];


    document
        .querySelector(
            ".menu3-section"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "menu3PriceGroup"
        )
        .classList.add(
            "hidden"
        );


    renderAllRecipeFields();

    renderMenu2();

    renderMenu3();

    updatePreview();

}


/* =========================================================
   CREAR CLON FIJO
   IMPORTANTE PARA PC Y CELULAR
========================================================= */

async function createFixedCanvas(
    element,
    width,
    height,
    scale = 2
) {

    const container =
        document.createElement(
            "div"
        );


    container.style.position =
        "fixed";


    container.style.left =
        "-100000px";


    container.style.top =
        "0";


    container.style.width =
        `${width}px`;


    container.style.height =
        `${height}px`;


    container.style.background =
        "#ffffff";


    container.style.overflow =
        "hidden";


    container.style.zIndex =
        "-9999";


    const clone =
        element.cloneNode(true);


    clone.style.width =
        `${width}px`;


    clone.style.height =
        `${height}px`;


    clone.style.minWidth =
        `${width}px`;


    clone.style.minHeight =
        `${height}px`;


    clone.style.maxWidth =
        `${width}px`;


    clone.style.maxHeight =
        `${height}px`;


    clone.style.transform =
        "none";


    clone.style.transformOrigin =
        "top left";


    clone.style.margin =
        "0";


    clone.style.position =
        "relative";


    clone.style.left =
        "0";


    clone.style.top =
        "0";


    container.appendChild(
        clone
    );


    document.body.appendChild(
        container
    );


    /* Esperar a que el navegador pinte el clon */

    await new Promise(
        resolve =>
            requestAnimationFrame(
                () =>
                    requestAnimationFrame(
                        resolve
                    )
            )
    );


    const canvas =
        await html2canvas(
            clone,
            {

                scale:
                    scale,

                useCORS:
                    true,

                allowTaint:
                    false,

                backgroundColor:
                    "#ffffff",

                logging:
                    false,

                width:
                    width,

                height:
                    height,

                windowWidth:
                    width,

                windowHeight:
                    height,

                scrollX:
                    0,

                scrollY:
                    0

            }
        );


    document.body.removeChild(
        container
    );


    return canvas;

}


/* =========================================================
   CREAR CANVAS FIJO PARA EXPORTACIÓN
   MISMO RESULTADO EN PC Y CELULAR
========================================================= */

async function createFixedCanvas(
    element,
    width,
    height,
    scale = 2
) {

    /*
     * Creamos un contenedor completamente independiente
     * del viewport del dispositivo.
     */

    const container =
        document.createElement("div");


    container.style.position =
        "fixed";

    container.style.left =
        "-100000px";

    container.style.top =
        "0";

    container.style.width =
        `${width}px`;

    container.style.height =
        `${height}px`;

    container.style.minWidth =
        `${width}px`;

    container.style.maxWidth =
        `${width}px`;

    container.style.minHeight =
        `${height}px`;

    container.style.maxHeight =
        `${height}px`;

    container.style.background =
        "white";

    container.style.overflow =
        "hidden";

    container.style.zIndex =
        "-9999";


    /*
     * Clonamos el elemento original.
     */

    const clone =
        element.cloneNode(true);


    clone.style.width =
        `${width}px`;

    clone.style.height =
        `${height}px`;

    clone.style.minWidth =
        `${width}px`;

    clone.style.minHeight =
        `${height}px`;

    clone.style.maxWidth =
        `${width}px`;

    clone.style.maxHeight =
        `${height}px`;

    clone.style.transform =
        "none";

    clone.style.margin =
        "0";

    clone.style.position =
        "relative";

    clone.style.left =
        "0";

    clone.style.top =
        "0";


    /*
     * IMPORTANTE:
     * Evita que el responsive del celular
     * modifique el contenido exportado.
     */

    clone.querySelectorAll("*")
        .forEach(el => {

            el.style.maxWidth =
                el.style.maxWidth || "none";

        });


    container.appendChild(
        clone
    );


    document.body.appendChild(
        container
    );


    /*
     * Esperamos a que el navegador termine
     * de renderizar el clon.
     */

    await new Promise(
        resolve =>
            requestAnimationFrame(
                () =>
                    requestAnimationFrame(
                        resolve
                    )
            )
    );


    /*
     * Esperamos imágenes.
     */

    const images =
        clone.querySelectorAll(
            "img"
        );


    await Promise.all(

        Array.from(images)
            .map(img => {

                if (
                    img.complete
                ) {

                    return Promise.resolve();

                }

                return new Promise(
                    resolve => {

                        img.onload =
                            resolve;

                        img.onerror =
                            resolve;

                    }
                );

            })

    );


    /*
     * Generamos el canvas.
     */

    const canvas =
        await html2canvas(
            clone,
            {

                width:
                    width,

                height:
                    height,

                windowWidth:
                    width,

                windowHeight:
                    height,

                scale:
                    scale,

                useCORS:
                    true,

                allowTaint:
                    false,

                backgroundColor:
                    "#ffffff",

                logging:
                    false,

                foreignObjectRendering:
                    false

            }
        );


    /*
     * Eliminamos el clon.
     */

    document.body.removeChild(
        container
    );


    return canvas;

}



/* =========================================================
   PDF
========================================================= */

async function generatePDF() {

    const button =
        document.querySelector(
            ".pdf-btn"
        );


    const originalText =
        button.innerHTML;


    button.innerHTML =
        "Generando PDF...";


    button.disabled =
        true;


    try {

        const original =
            document.getElementById(
                "menuSheet"
            );


        if (!original) {

            throw new Error(
                "No se encontró el menú."
            );

        }


        /*
         * DIMENSIONES FIJAS.
         *
         * Siempre 794 x 1123.
         * No importa si se genera desde:
         *
         * PC
         * Android
         * iPhone
         * Tablet
         */

        const canvas =
            await createFixedCanvas(
                original,
                794,
                1123,
                3
            );


        const imgData =
            canvas.toDataURL(
                "image/jpeg",
                0.95
            );


        const {
            jsPDF
        } =
            window.jspdf;


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
            "JPEG",
            0,
            0,
            210,
            297,
            undefined,
            "FAST"
        );


        const date =
            new Date()
                .toISOString()
                .split("T")[0];


        const fileName =
            `Menu-del-dia-${date}.pdf`;


        const pdfBlob =
            pdf.output(
                "blob"
            );


        const pdfFile =
            new File(
                [pdfBlob],
                fileName,
                {
                    type:
                        "application/pdf"
                }
            );


        /*
         * COMPARTIR
         */

        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
                files: [
                    pdfFile
                ]
            })
        ) {

            await navigator.share({

                files: [
                    pdfFile
                ],

                title:
                    "Menú del día"

            });

        } else {

            const pdfUrl =
                URL.createObjectURL(
                    pdfBlob
                );


            const link =
                document.createElement(
                    "a"
                );


            link.href =
                pdfUrl;


            link.download =
                fileName;


            document.body.appendChild(
                link
            );


            link.click();


            document.body.removeChild(
                link
            );


            setTimeout(
                () => {

                    URL.revokeObjectURL(
                        pdfUrl
                    );

                },
                2000
            );

        }

    } catch (error) {

        console.error(
            "Error generando PDF:",
            error
        );


        if (
            error &&
            error.name ===
                "AbortError"
        ) {

            return;

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

    const button =
        document.querySelector(
            ".png-btn"
        );


    const originalText =
        button.innerHTML;


    button.innerHTML =
        "Generando PNG...";


    button.disabled =
        true;


    try {

        const cards =
            document.querySelectorAll(
                ".menu-card"
            );


        if (!cards.length) {

            throw new Error(
                "No se encontró el menú."
            );

        }


        /*
         * EXPORTAMOS SIEMPRE
         * EL PRIMER MENÚ.
         *
         * Tamaño fijo:
         * 397 x 374
         */

        const original =
            cards[0];


        const canvas =
            await createFixedCanvas(
                original,
                397,
                374,
                3
            );


        const blob =
            await new Promise(
                resolve =>
                    canvas.toBlob(
                        resolve,
                        "image/png"
                    )
            );


        if (!blob) {

            throw new Error(
                "No se pudo generar la imagen."
            );

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


        /*
         * COMPARTIR EN CELULAR
         */

        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
                files: [
                    file
                ]
            })
        ) {

            await navigator.share({

                files: [
                    file
                ],

                title:
                    "Menú del día"

            });

        } else {

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
                () => {

                    URL.revokeObjectURL(
                        url
                    );

                },
                2000
            );

        }

    } catch (error) {

        console.error(
            "Error generando PNG:",
            error
        );


        if (
            error &&
            error.name ===
                "AbortError"
        ) {

            return;

        }


        alert(
            "No fue posible generar la imagen."
        );

    } finally {

        button.innerHTML =
            originalText;


        button.disabled =
            false;

    }

}

/* =========================================================
   CERRAR DROPDOWNS
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
                .forEach(
                    dropdown => {

                        dropdown.classList.remove(
                            "open"
                        );

                    }
                );

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
                event.key ===
                "Enter"
            ) {

                saveNewRecipe();

            }


            if (
                event.key ===
                "Escape"
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

        /*
         * IMPORTANTE:
         * Menú 3 comienza DESACTIVADO.
         */

        const menu3Toggle =
            document.getElementById(
                "enableMenu3"
            );


        menu3Toggle.checked =
            false;


        document
            .getElementById(
                "menu3Section"
            )
            .classList.add(
                "hidden"
            );


        document
            .getElementById(
                "menu3PriceGroup"
            )
            .classList.add(
                "hidden"
            );


        renderAllRecipeFields();

        renderMenu2();

        renderMenu3();

        updatePreview();

    }
);