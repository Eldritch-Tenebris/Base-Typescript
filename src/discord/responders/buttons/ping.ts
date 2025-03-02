import { createResponder, ResponderType } from "#base";
import { createEmbed } from "@magicyan/discord";

createResponder({
    customId: "ping/refresh", 
    types: [ResponderType.Button],
    cache: "cached",
    async run(interaction) {
        const { client } = interaction;
        
        const timeBefore = Date.now();
        await interaction.deferUpdate();
        const ping = Date.now() - timeBefore;

        const embed = createEmbed({
            color: "Random",
            title: "🏓 Pong!",
            fields: [
                { name: "Latência do Bot", value: `\`${client.ws.ping}ms\``, inline: true },
                { name: "Latência da API", value: `\`${ping}ms\``, inline: true }
            ],
            footer: { text: "Última atualização" },
            timestamp: new Date()
        });

        await interaction.editReply({ embeds: [embed] });
    }
});