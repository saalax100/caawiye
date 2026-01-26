
import { Category, Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Farm Fresh Brown Eggs',
    category: Category.EGGS,
    price: 12.50,
    unit: 'Per Tray (30pcs)',
    description: 'Fresh organic brown eggs direct from local farms.',
    minOrder: '5 Trays',
    badge: 'Grade A',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpoW_iHZmXDrZE1IAR3iIflsFIExMJoYjWiDpNuBhbyggIzfGfYqyBe3oSY7Q3EtAF0ZaH5aqBOLIUNZ1SOeM1GcNxxKkZCvHfrJ3JFvat0zrRaJPhm1tDRxMzwQQ7tpATiRpWDOOXUSCRGPHCnh7n3xENaeqL2OeItBvuAvDByt9GZsojeG8QXi6SRxuyTjhX4L85v_jdhYIHhWmOC5rs7EMmG_sns9q5oIHrfDFqWYqTEvvyhvtvkWkFpEf4Hsd9DEf5iDgfmZU',
    inStock: true
  },
  {
    id: '2',
    name: 'Layer Chicks (ISA Brown)',
    category: Category.CHICKS,
    price: 1.85,
    unit: 'Per Chick',
    description: 'High-yield ISA Brown layer chicks, day old.',
    minOrder: 'Vaccinated & Healthy',
    badge: 'Day Old',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPAe9RM4VM-dOrNlQPerg-236FkXE9tk2GkJlhY98feoysBK_t_GIYx3hD2w5HvQ2kZ6md-1vjKH2kELbGc_OEou7YcqN45K0b8kXQjYPfjKNFTithXY9Iu-bjtcvzTMLyQR1ploJMuJJTrIWa5ywzl3R1Q9oVgdETq6TWBhS3Ti-YDonEudT1OWsl-3BwTzKIxjJyxypF02q1LUeiRv7mOEcAR9QIFhVIumbTMwf7Md6JyhWSlVQ8zzXObipOfCmCpl8TU98ZOHY',
    inStock: true
  },
  {
    id: '3',
    name: 'Premium Layer Mash',
    category: Category.FEED,
    price: 45.00,
    unit: 'Per 50kg Bag',
    description: 'Specially formulated high-protein mash for optimal laying.',
    minOrder: 'High Protein Formula',
    badge: 'Bulk Feed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5SKK08cvv7C5tYSzRLLHE0zpyDYDW0kGcZDelSkgJtl2HaYWLLzR4ydb4IT2PvKoDpBLR6spUwhchCiFm_6NmdbcwNlqFLKtjeD6Tcu6FZhkJf84f6MmWCq2VLymL0L11hN2cegPll-fdqWjqUzeOuDgbBv1Dwl3ZcnTxQ8dictvHCm-oyf_QhcsN4M8O4Khu7oZpekxgFh1PDcWRovKB8PU2EalqljGV4xnboxpKJx2KDqPZHVY_MFfRCvjrB1mvdsMrZGNkn04',
    inStock: true
  },
  {
    id: '4',
    name: 'Organic Broiler Chicken',
    category: Category.BROILERS,
    price: 8.50,
    unit: 'Per Kilogram',
    description: 'Free-range organic broilers, hormone-free.',
    minOrder: 'Ready for Market (2.5kg+)',
    badge: 'Mature',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxDz2aBUdfRVGlCGJQRKdIt1VzTNgor-fMF1Ib2mCZbr1_Fnpm49nyHdsEH62wsMot2x9NpSiN15uyWebWOTR2wPZrqyMjUzp9GOry8CRtWySP0iS5-OJhMwLrVZ36xxQZLtA2SAHfPAxWJrQMOJYc-BupP2Kru-uo2K5pILt2bYCbl_1FpnpAFpg8BZd1jBZsa8TXzUXatEivvJzwLKrC3FacfEjLZg9wYULDc1DRAv-jdNbaq8VF77IQCnGu5Vt9uFrR4DP0GVo',
    inStock: true
  },
  {
    id: '5',
    name: 'Automatic Waterer',
    category: Category.ALL,
    price: 24.99,
    unit: 'Per Unit',
    description: 'Durable gravity-fed automatic watering system.',
    minOrder: 'Easy Install (10L capacity)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Qky1PLlucXBEYQ8VZrOSh98HNLqq_Ch4oJKsnqm2ivy0IfaSlScp6-6h1VSICCq9R4hcDrsZuHvM3w_mf7gDbYk-6gecpNmZLZnhgPI0XujzeqLpiMaBGq8LxahtjFDJDOGY1t4oKTy2ACp5rHGMrR7U3BftnUht3OTCq1aWXBEGt_3VM9tC1kwI3CbcW3bAN297uUsq5Mb_7x1p4NNmRsVoerWKqS0POfWhCo_ZAQTfw42zv0s5-JvHqgGx3gvaUUjW1GDSwRM',
    inStock: true
  },
  {
    id: '6',
    name: 'Jumbo White Eggs',
    category: Category.EGGS,
    price: 14.20,
    unit: 'Per Tray (30pcs)',
    description: 'Extra large Grade AA white eggs.',
    minOrder: 'Extra Large Grade AA',
    badge: 'Bestseller',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALyUMTYhCjqeU1cHnmXkM8kyR386nP1gmFEA4jKEwRYQoHproAgeEi-mRehkaByVyOQe0OsfR2byltVRmkoYTtXquUqvc6SmcG5X2tkQgI5aT9rKALpGxcGEd7Hf6KJn_BinGVAj01rXpbRz83ktDbIQtBJExck67muo2xTFuqfjkMqxmHqYH_cOR7r3aosyOE0F7HD6SamK_vcqcz5Gwss23MfXFvqmCP1lEF9Xb07Pm23xo3vLL6h4OI_DHLw6lJYk9xAAmfHkA',
    inStock: true
  }
];
