/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'shirt',
        },
        {
          title: 'longsleeve',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Goods',
      [
        {
          name: 'tishka',
          category: 1,
          description: 'cool t-shirt',
          price: '5000 rub.',
          amount: 15,
          picture:
            'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=',
        },
        {
          name: 'hoodie White',
          category: 2,
          description: 'cool hoodie',
          price: '8000 rub.',
          amount: 10,
          picture:
            'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Goods', null, {});
  },
};
