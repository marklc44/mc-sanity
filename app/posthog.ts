import { PostHog } from "posthog-node"

export default function PostHogClient() {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || ''
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

  const posthogClient = new PostHog(posthogKey, {
    host: posthogHost,
  })

  return posthogClient
}