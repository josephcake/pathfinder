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
  "0-59",
  "1-27",
  "1-57",
  "1-59",
  "2-0",
  "2-1",
  "2-2",
  "2-3",
  "2-4",
  "2-5",
  "2-6",
  "2-7",
  "2-8",
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
  "2-27",
  "2-29",
  "2-30",
  "2-31",
  "2-32",
  "2-33",
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
  "2-46",
  "2-47",
  "2-48",
  "2-49",
  "2-50",
  "2-51",
  "2-52",
  "2-53",
  "2-54",
  "2-55",
  "2-57",
  "2-59",
  "3-25",
  "3-27",
  "3-29",
  "3-55",
  "3-57",
  "3-59",
  "4-1",
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
  "4-20",
  "4-21",
  "4-22",
  "4-23",
  "4-25",
  "4-27",
  "4-29",
  "4-31",
  "4-32",
  "4-33",
  "4-34",
  "4-35",
  "4-36",
  "4-37",
  "4-38",
  "4-39",
  "4-40",
  "4-41",
  "4-42",
  "4-43",
  "4-44",
  "4-45",
  "4-46",
  "4-47",
  "4-48",
  "4-49",
  "4-50",
  "4-51",
  "4-52",
  "4-53",
  "4-57",
  "4-59",
  "5-1",
  "5-23",
  "5-25",
  "5-27",
  "5-29",
  "5-31",
  "5-53",
  "5-55",
  "5-57",
  "5-59",
  "6-1",
  "6-3",
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
  "6-23",
  "6-25",
  "6-27",
  "6-29",
  "6-31",
  "6-33",
  "6-34",
  "6-35",
  "6-36",
  "6-37",
  "6-38",
  "6-39",
  "6-40",
  "6-41",
  "6-42",
  "6-43",
  "6-44",
  "6-45",
  "6-46",
  "6-47",
  "6-48",
  "6-49",
  "6-50",
  "6-51",
  "6-53",
  "6-55",
  "6-57",
  "6-59",
  "7-1",
  "7-3",
  "7-21",
  "7-23",
  "7-25",
  "7-27",
  "7-29",
  "7-31",
  "7-33",
  "7-51",
  "7-53",
  "7-55",
  "7-57",
  "7-59",
  "8-1",
  "8-3",
  "8-5",
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
  "8-21",
  "8-23",
  "8-25",
  "8-27",
  "8-29",
  "8-31",
  "8-33",
  "8-35",
  "8-36",
  "8-37",
  "8-38",
  "8-39",
  "8-40",
  "8-42",
  "8-43",
  "8-44",
  "8-45",
  "8-46",
  "8-47",
  "8-48",
  "8-49",
  "8-51",
  "8-53",
  "8-55",
  "8-57",
  "8-59",
  "9-1",
  "9-3",
  "9-5",
  "9-19",
  "9-21",
  "9-23",
  "9-25",
  "9-27",
  "9-29",
  "9-31",
  "9-33",
  "9-35",
  "9-49",
  "9-51",
  "9-53",
  "9-55",
  "9-57",
  "9-59",
  "10-1",
  "10-3",
  "10-5",
  "10-7",
  "10-8",
  "10-9",
  "10-10",
  "10-11",
  "10-12",
  "10-13",
  "10-14",
  "10-15",
  "10-16",
  "10-17",
  "10-19",
  "10-21",
  "10-23",
  "10-25",
  "10-27",
  "10-29",
  "10-31",
  "10-33",
  "10-35",
  "10-37",
  "10-38",
  "10-39",
  "10-40",
  "10-41",
  "10-42",
  "10-43",
  "10-44",
  "10-45",
  "10-46",
  "10-47",
  "10-49",
  "10-51",
  "10-53",
  "10-55",
  "10-57",
  "10-59",
  "11-1",
  "11-3",
  "11-5",
  "11-7",
  "11-17",
  "11-19",
  "11-21",
  "11-23",
  "11-25",
  "11-27",
  "11-29",
  "11-31",
  "11-33",
  "11-35",
  "11-37",
  "11-47",
  "11-49",
  "11-51",
  "11-53",
  "11-55",
  "11-57",
  "11-59",
  "12-1",
  "12-3",
  "12-5",
  "12-7",
  "12-9",
  "12-10",
  "12-11",
  "12-12",
  "12-13",
  "12-14",
  "12-15",
  "12-17",
  "12-19",
  "12-21",
  "12-23",
  "12-25",
  "12-27",
  "12-29",
  "12-31",
  "12-33",
  "12-35",
  "12-37",
  "12-39",
  "12-41",
  "12-42",
  "12-43",
  "12-44",
  "12-45",
  "12-47",
  "12-49",
  "12-51",
  "12-53",
  "12-55",
  "12-57",
  "12-59",
  "13-1",
  "13-3",
  "13-5",
  "13-7",
  "13-9",
  "13-15",
  "13-17",
  "13-19",
  "13-21",
  "13-23",
  "13-25",
  "13-27",
  "13-29",
  "13-31",
  "13-33",
  "13-35",
  "13-37",
  "13-39",
  "13-45",
  "13-47",
  "13-49",
  "13-51",
  "13-53",
  "13-55",
  "13-57",
  "13-59",
  "14-1",
  "14-3",
  "14-5",
  "14-7",
  "14-9",
  "14-11",
  "14-13",
  "14-15",
  "14-17",
  "14-19",
  "14-21",
  "14-23",
  "14-25",
  "14-27",
  "14-29",
  "14-31",
  "14-33",
  "14-35",
  "14-37",
  "14-39",
  "14-41",
  "14-42",
  "14-43",
  "14-45",
  "14-47",
  "14-49",
  "14-51",
  "14-53",
  "14-55",
  "14-57",
  "14-59",
  "15-1",
  "15-3",
  "15-5",
  "15-7",
  "15-9",
  "15-11",
  "15-13",
  "15-17",
  "15-19",
  "15-21",
  "15-23",
  "15-25",
  "15-27",
  "15-29",
  "15-33",
  "15-35",
  "15-37",
  "15-39",
  "15-41",
  "15-45",
  "15-47",
  "15-49",
  "15-51",
  "15-53",
  "15-55",
  "15-57",
  "16-1",
  "16-3",
  "16-5",
  "16-7",
  "16-9",
  "16-11",
  "16-12",
  "16-13",
  "16-15",
  "16-17",
  "16-19",
  "16-21",
  "16-23",
  "16-25",
  "16-27",
  "16-29",
  "16-31",
  "16-33",
  "16-35",
  "16-37",
  "16-39",
  "16-41",
  "16-42",
  "16-43",
  "16-45",
  "16-47",
  "16-49",
  "16-51",
  "16-53",
  "16-55",
  "16-57",
  "16-59",
  "17-1",
  "17-3",
  "17-5",
  "17-7",
  "17-9",
  "17-15",
  "17-17",
  "17-19",
  "17-21",
  "17-23",
  "17-25",
  "17-27",
  "17-29",
  "17-31",
  "17-33",
  "17-35",
  "17-37",
  "17-39",
  "17-45",
  "17-47",
  "17-49",
  "17-51",
  "17-53",
  "17-55",
  "17-57",
  "17-59",
  "18-1",
  "18-3",
  "18-5",
  "18-7",
  "18-9",
  "18-10",
  "18-11",
  "18-12",
  "18-13",
  "18-14",
  "18-15",
  "18-17",
  "18-21",
  "18-23",
  "18-25",
  "18-27",
  "18-29",
  "18-31",
  "18-33",
  "18-35",
  "18-37",
  "18-39",
  "18-40",
  "18-41",
  "18-42",
  "18-43",
  "18-44",
  "18-45",
  "18-47",
  "18-49",
  "18-51",
  "18-53",
  "18-55",
  "18-57",
  "18-59",
  "19-1",
  "19-3",
  "19-5",
  "19-7",
  "19-17",
  "19-19",
  "19-21",
  "19-23",
  "19-25",
  "19-27",
  "19-29",
  "19-31",
  "19-33",
  "19-35",
  "19-37",
  "19-49",
  "19-51",
  "19-53",
  "19-55",
  "19-57",
  "19-59",
  "20-1",
  "20-3",
  "20-5",
  "20-7",
  "20-9",
  "20-10",
  "20-11",
  "20-12",
  "20-13",
  "20-14",
  "20-15",
  "20-16",
  "20-17",
  "20-19",
  "20-21",
  "20-23",
  "20-25",
  "20-27",
  "20-29",
  "20-31",
  "20-33",
  "20-35",
  "20-37",
  "20-38",
  "20-39",
  "20-40",
  "20-41",
  "20-42",
  "20-43",
  "20-44",
  "20-45",
  "20-46",
  "20-47",
  "20-49",
  "20-51",
  "20-53",
  "20-55",
  "20-57",
  "20-59",
  "21-1",
  "21-3",
  "21-5",
  "21-19",
  "21-21",
  "21-23",
  "21-25",
  "21-27",
  "21-29",
  "21-31",
  "21-33",
  "21-35",
  "21-49",
  "21-51",
  "21-53",
  "21-55",
  "21-57",
  "21-59",
  "22-1",
  "22-5",
  "22-6",
  "22-7",
  "22-8",
  "22-9",
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
  "22-21",
  "22-23",
  "22-25",
  "22-27",
  "22-29",
  "22-31",
  "22-33",
  "22-35",
  "22-36",
  "22-37",
  "22-38",
  "22-39",
  "22-40",
  "22-41",
  "22-42",
  "22-43",
  "22-44",
  "22-45",
  "22-46",
  "22-47",
  "22-48",
  "22-49",
  "22-51",
  "22-53",
  "22-55",
  "22-57",
  "22-59",
  "23-1",
  "23-3",
  "23-21",
  "23-23",
  "23-25",
  "23-27",
  "23-29",
  "23-31",
  "23-33",
  "23-51",
  "23-53",
  "23-55",
  "23-57",
  "23-59",
  "24-1",
  "24-3",
  "24-4",
  "24-5",
  "24-6",
  "24-7",
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
  "24-23",
  "24-25",
  "24-27",
  "24-29",
  "24-31",
  "24-33",
  "24-34",
  "24-35",
  "24-36",
  "24-37",
  "24-38",
  "24-39",
  "24-41",
  "24-42",
  "24-43",
  "24-44",
  "24-45",
  "24-46",
  "24-47",
  "24-48",
  "24-49",
  "24-50",
  "24-51",
  "24-53",
  "24-55",
  "24-57",
  "24-59",
  "25-1",
  "25-23",
  "25-25",
  "25-27",
  "25-29",
  "25-31",
  "25-53",
  "25-55",
  "25-57",
  "25-59",
  "26-1",
  "26-2",
  "26-3",
  "26-4",
  "26-5",
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
  "26-25",
  "26-27",
  "26-29",
  "26-31",
  "26-32",
  "26-33",
  "26-34",
  "26-35",
  "26-36",
  "26-37",
  "26-38",
  "26-39",
  "26-40",
  "26-41",
  "26-42",
  "26-43",
  "26-44",
  "26-45",
  "26-46",
  "26-47",
  "26-48",
  "26-49",
  "26-50",
  "26-51",
  "26-52",
  "26-53",
  "26-55",
  "26-57",
  "26-59",
  "27-25",
  "27-27",
  "27-29",
  "27-55",
  "27-59",
  "28-0",
  "28-1",
  "28-2",
  "28-3",
  "28-4",
  "28-5",
  "28-6",
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
  "28-29",
  "28-30",
  "28-31",
  "28-32",
  "28-33",
  "28-34",
  "28-35",
  "28-36",
  "28-37",
  "28-38",
  "28-39",
  "28-40",
  "28-41",
  "28-42",
  "28-43",
  "28-44",
  "28-45",
  "28-46",
  "28-47",
  "28-48",
  "28-49",
  "28-50",
  "28-51",
  "28-52",
  "28-53",
  "28-54",
  "28-55",
  "28-57",
  "28-59",
  "29-27",
  "29-57",
  "29-59"
];
export { TARGET_WALL };
