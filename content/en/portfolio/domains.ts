import type { DomainIconKey, DomainsContent } from "../../portfolio-types"

export const domains = {
  sectionLabel: "Expertise",
  title: "Key areas",
  description: "Key areas across GIS, BIM, process automation, and data visualization.",
  items: [
    {
      iconKey: "FileChartLineIcon",
      title: "GIS & Web mapping",
      description:
        "Creating and integrating spatial datasets, web maps, and systems that support analysis and visualization of geographic information.",
      keywords: ["QGIS", "spatial data", "geovisualization", "mapserver"],
    },
    {
      iconKey: "RulerIcon",
      title: "Surveying & civil engineering",
      description:
        "Acquisition and processing of measurement data, 3D modeling, and computations supporting delivery and analysis of infrastructure projects.",
      keywords: ["3D modeling", "measurement data", "engineering", "3D surveys"],
    },
    {
      iconKey: "DroneIcon",
      title: "Photogrammetry",
      description:
        "Photogrammetric surveys, computation and model creation, and integration of spatial data with GIS and BIM environments.",
      keywords: ["photogrammetry", "terrain models", "point clouds", "UAV"],
    },
    {
      iconKey: "ChartPieIcon",
      title: "Data analysis",
      description:
        "Processing and organizing spatial and project data, integrating spatial information with design documentation.",
      keywords: ["spatial data", "project data", "reporting", "analysis"],
    },
    {
      iconKey: "MonitorCogIcon" as DomainIconKey,
      title: "Process automation",
      description:
        "Designing and implementing automation that supports information flow, reporting, and day-to-day operational processes.",
      keywords: ["power automate", "ms365", "workflow automation", "python"],
    },
    {
      iconKey: "WorkflowIcon",
      title: "System integration",
      description:
        "Connecting data, tools, and processes across GIS, BIM, MS365 and systems used in infrastructure project delivery.",
      keywords: ["digital workflow", "data integration", "BIM", "GIS"],
    },
  ],
} satisfies DomainsContent

