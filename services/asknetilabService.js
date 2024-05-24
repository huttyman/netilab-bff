const mockResponse = [
    {
      docid: 47817,
      dknum: 522,
      dkyear: 2546,
      s_text: "\\n หลังจากที่จำเลยกับผู้เสียหายโต้เถียงกันแล้ว...",
      exact_score: 0.5127553351499101,
      near_score: 0.03027259661098669,
      exact_res: 0.11917387844236198,
      near_res: 0.04137506569755308,
      total: 0.49533101814871944
    },
    {
      docid: 74802,
      dknum: 423,
      dkyear: 2475,
      s_text: "เรือนปลูกลงในที่ดินของผู้อื่น แม้ในสัญญาเช่าจะอนุญาตให้ผู้ปลูกรื้อไปได้...",
      exact_score: 0.34950457895715514,
      near_score: 0.690476343280481,
      exact_res: 0,
      near_res: 0.5288231225473512,
      total: 0.37651392011497453
    },
    // Add more mock data as needed...
  ];
  
  exports.processText = (text) => {
    // Add logic to process the text and generate a response
    // For now, return the mock response
    return mockResponse;
  };
  