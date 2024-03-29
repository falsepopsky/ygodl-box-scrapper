# Yu-Gi-Oh! DUEL LINKS - Box Scrapper

<div align="center">
  	<img src="docs/images/duel_links_logo.png" alt="Duel Links Logo" />
</div>

## :information_source: About

Get the full set of cards from any(MAIN, MINI, STRUCTURE DECK) released box on Yu-Gi-Oh! DUEL LINKS.

<div align="center">
    <img src="docs/images/main_box.png" alt="Main Box Section" />
    <img src="docs/images/mini_box.png" alt="Mini Box Section" />
    <img src="docs/images/structure_deck.png" alt="Structure Deck Section" />
</div>

## :package: Built with

- puppeteer

## :pushpin: Setup

**:computer: System requirements**

- [Node.js](https://nodejs.org/en/download/current/) (LTS 18 >)
- MacOS, Windows (WSL), and Linux are supported
- [pnpm](https://pnpm.io/)

**:arrows_counterclockwise: Clone repository**

```
git clone git@github.com:falsepopsky/ygodl-box-scrapper.git
```

**:checkered_flag: Install and start the scrapper**

```
pnpm install
```

```
pnpm build
```

```
pnpm dev
```

or

<details><summary>Use this package</summary>

```javascript
// language required to get boxes list.
const boxesList = await getBoxesList('en');

// language and prefix url box required to get the set of cards.
const heroRisingBox = await getBoxSet('en', 'sd-hero_rising/');
```

**English and Japanese Box Set examples**

![English Set](docs/images/set-en.png)
![Japanese Set](docs/images/set-jp.png)

</details>

#### :scroll: License

[GPL-3.0 License](https://github.com/falsepopsky/ygodl-box-scrapper/blob/main/LICENSE)

#### :open_file_folder: Folder Structure

```
    .
    ├── .vscode                 # VSCode settings and recommended extensions.
    ├── docs                    # Documentation files.
    ├── dev                     # Dev enviroment.
    ├── src                     # Source files.
    └── README.md
```

#### :shipit: Thoughts on this "repo"

If you are interested, give it a [read](docs/core.md)
