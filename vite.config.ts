/// <reference types="vitest" />
import { URL, fileURLToPath } from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import VueJsx from '@vitejs/plugin-vue-jsx'
import SvgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: [
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
        '.less',
      ],
    },

    plugins: [
      Vue(),
      UnoCSS(),
      VueJsx(),
      SvgLoader(),
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: false })],
        directoryAsNamespace: false,
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
        ],
        vueTemplate: true,
      }),
    ],

    server: {
      proxy: {
        '/api': {
          target: env.VITE_PROXY_TARGET || 'http://localhost:9000',
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },

    build: {
      chunkSizeWarningLimit: 1000,
    },

    test: {
      testTimeout: 30_000,
      name: 'unit',
      include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      environment: 'happy-dom',
      globals: true,
      setupFiles: 'test/setup.ts',
    },}
})
