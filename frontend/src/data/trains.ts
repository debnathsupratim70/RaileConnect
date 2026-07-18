import type { Train } from "../types/Train";

export const trains: Train[] = [
  {
    id: 1,
    trainNumber: "12301",
    trainName: "Howrah Rajdhani Express",
    trainType: "Rajdhani",

    from: "Howrah",
    fromCode: "HWH",

    to: "New Delhi",
    toCode: "NDLS",

    departure: "16:50",
    arrival: "10:10 (+1)",
    duration: "17h 20m",

    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    classes: [
      {
        code: "3A",
        name: "AC 3 Tier",
        fare: 3150,
        status: "AVAILABLE",
        available: 24,
      },
      {
        code: "2A",
        name: "AC 2 Tier",
        fare: 4520,
        status: "AVAILABLE",
        available: 8,
      },
      {
        code: "1A",
        name: "First AC",
        fare: 6825,
        status: "WL",
        available: 2,
      },
    ],
  },

  {
    id: 2,
    trainNumber: "12303",
    trainName: "Poorva Express",
    trainType: "Superfast",

    from: "Howrah",
    fromCode: "HWH",

    to: "New Delhi",
    toCode: "NDLS",

    departure: "08:15",
    arrival: "06:15 (+1)",
    duration: "22h",

    days: ["Daily"],

    classes: [
      {
        code: "SL",
        name: "Sleeper",
        fare: 720,
        status: "AVAILABLE",
        available: 96,
      },
      {
        code: "3A",
        name: "AC 3 Tier",
        fare: 1980,
        status: "AVAILABLE",
        available: 38,
      },
      {
        code: "2A",
        name: "AC 2 Tier",
        fare: 2860,
        status: "RAC",
        available: 5,
      },
      {
        code: "1A",
        name: "First AC",
        fare: 4890,
        status: "WL",
        available: 4,
      },
    ],
  },

  {
    id: 3,
    trainNumber: "12273",
    trainName: "Howrah Duronto Express",
    trainType: "Duronto",

    from: "Howrah",
    fromCode: "HWH",

    to: "New Delhi",
    toCode: "NDLS",

    departure: "20:00",
    arrival: "14:10 (+1)",
    duration: "18h 10m",

    days: ["Mon", "Wed", "Fri"],

    classes: [
      {
        code: "3A",
        name: "AC 3 Tier",
        fare: 3010,
        status: "AVAILABLE",
        available: 12,
      },
      {
        code: "2A",
        name: "AC 2 Tier",
        fare: 4300,
        status: "AVAILABLE",
        available: 6,
      },
      {
        code: "1A",
        name: "First AC",
        fare: 6400,
        status: "AVAILABLE",
        available: 1,
      },
    ],
  },

  {
    id: 4,
    trainNumber: "12313",
    trainName: "Sealdah Rajdhani Express",
    trainType: "Rajdhani",

    from: "Sealdah",
    fromCode: "SDAH",

    to: "New Delhi",
    toCode: "NDLS",

    departure: "16:55",
    arrival: "10:05 (+1)",
    duration: "17h 10m",

    days: ["Daily"],

    classes: [
      {
        code: "3A",
        name: "AC 3 Tier",
        fare: 3120,
        status: "AVAILABLE",
        available: 20,
      },
      {
        code: "2A",
        name: "AC 2 Tier",
        fare: 4470,
        status: "AVAILABLE",
        available: 7,
      },
      {
        code: "1A",
        name: "First AC",
        fare: 6780,
        status: "RAC",
        available: 1,
      },
    ],
  },

  {
    id: 5,
    trainNumber: "12841",
    trainName: "Coromandel Express",
    trainType: "Superfast",

    from: "Howrah",
    fromCode: "HWH",

    to: "Chennai",
    toCode: "MAS",

    departure: "14:15",
    arrival: "16:35 (+1)",
    duration: "26h 20m",

    days: ["Daily"],

    classes: [
      {
        code: "SL",
        name: "Sleeper",
        fare: 840,
        status: "AVAILABLE",
        available: 75,
      },
      {
        code: "3A",
        name: "AC 3 Tier",
        fare: 2250,
        status: "AVAILABLE",
        available: 28,
      },
      {
        code: "2A",
        name: "AC 2 Tier",
        fare: 3230,
        status: "AVAILABLE",
        available: 9,
      },
    ],
  },

  {
    id: 6,
    trainNumber: "12839",
    trainName: "Chennai Mail",
    trainType: "Superfast",

    from: "Howrah",
    fromCode: "HWH",

    to: "Chennai",
    toCode: "MAS",

    departure: "23:55",
    arrival: "03:45 (+2)",
    duration: "27h 50m",

    days: ["Daily"],

    classes: [
      {
        code: "SL",
        name: "Sleeper",
        fare: 810,
        status: "AVAILABLE",
        available: 42,
      },
      {
        code: "3A",
        name: "AC 3 Tier",
        fare: 2140,
        status: "RAC",
        available: 4,
      },
      {
        code: "2A",
        name: "AC 2 Tier",
        fare: 3090,
        status: "WL",
        available: 6,
      },
    ],
  },
];