// import colors from "colors";

import { mostraMenu, pausa } from "./helpers/mensajes";

console.clear();

const main = async () => {

    let opt = "";

    do {
        opt = await mostraMenu();
        if (opt != "0") {
            await pausa();
        }

    } while (opt != "0");
};

main();
