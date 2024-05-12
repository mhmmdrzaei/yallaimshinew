// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Settings } from "./types/Settings";



export async function getsettings(): Promise<Settings[]> {
    return createClient(clientConfig).fetch(
      `*[_type == "siteSettings"]{
        _id,
       title,
       "herovisual": herovisual[]{
          _key,
          _type,
          "heroImgUrl": asset->url,
          
       },
       "herovisualMobile": herovisualMobile[]{
        _key,
        _type,
        "heroImgUrl": asset->url,
       },
      "logo": site_log.asset->url,
      "seoDescription": seo.description,
      "seoImageUrl": seo.seo_image.asset->url,
      "socialName": socialInfo.socialName,
      "socialURL": socialInfo.socialURL,
      "urlLabel": contactInfo.urlLabel,
      "urlurl": contactInfo.urlurl,
      location,
       
       
 }`
    )
  }


