const config = {
  // Use /api new on the server to obtain your personal key
  "api_key": "your api key",
  "player": "GoodestEnglish",
  "stats": [
      "{field:formattedName}",
      "§7Skywars 等級: {field:stats.SkyWars.levelFormatted}",
      "§7等級進度: §b{field:stats.SkyWars.current_exp}§7/§a{field:stats.SkyWars.total_exp_need}",
      "§7總擊殺次數: §a{field:stats.SkyWars.kills}",
      "§7總勝利次數: §a{field:stats.SkyWars.wins}",
      "§7總頭顱數: §5{field:stats.SkyWars.heads}",
  ],
  "goals": {
    "stats.SkyWars.wins": 10000,
  },
  "display": {
    "font": "Minecraft",
    "font_size": 40,
    "outline": false,
  },
};
