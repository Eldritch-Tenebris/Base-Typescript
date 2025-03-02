import { createCommand } from "#base";
import { createEmbed, createRow } from "@magicyan/discord";
import { ApplicationCommandType, ButtonBuilder, ButtonStyle } from "discord.js";

createCommand({
    name: "ping",
    description: "Mostra a latência do bot 🏓",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        const { client } = interaction;

        const embed = createEmbed({
            color: "Random",
            title: "🏓 Pong!",
            fields: [
                { name: "Latência do Bot", value: `\`${client.ws.ping}ms\``, inline: true },
            ]
        });

        const row = createRow(
            new ButtonBuilder({
                customId: "ping/refresh",
                label: "Atualizar", 
                style: ButtonStyle.Primary,
                emoji: "🔄"
            })
        );

        await interaction.reply({ 
            embeds: [embed], 
            components: [row],
            flags: ["Ephemeral"]
        });
    }
});