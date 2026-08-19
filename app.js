/* =========================================================
   GENERADOR DE MENÚS
========================================================= */


/* =========================================================
   DATOS
========================================================= */

const data = {

    entradas: [],

    principios: [],

    proteinas: [],

    menu2: []

};


/* =========================================================
   ELEMENTOS
========================================================= */

const containers = {

    entradas:
        document.getElementById("entradasContainer"),

    principios:
        document.getElementById("principiosContainer"),

    proteinas:
        document.getElementById("proteinasContainer"),

    menu2:
        document.getElementById("menu2Container")

};


/* =========================================================
   CREAR ITEM
========================================================= */

function addItem(type, value = "") {

    const id =
        Date.now() +
        Math.random()
            .toString(36)
            .substring(2, 8);

    data[type].push({

        id: id,

        value: value

    });

    renderFormItems(type);

    updatePreview();

}


/* =========================================================
   RENDER ITEMS DEL FORMULARIO
========================================================= */

function renderFormItems(type) {

    const container = containers[type];

    container.innerHTML = "";

    data[type].forEach((item, index) => {

        const row =
            document.createElement("div");

        row.className =
            "dynamic-item";


        const input =
            document.createElement("input");

        input.type = "text";

        input.placeholder =
            getPlaceholder(type);

        input.value =
            item.value;


        input.addEventListener(
            "input",
            function () {

                data[type][index].value =
                    this.value;

                updatePreview();

            }
        );


        const remove =
            document.createElement("button");

        remove.type = "button";

        remove.className =
            "remove-item";

        remove.innerHTML =
            "×";


        remove.addEventListener(
            "click",
            function () {

                data[type].splice(index, 1);

                renderFormItems(type);

                updatePreview();

            }
        );


        row.appendChild(input);

        row.appendChild(remove);

        container.appendChild(row);

    });

}


/* =========================================================
   PLACEHOLDERS
========================================================= */

function getPlaceholder(type) {

    const placeholders = {

        entradas:
            "Ej: Sopa de verduras",

        principios:
            "Ej: Arroz blanco",

        proteinas:
            "Ej: Pechuga a la plancha",

        menu2:
            "Ej: Churrasco"

    };

    return placeholders[type];

}


/* =========================================================
   VALOR DE INPUT
========================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value.trim()
        : "";

}


/* =========================================================
   FORMATEAR PRECIO
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
   CREAR LISTA HTML
========================================================= */

