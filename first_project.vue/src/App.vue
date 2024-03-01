<script setup>
import { reactive } from 'vue';

const name = "Felipe"
const myObj = {
  name: "felipe",
  favoriteMovie: "Harry Potter"
}

function saysHi(name) {
  return `${name} says hi!`
}

const urlBatmanImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqeYNN4rZEf2rgeQVaIPA1PoiRojad2Viow&usqp=CAU"
const urlSupermanImg = "https://segredosdomundo.r7.com/wp-content/uploads/2020/07/superman-historia-poderes-fraquezas-e-curiosidades.jpg"

const isButtonDisabled = false

const doYouLikeBatman = false
const doYouLikeSuperman = false

const isAuthorized = true


const state = reactive({
  count: 0,
  email: '',
  balance: 5000,
  transferring: 0,


})

function increase() {
  state.count++;
}

function decrease() {
  state.count--;
}

function changeEmail(event) {
  state.email = event.target.value
}

function returnNewBalance() {
  const { balance, transferring } = state;
  return balance - transferring;
}

function validatesTransferValue() {
  const { balance, transferring } = state;
  return balance >= transferring;
}

const names = ['felipe', 'sabrina', 'john', 'andrea'];

</script>

<template>
  <h1>{{ saysHi("Paula") }}</h1>
  <img v-if="doYouLikeBatman" :src="urlBatmanImg" alt="">
  <img v-else-if="doYouLikeSuperman" :src="urlSupermanImg" alt="">
  <h2 v-else>Não curte heróis da DC</h2>

  <h1 v-if="isAuthorized">Bem-vindo</h1>
  <h1 v-else>You don't have an active membership</h1>

  <button :disabled="isButtonActive">Send Message</button>

  <br />
  <hr />


  {{ state.count }}

  <button @click="increase" type="button">+</button>
  <button @click="decrease" type="button">-</button>

  <br />
  <hr />

  {{ state.email }}
  <input type="email" @keyup="changeEmail">

  <br />
  <hr />


  Balance: {{ state.balance }} <br />
  Transferring: {{ state.transferring }} <br />
  New balance: {{ returnNewBalance() }} <br />
  <input class="field" :class="{ invalid: !validatesTransferValue() }" @keyup="event => state.transferring = event.target.value" type="number" placeholder="Amount">
  <button v-if="validatesTransferValue()">Transfer</button>
  <span v-else="">You don't have enough balance for this transaction</span>

  <br />
  <hr />

  <ul>
    <li>
      {{ names }}
    </li>
  </ul>

  <ul>
    <li v-for="name in names">
    {{ name }}
  </li>
  </ul>


</template>

<style scoped>
img {
  max-width: 200px;
}

.invalid {
  outline-color: red;
  border-color: red;
}

.field {
  border: 2px solid #000;
}
</style>
