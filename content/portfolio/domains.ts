import type { DomainIconKey, DomainsContent } from "./types"

export const domains = {
  sectionLabel: "Obszary Działania",
  title: "Kluczowe obszary wiedzy",
  description: "Kluczowe obszary wiedzy w zakresie GIS, BIM, automatyzacji procesów i wizualizacji danych.",
  items: [
    {
      iconKey: "FileChartLineIcon",
      title: "GIS i Kartogafia internetowa",
      description:
        "Tworzenie i integracja danych przestrzennych, map internetowych oraz systemów wspierających analizę i wizualizację informacji geograficznej.",
      keywords: ["QGIS", "dane przestrzenne", "geowizualizacja", "mapserver"],
    },
    {
      iconKey: "RulerIcon",
      title: "Geodezja i inżynieria lądowa",
      description:
        "Pozyskiwanie i integracja danych przestrzennych, w środowisku map internetowych oraz rozwój systemów wspierających analizę i wizualizację informacji przestrzennej.",
      keywords: ["modelowanie 3D", "dane pomiarowe", "geodezyjne opracowanie projektu", "pomiary 3D"],
      },
    {
      iconKey: "DroneIcon",
      title: "Fotogrametria",
      description:
        "Pozyskiwanie i przetwarzanie danych fotogrametrycznych, tworzenie modeli terenu oraz integracja danych przestrzennych z środowiskami GIS i BIM.",
      keywords: ["fotogrametria", "modele terenu", "chmury punktów", "BSP"],
      },
    {
      iconKey: "ChartPieIcon",
      title: "Analiza Danych",
      description:
        "Przetwarzanie i organizacja danych przestrzennych oraz projektowych, integracja informacji przestrzennych z dokumentacją projektową.",
      keywords: ["dane przestrzenne", "dane projektowe", "raportowanie", "analiza danych"],
      },
    {
      iconKey: "MonitorCogIcon" as DomainIconKey,
      title: "Automatyzacja Procesów",
      description:
        "Projektowanie i wdrażanie automatyzacji wspierających przepływ informacji, raportowanie oraz codzienne procesy operacyjne.",
      keywords: ["power automare", "ms365", "automatyzacja workflow", "python"],
      },
    {
      iconKey: "WorkflowIcon",
      title: "Integracja Systemów",
      description:
        "Łączenie danych, narzędzi i procesów pomiędzy środowiskami GIS, BIM, MS365 oraz systemami wspierającymi realizację projektów infrastrukturalnych.",
      keywords: ["cyfrowy workflow", "integracja danych", "BIM", "GIS"],
      },
  ],
} satisfies DomainsContent

