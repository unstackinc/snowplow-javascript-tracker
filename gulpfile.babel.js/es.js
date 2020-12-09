import { rollup } from 'rollup';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';
import { basePlugins, spBannerPlugin } from './rollup';

const report = [
    sizes(), 
    filesize({showMinifiedSize: false, showBeforeSizes: 'build'})
]

export const es = async function () {
    const snowplow = await rollup({
        input: 'src/js/snowplow.js',
        plugins: [...basePlugins, spBannerPlugin, ...report],
    });

    return await snowplow.write({
        file: 'dist/index.js',
        format: 'es',
    });
};
