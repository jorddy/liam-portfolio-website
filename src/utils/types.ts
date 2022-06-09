export interface Markdown {
  slug: string;
  content: string;
}

export interface Site extends Markdown {
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
    aboutBio: string;
    aboutImage: string;
    footerHeading: string;
    footerEmail: string;
    footerCopyright: string;
    footerLocation: string;
    footerSubHeading: string;
    footerDescription: string;
  };
}

export interface Project extends Markdown {
  data: {
    title: string;
    brand: string;
    summary: string;
    featured: boolean;
    image: string;
    type: string;
    aim: string;
    date: string;
    roles: string[];
  };
}
