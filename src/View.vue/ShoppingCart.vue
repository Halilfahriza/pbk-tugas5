<template>
    <q-page padding class="q-pa-md">
      <div class="q-pa-md q-gutter-md">
        <div v-if="cart.length === 0" class="text-h6 text-center q-my-md">
          Your cart is empty.
        </div>
        <q-card v-for="(item, index) in cart" :key="index" class="q-mb-md">
          <q-card-section>
            <div class="row">
              <q-img :src="item.image" :alt="item.name" class="cart-item-img" />
              <div class="col">
                <div class="text-h6">{{ item.name }}</div>
                <div class="text-subtitle1">{{ item.price }}</div>
              </div>
              <q-btn flat round icon="delete" @click="removeFromCart(index)" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const cart = ref([]);
  
      // Add mock data for demonstration purposes.
      cart.value = [
        { name: 'Baju Kaos 1', price: 'Rp. 100K', image: 'https://th.bing.com/th/id/OIP.0J-HAj7uzUfE-_dVV_reBQAAAA?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { name: 'Baju Kaos 2', price: 'Rp. 200K', image: 'https://th.bing.com/th/id/OIP.Fndm_SktZ9bIAjj4cmEhVgHaHa?w=185&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      ];
  
      const removeFromCart = (index) => {
        cart.value.splice(index, 1);
      };
  
      return {
        cart,
        removeFromCart,
      };
    }
  };
  </script>
  
  <style>
  .cart-item-img {
    width: 100px;
    height: 100px;
  }
  </style>
  