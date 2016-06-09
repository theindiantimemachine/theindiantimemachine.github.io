var yearval=2005;
var bip=-1;
var counter=0;
var dat=[
  {
    "Name": "Kabhi Aisa Lagta Hai",
    "Link": "Sj51hczJ5Gc",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Yaaron",
    "Link": "LCfvYo3ILG0",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Piya Basanti Re",
    "Link": "XFT2niDEy28",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Aur Ahista",
    "Link": "ty55I66-Mrk",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Maine Payal Hai Chhankai",
    "Link": "0tjVtYtZ384",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Dooba Dooba Rehta Hoon",
    "Link": "Y5OQAIjjrag",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Action Shoes",
    "Link": "ax5Fl7huJZw",
    "Year": 2002,
    "Tags": "Advertisement"
  },
  {
    "Name": "Kaisi Hai Ye Rut Ki Jisme",
    "Link": "3dEbiCjbXfI",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Amul",
    "Link": "tl7Lnb2ocC4",
    "Year": 2004,
    "Tags": "Advertisement"
  },
  {
    "Name": "Maaye Ri",
    "Link": "PffJxdLZ9cI",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Made in India",
    "Link": "IvloHsmi_vg",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Jab Koi Baat Bigad Jaaye",
    "Link": "BAqgHmIwp00",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Bulla Ki Jaana",
    "Link": "lLghKpy60LY",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Shaktimaan",
    "Link": "xiM1-zUDOnc",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Hip Hip Hurray",
    "Link": "BMEjYK7ye_4",
    "Year": 1998,
    "Tags": "Serial"
  },
  {
    "Name": "Just Mohabbat",
    "Link": "lHubJBEs6CY",
    "Year": 1996,
    "Tags": "Serial"
  },
  {
    "Name": "Aakhon Mein",
    "Link": "roJL3mIueTE",
    "Year": 2006,
    "Tags": "Music"
  },
  {
    "Name": "Tanha Dil",
    "Link": "__qkzfWhi6g",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Shaka Laka Boom Boom",
    "Link": "78RbfVlXc7g",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Kasauti Zindagi Kay",
    "Link": "965dXJUU-w8",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Kahin to Hoga",
    "Link": "SVfu4KioI_4",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Remix",
    "Link": "FHgREt1EQfQ",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Star Parivaar",
    "Link": "HHYhLyng-W0",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Hum Paanch",
    "Link": "7YFfKjjwI9M",
    "Year": 1995,
    "Tags": "Serial"
  },
  {
    "Name": "Amul",
    "Link": "RW9DSUbZX34",
    "Year": 2002,
    "Tags": "Advertisement"
  },
  {
    "Name": "Hum Naye Geet Sunae",
    "Link": "dVGmxkZPBps",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Chandu Ke Chacha",
    "Link": "b9Ni-Bh488Y",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Gilli Danda",
    "Link": "STlM8KCr5RU",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Krishna",
    "Link": "WDz8cxqIL6g",
    "Year": 1995,
    "Tags": "Serial"
  },
  {
    "Name": "Ramayana",
    "Link": "R9g7kiK_cCg",
    "Year": 1990,
    "Tags": "Serial"
  },
  {
    "Name": "Vikram Betal",
    "Link": "uA8FzJGAieQ",
    "Year": 1990,
    "Tags": "Serial"
  },
  {
    "Name": "Voh Chali Voh Chali",
    "Link": "oZnSZnSpXA4",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Aye Hip Hopper",
    "Link": "DCFrCX4HPO8",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Mahabharata",
    "Link": "d3qg7lw7tqc",
    "Year": 1990,
    "Tags": "Serial"
  },
  {
    "Name": "Dekh Bhai Dekh",
    "Link": "OnBUxBeKX2s",
    "Year": 1993,
    "Tags": "Serial"
  },
  {
    "Name": "Ek Chidiya Anek Chidiya",
    "Link": "EG9SCBd16lI",
    "Year": 1991,
    "Tags": "Serial"
  },
  {
    "Name": "Malgudi Days",
    "Link": "JQLYQ0GhBtE",
    "Year": 1992,
    "Tags": "Serial"
  },
  {
    "Name": "Surbhi",
    "Link": "5RcRzn6MdBs",
    "Year": 1993,
    "Tags": "Serial"
  },
  {
    "Name": "Vijay Vishwa Tiranga Pyara",
    "Link": "_BYqcN4K_Fo",
    "Year": 1994,
    "Tags": "Music"
  },
  {
    "Name": "Dhaara",
    "Link": "hIDWHiTrjZ8",
    "Year": 1998,
    "Tags": "Advertisement"
  },
  {
    "Name": "Rasna",
    "Link": "ah0g0joiWi0",
    "Year": 2000,
    "Tags": "Advertisement"
  },
  {
    "Name": "Kaliyon Ka Chaman",
    "Link": "xDonIFjYbFU",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Titan",
    "Link": "lyzxItHM740",
    "Year": 1994,
    "Tags": "Advertisement"
  },
  {
    "Name": "Nirma",
    "Link": "CbNTcvzrpBY",
    "Year": 1997,
    "Tags": "Advertisement"
  },
  {
    "Name": "Lifebuoy",
    "Link": "LMojcd3KvRQ",
    "Year": 1992,
    "Tags": "Advertisement"
  },
  {
    "Name": "Paree Hoon Main",
    "Link": "WjZf9VM4Lgc",
    "Year": 1992,
    "Tags": "Music"
  },
  {
    "Name": "Meri Neend",
    "Link": "JSpSJmPI9q0",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Purani Jeans Aur Guitar",
    "Link": "pjgG_RzLPrM",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Bheegi Bheegi",
    "Link": "NHg3eTI9VRU",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Bolo Ta Ra Ra Ra",
    "Link": "4Ay5OOxRTTE",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Rangilo Mharo Dholna",
    "Link": "edKJih4Wb3I",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Sun Re Peepal",
    "Link": "DjHG8d0vVvA",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Sayonee",
    "Link": "0GLYKYgSE0Y",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Chana Ve",
    "Link": "ihYnXDzZL4g",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Hawa Mein Udta Jaye",
    "Link": "O0lEfszxPic",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Saiyaan Dil Me Aana Re",
    "Link": "G5y5adM2ZNo",
    "Year": 2006,
    "Tags": "Music"
  },
  {
    "Name": "Pehla Nasha",
    "Link": "bRUzf7LgjLM",
    "Year": 1992,
    "Tags": "Music"
  },
  {
    "Name": "Main Koi Aisa Geet Gaun",
    "Link": "3uxe_dAKjrM",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Zara Nazaron Se Kehdo",
    "Link": "Ly81vyWjFW4",
    "Year": 2006,
    "Tags": "Music"
  },
  {
    "Name": "Ye Haseen Vaadiyan",
    "Link": "iHXs-bLYf00",
    "Year": 1992,
    "Tags": "Music"
  },
  {
    "Name": "Sandese Aate Hain",
    "Link": "SUtAfV2_3Kw",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Zara Zara Behekta Hai",
    "Link": "UZWrltQLTzE",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Sach Keh Raha Hai Deewana",
    "Link": "S4t2y_t4g4k",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Pokemon",
    "Link": "vUFDHVAaji8",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Tu",
    "Link": "OVI6Uzh5Las",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Main Deewana",
    "Link": "C0BnxutSJ9k",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Bob the Builder",
    "Link": "15hQ-7L2Q9A",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Jungle Book Song",
    "Link": "iLK-iD1dQb8",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Captain Planet",
    "Link": "DMoodiD0UEI",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Doraemon",
    "Link": "b2jI2RtYfww",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Baby Looney Tunes",
    "Link": "epSR5uU00MI",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Tera Milna Do Pal Ka",
    "Link": "5TJ5-6lqLFw",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Ab Mujhe Raat Din",
    "Link": "42bGoPIBDxg",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Deewana Tera",
    "Link": "J8zlroVMYeM",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "The Addams Family",
    "Link": "IokBKvFiCvM",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Scooby Doo",
    "Link": "0_C2HJvtRDY",
    "Year": 2000,
    "Tags": "Serial"
  },
  {
    "Name": "Shinchan",
    "Link": "X9R029JAI2Q",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "School Chale Hum",
    "Link": "BXWqRjTtiQU",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Tum Chalo Toh Hindustaan Chale",
    "Link": "JR8i9p3pcPg",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Tuta Tuta Ek Parinda",
    "Link": "a--i6F3fNkw",
    "Year": 2006,
    "Tags": "Music"
  },
  {
    "Name": "Tera Mera Pyaar",
    "Link": "ufJ4xXKLq5Q",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Neend Churayi Meri",
    "Link": "VWYrFlbMk40",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Raadha Kaise Na Jale",
    "Link": "qNnvL0ztJhA",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Chaiyya Chaiyya",
    "Link": "VKK_JZJywqk",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Mast",
    "Link": "hHk9IMf92Pk",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Son Pari",
    "Link": "Z5Qwrk4v7mo",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Kyunki Saas Bhi Kabhi Bahu Thi",
    "Link": "zJqTH-s3e90",
    "Year": 2002,
    "Tags": "Serial"
  },
  {
    "Name": "Kahani Ghar Ghar Ki",
    "Link": "hzn23fIFJTI",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Kumkum",
    "Link": "Uf9zGNgPbwc",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Shagun",
    "Link": "surBnqvbqrk",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Left Right Left",
    "Link": "T5M94dkE_Ek",
    "Year": 2005,
    "Tags": "Serial"
  },
  {
    "Name": "Complan",
    "Link": "t-fysFHfBYM",
    "Year": 1993,
    "Tags": "Advertisement"
  },
  {
    "Name": "Lagi Tmmse Mann Ki Lagan",
    "Link": "eIxF3ApNr5w",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Tose Naina Laage",
    "Link": "5R1vsrGrRgs",
    "Year": 2007,
    "Tags": "Music"
  },
  {
    "Name": "Sajna Aa Bhi Ja",
    "Link": "PGQn0_pqxlw",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Zara Zara Behekta Hai",
    "Link": "sydT76PgUb0",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Dil Keh Raha Hai",
    "Link": "0PuT3Wk-lfs",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Aa Bhi Jaa",
    "Link": "hNfN2KfDORw",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Dil Le Gayi Kudi Gujarat Di",
    "Link": "2_wIPWCgQqQ",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Gori",
    "Link": "jOhtGxVCi7c",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Chor Do Aanchal",
    "Link": "DwGpxWA-C6c",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Raat Shabnami",
    "Link": "SB___ZiU9kA",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Feviqwik",
    "Link": "WcNCk6ULBqE",
    "Year": 1995,
    "Tags": "Advertisement"
  },
  {
    "Name": "Hamara Bajaj",
    "Link": "scltYH13uEY",
    "Year": 1993,
    "Tags": "Advertisement"
  },
  {
    "Name": "Mile Sur Mera Tumhara",
    "Link": "gstRrEmTcBc",
    "Year": 1990,
    "Tags": "Music"
  },
  {
    "Name": "Miss Universe Sushmita Sen",
    "Link": "U4fYrhT6Ess",
    "Year": 1994,
    "Tags": "Serial"
  },
  {
    "Name": "Miss World Aishwarya Rai",
    "Link": "vq9JSuW2hHk",
    "Year": 1994,
    "Tags": "Serial"
  },
  {
    "Name": "Perk",
    "Link": "iyNQr8k622c",
    "Year": 1995,
    "Tags": "Advertisement"
  },
  {
    "Name": "Surf",
    "Link": "iUGyem3H3Cs",
    "Year": 1994,
    "Tags": "Advertisement"
  },
  {
    "Name": "Shreeya Ghoshal Performance",
    "Link": "dHd2TK7tlXQ",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Sunidhi Chahuhan Audition",
    "Link": "jVCoXtDLA6s",
    "Year": 1994,
    "Tags": "Music"
  },
  {
    "Name": "O Sanam",
    "Link": "iP9ib63VAi0",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Meri Chunar Udd Udd Jaye",
    "Link": "p9r2GxMlRD4",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Voh Pehli Baar",
    "Link": "q_UsxKe64pM",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Abke Baras",
    "Link": "3qIw3Jris_E",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Kargil War",
    "Link": "okbN3H-7mHo",
    "Year": 1999,
    "Tags": "Serial"
  },
  {
    "Name": "Gali Gali Sim Sim",
    "Link": "i518xpoyNSA",
    "Year": 2005,
    "Tags": "Serial"
  },
  {
    "Name": "Teletubbies",
    "Link": "TIIWPACxHDU",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Make Way for Noddy",
    "Link": "Bk2ASy1svvU",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Oswald",
    "Link": "SqbMqk-YOaU",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Shararat",
    "Link": "RRgCy_dCe5M",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Ssshhh Koi Hai",
    "Link": "Gg8pgtLPCGQ",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Mano Ya Na Mano",
    "Link": "b7juy0gyveE",
    "Year": 2005,
    "Tags": "Serial"
  },
  {
    "Name": "Khichidi",
    "Link": "QeqW40dfjzg",
    "Year": 2002,
    "Tags": "Serial"
  },
  {
    "Name": "Small Wonder",
    "Link": "81Oe03Z39rA",
    "Year": 1999,
    "Tags": "Serial"
  },
  {
    "Name": "Hannah Montana",
    "Link": "CNXxcYw-gtY",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "That's so Raven",
    "Link": "pTZJcN-MriM",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Barbie",
    "Link": "ZyhrYis509A",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Macarena",
    "Link": "XiBYM6g8Tck",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Bal Hanuman Akdam Bakadam",
    "Link": "7I0X9yNjIOA",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Lift Karade",
    "Link": "IU2ttJ73h2Y",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Airtel",
    "Link": "LnoYvASi6Qc",
    "Year": 2003,
    "Tags": "Advertisement"
  },
  {
    "Name": "Karishma Ka Karishma",
    "Link": "NWmCHM_GIK4",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Woh Rehne Wali Mehelon Ki",
    "Link": "63wPaoL0AJs",
    "Year": 2005,
    "Tags": "Serial"
  },
  {
    "Name": "Dil Mil Gaye",
    "Link": "hTrkdCjxbpg",
    "Year": 2005,
    "Tags": "Serial"
  },
  {
    "Name": "Sanjivani",
    "Link": "Ak381Ysyq4M",
    "Year": 2002,
    "Tags": "Serial"
  },
  {
    "Name": "Hatim",
    "Link": "VdEJioqZBl8",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Tera Chehra Jab Nazar Aaye",
    "Link": "kggmRyqZdeQ",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Kabhi to Nazar Milao",
    "Link": "MAOamM7wMIc",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Hari Mere Ghar Ko",
    "Link": "2ntT-kEexQQ",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Abke Sawan",
    "Link": "CsN9MAfsGIM",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Teri Deewani",
    "Link": "zZasH6qkn8M",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Tu Maane Ya Na Maane",
    "Link": "sJ7FR3r60_Q",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Cadbury",
    "Link": "FVChyy_moiM",
    "Year": 1995,
    "Tags": "Advertisement"
  },
  {
    "Name": "Lijjat Papad",
    "Link": "24mbYBH95H4",
    "Year": 1992,
    "Tags": "Advertisement"
  },
  {
    "Name": "Bajaj Bulb",
    "Link": "rh9yc3xyeBs",
    "Year": 1991,
    "Tags": "Advertisement"
  },
  {
    "Name": "Paan Parag",
    "Link": "iR_cb6ts2s4",
    "Year": 1991,
    "Tags": "Advertisement"
  },
  {
    "Name": "Cinthol",
    "Link": "knJ8oowDHck",
    "Year": 1997,
    "Tags": "Advertisement"
  },
  {
    "Name": "Alladin",
    "Link": "j7toTdQ4fT0",
    "Year": 1994,
    "Tags": "Serial"
  },
  {
    "Name": "Ujala",
    "Link": "OFCqnM_vJCM",
    "Year": 2001,
    "Tags": "Advertisement"
  },
  {
    "Name": "Limca",
    "Link": "NgT7ueACtxw",
    "Year": 2003,
    "Tags": "Advertisement"
  },
  {
    "Name": "Raymond",
    "Link": "qBOSN3hFJHo",
    "Year": 2001,
    "Tags": "Advertisement"
  },
  {
    "Name": "Apsara",
    "Link": "tEVGvb6-Qds",
    "Year": 2003,
    "Tags": "Advertisement"
  },
  {
    "Name": "Damini Dialogue",
    "Link": "Td0iJvzlAqA",
    "Year": 1993,
    "Tags": "Music"
  },
  {
    "Name": "Damini Dialogue",
    "Link": "G4HViczL_G0",
    "Year": 1993,
    "Tags": "Music"
  },
  {
    "Name": "Hawa Hawaii",
    "Link": "y_FPWx0iRxE",
    "Year": 1990,
    "Tags": "Music"
  },
  {
    "Name": "Sanjivani Booti",
    "Link": "t6vxHj0ARfo",
    "Year": 1990,
    "Tags": "Serial"
  },
  {
    "Name": "Ramayana Kayikayi Scene",
    "Link": "utNROIIHEcA",
    "Year": 1991,
    "Tags": "Serial"
  },
  {
    "Name": "Ram Bhakt Le Chala Re",
    "Link": "IqXzRoQQprQ",
    "Year": 1991,
    "Tags": "Serial"
  },
  {
    "Name": "Nana Patekar Krantiveer",
    "Link": "hDMDZH1qI3U",
    "Year": 1994,
    "Tags": "Music"
  },
  {
    "Name": "Chachi 420",
    "Link": "CkTdlgOArWM",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Ishq",
    "Link": "WYBGFRGZjeg",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Ddlj Scene",
    "Link": "DwrBcQ7UMu0",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Humko Humi Se",
    "Link": "KSmEFCyN6F0",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Coca Cola",
    "Link": "Peeq2D674gU",
    "Year": 2004,
    "Tags": "Advertisement"
  },
  {
    "Name": "Raja Rancho",
    "Link": "e8tbnYHPRcU",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Cid",
    "Link": "aZ3X8pkxYj0",
    "Year": 1998,
    "Tags": "Serial"
  },
  {
    "Name": "Sawan Me",
    "Link": "DwbaFnjxDo0",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Indhana Winva",
    "Link": "7jY8MT9CIAo",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Big Babool",
    "Link": "lfTyMVHFjhQ",
    "Year": 2005,
    "Tags": "Advertisement"
  },
  {
    "Name": "Chacha Chaudhary",
    "Link": "HInejkBsDkw",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Alif Laila",
    "Link": "hxVWPFIjZLE",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Khana Khazana",
    "Link": "FP9pcFWS3Wg",
    "Year": 2000,
    "Tags": "Serial"
  },
  {
    "Name": "Byomkesh Bakshi",
    "Link": "zlOAN3Gb-8c",
    "Year": 1993,
    "Tags": "Serial"
  },
  {
    "Name": "Kabhi Aana Tu Mere Gali",
    "Link": "DH2sQ_je5v8",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Janam Samjha Karo",
    "Link": "3JnXgAtt34M",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Ponds",
    "Link": "Ii8dR35JkaM",
    "Year": 2003,
    "Tags": "Advertisement"
  },
  {
    "Name": "O Piya",
    "Link": "QIe_gL5Na8g",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Krishna",
    "Link": "CJvK0dox0_M",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Aisa Hota Hai",
    "Link": "6vKVKdWKnfY",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Zindagi",
    "Link": "WB838rGEdKM",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Pyaar Ke Pal",
    "Link": "_Uer5Z5Ah84",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Rockford",
    "Link": "MjO55YnrV9U",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Aasmaan Ke Paar",
    "Link": "kDGI5mvSaDM",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Dhoom Machao Dhoom",
    "Link": "CPlfvXtOuV8",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Aap Beeti",
    "Link": "aXqSPKq9WR0",
    "Year": 2002,
    "Tags": "Serial"
  },
  {
    "Name": "Kahin Karta Hoga Wo Mera",
    "Link": "yqi5J0p3mdY",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Aankhon Me",
    "Link": "roJL3mIueTE",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Kook Kook Kooky",
    "Link": "ZeiWIMOH5jI",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Thanda Thanda Pani",
    "Link": "rL4Zv1sR_co",
    "Year": 1992,
    "Tags": "Music"
  },
  {
    "Name": "Nigodi Kaisi Jawani Hai",
    "Link": "jiZucsVVCp8",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Oova Ova",
    "Link": "GqkrkDcHc0k",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Deewane Deewane",
    "Link": "oiq_KkEshSg",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Chudi to Khanki",
    "Link": "H6oRlI_jQ04",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Patelscope",
    "Link": "J4RCuNJ-TA0",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Ho Gayi Mohabbat Tumse",
    "Link": "jThOZhPsj70",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Wo Kaun Thi",
    "Link": "Y2k9OmDGAJ0",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Jaane Kisne",
    "Link": "0Q1JdQbIFCI",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Na Jane Kahan Kho Gaya",
    "Link": "KNuPKUbotXI",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Chui Mui Si Tum Lagti Ho",
    "Link": "6vMWoJFgUYI",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Kya Karti Ho",
    "Link": "DYD3vviTt9s",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Aye Sanam",
    "Link": "9dXx3pLogXU",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Mere Mehboob",
    "Link": "OVmtW7OE_T4",
    "Year": 1993,
    "Tags": "Music"
  },
  {
    "Name": "Pyaar Ka Rang",
    "Link": "BK1f_0l8S9A",
    "Year": 1993,
    "Tags": "Music"
  },
  {
    "Name": "Duniya",
    "Link": "kaYWlc4imOo",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Chand Sa Mukhda",
    "Link": "RijqNhNWPNE",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Stylebhai",
    "Link": "OmbLKo0pyeY",
    "Year": 1991,
    "Tags": "Music"
  },
  {
    "Name": "Dole Dole by Suchitra",
    "Link": "HmRqUL5sxwI",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Jabse Dekha by Suchitra",
    "Link": "UKUU0FEPcps",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Anjane by Strings",
    "Link": "58yEDh_s_b0",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Ishq Tera Tadpave",
    "Link": "FEO7pinYkwM",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Jine Mera Dil Lutiya",
    "Link": "gTaAyaQX4YM",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Tere Naal Nachna Sukhbir",
    "Link": "mFd_Du9qPIs",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Sagari Rayn",
    "Link": "1NOGkFB-VoE",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Dhola by Bina Mistry",
    "Link": "i85frzPLW2I",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Lollipop",
    "Link": "R_fLnAbXn-Q",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Nasha Hi Nasha",
    "Link": "6ew_ibN-uzo",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Man Dole by Neha Nagpal",
    "Link": "coDVOuKGCmg",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Dil Kya Karey",
    "Link": "ntiZxIY7r5k",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Ye Waadiyan",
    "Link": "1SuD7XJcYPI",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Lohe Ki Tu Na Bani",
    "Link": "yrwDc82qoiw",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Chock There",
    "Link": "iUK7MeLIcXA",
    "Year": 1993,
    "Tags": "Music"
  },
  {
    "Name": "Boom Shack-a-lack",
    "Link": "kZzBd41NuZw",
    "Year": 1993,
    "Tags": "Music"
  },
  {
    "Name": "Sawan Me Lag Gayi Aag",
    "Link": "EVslN2oTKZM",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Urvasi Urvasi",
    "Link": "DXCV5cKNHho",
    "Year": 1994,
    "Tags": "Music"
  },
  {
    "Name": "Oh Oh Jane Jana",
    "Link": "x_elT6zkqN0",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Deewana Hua Baadal",
    "Link": "HnHdIFDMjvc",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Ek Bar by Piyush Soni",
    "Link": "zBcAAorGGfk",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Mona Re",
    "Link": "lZBZMKKxrDE",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Kya Surat Hai",
    "Link": "h6g9EoxKAdw",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Bijuria",
    "Link": "m21rKkVWEOc",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Chori Chori",
    "Link": "gaa0y0xuzpw",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Piya Se Milke Aaye Nain",
    "Link": "zoBAvVSGG38",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Nachange Sari Raat",
    "Link": "mSbB_TwBjgw",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Don't Break My Heart I've Been Waiting",
    "Link": "2AjMC4axrwE",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Galla Gooriyan",
    "Link": "GFSEw9bZado",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Ishq Ho Gaya",
    "Link": "S4HlbASuo-4",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Hoo Halla Ho by Anaida",
    "Link": "Pkr61XiYt64",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Mukhda Piya Ka by Rajeshwari",
    "Link": "nEjO9GHSeh0",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Huna Huna",
    "Link": "M0GRr8zs9KQ",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Pyaar Ke Geet",
    "Link": "Ljf05kqA35I",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Kali Ghata Tu",
    "Link": "K6Yc8yIXjjg",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Aaja Aaja Bu Subha Mudgal",
    "Link": "NMUUC2avC9I",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Rothe Ho Kyun",
    "Link": "mV-yTFIFel4",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Sa Ni Dha Pa",
    "Link": "cuMYU4bqZ_A",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Feel Alright",
    "Link": "IN1JcqKZ3mU",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Gori Teri Ankhein Kahein",
    "Link": "Wb2E2Nh2Stk",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Mujhe Sirf Chahiye Thoda Paise",
    "Link": "bnbHT0prSQM",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Sare Sapne Kahan Kho Gaye",
    "Link": "y5RkDxYIA24",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Seekho Na by Shubha Mudgal",
    "Link": "n5YXeIJN5qk",
    "Year": 2006,
    "Tags": "Music"
  },
  {
    "Name": "Piya Re",
    "Link": "zw4iaxyGhWo",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Oi Triesto by Sukhbir",
    "Link": "HRwO9FPPseI",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Boom Boom by Biddu",
    "Link": "jDIiiIgvLSE",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Kangana Tera Ni",
    "Link": "x4D0PhKL3NA",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Dekha Hai Teri Ankhon Ko",
    "Link": "C8WCeSEj_kE",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Gud Naal Ishq by Bally Sagoo",
    "Link": "EJXdBKuIFzM",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Dhoom Pichak Dhoom by Euphoria",
    "Link": "y7WaIDm9MQ0",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Juggy D Akheer",
    "Link": "_p240Gxjon4",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Angel Eyes by Raghav",
    "Link": "NX9_57pNRbE",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Eyes on You by Jay Sean",
    "Link": "I8uztB31eUw",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Afreen Afreen",
    "Link": "iViz1ZG4AWs",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Oh Carol",
    "Link": "vAEKzXZ8sko",
    "Year": 1996,
    "Tags": "Music"
  },
  {
    "Name": "Chupke Chupke",
    "Link": "NcJD-XpsiFQ",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Tere Beena Jeena Nahi by Bali Brambhatt",
    "Link": "GVU4F1JfpyM",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Love-o-logy",
    "Link": "VJ6Ex3M-7bg",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Onida",
    "Link": "_tishLr19-c",
    "Year": 1996,
    "Tags": "Advertisement"
  },
  {
    "Name": "Takeshi Castle",
    "Link": "gOEk0gen1Vs",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Lic",
    "Link": "b2yrYYbEvgk",
    "Year": 2002,
    "Tags": "Advertisement"
  },
  {
    "Name": "All out",
    "Link": "gA4A6nH_25k",
    "Year": 1996,
    "Tags": "Advertisement"
  },
  {
    "Name": "Miranda",
    "Link": "l3eJVIb6QKM",
    "Year": 2004,
    "Tags": "Advertisement"
  },
  {
    "Name": "Miranda",
    "Link": "81J-6UsZACU",
    "Year": 2004,
    "Tags": "Advertisement"
  },
  {
    "Name": "Shaktimaan Message",
    "Link": "ESj5KvMw9r0",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Chalne Lagi Hain Hawaein",
    "Link": "25i4MdyhpwY",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Kabhi Yaadon Mein Aaun",
    "Link": "BrIkUBI_37I",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Ek Pardesi Mera Dil Le Gaya",
    "Link": "8CCEGemSw5s",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Sochta Hun Uska Dil",
    "Link": "YN0vDctyAcM",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Koi Sehri Babu",
    "Link": "1PHOjdfI7ok",
    "Year": 2002,
    "Tags": "Music"
  },
  {
    "Name": "Chadhti Jawani",
    "Link": "s1G223A6d_8",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Tu Tu Hai Vohi",
    "Link": "w9yM_IgL4CA",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Meri Beri Ke Ber",
    "Link": "KyVgTBxTL7Y",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Leke Pehla Pehla Pyaar",
    "Link": "0hgYvwqOJUA",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Kabhi Aar Kabhi Paar",
    "Link": "XyJxaE19FKs",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Kaanta Laga",
    "Link": "xZYGzkKMcRU",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Pardesiya",
    "Link": "cFjZPIxbP0Y",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Nahi Nahi",
    "Link": "MYP2niJUO14",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Kehdoon Tumhe",
    "Link": "_1uGNaE6qvU",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Mere Naseeb Mein",
    "Link": "5dgpSts3VhI",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Sil Jam",
    "Link": "evXH7H1dKCI",
    "Year": 2000,
    "Tags": "Advertisement"
  },
  {
    "Name": "Thums Up",
    "Link": "_gNRHrsKejQ",
    "Year": 2000,
    "Tags": "Advertisement"
  },
  {
    "Name": "Chotti Si Umar Me",
    "Link": "9GHMJbl96DM",
    "Year": 2003,
    "Tags": "Music"
  },
  {
    "Name": "Ghar Jayegi",
    "Link": "MLaGwYge1QA",
    "Year": 1997,
    "Tags": "Music"
  },
  {
    "Name": "Sawan Bhi To",
    "Link": "PQm7-m0vqNk",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Aankhein Teri Kitni Haseen",
    "Link": "UvAPcNPXVDQ",
    "Year": 2007,
    "Tags": "Music"
  },
  {
    "Name": "Archies",
    "Link": "nyl_IOE-TvI",
    "Year": 1994,
    "Tags": "Advertisement"
  },
  {
    "Name": "Donate Eyes",
    "Link": "bOoJmp4XYoA",
    "Year": 1999,
    "Tags": "Advertisement"
  },
  {
    "Name": "Zee Tv",
    "Link": "ONathQMT-5k",
    "Year": 2000,
    "Tags": "Serial"
  },
  {
    "Name": "Kbc Intro",
    "Link": "-m1lns9CErY",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Kingfisher",
    "Link": "93RtE9_Gc5I",
    "Year": 2003,
    "Tags": "Advertisement"
  },
  {
    "Name": "Captain Cook",
    "Link": "Ge-O_B5ZYfs",
    "Year": 1997,
    "Tags": "Advertisement"
  },
  {
    "Name": "Kissan",
    "Link": "ac04hnPxl8A",
    "Year": 2000,
    "Tags": "Advertisement"
  },
  {
    "Name": "Soundarya Sabun Nirma",
    "Link": "jz9H0B5Jhak",
    "Year": 2000,
    "Tags": "Advertisement"
  },
  {
    "Name": "Liril",
    "Link": "vzdWQBedqgU",
    "Year": 2001,
    "Tags": "Advertisement"
  },
  {
    "Name": "Family No 1",
    "Link": "E_K9jf9nHiM",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Doodh Doodh",
    "Link": "N1Wv2BTkJS4",
    "Year": 1997,
    "Tags": "Advertisement"
  },
  {
    "Name": "Sundrop",
    "Link": "XVwWrC9XciE",
    "Year": 1999,
    "Tags": "Advertisement"
  },
  {
    "Name": "Jhumka Gira Re",
    "Link": "RNsNQgfQhSU",
    "Year": 2003,
    "Tags": "Music"
  }
];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(dat);
    $(function() {
        $(".dial").knob({

        	change: function (value) {
        yearval=Math.round(value).toString();
    }
    ,'min':1990,
    'max':2005
});
    });
    function yalgaar(){
    	var cook="";
    	for(var i=0;i<dat.length;i++){
    		if((dat[i].Tags=="Music" && $('#mu').is(':checked')==false)||(dat[i].Tags=="Advertisement" && $('#ad').is(':checked')==false)||(dat[i].Tags=="Serial" && $('#tv').is(':checked')==false)){
    			continue;
    		}
    		if((dat[i].Year.toString()==yearval.toString() || dat[i].Year=="any")){
    			cook=cook+'<a href="#" onclick="forshana(this);" damn='+dat[i].Link+'><li>'+dat[i].Name+'</li></a>';
    			//onclick="forshana('+dat[i].Link+');"
    		}
    	}
    	$('nav ul').html(cook);
    }

function forshana(abra){
	if(bip==-1){
$('.framee').html('<iframe id="ytplayer" type="text/html" src="" frameborder="0" allowfullscreen></iframe>');
bip=100;
}
	var videoid=abra.getAttribute("damn");
var dork="https://www.youtube.com/embed/"+videoid+"?autoplay=1&showinfo=0&controls=1";

$('#ytplayer').attr('src', dork);
}
function yalgaar2(){
	var randN=Math.floor(Math.random()*(dat.length-1));
	var videoid=dat[randN].Link;
	var dork="https://www.youtube.com/embed/"+videoid+"?autoplay=1&showinfo=0&controls=1";
if(bip==-1){
$('.framee').html('<iframe id="ytplayer" type="text/html" src="" frameborder="0" allowfullscreen></iframe>');
bip=100;
}
$('#ytplayer').attr('src', dork);
}
function showfoot(){
	counter++;
	if(counter%2==1){
	$('.footerp').css("display","block");
	$('.expand').html("Hide Like and Comment");
	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
}
else{
$('.footerp').css("display","none");	
$('.expand').html("Like and Comment");
}
}
