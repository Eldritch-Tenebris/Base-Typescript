import { Client, ClientOptions, version as djsVersion } from "discord.js";
import { baseErrorHandler, logger, validateEnv } from "#settings";
import { CustomItents, CustomPartials } from "@magicyan/discord";
import { baseAutocompleteHandler, baseCommandHandler, baseRegisterCommands } from "./base.command.js";
import { baseStorage } from "./base.storage.js";
import { baseRegisterEvents } from "./base.event.js";
import { baseResponderHandler } from "./base.responder.js";
import ck from "chalk";
import glob from "fast-glob";

export const BASE_VERSION = "1.1" as const; // DO NOT CHANGE THIS VAR

interface BootstrapOptions extends Partial<ClientOptions> {
    meta: ImportMeta;
    /**
     * Uma lista de caminhos que serão importados para carregar as classes estruturais do projeto
     * 
     * Os caminhos são relativos à pasta **workdir**
     */
    directories?: string[];
    /** Enviar logs de carregamento no terminal */
    loadLogs?: boolean;
    /** Executar antes de carregar diretórios */
    beforeLoad?(client: Client): void
    /** Executar quando o cliente estiver pronto */
    whenReady?(client: Client<true>): void;
}
export async function bootstrap(options: BootstrapOptions){
    const client = createClient(process.env.BOT_TOKEN, options);
    options.beforeLoad?.(client);
    
    await loadModules(options.meta.dirname, options.directories);

    if (options.loadLogs??true){
        loadLogs();
    }
    
    logger.log();
    logger.log(ck.blue(`★ Amiro Base ${ck.reset.dim(BASE_VERSION)}`));
    logger.log(
        `${ck.hex("#5865F2")("◌ discord.js")} ${ck.dim(djsVersion)}`,
        "|",
        `${ck.hex("#54A044")("◌ node.js")} ${ck.reset.dim(process.versions.node)}`
    );
    
    baseRegisterEvents(client);

    client.login();

    return { client };
}

async function loadModules(workdir: string, directories: string[] = []){
    const pattern = "**/*.{js,ts,jsx,tsx}";
    const files = await glob([
        `!./discord/index.*`,
        `!./discord/base/**/*`,
        `./discord/${pattern}`,
        directories.map(
            path => `./${path.replaceAll("\\", "/")}/${pattern}`
        )
    ].flat(), { absolute: true, cwd: workdir });

    await Promise.all(files.map(path => import(`file://${path}`)));
}

function createClient(token: string, options: BootstrapOptions) {

    const client = new Client(Object.assign(options, {
        intents: options.intents ?? CustomItents.All,
        partials: options.partials ?? CustomPartials.All,
        failIfNotExists: options.failIfNotExists ?? false
    }));

    client.token=token;
    client.on("ready", async (client) => {
        await client.guilds.fetch().catch(() => null);;

        logger.log(ck.green(`● ${ck.greenBright.underline(client.user.username)} conectado ✓`))

        await baseRegisterCommands(client);
        
        process.on("uncaughtException", err => baseErrorHandler(err, client));
        process.on("unhandledRejection", err => baseErrorHandler(err, client));
        
        options.whenReady?.(client);
    });

    client.on("interactionCreate", async (interaction) => {
        switch(true){
            case interaction.isAutocomplete():{
                baseAutocompleteHandler(interaction);
                return;
            }
            case interaction.isCommand(): {
                baseCommandHandler(interaction);
                return;
            }
            default: 
                baseResponderHandler(interaction);
                return;
        }
    });

    return client;
}

function loadLogs(){
    const logs = [
        baseStorage.loadLogs.commands,
        baseStorage.loadLogs.responders,
        baseStorage.loadLogs.events,
    ].flat();
    logs.forEach(text => logger.log(text));
}

validateEnv();