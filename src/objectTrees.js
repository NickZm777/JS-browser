    /* eslint-disable no-restricted-syntax */
    /* eslint-disable import/prefer-default-export */
    /* eslint-disable no-console */
    /* eslint-disable no-restricted-syntax */


    export const windowTree = {
      label: "Window",
      children: [
        {
          label: "DOM - Document Object Model; DOM Tree",
          children: [
            {
              label: "document",
              children: [],
            },
            {
              label: "CSSOM - CSS Object Model",
              children: [],
            },
          ],
        },
        {
          label: "BOM - Browser Object Model",
          children: [
            {
              label: "navigator",
              children: [],
            },
            {
              label: "screen",
              children: [],
            },
            {
              label: "location",
              children: [],
            },
            {
              label: "frames",
              children: [],
            },
            {
              label: "history",
              children: [],
            },
            {
              label: "XMLHttpReques",
              children: [],
            },
          ],
        },
        {
          label: "JavaScript",
          children: [
            {
              label: "Object",
              children: [],
            },
            {
              label: "Array",
              children: [],
            },
            {
              label: "Function",
              children: [],
            },
            {
              label: "...",
              children: [],
            },
          ],
        },
      ],
    };
  
    
        
    export const eventTarget = {
    
            label: "EventTarget",
            children: [ 
            {
            label: 'node',
            children: [
              {
                label: "text",
                children: []
              },
              {
                label: "comment",
                children: []
              },
              {
                label: "element",
                children: [
                  {
                    label: "SVGelement",
                    children: []
                  },
                  {
                    label: "HTMLElement",
                    children: [
                      {
                        label: "HTMLINputElement",
                        children: []
                      },
                      {
                        label: "HTMLBodyElement",
                        children: []
                      },
                      {
                        label: "HTMLAnchorElement",
                        children: []
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
        }