export interface ChartData {
  category: string;
  value: number;
}

export interface IDonutChartProps {
  data?: Array<ChartData>;
  labelType?: LabelType;
  legendLayout?: LegendLayout;
  legendPosition?: LegendPosition;
  showLabel?: boolean;
  color?: string | Array<string> | ((input: any) => void);
}

export type LabelType = 'inner' | 'outer' | 'spiders';
export type LabelPosition = 'top' | 'bottom' | 'middle' | 'left';
export type LegendLayout = 'horizontal' | 'vertical';
export type LegendPosition =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';
