import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Supported locales
  locales: ['en', 'es'],
  // Default fallback locale
  defaultLocale: 'en'
});

export const config = {
  // Run middleware for all routes starting from /
  matcher: ['/', '/((?!api|_next|.*\\..*).*)']
};
