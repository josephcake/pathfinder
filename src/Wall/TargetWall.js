const TARGET_WALL = [
  "0-0",
  "0-1",
  "0-2",
  "0-3",
  "0-4",
  "0-5",
  "0-6",
  "0-7",
  "0-8",
  "0-9",
  "0-10",
  "0-11",
  "0-12",
  "0-13",
  "0-14",
  "0-15",
  "0-16",
  "0-17",
  "0-18",
  "0-19",
  "0-20",
  "0-21",
  "0-22",
  "0-23",
  "0-24",
  "0-25",
  "0-26",
  "0-27",
  "0-28",
  "0-29",
  "0-30",
  "0-31",
  "0-32",
  "0-33",
  "0-34",
  "0-35",
  "0-36",
  "0-37",
  "0-38",
  "0-39",
  "0-40",
  "0-41",
  "0-42",
  "0-43",
  "0-44",
  "0-45",
  "0-46",
  "0-47",
  "0-48",
  "0-49",
  "0-50",
  "0-51",
  "0-52",
  "0-53",
  "0-54",
  "0-55",
  "0-56",
  "0-57",
  "0-58",
  "0-59",
  "0-60",
  "0-61",
  "0-62",
  "0-63",
  "0-64",
  "0-65",
  "0-66",
  "0-67",
  "0-68",
  "0-69",
  "0-70",
  "0-71",
  "0-72",
  "0-73",
  "0-74",
  "0-75",
  "0-76",
  "0-77",
  "0-78",
  "0-79",
  "1-32",
  "1-39",
  "1-40",
  "1-47",
  "1-79",
  "2-0",
  "2-1",
  "2-2",
  "2-3",
  "2-4",
  "2-5",
  "2-6",
  "2-7",
  "2-9",
  "2-10",
  "2-11",
  "2-12",
  "2-13",
  "2-14",
  "2-15",
  "2-16",
  "2-17",
  "2-18",
  "2-19",
  "2-20",
  "2-21",
  "2-22",
  "2-23",
  "2-24",
  "2-25",
  "2-26",
  "2-27",
  "2-28",
  "2-29",
  "2-30",
  "2-32",
  "2-34",
  "2-35",
  "2-36",
  "2-37",
  "2-38",
  "2-39",
  "2-40",
  "2-41",
  "2-42",
  "2-43",
  "2-44",
  "2-45",
  "2-47",
  "2-49",
  "2-50",
  "2-51",
  "2-52",
  "2-53",
  "2-54",
  "2-55",
  "2-56",
  "2-57",
  "2-58",
  "2-59",
  "2-60",
  "2-61",
  "2-62",
  "2-63",
  "2-64",
  "2-65",
  "2-66",
  "2-67",
  "2-68",
  "2-69",
  "2-70",
  "2-71",
  "2-72",
  "2-73",
  "2-74",
  "2-75",
  "2-76",
  "2-77",
  "2-78",
  "2-79",
  "3-0",
  "3-30",
  "3-32",
  "3-34",
  "3-45",
  "3-47",
  "3-49",
  "3-79",
  "4-0",
  "4-2",
  "4-3",
  "4-4",
  "4-5",
  "4-6",
  "4-7",
  "4-8",
  "4-9",
  "4-10",
  "4-11",
  "4-12",
  "4-13",
  "4-14",
  "4-15",
  "4-16",
  "4-17",
  "4-18",
  "4-19",
  "4-20",
  "4-21",
  "4-22",
  "4-23",
  "4-24",
  "4-25",
  "4-26",
  "4-27",
  "4-28",
  "4-30",
  "4-32",
  "4-34",
  "4-36",
  "4-37",
  "4-38",
  "4-41",
  "4-42",
  "4-43",
  "4-45",
  "4-47",
  "4-49",
  "4-51",
  "4-52",
  "4-53",
  "4-54",
  "4-55",
  "4-56",
  "4-57",
  "4-58",
  "4-59",
  "4-60",
  "4-61",
  "4-62",
  "4-63",
  "4-64",
  "4-65",
  "4-66",
  "4-67",
  "4-68",
  "4-69",
  "4-70",
  "4-71",
  "4-72",
  "4-73",
  "4-74",
  "4-75",
  "4-76",
  "4-77",
  "4-79",
  "5-0",
  "5-2",
  "5-28",
  "5-30",
  "5-32",
  "5-34",
  "5-36",
  "5-43",
  "5-45",
  "5-47",
  "5-49",
  "5-51",
  "5-77",
  "5-79",
  "6-0",
  "6-2",
  "6-4",
  "6-5",
  "6-6",
  "6-7",
  "6-8",
  "6-9",
  "6-10",
  "6-11",
  "6-12",
  "6-13",
  "6-14",
  "6-15",
  "6-16",
  "6-17",
  "6-18",
  "6-19",
  "6-20",
  "6-21",
  "6-22",
  "6-23",
  "6-24",
  "6-25",
  "6-26",
  "6-28",
  "6-30",
  "6-32",
  "6-36",
  "6-38",
  "6-39",
  "6-40",
  "6-41",
  "6-43",
  "6-45",
  "6-47",
  "6-49",
  "6-51",
  "6-53",
  "6-54",
  "6-55",
  "6-56",
  "6-57",
  "6-58",
  "6-59",
  "6-60",
  "6-61",
  "6-62",
  "6-63",
  "6-64",
  "6-65",
  "6-66",
  "6-67",
  "6-68",
  "6-69",
  "6-70",
  "6-71",
  "6-72",
  "6-73",
  "6-74",
  "6-75",
  "6-77",
  "6-79",
  "7-0",
  "7-2",
  "7-4",
  "7-26",
  "7-28",
  "7-30",
  "7-32",
  "7-34",
  "7-36",
  "7-38",
  "7-41",
  "7-43",
  "7-45",
  "7-47",
  "7-49",
  "7-51",
  "7-53",
  "7-75",
  "7-77",
  "7-79",
  "8-0",
  "8-2",
  "8-4",
  "8-6",
  "8-7",
  "8-8",
  "8-9",
  "8-10",
  "8-11",
  "8-12",
  "8-13",
  "8-14",
  "8-15",
  "8-16",
  "8-17",
  "8-18",
  "8-19",
  "8-20",
  "8-21",
  "8-22",
  "8-23",
  "8-24",
  "8-26",
  "8-28",
  "8-30",
  "8-32",
  "8-34",
  "8-36",
  "8-38",
  "8-41",
  "8-43",
  "8-45",
  "8-47",
  "8-49",
  "8-51",
  "8-53",
  "8-55",
  "8-57",
  "8-58",
  "8-59",
  "8-60",
  "8-61",
  "8-62",
  "8-63",
  "8-64",
  "8-65",
  "8-66",
  "8-67",
  "8-68",
  "8-69",
  "8-70",
  "8-71",
  "8-72",
  "8-73",
  "8-75",
  "8-77",
  "8-79",
  "9-0",
  "9-2",
  "9-4",
  "9-6",
  "9-24",
  "9-26",
  "9-28",
  "9-30",
  "9-32",
  "9-34",
  "9-36",
  "9-38",
  "9-41",
  "9-43",
  "9-45",
  "9-47",
  "9-49",
  "9-51",
  "9-53",
  "9-55",
  "9-73",
  "9-75",
  "9-77",
  "9-79",
  "10-0",
  "10-2",
  "10-4",
  "10-6",
  "10-8",
  "10-9",
  "10-10",
  "10-11",
  "10-12",
  "10-13",
  "10-15",
  "10-16",
  "10-17",
  "10-18",
  "10-19",
  "10-20",
  "10-21",
  "10-22",
  "10-24",
  "10-26",
  "10-28",
  "10-30",
  "10-32",
  "10-34",
  "10-36",
  "10-38",
  "10-41",
  "10-43",
  "10-45",
  "10-47",
  "10-49",
  "10-51",
  "10-53",
  "10-55",
  "10-57",
  "10-58",
  "10-59",
  "10-60",
  "10-61",
  "10-62",
  "10-63",
  "10-64",
  "10-65",
  "10-66",
  "10-67",
  "10-68",
  "10-69",
  "10-70",
  "10-71",
  "10-73",
  "10-75",
  "10-77",
  "10-79",
  "11-0",
  "11-2",
  "11-4",
  "11-6",
  "11-8",
  "11-22",
  "11-24",
  "11-26",
  "11-28",
  "11-30",
  "11-32",
  "11-34",
  "11-36",
  "11-38",
  "11-41",
  "11-43",
  "11-45",
  "11-47",
  "11-49",
  "11-51",
  "11-53",
  "11-55",
  "11-57",
  "11-71",
  "11-73",
  "11-75",
  "11-77",
  "11-79",
  "12-0",
  "12-2",
  "12-4",
  "12-6",
  "12-8",
  "12-10",
  "12-11",
  "12-12",
  "12-13",
  "12-14",
  "12-15",
  "12-16",
  "12-17",
  "12-18",
  "12-19",
  "12-20",
  "12-22",
  "12-24",
  "12-26",
  "12-28",
  "12-30",
  "12-32",
  "12-34",
  "12-36",
  "12-38",
  "12-41",
  "12-43",
  "12-45",
  "12-47",
  "12-49",
  "12-51",
  "12-53",
  "12-55",
  "12-57",
  "12-59",
  "12-60",
  "12-61",
  "12-62",
  "12-63",
  "12-64",
  "12-65",
  "12-66",
  "12-67",
  "12-68",
  "12-69",
  "12-71",
  "12-73",
  "12-75",
  "12-77",
  "12-79",
  "13-0",
  "13-2",
  "13-4",
  "13-6",
  "13-8",
  "13-10",
  "13-20",
  "13-22",
  "13-24",
  "13-26",
  "13-28",
  "13-30",
  "13-32",
  "13-34",
  "13-36",
  "13-41",
  "13-43",
  "13-45",
  "13-47",
  "13-49",
  "13-51",
  "13-53",
  "13-55",
  "13-57",
  "13-59",
  "13-69",
  "13-71",
  "13-73",
  "13-75",
  "13-77",
  "13-79",
  "14-0",
  "14-2",
  "14-4",
  "14-6",
  "14-8",
  "14-10",
  "14-12",
  "14-13",
  "14-14",
  "14-15",
  "14-16",
  "14-17",
  "14-18",
  "14-20",
  "14-22",
  "14-24",
  "14-26",
  "14-28",
  "14-30",
  "14-32",
  "14-34",
  "14-36",
  "14-38",
  "14-41",
  "14-43",
  "14-45",
  "14-47",
  "14-49",
  "14-51",
  "14-53",
  "14-55",
  "14-57",
  "14-59",
  "14-61",
  "14-62",
  "14-63",
  "14-64",
  "14-65",
  "14-66",
  "14-67",
  "14-69",
  "14-71",
  "14-73",
  "14-75",
  "14-77",
  "14-79",
  "15-0",
  "15-2",
  "15-4",
  "15-6",
  "15-8",
  "15-10",
  "15-12",
  "15-18",
  "15-22",
  "15-24",
  "15-26",
  "15-28",
  "15-30",
  "15-32",
  "15-34",
  "15-36",
  "15-38",
  "15-41",
  "15-43",
  "15-45",
  "15-47",
  "15-49",
  "15-51",
  "15-53",
  "15-55",
  "15-57",
  "15-59",
  "15-61",
  "15-67",
  "15-69",
  "15-71",
  "15-73",
  "15-75",
  "15-77",
  "15-79",
  "16-0",
  "16-2",
  "16-4",
  "16-6",
  "16-8",
  "16-10",
  "16-12",
  "16-14",
  "16-15",
  "16-16",
  "16-18",
  "16-20",
  "16-22",
  "16-24",
  "16-26",
  "16-28",
  "16-30",
  "16-32",
  "16-34",
  "16-36",
  "16-37",
  "16-38",
  "16-41",
  "16-42",
  "16-43",
  "16-45",
  "16-49",
  "16-51",
  "16-53",
  "16-55",
  "16-57",
  "16-59",
  "16-61",
  "16-63",
  "16-64",
  "16-65",
  "16-67",
  "16-69",
  "16-71",
  "16-73",
  "16-75",
  "16-77",
  "16-79",
  "17-0",
  "17-2",
  "17-4",
  "17-6",
  "17-8",
  "17-10",
  "17-12",
  "17-14",
  "17-16",
  "17-18",
  "17-20",
  "17-22",
  "17-24",
  "17-26",
  "17-28",
  "17-30",
  "17-32",
  "17-34",
  "17-35",
  "17-36",
  "17-37",
  "17-38",
  "17-41",
  "17-42",
  "17-43",
  "17-44",
  "17-45",
  "17-47",
  "17-49",
  "17-51",
  "17-53",
  "17-55",
  "17-57",
  "17-59",
  "17-61",
  "17-63",
  "17-67",
  "17-69",
  "17-71",
  "17-73",
  "17-75",
  "17-77",
  "18-0",
  "18-2",
  "18-4",
  "18-6",
  "18-8",
  "18-10",
  "18-14",
  "18-16",
  "18-18",
  "18-20",
  "18-22",
  "18-24",
  "18-26",
  "18-28",
  "18-30",
  "18-32",
  "18-34",
  "18-36",
  "18-37",
  "18-38",
  "18-41",
  "18-42",
  "18-43",
  "18-45",
  "18-47",
  "18-49",
  "18-51",
  "18-53",
  "18-55",
  "18-57",
  "18-59",
  "18-63",
  "18-64",
  "18-65",
  "18-67",
  "18-71",
  "18-73",
  "18-75",
  "18-77",
  "18-79",
  "19-0",
  "19-2",
  "19-4",
  "19-6",
  "19-8",
  "19-10",
  "19-12",
  "19-18",
  "19-20",
  "19-22",
  "19-24",
  "19-28",
  "19-30",
  "19-32",
  "19-34",
  "19-36",
  "19-38",
  "19-41",
  "19-43",
  "19-45",
  "19-47",
  "19-49",
  "19-51",
  "19-53",
  "19-55",
  "19-57",
  "19-59",
  "19-61",
  "19-67",
  "19-69",
  "19-71",
  "19-73",
  "19-75",
  "19-77",
  "19-79",
  "20-0",
  "20-2",
  "20-4",
  "20-6",
  "20-8",
  "20-10",
  "20-12",
  "20-13",
  "20-14",
  "20-15",
  "20-16",
  "20-17",
  "20-18",
  "20-20",
  "20-22",
  "20-24",
  "20-26",
  "20-28",
  "20-30",
  "20-32",
  "20-34",
  "20-36",
  "20-38",
  "20-41",
  "20-43",
  "20-45",
  "20-47",
  "20-49",
  "20-51",
  "20-53",
  "20-55",
  "20-57",
  "20-59",
  "20-61",
  "20-62",
  "20-63",
  "20-64",
  "20-65",
  "20-66",
  "20-67",
  "20-69",
  "20-71",
  "20-73",
  "20-75",
  "20-77",
  "20-79",
  "21-0",
  "21-2",
  "21-4",
  "21-6",
  "21-8",
  "21-10",
  "21-20",
  "21-22",
  "21-24",
  "21-26",
  "21-28",
  "21-30",
  "21-32",
  "21-34",
  "21-36",
  "21-38",
  "21-43",
  "21-45",
  "21-47",
  "21-49",
  "21-51",
  "21-55",
  "21-57",
  "21-59",
  "21-69",
  "21-71",
  "21-73",
  "21-75",
  "21-77",
  "21-79",
  "22-0",
  "22-2",
  "22-4",
  "22-8",
  "22-10",
  "22-11",
  "22-12",
  "22-13",
  "22-14",
  "22-15",
  "22-16",
  "22-17",
  "22-18",
  "22-19",
  "22-20",
  "22-22",
  "22-24",
  "22-26",
  "22-28",
  "22-30",
  "22-32",
  "22-34",
  "22-36",
  "22-38",
  "22-41",
  "22-43",
  "22-45",
  "22-47",
  "22-49",
  "22-51",
  "22-53",
  "22-55",
  "22-57",
  "22-59",
  "22-60",
  "22-61",
  "22-62",
  "22-63",
  "22-64",
  "22-65",
  "22-66",
  "22-67",
  "22-68",
  "22-69",
  "22-71",
  "22-73",
  "22-75",
  "22-77",
  "22-79",
  "23-0",
  "23-2",
  "23-4",
  "23-6",
  "23-8",
  "23-22",
  "23-24",
  "23-26",
  "23-28",
  "23-30",
  "23-32",
  "23-34",
  "23-36",
  "23-38",
  "23-41",
  "23-43",
  "23-45",
  "23-47",
  "23-49",
  "23-51",
  "23-53",
  "23-55",
  "23-57",
  "23-71",
  "23-73",
  "23-75",
  "23-77",
  "23-79",
  "24-0",
  "24-2",
  "24-4",
  "24-6",
  "24-8",
  "24-9",
  "24-10",
  "24-11",
  "24-12",
  "24-13",
  "24-14",
  "24-15",
  "24-16",
  "24-17",
  "24-18",
  "24-19",
  "24-20",
  "24-21",
  "24-22",
  "24-24",
  "24-26",
  "24-28",
  "24-30",
  "24-32",
  "24-34",
  "24-36",
  "24-38",
  "24-41",
  "24-43",
  "24-45",
  "24-47",
  "24-49",
  "24-51",
  "24-53",
  "24-55",
  "24-57",
  "24-58",
  "24-59",
  "24-60",
  "24-61",
  "24-62",
  "24-63",
  "24-65",
  "24-66",
  "24-67",
  "24-68",
  "24-69",
  "24-70",
  "24-71",
  "24-73",
  "24-75",
  "24-77",
  "24-79",
  "25-0",
  "25-2",
  "25-4",
  "25-6",
  "25-24",
  "25-26",
  "25-28",
  "25-30",
  "25-32",
  "25-34",
  "25-36",
  "25-38",
  "25-41",
  "25-43",
  "25-45",
  "25-47",
  "25-49",
  "25-51",
  "25-53",
  "25-55",
  "25-73",
  "25-75",
  "25-77",
  "25-79",
  "26-0",
  "26-2",
  "26-4",
  "26-6",
  "26-7",
  "26-8",
  "26-9",
  "26-10",
  "26-11",
  "26-12",
  "26-13",
  "26-14",
  "26-15",
  "26-16",
  "26-17",
  "26-18",
  "26-19",
  "26-20",
  "26-21",
  "26-22",
  "26-23",
  "26-24",
  "26-26",
  "26-28",
  "26-30",
  "26-34",
  "26-36",
  "26-38",
  "26-41",
  "26-43",
  "26-45",
  "26-47",
  "26-49",
  "26-51",
  "26-53",
  "26-55",
  "26-56",
  "26-57",
  "26-58",
  "26-59",
  "26-60",
  "26-61",
  "26-62",
  "26-63",
  "26-64",
  "26-65",
  "26-66",
  "26-67",
  "26-68",
  "26-69",
  "26-70",
  "26-71",
  "26-72",
  "26-73",
  "26-75",
  "26-77",
  "26-79",
  "27-0",
  "27-2",
  "27-4",
  "27-26",
  "27-28",
  "27-30",
  "27-32",
  "27-34",
  "27-36",
  "27-38",
  "27-41",
  "27-43",
  "27-45",
  "27-47",
  "27-49",
  "27-51",
  "27-53",
  "27-75",
  "27-77",
  "27-79",
  "28-0",
  "28-2",
  "28-4",
  "28-5",
  "28-6",
  "28-7",
  "28-8",
  "28-9",
  "28-10",
  "28-11",
  "28-12",
  "28-13",
  "28-14",
  "28-15",
  "28-16",
  "28-17",
  "28-18",
  "28-19",
  "28-20",
  "28-21",
  "28-22",
  "28-23",
  "28-24",
  "28-25",
  "28-26",
  "28-28",
  "28-30",
  "28-32",
  "28-34",
  "28-36",
  "28-38",
  "28-39",
  "28-40",
  "28-41",
  "28-43",
  "28-45",
  "28-47",
  "28-49",
  "28-51",
  "28-53",
  "28-54",
  "28-55",
  "28-56",
  "28-57",
  "28-58",
  "28-59",
  "28-60",
  "28-61",
  "28-62",
  "28-63",
  "28-64",
  "28-65",
  "28-66",
  "28-67",
  "28-68",
  "28-69",
  "28-70",
  "28-71",
  "28-72",
  "28-73",
  "28-74",
  "28-75",
  "28-77",
  "28-79",
  "29-0",
  "29-2",
  "29-28",
  "29-30",
  "29-32",
  "29-34",
  "29-36",
  "29-43",
  "29-47",
  "29-49",
  "29-51",
  "29-77",
  "29-79",
  "30-0",
  "30-2",
  "30-3",
  "30-4",
  "30-5",
  "30-6",
  "30-7",
  "30-8",
  "30-10",
  "30-11",
  "30-12",
  "30-13",
  "30-14",
  "30-15",
  "30-16",
  "30-17",
  "30-18",
  "30-19",
  "30-20",
  "30-21",
  "30-22",
  "30-23",
  "30-24",
  "30-25",
  "30-26",
  "30-27",
  "30-28",
  "30-30",
  "30-32",
  "30-34",
  "30-36",
  "30-37",
  "30-38",
  "30-41",
  "30-42",
  "30-43",
  "30-45",
  "30-47",
  "30-49",
  "30-51",
  "30-52",
  "30-53",
  "30-55",
  "30-56",
  "30-57",
  "30-58",
  "30-59",
  "30-60",
  "30-61",
  "30-62",
  "30-63",
  "30-64",
  "30-65",
  "30-66",
  "30-67",
  "30-68",
  "30-69",
  "30-70",
  "30-71",
  "30-72",
  "30-73",
  "30-74",
  "30-75",
  "30-76",
  "30-77",
  "30-79",
  "31-0",
  "31-30",
  "31-32",
  "31-34",
  "31-45",
  "31-47",
  "31-49",
  "31-79",
  "32-0",
  "32-1",
  "32-2",
  "32-3",
  "32-4",
  "32-5",
  "32-6",
  "32-7",
  "32-8",
  "32-9",
  "32-10",
  "32-11",
  "32-12",
  "32-13",
  "32-14",
  "32-15",
  "32-16",
  "32-17",
  "32-18",
  "32-19",
  "32-20",
  "32-21",
  "32-22",
  "32-23",
  "32-24",
  "32-25",
  "32-26",
  "32-27",
  "32-28",
  "32-29",
  "32-30",
  "32-32",
  "32-34",
  "32-35",
  "32-36",
  "32-37",
  "32-38",
  "32-39",
  "32-40",
  "32-41",
  "32-42",
  "32-43",
  "32-44",
  "32-45",
  "32-47",
  "32-49",
  "32-50",
  "32-51",
  "32-52",
  "32-53",
  "32-54",
  "32-55",
  "32-56",
  "32-57",
  "32-58",
  "32-59",
  "32-60",
  "32-61",
  "32-62",
  "32-63",
  "32-64",
  "32-65",
  "32-66",
  "32-67",
  "32-68",
  "32-69",
  "32-70",
  "32-71",
  "32-72",
  "32-73",
  "32-74",
  "32-75",
  "32-76",
  "32-77",
  "32-79",
  "33-32",
  "33-39",
  "33-40",
  "33-47",
  "33-79",
  "34-0",
  "34-1",
  "34-2",
  "34-3",
  "34-4",
  "34-5",
  "34-6",
  "34-7",
  "34-8",
  "34-9",
  "34-10",
  "34-11",
  "34-12",
  "34-13",
  "34-14",
  "34-15",
  "34-16",
  "34-17",
  "34-18",
  "34-19",
  "34-20",
  "34-21",
  "34-22",
  "34-23",
  "34-24",
  "34-25",
  "34-26",
  "34-27",
  "34-28",
  "34-29",
  "34-30",
  "34-31",
  "34-32",
  "34-33",
  "34-34",
  "34-35",
  "34-36",
  "34-37",
  "34-38",
  "34-39",
  "34-40",
  "34-41",
  "34-42",
  "34-43",
  "34-44",
  "34-45",
  "34-46",
  "34-47",
  "34-48",
  "34-49",
  "34-50",
  "34-51",
  "34-52",
  "34-53",
  "34-54",
  "34-55",
  "34-56",
  "34-57",
  "34-58",
  "34-59",
  "34-60",
  "34-61",
  "34-62",
  "34-63",
  "34-64",
  "34-65",
  "34-66",
  "34-67",
  "34-68",
  "34-69",
  "34-70",
  "34-71",
  "34-72",
  "34-73",
  "34-74",
  "34-75",
  "34-76",
  "34-77",
  "34-78",
  "34-79"
];
export { TARGET_WALL };
