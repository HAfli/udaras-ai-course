import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

/**
 * BASE PATH
 * ---------
 * The site uses hash routing, so it works from any directory without a
 * server rewrite. Assets still need a correct base.
 *
 *   default  './'                 relative — works at any depth, including
 *                                 file:// and https://user.github.io/repo/
 *   override VITE_BASE_PATH=/x/   set an absolute base if you prefer
 *
 * The GitHub Actions workflow sets VITE_BASE_PATH to /<repository-name>/
 * automatically, so you never have to edit this file when you rename the repo.
 */
const base = process.env.VITE_BASE_PATH || './'
const single = process.env.SINGLE_FILE === '1'

export default defineConfig({
  base: single ? './' : base,
  plugins: single ? [react(), viteSingleFile()] : [react()],
  build: {
    outDir: single ? 'dist-single' : 'dist',
    cssCodeSplit: !single,
    assetsInlineLimit: single ? 100000000 : 4096,
    chunkSizeWarningLimit: 900,
  },
})
