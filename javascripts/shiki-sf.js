(function () {
  const scriptEl = document.currentScript;
  const baseUrl = scriptEl
    ? new URL("../assets/sf.tmLanguage.json", scriptEl.src).href
    : "/assets/sf.tmLanguage.json";

  let highlighterPromise = null;

  async function getHighlighter() {
    if (!highlighterPromise) {
      highlighterPromise = (async () => {
        const [{ createHighlighter }, grammarRes] = await Promise.all([
          import("https://esm.sh/shiki@1.24.4"),
          fetch(baseUrl, { cache: "no-cache" }),
        ]);
        const sfGrammar = await grammarRes.json();
        return createHighlighter({
          themes: ["dark-plus"],
          langs: [
            {
              ...sfGrammar,
              name: "sf",
              aliases: ["scriptflow", "lcu-sf"],
            },
          ],
        });
      })();
    }
    return highlighterPromise;
  }

  async function highlightSfBlocks() {
    const blockTargets = Array.from(
      document.querySelectorAll(
        "pre.language-sf > code, pre > code.language-sf, pre.language-scriptflow > code, pre > code.language-scriptflow"
      )
    );
    const sfColumns = new Set([
      "Type",
      "Keyword",
      "Modifier",
      "Action",
      "Inputs",
      "Output",
      "Outputs",
    ]);
    const inlineTargets = Array.from(document.querySelectorAll("table")).flatMap(
      (table) => {
        const headers = Array.from(table.querySelectorAll("thead th"));
        const colIndices = headers
          .map((th, i) => (sfColumns.has(th.textContent.trim()) ? i + 1 : -1))
          .filter((i) => i !== -1);
        if (!colIndices.length) return [];
        return colIndices.flatMap((col) =>
          Array.from(table.querySelectorAll(`tbody td:nth-child(${col}) > code`))
        );
      }
    );

    const targets = [...blockTargets, ...inlineTargets].filter(
      (el) => !el.dataset.shikiDone
    );
    if (!targets.length) return;

    const highlighter = await getHighlighter();
    const parser = new DOMParser();

    for (const codeEl of targets) {
      const raw = codeEl.textContent || "";
      const html = highlighter.codeToHtml(raw, {
        lang: "sf",
        theme: "dark-plus",
      });
      const doc = parser.parseFromString(html, "text/html");
      const shikiPre = doc.querySelector("pre");
      const shikiCode = doc.querySelector("pre > code");
      if (shikiCode) {
        codeEl.innerHTML = shikiCode.innerHTML;
        codeEl.dataset.shikiDone = "1";
        if (shikiPre && codeEl.parentElement && codeEl.parentElement.tagName === "PRE") {
          codeEl.parentElement.classList.add("shiki");
        }
      }
    }
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      highlightSfBlocks();
    });
  } else {
    document.addEventListener("DOMContentLoaded", highlightSfBlocks);
  }
})();
