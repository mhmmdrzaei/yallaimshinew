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
  const currentYear = new Date().getFullYear();
  return (
   
    <main>
      <section className="main">
      <ImageSlider desktopImages={herovisual} mobileImages={herovisualMobile} />
      <h1>yalla <span>imshi</span></h1>

      </section>
        {settings.map((setting) => ( 
          
          <section className='info' key={setting._id}>
               
                <a href={`mailto:${setting.urlurl}`} target="_blank" > {setting.urlLabel}</a>
                <a href={`${setting.socialURL}`} target="_blank" >{setting.socialName}</a>
                <p>{setting.location} {currentYear}</p>

          </section>

      ))}
            

                    



    </main>
  )
}
