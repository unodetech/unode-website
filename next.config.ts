import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent the page from being framed (clickjacking protection)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Block MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Limit referrer info sent to other sites
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict permissions for browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force browsers to use HTTPS for 2 years (already set by Vercel, but reinforced)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy — restrictive but allows Next.js and Vercel analytics
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-insights.com https://*.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://*.vercel-insights.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
