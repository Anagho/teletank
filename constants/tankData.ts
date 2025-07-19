export interface Tank {
  id: string;
  type: "cylindrical" | "rectangular";
  name: string;
  length?: number;
  height?: number;
  width?: number;
  diameter?: number;
  tankFactor?: number;
  orientation?: "horizontal" | "vertical";
}

export const tanks: Tank[] = [
  {
    id: "cyl-1",
    name: "5000L Horizontal White Tank",
    type: "cylindrical",
    length: 285,
    diameter: 150,
    orientation: "horizontal",
  },
  {
    id: "cyl-2",
    name: "2000L Vertical White Tank",
    type: "cylindrical",
    length: 177,
    diameter: 120,
    tankFactor: 11.3,
    orientation: "vertical",
  },
  {
    id: "cyl-3",
    name: "2000L Horizontal White Tank",
    type: "cylindrical",
    length: 150,
    diameter: 130,
    tankFactor: 13,
    orientation: "horizontal",
  },
  {
    id: "cyl-4",
    name: "5000L White Tank 2",
    type: "cylindrical",
    length: 307,
    diameter: 140,
    orientation: "horizontal",
  },
  {
    id: "rect-1",
    name: "Ascot 1000L Tank",
    type: "rectangular",
    length: 130,
    width: 80,
    height: 96,
    tankFactor: 10.4,
  },
  {
    id: "rect-2",
    name: "Tranos 1500L Black Tank",
    type: "rectangular",
    length: 115,
    width: 115,
    height: 115,
    tankFactor: 13.2,
  },
  {
    id: "rect-3",
    name: "2000L Gray Tank",
    type: "rectangular",
    length: 125,
    width: 125,
    height: 130,
    tankFactor: 15.6,
  },
  {
    id: "rect-4",
    name: "2000L White Tank",
    type: "rectangular",
    length: 116,
    width: 116,
    height: 149,
    tankFactor: 13.4,
  },
  {
    id: "rect-5",
    name: "3000L Gray Tank",
    type: "rectangular",
    length: 141,
    width: 141,
    height: 150,
    tankFactor: 19.8,
  },
  {
    id: "rect-6",
    name: "5000L Gray Tank",
    type: "rectangular",
    length: 158.2,
    width: 158.2,
    height: 200,
    tankFactor: 25,
  },
];
