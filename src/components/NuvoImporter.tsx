import dynamic from 'next/dynamic'
import { ConfigureAPI } from 'nuvo-react'

export const NuvoImporter =
  dynamic <
    ConfigureAPI >
    (() => import('nuvo-react').then((item) => item.NuvoImporter), { ssr: false })