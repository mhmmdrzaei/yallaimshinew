import { getsettings } from '@/sanity/sanity.utils'

import type { Metadata } from 'next'
import ImageSlider from './components/imageSlider/imageSlider.component'
export async function generateMetadata(
): Promise<Metadata> {
  const settings = await getsettings()
  return {
    title: `${settings[0].title}` ,
    description: settings[0].seoDescription,

    openGraph: {
      title: `${settings[0].title}` ,
      description: settings[0].seoDescription,
      url: 'https://yallaimshi.com',
      siteName: `${settings[0].title}`,

      images: [
        {
          url: `${settings[0].seoImageUrl}` ,
          width: 1200,
          height: 628,
        },
        
        
      ],
      locale: 'en_US',
    type: 'website',
    },
  }
}

export default async function Home() {
  
  const settings = await getsettings()
  const { herovisual, herovisualMobile } = settings[0];
  return (
   
    <main>
        {settings.map((setting) => ( 
          
          <>
                <a href={`${setting.socialURL}`} target="_blank" >{setting.socialName}</a>
                <a href={`mailto:${setting.urlurl}`} target="_blank" > {setting.urlLabel}</a>
          </>

      ))}
            <ImageSlider desktopImages={herovisual} mobileImages={herovisualMobile} />

                    



    </main>
  )
}
