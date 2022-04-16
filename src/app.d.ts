/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

interface Markdown {
  slug: string;
  content: string;
}

interface Site extends Markdown {
  data: {
    logo: string;
    cv: string;
    navigation: string[];
    instagram: string;
    linkedin: string;
    heroHeading: string;
    heroDescription: string;
    heroButton: string;
    aboutHeading: string;
    aboutSubHeading: string;
    aboutDescription: string;
    footerHeading: string;
    footerEmail: string;
    footerCopyright: string;
    footerLocation: string;
    footerSubHeading: string;
    footerDescription: string;
  };
}

interface Project extends Markdown {
  data: {
    title: string;
    brand: string;
    summary: string;
    image: string;
    type: string;
    aim: string;
    date: string;
    roles: string[];
  };
}
