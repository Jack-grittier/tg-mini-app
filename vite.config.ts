import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
// export default defineConfig({
//   //base: '/telegram-mini-app-test/',
//   plugins: [react(), tsconfigPaths()],
//   publicDir: './public',
//   server: {
//     port: 443,
//     host: '0.0.0.0',
//     hmr: {
//       host: 'tg-mini-app.local',
//       port: 443,
//     },
//     https: {
//       key: fs.readFileSync('./.cert/localhost-key.pem'),
//       cert: fs.readFileSync('./.cert/localhost.pem'),
//     },
//   },
//   resolve: {
//     alias: {
//       '@app': resolve(__dirname, './src/app'),
//       '@features': resolve(__dirname, './src/features'),
//       '@entities': resolve(__dirname, './src/entities'),
//       '@shared': resolve(__dirname, './src/shared'),
//       '@widgets': resolve(__dirname, './src/widgets'),
//       '@pages': resolve(__dirname, './src/pages'),
//     },
//   },
// })

export default defineConfig(({ mode }) => {
  let config: UserConfig = {
    plugins: [
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            floatPrecision: 2,
          },
        },
        // ...
      }),
      react(),
      tsconfigPaths(),
    ],
    resolve: {
      alias: {
        '@app': resolve(__dirname, './src/app'),
        '@features': resolve(__dirname, './src/features'),
        '@entities': resolve(__dirname, './src/entities'),
        '@shared': resolve(__dirname, './src/shared'),
        '@widgets': resolve(__dirname, './src/widgets'),
        '@pages': resolve(__dirname, './src/pages'),
      },
    },
  }

  if (mode === 'development') {
    config = {
      ...config,
      server: {
        port: 443,
        host: '0.0.0.0',
        hmr: {
          host: 'tg-mini-app.local',
          port: 443,
        },
        https: {
          key: fs.readFileSync('./.cert/localhost-key.pem'),
          cert: fs.readFileSync('./.cert/localhost.pem'),
        },
      },
    }
  }

  if (mode === 'production') {
    config = {
      ...config,
      base: '/telegram-mini-app-test/',
    }
  }

  return config
})
