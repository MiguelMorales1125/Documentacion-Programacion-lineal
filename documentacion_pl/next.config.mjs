import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  async redirects() {
    return [
      {
        source: '/resources',
        destination: '/docs',
        permanent: true
      }
    ]
  },
  turbopack: {
resolveAlias: {
// Path to your `mdx-components` file with extension    'next-mdx-import-source-file': './src/mdx-components.tsx'
  }
}
})