import colors from "colors";
import readline from "readline";

export { mostraMenu, pausa };

const mostraMenu = (): Promise<string> => {

    return new Promise((resolve) => {
        console.clear();
        console.log(colors.green("=========================="));
        console.log("  Seleccione una Opcion");
        console.log(colors.green("==========================\n"));

        console.log(`${colors.green("1")}. Cerar Tarea`);
        console.log(`${colors.green("2")}. Listar Tareas`);
        console.log(`${colors.green("3")}. Listar Tareas Completadas`);
        console.log(`${colors.green("4")}. Listar Tareas Pendientes`);
        console.log(`${colors.green("5")}. Completar Tarea(s)`);
        console.log(`${colors.green("6")}. Borrar Tarea`);
        console.log(`${colors.green("0")}. Salir\n`);

        //---------- Trabajando con readline ----------
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Seleccione una opcion: ",
            (opt: string): void => {
                rl.close();
                // cuando leemos la opcion resolvemos la promesa
                resolve(opt);
            });
    });
};

const pausa = (): Promise<void> => {
    return new Promise((resolve) => {
        //---------- Trabajando con readline ----------
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(`Presion ${colors.green("ENTER")} para continuar`,
            (): void => {
                rl.close();
                resolve();
            }
        );
    });
};
