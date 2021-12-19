# En mal for hvordan man oppretter en Discord robot

## Instruksjoner

Klon dette prosjektet, kjør

```sh
git clone git@github.com:ohbergan/discord.js-bot-template.git
cd discord.js-bot-template
```

Installer alle node moduler

```sh
npm install
```

Lag en `config.json` fil, bruk følgende mal og fyll ut informasjonen

```json
{
	"token": "",
	"clientId": "",
	"guildId": ""
}
```

## Bruk

For å oppdatere kommandoene, kjør

```sh
node deploy-commands.js
```

For å starte roboten, kjør

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
