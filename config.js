/* ═══════════════════════════════════════════════════════════════
   CONFIG.JS — श्री आर्यन स्वीट्स
   ─────────────────────────────────────────────────────────────
   SECURE VERSION — No Firebase keys, No Admin passwords
   Sirf shop info + API URL yahan hai.
   ═══════════════════════════════════════════════════════════════ */

var CONFIG = {

  /* ─────────────────────────────────────────
     1. SHOP INFO
     ───────────────────────────────────────── */
  shop: {
    name_hindi:      'श्री आर्यन',
    name_hindi2:     'धनराज स्वीट्स',
    name_english:    'Shree Aryan Sweets',
    tagline:         'Authentic North/South Indian Flavours',
    address_line1:   'SH 88, Baheri Bazar, Baheri,',
    address_line2:   'Darbhanga, Bihar — 847105',
    phone_display:   '+91 79923 29377',
    phone_call:      '+917992329377',
    email:           '',
    google_map_embed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0!2d86.0480939!3d25.9464852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ede9fad16789b7:0x12879d8abcdd2fdf!2sShree%20Aryan%20Sweet%20Home!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin',
    google_map_link: 'https://www.google.com/maps',
    year_established:2026,
  },

  /* ─────────────────────────────────────────
     2. CONTACT / SOCIAL
     ───────────────────────────────────────── */
  contact: {
    whatsapp: '917992329377',   // Country code + number (no + no spaces)
    upi_id:   '7992329377@ybl',
    instagram:'',
    facebook: '',
  },

  /* ─────────────────────────────────────────
     3. BACKEND API URL
     ─────────────────────────────────────────
     Cloud Function deploy karne ke baad woh URL yahan daalo.
     Example: 'https://us-central1-gold-setup-474311-h5.cloudfunctions.net/aryanApi'
     ───────────────────────────────────────── */
  api: {
  base_url: 'https://us-central1-gold-setup-474311-h5.cloudfunctions.net/aryanApi',
},

  /* ─────────────────────────────────────────
     4. DELIVERY SETTINGS
     ───────────────────────────────────────── */
  delivery: {
    charge:    10,
    free_above:200,
    range_km:  10,
    shop_lat:  25.9464852,
    shop_lng:  86.0480939,
    pins: [
      '847105','847101','847102','847103','847104',
      '847106','847107','847108','847115','847116',
      '847203','847204','847211','847212','847213',
      '847214','847121','847122','847123','847124',
      '847228','847301','847302','847337',
      '847401','847402','847403','847404','847405',
      '847411','847421','847422','847423','847424',
      '847425','847426','847427','847428','847429',
      '842001','842002','842003'
    ],
  },

  /* ─────────────────────────────────────────
     5. COUPON SETTINGS
     ───────────────────────────────────────── */
  coupons: {
    min_discount: 1,
    max_discount: 10,
    prefixes: [
      'ARYAN','SWEET','DOSA','IDLI','CHAI',
      'MITHI','LUCKY','TASTY','YUMMY','FRESH',
      'DHANU','SPICE','DELHI','BIHAR','GOLD',
      'HAPPY','FEAST','TREAT','ENJOY','SAVOUR'
    ],
  },

  /* ─────────────────────────────────────────
     6. THEME / COLORS
     ───────────────────────────────────────── */
  theme: {
    gold:        '#F5C518',
    gold_light:  '#FFD84D',
    gold_dark:   '#C9960C',
    dark:        '#0D0D00',
    dark2:       '#161600',
    dark3:       '#1F1F00',
    cream:       '#FFF8DC',
    cream2:      '#FFF3C4',
    muted:       '#A89B5E',
    green:       '#4CAF50',
    red:         '#E53935',
    font_display:'Cormorant Garamond',
    font_body:   'Outfit',
  },

  /* ─────────────────────────────────────────
     7. HERO SECTION
     ───────────────────────────────────────── */
  hero: {
    stat1_num:   '63+',  stat1_label: 'Menu Items',
    stat2_num:   '20',   stat2_label: 'Tables',
    stat3_num:   '4.8★', stat3_label: 'Google Rating',
    badge_text:  'Authentic North & South Indian',
    title_line1: 'Where Every Bite',
    title_line2: 'Tells a',
    title_accent:'Story',
    subtitle:    'खुशबुओं और स्वाद की अनोखी दुनिया में आपका स्वागत है — करारी डोसा, मुलायम इडली और कुरकुरी कचौरी के साथ हर कौर में भारत की असली जादू। लज़ीज़ केक और मिठाइयों के साथ आइए, अपने पलों को और भी खास बनाइए! 🙏',
  },

  /* ─────────────────────────────────────────
     8. TABLE BOOKING
     ───────────────────────────────────────── */
  tables: {
    total:      20,
    pre_booked: [3, 7, 11, 15, 18],
  },

  /* ─────────────────────────────────────────
     9. GOOGLE REVIEWS
     ───────────────────────────────────────── */
  reviews: {
    rating:      '4.8',
    total_count: '200+',
    google_link: 'https://www.google.com/maps',
  },

};

