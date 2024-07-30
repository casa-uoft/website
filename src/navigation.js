import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'About',
      href: getHomePermalink() + '#about',
    },
    {
      text: 'Articles',
      href: getBlogPermalink(),
    },
    {
      text: 'Constitution',
      href: getPermalink('/constitution'),
    },
    // {
    //   text: 'Office Hours',
    //   href: getPermalink('/office-hours'),
    // },
  ],
  actions: [{ text: 'Join Discord', href: 'https://tinyurl.com/casa-discord', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: getHomePermalink() },
        { text: 'Articles', href: getBlogPermalink() },
        { text: 'Constitution', href: getPermalink('/constitution') },
        { text: 'Office Hours', href: getPermalink('/office-hours') },
      ],
    },
    {
      title: 'Articles',
      links: [
        { text: 'Announcements', href: getPermalink('announcements', 'category') },
      ],
    },
    {
      title: 'External Resources',
      links: [
        { text: 'Dr. John Vervaeke YouTube', href: 'https://www.youtube.com/@johnvervaeke', target: '_blank' },
        { text: 'UC Academic Calendar', href: 'https://artsci.calendar.utoronto.ca/section/University-College', target: '_blank' },
        { text: 'UC Cognitive Science', href: 'https://www.uc.utoronto.ca/cognitive-science', target: '_blank' },
        { text: 'United Cognitive Science Association', href: 'https://wicsc.ca/cognitive-science-associations/', target: '_blank' },
      ],
    },
    {
      title: 'CASA',
      links: [
        { text: '15 King\'s College Circle\nUniversity College F301\nToronto, ON M5S 3H7', href: 'https://maps.app.goo.gl/9QRABTiaiBR5kdcg6', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/uoftcasa/', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/casa.uoft/', target: '_blank' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://tinyurl.com/casa-discord', target: '_blank' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml'), target: '_blank' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    © 2024 Cognitive Science and Artificial Intelligence Students' Association · All rights reserved.
  `,
};
