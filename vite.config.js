import { defineConfig } from 'vite'
import dns from 'node:dns'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        viteReact()
    ],
    server: {
        allowedHosts: ['.davidstratton.co.uk']        
    },
})