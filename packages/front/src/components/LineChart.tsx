import React from 'react';
import Chart from 'chart.js';

import { Box } from 'bumbag';

interface Props {
  data?: number[];
  labels?: number[];
  title: string;
}

const LineChart: React.FC<Props> = (props) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const { title, data, labels } = props;
  React.useEffect(() => {
    const ctx = canvasRef.current;
    if (ctx && data && labels) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels.map((item) => new Date(item).toLocaleDateString('en-US')),
          datasets: [
            {
              label: title,
              fill: false,
              data,
            },
          ],
        },
      });
    }
  }, []);

  if (!data) return null;
  return (
    <Box width="400px" height="400px" position="relative">
      <canvas width={400} height={400} ref={canvasRef} />
    </Box>
  );
};

export default LineChart;
