import type { DomainIconKey, SocialIconKey } from "@/content/portfolio"
import type { LucideProps } from "lucide-react"
import {
  ChartPieIcon,
  DroneIcon,
  FileChartLineIcon,
  GithubIcon,
  LinkedinIcon,
  MapIcon,
  MonitorCogIcon,
  RulerIcon,
  WorkflowIcon,
} from "lucide-react"

type IconProps = LucideProps

export const socialIcons: Record<SocialIconKey, (props: IconProps) => React.JSX.Element> = {
  GithubIcon: (props) => <GithubIcon {...props} />,
  LinkedinIcon: (props) => <LinkedinIcon {...props} />,
}

export const domainIcons: Record<DomainIconKey, (props: IconProps) => React.JSX.Element> = {
  DroneIcon: (props) => <DroneIcon {...props} />,
  RulerIcon: (props) => <RulerIcon {...props} />,
  FileChartLineIcon: (props) => <FileChartLineIcon {...props} />,
  MonitorCogIcon: (props) => <MonitorCogIcon {...props} />,
  WorkflowIcon: (props) => <WorkflowIcon {...props} />,
  ChartPieIcon: (props) => <ChartPieIcon {...props} />,
  MapIcon: (props) => <MapIcon {...props} />,
}

