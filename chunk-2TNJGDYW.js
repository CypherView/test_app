import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  LineController,
  LineElement,
  LinearScale,
  PieController,
  PointElement,
  ScatterController,
  TimeScale,
  index,
  plugin_legend,
  plugin_tooltip
} from "./chunk-3QZWN62F.js";

// src/app/shared/utils/register-chart-js.ts
var registered = false;
function registerChartJs() {
  if (registered)
    return;
  Chart.register(LineController, LineElement, PointElement, BarController, BarElement, PieController, DoughnutController, ScatterController, ArcElement, LinearScale, TimeScale, CategoryScale, plugin_tooltip, plugin_legend, index);
  registered = true;
}

export {
  registerChartJs
};
//# sourceMappingURL=chunk-2TNJGDYW.js.map
