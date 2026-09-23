import { Product, Review, InstagramPost } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'aurelia-slingback',
    name: 'The Aurelia Slingback',
    subName: '85mm Sculptural Stiletto',
    tagline: 'An architectural silhouette defined by pure lines and bespoke gold hardware.',
    category: 'heels',
    categoryLabel: 'Sculptural Heels',
    price: 495,
    originalPrice: 550,
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '85mm / 3.3 inches',
    materials: ['Supple Tuscan Calfskin', 'Hand-Polished Brass Buckle', 'Full Grain Leather Outsole', 'Anatomical Memory Foam Cushioning'],
    description: 'The Aurelia Slingback encapsulates the modern spirit of Lamine. Hand-lasted in Tuscany by generational shoemakers, its 85mm stiletto is calibrated with dual-density arch memory foam, allowing hours of effortless poised movement from sunrise boardrooms to midnight soirees.',
    details: [
      'Pointed toe with elongated architectural vamp',
      'Adjustable elasticized slingback strap with gilded buckle',
      'Breathable vegetable-tanned lining for barefoot comfort',
      'Blake-stitched natural leather sole with non-slip injected rubber pod',
      'Handcrafted over 42 meticulous stages in Florence, Italy'
    ],
    fitAdvice: 'Fits true to European size. For half sizes or wider feet, we advise selecting one half size up.',
    craftsmanshipNotes: 'Lasted on seasoned beechwood moulds for 48 hours to preserve shape memory indefinitely.',
    colors: [
      {
        name: 'Crème Ivoire',
        hex: '#EFE7DA',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Obsidienne',
        hex: '#181716',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Caramel Doré',
        hex: '#B88B57',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 'vittorio-penny-loafer',
    name: 'The Vittorio Loafer',
    subName: 'Hand-Burnished Penny Loafer',
    tagline: 'Quiet masculine tailoring reimagined with fluid feminine proportions.',
    category: 'loafers',
    categoryLabel: 'Artisanal Loafers',
    price: 440,
    rating: 4.8,
    reviewsCount: 52,
    isBestseller: true,
    isNew: false,
    heelHeight: '22mm / 0.85 inches',
    materials: ['Full-Grain French Boxcalf', 'Natural Calfskin Lining', 'Channel-Stitched Leather Sole'],
    description: 'A study in quiet authority. The Vittorio Loafer balances traditional equestrian saddle stitching with an ultra-lightweight bevelled sole. Each pair undergoes individual hand-burnishing using natural beeswax creams for an unmatched, glowing patina.',
    details: [
      'Sculpted almond toe silhouette',
      'Traditional hand-stitched apron saddle detail',
      'Reinforced heel counter prevents slipping and blister friction',
      'Natural stacked leather heel with brass-pinned rubber top piece',
      'Includes custom cedar-scented travel dust bags'
    ],
    fitAdvice: 'True to size. The boxcalf leather will gently adapt to the foot contour after 2-3 wears.',
    craftsmanshipNotes: 'Goodyear-welted construction engineered to be completely re-soled for a lifetime of service.',
    colors: [
      {
        name: 'Espresso Brun',
        hex: '#3B2F2F',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Céleste',
        hex: '#1A1A1A',
        image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Sable Chaud',
        hex: '#D1C2A5',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 'selene-chelsea-boot',
    name: 'The Séléné Chelsea Boot',
    subName: '60mm Sculpted Block Boot',
    tagline: 'Streamlined modernity cut from seamless whole-cut Tuscan calfskin.',
    category: 'boots',
    categoryLabel: 'Minimalist Boots',
    price: 580,
    originalPrice: 620,
    rating: 5.0,
    reviewsCount: 29,
    isBestseller: false,
    isNew: true,
    isLimited: true,
    heelHeight: '60mm / 2.4 inches',
    materials: ['Water-Resistant Smooth Tuscan Calfskin', 'Tonal Elasticized Gusset', 'Vibram Commando Thin Sole'],
    description: 'Sculpted for city navigation regardless of season. The Séléné Chelsea Boot achieves a seamless, unbroken ankle profile by minimizing perimeter seams. Finished with an architectural bevelled block heel and an ultra-thin weather-protective rubber tread.',
    details: [
      'Seamless whole-cut front shaft construction',
      '60mm geometric Cuban block heel providing stable stride balance',
      'Dual pull tabs crafted from embossed calf leather',
      'Thermal insulating leather insole with arch-cradle bridge',
      'Weather-sealed welt edge to repel urban moisture'
    ],
    fitAdvice: 'Generous fit. If you are between sizes, we recommend sizing down.',
    craftsmanshipNotes: 'Cut from certified Gold-Rated Italian tanneries utilizing closed-loop water purification.',
    colors: [
      {
        name: 'Noir Mat',
        hex: '#151413',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Moka Chocolat',
        hex: '#4A3728',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41]
  },
  {
    id: 'cyra-sculpted-mule',
    name: 'The Cyra Sculpted Mule',
    subName: '55mm Ergonomic Curve',
    tagline: 'Sensual minimalism with an organic curved heel designed for all-day grace.',
    category: 'mules',
    categoryLabel: 'Velvet & Satin Mules',
    price: 420,
    rating: 4.9,
    reviewsCount: 44,
    isBestseller: true,
    isNew: false,
    heelHeight: '55mm / 2.1 inches',
    materials: ['Glove-Soft Buttercream Nappa', 'Curved Solid Beechwood Core', 'Cushioned Footbed'],
    description: 'Designed around the natural posture of the female foot, The Cyra Mule features a contoured strap that gently embraces the instep without tension. The custom curved wooden heel is lacquered by hand for a subtle satin sheen.',
    details: [
      'Square-softened open toe modern silhouette',
      'Wide supportive vamp strap lined in frictionless glove leather',
      'Ergonomic hollowed heel reduces shoe weight by 35%',
      'Anti-microbial vegetable-tanned sockliner',
      'Signature Lamine golden serial plaque embedded in sole'
    ],
    fitAdvice: 'True to size. Ideal for both narrow and standard width feet.',
    craftsmanshipNotes: 'Heel geometry distributes 60% of weight to the calcaneus, preventing ball-of-foot fatigue.',
    colors: [
      {
        name: 'Beige Crème',
        hex: '#E8DEC8',
        image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Velvet',
        hex: '#1D1C1A',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41]
  },
  {
    id: 'palais-satin-pump',
    name: 'The Palais Evening Pump',
    subName: '95mm Crystal Arch Silhouette',
    tagline: 'High-wattage drama crafted from Lyon woven silk and hand-set crystals.',
    category: 'heels',
    categoryLabel: 'Sculptural Heels',
    price: 640,
    rating: 5.0,
    reviewsCount: 19,
    isBestseller: false,
    isNew: true,
    isLimited: true,
    heelHeight: '95mm / 3.75 inches',
    materials: ['Pure Silk Duchesse Satin', 'Swarovski Crystal Pavé Clasp', 'Metallic Gold Leather Lining'],
    description: 'The crowning jewel of the Lamine evening salon. The Palais Pump captures candlelight with French duchesse silk satin and a bespoke faceted crystal buckle inspired by antique Parisian door knockers.',
    details: [
      'Dramatic sculpted stiletto with reinforced titanium core rod',
      'Hand-pleated silk satin toe crown',
      'Metallic gold kidskin lining with quilted heel cushion',
      'Gloss lacquered leather sole with signature gilded stamp',
      'Includes protective satin travel pouch and replacement heel taps'
    ],
    fitAdvice: 'For narrow feet, order standard size. For standard to wide feet, consider taking one half size larger.',
    craftsmanshipNotes: 'Limited artisanal release of only 120 individually numbered pairs worldwide.',
    colors: [
      {
        name: 'Champagne Or',
        hex: '#E5D6BD',
        image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Nuit',
        hex: '#141414',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40]
  },
  {
    id: 'monaco-minimalist-trainer',
    name: 'The Monaco Studio Trainer',
    subName: 'Calfskin Low-Top Luxury Sneaker',
    tagline: 'Deconstructed luxury sneaker engineered for understated metropolitan ease.',
    category: 'sneakers',
    categoryLabel: 'Contemporary Runners',
    price: 385,
    rating: 4.9,
    reviewsCount: 67,
    isBestseller: true,
    isNew: false,
    heelHeight: '30mm / 1.2 inches',
    materials: ['Full-Grain Italian Calf Nappa', 'Soft Italian Suede Accents', 'Natural Rubber Margom Sole'],
    description: 'The intersection of athletic functionality and haute horlogerie finishing. The Monaco Trainer strips away all unnecessary branding to focus on pristine geometry, hand-buffed leather edges, and an ultra-cushioned orthopedic footbed.',
    details: [
      'Subtle monochrome paneling in contrasting nappa and suede',
      'Removable contoured dual-density insole wrapped in calf leather',
      'Hand-stitched side wall anchoring upper to Margom rubber cupsole',
      'Waxed organic cotton laces with engraved gold aglets',
      'Subtle embossed Lamine coordinates at tongue'
    ],
    fitAdvice: 'Standard sneaker fit. If you wear half sizes, we suggest taking the nearest full size down.',
    craftsmanshipNotes: 'Stitched with abrasion-proof German thread for decade-long durability.',
    colors: [
      {
        name: 'Alabaster Blanc',
        hex: '#F4EFE6',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Terre & Noir',
        hex: '#2B2725',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43]
  },
  {
    id: 'the-camille-sandal',
    name: 'The Camille Ankle-Wrap Sandal',
    subName: '75mm Flared Fluted Stiletto',
    tagline: 'Graceful winding tubular nappa laces crowned with hand-cast gilded hardware.',
    category: 'sandals',
    categoryLabel: 'Strappy Sandals & Slides',
    price: 460,
    rating: 4.9,
    reviewsCount: 31,
    isBestseller: true,
    isNew: true,
    isLimited: false,
    heelHeight: '75mm / 2.95 inches',
    materials: ['Butter-Soft Italian Lambskin Nappa', 'Cast 24k Gold-Dipped Aglets', 'Metatarsal Poron Cushioning'],
    description: 'Conceived for sun-drenched European terraces and balmy gala evenings. The Camille Sandal features hand-rolled tubular nappa straps that wrap gently around the ankle with zero pressure points. Grounded on an architectural flared stiletto that provides balanced poise.',
    details: [
      'Slender hand-rolled tubular nappa laces with 24k gold-dipped aglets',
      'Square open toe with reinforced leather-bound sole rim',
      'Flared fluted 75mm heel engineered for dynamic stability',
      'Hidden memory foam metatarsal pod for walking ease',
      'Hand-buffed natural leather sole with golden maison emblem'
    ],
    fitAdvice: 'True to size. The supple lambskin straps can be tied low or mid-calf depending on preference.',
    craftsmanshipNotes: 'Each tubular lace is individually hand-turned and lined with silk micro-cord to resist stretching.',
    colors: [
      {
        name: 'Crème Nacre',
        hex: '#F5EDE1',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Doré',
        hex: '#1A1918',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Bronze Ambré',
        hex: '#A37C4B',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41]
  },
  {
    id: 'verona-riding-boot',
    name: 'The Verona Knee-High Boot',
    subName: '35mm Architectural Low Block',
    tagline: 'Single-hide Tuscan saddle calfskin sculpted into an unbroken equestrian silhouette.',
    category: 'boots',
    categoryLabel: 'Minimalist Boots',
    price: 790,
    originalPrice: 850,
    rating: 5.0,
    reviewsCount: 46,
    isBestseller: true,
    isNew: false,
    isLimited: true,
    heelHeight: '35mm / 1.4 inches',
    materials: ['Full-Grain Vegetable-Tanned Saddle Leather', 'Concealed Inner Elastic Shaft Gusset', 'Full Natural Calfskin Lining'],
    description: 'An enduring monument to classical Italian saddlery. Cut from a continuous panel of vegetable-tanned Tuscan calfskin, The Verona Boot boasts an asymmetrical Spanish curved topline that elongates the leg. Built on a low stacked leather heel with hidden comfort bridge.',
    details: [
      'Seamless whole-shaft construction cut from first-selection saddle leather',
      'Curved Spanish topline with concealed inner stretch gusset for adaptable calf fit',
      'Full-length interior side zipper with leather protective guard',
      'Goodyear-welted stacked leather heel with anti-slip rubber pod',
      'Ages with a luminous, rich caramel patina over years of wear'
    ],
    fitAdvice: 'Standard European fit. Calf circumference is 37.5cm (size 38) with a 1.5cm expansion flex gusset.',
    craftsmanshipNotes: 'Slowly tanned in Santa Croce sull’Arno using chestnut and mimosa barks over 60 days.',
    colors: [
      {
        name: 'Cognac Ambré',
        hex: '#7E3C1B',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Profond',
        hex: '#171615',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 'genevieve-ballerina',
    name: 'The Geneviève Pointed Flat',
    subName: '15mm Glove Sacchetto Ballerina',
    tagline: 'Sacchetto glove-leather flexibility paired with a sharp architectural pointed toe.',
    category: 'flats',
    categoryLabel: 'Refined Flats',
    price: 395,
    rating: 4.8,
    reviewsCount: 57,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '15mm / 0.6 inches',
    materials: ['Ultra-Supple French Plissé Nappa', 'Concealed 6mm Wedge Lift', 'Turned Natural Suede Outsole'],
    description: 'Redefining the Parisian ballerina for the modern commuter. Crafted using the revered Bologna "sacchetto" technique, the lining and insole are hand-stitched into a flexible cocoon that envelopes the foot like a bespoke glove, preventing sole stiffness.',
    details: [
      'Sculpted almond-pointed toe with clean throat line',
      'Sacchetto construction offers 180-degree natural foot articulation',
      'Concealed 6mm internal heel-wedge prevents Achilles tendon fatigue',
      'Elasticized topline collar ensures a snug, gap-free fit',
      'Foldable and travel-ready with protective linen slipper pouches'
    ],
    fitAdvice: 'Fits true to size. Supple glove leather molds to the foot after a single afternoon of wear.',
    craftsmanshipNotes: 'Stitched with zero internal stiffeners at the vamp for supreme barefoot comfort.',
    colors: [
      {
        name: 'Crème Fouettée',
        hex: '#F2ECE1',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Bordeaux Impérial',
        hex: '#4A1C24',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Lustre',
        hex: '#1B1A19',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 'madeleine-mary-jane',
    name: 'The Madeleine Mary Jane',
    subName: '50mm Flared Column Pump',
    tagline: 'Twin gilded strap arches on an architectural flared column heel.',
    category: 'heels',
    categoryLabel: 'Sculptural Heels',
    price: 485,
    rating: 4.9,
    reviewsCount: 24,
    isBestseller: false,
    isNew: true,
    isLimited: false,
    heelHeight: '50mm / 2.0 inches',
    materials: ['High-Gloss Spazzolato Boxcalf', 'Solid Brass Micro Pin Buckles', 'Cushioned Memory Sockliner'],
    description: 'A contemporary Parisian silhouette inspired by 1960s Left Bank intellectuals. The Madeleine Mary Jane features twin ultra-slender straps secured by jewelry-grade mini gold buckles and sits upon a flared 50mm trapezoidal column heel.',
    details: [
      'Almond-softened toe with deep scooped vamp',
      'Dual adjustable instep straps with polished 24k gold-plated micro buckles',
      'Flared column heel engineered for maximum floor contact stability',
      'Padded arch contour supports high insteps comfortably',
      'Hand-lacquered edge stain applied in 4 distinct coats'
    ],
    fitAdvice: 'True to European sizing. The dual straps allow fine custom instep calibration.',
    craftsmanshipNotes: 'Spazzolato calfskin is hand-polished on horsehair rotary brushes for liquid gloss.',
    colors: [
      {
        name: 'Cerise Noire',
        hex: '#3D1520',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Verni',
        hex: '#141312',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Ivoire Porcelaine',
        hex: '#F5EFE6',
        image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41]
  },
  {
    id: 'astrid-flatform-slide',
    name: 'The Astrid Flatform Slide',
    subName: '40mm Contoured Leather Flatform',
    tagline: 'Ultra-plush cross-band silhouette on an ergonomic contoured leather flatform.',
    category: 'sandals',
    categoryLabel: 'Strappy Sandals & Slides',
    price: 410,
    rating: 4.9,
    reviewsCount: 39,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '40mm / 1.6 inches',
    materials: ['Plump Nappa Calfskin', 'Natural Molded Cork & Latex Core', 'Full Leather Wrapped Platform'],
    description: 'The height of relaxed summer refinement. The Astrid Slide features pillowy padded cross-straps crafted from glove-grade Italian nappa, perched atop an ergonomically contoured platform that cushions every step with natural cork elasticity.',
    details: [
      'Wide overlapping diagonal straps padded with high-rebound foam',
      'Anatomically shaped footbed cups the heel and supports the metatarsal arch',
      'Bevelled leather-wrapped platform edge with tonal saddle stitch',
      'Ultra-lightweight micro-cellular rubber outsole for silent cushioned walking',
      'Breathable unfinished calfskin insole absorbs natural foot moisture'
    ],
    fitAdvice: 'True to size. If you possess a wider instep, this slide accommodates naturally.',
    craftsmanshipNotes: 'The core is sculpted from sustainable Sardinian cork blended with natural Hevea tree latex.',
    colors: [
      {
        name: 'Sable Chaud',
        hex: '#D6C7B2',
        image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Café Espresso',
        hex: '#382A24',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Minimal',
        hex: '#191817',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 'vivienne-kitten-slingback',
    name: 'The Vivienne Kitten Slingback',
    subName: '45mm Asymmetric Comma Heel',
    tagline: 'Asymmetric sweetheart pointed vamp on a whisper-light 45mm comma kitten heel.',
    category: 'heels',
    categoryLabel: 'Sculptural Heels',
    price: 465,
    rating: 5.0,
    reviewsCount: 35,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '45mm / 1.75 inches',
    materials: ['Silky Florentine Box Nappa', 'Gold-Coated Brass Elastic Buckle', 'Double Metatarsal Cushion'],
    description: 'Designed for women who command presence without requiring sky-high elevation. The Vivienne features an asymmetric cut across the instep that flatters the ankle line, anchored by a micro comma heel hand-turned from solid beechwood.',
    details: [
      'Sculptural curved sweetheart pointed vamp',
      'Architectural 45mm comma heel sculpted from solid seasoned wood',
      'Comfort-flex slingback strap with concealed self-adjusting elastic insert',
      'Full natural glove-leather lining provides friction-free all-day wear',
      'Finished with hand-burnished sole edges and gilded maison hallmark'
    ],
    fitAdvice: 'True to European size. Excellent for medium to slender foot silhouettes.',
    craftsmanshipNotes: 'Balanced so that heel weight lands directly on the structural plumbline of the ankle.',
    colors: [
      {
        name: 'Olive Fumée',
        hex: '#4A4E3E',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Crème de Lait',
        hex: '#FAF5ED',
        image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir d’Encre',
        hex: '#161616',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41]
  },
  {
    id: 'cortina-lug-boot',
    name: 'The Cortina Lug-Sole Boot',
    subName: '50mm Weatherproof Field Boot',
    tagline: 'Waxed Tuscan calfskin field boot with lightweight shock-absorbing lug tread.',
    category: 'boots',
    categoryLabel: 'Minimalist Boots',
    price: 620,
    originalPrice: 660,
    rating: 4.9,
    reviewsCount: 22,
    isBestseller: false,
    isNew: true,
    isLimited: true,
    heelHeight: '50mm / 2.0 inches',
    materials: ['Wax-Impregnated Tuscan Calfskin', 'Solid Antique Brass Speed Hooks', 'Storm-Welted Extralight® Lug Sole'],
    description: 'Architectural utilitarianism designed for inclement weather in Milan, London, or Manhattan. Crafted from hydro-repellent waxed calf leather with solid brass speed lace hardware and a featherlight storm-welted lug sole.',
    details: [
      'Gusseted water-barrier tongue prevents moisture infiltration',
      'Solid antiqued brass eyelets with quick-lacing upper hooks',
      'Italian Extralight® cleated rubber sole weighs 40% less than traditional rubber',
      'Thermal shearling-touch footbed lining for crisp autumn and winter mornings',
      'Hand-waxed finish develops a handsome distressed character with mileage'
    ],
    fitAdvice: 'Standard boot sizing. Fits comfortably with fine silk or medium merino wool socks.',
    craftsmanshipNotes: 'Double 360-degree storm welt prevents snow and rain water penetration.',
    colors: [
      {
        name: 'Terre Noire',
        hex: '#1C1B1A',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Châtaigne Sauvage',
        hex: '#4F3325',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42]
  },
  {
    id: 'the-valmont-wholecut',
    name: 'The Valmont Wholecut Oxford',
    subName: 'Seamless Single-Hide Boxcalf',
    tagline: 'Sculpted from a single flawless skin with zero perimeter seams and a chiselled fiddleback waist.',
    gender: 'men',
    category: 'oxfords',
    categoryLabel: 'Wholecut Oxfords',
    price: 590,
    originalPrice: 650,
    rating: 5.0,
    reviewsCount: 42,
    isBestseller: true,
    isNew: true,
    isLimited: false,
    heelHeight: '28mm / 1.1 inches',
    materials: ['Grade-A French Tanneries d’Annonay Boxcalf', 'Fiddleback Bevelled Waist', 'Hand-Glazed Oak Bark Sole'],
    description: 'The pinnacle of bespoke shoemaking mastery. The Valmont is cut from a solitary continuous piece of unblemished French boxcalf, requiring flawless leather selection and three full days on wooden lasts to steam and mold the curves without tension marks. Features a hand-bevelled fiddleback waist and mirror-glazed toe.',
    details: [
      'Entire upper crafted from a single hide segment with only one discreet back-seam',
      'Blind 5-eyelet closed lacing system for clean architectural lines',
      'Fiddleback arched waist hand-rasped for a glove-like instep contour',
      'Traditional hand-stained oak bark leather sole with brass toe-plate screws',
      'Hand-burnished using carnauba and beeswax in multiple translucent layers'
    ],
    fitAdvice: 'Runs true to European men’s sizing. Snug instep creates a personalized mold after two wearings.',
    craftsmanshipNotes: 'Only 1 in 14 hides meets the strict criteria required for a zero-seam wholecut pattern.',
    colors: [
      {
        name: 'Espresso Fumée',
        hex: '#33231A',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Miroir',
        hex: '#141414',
        image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Cognac Ambré',
        hex: '#8C4824',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-lorenzo-double-monk',
    name: 'The Lorenzo Double Monkstrap',
    subName: 'Hand-Chiselled Brass Dual Buckle',
    tagline: 'Sinuous cross-over straps secured by hand-chiselled solid brass buckles over a bevelled waist.',
    gender: 'men',
    category: 'monkstraps',
    categoryLabel: 'Double Monkstraps',
    price: 540,
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '26mm / 1.0 inch',
    materials: ['Full-Grain Crust Calfskin', 'Solid Polished Antiqued Brass Buckles', 'Goodyear Welt Construction'],
    description: 'An iconic silhouette honoring Italian sprezzatura. The Lorenzo features dual asymmetrical instep straps with sculpted brass buckles. Hand-finished with an antique crust patina that displays subtle gradients of chestnut and amber under direct sunlight.',
    details: [
      'Dual adjustable instep straps mounted with elasticated hidden flex gussets',
      'Solid antique brass buckles custom-cast in Florence with micro chamfered edges',
      'Goodyear-welted 270-degree construction allowing indefinite resoling',
      'Chiselled soft-square toe profile with clean cap-toe stitch line',
      'Full natural vegetable-tanned calf lining that breathes naturally'
    ],
    fitAdvice: 'Standard width. The dual buckle system allows precise instep tension tuning.',
    craftsmanshipNotes: 'Each pair is hand-dyed with alcohol-based aniline stains over 6 progressive coatings.',
    colors: [
      {
        name: 'Châtaigne Patinée',
        hex: '#4A2F1F',
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Obsidienne',
        hex: '#161514',
        image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-aurelius-wingtip',
    name: 'The Aurelius Wingtip Brogue',
    subName: 'Medallion Toe Heritage Oxford',
    tagline: 'Pinpoint perforated brogueing with a traditional medallion toe cap and double leather sole.',
    gender: 'men',
    category: 'oxfords',
    categoryLabel: 'Heritage Brogues',
    price: 565,
    rating: 4.9,
    reviewsCount: 29,
    isBestseller: false,
    isNew: true,
    isLimited: false,
    heelHeight: '30mm / 1.18 inches',
    materials: ['Heavy-Gauge Tuscan Calfskin', 'Double Oak-Bark Leather Sole', 'Gingered Edge Welting'],
    description: 'A monument of masculine heritage. The Aurelius showcases intricate punch brogueing, serrated wingtip edges, and an exclusive fleur-de-lys medallion across the toe. Built with a double oak-bark leather sole with channelled stitching.',
    details: [
      'Hand-punched brogue perforations with gimping on all contour edges',
      'Exclusive bespoke toe medallion designed in our Florence workshop',
      'Double oak-bark leather sole tanned in ground pits for 12 months for supreme density',
      'Solid brass nailed heel-block with inset protective rubber quarter',
      'Reinforced heel counter guarantees lifetime structural rigidity'
    ],
    fitAdvice: 'Standard European width. Accommodates standard to high insteps with ease.',
    craftsmanshipNotes: 'Constructed using genuine 360-degree storm welting for all-weather durability.',
    colors: [
      {
        name: 'Noyer Ancien',
        hex: '#5E3D27',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Cire',
        hex: '#181716',
        image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-sorrento-belgian-loafer',
    name: 'The Sorrento Belgian Loafer',
    subName: 'Deconstructed Suede Tassel Slip-On',
    tagline: 'Deconstructed Italian reverse-suede crowned with a hand-rolled calfskin tassel.',
    gender: 'men',
    category: 'loafers',
    categoryLabel: 'Artisanal Loafers',
    price: 475,
    rating: 4.8,
    reviewsCount: 49,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '18mm / 0.7 inches',
    materials: ['Velvety Tuscan Reverse Suede', 'Hand-Rolled Calfskin Piping', 'Flexible Sacchetto Construction'],
    description: 'Casual elegance made for Mediterranean coastal villas and relaxed urban tailoring. The Sorrento is crafted with an unlined reverse suede upper that molds to the foot instantly, finished with neat contrast leather piping and a petite hand-wound tassel.',
    details: [
      'Unlined suede upper offers featherweight, sock-like comfort',
      'Hand-piped collar binding prevents stretching over time',
      'Ultra-supple turned leather sole with embossed maison crest',
      'Subtle internal arch cushion prevents flat fatigue during city walks',
      'Slip-on design crafted for effortless barefoot or no-show sock wear'
    ],
    fitAdvice: 'True to size. Soft suede relaxes half a width within a few wears.',
    craftsmanshipNotes: 'Treated with water-resistant fluorocarbon-free repellent during the drum dye phase.',
    colors: [
      {
        name: 'Brun Velours',
        hex: '#513D2F',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Sable Méditerranée',
        hex: '#D1C0A5',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Bleu Riviera',
        hex: '#212D3E',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-kensington-jodhpur',
    name: 'The Kensington Jodhpur Boot',
    subName: 'Wrap-Around Buckled Ankle Boot',
    tagline: 'Equestrian poise featuring an unbroken ankle strap and solid brass roller buckle.',
    gender: 'men',
    category: 'boots',
    categoryLabel: 'Minimalist Boots',
    price: 650,
    originalPrice: 710,
    rating: 5.0,
    reviewsCount: 33,
    isBestseller: true,
    isNew: true,
    isLimited: true,
    heelHeight: '32mm / 1.25 inches',
    materials: ['Full-Grain Waxed Waxed Calf', 'Solid Brass Roller Buckle', 'Dainite Studded Rubber Outsole'],
    description: 'Conceived in the British equestrian tradition and perfected in our Tuscan workshop. The Kensington wraps around the ankle with a continuous leather strap secured by a heavy brass roller buckle. Mounted on a discreet British Dainite rubber sole for all-weather traction without bulk.',
    details: [
      'Continuous wrap-around ankle cinch strap with micro adjustment holes',
      'Solid polished brass roller buckle with Lamine hallmark imprint',
      'Chiselled almond toe with clean vamp transition',
      'Slim shaft silhouette slides smoothly under tailored trouser cuffs',
      'Full calfskin glove lining with thermal moisture regulation'
    ],
    fitAdvice: 'Standard boot sizing. Cinch strap enables custom ankle snugness.',
    craftsmanshipNotes: 'Goodyear-welted to an authentic Dainite studded sole for rain and winter traction.',
    colors: [
      {
        name: 'Havane Glacé',
        hex: '#5C341F',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Profond',
        hex: '#161514',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-milano-pebble-driver',
    name: 'The Milano Pebble Driver',
    subName: 'Hand-Stitched Gommino Car Shoe',
    tagline: 'Glove-soft grained nappa with 132 individual rubber pebble pods for tactile pedal feel.',
    gender: 'men',
    category: 'drivers',
    categoryLabel: 'Driving Moccasins',
    price: 415,
    rating: 4.9,
    reviewsCount: 64,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '12mm / 0.5 inches',
    materials: ['Hand-Selected Pebbled Cervo Calf', '132 Rubber Gommino Pods', 'Waxed Saddle Stitching'],
    description: 'Born for high-speed Grand Touring along the Amalfi Coast. The Milano is hand-sewn on the last using thick waxed thread and buttery cervo-grain calfskin. Its 132 individual rubber pebble pods wrap up the heel counter to cushion spirited pedal transitions.',
    details: [
      'Tubular moccasin construction wrapping 360 degrees around the foot',
      'Signature wrap-around heel pebble cluster prevents leather scuffing while driving',
      'Hand-stitched vamp apron executed with double-waxed sail thread',
      'Ultra-breathable perforated calfskin insole with memory arch pad',
      'Supple enough to roll up neatly in weekend luggage'
    ],
    fitAdvice: 'True to size for barefoot wear. If wearing with socks, order normal European size.',
    craftsmanshipNotes: 'Every single rubber pebble is hand-punched and vulcanized to ensure lifelong retention.',
    colors: [
      {
        name: 'Tabac Riche',
        hex: '#5E3E26',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Carbone',
        hex: '#181716',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Bleu Marine',
        hex: '#1D2736',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-matteo-cap-toe',
    name: 'The Matteo Cap-Toe Oxford',
    subName: 'Formal Mirror-Glazed Oxford',
    tagline: 'The benchmark of formal sartorial discipline with a mirror-glazed straight cap toe.',
    gender: 'men',
    category: 'oxfords',
    categoryLabel: 'Classic Oxfords',
    price: 550,
    rating: 5.0,
    reviewsCount: 41,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '28mm / 1.1 inches',
    materials: ['Finest German Boxcalf', 'Hand-Glazed Glaçage Cap', 'Goodyear Channeled Sole'],
    description: 'The definitive formal dress shoe for life’s most decisive moments. The Matteo presents an immaculate straight cap-toe line with twin micro-stitching. The toe and heel counter are finished to a diamond mirror gloss (glaçage) using iced water and hard waxes.',
    details: [
      'Twin-needle micro stitching along the clean straight toe-cap',
      '5-eyelet closed oxford lacing with hand-braided waxed laces',
      'Channelled leather sole with hidden stitch groove and dark stained waist',
      'Pre-glazed toe cap providing immediate mirror reflectivity straight from the box',
      'Cork-filled footbed molds to your skeletal footprint over time'
    ],
    fitAdvice: 'Classic British-Italian dress last. Select your regular formal dress shoe size.',
    craftsmanshipNotes: 'Master shoemakers spend 40 minutes per shoe hand-glazing the toe cap with cold mineral water.',
    colors: [
      {
        name: 'Noir Habillé',
        hex: '#111111',
        image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Bordeaux Profond',
        hex: '#3E1922',
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-roma-court-sneaker',
    name: 'The Roma Heritage Court Sneaker',
    subName: 'Full-Grain Italian Calfskin Low-Top',
    tagline: 'Heavy-gauge Tuscan calf leather with stitched Margom rubber outsoles and kidskin footbed.',
    gender: 'men',
    category: 'sneakers',
    categoryLabel: 'Studio Trainers',
    price: 395,
    rating: 4.9,
    reviewsCount: 55,
    isBestseller: true,
    isNew: false,
    isLimited: false,
    heelHeight: '30mm / 1.18 inches',
    materials: ['Full-Grain Vachetta Calfskin', 'Italian Margom Cupsole', 'Supple Kidskin Lining'],
    description: 'Pure architectural minimalism stripped of all unnecessary branding. The Roma is crafted with heavy-gauge Tuscan vachetta leather that softens with wear, married to an authentic Italian Margom rubber cupsole stitched through the entire perimeter.',
    details: [
      'Seamless toe cap and minimalist quarter panels with tonal stitching',
      'Authentic Margom stitched rubber cupsole imported from Civitanova Marche',
      'Full kidskin lining for friction-free sockless breathability',
      'Removable contoured orthotic-grade memory foam insole',
      'Heavyweight waxed cotton laces with brass branded aglets'
    ],
    fitAdvice: 'Runs slightly large. If between sizes, choose one size down.',
    craftsmanshipNotes: 'The sole is perimeter side-wall stitched by hand with heavy nylon chord.',
    colors: [
      {
        name: 'Craie Blanche',
        hex: '#F2EFE8',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Profond',
        hex: '#161615',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46]
  },
  {
    id: 'the-aria-chunky-loafer',
    name: 'The Aria Chunky Lug Loafer',
    subName: "Modern Girls' Platform Penny Loafer",
    tagline: 'Runway-inspired lightweight platform lug tread with Italian boxcalf and brushed gilded horsebit.',
    gender: 'girls',
    category: 'loafers',
    categoryLabel: 'Chunky Lug Loafer',
    price: 195,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    isNew: true,
    isLimited: false,
    heelHeight: '28mm / 1.1 inches',
    materials: ['Full-Grain Italian Boxcalf', 'Extralight® Platform Lug Sole', 'Glove-Soft Kidskin Lining'],
    description: 'A bold, contemporary statement engineered with petite proportions in mind. The Aria pairs a featherweight Extralight® platform lug sole with glossy Italian boxcalf and an antiqued gold-plated horsebit. Designed for all-day comfort without cumbersome heaviness.',
    details: [
      'Ultra-lightweight cleated lug tread engineered for active agility and springy cushion',
      'Antiqued brushed gold-tone horsebit ornament across the saddle apron',
      'Contoured memory-foam footbed supporting developing foot arches',
      'Padded heel counter prevents chafing and blister friction during active movement',
      'Slip-resistant grip tested on wet sidewalks and polished stone floors'
    ],
    fitAdvice: 'True to European junior sizing. For narrower feet, select your standard size.',
    craftsmanshipNotes: 'Hand-lasted over a junior ergonomic foot-form to ensure anatomical balance.',
    colors: [
      {
        name: 'Noir Vernis',
        hex: '#181818',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Crème d’Alabâtre',
        hex: '#F4EFE6',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Bordeaux Glacé',
        hex: '#4A192C',
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    id: 'the-celeste-modern-mary-jane',
    name: 'The Celeste Modern Mary Jane',
    subName: 'Architectural Double-Strap Mary Jane',
    tagline: 'Clean modern square toe with dual adjustable micro-buckles and supple glove-soft French nappa.',
    gender: 'girls',
    category: 'mary-janes',
    categoryLabel: 'Modern Mary Jane',
    price: 185,
    originalPrice: 210,
    rating: 5.0,
    reviewsCount: 44,
    isBestseller: true,
    isNew: true,
    isLimited: false,
    heelHeight: '15mm / 0.6 inches',
    materials: ['Supple French Nappa Leather', 'Dual Polished Brass Buckles', 'Flexible Non-Slip Crepe Rubber Sole'],
    description: 'A sleek modern reimagining of the timeless Mary Jane silhouette. Featuring an architectural softly squared toe, dual adjustable straps with brushed brass hardware, and an ultra-flexible rubber sole that bends effortlessly with every step.',
    details: [
      'Modern squared toe box provides generous room for natural toe movement',
      'Dual functional micro-buckle straps with concealed stretch elastic inserts',
      'Zero-break-in Italian nappa leather that softens instantly',
      'Non-scuffing crepe sole providing superior natural traction',
      'Includes branded silk dust pouch for atelier gifting'
    ],
    fitAdvice: 'True to size with adjustable straps allowing custom instep fit.',
    craftsmanshipNotes: 'Constructed using Bologna sacchetto technique for sock-like flexibility.',
    colors: [
      {
        name: 'Noir Céleste',
        hex: '#171717',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Rouge Carmin Moderne',
        hex: '#8C1D24',
        image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Rose Poudré',
        hex: '#E8D5CE',
        image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    id: 'the-nova-platform-chelsea',
    name: 'The Nova Platform Chelsea Boot',
    subName: 'Modern Water-Resistant Chelsea Boot',
    tagline: 'Hydro-repellent Tuscan calfskin with wide stretch goring and a lightweight sculpted lug sole.',
    gender: 'girls',
    category: 'boots',
    categoryLabel: 'Modern Chelsea Boot',
    price: 230,
    originalPrice: 260,
    rating: 4.9,
    reviewsCount: 31,
    isBestseller: false,
    isNew: true,
    isLimited: true,
    heelHeight: '32mm / 1.25 inches',
    materials: ['Hydrophobic Tuscan Calf Leather', 'Heavy-Duty Twin Stretch Elastic', 'Extralight® Lug Outsole'],
    description: 'The essential modern city boot for stylish young tastemakers. Hydro-repellent Italian calfskin sheds rain and splashes, while the generous stretch side panels and rear pull tab allow slip-on ease in seconds. Finished with a featherlight chunky lug platform.',
    details: [
      'Hydrophobic treatment repels drizzle, puddles, and city slush',
      'Rear woven grosgrain pull tab for swift hands-free slip-on entry',
      'Reinforced toe bumper protects against daily scuffs and school playground wear',
      'Ergonomic cushioned footbed lined in breathable calfskin',
      'Lightweight shock-absorbing tread cushions heel impacts'
    ],
    fitAdvice: 'True to size. Fits comfortably with cotton or wool socks.',
    craftsmanshipNotes: 'Reinforced 360-degree stitch welt resists moisture infiltration.',
    colors: [
      {
        name: 'Noir Minéral',
        hex: '#1A1918',
        image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Caramel Brun',
        hex: '#8C5B32',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    id: 'the-stella-platform-trainer',
    name: 'The Stella Modern Platform Trainer',
    subName: 'Minimalist Calfskin Court Trainer',
    tagline: 'Ultra-clean white Italian leather with metallic champagne heel counter and stitched cupsole.',
    gender: 'girls',
    category: 'sneakers',
    categoryLabel: 'Platform Trainer',
    price: 180,
    originalPrice: 200,
    rating: 4.8,
    reviewsCount: 39,
    isBestseller: true,
    isNew: true,
    isLimited: false,
    heelHeight: '26mm / 1.0 inch',
    materials: ['Full-Grain Italian Calfskin', 'Metallic Mirror Leather Trim', 'Stitched Rubber Margom Sole'],
    description: 'Contemporary luxury streetwear scaled for young girls. Cut from buttery smooth white Italian calfskin with an eye-catching metallic champagne or silver heel counter. Features elasticized laces with quick-tie toggle and stitched rubber cupsole.',
    details: [
      'Pristine monochrome white leather upper with subtle metallic accent',
      'Removable anatomical arch-support insole with antimicrobial lining',
      'Padded ankle collar prevents slipping and heel abrasion',
      'Stitched perimeter sole ensures zero de-lamination over time',
      'Includes both waxed cotton tonal laces and elastic no-tie laces'
    ],
    fitAdvice: 'True to size. Generous toe box allows natural growth space.',
    craftsmanshipNotes: 'Perimeter cupsole is side-wall locked using heavy-duty nylon thread.',
    colors: [
      {
        name: 'Blanc & Or Miroir',
        hex: '#F8F6F0',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Blanc & Rose Argent',
        hex: '#EADCD7',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    id: 'the-clara-modern-ballerina',
    name: 'The Clara Modern Ballerina',
    subName: 'Square-Toe Sacchetto Flat with Elastic Cross-Band',
    tagline: 'Buttery lambskin flat with modern square toe, satin cross-bands, and ultra-flexible split sole.',
    gender: 'girls',
    category: 'flats',
    categoryLabel: 'Modern Ballerina',
    price: 165,
    originalPrice: 190,
    rating: 4.8,
    reviewsCount: 26,
    isBestseller: false,
    isNew: true,
    isLimited: false,
    heelHeight: '8mm / 0.3 inches',
    materials: ['Buttery Florentine Lambskin', 'Satin-Sheen Elastic Cross Straps', 'Flexible Italian Leather Split Sole'],
    description: 'Elegance refined for modern youth. The Clara updates the classical ballerina flat with a contemporary soft square toe box and crossed satin-finish instep elastics that hug the foot securely during active days, recitals, and special celebrations.',
    details: [
      'Modern square toe silhouette that avoids cramped toes',
      'Criss-cross satin elastics provide secure, stay-put stability without tying',
      'Sacchetto construction creates an uninterrupted glove-like interior',
      'Micro-grooved rubber insert under the ball of the foot for non-slip grip',
      'Lined in softest non-dyed vegetable-tanned kidskin'
    ],
    fitAdvice: 'True to European size. Cross-bands ensure a snug, comfortable fit.',
    craftsmanshipNotes: '100% stitched from the inside out and turned by hand in Florence.',
    colors: [
      {
        name: 'Champagne Métallisé',
        hex: '#D6C6A5',
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Mat',
        hex: '#1C1B1A',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Pêche Poudrée',
        hex: '#F0D5C7',
        image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    id: 'the-sienna-cage-sandal',
    name: 'The Sienna Modern Fisherman Sandal',
    subName: 'Modern Chunky Woven Platform Sandal',
    tagline: 'Interlocking full-grain leather cage with adjustable ankle strap and cushioned molded footbed.',
    gender: 'girls',
    category: 'sandals',
    categoryLabel: 'Fisherman Sandal',
    price: 175,
    originalPrice: 195,
    rating: 4.9,
    reviewsCount: 22,
    isBestseller: false,
    isNew: true,
    isLimited: false,
    heelHeight: '24mm / 0.95 inches',
    materials: ['Full-Grain Italian Calfskin', 'Brushed Solid Brass Buckle', 'Anatomical Cork-Latex Platform Footbed'],
    description: 'The season’s most coveted modern summer silhouette. The Sienna features clean geometric cage straps crafted from vegetable-tanned leather, married to a molded anatomical footbed that cradles growing feet with cloud-like support.',
    details: [
      'Closed cage toe prevents stubbed toes while maintaining airy ventilation',
      'Adjustable ankle strap with concealed elastic flex behind the buckle',
      'Deeply contoured arch and heel cup promotes upright posture',
      'Durable serrated rubber outsole provides surefooted traction on grass and stone',
      'Vegetable-tanned leather lining prevents sticky perspiration'
    ],
    fitAdvice: 'True to size. Adjustable buckle accommodates wide or high insteps.',
    craftsmanshipNotes: 'Every leather cage cross-strap is skived and burnished on the edges for zero bite.',
    colors: [
      {
        name: 'Cuir Vachetta Naturel',
        hex: '#A67343',
        image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Noir Satiné',
        hex: '#1B1A19',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85'
      },
      {
        name: 'Blanc Ivoire',
        hex: '#F6F3EC',
        image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85',
        secondaryImage: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85'
      }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Vance',
    location: 'Paris, 7th Arrondissement',
    verified: true,
    rating: 5,
    date: '2 weeks ago',
    title: 'The rarest combination: high fashion that actually cherishes your feet',
    text: 'I wore The Aurelia Slingback for a full 9-hour gallery opening and dinner along the Seine. In my 15 years collecting luxury shoes, I have never experienced a heel that supports the metatarsal arch this gracefully. The cream leather has an ethereal glow.',
    shoeModel: 'The Aurelia Slingback (Crème Ivoire)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-2',
    author: 'Camilla D’Angelo',
    location: 'Milan, Brera',
    verified: true,
    rating: 5,
    date: '1 month ago',
    title: 'The Vittorio loafers exceed Savile Row bespoke quality',
    text: 'The leather aroma upon unboxing is pure Tuscan artistry. The Vittorio loafer has zero break-in pain—the leather is like silk butter against your ankle. My colleagues have asked me three times today where they were crafted.',
    shoeModel: 'The Vittorio Loafer (Espresso Brun)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-3',
    author: 'Victoria Sterling',
    location: 'New York, Upper East Side',
    verified: true,
    rating: 5,
    date: '3 weeks ago',
    title: 'Flawless proportions and impeccable customer care',
    text: 'I booked a virtual concierge session with Lamine before ordering The Séléné boots. The team verified my exact ankle width and recommended EU 38. The fit is tailor-made perfection. Truly what quiet luxury should feel like.',
    shoeModel: 'The Séléné Chelsea Boot (Noir Mat)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-4',
    author: 'Dr. Sophie Bernard',
    location: 'Geneva, Switzerland',
    verified: true,
    rating: 5,
    date: 'Last month',
    title: 'As an orthopedic surgeon, I am astounded by the engineering',
    text: 'I am notoriously strict with footwear choices. The Cyra mule’s center-of-gravity displacement is genuine biometric science. It feels like wearing an orthotic cradle disguised as an architectural work of art.',
    shoeModel: 'The Cyra Sculpted Mule (Beige Crème)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-5',
    author: 'Geneviève de Saint-Germain',
    location: 'Paris, Le Marais',
    verified: true,
    rating: 5,
    date: '1 week ago',
    title: 'The Geneviève ballerina has ruined all other flats for me',
    text: 'The sacchetto glove construction is pure alchemy. There is no rigid heel stiffener rubbing the back of your heel, and the hidden 6mm arch wedge gives just enough poise for all-day gallery walks without feeling flat or fatigue-inducing.',
    shoeModel: 'The Geneviève Pointed Flat (Crème Fouettée)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-6',
    author: 'Helena Lindqvist',
    location: 'Stockholm, Östermalm',
    verified: true,
    rating: 5,
    date: '2 weeks ago',
    title: 'The Verona boots are equestrian heirloom perfection',
    text: 'I waited two months for the Verona Knee-High Boot in Cognac Ambré, and it surpassed all expectations. The single-cut saddle leather has an exquisite depth of tone that develops richer character with every wear. Fits like tailored equestrian armour.',
    shoeModel: 'The Verona Knee-High Boot (Cognac Ambré)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-7',
    author: 'Aria Montgomery',
    location: 'London, Mayfair',
    verified: true,
    rating: 5,
    date: '3 weeks ago',
    title: 'Wore the Camille sandals for a black-tie gala without taking them off once',
    text: 'Finding an evening stiletto that does not pinch by midnight is practically unheard of. The tubular lambskin straps of The Camille feel like silk cord, and the flared fluted heel gave complete poise navigating cobblestone terraces in Ravello.',
    shoeModel: 'The Camille Ankle-Wrap Sandal (Noir Doré)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-8',
    author: 'Lord Henry Cavendish',
    location: 'London, St. James’s',
    verified: true,
    rating: 5,
    date: '4 days ago',
    title: 'The Valmont wholecut rivals bespoke West End cordwainers',
    text: 'I have commissioned shoes along Jermyn Street for thirty years. The fiddleback waist on The Valmont is hand-rasped with the exact same precision as bespoke shoemaking twice its cost. The single-hide boxcalf is completely seamless and moulds like a glove.',
    shoeModel: 'The Valmont Wholecut Oxford (Espresso Fumée)',
    fitRating: 'True to Size'
  },
  {
    id: 'rev-9',
    author: 'Matteo Cavour',
    location: 'Milan, Brera',
    verified: true,
    rating: 5,
    date: '1 week ago',
    title: 'Supreme driving feel on the twisty roads of Como',
    text: 'The Milano driver is crafted from genuine cervo leather with zero break-in period required. The rubber gommino pods wrap up the back of the heel cleanly so the leather stays pristine while heel-and-toeing. An absolute essential for touring.',
    shoeModel: 'The Milano Pebble Driver (Tabac Riche)',
    fitRating: 'True to Size'
  }
];

export const PRESS_ACCOLADES = [
  {
    publication: 'VOGUE',
    quote: 'Lamine has solved the eternal riddle of high fashion: architectural daring that walks like a dream.'
  },
  {
    publication: 'HARPER’S BAZAAR',
    quote: 'The footwear label redefining quiet luxury through centuries of Tuscan wood-lasted discipline.'
  },
  {
    publication: 'FINANCIAL TIMES STYLE',
    quote: 'Footwear sculpted for women who move with intention. A masterclass in modern European leathercraft.'
  },
  {
    publication: 'ELLE INTERNATIONAL',
    quote: 'The Aurelia heel is already being hailed as the must-have timeless silhouette of the decade.'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    caption: 'Sunlit mornings in Palais-Royal. Grounded in @lamine.atelier Aurelia 85mm. #WalkInLamine #HauteChausserie',
    handle: '@claire.delacroix',
    likes: 3420,
    productId: 'aurelia-slingback',
    productName: 'The Aurelia Slingback',
    productPrice: 495
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80',
    caption: 'Coffee along Via Montenapoleone. The Vittorio Loafer in hand-burnished espresso. #LamineAtelier',
    handle: '@alessia_fontana',
    likes: 2840,
    productId: 'vittorio-penny-loafer',
    productName: 'The Vittorio Loafer',
    productPrice: 440
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80',
    caption: 'Rain washed sidewalks of SoHo. Seamless weather-sealed leather perfection. #WalkWithConfidence',
    handle: '@charlotte_nyc',
    likes: 4120,
    productId: 'selene-chelsea-boot',
    productName: 'The Séléné Boot',
    productPrice: 580
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=80',
    caption: 'Effortless minimalism at Villa d’Este. Butter-soft nappa that molds to the skin. #LamineWomen',
    handle: '@genevieve_couture',
    likes: 3190,
    productId: 'cyra-sculpted-mule',
    productName: 'The Cyra Mule',
    productPrice: 420
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=900&q=80',
    caption: 'Evening rendezvous in Mayfair. Hand-set crystal pavé capturing twilight. #LamineEvening',
    handle: '@isabella.wellington',
    likes: 5610,
    productId: 'palais-satin-pump',
    productName: 'The Palais Pump',
    productPrice: 640
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    caption: 'First class boarding with The Monaco Trainer. Quiet luxury travel essential. #TravelInStyle',
    handle: '@solene_voyages',
    likes: 2980,
    productId: 'monaco-minimalist-trainer',
    productName: 'The Monaco Trainer',
    productPrice: 385
  },
  {
    id: 'ig-7',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=80',
    caption: 'Autumn countryside escapes in Tuscany. The Verona Knee-High in single-hide saddle leather. #WalkInLamine #TuscanLeather',
    handle: '@victoria_keller',
    likes: 3870,
    productId: 'verona-riding-boot',
    productName: 'The Verona Knee-High Boot',
    productPrice: 790
  },
  {
    id: 'ig-8',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
    caption: 'Endless strolls through the Jardin du Luxembourg with The Geneviève sacchetto ballerina. #ParisianStyle',
    handle: '@mathilde_baudelaire',
    likes: 3210,
    productId: 'genevieve-ballerina',
    productName: 'The Geneviève Pointed Flat',
    productPrice: 395
  },
  {
    id: 'ig-9',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    caption: 'Savile Row tailoring complemented by The Lorenzo Double Monkstrap in Cognac Ambré. #MensFootwear #LamineGentlemen',
    handle: '@arthur_pendelton',
    likes: 4120,
    productId: 'lorenzo-monkstrap',
    productName: 'The Lorenzo Double Monkstrap',
    productPrice: 560
  },
  {
    id: 'ig-10',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    caption: 'Evening aperitivo along the Arno. The Sorrento Belgian Loafer with soft cashmere socks. Pure sprezzatura. #LamineMen',
    handle: '@gianluigi_morandi',
    likes: 3450,
    productId: 'sorrento-belgian-loafer',
    productName: 'The Sorrento Belgian Loafer',
    productPrice: 480
  }
];

export const BOUTIQUES = [
  {
    city: 'Paris',
    name: 'Atelier Place Vendôme',
    address: '14 Place Vendôme, 75001 Paris, France',
    hours: 'Monday – Saturday: 10:00 – 19:30',
    phone: '+33 1 42 68 00 12',
    services: ['Private Bespoke Sizing', 'Champagne Fitting Suite', 'Same-Day Hotel Courier']
  },
  {
    city: 'Milan',
    name: 'Salotto Montenapoleone',
    address: 'Via Monte Napoleone 8, 20121 Milano, Italy',
    hours: 'Monday – Saturday: 10:30 – 19:30',
    phone: '+39 02 7600 4491',
    services: ['Master Cordwainer Consultation', 'Custom Patina Workshop', 'Archive Gallery']
  },
  {
    city: 'New York',
    name: 'Madison Avenue Maison',
    address: '782 Madison Avenue, New York, NY 10065',
    hours: 'Monday – Saturday: 11:00 – 19:00, Sunday: 12:00 – 18:00',
    phone: '+1 (212) 555-0189',
    services: ['VIP Stylist Appointments', 'Express Messenger Delivery', 'Lifetime Care Drop-off']
  }
];
