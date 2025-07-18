export type TankType = "cylindrical" | "rectangular";
export type Orientation = "horizontal" | "vertical";

interface BaseTank {
  name: string;
  type: TankType;
  id: string;
}

interface CylindricalTank extends BaseTank {
  type: "cylindrical";
  length: number;
  diameter: number;
  tankFactor: number;
  orientation?: Orientation;
}

interface RectangularTank extends BaseTank {
  type: "rectangular";
  length: number;
  height: number;
  width: number;
  tankFactor: number;
}

export type Tank = CylindricalTank | RectangularTank;

export const tanks: Record<string, Tank> = {
  "cyl-5000L": {
    id: "cyl-1",
    name: "5000L Horizontal White Tank",
    type: "cylindrical",
    length: 285,
    diameter: 150,
    tankFactor: 4.64,
    orientation: "horizontal",
  },
  "cyl-2000L-vertical": {
    id: "cyl-2",
    name: "2000L Vertical White Tank",
    type: "cylindrical",
    length: 177,
    diameter: 120,
    tankFactor: 11.3,
    orientation: "vertical",
  },
  "cyl-2000L-horizontal": {
    id: "cyl-3",
    name: "2000L Horizontal White Tank",
    type: "cylindrical",
    length: 150,
    diameter: 130,
    tankFactor: 13,
    orientation: "horizontal",
  },
  "rect-1000L": {
    id: "rect-1",
    name: "Ascot 1000L Tank",
    type: "rectangular",
    length: 130,
    width: 80,
    height: 96,
    tankFactor: 10.4,
  },
  "rect-1500L": {
    id: "rect-2",
    name: "Tranos 1500L Black Tank",
    type: "rectangular",
    length: 150,
    width: 150,
    height: 150,
    tankFactor: 13.4,
  },
  "rect-2000L-Grey": {
    id: "rect-3",
    name: "2000L Grey Tank",
    type: "rectangular",
    length: 150,
    width: 150,
    height: 200,
    tankFactor: 15.6,
  },
  "rect-2000L-White": {
    id: "rect-4",
    name: "2000L White Tank",
    type: "rectangular",
    length: 150,
    width: 150,
    height: 200,
    tankFactor: 13.4,
  },
  "rect-3000L": {
    id: "rect-5",
    name: "3000L Grey Tank",
    type: "rectangular",
    length: 150,
    width: 150,
    height: 300,
    tankFactor: 20,
  },
  "rect-5000L": {
    id: "rect-6",
    name: "5000L Grey Tank",
    type: "rectangular",
    length: 150,
    width: 150,
    height: 500,
    tankFactor: 25,
  },
};
