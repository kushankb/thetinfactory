// All site copy and image references live here, so text edits never touch layout code.
// Images are served from public/images (populated by `npm run fetch-images`).

const base = import.meta.env.BASE_URL;
export const img = (file) => `${base}images/${file}`;

export const site = {
  name: 'The Tin Factory',
  email: 'info@thetinfactory.ca',
  phoneCanada: '+1 778-682-7782',
  phoneIndia: '+91 965-055-5110',
  description:
    'The Tin Factory is a custom-made tin packaging company. We design and manufacture sustainable tin packaging for the circular economy. We are a family-owned and operated sustainable packaging business with offices in Delhi, India and Vancouver, Canada.',
};

export const nav = [
  { to: '/the-why', label: 'The Why' },
  { to: '/the-how', label: 'The How' },
  { to: '/the-what', label: 'The What' },
  { to: '/the-who', label: 'The Who' },
];

export const home = {
  hero: 'The Tin Factory is a custom-made tin packaging company. We design and manufacture sustainable tin packaging for the circular economy.',
  image: { src: 'tins-hero.jpg', alt: 'Rows of coloured tin cans' },
  intro:
    'We are a family-owned and operated sustainable packaging business with offices in Delhi, India and Vancouver, Canada. With over seven decades of experience in designing and manufacturing custom-made tin packaging solutions, we help companies adapt to the needs of a circular economy - moving away from plastic and towards recyclable, renewable, reusable packaging.',
  cta: 'We’d love to work with you!',
};

export const why = {
  title: 'Why go custom-made ?',
  items: [
    { icon: 'why-trash.png', title: 'Environmentally Friendly', text: 'Metal packaging is both highly recyclable and reusable, contributing to a circular economy' },
    { icon: 'why-product.png', title: 'Elevate', text: 'Upscale your product by using sustainable packaging unique to your brand' },
    { icon: 'why-geometric.png', title: 'Distinctive', text: 'Stand out by developing custom packaging designed to suit your product' },
    { icon: 'why-treasure.png', title: 'Durable', text: 'Leverage the longevity and sustainability of your packaging as a reusable keepsake' },
  ],
};

export const how = {
  heroImage: 'design-thinking.png',
  title: 'The Design Process',
  subtitle: 'We work with you throughout the process.',
  steps: [
    { icon: 'how-1-creative-process.png', title: 'Dream it.', lead: 'Brand concept mapping.', text: 'Get your imaginative juices flowing with our full brand and concept design services. We can also work with your existing designs.' },
    { icon: 'how-2-geometric.png', title: 'Shape it.', lead: 'Shape, size, print, and material selection.', text: 'Your wish is our command from the common custom printed circular shapes to fully custom-made shapes and sizes.' },
    { icon: 'how-3-magic-wand.png', title: 'Magic it.', lead: 'Enhance your product.', text: 'Stand out from the crowd with unique colours, print finishes, windows, closures, handles, embossing – we could go on…' },
    { icon: 'how-4-magnifying-glass.png', title: 'Proof it.', lead: 'Approve a physical sample.', text: 'Make sure you like it! We’ll send you a sample of the finalized product.' },
    { icon: 'how-5-cogwheel.png', title: 'Make it.', lead: 'Once approved, we start our engines.', text: 'Send us to work in fulfilling your order and we’ll begin our in-house printing machines and manufacturing lines.' },
    { icon: 'how-6-delivery-truck.png', title: 'Use it.', lead: 'This is the final step of the process.', text: 'From our factory to your door – we deal with that pesky import and export process to make this as easy as possible for you' },
  ],
};

export const what = {
  title: 'What do we do?',
  paragraphs: [
    'We make tin packaging in all shapes, sizes, colours, prints, and finishes. Our clients are in the food industry, cosmetics, pharmaceuticals, and fashion, among others. Our team can work with you to design custom-made packaging unique to your needs and your brand.',
    'We will walk you through the process from packaging design concept, through to choosing your shape, size, and finish, and right until your packaging reaches your door!',
  ],
  gallery: [
    'Brow_2.jpg', 'Benetton_1.jpg', 'Tube_1.jpg', 'BlueYellow_1.jpg', 'Magic_1.jpg', 'Milkshake_1.jpg',
    'Woodland_2.jpg', 'Yag_3.jpg', 'London_3.jpg', 'Brow_1.jpg', 'London_4.jpg', 'London_5.jpg',
    'Kahwa_2.jpg', 'Desire_1.jpg', 'Einstein_1.jpg', 'Circular_1.jpg', 'DSC_9077.jpg', 'Black_1.jpg',
    'DSC_9140.jpg', 'DSC_9069.jpg', 'DSC_9040.jpg', 'DSC_9028.jpg',
  ],
};

export const who = {
  image: { src: 'tins-who.jpg', alt: 'Silver tin lids on a bed of leaves' },
  title: 'Who we are?',
  paragraphs: [
    'We are a family-owned and operated business originally based in Delhi, India and now with an office in Vancouver, Canada. Our grandfather started this business in the 1950s and it has passed through the generations to our father, who now continues to work with us, his two sons.',
    'Over the years, our business has evolved from one developed to provide simple packaging solutions, to the complex custom-made products we make today. We have also turned our business towards the sustainable solutions needed for an environment overwhelmed with one-time-use plastic. Our packaging is built to last, to be reused and, if not, to be recycled in full. We are committed to the circular economy and strive to integrate this principle in our business through and through.',
    'In the last few years, our business has continued to grow exponentially and we now produce packaging for clients in Australia, the United Kingdom, as well as for the Indian market. We are continually seeking to grow our business and would love to work with you!',
  ],
};
