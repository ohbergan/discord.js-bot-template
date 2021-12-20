# En mal for hvordan man oppretter en Discord robot

## Instruksjoner

For å klone dette prosjektet, så kjører du disse kommandoene:

```sh
git clone git@github.com:ohbergan/discord.js-bot-template.git
cd discord.js-bot-template
```

Installer alle node moduler ved å kjøre denne kommandoen

```sh
npm install
```

Lag en `config.json` fil, bruk følgende mal og fyll ut informasjonen. Du kan lage klient id og token her: https://discord.com/developers/applications

```json
{
	"token": "",
	"clientId": ""
}
```

## Bruk

For å oppdatere kommandoene så kjører du denne kommandoen

```sh
node deploy-commands.js
```

For å starte roboten din så kjører du denne kommandoen

```sh
node index.js
```

## Nyttige lenker

-   [Discord.JS Guide]
-   [Discord.JS]
-   [Discord.JS Dokumentasjon]
-   [Discord Developer Portal]

## Lisens

MIT

[discord.js guide]: https://discordjs.guide/
[discord.js]: https://discord.js.org/
[discord.js dokumentasjon]: https://discord.js.org/#/docs/main/stable/general/welcome
[discord developer portal]: https://discord.com/developers/applications
