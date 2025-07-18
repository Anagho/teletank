// HORIZONTAL CYLINDER
export function horizontalCylinderVolume(
  length_cm: number,
  diameter_cm: number,
  dip_cm: number
) {
  const R = diameter_cm / 2;
  const h = dip_cm;
  const L = length_cm;
  const PI = Math.PI;

  const totalVolume = (PI * R ** 2 * L) / 1000;

  if (h === 0)
    return { capacity: totalVolume, inside: 0, missing: totalVolume };
  if (h === 2 * R)
    return { capacity: totalVolume, inside: totalVolume, missing: 0 };
  if (h > 2 * R) return { error: "Dip cannot be more than diameter." };

  const theta = Math.acos((R - h) / R);
  const segmentArea = R * R * theta - (R - h) * Math.sqrt(2 * R * h - h * h);
  const liquidVolume = (L * segmentArea) / 1000;

  return {
    capacity: totalVolume.toFixed(2),
    inside: liquidVolume.toFixed(2),
    missing: (totalVolume - liquidVolume).toFixed(2),
    percentFull: ((liquidVolume / totalVolume) * 100).toFixed(2),
  };
}

// VERTICAL CYLINDER
export function verticalCylinderVolume(
  diameter_cm: number,
  height_cm: number,
  dip_cm: number
) {
  const R = diameter_cm / 2;
  const h = dip_cm;
  const H = height_cm;
  const PI = Math.PI;

  if (h < 0) return { error: "Dip cannot be less than 0." };
  if (h > H) return { error: "Dip exceeds tank height." };

  const totalVolume = (PI * R ** 2 * H) / 1000;
  const liquidVolume = (PI * R ** 2 * h) / 1000;

  return {
    capacity: totalVolume.toFixed(2),
    inside: liquidVolume.toFixed(2),
    missing: (totalVolume - liquidVolume).toFixed(2),
    percentFull: ((liquidVolume / totalVolume) * 100).toFixed(2),
  };
}

// RECTANGULAR TANKS
export function rectangularVolume(length: number, width: number, height: number, dip: number) {
  if (dip > height) return { error: "Dip exceeds tank height." };

  const total = length * width * height / 1000;
  const inside = length * width * dip / 1000;

  return {
    capacity: total.toFixed(2),
    inside: inside.toFixed(2),
    missing: (total - inside).toFixed(2),
    percentFull: ((inside / total) * 100).toFixed(2),
  };
}

