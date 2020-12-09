import { parallel } from 'gulp';
import { pullSnowplowMicro, buildTestDetectors, buildTestHelpers, buildTestSnowplow } from './test';

import { iife } from './iife';
import { es } from './es';

export const buildSp = iife;
export const buildEs = es;
export const build = parallel(iife, es);
export const testEndToEnd = parallel(pullSnowplowMicro, buildTestDetectors, buildTestHelpers, buildTestSnowplow);

export default build;
