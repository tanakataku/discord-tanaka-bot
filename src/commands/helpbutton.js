const { Modal, TextInputComponent, showModal } = require('discord-modals') // Now we extract the showModal method


module.exports = {
    data: {
        name: "test",
        description: "test"
    },
    run: {
        tanaka(discord) {
            const modal = new Modal() // We create a Modal
                .setCustomId('modal-customid')
                .setTitle('Test of Discord-Modals!')
                .addComponents(
                    new TextInputComponent() // We create a Text Input Component
                        .setCustomId('textinput-customid')
                        .setLabel('Some text Here')
                        .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
                        .setMinLength(4)
                        .setMaxLength(10)
                        .setPlaceholder('Write a text here')
                        .setRequired(true) // If it's required or not
                );
                showModal(modal, {
                    client: discord.c, // This method needs the Client to show the Modal through the Discord API.
                    interaction: discord.i // This method needs the Interaction to show the Modal with the Interaction ID & Token.
                  })
        }
    }
}