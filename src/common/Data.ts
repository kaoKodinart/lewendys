import { MenuModel } from "../models/MenuModel";

export const homeAboutDetails = [
    {
        image:"/src/assets/images/home_about_img1.jpg",
        title:"Notre Concept",
        text:"Lorem ipsum dolor sit amet consectetur. Integer risus tristique laoreet penatibus sit quis urna mi morbi. Nec cursus at non nullam sit purus. Urna feugiat amet ut faucibus ut blandit nunc sed. Non scelerisque aliquam aliquam diam nibh. Proin tempus elit urna condimentum.",
        buttonText:"Lire Plus"
    },
    {
        image:"/src/assets/images/home_about_img2.jpg",
        title:"Notre Ambiance",
        text:"Lorem ipsum dolor sit amet consectetur. Integer risus tristique laoreet penatibus sit quis urna mi morbi. Nec cursus at non nullam sit purus. Urna feugiat amet ut faucibus ut blandit nunc sed. Non scelerisque aliquam aliquam diam nibh. Proin tempus elit urna condimentum.",
        buttonText:"Reservation"
    }
];

export const menus: MenuModel[] = [

    {
      id: 2,
      categorie: 'Breakfast',
      nomMenu: 'TACOS',
      prix: 10,
      image: '/src/assets/images/tacos.jpg',
      description: "Lorem ipsum dolor sit amet consectetur.",
      variations: [
        {
          nomVariation: "Piment",
          options: [
            {
              parent: "Piment",
              nomOption: "Moyen",
              prix: 2,
            },
            {
              parent: "Piment",
              nomOption: "Elevé",
              prix: 5,
            },
            {
              parent: "Piment",
              nomOption: "Bas",
              prix: 1,
            }
          ]
        },
        {
          nomVariation: "Size",
          options: [
            {
              parent: "Size",
              nomOption: "Gros",
              prix: 5,
            },
            {
              parent: "Size",
              nomOption: "Moins gros",
              prix: 3,
            },
            {
              parent: "Size",
              nomOption: "Petit",
              prix: 2,
            }
          ]
        }
      ],
  
    },
    {
      id: 3,
      categorie: 'Tasty Donuts',
      nomMenu: 'BURGUER',
      prix: 16,
      image: '/src/assets/images/burger.jpg',
      description: "Lorem ipsum dolor sit amet consectetur.",
      variations: [
        {
          nomVariation: "Mayonnaise",
          options: [
            {
              parent: "Mayonnaise",
              nomOption: "Peu",
              prix: 5,
            },
            {
              parent: "Mayonnaise",
              nomOption: "Beaucoup",
              prix: 8,
            },
            {
              parent: "Mayonnaise",
              nomOption: "Moyen",
              prix: 2,
            }
          ]
        },
        {
          nomVariation: "Moutarde",
          options: [
            {
              parent: "Moutarde",
              nomOption: "Peu",
              prix: 5,
            },
            {
              parent: "Moutarde",
              nomOption: "Beaucoup",
              prix: 8,
            },
            {
              parent: "Mayonnaise",
              nomOption: "Moyen",
              prix: 2,
            }
          ]
        },
      ],
  
    },
    {
      id: 4,
      categorie: 'Chocolat Cake',
      nomMenu: 'SALADE',
      prix: 12,
      image: '/src/assets/images/salade.jpg',
      description: "Lorem ipsum dolor sit amet consectetur.",
      variations: [],
    },
    {
      id: 5,
      categorie: 'Chocolat Cake',
      nomMenu: 'SALADE',
      prix: 12,
      image: '/src/assets/images/tacos.jpg',
      description: "Lorem ipsum dolor sit amet consectetur.",
      variations: [],
    },
    // {
    //   uid: 6,
    //   categorie: 'Chocolat Cake',
    //   nomMenu: 'SALADE',
    //   prix: "12 €",
    //   image: '/src/assets/images/salade.jpg',
    //   description: "Lorem ipsum dolor sit amet consectetur."
    // },
    // {
    //   uid: 7,
    //   categorie: 'Chocolat Cake',
    //   nomMenu: 'SALADE',
    //   prix: "12 €",
    //   image: '/src/assets/images/salade.jpg',
    //   description: "Lorem ipsum dolor sit amet consectetur."
    // },
//     {
//       id: 4,
//       category: 'Breakfast',
//       name: 'TACOS',
//       price: "10 €",
//       image: 'assets/images/tacos.jpg',
//       desc: "Lorem ipsum dolor sit amet consectetur."
  
//     },
//     {
//       id: 5,
//       category: 'Chocolat Cake',
//       name: 'SALADE',
//       price: "12 €",
//       image: 'assets/images/salade.jpg',
//       desc: "Lorem ipsum dolor sit amet consectetur."
//     },
//     {
//       id: 6,
//       category: 'Chocolat Cake',
//       name: 'BURGUER',
//       price: "16 €",
//       image: 'assets/images/burger.jpg',
//       desc: "Lorem ipsum dolor sit amet consectetur."
  
//     },
//     {
//     id: 7,
//     category: 'Breakfast',
//     name: 'TACOS',
//     price: "10 €",
//     image: 'assets/images/tacos.jpg',
//     desc: "Lorem ipsum dolor sit amet consectetur."
//   },
//   {
//     id: 8,
//     category: 'Tasty Donuts',
//     name: 'SALADE',
//     price: "12 €",
//     image: 'assets/images/salade.jpg',
//     desc: "Lorem ipsum dolor sit amet consectetur."
//   },
//   {
//     id: 9,
//     category: 'Chocolat Cake',
//     name: 'BURGUER',
//     price: "12 €",
//     image: 'assets/images/salade.jpg',
//     desc: "Lorem ipsum dolor sit amet consectetur."
  
//   },
  ];