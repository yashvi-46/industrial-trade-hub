export interface Product {
  id: string;
  name: string;
  grade: string;
  price: number;
  unit: string;
  priceHistory: { date: string; price: number }[];
}

export interface Industry {
  id: string;
  name: string;
  logo: string;
  location: string;
  gstNumber: string;
  factoryLicense: string;
  tradeLicense: string;
  phone: string;
  email: string;
  verified: boolean;
  rating: number;
  products: Product[];
}

export const industries: Industry[] = [
  {
    id: "1",
    name: "Bharat Chemicals Ltd",
    logo: "BC",
    location: "Mumbai, Maharashtra",
    gstNumber: "27AABCB1234A1Z5",
    factoryLicense: "MH/FAC/2021/123456",
    tradeLicense: "MUM/TRD/2022/78901",
    phone: "+91 9876543210",
    email: "sales@bharatchemicals.com",
    verified: true,
    rating: 4.8,
    products: [
      {
        id: "p1",
        name: "Sulfuric Acid",
        grade: "Industrial Grade 98%",
        price: 12500,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 11800 },
          { date: "2024-07", price: 12000 },
          { date: "2024-08", price: 12200 },
          { date: "2024-09", price: 12100 },
          { date: "2024-10", price: 12350 },
          { date: "2024-11", price: 12500 },
        ],
      },
      {
        id: "p2",
        name: "Hydrochloric Acid",
        grade: "Commercial Grade 32%",
        price: 8750,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 8200 },
          { date: "2024-07", price: 8400 },
          { date: "2024-08", price: 8500 },
          { date: "2024-09", price: 8600 },
          { date: "2024-10", price: 8700 },
          { date: "2024-11", price: 8750 },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Gujarat Solvents Pvt Ltd",
    logo: "GS",
    location: "Ahmedabad, Gujarat",
    gstNumber: "24AACFG5678B2Z8",
    factoryLicense: "GJ/FAC/2020/654321",
    tradeLicense: "AHM/TRD/2021/45678",
    phone: "+91 9123456789",
    email: "info@gujaratsolvents.com",
    verified: true,
    rating: 4.5,
    products: [
      {
        id: "p3",
        name: "Ethanol",
        grade: "Extra Neutral Alcohol 96%",
        price: 56400,
        unit: "KL",
        priceHistory: [
          { date: "2024-06", price: 52000 },
          { date: "2024-07", price: 53500 },
          { date: "2024-08", price: 54200 },
          { date: "2024-09", price: 55000 },
          { date: "2024-10", price: 55800 },
          { date: "2024-11", price: 56400 },
        ],
      },
      {
        id: "p4",
        name: "Methanol",
        grade: "Industrial Grade 99.5%",
        price: 28900,
        unit: "KL",
        priceHistory: [
          { date: "2024-06", price: 30000 },
          { date: "2024-07", price: 29800 },
          { date: "2024-08", price: 29500 },
          { date: "2024-09", price: 29200 },
          { date: "2024-10", price: 29000 },
          { date: "2024-11", price: 28900 },
        ],
      },
      {
        id: "p5",
        name: "Isopropyl Alcohol",
        grade: "IP Grade 99%",
        price: 78500,
        unit: "KL",
        priceHistory: [
          { date: "2024-06", price: 75000 },
          { date: "2024-07", price: 76200 },
          { date: "2024-08", price: 77000 },
          { date: "2024-09", price: 77500 },
          { date: "2024-10", price: 78000 },
          { date: "2024-11", price: 78500 },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Tamil Nadu Petrochemicals",
    logo: "TP",
    location: "Chennai, Tamil Nadu",
    gstNumber: "33AABCT9876C3Z1",
    factoryLicense: "TN/FAC/2019/789012",
    tradeLicense: "CHN/TRD/2020/34567",
    phone: "+91 9988776655",
    email: "contact@tnpetrochem.com",
    verified: true,
    rating: 4.6,
    products: [
      {
        id: "p6",
        name: "Sodium Hydroxide",
        grade: "Flakes 98%",
        price: 38200,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 39500 },
          { date: "2024-07", price: 39200 },
          { date: "2024-08", price: 38800 },
          { date: "2024-09", price: 38600 },
          { date: "2024-10", price: 38400 },
          { date: "2024-11", price: 38200 },
        ],
      },
      {
        id: "p7",
        name: "Acetone",
        grade: "Technical Grade 99%",
        price: 72000,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 68000 },
          { date: "2024-07", price: 69500 },
          { date: "2024-08", price: 70000 },
          { date: "2024-09", price: 70500 },
          { date: "2024-10", price: 71200 },
          { date: "2024-11", price: 72000 },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Rajasthan Alkali Industries",
    logo: "RA",
    location: "Jaipur, Rajasthan",
    gstNumber: "08AABCR4567D4Z2",
    factoryLicense: "RJ/FAC/2022/345678",
    tradeLicense: "JAI/TRD/2022/89012",
    phone: "+91 9876512340",
    email: "sales@rajalkali.com",
    verified: false,
    rating: 4.2,
    products: [
      {
        id: "p8",
        name: "Calcium Chloride",
        grade: "Powder 94%",
        price: 15800,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 14500 },
          { date: "2024-07", price: 14800 },
          { date: "2024-08", price: 15000 },
          { date: "2024-09", price: 15300 },
          { date: "2024-10", price: 15500 },
          { date: "2024-11", price: 15800 },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Karnataka Pharma Chem",
    logo: "KP",
    location: "Bangalore, Karnataka",
    gstNumber: "29AABCK8901E5Z3",
    factoryLicense: "KA/FAC/2021/901234",
    tradeLicense: "BLR/TRD/2021/56789",
    phone: "+91 9012345678",
    email: "info@karnatakapharma.com",
    verified: true,
    rating: 4.9,
    products: [
      {
        id: "p9",
        name: "Citric Acid",
        grade: "Anhydrous Food Grade",
        price: 92000,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 88000 },
          { date: "2024-07", price: 89200 },
          { date: "2024-08", price: 90000 },
          { date: "2024-09", price: 90500 },
          { date: "2024-10", price: 91200 },
          { date: "2024-11", price: 92000 },
        ],
      },
      {
        id: "p10",
        name: "Phosphoric Acid",
        grade: "Food Grade 85%",
        price: 62500,
        unit: "MT",
        priceHistory: [
          { date: "2024-06", price: 58000 },
          { date: "2024-07", price: 59000 },
          { date: "2024-08", price: 60000 },
          { date: "2024-09", price: 61000 },
          { date: "2024-10", price: 61800 },
          { date: "2024-11", price: 62500 },
        ],
      },
    ],
  },
];

export const quantityOptions = [
  { value: "1", label: "1 Ton" },
  { value: "5", label: "5 Tons" },
  { value: "10", label: "10 Tons" },
  { value: "25", label: "25 Tons" },
  { value: "50", label: "50 Tons" },
  { value: "100", label: "100 Tons" },
  { value: "custom", label: "Custom Quantity" },
];
