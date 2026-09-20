import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';

const sourceRoot = resolve(process.env.LYNXUS_SOURCE_DIR ?? resolve(import.meta.dirname, '../lynxus'));
const contributeItem = existsSync(resolve(sourceRoot, 'docs/contribute.md')) ? ['docs/contribute'] : [];

export default defineConfig({
  site: 'https://lynxus-project.github.io',
  integrations: [starlight({
    title: 'Lynxus Docs',
    titleDelimiter: '-',
    description: 'AOT-first compile-time Java ORM and pragmatic MyBatis alternative. Lynxus generates ordinary Java Mappers at javac and executes them through explicit JDBC.',
    favicon: '/img/lynxus-favicon.svg',
    social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/lynxus-project/lynxus'}],
    defaultLocale: 'root',
    locales: {root: {label: 'English', lang: 'en'}},
    sidebar: [
      {label: 'Start here', items: ['docs', 'docs/user/getting-started', 'docs/user/architecture', ...contributeItem]},
      {label: 'Core', items: ['docs/user/core', 'docs/user/core/mapping', 'docs/user/core/extensions', 'docs/user/core/standalone']},
      {label: 'Integrations', items: ['docs/user/spring', 'docs/user/spring/spring-boot']},
      {label: 'Migration', items: ['docs/user/migration', 'docs/user/migration/from-mybatis', 'docs/user/migration/using-migration-skill']},
      {label: 'Reference', items: ['docs/reference/core-contract', 'docs/reference/extensions', 'docs/reference/mybatis-compatibility']},
    ],
    customCss: ['./src/styles/starlight.css'],
    components: {
      Head: './src/components/Head.astro',
    },
    editLink: {baseUrl: 'https://github.com/lynxus-project/lynxus/edit/main/docs/'},
    pagination: true,
    lastUpdated: true,
    head: [
      {tag: 'meta', attrs: {property: 'og:image', content: 'https://lynxus-project.github.io/img/lynxus-social-card.png'}},
      {tag: 'meta', attrs: {property: 'og:image:type', content: 'image/png'}},
      {tag: 'meta', attrs: {property: 'og:image:width', content: '1200'}},
      {tag: 'meta', attrs: {property: 'og:image:height', content: '630'}},
      {tag: 'meta', attrs: {property: 'og:image:alt', content: 'Lynxus - AOT-first Compile-time Java ORM.'}},
      {tag: 'meta', attrs: {name: 'twitter:card', content: 'summary_large_image'}},
      {tag: 'meta', attrs: {name: 'twitter:image', content: 'https://lynxus-project.github.io/img/lynxus-social-card.png'}},
      {tag: 'meta', attrs: {name: 'twitter:image:alt', content: 'Lynxus - AOT-first Compile-time Java ORM.'}},
    ],
  })],
});
