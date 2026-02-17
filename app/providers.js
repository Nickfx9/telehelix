'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init('phc_BsLXt59wCeztazcXLJQyfIOnvCGN7vLWQSt71Tcmdic', {
    api_host: 'https://us.i.posthog.com', // Use 'https://app.posthog.com' if your project is US-based
    person_profiles: 'identified_only', // Recommended for better privacy control
    capture_pageview: false // We will handle pageviews manually to be more accurate
  })
}

export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}