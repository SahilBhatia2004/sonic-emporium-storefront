
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, ArrowLeft, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, products } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [related, setRelated] = useState(products.slice(0, 4));

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      
      // Find related products from the same brand or category
      const relatedProducts = products
        .filter(p => 
          (p.brand === product.brand || p.category === product.category) && 
          p.id !== product.id
        )
        .slice(0, 4);
      
      setRelated(relatedProducts);
    }

    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button>Browse All Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (newValue: number) => {
    if (newValue >= 1 && newValue <= product.stock) {
      setQuantity(newValue);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-accent">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Back to products */}
        <Link to="/products" className="inline-flex items-center text-accent mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to all products
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="w-full h-80 lg:h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 rounded-md overflow-hidden hover:opacity-80 transition-opacity ${selectedImage === img ? 'border-accent' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-500">{product.rating} out of 5</span>
              </div>
              <p className="text-gray-600 mb-4">Brand: <span className="font-medium">{product.brand}</span></p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold mr-3">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <label htmlFor="quantity" className="block text-sm mb-1 font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="h-8 w-8 rounded-none"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <input
                      type="text"
                      id="quantity"
                      value={quantity}
                      readOnly
                      className="w-10 text-center border-none focus:outline-none"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                      className="h-8 w-8 rounded-none"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="text-sm">
                  <span className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                  {product.stock > 0 && (
                    <span className="text-gray-500 ml-1">
                      ({product.stock} {product.stock === 1 ? 'unit' : 'units'} left)
                    </span>
                  )}
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white"
                disabled={product.stock <= 0}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>

            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-gray-700">{product.description}</p>
              </TabsContent>
              <TabsContent value="features" className="pt-4">
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="pt-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="pb-2">
                      <span className="font-medium text-gray-700">{key}:</span>{' '}
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {related.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">{relatedProduct.brand}</p>
                      <div className="font-bold">${relatedProduct.price.toFixed(2)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
