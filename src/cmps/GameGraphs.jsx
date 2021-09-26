import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'japan',
    color: 'hsl(239, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 296,
      },
      {
        x: 'helicopter',
        y: 132,
      },
      {
        x: 'boat',
        y: 30,
      },
      {
        x: 'train',
        y: 76,
      },
      {
        x: 'subway',
        y: 30,
      },
      {
        x: 'bus',
        y: 48,
      },
      {
        x: 'car',
        y: 190,
      },
      {
        x: 'moto',
        y: 235,
      },
      {
        x: 'bicycle',
        y: 166,
      },
      {
        x: 'horse',
        y: 80,
      },
      {
        x: 'skateboard',
        y: 12,
      },
      {
        x: 'others',
        y: 224,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(75, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 200,
      },
      {
        x: 'helicopter',
        y: 12,
      },
      {
        x: 'boat',
        y: 249,
      },
      {
        x: 'train',
        y: 291,
      },
      {
        x: 'subway',
        y: 122,
      },
      {
        x: 'bus',
        y: 285,
      },
      {
        x: 'car',
        y: 235,
      },
      {
        x: 'moto',
        y: 10,
      },
      {
        x: 'bicycle',
        y: 45,
      },
      {
        x: 'horse',
        y: 78,
      },
      {
        x: 'skateboard',
        y: 69,
      },
      {
        x: 'others',
        y: 188,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(10, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 20,
      },
      {
        x: 'helicopter',
        y: 39,
      },
      {
        x: 'boat',
        y: 44,
      },
      {
        x: 'train',
        y: 238,
      },
      {
        x: 'subway',
        y: 271,
      },
      {
        x: 'bus',
        y: 214,
      },
      {
        x: 'car',
        y: 179,
      },
      {
        x: 'moto',
        y: 47,
      },
      {
        x: 'bicycle',
        y: 259,
      },
      {
        x: 'horse',
        y: 232,
      },
      {
        x: 'skateboard',
        y: 236,
      },
      {
        x: 'others',
        y: 257,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(249, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 254,
      },
      {
        x: 'helicopter',
        y: 214,
      },
      {
        x: 'boat',
        y: 118,
      },
      {
        x: 'train',
        y: 131,
      },
      {
        x: 'subway',
        y: 179,
      },
      {
        x: 'bus',
        y: 116,
      },
      {
        x: 'car',
        y: 194,
      },
      {
        x: 'moto',
        y: 256,
      },
      {
        x: 'bicycle',
        y: 298,
      },
      {
        x: 'horse',
        y: 164,
      },
      {
        x: 'skateboard',
        y: 26,
      },
      {
        x: 'others',
        y: 216,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(210, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 154,
      },
      {
        x: 'helicopter',
        y: 6,
      },
      {
        x: 'boat',
        y: 157,
      },
      {
        x: 'train',
        y: 122,
      },
      {
        x: 'subway',
        y: 153,
      },
      {
        x: 'bus',
        y: 145,
      },
      {
        x: 'car',
        y: 63,
      },
      {
        x: 'moto',
        y: 122,
      },
      {
        x: 'bicycle',
        y: 240,
      },
      {
        x: 'horse',
        y: 67,
      },
      {
        x: 'skateboard',
        y: 188,
      },
      {
        x: 'others',
        y: 44,
      },
    ],
  },
];
export const GameGraphs = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
