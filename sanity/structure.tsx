import { CogIcon, IceCreamIcon, LemonIcon, HomeIcon,CaseIcon,TagIcon } from '@sanity/icons';

import {ListBuilder} from 'sanity/structure';

// Define broad types (these are approximations and might need adjustments)
interface ListItem {
  title(title: string): ListItem;
  icon(icon: any): ListItem;
  child(child: any): ListItem;
}

interface List {
  title(title: string): List;
  items(items: any[]): List;
}

interface Document {
  schemaType(type: string): Document;
  documentId(id: string): Document;
}

interface Structure {
  [x: string]: any;
  list(): List;
  listItem(): ListItem;
  document(): Document;
  documentTypeListItems(): { getId(): string }[];
}

export const myStructure: (S: any) => ListBuilder = (S) => {
  return S.list()
    .title('Yalla Imshi')
    .items([
      ...S.documentTypeListItems().reverse().filter((listItem: { getId: () => any; }) => {
        const id = listItem.getId();
        if (!id) return true; // Keep the listItem if ID is undefined
        return !['siteSettings'].includes(id);
    }),
  
  
      // settings
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
     
    
    ]);

};