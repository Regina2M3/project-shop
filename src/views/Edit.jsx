const React = require('react');
const Layout = require('./Layout');

module.exports = function Edit({ good }) {
  return (
    <Layout>
      <h1>Внеси изменения:</h1>

      <main className="form-wrapper" role="main">
        <form name="editGood" id={good.id} className="edit-form">
          <label htmlFor="good_name_input">Product name:</label>
          <input
            className="edit-input"
            id="good_name_input"
            name="name"
            type="text"
            value={good.name}
          />

          <label htmlFor="category_input">Category:</label>
          <input
            className="edit-input"
            id="cat_input"
            name="categoryId"
            type="text"
            value={good.category}
          />

          <label htmlFor="description_input">Description:</label>
          <input
            className="edit-input"
            id="desc_input"
            name="description"
            type="text"
            value={good.description}
          />

          <label htmlFor="price_input">Price:</label>
          <input
            className="edit-input"
            id="price_input"
            name="price"
            type="text"
            value={good.price}
          />

          <label htmlFor="amount_input">Amount:</label>
          <input
            className="edit-input"
            id="amount_input"
            name="amount"
            type="text"
            value={good.amount}
          />

          <label htmlFor="pic_input">Pic url::</label>
          <input
            className="edit-input"
            id="pic_input"
            name="picture"
            type="text"
            value={good.picture}
          />

          <button
            type="submit"
            // value="Update Good"
            className="button"
            style={{
              width: '120px',
              alignSelf: 'center',
            }}
          >update</button>
        </form>
      </main>
      <script defer src="/js/edit.js" />
    </Layout>
  );
};
