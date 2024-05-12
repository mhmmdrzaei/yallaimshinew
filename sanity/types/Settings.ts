import { PortableTextBlock } from "sanity";

export type HeroImage = {
  _key: string;
  _type: 'hero_image';
  heroImgUrl: string;
};

export type Settings = {
  heroImgUrl: string ;
  length: number;
  _id: string;
  title: string;
  logo: string;
  herovisual: HeroImage[];
  herovisualMobile:HeroImage[];
  seoDescription: string;
  seoImageUrl: string;
  socialName: string,
   socialURL: string,
   urlLabel: string,
   urlurl: string,
   location: string,
 
};
