/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'футболки',
        },
        {
          title: 'свитшоты',
        },
        {
          title: 'носки',
        },
        {
          title: 'стикеры',
        },
        {
          title: 'значки',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Goods',
      [
        {
          name: 'Футболка-оверсайз HAVE NO FEAR, MY CHILD серая',
          categoryId: 1,
          description: 'Состав: 100% хлопок',
          price: '1 850 rub.',
          amount: 25,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4098254063.jpg',
        },
        {
          name: 'Футболка-оверсайз "Кибержмых" белая',
          categoryId: 1,
          description: 'Состав: 100% хлопок',
          price: '1 350 rub.',
          amount: 15,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4099313522.jpg',
        },
        {
          name: 'Футболка-оверсайз TOXIC DEMON',
          categoryId: 1,
          description: 'Состав: 100% хлопок',
          price: '1 250 rub.',
          amount: 15,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/3993003896.jpg',
        },
        {
          name: 'Футболка ВСЕ В МОЕЙ ГОЛОВЕ',
          categoryId: 1,
          description: 'Состав: 100% хлопок',
          price: '1 250 rub.',
          amount: 15,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/3964230693.jpg',
        },
        {
          name: 'Свитшот HAVE NO FEAR, MY CHILD небесно-голубой',
          categoryId: 2,
          description: 'Состав: 80% хлопок, 20% полиэстер. Шелкография.',
          price: '3 850 rub.',
          amount: 20,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4101438761.jpg',
        },
        {
          name: 'Свитшот HAVE NO FEAR, MY CHILD черный',
          categoryId: 2,
          description: 'Состав: 80% хлопок, 20% полиэстер. Шелкография.',
          price: '3 850 rub.',
          amount: 20,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4101462422.jpg',
        },
        {
          name: 'Носки "GOREFIELD"',
          categoryId: 3,
          description: 'Эти носки – ключ к приключению на каждом шагу, смело вносящие в ваш образ нотку безумия и уникальности.',
          price: '450 rub.',
          amount: 35,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4099348698.jpg',
        },
        {
          name: 'Носки МУХОМОРЫ',
          categoryId: 3,
          description: 'Представьте, вы идете по лесу, и вдруг видите загадочный гриб с белыми пятнами. "О, как красиво!" - думаете вы. Нагибаетесь, чтобы рассмотреть получше... и обнаруживаете, что это вовсе не гриб, а ваш носок!',
          price: '450 rub.',
          amount: 35,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4099355282.jpg',
        },
        {
          name: 'Носки АНГЕЛЫ',
          categoryId: 3,
          description: 'Носки с ангелами от нашего бренда в эстетике Dreamcore, мягкие и качественные! Автор дизайна: Анна Мальмстрем',
          price: '490 rub.',
          amount: 30,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/3964230655.jpg',
        },
        {
          name: 'Стикерпак "Yabujincore"',
          categoryId: 4,
          description: 'Виниловый голографический стикерпак с резкой и матовой ламинацией формата. Не боится воды',
          price: '350 rub.',
          amount: 20,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4101527571.jpg',
        },
        {
          name: 'Стикерпак "Грибы" А5',
          categoryId: 4,
          description: 'Виниловый стикерпак с матовой ламинацией и резкой, не стирается, не боится воды',
          price: '350 rub.',
          amount: 40,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4075138670.jpg',
        },
        {
          name: 'Металлический пин "Кумар"',
          categoryId: 5,
          description: 'Металлический пин с двумя креплениями и "бензиновым" покрытием',
          price: '550 rub.',
          amount: 10,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4101991512.jpg',
        },
        {
          name: 'Пин "Козочка" светящийся',
          categoryId: 5,
          description: 'Металлический пин 35м. Светится в ультрафиолете!',
          price: '450 rub.',
          amount: 10,
          picture:
            'https://d2j6dbq0eux0bg-cdn.ecwid.net/images/62872081/4022154166.jpg',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Goods', null, {});
  },
};
