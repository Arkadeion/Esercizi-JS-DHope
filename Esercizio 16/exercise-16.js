function createStore() {
  let storeInventory = [];
    return function (item) {
    storeInventory.push(item['name']);
    console.log(storeInventory);
    return storeInventory;
  }
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };
const blueJeans = { id: 4, name: 'Blue Jeans' };
const greenHoodie = { id: 5, name: 'Green Hoodie' };
const brownBoots = { id: 6, name: 'Brown Boots' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);
dressStore(blueJeans);
dressStore(greenHoodie);


console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
shoesStore(brownBoots);