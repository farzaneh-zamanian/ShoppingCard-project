
// SHORTHEN TITLE OD PRODUCTS
const shortenText = title => {
      return title.split(" ").slice(0, 3).join("")
}

// SEARCH PRODUCT 
const searchProducts = (products, searchValue) => {
      if (!searchValue) return products;
      const searchedProducts = products.filter(product => {
            return product.title?.toLowerCase().includes(searchValue?.toLowerCase())
      })
      return searchedProducts;
};

// FILTETR ACCOURDING CATEGORY
const filterProducts = (products, category) => {
      if (!category) return products;
      const filteredProducts = products.filter(product => product.category === category)
      return filteredProducts;
}

// QUERY HANDLER
//currentQuery,newQuery both are object
const createQueryObject = (query, newQuery) => {
      if (newQuery.category === "all") {
            const { category, ...rest } = query;
            // rest is an object tha has all key and value except for category
            return rest;
      }
      if (newQuery.search === "") {
            const { search, ...rest } = query;
            // rest is an object tha has all key and value except for search
            return rest;
      }
      return { ...query, ...newQuery }
}

//   INITIAL QUERY IN RErENDERING PAGE
const initialQuery = (searchParams) => {
      const query = {};
      const category = searchParams.get("category");
      const search = searchParams.get("search");
      if (category) query.category = category;
      if (search) query.search = search;
      return query;
}

//THE TOTOAL PRICE OF SELECTED PRODUCTS
const sumProductsItems = (products) => {
      const productsQuantity = products.reduce((total, product) => total + product.productQuantity, 0)
      const totalPrice = products.reduce((total, product) => total + product.price * product.productQuantity, 0).toFixed(2)

      return { productsQuantity: productsQuantity, totalPrice: totalPrice }

}
//FIND PRODUCT QUANTITY 
const productItemQuantity = (state, id) => {
      const index = state.cartProductsData.findIndex(product => product.id === id)
      if (index === -1) return 0;
      else {
            return state.cartProductsData[index].productQuantity;

      }



}

export {
      shortenText,
      searchProducts,
      filterProducts,
      createQueryObject,
      initialQuery,
      sumProductsItems,
      productItemQuantity
}