export type SpiceLevel = "Mild" | "Medium" | "Hot" | "Extra Hot";

export type MenuItem = {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  calories?: number;
  spiceLevels: SpiceLevel[];
};

export const MENU_ITEMS: MenuItem[] = [
  {
    slug: "nashville-hot-sliders",
    name: "Nashville Hot Sliders",
    description: "Two crispy halal chicken sliders with pickles and comeback sauce.",
    price: "$11.99",
    image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1200",
    spiceLevels: ["Mild", "Medium", "Hot", "Extra Hot"],
  },
  {
    slug: "chicken-sando",
    name: "Chicken Sando",
    description: "Buttermilk-fried halal chicken sandwich on a toasted brioche bun.",
    price: "$12.99",
    image: "https://images.pexels.com/photos/2271101/pexels-photo-2271101.jpeg?auto=compress&cs=tinysrgb&w=1200",
    spiceLevels: ["Mild", "Medium", "Hot", "Extra Hot"],
  },
  {
    slug: "crispy-tenders",
    name: "Crispy Tenders",
    description: "Hand-breaded halal tenders served with house sauces.",
    price: "$10.49",
    image: "https://images.pexels.com/photos/18492135/pexels-photo-18492135.jpeg?auto=compress&cs=tinysrgb&w=1200",
    spiceLevels: ["Mild", "Medium", "Hot", "Extra Hot"],
  },
  {
    slug: "mac-attack",
    name: "Mac Attack",
    description: "Creamy mac and cheese topped with spicy crumbs.",
    price: "$8.99",
    image: "https://images.pexels.com/photos/18165942/pexels-photo-18165942.jpeg?auto=compress&cs=tinysrgb&w=1200",
    spiceLevels: ["Mild"],
  },
  {
    slug: "dirty-fries",
    name: "Dirty Fries",
    description: "Loaded fries with chicken, sauce, and pickles.",
    price: "$7.99",
    image: "https://images.pexels.com/photos/4109230/pexels-photo-4109230.jpeg?auto=compress&cs=tinysrgb&w=1200",
    spiceLevels: ["Mild", "Medium", "Hot"],
  },
  {
    slug: "loaded-box",
    name: "Loaded Box",
    description: "The works: sliders, tenders, fries, and sauces.",
    price: "$15.99",
    image: "https://images.pexels.com/photos/628752/pexels-photo-628752.jpeg?auto=compress&cs=tinysrgb&w=1200",
    spiceLevels: ["Mild", "Medium", "Hot", "Extra Hot"],
  },
];


