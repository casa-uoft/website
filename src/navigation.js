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
      text: 'Constitution',
      href: getPermalink('/constitution'),
    },
    {
      text: 'Office Hours',
      href: getPermalink('/office-hours'),
    },
    {
      text: 'Articles',
      href: getBlogPermalink(),
    }
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
        { text: 'Dr. John Vervaeke YouTube', href: 'https://www.youtube.com/@johnvervaeke' },
        { text: 'UC Academic Calendar', href: 'https://artsci.calendar.utoronto.ca/section/University-College' },
        { text: 'UC Cognitive Science', href: 'https://www.uc.utoronto.ca/cognitive-science' },
        { text: 'United Cognitive Science Association', href: 'https://wicsc.ca/cognitive-science-associations/' },
      ],
    },
    {
      title: 'CASA',
      links: [
        { text: '15 King\'s College Circle\nUniversity College F301\nToronto, ON M5S 3H7', href: 'https://maps.app.goo.gl/9QRABTiaiBR5kdcg6' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/uoftcasa/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/casa.uoft/' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://tinyurl.com/casa-discord' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    © 2024 Cognitive Science and Artificial Intelligence Students' Association · All rights reserved.
  `,
};
