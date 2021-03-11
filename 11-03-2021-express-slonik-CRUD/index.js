const faker = require('faker')

const vehicle = () => {
  for(let [k, v] of Object.entries(faker.vehicle)) {
    console.info(`> ${k}: ${v()}`)
  }
}

const commerce = () => {
  for(let [k, v] of Object.entries(faker.commerce)) {
    console.info(`> ${k}: ${v()}`)
  }
}

const finance = () => {
  for(let [k, v] of Object.entries(faker.finance)) {
    console.info(`> ${k}: ${v()}`)
  }
}

vehicle()
