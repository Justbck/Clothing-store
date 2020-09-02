const SHOP_DATA = [
  {
    id: 1,
    title: 'accessories',
    routeName: 'accessories',
    items: [
      {
        id: 1,
        name: 'CHARTERHOUSE LEATHER SHOULDER BAG',
        imageUrl: 'https://images.allsaints.com/products/600/WB156S/5/WB156S-5-1.jpg',
        price: 228
      },
      {
        id: 2,
        name: 'COSMIC GOLD-TONE STUD EARRING SET',
        imageUrl: 'https://images.allsaints.com/products/900/WJ073S/6399/WJ073S-6399-1.jpg',
        price: 38
      },
      {
        id: 3,
        name: 'SUBTITLED VI KHAKI STAINLESS STEEL WATCH',
        imageUrl: 'https://images.allsaints.com/products/600/MY013R/99/MY013R-99-1.jpg',
        price: 248
      },
      {
        id: 4,
        name: 'UNTITLED V STAINLESS STEEL WATCH',
        imageUrl: 'https://images.allsaints.com/products/600/MY005R/34/MY005R-34-1.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'PEARLDROP GOLD-TONE FRESH WATER PEARL NECKLACE',
        imageUrl: 'https://images.allsaints.com/products/900/WJ017S/6395/WJ017S-6395-2.jpg',
        price: 26
      },
      {
        id: 6,
        name: 'DUNSTON LEATHER BELT',
        imageUrl: 'https://images.allsaints.com/products/600/MN051R/6/MN051R-6-1.jpg',
        price: 38
      },
      {
        id: 7,
        name: 'BEDE LEATHER CARDHOLDER',
        imageUrl: 'https://images.allsaints.com/products/600/WR116S/4068/WR116S-4068-1.jpg',
        price: 78
      },
      {
        id: 8,
        name: 'COPA LEATHER BELT',
        imageUrl: 'https://images.allsaints.com/products/600/WZ058R/5/WZ058R-5-1.jpg',
        price: 50
      },
      {
        id: 9,
        name: 'ADELINA SMALL NORTH SOUTH LEATHER TOTE BAG',
        imageUrl: 'https://images.allsaints.com/products/600/WB162S/4134/WB162S-4134-1.jpg',
        price: 148
      }
    ]
  },
  {
    id: 2,
    title: 'shoes',
    routeName: 'shoes',
    items: [
      {
        id: 10,
        name: 'TRISH SUEDE TRAINERS',
        imageUrl: 'https://images.allsaints.com/products/600/WF031S/4068/WF031S-4068-1.jpg',
        price: 108
      },
      {
        id: 11,
        name: 'LIRA LEATHER BOOTS',
        imageUrl: 'https://images.allsaints.com/products/600/WF613Q/5/WF613Q-5-1.jpg',
        price: 248
      },
      {
        id: 12,
        name: 'ARIEL LEATHER BOOTS',
        imageUrl: 'https://images.allsaints.com/products/600/WF002S/5/WF002S-5-1.jpg',
        price: 228
      },
      {
        id: 13,
        name: 'DONITA LEATHER BOOTS',
        imageUrl: 'https://images.allsaints.com/products/600/WF802P/5/WF802P-5-1.jpg',
        price: 260
      },
      {
        id: 14,
        name: 'BRENDON LEATHER BOOTS',
        imageUrl: 'https://images.allsaints.com/products/600/MZ005S/5/MZ005S-5-1.jpg',
        price: 228
      },
      {
        id: 15,
        name: 'TOBIAS LEATHER BOOTS',
        imageUrl: 'https://images.allsaints.com/products/1600/MZ042S/5/MZ042S-5-3.jpg',
        price: 238
      },
      {
        id: 16,
        name: 'DUMONT HIGH TOP SUEDE TRAINERS',
        imageUrl: 'https://images.allsaints.com/products/600/MZ026Q/5/MZ026Q-5-1.jpg',
        price: 118
      },
      {
        id: 17,
        name: 'STOW LOW TOP LEATHER TRAINERS',
        imageUrl: 'https://images.allsaints.com/products/600/MZ017Q/3860/MZ017Q-3860-1.jpg',
        price: 108
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'LARK LEATHER JACKET',
        imageUrl: 'https://images.allsaints.com/products/600/ML141H/5/ML141H-5-1.jpg',
        price: 318
      },
      {
        id: 19,
        name: 'RIGG LEATHER BIKER JACKET',
        imageUrl: 'https://images.allsaints.com/products/600/ML011R/5/ML011R-5-2.jpg',
        price: 348
      },
      {
        id: 20,
        name: 'ESTE LEATHER BIKER JACKET',
        imageUrl: 'https://images.allsaints.com/products/900/WL115E/5/WL115E-5-3.jpg',
        price: 380
      },
      {
        id: 21,
        name: 'CARGO LEATHER BIKER JACKET',
        imageUrl: 'https://images.allsaints.com/products/600/WL047C/140/WL047C-140-1.jpg',
        price: 298
      },
      {
        id: 22,
        name: 'HALLEY LEATHER BIKER JACKET',
        imageUrl: 'https://images.allsaints.com/products/600/WL078P/5/WL078P-5-4.jpg',
        price: 228
      }
    ]
  },
  {
    id: 4,
      title: 'womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'FAY PARADEEP DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD386S/2/WD386S-2-3.jpg',
          price: 64
        },
        {
          id: 24,
          name: 'ASPYN 2-IN-1 DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD198S/6125/WD198S-6125-2.jpg',
          price: 120
        },
        {
          id: 25,
          name: 'TIERNEY SLIP DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD474S/5039/WD474S-5039-1.jpg',
          price: 49
        },
        {
          id: 26,
          name: 'AISLYN BROIDERIE DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD302S/4068/WD302S-4068-1.jpg',
          price: 94
        },
        {
          id: 27,
          name: 'KIMI SILK BLEND DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD038S/5/WD038S-5-4.jpg',
          price: 94
        },
        {
          id: 28,
          name: 'BENNO LIN STRIPE 2-IN-1 T-SHIRT DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD163S/4359/WD163S-4359-1.jpg',
          price: 64
        },
        {
          id: 29,
          name: 'TAGE SILK BLEND EVOLUTION DRESS',
          imageUrl: 'https://images.allsaints.com/products/900/WD239S/6155/WD239S-6155-1.jpg',
          price: 129
        }
      ]
  },
  {
    id: 5,
    title: 'mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'REDONDO LONG SLEEVE SHIRT',
        imageUrl: 'https://images.allsaints.com/products/900/MS120F/4379/MS120F-4379-1.jpg',
        price: 75
      },
      {
        id: 31,
        name: 'VISTA SHIRT',
        imageUrl: 'https://images.allsaints.com/products/900/MS133S/35/MS133S-35-1.jpg',
        price: 85
      },
      {
        id: 32,
        name: 'EASTON SHIRT',
        imageUrl: 'https://images.allsaints.com/products/900/MS099S/138/MS099S-138-1.jpg',
        price: 98
      },
      {
        id: 33,
        name: 'MEDAN SHIRT',
        imageUrl: 'https://images.allsaints.com/products/900/MS070S/451/MS070S-451-1.jpg',
        price: 42
      },
      {
        id: 34,
        name: 'CHERITO LONG SLEEVE SHIRT',
        imageUrl: 'https://images.allsaints.com/products/900/MS067S/451/MS067S-451-1.jpg',
        price: 47
      },
      {
        id: 35,
        name: 'BERTHOLD SHIRT',
        imageUrl: 'https://images.allsaints.com/products/1600/MS082R/5/MS082R-5-4.jpg',
        price: 48
      }
    ]
  }
];

export default SHOP_DATA;
