
import { Product } from "@/types/types";

export const products: Product[] = [
  {
    id: "1",
    name: "SoundWave Pro",
    brand: "AudioTech",
    category: "Over-ear",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "Experience superior sound quality with SoundWave Pro noise-cancelling headphones. Perfect for audiophiles who demand excellence.",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium memory foam ear cushions",
      "Voice assistant support"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32 ohm",
      "Connectivity": "Bluetooth 5.2, 3.5mm jack",
      "Weight": "250g"
    },
    stock: 15,
    isNew: false,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: "2",
    name: "BassMaster Wireless",
    brand: "BeatKing",
    category: "Over-ear",
    price: 199.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "Feel the bass with BassMaster Wireless. These headphones deliver powerful low frequencies without sacrificing clarity.",
    features: [
      "Enhanced bass technology",
      "30-hour battery life",
      "Quick charge (10min = 3hrs)",
      "Foldable design"
    ],
    specifications: {
      "Driver Size": "45mm",
      "Frequency Response": "5Hz - 22kHz",
      "Impedance": "16 ohm",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack",
      "Weight": "280g"
    },
    stock: 8,
    isNew: false,
    isFeatured: true,
    isOnSale: false
  },
  {
    id: "3",
    name: "ClearTalk ANC",
    brand: "SoundClear",
    category: "On-ear",
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "ClearTalk ANC combines crystal clear voice quality with advanced noise cancellation, perfect for calls and meetings.",
    features: [
      "Adaptive Noise Cancellation",
      "Beam-forming microphones",
      "25-hour battery life",
      "Touch controls"
    ],
    specifications: {
      "Driver Size": "35mm",
      "Frequency Response": "15Hz - 20kHz",
      "Impedance": "32 ohm",
      "Connectivity": "Bluetooth 5.1",
      "Weight": "215g"
    },
    stock: 12,
    isNew: false,
    isFeatured: false,
    isOnSale: true
  },
  {
    id: "4",
    name: "StudioPro X1",
    brand: "MixMaster",
    category: "Over-ear",
    price: 349.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "Professional-grade headphones designed for music production and mixing. Unparalleled accuracy and detail.",
    features: [
      "Reference-grade sound",
      "Replaceable cables",
      "Wired for studio use",
      "Precision-tuned drivers"
    ],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "5Hz - 30kHz",
      "Impedance": "38 ohm",
      "Connectivity": "3.5mm jack, 6.3mm adapter",
      "Weight": "320g"
    },
    stock: 5,
    isNew: true,
    isFeatured: true,
    isOnSale: false
  },
  {
    id: "5",
    name: "FreeBuds Air",
    brand: "TechWave",
    category: "In-ear",
    price: 129.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "Ultra-lightweight earbuds with incredible sound. Perfect for an active lifestyle with sweat and water resistance.",
    features: [
      "Truly wireless design",
      "6-hour battery (24 with case)",
      "IPX4 water resistance",
      "Touch controls"
    ],
    specifications: {
      "Driver Size": "8mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "16 ohm",
      "Connectivity": "Bluetooth 5.2",
      "Weight": "5g each"
    },
    stock: 20,
    isNew: true,
    isFeatured: false,
    isOnSale: false
  },
  {
    id: "6",
    name: "SoundSport Pro",
    brand: "AudioTech",
    category: "In-ear",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "Sports earphones designed to stay in place during intense workouts. Sweatproof and durable.",
    features: [
      "Secure-fit ear hooks",
      "8-hour battery life",
      "IPX6 sweatproof",
      "Built-in heart rate monitor"
    ],
    specifications: {
      "Driver Size": "10mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "16 ohm",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "18g"
    },
    stock: 14,
    isNew: false,
    isFeatured: false,
    isOnSale: true
  },
  {
    id: "7",
    name: "Audiophile Elite",
    brand: "MixMaster",
    category: "Over-ear",
    price: 499.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1641391503184-a2131018701b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1641391503184-a2131018701b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "The ultimate audiophile experience with planar magnetic drivers and premium materials throughout.",
    features: [
      "Planar magnetic drivers",
      "Hand-crafted with premium materials",
      "Detachable balanced cable",
      "Open-back design"
    ],
    specifications: {
      "Driver Type": "Planar Magnetic",
      "Frequency Response": "4Hz - 40kHz",
      "Impedance": "60 ohm",
      "Connectivity": "3.5mm, balanced XLR",
      "Weight": "380g"
    },
    stock: 3,
    isNew: true,
    isFeatured: true,
    isOnSale: false
  },
  {
    id: "8",
    name: "BassMinimal",
    brand: "BeatKing",
    category: "On-ear",
    price: 89.99,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    description: "Minimalist design meets bass-heavy sound profile. Lightweight and comfortable for everyday use.",
    features: [
      "Bass-enhancing technology",
      "20-hour battery life",
      "Foldable design",
      "Integrated microphone"
    ],
    specifications: {
      "Driver Size": "32mm",
      "Frequency Response": "10Hz - 20kHz",
      "Impedance": "32 ohm",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack",
      "Weight": "180g"
    },
    stock: 25,
    isNew: false,
    isFeatured: false,
    isOnSale: false
  }
];

export const filters: Record<string, string[]> = {
  brands: ["AudioTech", "BeatKing", "SoundClear", "MixMaster", "TechWave"],
  categories: ["Over-ear", "On-ear", "In-ear"],
  priceRanges: ["Under $100", "$100-$200", "$200-$300", "Over $300"]
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFilteredProducts = (
  searchTerm: string = "",
  selectedBrands: string[] = [], 
  selectedCategories: string[] = [],
  selectedPriceRanges: string[] = []
): Product[] => {
  let filteredProducts = [...products];
  
  // Filter by search term
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredProducts = filteredProducts.filter(
      p => p.name.toLowerCase().includes(term) || 
           p.brand.toLowerCase().includes(term) || 
           p.description.toLowerCase().includes(term)
    );
  }
  
  // Filter by brands
  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedBrands.includes(p.brand));
  }
  
  // Filter by categories
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
  }
  
  // Filter by price ranges
  if (selectedPriceRanges.length > 0) {
    filteredProducts = filteredProducts.filter(p => {
      const price = p.price;
      return selectedPriceRanges.some(range => {
        if (range === "Under $100") return price < 100;
        if (range === "$100-$200") return price >= 100 && price <= 200;
        if (range === "$200-$300") return price > 200 && price <= 300;
        if (range === "Over $300") return price > 300;
        return false;
      });
    });
  }
  
  return filteredProducts;
};
