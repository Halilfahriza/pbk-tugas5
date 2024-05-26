<template>
  <q-layout view="hHh lpR fFf">
    <!-- Navbar -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          TOKO HOBBIT SPORT
        </q-toolbar-title>
        <q-btn dense flat round icon="shopping_cart" @click="goToCart" />
      </q-toolbar>
    </q-header>

    <!-- Left Drawer -->
    <q-drawer v-model="leftDrawerOpen" side="left" width="200">
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            Products
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            About Us
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <q-page padding class="q-pa-md">
        <!-- Carousel -->
        <q-carousel
          v-model="slide"
          arrows
          infinite
          animated
          control-color="black"
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          height="1000px"
          class="bg-dark text-white shadow-2 rounded-borders"
        >
          <q-carousel-slide v-for="(image, index) in carouselImages" :key="index" :name="index" :img-src="image">
          </q-carousel-slide>
        </q-carousel>

        <!-- Cards -->
        <div class="q-mt-xl row justify-center">
          <q-card v-for="(product, index) in products" :key="product.name" class="my-card q-mb-xl q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <q-img :src="product.image" :alt="product.name" class="my-card-img">
              <q-badge color="red" floating>{{ product.discount }} Flash Sale</q-badge>
            </q-img>
            <q-card-section>
              <div class="text-h6 text-center">{{ product.name }}</div>
              <div class="text-subtitle1 text-center">{{ product.price }}</div>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn flat label="Add to Cart" color="primary" @click="addToCart(product)" />
              <q-btn flat label="Delete" color="negative" @click="deleteProduct(index)" />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          &copy; Toko ULIL
        </q-toolbar-title>
        <div>
          <q-btn flat round icon="facebook" />
          <q-btn flat round icon="twitter" />
          <q-btn flat round icon="instagram" />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const slide = ref(0);
    const carouselImages = [
      'https://st2.depositphotos.com/1320606/8142/v/450/depositphotos_81428860-stock-illustration-sports-champions-emblem.jpg',
      'https://asset-2.tstatic.net/jambi/foto/bank/images/22112017_logo-liga-champions_20171121_161440.jpg'
      
    ];
    const products = ref([
      { name: 'MANCHESTER UNITED HOME 23/24', price: 'Rp.300K', image: 'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-home-shirt-2023-24-with-bfernandes-8-printing_ss5_p-14404730+pv-1+u-jpdjguarmhz0j9yrgobn+v-sggi6hvumcy43coeydut.jpg?_hv=2&w=900', discount: '20%' },
      { name: 'MANCHESTER CITY HOME 24/25', price: 'Rp. 350K', image: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw795d2ef7/images/large/701230869CP004_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit', discount: '15%' },
      { name: 'ARSENAL HOME 24/25', price: 'Rp. 200K', image: 'https://i1.adis.ws/i/ArsenalDirect/mit6141_f?$pdpMainZoomImage$', discount: '10%' },
      { name: 'MENS UCL FINAL LONDON 24', price: 'Rp. 200K', image: 'https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMT0314-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50', discount: '15%' },
      { name: 'REAL MADRID HOME JUDE BELLINGHAM 23/24', price: 'Rp. 350K', image: 'https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FShop%2520by%2520Player%2Frmcfmz0126-real-madrid-mens-home-shirt-23-24-white-5-bellingham.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=384&q=50', discount: '15%' },
      { name: 'LIVERPOOL HOME 24/25', price: 'Rp.250K', image: 'https://store.liverpoolfc.com/media/catalog/product/cache/cc385717305e889e66982f8e328f66a0/f/n/fn8776g_1.jpg', discount: '10%' },
      { name: 'THIRD MANCHESTER UNITED 23/24', price: 'Rp. 250K', image: 'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-shirt-2023-24-womens_ss5_p-13384962+pv-1+u-iilqj8ihajdphwcnhvxd+v-xpxtr3ftqtkk3iidj93t.jpg?_hv=2&w=900', discount: '20%' },
      { name: 'BAYERN MUNCHEN HOME 23/24', price: 'Rp. 300K', image: 'https://images.footballfanatics.com/bayern-munich/fc-bayern-adidas-home-authentic-shirt-2023-24_ss4_p-13375709+u-wl1sbt9ku5q0yrkm9ua0+v-a40704c4ce1e4e2aa9501a55c074dde6.jpg?_hv=2&w=900', discount: '20%'}
    ]);
    const cart = ref([]);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const goToCart = () => {
      console.log('Navigating to cart...');
      // Logic untuk membuka halaman keranjang atau menampilkan keranjang
    };

    const addToCart = (product) => {
      cart.value.push(product);
      console.log(`${product.name} telah ditambahkan ke keranjang`);
    };

    const deleteProduct = (index) => {
      products.value.splice(index, 1);
      console.log(`Product at index ${index} has been deleted`);
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      slide,
      carouselImages,
      products,
      addToCart,
      goToCart,
      deleteProduct
    };
  }
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.my-card-img {
  border-radius: 10px 10px 0 0;
  height: 200px;
}

.rounded-borders {
  border-radius: 10px;
}

.q-footer {
  border-top: 1px solid #7a0085;
}
</style>
