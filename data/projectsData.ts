interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Acalainer - E-Learning Platform Dedicated to Professionals',
    description: `Built with Nextjs, NestJs and TypeScript, Acalainer is an online learning platform for professionals who want to automate all aspects of their educational content easily.`,
    imgSrc: '',
    href: 'https://acalainer.com/',
  },
  {
    title: 'Selenium based hybrid framework for testing nopcommerce platform using python',
    description: `This framework uses the Page Object Model (POM) combined with data-driven and keyword-driven testing approaches to ensure efficiency, reusability, and maintainability. Designed specifically to automate tests for the nopCommerce website.`,
    imgSrc: '',
    href: 'https://github.com/alamarnissi/python-selenium-automation-framework',
  },
  {
    title: 'Shopify Storefront Theme using Nextjs',
    description: `A Next.js template powered by Tailwind CSS and TypeScript, specifically designed for Shopify. 
    Utilizes the Shopify Storefront API through GraphQL and providing everything you need to jumpstart your Next project and save valuable time.`,
    imgSrc: '',
    href: 'https://github.com/alamarnissi/shop-ify-theme',
  },
]

export default projectsData
