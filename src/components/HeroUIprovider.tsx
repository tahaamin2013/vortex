// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react'
import { ReactNode } from 'react'

export function HeroUIProviders({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}
