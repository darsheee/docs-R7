import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

import Unocss from 'unocss/vite'

const ogUrl = 'https://civilspage.vercel.app//'
const ogImage = `${ogUrl}og-image.png`

export default (defineConfig({
  lang: 'en-US',
  title: 'UPSC.STUDY',
  description: 'UPSC',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    // ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '32x32', type: 'ico/image/svg+xml', alt: 'icon' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180', type: 'image/svg+xml' }],

    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    // ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }],
    ['link', { rel: 'mask-icon', href: '/pwa-512x512.png', color: '#fb2a01', type: 'image/svg+xml' }],

    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, React, Vue, VitePress, Preact, Svelte, SvelteKit, workbox, SolidJS, Vite, vite-plugin, îles, Astro',
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Civils.app' }],
    ['meta', { property: 'og:image', content: 'https://res.cloudinary.com/dvtssuuws/image/upload/v1708840763/wuedn4lfsoenjjxgusep.png' }],
    ['meta', { property: 'og:description', content: 'Zero-config PWA Framework-agnostic Plugin for Vite and Integrations' }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { name: 'twitter:description', content: 'Zero-config PWA Framework-agnostic Plugin for Vite and Integrations' }],
    ['meta', { name: 'twitter:title', content: 'Vite PWA' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content:'https://res.cloudinary.com/dvtssuuws/image/upload/v1708840763/wuedn4lfsoenjjxgusep.png' }],
    ['meta', { name: 'twitter:site', content: '@antfu7' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: false,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  ignoreDeadLinks: true,

  vite: {
    logLevel: 'info',
    plugins: [
      Unocss(),

    ],
  },


  themeConfig: {

    search: {
      provider: 'local',

    },
    // logo: '/favicon.svg',
    //
    socialLinks: [
      // { icon: 'discord', link: 'https://chat.antfu.me' },
      // { icon: 'github', link: 'https://github.com/vite-pwa/docs' },
    ],
    footer: {
      message: 'Released ',
      copyright: 'Copyright © 2021-PRESENT',
    },
    nav: [

      { text: 'PYQs Test Series', link: 'https://iles-docs.netlify.app/guide/pwa' },

      {
        text: 'Modern History',
        items: [

          { text: 'Advent of Europeans', link: '/upsc-modern-india-history/18c/portuguese' },
          { text: 'British Expansion', link: '/upsc-modern-india-history/expansion/south' },
          { text: 'Rise of National Consciousness', link: '/upsc-modern-india-history/transformed-economy-polity-society/rise-indian-nationalism' },
          { text: 'Early Structure of British Raj (1757 - 1857)', link: '' },
          { text: 'The Revolt of 1857', link: '' },
          { text: 'Administrative Changes after 1858', link: '' },
          { text: 'Popular Uprisings and Revolts', link: '/upsc-modern-india-history/revolt/faraizi-santhal-khond-ramosi' },
          { text: 'Socio-Religious Reform Movements', link: '/upsc-modern-india-history/socio-religious-reform/wahabi-self-respect-vaikom' },
          { text: ' Birth of Indian Nationalism', link: '' },
          { text: 'Political Association', link: '/upsc-modern-india-history/indian-national-movement/political-associations' },
          { text: 'Partition of Bengal', link: '/upsc-modern-india-history/indian-national-movement/partition-bengal-swadeshi-movement' },
          { text: 'Emergence of Mahatma Gandhi', link: '/upsc-modern-india-history/indian-national-movement/emergence-mahatma-gandhi' },
          { text: 'Non-Cooperation Movement', link: 'upsc-modern-india-history/indian-national-movement/khilafat-non-cooperation-movement' },
          { text: 'Struggle for Swaraj (1919-27)', link: '/upsc-modern-india-history/17.constitutionalREFORMS 1892-1920' },
          { text: 'Civil Disobedience Movement (1930)', link: '/upsc-modern-india-history/simon-commission-boycott' },
          { text: 'Freedom with Partition (1939 - 47)', link: '/upsc-modern-india-history/34.Second World War' },
          { text: '', link: '' },
          { text: '', link: '' },
          { text: '', link: '' },
          { text: '', link: '' },

        ],
      },

      { text: 'Geography', link: '/india-upsc-gs1/geography/1.geo-tectonics/1.origin of earth' },
      { text: 'Indian Polity', link: '/upsc-gs2/indian-polity/constitutional/1.historical-background' },

      // {
      //   text: 'General Studies 1',
      //   items: [
      //     { text: 'Ancient History', link: '/india-upsc-gs1/ancient-india/0.syllabus-ancient' },
      //     { text: 'Medieval History ', link: '/india-upsc-gs1/medieval-india/' },
      //     { text: 'Modern History ', link: '/india-upsc-gs1/modern-india/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },

      //   ],
      // },
      // {
      //   text: 'General Studies 2',
      //   items: [

      //     { text: '', link: '/upsc-gs2/' },

      //   ],
      // },
      {
        text: 'Economics',
        items: [
          { text: 'Planning', link: '/upsc-gs3/indian_economy/1.planning-india' },
          { text: 'Growth', link: '/upsc-gs3/indian_economy/3.Growth' },
          { text: 'Fiscal Policy', link: '/upsc-gs3/indian_economy/fiscal-policy' },
          { text: '', link: '' },
          { text: 'Syllabus', link: '/upsc-gs3/indian_economy/' },
          { text: 'Planning', link: '/upsc-gs3/indian_economy/1.planning-india' },
          { text: 'Employment', link: '/upsc-gs3/indian_economy/5.Employment' },
          { text: 'Indian Currency System Today', link: '/upsc-gs3/indian_economy/indian-currency-system/indian-currency-system-today' },

          { text: 'Inclusive Growth & Issues', link: '/upsc-gs3/indian_economy/inclusive-growth' },
          { text: 'Government Budgeting', link: '/upsc-gs3/indian_economy/government-budgeting' },
          { text: 'India & WTO', link: '/upsc-gs3/indian_economy/international-economic-organisation' },

        ],
      },
      // {
      //   text: 'General Studies 4',
      //   items: [

      //     { text: 'Syllabus', link: '/upsc-ias-GS4/' },

      //   ],
      // },

    ],

    sidebar: {

      '/upsc-gs2/indian-polity/constitutional/': [
        {
          text: 'Indian Polity',
          collapsed: false,
          items: [
            { text: 'Historical ', link: '/upsc-gs2/indian-polity/constitutional/1.historical-background' },
            { text: 'Making of the Indian Constitution', link: '/upsc-gs2/indian-polity/constitutional/2.making' },
            { text: 'Salient Features of the Indian Constitution', link: '/upsc-gs2/indian-polity/constitutional/3.features' },
            { text: 'Preamble of the Indian Constitution', link: '/upsc-gs2/indian-polity/constitutional/4.preamble of the indian constitution' },
            { text: 'Union India', link: '/upsc-gs2/indian-polity/constitutional/5.union & its territory' },
            { text: 'Citizenship', link: '/upsc-gs2/indian-polity/constitutional/6.Citizenship' },
            { text: 'Fundamental Rights', link: '/upsc-gs2/indian-polity/constitutional/7.Fundamental Rights' },
            { text: 'Directive Principles', link: '/upsc-gs2/indian-polity/constitutional/8.Directive Principles of State Policy' },
            { text: 'Fundamental Duties', link: '/upsc-gs2/indian-polity/constitutional/9.Fundamental Duties' },
            { text: 'Amendment of the Constitution', link: '/upsc-gs2/indian-polity/constitutional/10.Amendment of the Constitution' },

          ],
        },

      ],
      '/upsc-modern-india-history/18c': [
        {
          text: 'Advent of Europeans',
          collapsed: false,
          items: [
            { text: 'The Portuguese', link: '/upsc-modern-india-history/18c/portuguese' },
            { text: 'The Dutch', link: '/upsc-modern-india-history/18c/dutch' },
            { text: 'The English', link: '/upsc-modern-india-history/18c/english' },
            { text: 'Anglo - Carnatic War', link: '/upsc-modern-india-history/18c/anglo-carnatic' },
            { text: 'Plassey to Buxar', link: '/upsc-modern-india-history/18c/plassey-buxar' },
            { text: '', link: '/upsc-modern-india-history/18c/' },

            { text: '1701 - 1750', link: '/upsc-modern-india-history/1701-1750' },
            { text: '1751 - 1800', link: '/upsc-modern-india-history/1751-1800' },

          ],
        },
      ],

      '/upsc-modern-india-history/expansion': [
        {
          text: 'British Expansion & <br> Consolidation',
          collapsed: false,
          items: [
            { text: 'In South India', link: '/upsc-modern-india-history/expansion/south' },
            { text: 'Beyond Indian Frontiers', link: '/upsc-modern-india-history/expansion/frontiers' },
            { text: 'In North India', link: '/upsc-modern-india-history/expansion/north' },

            { text: 'Dramatis Personae', link: '/upsc-modern-india-history/personae' },
            { text: '1600 - 1650', link: '/upsc-modern-india-history/1600-1650' },
            { text: '1651 - 1700', link: '/upsc-modern-india-history/1651-1700' },
          ],
        },
      ],

      '/upsc-modern-india-history/': [
        {
          text: 'Emergence of Mahatma Gandhi',
          collapsed: false,
          items: [

            { text: 'Emergence of Gandhi', link: '/upsc-modern-india-history/16.MAHATMA-GANDHI-EMERGENCE' },
            { text: 'The First World War', link: '/upsc-modern-india-history/13.THE FIRST WORLD WAR' },
            { text: '', link: '' },
          ],
        },

        {
          text: 'Non-Cooperation Movement',
          collapsed: false,
          items: [

            { text: 'Non-Cooperation Movement', link: '/upsc-modern-india-history//18.NON-COOPERATION MOVEMENT' },
            { text: '', link: '' },
          ],
        },
        {
          text: 'Struggle for Swaraj (1919-27)',
          collapsed: false,
          items: [

            { text: 'constitutionalReforms 1892-1920', link: '/upsc-modern-india-history/17.constitutionalREFORMS 1892-1920' },

            { text: 'Caste Movements', link: '/upsc-modern-india-history/20.THE NON-BRAHMIN  MOVEMENT' },
            { text: 'Swarjists', link: '/upsc-modern-india-history/21.SWARAJISTS' },

            { text: 'GROWTH OF COMMUNALISM', link: '/upsc-modern-india-history/22.GROWTH OF COMMUNALISM' },
            { text: 'NATIONALIST LITERATURE', link: '/upsc-modern-india-history/23.NATIONALIST LITERATURE' },
            { text: 'REVOLUTIONARY AND TERRORIST MOVEMENT', link: '/upsc-modern-india-history/24.REVOLUTIONARY AND TERRORIST MOVEMENT' },

          ],
        },
        {
          text: 'Civil Disobedience Movement (1930)',
          collapsed: false,
          items: [

            { text: 'Simon Commission', link: '/upsc-modern-india-history/simon-commission-boycott' },
            { text: 'Civil Disobedience Movement', link: '/upsc-modern-india-history/25.CIVIL DOBEDIENCE MOVEMENT' },

            { text: ' Socialist Idea in INC', link: '/upsc-modern-india-history/26.SOCIALIST IDEA -INC' },
            { text: 'Growth of the Left Ideology', link: '/upsc-modern-india-history/27.GROWTH OF THE LEFT' },
            { text: 'Growth of Trade Union', link: '/upsc-modern-india-history/28.GROWTH OF TRADE UNION' },

            { text: 'constitutionalREFORMS  1921-1935', link: '/upsc-modern-india-history/29.constitutionalREFORMS  1921-1935' },
            { text: 'Election of 1937', link: '/upsc-modern-india-history/30.ELECTIONS OF 1937' },

          ],
        },

        {
          text: 'Freedom with Partition <br>(1939 - 47)',
          collapsed: false,
          items: [
            { text: 'Nationalism - 2nd World War', link: '/upsc-modern-india-history/34.Second World War' },

            { text: 'Towards Independence', link: '/upsc-modern-india-history/35.TOWARDS-INDEPENDENCE' },
            { text: 'Communalism & Partition', link: '/upsc-modern-india-history/36.COMMUNALISM' },

          ],
        },

      ],

      '/upsc-modern-india-history': [

        {
          text: 'Rise of <br> National Consciousness',
          collapsed: false,
          items: [

            { text: 'National Consciousness', link: '/upsc-modern-india-history/3.RISE-OF-NATIONAL-CONSCIOUSNESS' },

            { text: '', link: '' },
            { text: '', link: '' },
          ],
        },

        {
          text: 'Early Structure of British Raj (1757 - 1857)',
          collapsed: false,
          items: [
            { text: '', link: '' },
            { text: '', link: '' },
          ],
        },

        {
          text: 'The Revolt of 1857',
          collapsed: false,
          items: [
            { text: '', link: '' },
            { text: '', link: '' },
          ],
        },

        {
          text: 'Administrative Changes after 1858',
          collapsed: false,
          items: [
            { text: '', link: '' },
            { text: '', link: '' },
          ],
        },
        {
          text: 'Popular Uprisings and Revolts',
          collapsed: false,
          items: [
            { text: 'Popular Uprisings', link: '/upsc-modern-india-history/7.POPULAR UPRISINGS' },
            { text: 'Popular Uprisings up to 1857', link: '/upsc-modern-india-history/uprising/faraizi-santhal-khond-ramosi' },
            { text: 'Popular Uprisings After 1857', link: '/upsc-modern-india-history/uprising/moplah-pabna-deccan-indigo' },
          ],
        },
        {
          text: 'Socio-Religious Reform Movements',
          collapsed: false,
          items: [
            { text: 'Social Reforms', link: '/upsc-modern-india-history/8.SOCIAL REFORMS' },

          ],
        },

        {
          text: ' Birth of Indian Nationalism',
          collapsed: false,
          items: [

            { text: 'Formation of INC', link: '/upsc-modern-india-history/9.INDIAN NATIONAL CONGRESS  FORMATION' },

          ],
        },
        {
          text: 'Partition of Bengal',
          collapsed: false,
          items: [

            { text: 'Moderates & Extremists', link: '/upsc-modern-india-history/10.MODERATES AND EXTREMISTS' },
            { text: 'Partition of Bengal', link: '/upsc-modern-india-history/11.PARTITION OF BENGAL' },
            { text: 'Muslim League', link: '/upsc-modern-india-history/12.Muslim-league' },

            { text: 'Revolutionary Trends', link: '/upsc-modern-india-history/15.REVOLUTIONARY TRENDS' },
          ],
        },

        {
          text: 'RISING RESENTMENT',
          collapsed: false,
          items: [

          ],
        },

        {
          text: 'constitutionalChanges before 1900 ',
          collapsed: false,
          items: [

          ],
        },
        {
          text: 'constitutionalChanges after 1900 ',
          collapsed: false,
          items: [

          ],
        },

        {
          text: 'The Struggle Begins <br> (1858 -1905)',
          collapsed: false,
          items: [

          ],
        },

      ],

      // '/india-upsc-gs1/ancient-india': [
      //   {
      //     text: '',
      //      collapsed: false,
      //     items: [
      //       { text: 'Syllabus- Ancient History', link: '/india-upsc-gs1/ancient-india/0.syllabus-ancient' },
      //       { text: '1.Pre-history and Proto-history', link: '/india-upsc-gs1/ancient-india/1.pre-history' },
      //       { text: '2.Indus Valley Civilization', link: '/india-upsc-gs1/ancient-india/2.indus-valley' },
      //       { text: '3.Megalithic Cultures', link: '/india-upsc-gs1/ancient-india/3.megalithic-cultures' },

      //       { text: '4.Aryans and Vedic Period', link: '/india-upsc-gs1/ancient-india/4.vedic-period' },
      //       { text: '5.Period of Mahajanapadas', link: '/india-upsc-gs1/ancient-india/5.mahajanapadas' },
      //       { text: '6.Jainism & Buddhism', link: '/india-upsc-gs1/ancient-india/6.mauryan-period' },
      //       { text: '7.Magadhan Empire', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '8.Iranian-Macedonian Invasions', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '9.Mauryan Period', link: '/india-upsc-gs1/ancient-india/' },

      //       { text: '10.Mauryan Period', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '11.Indo-Greeks', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '12.Satavahanas', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '13.Cholas-Pandyas-Cheras', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '14.Sangam Age', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '15.Gupta Empire', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '16.Harsha Kingdom', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '17.Bhakti & Sufi Movement', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '18.Palas-Pratiharas-Rashtrakutas', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '19.Chola Empire', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },

      //       { text: '20.Delhi Sultante', link: '' },
      //       { text: '21. Khalji Revolution', link: '' },
      //       { text: '22.Vijayanagara Empire', link: '' },
      //       { text: '23.Mughal Empire', link: '' },
      //     ],
      //   },

      // ],

      // '/india-upsc-gs1/medieval-india': [
      //   {
      //     text: '',
      //      collapsed: false,
      //     items: [

      //       { text: '', link: '/india-upsc-gs1/medieval-india/' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },

      //     ],
      //   },

      // ],

      // '/india-upsc-gs1/modern-india': [
      //   {
      //     text: '',
      //      collapsed: false,
      //     items: [

      //       { text: '', link: '/india-upsc-gs1/modern-india/' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },

      //     ],
      //   },

      // ],

      '/upsc-gs3/indian_economy': [
        {
          text: 'Indian Economy & Issues',
          items: [
            { text: 'Planning of Indian Economy', link: '/upsc-gs3/indian_economy/1.planning-india' },
            { text: 'Growth of Indian Economy ', link: '/upsc-gs3/indian_economy/3.Growth' },

            { text: 'Development', link: '/upsc-gs3/indian_economy/4.Development' },

            { text: 'Employment', link: '/upsc-gs3/indian_economy/5.Employment' },
            { text: 'Structure of Indian Economy', link: '/upsc-gs3/indian_economy/structure-indian-economy' },
            { text: 'National Income Accounting', link: '/upsc-gs3/indian_economy/national-income-accounting' },

            { text: 'External Sector', link: '/upsc-gs3/indian_economy/external-sector' },
            { text: 'International Economic Organisation', link: '/upsc-gs3/indian_economy/international-economic-organisation' },
          ],
        },

        {
          text: 'Inculsive Growth & Issues',
          collapsed: false,
          items: [
            { text: 'Inclusive Growth', link: '/upsc-gs3/indian_economy/inclusive-growth' },
            { text: 'Poverty', link: '/upsc-gs3/indian_economy/poverty' },

          ],
        },

        {
          text: 'Govt. Budgeting',
          collapsed: false,
          items: [
            { text: 'Government Budgeting', link: '/upsc-gs3/indian_economy/government-budgeting' },
            { text: 'Fiscal Policy', link: '/upsc-gs3/indian_economy/fiscal-policy' },
            { text: 'Monetary Management ', link: '/upsc-gs3/indian_economy/monetary-management' },
            { text: 'Inflation ', link: '/upsc-gs3/indian_economy/inflation' },
            { text: 'Taxation System ', link: '/upsc-gs3/indian_economy/taxation-system' },
            { text: 'Indian Financial System ', link: '/upsc-gs3/indian_economy/indian-financial-system' },
          ],
        },

      ],

      '/upsc-gs3/indian_economy/indian-currency-system': [
        {
          text: 'Indian Currency System',
          collapsed: false,
          items: [
            { text: 'Indian Currency System Today', link: '/upsc-gs3/indian_economy/indian-currency-system/indian-currency-system-today' },
            { text: 'Sources of Broad Money', link: '/upsc-gs3/indian_economy/indian-currency-system/sources-of-broad-money' },

            { text: 'New Monetary & Liquidity Aggregates', link: '/upsc-gs3/indian_economy/indian-currency-system/new-monetary-and-liquidity-aggregates' },

            { text: 'Reserve Money', link: '/upsc-gs3/indian_economy/indian-currency-system/reserve-money-and-money-multiplier' },
            { text: 'External Value of the Rupee', link: '/upsc-gs3/indian_economy/indian-currency-system/external-value-of-rupee' },
            { text: 'India Foreign Exchange Reserves', link: '/upsc-gs3/indian_economy/indian-currency-system/indian-foreign-exchange-reserves' },

            { text: 'Convertibility of the Rupee', link: '/upsc-gs3/indian_economy/indian-currency-system/convertibility-of-rupee' },
            { text: 'FEMA Act', link: '/upsc-gs3/indian_economy/indian-currency-system/foreign-exchange-management-act' },
          ],
        },

        {
          text: 'Inculsive Growth & Issues',
          collapsed: false,
          items: [
            { text: 'Inclusive Growth', link: '/upsc-gs3/indian_economy/inclusive-growth' },
            { text: 'Poverty', link: '/upsc-gs3/indian_economy/poverty' },

          ],
        },

        {
          text: 'Govt. Budgeting',
          collapsed: false,
          items: [
            { text: 'Government Budgeting', link: '/upsc-gs3/indian_economy/government-budgeting' },
            { text: 'Fiscal Policy', link: '/upsc-gs3/indian_economy/fiscal-policy' },
            { text: 'Monetary Management ', link: '/upsc-gs3/indian_economy/monetary-management' },
            { text: 'Inflation ', link: '/upsc-gs3/indian_economy/inflation' },
            { text: 'Taxation System ', link: '/upsc-gs3/indian_economy/taxation-system' },
            { text: 'Indian Financial System ', link: '/upsc-gs3/indian_economy/indian-financial-system' },
          ],
        },

      ],

      '/india-upsc-gs1/geography': [
        {
          text: 'Geo-Tectonics',
          collapsed: false,
          items: [

            { text: 'Past Questions', link: '/india-upsc-gs1/geography/geo-past-questions' },
            { text: 'Origin of Earth', link: '/india-upsc-gs1/geography/1.geo-tectonics/1.origin of earth' },
            { text: 'Earth - Living Planet', link: '/india-upsc-gs1/geography/1.geo-tectonics/2.earth a living planet' },
            { text: 'Interior of Earth', link: '/india-upsc-gs1/geography/1.geo-tectonics/3.interior of the earth' },
            { text: 'Isostasy', link: '/india-upsc-gs1/geography/1.geo-tectonics/4.isostasy' },
            // { text: '', link: '' },
          ],
        },

        {
          text: 'Lithosphere',
          collapsed: false,
          items: [

            { text: 'Earth Crust', link: '/india-upsc-gs1/geography/2.lithosphere/1.materials of the earth crust' },
            { text: 'Plate Tectonics', link: '/india-upsc-gs1/geography/2.lithosphere/2.continental drift & plate tectonics' },
            { text: 'Endognetic Forces', link: '/india-upsc-gs1/geography/2.lithosphere/3.endo gnetic forces' },
            { text: 'Exognetic Forces', link: '/india-upsc-gs1/geography/2.lithosphere/4.exo gnetic process' },
            // { text: '', link: '/india-upsc-gs1/geography/' },
          ],
        },

        {
          text: 'Atmosphere',
          collapsed: false,
          items: [

            { text: 'Structure of Atomsphere', link: '/india-upsc-gs1/geography/3.atmosphere/1.composition & structure of the atmosphere' },
            { text: 'Insolation', link: '/india-upsc-gs1/geography/3.atmosphere/2.insolation & atmospheric temperature' },
            { text: 'Global Distribution', link: '/india-upsc-gs1/geography/3.atmosphere/3.global distribution of surface pressure systems & winds' },
            { text: 'Humidity', link: '/india-upsc-gs1/geography/3.atmosphere/4.humidity & precipitation' },
            { text: 'Climatic Classification', link: '/india-upsc-gs1/geography/3.atmosphere/5.climatic classfication' },

          ],
        },

        {
          text: 'Hydrosphere',
          collapsed: false,
          items: [

            { text: 'Introduction', link: '/india-upsc-gs1/geography/4.hydrosphere/1.introduction to hydrosphere' },
            { text: 'Ocean Floor', link: '/india-upsc-gs1/geography/4.hydrosphere/2.ocean floor & relief feature' },
            { text: 'Distribution of Salinity', link: '/india-upsc-gs1/geography/4.hydrosphere/3.distribution of temperature & salinity in the oceans' },
            { text: 'Tides & Currents', link: '/india-upsc-gs1/geography/4.hydrosphere/4.tides & currents' },
            { text: 'Ocean Desposits', link: '/india-upsc-gs1/geography/4.hydrosphere/5.ocean deposits' },

          ],
        },

        {
          text: 'Indian Geography',
          collapsed: false,
          items: [

            { text: 'Rivers', link: '/india-upsc-gs1/geography/5.Indian Geography/1.rivers in india' },

            { text: 'Climate', link: '/india-upsc-gs1/geography/5.Indian Geography/2.climate in India' },
            { text: '', link: '/india-upsc-gs1/geography/' },
            { text: '', link: '/india-upsc-gs1/geography/' },
            { text: '', link: '/india-upsc-gs1/geography/' },

          ],
        },

        {
          text: '',
          collapsed: false,
          items: [

            { text: '', link: '/india-upsc-gs1/geography/' },
            { text: '', link: '/india-upsc-gs1/geography/' },
            { text: '', link: '/india-upsc-gs1/geography/' },
            { text: '', link: '/india-upsc-gs1/geography/' },
            { text: '', link: '/india-upsc-gs1/geography/' },

          ],
        },

      ],

    },
  },



}))
