import dns from 'dns'
if (typeof dns.setServers === 'function') {
  try {
    dns.setServers(['8.8.8.8', '1.1.1.1'])
  } catch {
    // Fallback if environment restricts custom DNS
  }
}

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Blogs } from './collections/Blogs'
import { Enquiry } from './collections/Enquiry'
import { AboutUs } from './globals/AboutUs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Blogs, Enquiry],
  globals: [AboutUs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'carepulse_secret_key_8492049103984102948',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || 'mongodb+srv://developer:wZX1QR2l2VV4iorK@development.mabsw8n.mongodb.net/CarePulse',
  }),
  localization: {
    locales: [{ code: 'en', label: 'English' }],
    fallback: true,
    defaultLocale: 'en',
  },
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'carepulse/public/media',
        },
      },
      bucket: process.env.CLOUDFLARE_BUCKET || 'carepulse',
      config: {
        credentials: {
          accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID || '71927885ce0cc01c6d2e68e1c317931c',
          secretAccessKey:
            process.env.CLOUDFLARE_SECRET_ACCESS_KEY ||
            '697e1698c2e412185e57db92646027f4281f1fd7db5af016dc1eb2af98a3751c',
        },
        region: 'auto',
        endpoint:
          process.env.CLOUDFLARE_ENDPOINT ||
          'https://4f3b4891e7a97aa3c557b20f1dfb198a.r2.cloudflarestorage.com',
        forcePathStyle: true,
      },
    }),
  ],
})
