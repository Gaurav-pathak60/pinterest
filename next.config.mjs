import { defineConfig } from 'next/dist/shared/lib/utils'

const nextConfig = defineConfig({
    images:{
        domains:['lh3.googleusercontent.com','firebasestorage.googleapis.com']
    }
})

export default nextConfig