/* ═══════════════════════════════════════════
   MENU DATA — Item add/remove/change karne ke liye yahan edit karo.
   cat: 'breakfast' | 'sweets' | 'cake' | 'snacks' | 'drinks'
   ═══════════════════════════════════════════ */
var MENU = [
// Breakfast
  {id:'d1',  name:'Chole Bhature',       emoji:'🥟', cat:'breakfast', price:50,  unit:'Per plate (2 pcs)',  desc:'Fluffy bhature with spiced chole. A hearty North-Indian favourite.',            img:'images/breakfast/Chole_Bhature.jpg'},
  {id:'d2',  name:'Dosa',                emoji:'🍚', cat:'breakfast', price:50,  unit:'Per plate',          desc:'Classic thin crispy rice & lentil crepe with sambar & chutney.',                img:'images/breakfast/dosa.webp'},
  {id:'d3',  name:'Paper Dosa',          emoji:'🥞', cat:'breakfast', price:50,  unit:'Per plate',          desc:'Extra-thin, extra-crispy version of the classic dosa.',                         img:'images/breakfast/Paper_dosa.webp'},
  {id:'d4',  name:'Masala Dosa',         emoji:'🫔', cat:'breakfast', price:60,  unit:'Per plate',          desc:'Crispy golden dosa stuffed with spiced potato masala filling.',                  img:'images/breakfast/Masala_dosa.webp'},
  {id:'d5',  name:'Paneer Masala Dosa',  emoji:'🧈', cat:'breakfast', price:80,  unit:'Per plate',          desc:'Dosa stuffed with rich paneer masala. A deluxe classic.',                       img:'images/breakfast/Paneer_Masala.webp'},
  {id:'d6',  name:'Manchurian',          emoji:'🍪', cat:'breakfast', price:30,  unit:'Per bowl',           desc:'Crispy veggie balls tossed in tangy Manchurian sauce.',                         img:'images/breakfast/Manchurian.jpg'},
  {id:'d7',  name:'Paneer Manchurian',   emoji:'🍩', cat:'breakfast', price:50,  unit:'Per bowl',           desc:'Soft paneer cubes in spicy Indo-Chinese Manchurian gravy.',                     img:'images/breakfast/Paneer_Manchurian.webp'},
  {id:'d8',  name:'Paneer Chilli',       emoji:'🍕', cat:'breakfast', price:80,  unit:'Per bowl',           desc:'Crispy paneer tossed with bell peppers in a chilli sauce.',                     img:'images/breakfast/Paneer_Chilli.jpg'},
  {id:'d9',  name:'Pizza',               emoji:'🍕', cat:'breakfast', price:50,  unit:'Per slice',          desc:'Topped with onion, tomato, green chilli & coriander.',                          img:'images/breakfast/pizza.jpg'},
  {id:'d10', name:'Paneer Pizza',        emoji:'🍕', cat:'breakfast', price:80,  unit:'Per slice',          desc:'Loaded with fresh paneer, veggies & mozzarella.',                               img:'images/breakfast/paneer_pizza.webp'},
// Sweets
  {id:'s1',  name:'Kaju Barfi',          emoji:'🍮', cat:'sweets',    price:1200, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/kaju-katli.png'},
  {id:'s2',  name:'Ghee Laddu',          emoji:'🟡', cat:'sweets',    price:500,  unit:'Per kg', desc:'Traditional besan laddus made with pure desi ghee and cardamom.',                img:'images/sweets/ghee_laddu.jpeg'},
  {id:'s3',  name:'Gulab Jamun',         emoji:'🫙', cat:'sweets',    price:300,  unit:'Per kg',  desc:'Soft khoya balls soaked in rose-cardamom sugar syrup. Served warm.',             img:'images/sweets/Gulab_Jamun.jpg'},
  {id:'s4',  name:'Motichoor Laddu',     emoji:'🟠', cat:'sweets',    price:200,  unit:'Per kg',           desc:'Tiny boondi laddus bound with saffron syrup and dry fruits.',                    img:'images/sweets/motichoor_ladoo.jpg'},
  {id:'s5',  name:'Sukha Rasgulla',      emoji:'⚪', cat:'sweets',    price:300,  unit:'Per kg',  desc:'Spongy chhena balls soaked in light sugar syrup. Bengali special.',               img:'images/sweets/sukha_rasgulla.jpeg'},
  {id:'s6',  name:'Kalakand',            emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/kalakand.jpeg'},
  {id:'s7',  name:'Cream Chamcham',      emoji:'🍮', cat:'sweets',    price:400, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/creem_chamcham.png'},
  {id:'s8',  name:'Cream Chop',          emoji:'🍮', cat:'sweets',    price:50, unit:'Per piece',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/creem_chop.jpg'},
  {id:'s9',  name:'Sponge',              emoji:'🍮', cat:'sweets',    price:300, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/spange.webp'},
  {id:'s10', name:'Chamcham',            emoji:'🍮', cat:'sweets',    price:400, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/chamcham.jpeg'},
  {id:'s11', name:'Peda',                emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/peda.jpeg'},
  {id:'s12', name:'Khoya Barfi',         emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/khoya_slice.jpeg'},
  {id:'s13', name:'Milk Cake',           emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/milk.jpeg'},
  {id:'s14', name:'Chocolate Barfi',     emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/Chocolate_barfi.webp'},
  {id:'s15', name:'Khoya Roll',          emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/khoya_roll.jpg'},
  {id:'s16', name:'Khoya Slice',         emoji:'🍮', cat:'sweets',    price:600, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/khoya_slice.jpeg'},
  {id:'s17', name:'Coconut Dry Fruit Laddu', emoji:'🍮', cat:'sweets', price:800, unit:'Per kg',          desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/coconut_dry_fruit.jpg'},
  {id:'s18', name:'Dry Fruit Laddu',     emoji:'🍮', cat:'sweets',    price:1200, unit:'Per kg',          desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/Dry_fruits.jpg'},
  {id:'s19', name:'Kaju Pista Roll',     emoji:'🍮', cat:'sweets',    price:2000, unit:'Per kg',          desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/kaju_pista_roll.jpg'},
  {id:'s20', name:'Raskadam',            emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/raskadam.jpeg'},
  {id:'s21', name:'Kaju Pan',            emoji:'🍮', cat:'sweets',    price:1200, unit:'Per kg',          desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/kaju_pan.jpg'},
  {id:'s22', name:'Gee Besan Laddu',     emoji:'🍮', cat:'sweets',    price:500, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/ghee_besan_ladoo.jpeg'},
  {id:'s23', name:'Gond Laddu',          emoji:'🍮', cat:'sweets',    price:6, unit:'Per piece',          desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/Gond_laddu.jpg'},
  {id:'s24', name:'Pinni Laddu',         emoji:'🍮', cat:'sweets',    price:6, unit:'Per piece',          desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/pinni-laddo.png'},
  {id:'s25', name:'Moti Pak',            emoji:'🍮', cat:'sweets',    price:600, unit:'Per kg',           desc:'Premium cashew fudge with silver leaf. Melt-in-mouth classic.',                  img:'images/sweets/moti_pak.jpg'},
// Cake
  {id:'c1',  name:'Chocolate Cake',      emoji:'🎂', cat:'cake',      price:300, unit:'Per pound',        desc:'Rich dark chocolate layer cake with ganache frosting.',                          img:'images/cake/Chocolate_Cake.webp'},
  {id:'c2',  name:'Vanilla Cream Cake',  emoji:'🍰', cat:'cake',      price:320, unit:'Per pound',        desc:'Light vanilla sponge with fresh cream and fruit topping.',                       img:'images/cake/Vanilla_Cake.jpeg'},
  {id:'c3',  name:'Pineapple Cake',      emoji:'🍍', cat:'cake',      price:350, unit:'Per pound',        desc:'Classic pineapple pastry with fresh cream and pineapple chunks.',                 img:'images/cake/Pineapple_Cake.webp'},
  {id:'c4',  name:'Black Forest Cake',   emoji:'🍒', cat:'cake',      price:350, unit:'Per pound',        desc:'German chocolate cake with cherries, cream and chocolate shavings.',              img:'images/cake/Black_Forest_Cake.webp'},
  {id:'c5',  name:'Butterscotch Cake',   emoji:'🧁', cat:'cake',      price:420, unit:'Per pound',        desc:"Smooth butterscotch cream cake with crunchy praline. Kids' favourite.",           img:'images/cake/Butterscotch_cake.webp'},
  {id:'c6',  name:'White Forest Cake',   emoji:'🧁', cat:'cake',      price:400, unit:'Per pound',        desc:"Smooth butterscotch cream cake with crunchy praline. Kids' favourite.",           img:'images/cake/White_Forest_cacke.webp'},
  {id:'c7',  name:'Strawberry Cake',     emoji:'🍒', cat:'cake',      price:430, unit:'Per pound',        desc:"Smooth butterscotch cream cake with crunchy praline. Kids' favourite.",           img:'images/cake/Strawberry_Cake.webp'},
  {id:'c8',  name:'Choco Chips Cake',    emoji:'🍒', cat:'cake',      price:400, unit:'Per pound',        desc:'Moist red velvet cake with cream cheese frosting.',                              img:'images/cake/Choco_Chips_cake.webp'},
  {id:'c9',  name:'Fruits Cake',         emoji:'🍒', cat:'cake',      price:450, unit:'Per pound',        desc:'Moist red velvet cake with cream cheese frosting.',                              img:'images/cake/Fruit_cake.jpg'},
  {id:'c10', name:'Truffle Cake',        emoji:'🍒', cat:'cake',      price:500, unit:'Per pound',        desc:'Moist red velvet cake with cream cheese frosting.',                              img:'images/cake/Truffle_cake.webp'},
  {id:'c11', name:'Khoya Cake',          emoji:'🍒', cat:'cake',      price:700, unit:'Per pound',        desc:'Moist red velvet cake with cream cheese frosting.',                              img:'images/cake/Khoya_cake.webp'},
  {id:'c12', name:'Pastry Cake',         emoji:'🍒', cat:'cake',      price:50,  unit:'Per piece',        desc:'Moist red velvet cake with cream cheese frosting.',                              img:'images/cake/Pastry.webp'},
  {id:'c13', name:'Mofinse Cake',        emoji:'🍒', cat:'cake',      price:50,  unit:'Per pound',        desc:'Moist red velvet cake with cream cheese frosting.',                              img:'images/cake/Mopinse_cake.webp'},
// Snacks
  {id:'n1',  name:'Samosa',              emoji:'🔺', cat:'snacks',    price:8,  unit:'Per piece',          desc:'Crispy pastry filled with spiced potatoes and peas. With green chutney.',        img:'images/snacks/samosa.jpeg'},
  {id:'n2',  name:'Kachori',             emoji:'🥙', cat:'snacks',    price:8,  unit:'Per piece',          desc:'Crispy fried pastry stuffed with spiced lentil filling.',                        img:'images/snacks/kachori.webp'},
  {id:'n3',  name:'Litti',               emoji:'🌶', cat:'snacks',    price:8,  unit:'Per piece',          desc:'Green chillies dipped in spiced gram flour batter, deep fried golden.',          img:'images/snacks/litti.webp'},
  {id:'n4',  name:'Cutlet',              emoji:'🍞', cat:'snacks',    price:6,  unit:'Per piece',          desc:'Bread slices coated in spiced batter, crispy deep fried till golden.',            img:'images/snacks/Cutlet.webp'},
  {id:'n5',  name:'Samosa Chat',         emoji:'🧡', cat:'snacks',    price:25, unit:'Per plate',          desc:'Sweet semolina halwa with saffron, cashews and generous ghee.',                   img:'images/snacks/samosa_chat.webp'},
  {id:'n6',  name:'Chowmein',            emoji:'🍔', cat:'snacks',    price:50, unit:'Per plate',          desc:'Spiced potato vada inside a soft pav bun with zesty green chutney.',              img:'images/snacks/Chowmein.webp'},
  {id:'n7',  name:'Paneer Chowmein',     emoji:'🍔', cat:'snacks',    price:80, unit:'Per plate',          desc:'Spiced potato vada inside a soft pav bun with zesty green chutney.',              img:'images/snacks/Paneer_Chowmein.webp'},
  {id:'n8',  name:'Burger',              emoji:'🍔', cat:'snacks',    price:50, unit:'Per piece',          desc:'Spiced potato vada inside a soft pav bun with zesty green chutney.',              img:'images/snacks/Burger.webp'},
  {id:'n9',  name:'Paneer Burger',       emoji:'🍔', cat:'snacks',    price:80, unit:'Per piece',          desc:'Spiced potato vada inside a soft pav bun with zesty green chutney.',              img:'images/snacks/Paneer_Burger.webp'},
// Drinks
  {id:'r1',  name:'Filter Coffee',       emoji:'☕', cat:'drinks',    price:15, unit:'Per cup',            desc:'Traditional South Indian filter coffee served in davara-tumbler.',                img:'images/drinks/filter_coffee.webp'},
  {id:'r2',  name:'Masala Chai',         emoji:'🍵', cat:'drinks',    price:15, unit:'Per cup',            desc:'Spiced ginger tea brewed with cardamom, cinnamon and cloves.',                    img:'images/drinks/masala_chai.webp'},
  {id:'r3',  name:'Fresh Lime Soda',     emoji:'🥛', cat:'drinks',    price:15, unit:'Per glass',          desc:'Refreshing lime soda with a pinch of chaat masala.',                             img:'images/drinks/lemon_soda.webp'},
  {id:'r4',  name:'Coca-Cola',           emoji:'🥤', cat:'drinks',    price:35, unit:'Per can',            desc:'Ice-cold Coca-Cola can.',                                                        img:'images/drinks/cocacola.webp'},
  {id:'r5',  name:'Sprite',              emoji:'🥤', cat:'drinks',    price:35, unit:'Per can',            desc:'Chilled Sprite — crisp & refreshing.',                                          img:'images/drinks/sprites.webp'},
  {id:'r6',  name:'Thums Up',            emoji:'🥤', cat:'drinks',    price:35, unit:'Per can',            desc:'Bold & fizzy Thums Up can.',                                                     img:'images/drinks/ThumsUp.webp'},
];

/* ═══════════════════════════════════════════
   APPLY THEME — CSS variables inject karta hai
   ═══════════════════════════════════════════ */
(function applyTheme() {
  var t = CONFIG.theme;
  var r = document.documentElement.style;
  r.setProperty('--gold',       t.gold);
  r.setProperty('--gold-light', t.gold_light);
  r.setProperty('--gold-dark',  t.gold_dark);
  r.setProperty('--dark',       t.dark);
  r.setProperty('--dark2',      t.dark2);
  r.setProperty('--dark3',      t.dark3);
  r.setProperty('--cream',      t.cream);
  r.setProperty('--cream2',     t.cream2);
  r.setProperty('--muted',      t.muted);
  r.setProperty('--green',      t.green);
  r.setProperty('--red',        t.red);
})();
