"use client"

import dynamic from 'next/dynamic'

// Import ThemeToggle with ssr: false to skip server-side rendering
const DynamicThemeToggle = dynamic(
  () => import('./frontend/ThemeToggle').then(mod => mod.ThemeToggle),
  { ssr: false }
)

export default DynamicThemeToggle