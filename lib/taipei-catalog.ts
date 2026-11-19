export type CatalogPage = {
  page: number;
  large: string;
  thumb: string;
};

export const TAIPEI_SHOW = {
  title: "The Spirit of Asia in Coral",
  venue: "Taipei Fine Arts Museum",
  dates: "August 6 – September 4, 1988",
  flipbookPath: "/images/spirit-of-asia-in-coral/index.html?embed=1",
} as const;

const LARGE_BASE = "/images/spirit-of-asia-in-coral/files/large";
const THUMB_BASE = "/images/spirit-of-asia-in-coral/files/thumb";

export const catalogPages: CatalogPage[] = [
  { page: 1, large: "fef111aa760dec8cf5ad893c30bf58f1.webp", thumb: "706bd49b3ee0032b526ff39ce00a4152.webp" },
  { page: 2, large: "9c4c12e82146c13b738d01df748f2b2e.webp", thumb: "a0a41e6d6db09f311bac1192361f2bfd.webp" },
  { page: 3, large: "ca84be3e87b43d93955ebaad6f16792f.webp", thumb: "173a6a530ce7d507dd20769050bf8f9a.webp" },
  { page: 4, large: "f7e9480b2a82679f74d59a7c6aae2fb8.webp", thumb: "ff6143a8aa30b94c1efd60b500735461.webp" },
  { page: 5, large: "4f58c07f00ef34814629f9f7b7a9a73a.webp", thumb: "60fe6a31f0f50221fe0882a32035cb15.webp" },
  { page: 6, large: "81882b64f06e6100c7c9b264979d3d90.webp", thumb: "eab56510d9ca5a12b3b9d91f1ece812c.webp" },
  { page: 7, large: "f5373c422f8094df0e523500ee0ac189.webp", thumb: "d12b6b75a6b1241483b2b50b84d9822c.webp" },
  { page: 8, large: "1cdedc231365815414daf4bcfd10ca75.webp", thumb: "339f406aaba81df36b12416e4ac1d2a4.webp" },
  { page: 9, large: "271b7bba5f1173afce4e4bfd7a6f55ea.webp", thumb: "c1665f00d46f987861bbca8c9bdc48c6.webp" },
  { page: 10, large: "b9edb0128175bd9a79fc84882f468737.webp", thumb: "827c6711a2d4788336054e75a2982724.webp" },
  { page: 11, large: "a8a1f23219178eb443ad6aac4ffaae80.webp", thumb: "c4bea22410caaaf83500ba6eafa5b8a8.webp" },
  { page: 12, large: "93a0a9cd26f915ed53dda304cee3da4f.webp", thumb: "9bcbb6afd514a4664807d0cd191538e1.webp" },
  { page: 13, large: "349c1f6d704652fa5fc2ceea9680cc33.webp", thumb: "a54ff476e0919b76f67d952c3c4c94db.webp" },
  { page: 14, large: "57a9602dd641ce47a241d5e2bbfc7bbf.webp", thumb: "fe398bc2ad68e26c7e93504f1f95dd40.webp" },
  { page: 15, large: "cd73811a2e45495f91e259931eab8448.webp", thumb: "74ce0ff7d4dd15faed393fb97522801d.webp" },
  { page: 16, large: "9f51e8285f479c0dca2c49fbfe7abccd.webp", thumb: "8cbc817ff6eedb853a66786868235dc6.webp" },
  { page: 17, large: "e7423b0fb6d022536e055929c6981e19.webp", thumb: "df04c8ab59a566a059591a42d84132bb.webp" },
  { page: 18, large: "29b4d2d2c12c8cf238bafa0f8ca04731.webp", thumb: "cc3079f1b4be2ca23ef0877a197cd7f9.webp" },
  { page: 19, large: "024311116ba52c9e4d37ac0c6b503f18.webp", thumb: "d8210489c45d06b02acf03860e1bfdd0.webp" },
  { page: 20, large: "e96ac9f665f54ac5cc15358472c7f59e.webp", thumb: "a8f5fbe915ce9f87926a181e803601cb.webp" },
  { page: 21, large: "5f943f56b52436e11e0f2e2efbc9787c.webp", thumb: "2e9c09c7d08a1e9d4a56ed70d7713458.webp" },
  { page: 22, large: "e40ca6810ee2b97e9eec6afbcb43003b.webp", thumb: "ea13d9b0d3cf794f6c21b746137c60bd.webp" },
  { page: 23, large: "1fa920cbfadc9aa5ff672236fcabe249.webp", thumb: "f497c9d03a8033461bfbeb6e45b5faf7.webp" },
  { page: 24, large: "c6762d93ed88308e60ea01a6ae04400b.webp", thumb: "a94ef891ab9d66a8f750f561f3581a4c.webp" },
  { page: 25, large: "bed3758faf5f0313a880eef391de4bb9.webp", thumb: "69a58cc804e5d25d28c27d5877477940.webp" },
  { page: 26, large: "e0f9914a60ddc297fe805ae0887f9129.webp", thumb: "b09d36cf077199c267b23e9ede874e7b.webp" },
  { page: 27, large: "9ce6eb94d58d907c93abd8e95ab25a7e.webp", thumb: "fadef49033677a26d3946ac7b2698e7c.webp" },
  { page: 28, large: "12bb6dd55776c8cb8eae80adf19dc533.webp", thumb: "c8c9939ac04f201ca7b8b88f65e748ce.webp" },
  { page: 29, large: "f2844504b16fe8231a3c21b06378b8aa.webp", thumb: "88c40e453a49815d321b45fdb92890d0.webp" },
  { page: 30, large: "c5646a020eb1d1ffcddfe8a3604ad9bf.webp", thumb: "dd50f53e8aa7cd1e2f800a379d4acfd5.webp" },
  { page: 31, large: "bb17e25b35e08c5ca7ccd8df215b587e.webp", thumb: "0a3cf7d818074aba8d3a2a7582762de9.webp" },
  { page: 32, large: "6fd1a5d12c5e42fc372e3b495cb1d7c6.webp", thumb: "ec0685ff3d7ab1ef3071ea97b048a6aa.webp" },
  { page: 33, large: "3fe77aa27bb2e3af52cec057863233dd.webp", thumb: "cb3f6e99a972e732e7a37af8cdcecbbd.webp" },
  { page: 34, large: "ada1377119133a1d2b1e21fec12c8485.webp", thumb: "eed3314c5e2c0b10cba81fbab4399b75.webp" },
  { page: 35, large: "9393c39964b043991df7cd05251fc54e.webp", thumb: "ab96675137377e6b9669098dd295a513.webp" },
  { page: 36, large: "7a0af8441524e37f7b9dc37b4ffb82a0.webp", thumb: "51e78a74576a362bbde562994e5bb5de.webp" },
  { page: 37, large: "dcdacdaa1c7fee154e156424c2d38988.webp", thumb: "db5a18519559032e1ae57c8f40d881d6.webp" },
  { page: 38, large: "c4c71aaa969682c978484b4c5879d1f9.webp", thumb: "5a6542602ceb21a16349da6f0e0d5115.webp" },
  { page: 39, large: "a35c316fff8c4afcddbe9330dde38693.webp", thumb: "8db23a06623044bc678e95624b1ed2ec.webp" },
  { page: 40, large: "ae561be59face29a312c7848ade31c9f.webp", thumb: "9300c223ae2e564ca19369889c6b3a2d.webp" },
  { page: 41, large: "9883cc1b62138953f5bea824782f1940.webp", thumb: "cd40e87e06f7e1fedb09865a93d47ab5.webp" },
  { page: 42, large: "d619699498cd30edfda50997ff135784.webp", thumb: "b62876df87bc912cf84a42eae9ea4f7d.webp" },
  { page: 43, large: "763ea56a42e56c799d5865d003f13dc9.webp", thumb: "f37b91225e75d00b81bdf9c80db77f0f.webp" },
  { page: 44, large: "fd67caa35e9fc45a9bc7d7c05b4b1c90.webp", thumb: "b05f495059e37e9272f3875d8dd3c73e.webp" },
  { page: 45, large: "982d4961e3054641e74f43096daff552.webp", thumb: "b2df412ac14bed90436d9bc6212138a9.webp" },
  { page: 46, large: "e8151bc39e2ebaea9290347c086a280b.webp", thumb: "1f799e532022ad6fbd746c3bb94b5fba.webp" },
];

export function catalogSrc(page: CatalogPage, size: "large" | "thumb") {
  return size === "large"
    ? `${LARGE_BASE}/${page.large}`
    : `${THUMB_BASE}/${page.thumb}`;
}

// Cover plus the sculpture plates. Essays, the portrait, studio shots, lists, and the colophon are left out.
const artworkPageNumbers = new Set<number>([
  1,
  ...Array.from({ length: 32 }, (_, index) => index + 14),
]);

export const artworkPages = catalogPages.filter((page) => artworkPageNumbers.has(page.page));
