import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: `Cookie Policy | ${siteConfig.name}`,
  description:
    "Official Cookie Policy for EliteHMS. Information about technical session cookies, 30-day httpOnly refresh cookies, theme preferences, and analytics.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy & Cookies"
        title="Cookie Policy"
        description="Learn how EliteHMS uses cookies and local browser storage to secure your session and optimize dashboard performance."
      />

      <div className="container max-w-4xl py-16 space-y-10">
        <ContentBlock title="1. What Are Cookies?">
          <p>
            Cookies are small text files stored on your browser or device when you visit websites. EliteHMS uses strictly necessary cookies and browser storage to maintain secure staff logins, restore sessions, and remember interface preferences.
          </p>
        </ContentBlock>

        <ContentBlock title="2. Cookies We Use">
          <div className="space-y-4 text-sm text-[rgb(var(--foreground)/0.8)]">
            <div className="rounded-lg border border-[rgb(var(--border))] p-4 bg-[rgb(var(--card))]">
              <div className="font-bold text-base text-[rgb(var(--primary))]">httpOnly Refresh Token Cookie (Strictly Necessary)</div>
              <p className="mt-1">
                <strong>Purpose:</strong> Stores a 30-day encrypted refresh token that silently restores your logged-in session when you open the app, avoiding constant password re-entry during busy work weeks.
              </p>
              <div className="mt-2 text-xs text-[rgb(var(--foreground)/0.6)]">Duration: 30 days • Type: httpOnly, Secure</div>
            </div>

            <div className="rounded-lg border border-[rgb(var(--border))] p-4 bg-[rgb(var(--card))]">
              <div className="font-bold text-base text-[rgb(var(--primary))]">Access Token (Local Storage)</div>
              <p className="mt-1">
                <strong>Purpose:</strong> Short-lived 15-minute JWT access token used by your browser to authenticate API calls to our backend servers.
              </p>
              <div className="mt-2 text-xs text-[rgb(var(--foreground)/0.6)]">Duration: 15 minutes • Type: LocalStorage</div>
            </div>

            <div className="rounded-lg border border-[rgb(var(--border))] p-4 bg-[rgb(var(--card))]">
              <div className="font-bold text-base text-[rgb(var(--primary))]">Theme & Navigation Preferences (LocalStorage)</div>
              <p className="mt-1">
                <strong>Purpose:</strong> Stores your chosen color theme (light/dark) and sidebar module visibility customizations.
              </p>
              <div className="mt-2 text-xs text-[rgb(var(--foreground)/0.6)]">Duration: Persistent • Type: LocalStorage</div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="3. Analytics & Third-Party Cookies">
          <p>
            On our marketing website (www.elitehms.online), we use privacy-focused analytics (Google Analytics / Microsoft Clarity) to understand page visits and improve our documentation. No clinical or patient data is ever sent to analytics providers.
          </p>
        </ContentBlock>

        <ContentBlock title="4. Managing Cookies">
          <p>
            You can clear cookies and local storage through your web browser settings at any time. Note that clearing strictly necessary session cookies will require re-authenticating with your account credentials.
          </p>
        </ContentBlock>
      </div>
    </>
  );
}
