import type { NextConfig } from "next";

// NOTE: When deployed to Cloudflare Pages, security headers come from
// public/_headers (Cloudflare's static-site headers format). The headers()
// function below only takes effect on `next dev` and `next start` (Node).
// We keep it as a defense-in-depth fallback if this ever runs server-side.

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.cloudflareinsights.com https://plausible.io",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://*.cloudflareinsights.com https://plausible.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages — produces a fully static site in `out/`
  output: "export",
  // Required when output: export — Next.js Image Optimization is server-side only
  images: { unoptimized: true },
  // Trailing slash makes Cloudflare Pages serve /about/ -> /about/index.html
  trailingSlash: true,
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
