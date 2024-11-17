// src/lib/data-basic.ts

export const provinces = [
    { code: "14", name: "Riau" },
  ];
  
  export const districts: Record<string, { code: string; name: string }[]> = {
    "14": [
      { code: "1400", name: "All District" },
      { code: "1404", name: "Pelalawan" },
      { code: "1405", name: "Siak" },
      { code: "1406", name: "Kampar" },
      { code: "1407", name: "Rokan Hulu" },
    ],
  };
  
  export const cardData: Record<string, { type: string; count: number }[]> = {
    "1404": [
      { type: "farmers", count: 326 },
      { type: "plots", count: 417 },
      { type: "trained farmers", count: 100 },
      { type: "certified farmers", count: 10 },
      { type: "farmer groups", count: 1 },
      { type: "ICS", count: 1 },
      { type: "sme", count: 10 },
      { type: "mills", count: 1 },
    ],
    "1405": [
      { type: "farmers", count: 2464 },
      { type: "plots", count: 5586 },
      { type: "trained farmers", count: 200 },
      { type: "certified farmers", count: 10 },
      { type: "farmer groups", count: 10 },
      { type: "ICS", count: 10 },
      { type: "sme", count: 20 },
      { type: "mills", count: 2 },
    ],
    "1406": [
      { type: "farmers", count: 3724 },
      { type: "plots", count: 3506 },
      { type: "trained farmers", count: 300 },
      { type: "certified farmers", count: 10 },
      { type: "farmer groups", count: 8 },
      { type: "ICS", count: 8 },
      { type: "sme", count: 30 },
      { type: "mills", count: 3 },
    ],
    "1407": [
      { type: "farmers", count: 1210 },
      { type: "plots", count: 2576 },
      { type: "trained farmers", count: 400 },
      { type: "certified farmers", count: 10 },
      { type: "farmer groups", count: 9 },
      { type: "ICS", count: 9 },
      { type: "sme", count: 40 },
      { type: "mills", count: 4 },
    ],
  };