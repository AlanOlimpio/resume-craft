import { formatTailwindHTML } from "@/lib/utils";

import puppeteer from "puppeteer";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const { html, structure } = body;

    if (!html || !structure)
      return Response.json(
        { message: "Parâmetros inválidos" },
        { status: 400 }
      );

    let browser = null;

    browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setContent(formatTailwindHTML(html, structure));

    const bodyHeight = await page.evaluate(() => {
      return document.documentElement.offsetHeight;
    });

    const pdf = await page.pdf({
      width: "210mm",
      height: `${bodyHeight}px`,
      printBackground: true,
    });

    await browser.close();

    return new Response(pdf, {
      headers: {
        "Content-type": "application/pdf",
      },
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Ocorreu um erro inesperado", error },
      { status: 500 }
    );
  }
};