function createItemsHTML(items) {

    return items

        .filter(item =>
            item.value.trim() !== ""
        )

        .map(item => {

            return `
                <div class="menu-item">
                    ${escapeHTML(item.value)}
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

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================================
   ACTUALIZAR PREVIEW
========================================================= */

function updatePreview() {

    const sheet =
        document.getElementById("menuSheet");

    const cards =
        sheet.querySelectorAll(".menu-card");


    const restaurantName =
        getValue("restaurantName")
        || "RESTAURANTE";

    const phone1 =
        getValue("phone1");

    const phone2 =
        getValue("phone2");

    const address =
        getValue("address");

    const highlight =
        getValue("highlight")
        || "MENÚ";


    const phones =
        [phone1, phone2]
            .filter(Boolean)
            .join(" - ");


    const priceSalon1 =
        formatPrice(
            getValue("priceSalon1")
        );

    const priceDelivery1 =
        formatPrice(
            getValue("priceDelivery1")
        );

    const priceSalon2 =
        formatPrice(
            getValue("priceSalon2")
        );

    const priceDelivery2 =
        formatPrice(
            getValue("priceDelivery2")
        );


    cards.forEach(card => {

        card.innerHTML = "";

        const template =
            document
                .getElementById("menuTemplate")
                .content
                .cloneNode(true);


        /* RESTAURANTE */

        template
            .querySelector(".restaurant-name")
            .textContent =
            restaurantName;


        /* BADGE */

        template
            .querySelector(".menu-badge")
            .textContent =
            highlight;


        /* CONTACTO */

        template
            .querySelector(".phones")
            .textContent =
            phones;


        template
            .querySelector(".address")
            .textContent =
            address;


        /* ENTRADAS */

        template
            .querySelector(".entradas-preview")
            .innerHTML =
            createItemsHTML(
                data.entradas
            );


        /* PRINCIPIOS */

        template
            .querySelector(".principios-preview")
            .innerHTML =
            createItemsHTML(
                data.principios
            );


        /* PROTEINAS */

        template
            .querySelector(".proteinas-preview")
            .innerHTML =
            createItemsHTML(
                data.proteinas
            );


        /* MENU 2 */

        template
            .querySelector(".menu2-preview")
            .innerHTML =
            createItemsHTML(
                data.menu2
            );


        /* PRECIOS */

        template
            .querySelector(".price-salon-1")
            .textContent =
            priceSalon1;


        template
            .querySelector(".price-delivery-1")
            .textContent =
            priceDelivery1;


        template
            .querySelector(".price-salon-2")
            .textContent =
            priceSalon2;


        template
            .querySelector(".price-delivery-2")
            .textContent =
            priceDelivery2;


        card.appendChild(template);

    });


    adjustFontSizes();

}


/* =========================================================
   AJUSTE AUTOMÁTICO DE TEXTO
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

            item.style.fontSize = "";

        });


        let fontSize = 9.7;


        const content =
            card.querySelector(
                ".menu-inner"
            );


        if (!content) return;


        /*
         * Si el contenido se desborda,
         * vamos reduciendo el texto.
         */

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
   ESCUCHAR CAMBIOS DE DATOS GENERALES
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

    if (!input) return;

    input.addEventListener(
        "input",
        updatePreview
    );

});


/* =========================================================
   EJEMPLO
========================================================= */

function loadExample() {

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


    data.entradas = [

        {
            id: "e1",
            value: "Sopa de ajiaco"
        },

        {
            id: "e2",
            value: "Fruta"
        }

    ];


    data.principios = [

        {
            id: "p1",
            value: "Frijol"
        },

        {
            id: "p2",
            value: "Calabacín con pollo"
        },

        {
            id: "p3",
            value: "Puré de plátano"
        }

    ];


    data.proteinas = [

        {
            id: "pr1",
            value: "Estofado de pierna pernil"
        },

        {
            id: "pr2",
            value: "Pechuga hawaiana"
        },

        {
            id: "pr3",
            value: "Carne con pico de gallo"
        },

        {
            id: "pr4",
            value: "Chuleta valluna"
        },

        {
            id: "pr5",
            value: "Hígado encebollado"
        }

    ];


    data.menu2 = [

        {
            id: "m1",
            value: "Costillas BBQ"
        },

        {
            id: "m2",
            value: "Churrasco"
        },

        {
            id: "m3",
            value: "Pechuga"
        }

    ];


    renderAllLists();

    updatePreview();

}


/* =========================================================
   RENDER TODAS LAS LISTAS
========================================================= */

function renderAllLists() {

    renderFormItems("entradas");

    renderFormItems("principios");

    renderFormItems("proteinas");

    renderFormItems("menu2");

}


/* =========================================================
   LIMPIAR
========================================================= */

function clearForm() {

    const confirmed =
        confirm(
            "¿Seguro que quieres limpiar todo el menú?"
        );


    if (!confirmed) return;


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


    data.entradas = [];

    data.principios = [];

    data.proteinas = [];

    data.menu2 = [];


    renderAllLists();

    updatePreview();

}


/* =========================================================
   GENERAR PDF
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


    button.disabled = true;


    try {

        const element =
            document.getElementById(
                "menuSheet"
            );


        /*
         * Escala alta para que el PDF
         * tenga buena calidad.
         */

        const canvas =
            await html2canvas(
                element,
                {

                    scale: 3,

                    useCORS: true,

                    backgroundColor: "#ffffff",

                    logging: false

                }
            );


        const imgData =
            canvas.toDataURL(
                "image/png"
            );


        const {
            jsPDF
        } =
            window.jspdf;


        const pdf =
            new jsPDF({

                orientation: "portrait",

                unit: "mm",

                format: "a4",

                compress: true

            });


        const pageWidth = 210;

        const pageHeight = 297;


        pdf.addImage(

            imgData,

            "PNG",

            0,

            0,

            pageWidth,

            pageHeight,

            undefined,

            "FAST"

        );


        const restaurant =
            getValue(
                "restaurantName"
            ) || "menu";


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

        console.error(error);

        alert(
            "No fue posible generar el PDF."
        );

    } finally {

        button.innerHTML =
            originalText;

        button.disabled = false;

    }

}


/* =========================================================
   GENERAR PNG
========================================================= */

async function generatePNG() {

    const cards = document.querySelectorAll(".menu-card");

    if (!cards.length) {
        alert("No se encontró el menú.");
        return;
    }

    try {

        const original = cards[0];

        // Crear copia
        const clone = original.cloneNode(true);

        // Contenedor temporal
        const container = document.createElement("div");

        container.style.position = "fixed";
        container.style.left = "-10000px";
        container.style.top = "0";
        container.style.width = "397px";
        container.style.height = "374px";
        container.style.background = "#ffffff";
        container.style.zIndex = "-9999";

        // IMPORTANTE:
        // eliminar transformaciones que puedan venir del móvil
        clone.style.transform = "none";
        clone.style.transformOrigin = "initial";
        clone.style.width = "397px";
        clone.style.height = "374px";
        clone.style.margin = "0";

        container.appendChild(clone);

        document.body.appendChild(container);

        // Esperar a que el navegador renderice la copia
        await new Promise(resolve => setTimeout(resolve, 150));

        const canvas = await html2canvas(clone, {

            scale: 3,

            useCORS: true,

            allowTaint: false,

            backgroundColor: "#ffffff",

            logging: false,

            width: 397,

            height: 374,

            windowWidth: 397,

            windowHeight: 374

        });

        // Eliminar copia
        document.body.removeChild(container);

        canvas.toBlob(function(blob) {

            if (!blob) {
                alert("No se pudo generar la imagen.");
                return;
            }

            const file = new File(
                [blob],
                "menu.png",
                {
                    type: "image/png"
                }
            );

            // CELULAR
            if (
                navigator.share &&
                navigator.canShare &&
                navigator.canShare({
                    files: [file]
                })
            ) {

                navigator.share({
                    files: [file],
                    title: "Menú del restaurante",
                    text: "Menú"
                }).catch(error => {

                    console.log("Compartir cancelado:", error);

                });

                return;
            }

            // PC
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.download = "menu.png";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            setTimeout(() => {

                URL.revokeObjectURL(url);

            }, 1000);

        }, "image/png");

    } catch (error) {

        console.error("Error generando PNG:", error);

        alert("No fue posible generar la imagen.");

    }
}

/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadExample();

    }
);