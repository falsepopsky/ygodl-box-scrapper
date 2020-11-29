import puppeteer from 'puppeteer';

interface cardItem {
  id: number;
  name: string;
  type: string;
}

async function openDuelLinksSite(url: string) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url);

    const result = await page.evaluate(() => {
      const container = document.querySelector<HTMLInputElement>('.card-list');
      let objectCards: cardItem[] = [];

      if (!container) {
        console.log('no hay container');
      } else {
        let cards = container.querySelectorAll<HTMLInputElement>('li')!;

        cards.forEach((card, index) => {
          let id = index;
          let name = card.querySelector<HTMLInputElement>('dt')!.innerText;
          let type = card.querySelector<HTMLInputElement>('dd')!.innerText;
          const dataCard = { id, name, type };
          objectCards.push(dataCard);
        });
      }

      return objectCards;
    });

    return result;
  } catch (error) {
    console.error(error);
  } finally {
    console.log('browser closed');
    await browser.close();
  }
}
