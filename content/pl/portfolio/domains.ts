import type { DomainIconKey, DomainsContent } from "../../portfolio-types"

export const domains = {
  sectionLabel: "Obszary Działania",
  title: "Kluczowe obszary wiedzy",
  description: "Kluczowe obszary wiedzy w zakresie GIS, BIM, automatyzacji procesów i wizualizacji danych.",
  items: [
    {
      iconKey: "FileChartLineIcon",
      title: "GIS i Kartografia internetowa",
      description:
        "Tworzenie i integracja danych przestrzennych, map internetowych oraz systemów wspierających analizę i wizualizację informacji geograficznej.",
      keywords: ["QGIS", "dane przestrzenne", "geowizualizacja", "mapserver"],
    },
    {
      iconKey: "RulerIcon",
      title: "Geodezja i inżynieria lądowa",
      description:
        "Pozyskiwanie i przetwarzanie danych pomiarowych, modelowanie 3D oraz obliczenia wspierające realizację i analizę projektów infrastrukturalnych.",
      keywords: ["modelowanie 3D", "dane pomiarowe", "geodezyjne opracowanie projektu", "pomiary 3D"],
    },
    {
      iconKey: "DroneIcon",
      title: "Fotogrametria",
      description:
        "Pomiary metodami fotogrametrycznymi, obliczenia i tworzenie modeli oraz integracja danych przestrzennych z środowiskami GIS i BIM.",
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
      keywords: ["power automate", "ms365", "automatyzacja workflow", "python"],
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

