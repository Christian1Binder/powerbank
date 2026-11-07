import test from 'node:test';
import assert from 'node:assert/strict';
import {estimate} from '../calculations.js';
const near = (a,b) => assert.ok(Math.abs(a-b)<1e-8, `${a} != ${b}`);
test('Twelve new 3 Ah cells store 129.6 Wh regardless of series arrangement', () => {
  const r=estimate({capacityMah:3000,outputWatts:100,efficiencyPercent:90});
  near(r.storedWh, 12 * 3.6 * 3);
  near(r.usbWh,116.64);
  near(r.packCurrentA,100/(14.4*.9));
  near(r.cellCurrentA,100/(14.4*.9*3));
  near(r.converterHeatW,100/.9-100);
});
test('Output load changes runtime and current, not available model energy', () => {
  const settings={capacityMah:2400,efficiencyPercent:90};
  const a=estimate({...settings,outputWatts:50});
  const b=estimate({...settings,outputWatts:100});
  near(a.usbWh,b.usbWh); near(a.runtimeHours,2*b.runtimeHours); near(b.packCurrentA,2*a.packCurrentA);
});
test('Invalid or impossible input cannot generate misleading energy estimates', () => {
  const good={capacityMah:2400,outputWatts:65,efficiencyPercent:90};
  for (const bad of [{capacityMah:0},{outputWatts:-1},{efficiencyPercent:101},{capacityMah:NaN},{outputWatts:Infinity}]) assert.throws(()=>estimate({...good,...bad}),RangeError);
});
