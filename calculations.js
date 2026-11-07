/** Illustrative electrical model. No claim of measured cell or converter performance. */
export function estimate({capacityMah, outputWatts, efficiencyPercent}) {
  for (const [name, value] of Object.entries({capacityMah, outputWatts, efficiencyPercent})) {
    if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${name} must be positive and finite`);
  }
  if (efficiencyPercent > 100) throw new RangeError('Efficiency cannot exceed 100%');
  const nominalPackVoltage = 4 * 3.6;
  const packAh = 3 * capacityMah / 1000;
  const storedWh = nominalPackVoltage * packAh;
  const efficiency = efficiencyPercent / 100;
  const usbWh = storedWh * efficiency;
  const packCurrentA = outputWatts / (nominalPackVoltage * efficiency);
  return {storedWh, usbWh, packCurrentA, cellCurrentA: packCurrentA / 3, runtimeHours: usbWh / outputWatts, converterHeatW: outputWatts / efficiency - outputWatts};
}
