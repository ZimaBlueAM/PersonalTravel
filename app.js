const img = (name) => `assets/places/${name}.jpg`;

const sourceLinks = {
  operation: {
    label: "JR Hokkaido Train Operation Information",
    url: "https://www3.jrhokkaido.co.jp/webunkou/index_en.html"
  },
  timetable: {
    label: "JR Hokkaido Timetable / Route Map / Train Guide",
    url: "https://www.jrhokkaido.co.jp/global/english/train/"
  },
  reservation: {
    label: "JR Hokkaido Train Reservation",
    url: "https://www.jrhokkaido.co.jp/global/english/ticket/reservation/index.html"
  },
  asahikawa: {
    label: "JR Hokkaido: Sapporo - Asahikawa",
    url: "https://www.jrhokkaido.co.jp/global/english/train/guide/asahikawa.html"
  },
  obihiro: {
    label: "JR Hokkaido: Sapporo - Obihiro / Kushiro",
    url: "https://www.jrhokkaido.co.jp/global/english/train/guide/obihiro.html"
  },
  hakodate: {
    label: "JR Hokkaido: Sapporo - Hakodate",
    url: "https://www.jrhokkaido.co.jp/global/english/train/guide/hakodate.html"
  },
  shinkansen: {
    label: "JR Hokkaido: Hokkaido Shinkansen / Hakodate Liner",
    url: "https://www.jrhokkaido.co.jp/global/english/shinkansen/index.html"
  },
  furanoClosed: {
    label: "JR Hokkaido: Furano - Shintoku bus conversion notice",
    url: "https://www.jrhokkaido.co.jp/CM/Info/press/pdf/20240222_KO_Nemuro_Furano_Shintoku.pdf"
  },
  jreast: {
    label: "JR East: Shinkansen train status",
    url: "https://traininfo.jreast.co.jp/train_info/e/shinkansen.aspx"
  },
  northliner: {
    label: "Japan Bus Online: North Liner Asahikawa - Obihiro",
    url: "https://japanbusonline.com/en/CourseSearch/10100340001"
  },
  furanoCityBus: {
    label: "Furano City: Furano - Shintoku replacement buses",
    url: "https://www.city.furano.hokkaido.jp/life/docs/542998.html?cat=%2Flife%2Fkankou%2F60%2F"
  },
  sapporoNijo: {
    label: "Sapporo Travel: Nijo Fish Market",
    url: "https://www.sapporo.travel/en/spot/facility/nijo_fish_market/"
  },
  sapporoRamen: {
    label: "JNTO: Sapporo Ramen Street",
    url: "https://www.japan.travel/en/ph/story/ramen-street-japan/"
  },
  otaruCanal: {
    label: "Hokkaido Love: Otaru Canal",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_10040.html"
  },
  otaruDay: {
    label: "JNTO: A day out in Otaru",
    url: "https://www.japan.travel/en/uk/inspiration/a-day-out-in-otaru/"
  },
  nikkaYoichi: {
    label: "Nikka Whisky: Hokkaido Yoichi Distillery",
    url: "https://www.nikka.com/en/distilleries/yoichi/"
  },
  jntoNikka: {
    label: "JNTO: Nikka Whisky Yoichi Distillery",
    url: "https://www.japan.travel/en/spot/1928/"
  },
  capeKamui: {
    label: "Hokkaido Love: Cape Kamui",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_10342.html"
  },
  capeKamuiAccess: {
    label: "Good Luck Trip: Cape Kamui access",
    url: "https://www.gltjp.com/en/directory/item/14829/"
  },
  biei: {
    label: "Biei Tourism Association",
    url: "https://www.biei-hokkaido.jp/en/"
  },
  bluePondBiei: {
    label: "Biei Tourism Association: Shirogane Blue Pond",
    url: "https://www.biei-hokkaido.jp/en/facility/shirogane-blue-pond"
  },
  bluePond: {
    label: "JNTO: Blue Pond",
    url: "https://www.japan.travel/en/spot/1889/"
  },
  jrFuranoBiei: {
    label: "JR Hokkaido: Furano / Biei sightseeing trains",
    url: "https://www.jrhokkaido.co.jp/global/english/travel/furanobiei/train/index.html"
  },
  jrNorokkoFurano: {
    label: "JR Hokkaido: Furano Biei Norokko Train",
    url: "https://www.jrhokkaido.co.jp/global/english/travel/tour-train/tour-train04.html"
  },
  jrSightseeing2026: {
    label: "JR Hokkaido: 2026 sightseeing train operation PDF",
    url: "https://www.jrhokkaido.co.jp/CM/Info/news_en/pdf/sightseeing_train_2026_en.pdf"
  },
  farmTomita: {
    label: "Farm Tomita official website",
    url: "https://www.farm-tomita.co.jp/en/"
  },
  farmTomitaEast: {
    label: "Farm Tomita: Lavender East",
    url: "https://www.farm-tomita.co.jp/en/east/"
  },
  farmTomitaHokkaido: {
    label: "Hokkaido Love: Farm Tomita",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_10174.html"
  },
  asahikawaRamen: {
    label: "Hokkaido Love: Asahikawa Ramen Village",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_11227.html"
  },
  asahikawaRamenStation: {
    label: "Taisetsu Kamui: Asahikawa ramen around station",
    url: "https://taisetsu-kamui.jp/en/features/29869"
  },
  kushiro: {
    label: "Kushiro / Lake Akan official travel guide",
    url: "https://en.kushiro-lakeakan.com/"
  },
  kushiroNorokko: {
    label: "JR Hokkaido: Kushiro Shitsugen Norokko Train",
    url: "https://www.jrhokkaido.co.jp/global/english/travel/tour-train/tour-train03.html"
  },
  kushiroNorokkoHokkaido: {
    label: "Hokkaido Love: Kushiro Shitsugen Norokko Train",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_10126.html"
  },
  kushiroRobata: {
    label: "Hokkaido Love: Kushiro robata-yaki",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_12816.html"
  },
  kushiroRobataOfficial: {
    label: "Kushiro official guide: Robatayaki",
    url: "https://en.kushiro-lakeakan.com/eat_souvenir/eat_souvenir_category/gourmet-en/robatayaki-en/"
  },
  mooRobata: {
    label: "Kushiro Fisherman's Wharf MOO: Ganpeki-Robata",
    url: "https://www.moo946.com/lang-en/"
  },
  akkeshiGuide: {
    label: "Akkeshi town guidebook",
    url: "https://www.akkeshi-town.jp/file/contents/2798/46569/guidebook_English.pdf"
  },
  akkeshiModel: {
    label: "Akkeshi model courses",
    url: "https://akkeshi.shop/en/modelcourse/"
  },
  akkeshiOysters: {
    label: "Kushiro official guide: Akkeshi oysters",
    url: "https://en.kushiro-lakeakan.com/sightseeing_around/4403/"
  },
  nosappu: {
    label: "JNTO: Cape Nosappu",
    url: "https://www.japan.travel/en/spot/2146/"
  },
  nemuroOfficialFaq: {
    label: "Visit Nemuro Japan: FAQ / transportation",
    url: "https://www.visitnemurojapan.com/en/faq/"
  },
  nemuroTourism: {
    label: "Nemuro tourism guide",
    url: "https://uu-nippon.com/hokkaido/corporate/nemuro-kankou.shtml"
  },
  eastHokkaido: {
    label: "East Hokkaido: Kushiro / Nemuro access",
    url: "https://easthokkaido.com/en/winter-highlight-kushiro/"
  },
  hakodateTravel: {
    label: "Travel Hakodate official guide",
    url: "https://www.hakodate.travel/en/"
  },
  hakodateTransport: {
    label: "Travel Hakodate: transportation",
    url: "https://www.hakodate.travel/en/information/transportation/"
  },
  mtHakodate: {
    label: "Hokkaido Love: Mt. Hakodate",
    url: "https://www.visit-hokkaido.jp/en/spot/detail_10095.html"
  },
  motomachi: {
    label: "JNTO: Motomachi Hakodate",
    url: "https://www.japan.travel/en/spot/1902/"
  },
  hachinohe: {
    label: "Visit Hachinohe official guide",
    url: "https://visithachinohe.com/en/"
  },
  hachinoheFood: {
    label: "Amazing AOMORI: Hachinohe food",
    url: "https://aomori-tourism.com/en/feature/detail_309.html"
  },
  hachinoheTanesashiFood: {
    label: "Visit Hachinohe: food around Tanesashi Coast",
    url: "https://visithachinohe.com/en/park/shoku/"
  },
  tatehanaMarket: {
    label: "Good Luck Trip: Tatehana Wharf Morning Market",
    url: "https://www.gltjp.com/en/directory/item/12490/"
  },
  tanesashi: {
    label: "Amazing AOMORI: Tanesashi Coast",
    url: "https://aomori-tourism.com/en/spot/detail_30.html"
  },
  matsushima: {
    label: "Matsushima official tourism",
    url: "https://www.matsushima-kanko.com/en/"
  },
  jntoMatsushima: {
    label: "JNTO: Matsushima",
    url: "https://www.japan.travel/en/spot/2127/"
  },
  matsushimaFood: {
    label: "Nihon Sankei: Matsushima food",
    url: "https://nihonsankei.jp/eng/matsu_kanko.html"
  },
  matsushimaSeafood: {
    label: "Discover Sendai: culinary Matsushima",
    url: "https://discoversendai.travel/places/culinary-matsushima/"
  },
  zuiganji: {
    label: "Zuiganji Temple official website",
    url: "https://www.zuiganji.or.jp/english/"
  },
  sendai: {
    label: "Discover Sendai official guide",
    url: "https://discoversendai.travel/"
  },
  jntoSendai: {
    label: "JNTO: Sendai",
    url: "https://www.japan.travel/en/destinations/tohoku/miyagi/sendai-area/"
  },
  sendaiGuidebook: {
    label: "Discover Sendai guidebook PDF",
    url: "https://discoversendai.travel/pdf/182/sendai_guidebook.pdf"
  },
  loopleSendai: {
    label: "Visit Miyagi: Loople Sendai access",
    url: "https://visitmiyagi.com/model_course/history-and-culture-of-sendai/"
  },
  tokyo: {
    label: "GO TOKYO official guide",
    url: "https://www.gotokyo.org/en/index.html"
  },
  goTokyoGinza: {
    label: "GO TOKYO: Ginza",
    url: "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html"
  },
  odaiba: {
    label: "GO TOKYO: Odaiba",
    url: "https://www.gotokyo.org/en/destinations/southern-tokyo/odaiba/index.html"
  },
  odaibaOfficial: {
    label: "Tokyo Odaiba official tourist information",
    url: "https://www.tokyo-odaiba.net/en/"
  },
  rainbowBridge: {
    label: "Minato City: Rainbow Bridge",
    url: "https://visit-minato-city.tokyo/en/places/700"
  },
  rainbowBridgeGoodLuck: {
    label: "Good Luck Trip: Rainbow Bridge",
    url: "https://www.gltjp.com/en/directory/item/rainbow-bridge/"
  }
};

const checkedAt = "2026-07-05 22:59 JST";
const jrHokkaidoLiveNote = `本次核验 ${checkedAt}：JR 北海道运行信息 JSON 对特急、快速 Airport、函馆/千岁线、函馆 Liner、函馆线、石胜线、根室线、花咲线、富良野线、北海道新干线均显示无停驶/30分钟以上延误信息。出发当天仍以实时页面为准。`;
const jrEastLiveNote = "本次核验 2026-07-05 21:58 JST：JR East 页面显示东北新干线 Normal operation；同页服务暂停栏出现 Hayabusa 39 在新青森-新函馆北斗区间停运信息，所以跨海当天必须按具体车次再查。";

const coreTransfers = [
  {
    id: "transfer-arrival",
    icon: "train",
    from: "新千岁 CTS",
    to: "札幌基地",
    time: "约 40-50 分钟",
    status: "正常核验",
    verdict: "落地后只进城，不再叠加远支线。",
    steps: ["新千岁机场站 -> 札幌站：快速 Airport / 普通 JR 系统。", "到札幌后先入住、补给、吃饭。"],
    note: "JR 北海道实时核验显示 Airport 与札幌区域相关线路无停驶/30分钟以上延误信息。",
    sources: ["operation", "timetable"]
  },
  {
    id: "transfer-sapporo-asahikawa",
    icon: "train",
    from: "札幌基地",
    to: "旭川基地",
    time: "约 1.5 小时",
    status: "最顺主干线",
    verdict: "这是整条路线最干净的一段基地移动。",
    steps: ["札幌 -> 旭川：JR 特急 Kamui / Lilac。", "JR 北海道特急全席指定；持 pass 也建议提前取指定席。"],
    note: "官方列车指南确认 Kamui / Lilac 连接札幌与旭川，信息页标注 2026 年 3 月有效。",
    sources: ["asahikawa", "reservation", "operation"]
  },
  {
    id: "transfer-asahikawa-kushiro",
    icon: "bus",
    from: "旭川基地",
    to: "钏路基地",
    time: "约 6-9 小时",
    status: "长移动日",
    caution: true,
    verdict: "不要再写成旭川到钏路 JR 直通；公共交通要二选一。",
    steps: [
      "推荐地理逻辑：旭川 -> 带广 North Liner 预约制巴士，再接 JR 到钏路。",
      "JR-only 备选：旭川 -> 札幌/南千岁 -> 钏路，绕回主干线再坐 Ozora。",
      "富良野 -> 新得铁路已废止，不能从富良野一路 JR 直插十胜。"
    ],
    note: "North Liner 公开订票页显示旭川-带广经富良野/新得 5 往复，另有三国峠方向 1 往复；实际班次以乘车日为准。",
    sources: ["northliner", "furanoClosed", "furanoCityBus", "obihiro", "operation"]
  },
  {
    id: "transfer-kushiro-hakodate",
    icon: "train",
    from: "钏路基地",
    to: "函馆基地",
    time: "约 8-10 小时",
    status: "极长移动日",
    caution: true,
    verdict: "JR 可拼接，但这不是观光日；强烈建议早出发或拆分。",
    steps: ["钏路 -> 南千岁/札幌：特急 Ozora 主干线。", "南千岁/札幌 -> 函馆：特急 Hokuto。", "中间留足换乘、吃饭、延误缓冲。"],
    note: "JR 北海道指南确认 Ozora 连接札幌-钏路、Hokuto 连接札幌-函馆；两个系统拼起来才是钏路到函馆。",
    sources: ["obihiro", "hakodate", "operation", "reservation"]
  },
  {
    id: "transfer-hakodate-sendai",
    icon: "train",
    from: "函馆基地",
    to: "仙台基地",
    time: "约 3.5-4.5 小时",
    status: "跨海换乘",
    verdict: "真实链路是函馆站 -> 新函馆北斗 -> 新青森 -> 仙台。",
    steps: [
      "函馆 -> 新函馆北斗：Hakodate Liner，约 15-22 分钟。",
      "新函馆北斗 -> 新青森：北海道新干线，经青函隧道。",
      "新青森 -> 仙台：东北新干线。"
    ],
    note: "JR East 当前显示东北新干线整体正常，但服务暂停栏列出个别跨海车次停运；跨海日必须查具体 Hayabusa/Hayate 车次。",
    sources: ["shinkansen", "jreast"]
  },
  {
    id: "transfer-sendai-tokyo",
    icon: "train",
    from: "仙台基地",
    to: "东京基地",
    time: "约 1.5-2 小时",
    status: "本州主干线",
    verdict: "最后一跳很顺，但到东京后体力消耗来自人流。",
    steps: ["仙台 -> 东京：东北新干线直达。", "到达东京后只做市内短点，不再扩张远郊。"],
    note: "JR East 当前页面显示东北新干线 Normal operation；仍以出发当天实时状态为准。",
    sources: ["jreast"]
  }
];

const routeOptimizations = [
  {
    id: "opt-six-bases",
    icon: "check",
    title: "继续用 6 基地，不拆成 19 站搬家",
    meta: "行李 / 工作 / 体力",
    verdict: "这是这条路线最重要的结构判断。",
    steps: [
      "基地只负责住宿和主移动，城市与子目的地全部可选。",
      "小樽、余市、美瑛、富良野、厚岸、根室、松岛都不应该变成搬行李住宿点。",
      "每次换基地后的晚上默认只吃饭和恢复。"
    ],
    note: "页面大纲默认只露出 6 个基地；展开后才看城市和子目的地。",
    sources: ["operation", "asahikawa", "obihiro", "hakodate", "shinkansen", "jreast"]
  },
  {
    id: "opt-asahikawa-kushiro",
    icon: "alert",
    title: "旭川到钏路必须当长移动日",
    meta: "最容易排错的一段",
    caution: true,
    verdict: "不要把旭川 -> 富良野 -> 带广 -> 钏路写成顺直 JR。",
    steps: [
      "2024-04-01 起富良野-新得铁路事业废止，不能用这段 JR 穿越到十胜。",
      "公共交通可选：North Liner 巴士到带广，再接 JR 去钏路。",
      "JR-only 可走旭川 -> 札幌/南千岁 -> 钏路，但绕路且很长。"
    ],
    note: "如果想舒服，带广要么删掉，要么作为中继停留，不要塞进观光日。",
    sources: ["furanoClosed", "furanoCityBus", "northliner", "obihiro"]
  },
  {
    id: "opt-seikan",
    icon: "train",
    title: "北海道到本州：函馆站不能直上新干线",
    meta: "青函隧道链路",
    caution: true,
    verdict: "真实换乘是函馆 -> 新函馆北斗 -> 新青森 -> 仙台。",
    steps: [
      "函馆站到新函馆北斗坐 Hakodate Liner，官方标注 15-22 分钟、每天 16 往复。",
      "新函馆北斗到新青森才是北海道新干线跨海段，经青函隧道。",
      "JR East 当前显示东北新干线整体正常，但个别 Hayabusa 跨海车次有停运记录，必须按车次查。"
    ],
    note: "跨海当天不要压 5 分钟换乘；给买水、上厕所、找站台留余量。",
    sources: ["shinkansen", "jreast"]
  },
  {
    id: "opt-seasonal-trains",
    icon: "info",
    title: "观光列车只当加分项，不当骨架",
    meta: "富良野 / 钏路",
    verdict: "富良野、美瑛、钏路湿原的观光列车很好，但要看运营日和座位。",
    steps: [
      "JR 北海道 2026 年富良野/美瑛观光列车集中在 6-9 月，部分列车全席指定。",
      "富良野・美瑛 Norokko 需要基本票价外的指定席券；没有指定席券可能无法乘车。",
      "钏路湿原 Norokko 也是季节性列车，适合替代一部分末端交通压力。"
    ],
    note: "先定基地移动，再决定是否把观光列车嵌进去。",
    sources: ["jrFuranoBiei", "jrNorokkoFurano", "jrSightseeing2026", "kushiroNorokko"]
  },
  {
    id: "opt-weather",
    icon: "route",
    title: "晴天给岬角和花田，雨天给城市和吃饭",
    meta: "执行规则",
    verdict: "不累版的核心不是少玩，而是把好天气留给正确对象。",
    steps: [
      "神威岬、纳沙布岬、函馆山、种差海岸都强依赖天气和风。",
      "小樽、余市 Nikka、札幌、旭川拉面、仙台站区、银座更适合雨天。",
      "长移动日不再加远支线，最多只保留站周边晚饭。"
    ],
    note: "每个弹窗里都把“最佳条件”和“别踩坑”单独列出来。",
    sources: ["capeKamuiAccess", "nikkaYoichi", "asahikawaRamen", "goTokyoGinza"]
  }
];

function sections(why, traffic, decision, extra = []) {
  return [
    { title: "为什么看", items: why },
    { title: "交通审计", items: traffic },
    { title: "取舍", items: decision },
    ...extra
  ];
}

function node(type, props) {
  return { type, ...props };
}

function base(props) {
  return node("base", props);
}

function city(props) {
  return node("city", { optional: true, ...props });
}

function spot(props) {
  return node("spot", { optional: true, ...props });
}

const outline = [
  base({
    id: "base-sapporo",
    title: "札幌基地",
    meta: "西北海道核心 / 前 4 晚",
    image: img("sapporo"),
    tags: ["基地", "已定住宿", "JR主干线正常"],
    summary: "第一基地。用来落地、恢复体力，并向小樽、余市、神威岬放射。",
    sections: sections(
      ["札幌是西北海道最稳的住宿与补给点。", "你们已经有前 4 晚住宿，因此这里应承担恢复、吃饭、洗衣、购物和短支线选择。"],
      [jrHokkaidoLiveNote, "离开札幌去旭川，官方列车指南确认有特急 Kamui / Lilac 连接札幌-旭川，且 JR 北海道特急全席指定。", "札幌往小樽、余市属于普通 JR 支线；神威岬不是 JR 直达。"],
      ["札幌段不需要强行每天外冲。天气差时留市内或小樽，晴天体力好再考虑神威岬。"],
      [{ title: "下一基地", items: ["札幌 -> 旭川：JR 逻辑成立，是本路线最干净的一段基地移动。"] }]
    ),
    sources: ["operation", "asahikawa", "reservation"],
    children: [
      city({
        id: "city-sapporo",
        hub: true,
        title: "札幌市",
        meta: "枢纽城市 / 本基地",
        image: img("sapporo"),
        tags: ["枢纽城市", "本基地", "低体力日"],
        summary: "这不是可有可无的景点城市，而是第一段路线的交通与生活枢纽。",
        sections: sections(
          ["札幌市负责让整段北海道开局稳定。", "它是机场、住宿、餐饮和西北海道支线之间的缓冲点。"],
          ["新千岁机场至札幌有 JR Airport 系统；本次 JR 北海道状态核验显示 Airport、函馆/千岁线无停驶/延误信息。", "札幌出发到旭川、函馆、钏路方向都有特急系统，但长线必须预留座位和换乘时间。"],
          ["落地日只做札幌市内，不要落地当天上神威岬。"]
        ),
        sources: ["operation", "reservation"],
        children: [
          spot({
            id: "spot-odori",
            title: "大通公园与电视塔",
            meta: "可选 / 城市方向感",
            image: img("sapporo"),
            tags: ["可选子目的地", "散步"],
            summary: "用最轻的方式建立札幌方向感。",
            sections: sections(
              ["大通公园和电视塔能快速给出札幌的城市轴线。"],
              ["市内步行或地铁即可，不依赖长距离 JR。"],
              ["落地后、雨天、长支线回来后适合放这里。"]
            )
          }),
          spot({
            id: "spot-susukino",
            title: "薄野与狸小路",
            meta: "可选 / 晚饭补给",
            image: img("sapporo"),
            tags: ["可选子目的地", "夜晚"],
            summary: "用晚饭和步行完成城市恢复。",
            sections: sections(
              ["薄野适合吃饭，狸小路适合遮雨和补给。"],
              ["市内短交通，不占用 JR 规划。"],
              ["远支线回来后只做这里，不再加景点。"]
            )
          }),
          spot({
            id: "spot-sapporo-food",
            title: "札幌拉面与二条市场方向",
            meta: "可选 / 吃饭补给",
            image: img("sapporo"),
            tags: ["可选子目的地", "雨天", "餐饮"],
            summary: "把札幌作为恢复基地时，吃饭和补给比继续跑景点更重要。",
            sections: sections(
              ["适合落地日、雨天或长支线返回后的低压力收束。"],
              ["市内短交通即可，不影响 JR 主线。"],
              ["不要为了名店排到过累；选离酒店近、排队可控的店。"]
            ),
            sources: ["sapporoNijo", "sapporoRamen"]
          })
        ]
      }),
      city({
        id: "city-otaru",
        title: "小樽",
        meta: "可选城市 / JR短支线",
        image: img("otaru"),
        tags: ["可选城市", "轻松半日"],
        summary: "札幌最稳的短支线。港口、运河、旧仓库都容易理解。",
        sections: sections(
          ["小樽适合低风险地获得一个清楚的港口城市画面。"],
          ["札幌-小樽属于 JR 函馆线方向短程移动；本次 JR 北海道状态核验显示相关札幌区域线路无停驶/延误信息。", "它是可选城市，不影响主线南下。"],
          ["体力一般时优先小樽，不要硬上神威岬。"]
        ),
        sources: ["operation", "timetable"],
        children: [
          spot({
            id: "spot-otaru-canal",
            title: "小樽运河",
            meta: "可选 / 港口夜景",
            image: img("otaru"),
            tags: ["可选子目的地", "核心画面"],
            summary: "仓库、水面和灯光构成小樽最直接的画面。",
            sections: sections(
              ["傍晚到夜晚最有氛围。"],
              ["从小樽站步行可达。"],
              ["小樽只选一个点时，选运河。"]
            )
          }),
          spot({
            id: "spot-sakaimachi",
            title: "仓库群与堺町通",
            meta: "可选 / 慢逛",
            image: img("otaru"),
            tags: ["可选子目的地", "玻璃与甜品"],
            summary: "旧建筑、甜品和玻璃街区串成轻松步行线。",
            sections: sections(
              ["这里适合不赶路地慢逛。"],
              ["与小樽运河自然串联。"],
              ["不要排成任务清单，留时间吃东西。"]
            )
          }),
          spot({
            id: "spot-otaru-glass-dessert",
            title: "北一硝子 / LeTAO 甜品方向",
            meta: "可选 / 店铺慢逛",
            image: img("otaru"),
            tags: ["可选子目的地", "甜品", "雨天"],
            summary: "把小樽从运河打卡变成轻松半日的关键补充。",
            sections: sections(
              ["玻璃店、甜品和旧建筑能让小樽更适合两个人慢逛。"],
              ["从运河和堺町通步行串联，不需要额外 JR。"],
              ["人多时只选一家坐下休息，别每家都排。"]
            ),
            sources: ["otaruDay", "otaruCanal"]
          })
        ]
      }),
      city({
        id: "city-yoichi",
        title: "余市",
        meta: "可选城市 / JR经小樽",
        image: img("yoichi"),
        tags: ["可选城市", "工业美学"],
        summary: "比小樽更安静，核心是 Nikka 威士忌蒸馏所。",
        sections: sections(
          ["余市适合看红砖厂房、蒸馏器和小城尺度。"],
          ["札幌到余市通常经小樽方向，JR 可达但班次比札幌-小樽少，必须查当天时刻。", jrHokkaidoLiveNote],
          ["适合小樽之外的安静日，不适合和神威岬硬塞满。"]
        ),
        sources: ["operation", "timetable"],
        children: [
          spot({
            id: "spot-nikka",
            title: "Nikka 余市蒸馏所",
            meta: "可选 / 工业空间",
            image: img("yoichi"),
            tags: ["可选子目的地", "重点"],
            summary: "红砖、蒸馏器、厂区尺度，是余市的主理由。",
            sections: sections(
              ["这里的价值不是单纯买酒，而是看工业空间和小城共存。"],
              ["从余市站可步行到达；内部参观、试饮和预约以当天官方规则为准。"],
              ["若没有预约，也可以只做外部和街区散步。"]
            )
          }),
          spot({
            id: "spot-yoichi-walk",
            title: "余市川与街区散步",
            meta: "可选 / 安静备选",
            image: img("yoichi"),
            tags: ["可选子目的地", "低密度"],
            summary: "让札幌段的节奏慢下来。",
            sections: sections(
              ["余市街区比小樽更松，适合恢复。"],
              ["和蒸馏所同日即可。"],
              ["不需要单独为它拆一天。"]
            )
          })
        ]
      }),
      city({
        id: "city-kamui",
        title: "神威岬",
        meta: "可选城市/区域 / 非JR直达",
        image: img("cape-kamui"),
        tags: ["可选城市", "重体验", "非JR直达"],
        summary: "札幌段最重的海岸选择。风景强，交通也最麻烦。",
        sections: sections(
          ["它的回报是日本海断崖、海色和尽头感。"],
          ["神威岬不能按 JR 直达处理，通常要 JR 到小樽/余市方向后接巴士或其他公路交通。", "JR 状态正常不等于这条支线一定顺，巴士班次、季节和天气才是决定因素。"],
          ["只在晴天、风不大、体力足时选。它是整日支线，不是顺手加点。"]
        ),
        sources: ["operation", "timetable"],
        children: [
          spot({
            id: "spot-kamui-path",
            title: "神威岬步道",
            meta: "可选 / 断崖步行",
            image: img("cape-kamui"),
            tags: ["可选子目的地", "天气依赖"],
            summary: "沿海岬步行到日本海尽头。",
            sections: sections(
              ["身体参与感强，风、坡度、海色都决定体验。"],
              ["步道开放与否、风雨情况要当天查。"],
              ["当天不要再安排远支线。"]
            )
          }),
          spot({
            id: "spot-shakotan-blue",
            title: "积丹蓝海岸线",
            meta: "可选 / 海色与灯塔",
            image: img("cape-kamui"),
            tags: ["可选子目的地", "晴天优先"],
            summary: "晴天海色很强，阴雨天价值明显下降。",
            sections: sections(
              ["它是这条支线的视觉核心。"],
              ["交通不只看 JR，还要看巴士与道路条件。"],
              ["天气普通时换小樽更稳。"]
            )
          })
        ]
      })
    ]
  }),
  base({
    id: "base-asahikawa",
    title: "旭川基地",
    meta: "中北海道核心 / 建议2晚",
    image: img("asahikawa"),
    tags: ["基地", "花田线", "下一段长移动"],
    summary: "第二基地。它让美瑛、富良野变成轻一点的支线，但不能把带广误写成 JR 直通。",
    sections: sections(
      ["旭川的意义是让中北海道停住，而不是从札幌硬冲花田。"],
      ["札幌-旭川由特急 Kamui / Lilac 连接，官方列车指南确认该主干线存在且为全席指定。", "旭川-美瑛-富良野走富良野线；本次状态核验显示富良野线无停驶/延误信息。", "旭川去钏路没有顺直 JR，JR-only 通常要折返札幌/南千岁再接特急 Ozora，属于长移动日。"],
      ["美瑛、富良野可选；带广不要作为旭川侧轻支线。"],
      [{ title: "下一基地", items: ["旭川 -> 钏路：可用 JR 拼接，但不是顺路短线；建议定义为移动日。"] }]
    ),
    sources: ["operation", "asahikawa", "obihiro", "furanoClosed"],
    children: [
      city({
        id: "city-asahikawa",
        hub: true,
        title: "旭川市",
        meta: "枢纽城市 / 本基地",
        image: img("asahikawa"),
        tags: ["枢纽城市", "本基地"],
        summary: "中北海道的住宿、吃饭、换乘点。",
        sections: sections(
          ["旭川让美瑛和富良野不再变成从札幌硬冲。"],
          ["札幌-旭川主干线正常作为 JR 特急系统运行；本次状态核验未见 JR 北海道相关停驶/延误信息。"],
          ["换基地日留在旭川，不要当晚再冲富良野。"]
        ),
        sources: ["operation", "asahikawa"],
        children: [
          spot({
            id: "spot-asahikawa-station",
            title: "旭川站周边",
            meta: "可选 / 补给",
            image: img("asahikawa"),
            tags: ["可选子目的地", "恢复"],
            summary: "吃饭、洗衣、买东西，把体力留给花田日。",
            sections: sections(
              ["这是功能性停留，不是打卡景点。"],
              ["站周边最省交通成本。"],
              ["换基地日适合只做这里。"]
            )
          }),
          spot({
            id: "spot-asahikawa-walk",
            title: "旭川城市散步",
            meta: "可选 / 缓冲",
            image: img("asahikawa"),
            tags: ["可选子目的地", "低压力"],
            summary: "比札幌更松的城市节奏。",
            sections: sections(
              ["它的价值是降低密度和疲劳。"],
              ["市内短交通或步行即可。"],
              ["不要给它安排任务感。"]
            )
          }),
          spot({
            id: "spot-asahikawa-ramen",
            title: "旭川拉面村 / 站前名店",
            meta: "可选 / 晚饭",
            image: img("asahikawa"),
            tags: ["可选子目的地", "餐饮", "雨天"],
            summary: "旭川的最好用法之一：移动日吃一碗拉面，然后早点休息。",
            sections: sections(
              ["旭川酱油拉面是城市辨识度很高的吃法。"],
              ["站前名店更省交通，拉面村更像主题集合；按酒店位置选。"],
              ["不要为了吃饭再跨很远，核心是恢复体力。"]
            ),
            sources: ["asahikawaRamen", "asahikawaRamenStation"]
          })
        ]
      }),
      city({
        id: "city-biei",
        title: "美瑛",
        meta: "可选城市 / 富良野线短支线",
        image: img("biei"),
        tags: ["可选城市", "丘陵农田"],
        summary: "看丘陵农田、拼布色块和缓坡道路。",
        sections: sections(
          ["美瑛看的是地貌结构：路、坡、田块、树列和远山。"],
          ["旭川-美瑛属于富良野线方向；本次 JR 北海道状态核验显示富良野线无停驶/延误信息。", "美瑛内部移动不全靠 JR，公交/包车/租车/骑行要提前决定。"],
          ["晴天价值高；天气普通就做短线。"]
        ),
        sources: ["operation", "timetable"],
        children: [
          spot({
            id: "spot-patchwork",
            title: "拼布之路",
            meta: "可选 / 丘陵农田",
            image: img("biei"),
            tags: ["可选子目的地", "核心"],
            summary: "农田、道路和丘陵形成清楚的空间图案。",
            sections: sections(
              ["这是美瑛最有识别度的画面。"],
              ["点位之间距离不短，公共交通需查班次。"],
              ["晴天优先。"]
            )
          }),
          spot({
            id: "spot-blue-pond",
            title: "青池方向",
            meta: "可选 / 需查班次",
            image: img("biei"),
            tags: ["可选子目的地", "进阶"],
            summary: "从农田结构切到颜色奇观。",
            sections: sections(
              ["青池和拼布之路不是同一种美。"],
              ["公共交通班次有限，不能临时硬加。"],
              ["体力一般时可以放弃。"]
            )
          }),
          spot({
            id: "spot-shikisai",
            title: "四季彩之丘",
            meta: "可选 / 花田丘陵",
            image: img("biei"),
            tags: ["可选子目的地", "花田", "晴天"],
            summary: "比拼布之路更直接的花田画面，适合想要颜色更满的一站。",
            sections: sections(
              ["它补的是花田色块，不是青池那种颜色奇观。"],
              ["美瑛内部点位分散，必须和拼布之路/青池取舍。"],
              ["晴天好看，人多时停留不要过长。"]
            ),
            sources: ["biei"]
          }),
          spot({
            id: "spot-shirahige",
            title: "白须瀑布 / 白金温泉方向",
            meta: "可选 / 青池同线",
            image: img("biei"),
            tags: ["可选子目的地", "同线", "末端交通"],
            summary: "如果已经去青池，可考虑顺路补白金温泉方向的水景。",
            sections: sections(
              ["它适合和青池同线理解，不适合单独为它绕路。"],
              ["公交班次有限，最好在出发前把回程也锁住。"],
              ["天气差或时间紧时优先保留青池，删瀑布。"]
            ),
            sources: ["bluePondBiei", "bluePond"]
          })
        ]
      }),
      city({
        id: "city-furano",
        title: "富良野",
        meta: "可选城市 / 富良野线",
        image: img("furano"),
        tags: ["可选城市", "7月花田"],
        summary: "7月主视觉。花田、缓坡和远山构成北海道夏天。",
        sections: sections(
          ["富良野是季节性画面最强的一站。"],
          ["旭川-富良野走富良野线；本次状态核验显示富良野线无停驶/延误信息。", "但富良野-新得 JR 已于 2024-04-01 废止，不能继续按 JR 直通去带广。"],
          ["可和美瑛同日，但不要接带广。"]
        ),
        sources: ["operation", "furanoClosed"],
        children: [
          spot({
            id: "spot-farm-tomita",
            title: "富田农场",
            meta: "可选 / 薰衣草主视觉",
            image: img("furano"),
            tags: ["可选子目的地", "核心"],
            summary: "富良野最稳的花田主画面。",
            sections: sections(
              ["哪怕人多，它仍然是富良野最清楚的画面。"],
              ["旺季要早点出发。"],
              ["天气好时优先级高。"]
            )
          }),
          spot({
            id: "spot-nakafurano",
            title: "中富良野花田",
            meta: "可选 / 坡面与远山",
            image: img("furano"),
            tags: ["可选子目的地", "延展"],
            summary: "看花田坡面和远山关系。",
            sections: sections(
              ["它让富良野不只是单个花田，而是地形体验。"],
              ["与富田农场相近，仍需查末端交通。"],
              ["体力一般时二选一。"]
            )
          }),
          spot({
            id: "spot-furano-norokko",
            title: "富良野・美瑛 Norokko 观光列车",
            meta: "可选 / 季节列车",
            image: img("furano"),
            tags: ["可选子目的地", "观光列车", "需预约"],
            summary: "把车程变成内容，但它不能替代对运营日和指定席的确认。",
            sections: sections(
              ["适合喜欢慢车、车窗、花田季节感的人。"],
              ["2026 年为季节运营，且指定席规则要提前确认。"],
              ["先定美瑛/富良野当天路线，再看能否嵌入列车。"]
            ),
            sources: ["jrFuranoBiei", "jrNorokkoFurano", "jrSightseeing2026"]
          }),
          spot({
            id: "spot-lavender-east",
            title: "Lavender East",
            meta: "可选 / 2026限期",
            image: img("furano"),
            tags: ["可选子目的地", "花田", "限期"],
            summary: "富田农场的延展花田，2026 年开放期较短，适合花期正好时加。",
            sections: sections(
              ["它更像薰衣草面积的延展，不是必去主点。"],
              ["2026 年官网开放期为 6月20日-7月20日，且受天气等影响。"],
              ["如果当天已经在富田农场耗尽体力，就删掉。"]
            ),
            sources: ["farmTomitaEast", "farmTomita"]
          })
        ]
      }),
      city({
        id: "city-obihiro-asahikawa",
        title: "带广 / 十胜",
        meta: "可选城市 / 不按旭川侧JR直通",
        image: img("obihiro"),
        tags: ["可选城市", "交通风险", "非直通"],
        summary: "十胜平原值得看，但它不该被放成旭川/富良野轻松 JR 支线。",
        sections: sections(
          ["带广的价值是十胜平原和大尺度农业空间。"],
          ["富良野-新得 JR 已废止；JR 北海道公告说明该区间 2024-04-01 起铁路事业废止并转为巴士体系。", "旭川/富良野到带广可考虑预约制 Northliner 巴士，或 JR 经札幌/南千岁/新得绕行；都不是轻松半日。"],
          ["若要不累，把带广放到钏路侧或独立移动日。"]
        ),
        sources: ["furanoClosed", "obihiro"],
        children: [
          spot({
            id: "spot-tokachi-plain",
            title: "十胜平原",
            meta: "可选 / 农业尺度",
            image: img("obihiro"),
            tags: ["可选子目的地", "开阔感"],
            summary: "用地平线和农田尺度解释北海道的距离感。",
            sections: sections(
              ["它和美瑛的丘陵完全不同。"],
              ["更适合带广停留或钏路侧顺路。"],
              ["不要为它牺牲富良野花田日。"]
            )
          }),
          spot({
            id: "spot-obihiro-food",
            title: "带广本地吃饭",
            meta: "可选 / 豚丼",
            image: img("obihiro"),
            tags: ["可选子目的地", "生活感"],
            summary: "用吃饭完成一个生活化停留。",
            sections: sections(
              ["带广不需要堆很多景点。"],
              ["到达后吃饭比继续赶路重要。"],
              ["长移动日可只保留这一项。"]
            )
          })
        ]
      })
    ]
  }),
  base({
    id: "base-kushiro",
    title: "钏路基地",
    meta: "东北海道核心 / 建议2晚",
    image: img("kushiro"),
    tags: ["基地", "东北海道", "长线慎排"],
    summary: "第三基地。湿原、海雾、根室最东端都从这里展开。",
    sections: sections(
      ["钏路让东北海道真正进入路线。"],
      ["札幌-带广-钏路由特急 Ozora 系统承担，官方列车指南确认该主干线。", "旭川到钏路 JR-only 不顺直，通常要经札幌/南千岁；本次状态核验无停驶/延误信息，但这是长移动日。"],
      ["钏路必须住下来。不要从别的基地当天来回硬刷。"],
      [{ title: "下一基地", items: ["钏路 -> 函馆：JR 可拼接，但极长，通常经札幌/南千岁再接 Hokuto。最好拆分或考虑飞行。"] }]
    ),
    sources: ["operation", "obihiro", "hakodate"],
    children: [
      city({
        id: "city-kushiro",
        hub: true,
        title: "钏路市",
        meta: "枢纽城市 / 本基地",
        image: img("kushiro"),
        tags: ["枢纽城市", "本基地"],
        summary: "东北海道住宿和支线起点。",
        sections: sections(
          ["它承接湿原、厚岸、根室。"],
          ["钏路站是根室线/花咲线一侧的关键节点；本次状态核验显示根室线、花咲线无停驶/延误信息。"],
          ["抵达当天只做市内。"]
        ),
        sources: ["operation", "obihiro"],
        children: [
          spot({
            id: "spot-kushiro-marsh",
            title: "钏路湿原",
            meta: "可选 / 曲流湿地",
            image: img("kushiro"),
            tags: ["可选子目的地", "核心"],
            summary: "低平湿地和曲流河道，是钏路最重要的自然结构。",
            sections: sections(
              ["这里看的是东北海道的空间尺度。"],
              ["展望点末端交通要查，不是全部靠 JR。"],
              ["不要和根室同日。"]
            )
          }),
          spot({
            id: "spot-nusamai",
            title: "幣舞桥与炉端",
            meta: "可选 / 傍晚",
            image: img("kushiro"),
            tags: ["可选子目的地", "轻松"],
            summary: "用港口、桥和晚饭收住节奏。",
            sections: sections(
              ["这是钏路市内最轻的收尾。"],
              ["不需要长交通。"],
              ["长移动日后很适合。"]
            )
          }),
          spot({
            id: "spot-kushiro-norokko",
            title: "钏路湿原 Norokko 观光列车",
            meta: "可选 / 季节列车",
            image: img("kushiro"),
            tags: ["可选子目的地", "观光列车", "湿原"],
            summary: "用慢车看湿原，把交通本身变成体验。",
            sections: sections(
              ["适合不想折腾末端交通、又想看湿原氛围的人。"],
              ["2026 年 JR 北海道标注为 4-10 月季节运行；席位规则要提前确认。"],
              ["它不能覆盖所有展望点，但能降低交通压力。"]
            ),
            sources: ["kushiroNorokko", "kushiroNorokkoHokkaido"]
          }),
          spot({
            id: "spot-moo-robata",
            title: "MOO 岸壁炉端",
            meta: "可选 / 傍晚吃饭",
            image: img("kushiro"),
            tags: ["可选子目的地", "炉端", "低体力"],
            summary: "长移动日后的理想收尾：港口边、炭火、海鲜。",
            sections: sections(
              ["钏路炉端的价值是地方吃法和港口氛围。"],
              ["MOO 岸壁炉端在幣舞桥和港区动线上，适合傍晚。"],
              ["旺季或天气差时提前确认营业和席位。"]
            ),
            sources: ["mooRobata", "kushiroRobata", "kushiroRobataOfficial"]
          })
        ]
      }),
      city({
        id: "city-akkeshi",
        title: "厚岸",
        meta: "可选城市 / 花咲线方向",
        image: img("akkeshi"),
        tags: ["可选城市", "海雾海岸"],
        summary: "比根室轻一点的东海岸选择。",
        sections: sections(
          ["厚岸适合看海雾、海湾和渔业生活感。"],
          ["钏路-厚岸在花咲线/根室线方向；本次 JR 北海道状态核验显示花咲线无停驶/延误信息。", "班次不密，出发和回程必须提前定。"],
          ["不想跑根室那么重时，厚岸是更稳的海岸日。"]
        ),
        sources: ["operation", "timetable"],
        children: [
          spot({
            id: "spot-aikappu",
            title: "爱冠岬",
            meta: "可选 / 岬角海湾",
            image: img("akkeshi"),
            tags: ["可选子目的地", "海岸"],
            summary: "看海湾、岬角和雾气。",
            sections: sections(
              ["它是厚岸最明确的地形点。"],
              ["厚岸站后末端交通要查。"],
              ["适合半日海岸线。"]
            )
          }),
          spot({
            id: "spot-akkeshi-bay",
            title: "厚岸湾",
            meta: "可选 / 渔业生活",
            image: img("akkeshi"),
            tags: ["可选子目的地", "生活感"],
            summary: "低能见度海岸和渔业生活感。",
            sections: sections(
              ["它更像环境体验，不是打卡点。"],
              ["与爱冠岬同日即可。"],
              ["低体力时只看湾和吃饭。"]
            )
          }),
          spot({
            id: "spot-akkeshi-oysters",
            title: "Conchiglie / 厚岸牡蛎",
            meta: "可选 / 午饭",
            image: img("akkeshi"),
            tags: ["可选子目的地", "牡蛎", "餐饮"],
            summary: "厚岸如果只留一个生活体验，就是吃牡蛎和看海湾。",
            sections: sections(
              ["道之站 Conchiglie 与牡蛎料理是厚岸最明确的吃饭目标。"],
              ["适合把厚岸做成比根室轻的半日到一日海岸线。"],
              ["回程花咲线班次必须先锁住，再决定吃饭时间。"]
            ),
            sources: ["akkeshiOysters", "akkeshiModel", "akkeshiGuide"]
          })
        ]
      }),
      city({
        id: "city-nemuro",
        title: "根室 / 纳沙布岬",
        meta: "可选城市 / 重体验",
        image: img("cape-nosappu"),
        tags: ["可选城市", "最东端", "长日"],
        summary: "价值是地理极限：日本本土最东端的边界感。",
        sections: sections(
          ["这条线的体验包括长时间坐车和最东端本身。"],
          ["钏路-根室走花咲线方向；本次状态核验显示花咲线无停驶/延误信息。", "纳沙布岬不是 JR 直达，根室站后还要巴士或出租。"],
          ["当天只做这一件大事。天气差时降级到厚岸或钏路市内。"]
        ),
        sources: ["operation", "timetable"],
        children: [
          spot({
            id: "spot-nosappu",
            title: "纳沙布岬",
            meta: "可选 / 日本最东端",
            image: img("cape-nosappu"),
            tags: ["可选子目的地", "核心"],
            summary: "灯塔、海风、边界感构成东北海道终点。",
            sections: sections(
              ["它的价值在地理意义。"],
              ["末端巴士/出租和回程班次必须提前确认。"],
              ["风雨天不要硬冲。"]
            )
          }),
          spot({
            id: "spot-nemuro-line",
            title: "根室本线尽头感",
            meta: "可选 / 车窗体验",
            image: img("cape-nosappu"),
            tags: ["可选子目的地", "铁路体验"],
            summary: "越坐越空、越坐越东。",
            sections: sections(
              ["坐车过程本身就是内容。"],
              ["适合把车窗当旅行一部分的人。"],
              ["不喜欢长时间坐车则慎选。"]
            )
          }),
          spot({
            id: "spot-nemuro-hanamaru",
            title: "花丸本店 / 花咲蟹方向",
            meta: "可选 / 根室吃饭",
            image: img("cape-nosappu"),
            tags: ["可选子目的地", "寿司", "海鲜"],
            summary: "根室重线如果体力允许，用一顿本地海鲜把长车程收住。",
            sections: sections(
              ["官方 Nemuro FAQ 建议白天可吃回转寿司，晚上再找炉端或居酒屋。"],
              ["花咲蟹、秋刀鱼等是根室方向的强识别食物。"],
              ["别为了吃饭错过纳沙布岬回程交通。"]
            ),
            sources: ["nemuroOfficialFaq", "nemuroTourism", "nosappu"]
          })
        ]
      }),
      city({
        id: "city-obihiro-kushiro",
        title: "带广（钏路侧）",
        meta: "可选城市 / JR特急方向",
        image: img("obihiro"),
        tags: ["可选城市", "十胜"],
        summary: "如果要看十胜，从钏路侧或顺路移动时更合理。",
        sections: sections(
          ["带广补上十胜平原的开阔感。"],
          ["钏路-带广在札幌-带广-钏路特急体系上；官方列车指南确认 Ozora 连接札幌-钏路，Tokachi 连接札幌-带广。", "本次状态核验显示相关特急/石胜线/根室线无停驶或30分钟以上延误信息。"],
          ["若已经很累，就跳过。它不是主线必要点。"]
        ),
        sources: ["operation", "obihiro"],
        children: [
          spot({
            id: "spot-obihiro-window",
            title: "农田铁路车窗",
            meta: "可选 / 平原直线",
            image: img("obihiro"),
            tags: ["可选子目的地", "车窗"],
            summary: "用长直线和农田感受十胜尺度。",
            sections: sections(
              ["不一定要下很多点。"],
              ["适合从钏路西移时顺路看。"],
              ["不要牺牲根室恢复日。"]
            )
          }),
          spot({
            id: "spot-obihiro-stay",
            title: "十胜平原回看",
            meta: "可选 / 开阔空间",
            image: img("obihiro"),
            tags: ["可选子目的地", "空间感"],
            summary: "把东北海道和中北海道之间的尺度补起来。",
            sections: sections(
              ["它解释为什么北海道不能乱排。"],
              ["更适合顺路或独立停留。"],
              ["时间紧可跳过。"]
            )
          })
        ]
      })
    ]
  }),
  base({
    id: "base-hakodate",
    title: "函馆基地",
    meta: "南北海道断裂点 / 建议1-2晚",
    image: img("hakodate"),
    tags: ["基地", "跨海前", "换乘关键"],
    summary: "第四基地。北海道结束、本州开始前的停顿。",
    sections: sections(
      ["函馆的价值是港口城市和跨海铁路节点。"],
      ["札幌-函馆由特急 Hokuto 连接，官方列车指南确认 Hokuto 也用于连接北海道新干线。", "钏路-函馆 JR-only 很长，通常要经札幌/南千岁再接 Hokuto；本次状态核验无停驶/延误信息，但不代表它适合观光日。"],
      ["从钏路长移动到达后至少住一晚。"],
      [{ title: "下一基地", items: ["函馆 -> 仙台：先 Hakodate Liner 到新函馆北斗，再新干线穿青函隧道到新青森，继续东北新干线南下。"] }]
    ),
    sources: ["operation", "hakodate", "shinkansen", "jreast"],
    children: [
      city({
        id: "city-hakodate",
        hub: true,
        title: "函馆市",
        meta: "枢纽城市 / 本基地",
        image: img("hakodate"),
        tags: ["枢纽城市", "港口", "夜景"],
        summary: "北海道南端的住宿和跨海前缓冲城市。",
        sections: sections(
          ["函馆有港口、坡道、夜景和西式建筑，值得停住。"],
          ["函馆站本身不是新干线站；跨海前要先去新函馆北斗。", "本次状态核验显示 Hakodate Liner 与道南特急相关状态无停驶/延误信息。"],
          ["长移动后不要继续南下，先睡一晚。"]
        ),
        sources: ["operation", "shinkansen"],
        children: [
          spot({
            id: "spot-hakodate-night",
            title: "函馆山夜景",
            meta: "可选 / 城市夹海",
            image: img("hakodate"),
            tags: ["可选子目的地", "核心"],
            summary: "函馆最清楚的空间画面。",
            sections: sections(
              ["城市夹在两片海之间，上山后结构很清楚。"],
              ["受天气、风和能见度影响。"],
              ["天气不好就不要硬上。"]
            )
          }),
          spot({
            id: "spot-motomachi",
            title: "元町与金森仓库",
            meta: "可选 / 坡道红砖",
            image: img("hakodate"),
            tags: ["可选子目的地", "散步"],
            summary: "坡道、教堂、红砖仓库组成港口城市质地。",
            sections: sections(
              ["函馆适合慢走。"],
              ["和函馆山、港区自然串联。"],
              ["不要赶点。"]
            )
          }),
          spot({
            id: "spot-hakodate-market",
            title: "函馆朝市 / 海鲜早饭",
            meta: "可选 / 早饭",
            image: img("hakodate"),
            tags: ["可选子目的地", "餐饮", "低体力"],
            summary: "函馆最适合用早饭打开，不需要再加远支线。",
            sections: sections(
              ["朝市和港区能把函馆的海鲜城市属性直接带出来。"],
              ["从函馆站周边最省交通，适合跨海前或抵达后第二天。"],
              ["不要带着行李在坡道和市场之间折腾。"]
            ),
            sources: ["hakodateTravel", "hakodateTransport"]
          }),
          spot({
            id: "spot-hakodate-tram",
            title: "函馆市电慢线",
            meta: "可选 / 市内串联",
            image: img("hakodate"),
            tags: ["可选子目的地", "市电", "雨天"],
            summary: "用市电串函馆站、元町、五棱郭、汤之川，减少步行疲劳。",
            sections: sections(
              ["函馆市电白天班次较频繁，覆盖主要观光点。"],
              ["比打车更有城市感，比全步行更省体力。"],
              ["坡道区仍要注意鞋和天气。"]
            ),
            sources: ["hakodateTransport", "hakodateTravel"]
          })
        ]
      }),
      city({
        id: "city-seikan",
        hub: true,
        title: "新函馆北斗 / 新青森",
        meta: "枢纽城市 / 跨海换乘",
        image: img("seikan"),
        tags: ["枢纽城市", "青函隧道", "必须强调"],
        summary: "这是北海道到本州的真实铁路关节。",
        sections: sections(
          ["它解释整条路线从岛屿到本州的转换。"],
          ["JR Hokkaido 写明 Hakodate Liner 连接函馆与新函馆北斗，约 15-22 分钟、每天 16 往复。", "新函馆北斗到新青森走北海道新干线，经青函隧道；不能写成函馆站直达新青森。", jrEastLiveNote],
          ["跨海当天按具体车次查。不要把换乘时间压到极限。"]
        ),
        sources: ["shinkansen", "jreast"],
        children: [
          spot({
            id: "spot-seikan-tunnel",
            title: "青函隧道",
            meta: "可选 / 海底铁路体验",
            image: img("seikan"),
            tags: ["可选子目的地", "跨海"],
            summary: "海底铁路把北海道和本州接起来。",
            sections: sections(
              ["地理意义大于车窗风景。"],
              ["坐新干线通过，过程很平静。"],
              ["提前确认指定席和换乘站。"]
            ),
            sources: ["shinkansen", "jreast"]
          }),
          spot({
            id: "spot-shin-aomori",
            title: "新青森站",
            meta: "可选 / 本州入口",
            image: img("shin-aomori"),
            tags: ["可选子目的地", "换乘"],
            summary: "本州侧的新干线节点。",
            sections: sections(
              ["它主要是换乘节点，不是景点。"],
              ["可继续去八户、仙台、东京方向。"],
              ["只是通行时不要停太久。"]
            ),
            sources: ["jreast"]
          })
        ]
      }),
      city({
        id: "city-hachinohe-hakodate",
        title: "八户",
        meta: "可选城市 / 东北海岸",
        image: img("hachinohe"),
        tags: ["可选城市", "东北海岸"],
        summary: "如果想补东北海岸，可作为新干线侧支线。",
        sections: sections(
          ["八户更日常、更北方，和松岛的景观型海湾不同。"],
          ["从函馆侧前往要先走新函馆北斗-新青森新干线体系再南下，不是普通短支线。", jrEastLiveNote],
          ["若后面要去松岛，八户可以跳过。"]
        ),
        sources: ["jreast", "shinkansen"],
        children: [
          spot({
            id: "spot-tanesashi",
            title: "种差海岸",
            meta: "可选 / 草地岩岸",
            image: img("hachinohe"),
            tags: ["可选子目的地", "海岸"],
            summary: "草地、岩岸和海风混合的三陆北端画面。",
            sections: sections(
              ["比普通海滩更有地形感。"],
              ["末端交通和天气需要查。"],
              ["有完整半天再去。"]
            )
          }),
          spot({
            id: "spot-hachinohe-port",
            title: "八户渔港生活带",
            meta: "可选 / 市场港口",
            image: img("hachinohe"),
            tags: ["可选子目的地", "生活感"],
            summary: "补一段东北海岸的日常感。",
            sections: sections(
              ["它更生活化，不是观光型海湾。"],
              ["交通成本比松岛高。"],
              ["时间紧就留给松岛。"]
            )
          }),
          spot({
            id: "spot-hasshoku",
            title: "八食中心",
            meta: "可选 / 市场吃饭",
            image: img("hachinohe"),
            tags: ["可选子目的地", "市场", "餐饮"],
            summary: "如果去八户，市场和吃饭比多追一个景点更有回报。",
            sections: sections(
              ["八食中心适合把海鲜、市场、东北日常感一次解决。"],
              ["它属于八户市内短接驳，不适合跨海换乘日临时硬塞。"],
              ["如果当天已经安排种差海岸，就只选一个吃饭点。"]
            ),
            sources: ["hachinoheFood", "hachinohe"]
          }),
          spot({
            id: "spot-tatehana",
            title: "馆鼻岸壁朝市",
            meta: "可选 / 早市",
            image: img("hachinohe"),
            tags: ["可选子目的地", "早市", "餐饮"],
            summary: "更生活化、更早起的八户体验，适合住一晚时考虑。",
            sections: sections(
              ["这里更像地方早市，不是随时可插入的景点。"],
              ["适合八户过夜或很早抵达的人。"],
              ["先确认开市日和时间，再决定是否牺牲睡眠。"]
            ),
            sources: ["tatehanaMarket", "hachinoheFood"]
          })
        ]
      })
    ]
  }),
  base({
    id: "base-sendai",
    title: "仙台基地",
    meta: "本州东北核心 / 建议1-2晚",
    image: img("sendai"),
    tags: ["基地", "东北缓冲", "新干线"],
    summary: "第五基地。把北海道低密度过渡到本州东北城市，再进入东京。",
    sections: sections(
      ["仙台是跨海后最自然的缓冲城市。"],
      ["函馆到仙台的真实链路是：函馆 -> 新函馆北斗 -> 北海道新干线 -> 新青森 -> 东北新干线 -> 仙台。", "JR East 本次状态页面显示东北新干线 Normal operation，但跨海段仍要查具体车次。"],
      ["到仙台当天只入住、吃饭。松岛放第二天。"],
      [{ title: "下一基地", items: ["仙台 -> 东京：东北新干线主干线，短于北海道内部长移动。"] }]
    ),
    sources: ["shinkansen", "jreast"],
    children: [
      city({
        id: "city-sendai",
        hub: true,
        title: "仙台市",
        meta: "枢纽城市 / 本基地",
        image: img("sendai"),
        tags: ["枢纽城市", "东北核心"],
        summary: "跨海后落地、补给、吃饭的城市。",
        sections: sections(
          ["仙台让路线从北海道切回本州城市系统。"],
          ["仙台位于东北新干线主干线上；本次 JR East 状态显示东北新干线 Normal operation。"],
          ["第一晚不要再加松岛或八户。"]
        ),
        sources: ["jreast"],
        children: [
          spot({
            id: "spot-sendai-station",
            title: "仙台站与青叶通",
            meta: "可选 / 城市骨架",
            image: img("sendai"),
            tags: ["可选子目的地", "轻松"],
            summary: "快速理解仙台城市节奏。",
            sections: sections(
              ["站区和青叶通能完成城市落地。"],
              ["不需要长交通。"],
              ["换乘日留在市区。"]
            )
          }),
          spot({
            id: "spot-gyutan",
            title: "牛舌与晚饭",
            meta: "可选 / 吃饭收束",
            image: img("sendai"),
            tags: ["可选子目的地", "晚饭"],
            summary: "用一顿饭完成仙台第一晚。",
            sections: sections(
              ["长距离移动后，餐厅比景点重要。"],
              ["市内完成即可。"],
              ["第二天再支线。"]
            )
          }),
          spot({
            id: "spot-sendai-zunda",
            title: "Zunda / 站内甜品收尾",
            meta: "可选 / 甜品",
            image: img("sendai"),
            tags: ["可选子目的地", "甜品", "低体力"],
            summary: "跨海长移动后，甜品和站区短逛比继续冲景点更合理。",
            sections: sections(
              ["仙台的地方味道不只有牛舌，zunda 适合作为轻收尾。"],
              ["站区完成，几乎不增加交通成本。"],
              ["排队太长就换店，不要为甜品透支。"]
            ),
            sources: ["jntoSendai", "sendaiGuidebook"]
          }),
          spot({
            id: "spot-kokubuncho",
            title: "国分町夜晚",
            meta: "可选 / 夜间餐饮",
            image: img("sendai"),
            tags: ["可选子目的地", "夜晚", "餐饮"],
            summary: "想要更城市化的仙台夜晚，可以用国分町替代继续跑远点。",
            sections: sections(
              ["JNTO 将国分町描述为东北大型夜生活区，餐饮密度高。"],
              ["只适合已经入住、体力还可以的晚上。"],
              ["不要跨海抵达很晚还硬去。"]
            ),
            sources: ["jntoSendai"]
          })
        ]
      }),
      city({
        id: "city-matsushima",
        title: "松岛",
        meta: "可选城市 / 仙台短支线",
        image: img("matsushima"),
        tags: ["可选城市", "日本三景"],
        summary: "仙台最轻、回报最高的海湾支线。",
        sections: sections(
          ["松岛短时间就能给出清楚的岛屿海湾结构。"],
          ["仙台到松岛方向通常用 JR 仙石线/东北本线相关站点；这是本州普通支线，出发前按站点查。"],
          ["天气一般也可去；不要排成满满一整天。"]
        ),
        sources: ["jreast"],
        children: [
          spot({
            id: "spot-matsushima-bay",
            title: "松岛湾",
            meta: "可选 / 岛屿海湾",
            image: img("matsushima"),
            tags: ["可选子目的地", "核心"],
            summary: "海上小岛形成独特结构。",
            sections: sections(
              ["这是松岛主画面。"],
              ["可步行、看海湾或坐游船。"],
              ["留时间发呆。"]
            )
          }),
          spot({
            id: "spot-zuiganji",
            title: "瑞严寺与游船",
            meta: "可选 / 文化或海湾视角",
            image: img("matsushima"),
            tags: ["可选子目的地", "二选一"],
            summary: "文化点和海湾视角二选一也够。",
            sections: sections(
              ["瑞严寺补文化，游船补空间视角。"],
              ["两者都做也可以，但不要赶。"],
              ["和仙台晚饭组合舒服。"]
            )
          }),
          spot({
            id: "spot-matsushima-fishmarket",
            title: "松岛鱼市场 / 牡蛎方向",
            meta: "可选 / 海鲜",
            image: img("matsushima"),
            tags: ["可选子目的地", "牡蛎", "餐饮"],
            summary: "松岛半日支线最自然的吃饭选择：海湾、鱼市场、牡蛎。",
            sections: sections(
              ["松岛以牡蛎、穴子等海湾食物形成地方识别。"],
              ["鱼市场、瑞严寺、游船码头区域可步行组合。"],
              ["牡蛎季节性强，夏天不要只为了牡蛎而去。"]
            ),
            sources: ["matsushimaFood", "matsushimaSeafood", "jntoMatsushima"]
          })
        ]
      }),
      city({
        id: "city-hachinohe-sendai",
        title: "八户（若未去）",
        meta: "可选城市 / 新干线北上",
        image: img("hachinohe"),
        tags: ["可选城市", "重复项"],
        summary: "如果函馆段没去八户，可以从仙台补，但优先级低于松岛。",
        sections: sections(
          ["八户补东北北部海岸，松岛补海湾景观。"],
          ["仙台北上八户需要东北新干线规划；本次状态显示东北新干线 Normal operation。"],
          ["只有仙台住 2 晚且体力足时考虑。"]
        ),
        sources: ["jreast"],
        children: [
          spot({
            id: "spot-hachinohe-coast-sendai",
            title: "种差海岸",
            meta: "可选 / 三陆北端",
            image: img("hachinohe"),
            tags: ["可选子目的地", "海岸"],
            summary: "草地与岩岸构成复杂海岸线。",
            sections: sections(
              ["适合补东北海岸。"],
              ["末端交通需要另查。"],
              ["函馆段去过则跳过。"]
            )
          }),
          spot({
            id: "spot-hachinohe-market",
            title: "八户港口",
            meta: "可选 / 市场日常",
            image: img("hachinohe"),
            tags: ["可选子目的地", "生活感"],
            summary: "更日常的东北海岸城市。",
            sections: sections(
              ["适合想看生活带的人。"],
              ["交通成本比松岛高。"],
              ["不要和东京移动日相连。"]
            )
          })
        ]
      })
    ]
  }),
  base({
    id: "base-tokyo",
    title: "东京基地",
    meta: "终点 / 收尾与返程",
    image: img("tokyo"),
    tags: ["基地", "终点", "高密度"],
    summary: "第六基地。用城市密度结束整条从北海道到本州的路线。",
    sections: sections(
      ["东京的价值是和北海道、东北形成反差。"],
      ["仙台-东京走东北新干线主干线；本次 JR East 状态显示东北新干线 Normal operation。", "东京市内支线短，但人流会消耗体力。"],
      ["最后不再扩张远郊，用市内短点收尾。"]
    ),
    sources: ["jreast"],
    children: [
      city({
        id: "city-tokyo",
        hub: true,
        title: "东京市区",
        meta: "枢纽城市 / 本基地",
        image: img("tokyo"),
        tags: ["枢纽城市", "终点"],
        summary: "最后的交通、住宿和返程核心。",
        sections: sections(
          ["从低密度一路进入东京，反差本身就是体验。"],
          ["东京站/上野/新宿等可接入市内交通；不要一天切太多区。"],
          ["到达第一晚只入住、吃饭、短散步。"]
        ),
        children: [
          spot({
            id: "spot-tokyo-station",
            title: "东京站 / 上野方向",
            meta: "可选 / 交通商业",
            image: img("tokyo"),
            tags: ["可选子目的地", "收束"],
            summary: "交通、商业和人流集中。",
            sections: sections(
              ["能快速感受到东京作为终点的密度。"],
              ["新干线到达后顺路完成。"],
              ["不要第一晚排太满。"]
            )
          }),
          spot({
            id: "spot-urban-density",
            title: "城市高密度观察",
            meta: "可选 / 散步",
            image: img("tokyo"),
            tags: ["可选子目的地", "反差"],
            summary: "用散步替代打卡，感受密度突变。",
            sections: sections(
              ["人流、车站和商业会突然变密。"],
              ["散步和吃饭即可完成。"],
              ["低体力时尤其适合。"]
            )
          })
        ]
      }),
      city({
        id: "city-shibuya",
        title: "涩谷",
        meta: "可选城市 / 市内短途",
        image: img("shibuya"),
        tags: ["可选城市", "人流"],
        summary: "东京城市能量峰值。",
        sections: sections(
          ["涩谷最直接地给出东京人流和屏幕密度。"],
          ["市内交通方便，但人流消耗大。"],
          ["短时间完成即可。"]
        ),
        children: [
          spot({
            id: "spot-shibuya-crossing",
            title: "涩谷 Scramble 路口",
            meta: "可选 / 人流交叉",
            image: img("shibuya"),
            tags: ["可选子目的地", "核心"],
            summary: "人流交叉、广告屏和街区密度一起出现。",
            sections: sections(
              ["它是东京能量的标志性场面。"],
              ["地面体验一次即可。"],
              ["不要低体力时久逛。"]
            )
          }),
          spot({
            id: "spot-shibuya-view",
            title: "高处看人流",
            meta: "可选 / 俯视结构",
            image: img("shibuya"),
            tags: ["可选子目的地", "短时"],
            summary: "从高处把混乱人流看成结构。",
            sections: sections(
              ["高处视角比地面挤更清楚。"],
              ["预约、票务或排队以当天为准。"],
              ["适合短时间完成。"]
            )
          })
        ]
      }),
      city({
        id: "city-ginza",
        title: "银座",
        meta: "可选城市 / 雨天友好",
        image: img("ginza"),
        tags: ["可选城市", "商业"],
        summary: "用商业密度和室内选项完成旅行收尾。",
        sections: sections(
          ["银座看的是商业秩序，不是自然景观。"],
          ["市内交通简单，雨天也舒服。"],
          ["适合返程前一天。"]
        ),
        children: [
          spot({
            id: "spot-ginza-chuo",
            title: "中央通与和光钟楼",
            meta: "可选 / 商业街景",
            image: img("ginza"),
            tags: ["可选子目的地", "核心"],
            summary: "银座最典型的街景符号。",
            sections: sections(
              ["能直接给出银座画面。"],
              ["步行串联周边百货和咖啡。"],
              ["适合雨天和低体力日。"]
            )
          }),
          spot({
            id: "spot-ginza-cafe",
            title: "百货与咖啡",
            meta: "可选 / 休息收尾",
            image: img("ginza"),
            tags: ["可选子目的地", "轻松"],
            summary: "购物、咖啡、整理旅行末尾。",
            sections: sections(
              ["这是让旅行软着陆的地方。"],
              ["室内选项多。"],
              ["适合整理行李和买东西。"]
            )
          }),
          spot({
            id: "spot-ginza-itoya",
            title: "伊东屋 / Ginza Six 茑屋方向",
            meta: "可选 / 纸品书店",
            image: img("ginza"),
            tags: ["可选子目的地", "店铺", "雨天"],
            summary: "比纯购物更适合两个人慢慢看的银座收尾。",
            sections: sections(
              ["银座的价值是商业密度和店铺选择，不必只看奢侈品。"],
              ["纸品、书店、咖啡和百货可以组成低体力雨天路线。"],
              ["别把银座和涩谷都排成长逛。"]
            ),
            sources: ["goTokyoGinza", "tokyo"]
          })
        ]
      }),
      city({
        id: "city-odaiba",
        title: "台场",
        meta: "可选城市 / 人工海岸",
        image: img("odaiba"),
        tags: ["可选城市", "傍晚"],
        summary: "用海湾视角结束东京。",
        sections: sections(
          ["台场比涩谷轻，适合看海湾、桥和天际线。"],
          ["市内交通不是 JR 单线直达概念，按当天路线查。"],
          ["傍晚更舒服。"]
        ),
        children: [
          spot({
            id: "spot-odaiba-beach",
            title: "台场海滨",
            meta: "可选 / 海风天际线",
            image: img("odaiba"),
            tags: ["可选子目的地", "轻松"],
            summary: "人工海岸、城市天际线和海风。",
            sections: sections(
              ["它给东京一个更松的海湾视角。"],
              ["适合傍晚散步。"],
              ["旅行最后一天很合适。"]
            )
          }),
          spot({
            id: "spot-rainbow-bridge",
            title: "彩虹桥视角",
            meta: "可选 / 海湾夜景",
            image: img("odaiba"),
            tags: ["可选子目的地", "夜景"],
            summary: "从海湾看东京。",
            sections: sections(
              ["它和银座、涩谷的街区密度互补。"],
              ["夜景和天气影响体验。"],
              ["不赶时间时去。"]
            )
          }),
          spot({
            id: "spot-odaiba-gundam-miraikan",
            title: "独角兽高达 / Miraikan 方向",
            meta: "可选 / 台场室内外",
            image: img("odaiba"),
            tags: ["可选子目的地", "店铺", "雨天备选"],
            summary: "台场如果不只看海边，可以用高达、商场或 Miraikan 做雨天替代。",
            sections: sections(
              ["它让台场不完全依赖海风和夜景。"],
              ["官方台场信息站会更新活动与推荐路线，出发前查当天开放情况。"],
              ["旅行尾声只选一个室内外组合，不要把台场逛成一整天。"]
            ),
            sources: ["odaibaOfficial", "odaiba", "rainbowBridgeGoodLuck"]
          })
        ]
      })
    ]
  })
];

function guide({ facts = [], play = [], time = [], route = [], best = [], avoid = [], sources = [] }) {
  return { facts, play, time, route, best, avoid, sources };
}

const detailGuides = {
  "base-sapporo": guide({
    facts: [["节奏", "4晚恢复+西海岸支线"], ["优先级", "住宿/补给/短线"], ["体力", "低到中"], ["风险", "神威岬天气"]],
    play: ["把札幌当生活基地，不要当景点清单。", "第 1 天落地只做市内，第 2-3 天按天气选小樽/余市/神威岬。", "留一晚给洗衣、超市、药妆和临时调整。"],
    time: ["札幌市内：2-4 小时即可恢复。", "小樽：半日到傍晚。", "神威岬：整日，不能塞进落地日。"],
    route: ["CTS 到札幌走快速 Airport 系统。", "札幌到旭川走 Kamui / Lilac，是本路线最顺的基地移动。"],
    best: ["雨天：狸小路、商场、札幌市内。", "晴天：小樽傍晚或神威岬整日。", "风大：不要跑岬角。"],
    avoid: ["不要把神威岬、小樽、余市硬塞同一天。", "不要用 JR 正常来推断神威岬末端交通正常。"],
    sources: ["operation", "asahikawa", "otaruCanal", "capeKamui"]
  }),
  "city-sapporo": guide({
    facts: [["角色", "西北海道枢纽"], ["怎么玩", "吃饭+补给+短散步"], ["时间", "2-5小时"], ["疲劳", "最低"]],
    play: ["到达日只建立方向感：札幌站、大通、薄野三点够用。", "把晚饭和便利店补给安排在同一条步行线。"],
    time: ["落地日：入住后 2 小时散步。", "支线返回日：只保留晚饭。"],
    route: ["机场到市区依赖 JR Airport；市内用短距离交通即可。"],
    best: ["雨天友好。", "晚上适合薄野和狸小路。"],
    avoid: ["不要第一晚就试图补完整札幌景点。"],
    sources: ["operation"]
  }),
  "spot-odori": guide({
    facts: [["角色", "城市中轴"], ["时间", "30-60分钟"], ["适合", "落地后"], ["交通", "市内短线"]],
    play: ["从大通公园慢走到电视塔，确认札幌的东西向城市轴。", "只拍一张方向感照片即可。"],
    time: ["30 分钟看结构，1 小时慢走。"],
    route: ["从札幌站步行或市内短交通到达。"],
    best: ["傍晚光线柔和。", "雨天可缩短。"],
    avoid: ["不要把它当大景点排半天。"]
  }),
  "spot-susukino": guide({
    facts: [["角色", "晚饭恢复"], ["时间", "1-2小时"], ["适合", "长线后"], ["交通", "市内短线"]],
    play: ["先吃饭，再穿狸小路补给。", "只做一条街区，不要夜里继续换区。"],
    time: ["晚饭 1 小时，补给 30 分钟。"],
    route: ["从札幌站或大通方向短距离抵达。"],
    best: ["雨天和低体力日很适合。"],
    avoid: ["不要在这里继续加第二个夜景点。"]
  }),
  "spot-sapporo-food": guide({
    facts: [["角色", "恢复吃饭"], ["时间", "1-2小时"], ["区域", "二条/薄野"], ["适合", "雨天"]],
    play: ["早饭看二条市场，晚上看薄野拉面或汤咖喱。", "两个人先定排队容忍度，再选店。"],
    time: ["市场 45-90 分钟。", "晚饭含排队 1-2 小时。"],
    route: ["札幌市内短交通，不影响 JR 主线。"],
    best: ["落地日、雨天、神威岬取消日。"],
    avoid: ["不要为了热门店排到错过休息。", "二条市场具体店铺口碑差异大，出发前看近期评价。"],
    sources: ["sapporoNijo", "sapporoRamen"]
  }),
  "city-otaru": guide({
    facts: [["角色", "札幌短支线"], ["时间", "半日"], ["适合", "轻松日"], ["交通", "JR短线"]],
    play: ["下午去运河，傍晚看灯，再吃海鲜或甜品。", "如果体力足，运河后接堺町通；体力弱，只做运河。"],
    time: ["紧凑：3-4 小时。", "舒服：半日到夜晚。"],
    route: ["札幌到小樽是 JR 函馆线方向短线，出发当天查班次。"],
    best: ["傍晚和夜色比正午更值得。", "雨天也能逛仓库和室内店。"],
    avoid: ["不要和神威岬绑成赶路日。"],
    sources: ["otaruCanal", "otaruDay", "operation"]
  }),
  "spot-otaru-canal": guide({
    facts: [["角色", "小樽主画面"], ["时间", "45-90分钟"], ["最佳", "黄昏"], ["交通", "站后步行"]],
    play: ["从浅草桥附近开始，沿水面慢走，等灯亮。", "一边看旧仓库和水面反射，一边决定是否吃晚饭再回札幌。"],
    time: ["只看：45 分钟。", "含晚饭：2 小时以上。"],
    route: ["从小樽站步行可达。"],
    best: ["傍晚灯光和水面最稳。"],
    avoid: ["正午匆匆打卡会显得很普通。"],
    sources: ["otaruCanal"]
  }),
  "spot-sakaimachi": guide({
    facts: [["角色", "慢逛街区"], ["时间", "1-2小时"], ["适合", "雨天"], ["交通", "步行串联"]],
    play: ["从运河自然切到堺町通，看玻璃、甜品、旧商家立面。", "只挑 2-3 家店，不要逛成商场任务。"],
    time: ["1 小时轻逛，2 小时含咖啡。"],
    route: ["从小樽运河步行串联。"],
    best: ["下午和雨天更舒服。"],
    avoid: ["人多时不要每家店都排队。"],
    sources: ["otaruDay"]
  }),
  "spot-otaru-glass-dessert": guide({
    facts: [["角色", "慢逛休息"], ["时间", "1-2小时"], ["适合", "雨天"], ["交通", "步行"]],
    play: ["把北一硝子方向当旧商街质感，把 LeTAO 方向当坐下休息。", "只选一到两家店，保留运河傍晚。"],
    time: ["短逛 45 分钟。", "含甜品 1.5-2 小时。"],
    route: ["和堺町通、运河步行串联。"],
    best: ["下午、雨天、低体力日。"],
    avoid: ["易碎品别买太多。", "热门甜品排队很长时直接换店。"],
    sources: ["otaruDay", "otaruCanal"]
  }),
  "city-yoichi": guide({
    facts: [["角色", "工业+小城"], ["时间", "半日"], ["重点", "Nikka"], ["交通", "经小樽JR"]],
    play: ["把 Nikka 当主目的地，街区散步当留白。", "若没有参观预约，也可以看厂区外部、博物馆和商店开放部分。"],
    time: ["Nikka 参观 1.5-2.5 小时。", "含往返札幌：半日以上。"],
    route: ["札幌到余市通常经小樽，班次少于小樽线。"],
    best: ["喜欢工业空间、威士忌、安静小城时值得。"],
    avoid: ["不要和神威岬同日硬排，除非包车且体力充足。"],
    sources: ["nikkaYoichi", "jntoNikka", "operation"]
  }),
  "spot-nikka": guide({
    facts: [["角色", "余市核心"], ["时间", "1.5-2.5小时"], ["预约", "按官网"], ["交通", "站后步行"]],
    play: ["看红砖厂房、蒸馏器、仓库和品牌历史。", "参观后再决定是否试饮和买小瓶，不要把它变成购物点。"],
    time: ["短看 1 小时，完整参观 2 小时左右。"],
    route: ["JR 到余市站后短步行。"],
    best: ["晴雨都可。"],
    avoid: ["官网 closed dates 和预约规则要先查。"],
    sources: ["nikkaYoichi", "jntoNikka"]
  }),
  "spot-yoichi-walk": guide({
    facts: [["角色", "留白"], ["时间", "30-60分钟"], ["适合", "Nikka后"], ["交通", "步行"]],
    play: ["沿余市川或站周边走一圈，把节奏放慢。"],
    time: ["30 分钟就够。"],
    route: ["和 Nikka 同日步行完成。"],
    best: ["天气好时加，不好就删。"],
    avoid: ["不要为它单独开一天。"]
  }),
  "city-kamui": guide({
    facts: [["角色", "西海岸重体验"], ["时间", "整日"], ["风险", "风雨/末端巴士"], ["交通", "非JR直达"]],
    play: ["只在晴天把它升级为当天主线。", "早出发，到岬角步道后慢走，不再贪其他远点。"],
    time: ["从札幌出发通常按整日处理。", "岬角本身 1-2 小时。"],
    route: ["JR 只能负责到小樽/余市方向，末端依赖巴士、包车或自驾。"],
    best: ["晴天、低风、能见度好。"],
    avoid: ["风雨天直接降级，不要和末班交通赌博。"],
    sources: ["capeKamui", "operation"]
  }),
  "spot-kamui-path": guide({
    facts: [["角色", "断崖步行"], ["时间", "60-120分钟"], ["体力", "中"], ["天气", "强依赖"]],
    play: ["把步道当核心体验：海色、风、坡度、灯塔都要慢慢看。"],
    time: ["步道往返和停留 1-2 小时。"],
    route: ["到岬角后步行，开放状况看现场。"],
    best: ["晴天海色最强。"],
    avoid: ["大风、雨、关闭时不要硬走。"],
    sources: ["capeKamui"]
  }),
  "spot-shakotan-blue": guide({
    facts: [["角色", "海色"], ["时间", "30-60分钟"], ["最佳", "晴天"], ["取舍", "阴天降级"]],
    play: ["不要追很多点，只找一个开阔视角看海色。"],
    time: ["30 分钟看海，1 小时拍照和休息。"],
    route: ["末端交通以公路为主。"],
    best: ["太阳出来才是主体验。"],
    avoid: ["阴雨天不要为它牺牲小樽。"],
    sources: ["capeKamui"]
  }),
  "base-asahikawa": guide({
    facts: [["节奏", "2晚中继"], ["主线", "花田/丘陵"], ["风险", "去钏路长移动"], ["交通", "JR+可能巴士"]],
    play: ["把旭川当花田与丘陵的前进基地。", "美瑛和富良野二选一或轻串联，移动日前一晚早点睡。"],
    time: ["旭川市内半天足够。", "美瑛/富良野各半日到一日。"],
    route: ["札幌到旭川走特急 Kamui/Lilac。", "旭川到钏路不顺，建议把下一天定义为移动日。"],
    best: ["7月花田期价值最高。"],
    avoid: ["不要把带广当旭川 JR 直通半日支线。"],
    sources: ["asahikawa", "furanoClosed", "northliner"]
  }),
  "city-asahikawa": guide({
    facts: [["角色", "中北海道枢纽"], ["时间", "半日"], ["适合", "入住恢复"], ["交通", "JR主线"]],
    play: ["站区吃饭、补给、整理第二天花田交通。", "如果到达早，可以轻散步，不必硬凑景点。"],
    time: ["2-4 小时足够。"],
    route: ["从札幌到旭川为 JR 主干线。"],
    best: ["移动日和天气普通日。"],
    avoid: ["不要刚到旭川立刻冲远点。"],
    sources: ["asahikawa"]
  }),
  "spot-asahikawa-station": guide({
    facts: [["角色", "补给"], ["时间", "1小时"], ["适合", "移动日"], ["交通", "站内外"]],
    play: ["吃饭、买水、查第二天班次，完成后早点休息。"],
    time: ["1 小时即可。"],
    route: ["围绕旭川站完成。"],
    best: ["任何天气。"],
    avoid: ["不要给它设计复杂路线。"]
  }),
  "spot-asahikawa-walk": guide({
    facts: [["角色", "城市缓冲"], ["时间", "1-2小时"], ["适合", "低压力"], ["交通", "步行"]],
    play: ["选酒店附近一条街散步，吃完就回。"],
    time: ["晚饭前后 1-2 小时。"],
    route: ["不离开市区。"],
    best: ["移动后。"],
    avoid: ["不要替代美瑛/富良野主日。"]
  }),
  "spot-asahikawa-ramen": guide({
    facts: [["角色", "移动日主餐"], ["时间", "1-1.5小时"], ["重点", "酱油拉面"], ["交通", "站前/巴士"]],
    play: ["站前名店适合省交通，拉面村适合想一次比较多家风格。", "两个人可以点不同口味，但不要为了多吃继续加宵夜。"],
    time: ["排队和用餐按 1-1.5 小时。"],
    route: ["站前店步行更稳；拉面村需市内交通或打车。"],
    best: ["札幌到旭川移动日晚饭。", "雨天或花田日后。"],
    avoid: ["第二天早起去美瑛/富良野时，不要排队到太晚。"],
    sources: ["asahikawaRamen", "asahikawaRamenStation"]
  }),
  "city-biei": guide({
    facts: [["角色", "丘陵农田"], ["时间", "半日-一日"], ["交通", "末端需规划"], ["最佳", "晴天"]],
    play: ["先决定玩法：公交少点、骑行、包车或租车。", "只追一条路线：拼布之路或青池方向，不要两边乱切。"],
    time: ["拼布之路半日。", "拼布+青池接近一日。"],
    route: ["旭川到美瑛走富良野线；美瑛内部点位分散。"],
    best: ["晴天、能见度高、云影明显。"],
    avoid: ["不要到站后才想怎么去各个树和池。"],
    sources: ["biei", "bluePond", "operation"]
  }),
  "spot-patchwork": guide({
    facts: [["角色", "美瑛主结构"], ["时间", "2-4小时"], ["交通", "点位分散"], ["最佳", "晴天"]],
    play: ["把农田、坡路、树和远山当一个整体看。", "少下车，多留完整视野。"],
    time: ["骑行/包车 2-4 小时。"],
    route: ["公共交通有限，需提前选交通方式。"],
    best: ["上午或傍晚光线更有层次。"],
    avoid: ["不要为了单棵树到处追点。"],
    sources: ["biei"]
  }),
  "spot-blue-pond": guide({
    facts: [["角色", "颜色奇观"], ["时间", "45-90分钟"], ["交通", "需查班次"], ["最佳", "晴/薄云"]],
    play: ["把它当美瑛的第二主题：颜色和枯木。", "如果人多，短看后撤，不必久留。"],
    time: ["现场 45-90 分钟。"],
    route: ["在白金温泉方向，末端交通不能临时赌。"],
    best: ["有光但不过曝时。"],
    avoid: ["阴雨或大客流时性价比下降。"],
    sources: ["bluePond", "biei"]
  }),
  "spot-shikisai": guide({
    facts: [["角色", "花田色块"], ["时间", "1-2小时"], ["交通", "末端规划"], ["最佳", "晴天"]],
    play: ["把它当美瑛的颜色补充，不要再追太多树。", "如果富良野也排花田，美瑛当天就减少花田重复。"],
    time: ["现场 1-2 小时。"],
    route: ["美瑛内部交通分散，和拼布之路/青池一起规划。"],
    best: ["晴天、花期、能见度高。"],
    avoid: ["不要和青池、拼布之路、富良野全部硬塞同一天。"],
    sources: ["biei"]
  }),
  "spot-shirahige": guide({
    facts: [["角色", "青池同线"], ["时间", "45-90分钟"], ["交通", "白金温泉方向"], ["取舍", "可删"]],
    play: ["如果已经去青池，白须瀑布可以作为同线补充。", "把水色和白金温泉方向一起理解。"],
    time: ["现场 45-90 分钟。"],
    route: ["从旭川或美瑛有前往青池/白金温泉方向的路线巴士，但班次有限。"],
    best: ["晴天或薄云，且回程班次明确。"],
    avoid: ["回程不稳就删；不要为了它错过主花田。"],
    sources: ["bluePondBiei", "bluePond"]
  }),
  "city-furano": guide({
    facts: [["角色", "7月主视觉"], ["时间", "半日-一日"], ["交通", "富良野线"], ["风险", "不能直去新得"]],
    play: ["用富田农场做主点，周边花田做延展。", "如果和美瑛同日，严格减少停留点。"],
    time: ["富田农场半日。", "富良野+中富良野一日更舒服。"],
    route: ["旭川到富良野走富良野线；富良野-新得铁路已废止。"],
    best: ["7月薰衣草季，早到避人流。"],
    avoid: ["不要从富良野继续按 JR 直通带广。"],
    sources: ["farmTomita", "farmTomitaHokkaido", "furanoClosed"]
  }),
  "spot-farm-tomita": guide({
    facts: [["角色", "薰衣草核心"], ["时间", "1.5-3小时"], ["官网", "有实时/时间"], ["最佳", "早晨"]],
    play: ["先看主花田，再吃薰衣草冰淇淋或休息。", "人多时减少拍照执念，保留感受。"],
    time: ["现场 1.5-3 小时。"],
    route: ["按官网 access 与当天交通确认。"],
    best: ["7月、清晨、晴或薄云。"],
    avoid: ["官网开放时间外不可进入。"],
    sources: ["farmTomita", "farmTomitaHokkaido"]
  }),
  "spot-nakafurano": guide({
    facts: [["角色", "坡面远山"], ["时间", "1-2小时"], ["适合", "富田后延展"], ["交通", "末端查"]],
    play: ["看花田如何贴着坡面和远山展开。"],
    time: ["1-2 小时即可。"],
    route: ["和富田农场邻近但仍要确认末端交通。"],
    best: ["晴天、山体能见度高。"],
    avoid: ["如果富田已经很累，就删掉。"],
    sources: ["farmTomitaHokkaido"]
  }),
  "spot-furano-norokko": guide({
    facts: [["角色", "车窗体验"], ["时间", "随车次"], ["运营", "季节性"], ["座位", "需确认"]],
    play: ["把它当富良野/美瑛花田日的慢速骨架。", "坐车本身看田野、花田和远山，不要只把它当交通。"],
    time: ["按具体车次反推全天。", "不要把午饭压在短换乘之间。"],
    route: ["JR 北海道 2026 年观光列车集中在 6-9 月，Norokko 需要票券/座位确认。"],
    best: ["运营日、白天、有指定席。"],
    avoid: ["没有合适车次就不要硬嵌；普通列车或巴士也可以完成旅行。"],
    sources: ["jrFuranoBiei", "jrNorokkoFurano", "jrSightseeing2026"]
  }),
  "spot-lavender-east": guide({
    facts: [["角色", "薰衣草延展"], ["时间", "1小时"], ["2026", "6/20-7/20"], ["取舍", "可删"]],
    play: ["只在花期正好、天气好、富田农场后仍有体力时加。", "重点看大面积薰衣草，不要再追过多小点。"],
    time: ["现场约 1 小时。"],
    route: ["以 Farm Tomita 官网当日开放和交通为准。"],
    best: ["2026-06-20 至 2026-07-20 开放期内，晴天或薄云。"],
    avoid: ["开放期外、天气差或富田农场已很累时直接删。"],
    sources: ["farmTomitaEast", "farmTomita"]
  }),
  "city-obihiro-asahikawa": guide({
    facts: [["角色", "十胜备选"], ["交通", "非JR直通"], ["时间", "移动日"], ["风险", "绕行"]],
    play: ["如果真想看十胜，把它作为移动日的一部分，而不是旭川支线。"],
    time: ["旭川到带广公交约半日量级，继续钏路则整日。"],
    route: ["可用 North Liner 预约巴士；JR-only 需绕札幌/南千岁。"],
    best: ["想看农业平原，且愿意牺牲一天移动。"],
    avoid: ["不要把富良野-带广写成 JR 顺路。"],
    sources: ["northliner", "furanoCityBus", "furanoClosed"]
  }),
  "spot-tokachi-plain": guide({
    facts: [["角色", "平原尺度"], ["时间", "车窗/半日"], ["适合", "顺路"], ["交通", "带广侧"]],
    play: ["重点不是打卡，而是看地平线、农田和长直线。"],
    time: ["车窗即可；下车半日更松。"],
    route: ["更适合带广停留或钏路侧顺路。"],
    best: ["晴天能见度高。"],
    avoid: ["不要为它牺牲根室或花田主线。"]
  }),
  "spot-obihiro-food": guide({
    facts: [["角色", "生活补给"], ["时间", "1小时"], ["重点", "豚丼"], ["适合", "长移动后"]],
    play: ["到带广后先吃饭，把交通疲劳收住。"],
    time: ["1 小时左右。"],
    route: ["围绕带广站完成。"],
    best: ["移动日中段或到达后。"],
    avoid: ["吃完不要继续加远点。"]
  }),
  "base-kushiro": guide({
    facts: [["节奏", "2晚东北海道"], ["主线", "湿原/海岸/最东端"], ["交通", "花咲线+末端巴士"], ["风险", "长线"]],
    play: ["钏路必须住下，不能当天来回硬刷。", "一天湿原或市内，一天厚岸/根室二选一。"],
    time: ["钏路市内半日。", "根室/纳沙布岬整日。"],
    route: ["从札幌/带广方向依赖 Ozora；根室方向走花咲线。"],
    best: ["海雾、湿原、低密度就是这里的主题。"],
    avoid: ["不要把根室和湿原排同一天。"],
    sources: ["kushiro", "eastHokkaido", "operation"]
  }),
  "city-kushiro": guide({
    facts: [["角色", "东北海道枢纽"], ["时间", "半日"], ["适合", "抵达日"], ["交通", "根室/花咲线"]],
    play: ["抵达后只做幣舞桥、港口、晚饭。", "第二天再去湿原或根室。"],
    time: ["2-4 小时足够。"],
    route: ["钏路站是花咲线/根室方向起点。"],
    best: ["傍晚。"],
    avoid: ["长移动后不要冲远郊。"],
    sources: ["kushiro", "operation"]
  }),
  "spot-kushiro-marsh": guide({
    facts: [["角色", "湿原核心"], ["时间", "半日"], ["交通", "展望点末端"], ["最佳", "晴/薄雾"]],
    play: ["选择一个展望点，专心看曲流、湿地和低平空间。"],
    time: ["半日最稳。"],
    route: ["JR 只能解决部分接近，展望点末端交通要查。"],
    best: ["晴天层次清楚，薄雾也有气质。"],
    avoid: ["不要和根室最东端同日。"],
    sources: ["kushiro"]
  }),
  "spot-nusamai": guide({
    facts: [["角色", "钏路傍晚"], ["时间", "1-2小时"], ["适合", "抵达日"], ["交通", "市内"]],
    play: ["傍晚到幣舞桥，看港口光线，再吃炉端或海鲜。"],
    time: ["1-2 小时。"],
    route: ["市内短距离完成。"],
    best: ["日落前后。"],
    avoid: ["天气差时缩短，留体力。"],
    sources: ["kushiro"]
  }),
  "spot-kushiro-norokko": guide({
    facts: [["角色", "湿原慢车"], ["时间", "半日框架"], ["运营", "4-10月"], ["座位", "需确认"]],
    play: ["把慢车当湿原体验的一部分，而不是单纯交通。", "如果不想折腾展望点末端交通，这是一种更稳的湿原接触方式。"],
    time: ["按具体车次做半日规划。", "不要再和根室同日。"],
    route: ["JR 北海道标注 2026 年 4-10 月运行，Kushiro-Toro 方向可看湿原与野生动物机会。"],
    best: ["天气稳定、车次合适、有座位。"],
    avoid: ["不要以为它能覆盖所有湿原展望点；它是体验补充。"],
    sources: ["kushiroNorokko", "kushiroNorokkoHokkaido"]
  }),
  "spot-moo-robata": guide({
    facts: [["角色", "港口晚饭"], ["时间", "1-2小时"], ["适合", "抵达日"], ["重点", "炭火海鲜"]],
    play: ["傍晚看幣舞桥，再去港口边吃炉端。", "两个人可以选鱼、贝类、蔬菜分着烤。"],
    time: ["用餐 1-2 小时。"],
    route: ["在钏路市内港口动线上，不需要额外长交通。"],
    best: ["长移动日后、傍晚、有营业确认。"],
    avoid: ["天气差或客流大时提前确认；不要吃完继续跑远点。"],
    sources: ["mooRobata", "kushiroRobata", "kushiroRobataOfficial"]
  }),
  "city-akkeshi": guide({
    facts: [["角色", "轻一点东海岸"], ["时间", "半日-一日"], ["交通", "花咲线"], ["重点", "海雾/海湾"]],
    play: ["把厚岸当根室的轻量替代：海湾、岬角、吃饭。"],
    time: ["半日到一日，取决于班次。"],
    route: ["钏路到厚岸走花咲线方向，班次要提前锁定。"],
    best: ["海雾天也有味道。"],
    avoid: ["不要错过回程班次。"],
    sources: ["akkeshiGuide", "operation"]
  }),
  "spot-aikappu": guide({
    facts: [["角色", "岬角海湾"], ["时间", "1小时"], ["交通", "末端查"], ["最佳", "低风"]],
    play: ["看厚岸湾的曲线和海雾，不要追过多点。"],
    time: ["现场约 1 小时。"],
    route: ["厚岸站后末端交通提前查。"],
    best: ["低风、能见度适中。"],
    avoid: ["风雨大时不必硬上。"],
    sources: ["akkeshiGuide"]
  }),
  "spot-akkeshi-bay": guide({
    facts: [["角色", "渔业生活感"], ["时间", "1-2小时"], ["适合", "低压力"], ["交通", "站周边/短接驳"]],
    play: ["看海湾、吃本地东西，把它当生活环境体验。"],
    time: ["1-2 小时。"],
    route: ["和爱冠岬同日即可。"],
    best: ["天气普通也可。"],
    avoid: ["不要排成景点打卡。"],
    sources: ["akkeshiGuide"]
  }),
  "spot-akkeshi-oysters": guide({
    facts: [["角色", "厚岸主餐"], ["时间", "1-1.5小时"], ["重点", "牡蛎"], ["交通", "先锁回程"]],
    play: ["把牡蛎当厚岸的主体验之一，和海湾/爱冠岬组合。", "不必追很多店，选交通最稳的一处即可。"],
    time: ["午饭 1-1.5 小时。"],
    route: ["厚岸往返班次稀疏，先定回程，再安排用餐。"],
    best: ["厚岸替代根室的轻量海岸日。"],
    avoid: ["不要为了吃饭错过花咲线回程。"],
    sources: ["akkeshiOysters", "akkeshiModel", "akkeshiGuide"]
  }),
  "city-nemuro": guide({
    facts: [["角色", "最东端重体验"], ["时间", "整日"], ["交通", "JR+巴士/出租"], ["风险", "班次+天气"]],
    play: ["把坐车过程也当旅行内容。", "到根室后只做纳沙布岬这一件大事。"],
    time: ["从钏路往返按整日。"],
    route: ["钏路到根室走花咲线；根室站到纳沙布岬还需巴士或出租。"],
    best: ["晴天或有边界感的海雾天。"],
    avoid: ["不要和湿原或厚岸深度游同日。"],
    sources: ["nosappu", "eastHokkaido", "operation"]
  }),
  "spot-nosappu": guide({
    facts: [["角色", "日本最东端"], ["时间", "1-2小时"], ["交通", "根室后接驳"], ["最佳", "低风"]],
    play: ["看灯塔、海面、边界感和地理尽头。", "拍照后留 20 分钟安静站着，比多跑一个点更值。"],
    time: ["现场 1-2 小时。"],
    route: ["根室站后需巴士或出租。"],
    best: ["低风、能见度好。"],
    avoid: ["回程末班前必须撤。"],
    sources: ["nosappu", "eastHokkaido"]
  }),
  "spot-nemuro-line": guide({
    facts: [["角色", "铁路尽头感"], ["时间", "车程本身"], ["适合", "喜欢车窗"], ["交通", "花咲线"]],
    play: ["不要只等到达，车窗里的低密度就是体验。"],
    time: ["随钏路-根室车程发生。"],
    route: ["花咲线班次稀疏，先锁回程。"],
    best: ["白天有光时。"],
    avoid: ["不喜欢长车程则改厚岸。"],
    sources: ["operation", "timetable"]
  }),
  "spot-nemuro-hanamaru": guide({
    facts: [["角色", "根室主餐"], ["时间", "1小时"], ["重点", "寿司/花咲蟹"], ["条件", "回程有余量"]],
    play: ["纳沙布岬完成后，如果回程余量足，再在根室市区吃饭。", "白天回转寿司、晚上炉端/居酒屋方向更合理。"],
    time: ["用餐 45-75 分钟，排队另算。"],
    route: ["根室站、纳沙布岬接驳和回钏路列车要一起看。"],
    best: ["天气和交通都顺，且不赶末班。"],
    avoid: ["不要为了餐厅牺牲最东端或回程安全。"],
    sources: ["nemuroOfficialFaq", "nemuroTourism", "nosappu"]
  }),
  "city-obihiro-kushiro": guide({
    facts: [["角色", "十胜顺路点"], ["时间", "半日-一日"], ["交通", "Ozora体系"], ["取舍", "可跳过"]],
    play: ["如果从钏路西移或需要缓冲，可用带广补十胜平原。"],
    time: ["短停 2-4 小时，独立停留 1 晚更好。"],
    route: ["钏路-带广在札幌-钏路 Ozora 主干线上。"],
    best: ["天气好、想看农业尺度时。"],
    avoid: ["疲劳时跳过，不影响主线。"],
    sources: ["obihiro", "operation"]
  }),
  "spot-obihiro-window": guide({
    facts: [["角色", "车窗平原"], ["时间", "车程"], ["适合", "顺路"], ["交通", "JR主干"]],
    play: ["坐车时专心看农田、直线和地平线。"],
    time: ["车程本身。"],
    route: ["钏路-带广或带广-札幌方向。"],
    best: ["白天。"],
    avoid: ["夜间车窗价值低。"]
  }),
  "spot-obihiro-stay": guide({
    facts: [["角色", "空间补充"], ["时间", "半日"], ["适合", "独立停"], ["交通", "带广站周边"]],
    play: ["少看景点，多看平原城市尺度。"],
    time: ["半日即可。"],
    route: ["带广站作为中心。"],
    best: ["天气晴朗。"],
    avoid: ["时间紧时直接删。"]
  }),
  "base-hakodate": guide({
    facts: [["节奏", "1-2晚"], ["角色", "跨海前停顿"], ["交通", "Hokuto+Liner"], ["风险", "长线后疲劳"]],
    play: ["从钏路到达后先住下，第二天再跨海。", "函馆只抓夜景、元町、港区三件事。"],
    time: ["函馆市内半日到一日。", "跨海日另算。"],
    route: ["函馆站不是新干线站，跨海必须去新函馆北斗。"],
    best: ["天气好上函馆山；天气普通做元町和仓库。"],
    avoid: ["不要钏路长移动后继续冲仙台。"],
    sources: ["hakodateTravel", "hakodate", "shinkansen"]
  }),
  "city-hakodate": guide({
    facts: [["角色", "港口基地"], ["时间", "半日-一日"], ["重点", "夜景/坡道"], ["交通", "市内+Liner"]],
    play: ["白天元町和金森仓库，傍晚看是否上函馆山。"],
    time: ["半日核心，一日舒服。"],
    route: ["跨海前从函馆站坐 Hakodate Liner 到新函馆北斗。"],
    best: ["能见度好时上山。"],
    avoid: ["天气差不要硬等夜景。"],
    sources: ["hakodateTravel", "mtHakodate", "motomachi"]
  }),
  "spot-hakodate-night": guide({
    facts: [["角色", "函馆主画面"], ["时间", "1.5-2.5小时"], ["最佳", "能见度"], ["风险", "风/雾"]],
    play: ["日落前到，等城市灯亮，看到夹海地形即可撤。"],
    time: ["含上下山 1.5-2.5 小时。"],
    route: ["上山方式按当日运营确认。"],
    best: ["晴朗、低云少。"],
    avoid: ["大雾天不要浪费体力。"],
    sources: ["mtHakodate"]
  }),
  "spot-motomachi": guide({
    facts: [["角色", "港口坡道"], ["时间", "1.5-3小时"], ["交通", "步行"], ["适合", "白天"]],
    play: ["从坡道、教堂、旧建筑慢慢走到金森仓库。"],
    time: ["1.5-3 小时。"],
    route: ["市内步行串联，坡道多。"],
    best: ["下午到傍晚。"],
    avoid: ["行李日不要拖箱走坡。"],
    sources: ["motomachi", "hakodateTravel"]
  }),
  "spot-hakodate-market": guide({
    facts: [["角色", "函馆早饭"], ["时间", "1小时"], ["区域", "函馆站旁"], ["适合", "跨海前"]],
    play: ["早上先吃海鲜，再决定是否补元町/红砖仓库。", "把它当轻松生活点，不要在市场里耗尽预算和体力。"],
    time: ["45-75 分钟。"],
    route: ["函馆站周边最省交通，跨海前也好安排。"],
    best: ["早饭、雨天、跨海前半天。"],
    avoid: ["拖行李不舒服；具体店铺价格和口碑差异大，要看近期评价。"],
    sources: ["hakodateTravel", "hakodateTransport"]
  }),
  "spot-hakodate-tram": guide({
    facts: [["角色", "市内骨架"], ["时间", "随路线"], ["覆盖", "主观光点"], ["体力", "省腿"]],
    play: ["用市电把函馆站、元町、五棱郭、汤之川这些方向串起来。", "坐车看城市尺度，比一路步行更稳。"],
    time: ["按 1-4 小时的市内半日来用。"],
    route: ["官方交通页说明市电白天频繁运行，并服务函馆站、元町、Bay Area、五棱郭、汤之川等主要点。"],
    best: ["雨天、行程恢复日、坡道前后。"],
    avoid: ["市电不是新干线换乘；跨海仍要 Hakodate Liner 去新函馆北斗。"],
    sources: ["hakodateTransport"]
  }),
  "city-seikan": guide({
    facts: [["角色", "跨海枢纽"], ["必须", "新函馆北斗"], ["时间", "半日移动"], ["风险", "具体车次"]],
    play: ["把它当交通节点，不当景点。", "提前确认 Hakodate Liner 与新干线衔接，给换乘留余地。"],
    time: ["函馆到仙台约 3.5-4.5 小时含换乘。"],
    route: ["函馆 -> 新函馆北斗 -> 新青森 -> 仙台。"],
    best: ["白天跨海更不焦虑。"],
    avoid: ["不要写成函馆站直达新青森。"],
    sources: ["shinkansen", "jreast"]
  }),
  "spot-seikan-tunnel": guide({
    facts: [["角色", "海底铁路"], ["时间", "车程中"], ["体验", "地理意义"], ["交通", "新干线"]],
    play: ["把它理解成北海道到本州的切换，而不是观景段。"],
    time: ["随新干线通过。"],
    route: ["新函馆北斗到新青森区间经过青函隧道。"],
    best: ["坐定后看路线图即可。"],
    avoid: ["不要期待海底有风景。"],
    sources: ["shinkansen", "jreast"]
  }),
  "spot-shin-aomori": guide({
    facts: [["角色", "本州入口"], ["时间", "换乘"], ["交通", "新干线"], ["取舍", "不停留"]],
    play: ["只做换乘和买水，不做旅游点。"],
    time: ["换乘缓冲 15-30 分钟以上更舒服。"],
    route: ["新函馆北斗来车后继续东北新干线南下。"],
    best: ["车次衔接稳定时。"],
    avoid: ["不要在这里拆行程，除非专门游青森。"],
    sources: ["jreast"]
  }),
  "city-hachinohe-hakodate": guide({
    facts: [["角色", "东北海岸备选"], ["时间", "半日-一日"], ["交通", "新干线+末端"], ["优先级", "低于跨海主线"]],
    play: ["只有函馆到仙台之间想补一段海岸时才加。"],
    time: ["至少半日，舒服要一日。"],
    route: ["需经新干线体系，不是函馆普通短支线。"],
    best: ["晴天、有完整余量。"],
    avoid: ["松岛已安排时可跳过。"],
    sources: ["hachinohe", "tanesashi", "jreast"]
  }),
  "spot-tanesashi": guide({
    facts: [["角色", "草地岩岸"], ["时间", "2-4小时"], ["交通", "JR八户线/末端"], ["最佳", "晴天"]],
    play: ["看天然草地、岩岸、海风，不要只停一个停车点。"],
    time: ["2-4 小时。"],
    route: ["从八户侧接近，末端交通查八户线/巴士。"],
    best: ["晴天、低风。"],
    avoid: ["阴雨大风时删。"],
    sources: ["tanesashi", "hachinohe"]
  }),
  "spot-hachinohe-port": guide({
    facts: [["角色", "港口生活"], ["时间", "1-2小时"], ["适合", "吃饭"], ["交通", "市内/短接驳"]],
    play: ["用市场或港口吃饭补东北生活感。"],
    time: ["1-2 小时。"],
    route: ["八户市内短交通。"],
    best: ["上午市场或午饭。"],
    avoid: ["不要为它打乱新干线主线。"],
    sources: ["hachinohe"]
  }),
  "spot-hasshoku": guide({
    facts: [["角色", "八户市场"], ["时间", "1-2小时"], ["适合", "午饭"], ["交通", "市内接驳"]],
    play: ["把八食中心当八户吃饭和市场生活的主点。", "如果种差海岸也去，市场只吃饭不深逛。"],
    time: ["吃饭和短逛 1-2 小时。"],
    route: ["从八户站/市区需要市内交通衔接，不能当新干线站内点。"],
    best: ["八户停留有完整半天时。"],
    avoid: ["跨海换乘日不要为它绕路。"],
    sources: ["hachinoheFood", "hachinohe"]
  }),
  "spot-tatehana": guide({
    facts: [["角色", "大型早市"], ["时间", "1-2小时"], ["条件", "早起/开市日"], ["取舍", "住一晚更好"]],
    play: ["早起边走边吃，感受八户港口生活。", "它不是普通全天景点，要按开市日和时间来。"],
    time: ["1-2 小时。"],
    route: ["适合八户过夜或很早抵达后用短交通前往。"],
    best: ["开市日、天气可接受、愿意早起。"],
    avoid: ["为了早市牺牲跨海/仙台主线不划算。"],
    sources: ["tatehanaMarket", "hachinoheFood"]
  }),
  "base-sendai": guide({
    facts: [["节奏", "1-2晚"], ["角色", "本州缓冲"], ["主线", "松岛"], ["交通", "东北新干线"]],
    play: ["跨海抵达只住下吃饭。", "第二天松岛半日，再回仙台收尾。"],
    time: ["仙台市内 2-4 小时。", "松岛半日。"],
    route: ["函馆到仙台经新函馆北斗、新青森、东北新干线。"],
    best: ["把它当节奏恢复站。"],
    avoid: ["第一晚不要再跑松岛。"],
    sources: ["sendai", "jntoSendai", "jreast"]
  }),
  "city-sendai": guide({
    facts: [["角色", "东北核心"], ["时间", "半日"], ["重点", "站区+牛舌"], ["交通", "新干线"]],
    play: ["站区、青叶通、晚饭足够。", "用牛舌完成东北落地感。"],
    time: ["2-4 小时。"],
    route: ["仙台站是东北新干线主站。"],
    best: ["到达傍晚。"],
    avoid: ["不要把仙台排成城市打卡清单。"],
    sources: ["sendai", "jntoSendai"]
  }),
  "spot-sendai-station": guide({
    facts: [["角色", "城市骨架"], ["时间", "1小时"], ["适合", "抵达"], ["交通", "站区"]],
    play: ["站内外完成吃饭、买水、确认第二天松岛交通。"],
    time: ["1 小时即可。"],
    route: ["围绕仙台站。"],
    best: ["抵达日。"],
    avoid: ["别把它扩成购物日。"],
    sources: ["sendai"]
  }),
  "spot-gyutan": guide({
    facts: [["角色", "地方食物"], ["时间", "1小时"], ["适合", "长途后"], ["区域", "站周边"]],
    play: ["选站周边店，吃完回酒店。"],
    time: ["排队加用餐 1-1.5 小时。"],
    route: ["仙台站周边餐厅密集。"],
    best: ["跨海抵达晚饭。"],
    avoid: ["不要为了名店排到过累。"],
    sources: ["jntoSendai"]
  }),
  "spot-sendai-zunda": guide({
    facts: [["角色", "甜品收尾"], ["时间", "20-45分钟"], ["区域", "站区"], ["体力", "低"]],
    play: ["把 zunda 当跨海抵达后的轻甜品。", "如果牛舌排队太久，可用甜品和简单晚饭替代。"],
    time: ["20-45 分钟。"],
    route: ["仙台站区解决即可。"],
    best: ["跨海抵达日晚、松岛回来后。"],
    avoid: ["不要为了甜品再跨很远。"],
    sources: ["jntoSendai", "sendaiGuidebook"]
  }),
  "spot-kokubuncho": guide({
    facts: [["角色", "夜晚餐饮区"], ["时间", "1-2小时"], ["体力", "中"], ["适合", "住下后"]],
    play: ["如果抵达不晚，可把国分町作为仙台夜晚的餐饮选择。", "两个人选一家舒服店坐下，不做夜生活扫街。"],
    time: ["晚饭 1-2 小时。"],
    route: ["市内短交通或步行，按酒店位置决定。"],
    best: ["已经入住、第二天不早起太狠。"],
    avoid: ["跨海到达太晚就别去；仙台第一晚不需要再跑远。"],
    sources: ["jntoSendai"]
  }),
  "city-matsushima": guide({
    facts: [["角色", "仙台最佳支线"], ["时间", "半日"], ["交通", "JR普通支线"], ["重点", "海湾岛屿"]],
    play: ["海湾散步+游船/瑞严寺二选一。", "下午回仙台吃饭，不要赶一整天。"],
    time: ["3-5 小时。"],
    route: ["仙台到松岛方向可用 JR 仙石线/东北本线相关站，具体到站按当天查。"],
    best: ["晴天更漂亮，阴天也可。"],
    avoid: ["不要同时把八户也塞进仙台段。"],
    sources: ["matsushima", "jntoMatsushima", "zuiganji"]
  }),
  "spot-matsushima-bay": guide({
    facts: [["角色", "日本三景"], ["时间", "1-2小时"], ["交通", "步行/游船"], ["最佳", "晴/薄云"]],
    play: ["先在岸边看岛屿结构，再决定是否坐船。"],
    time: ["岸边 1 小时，含游船 2 小时以上。"],
    route: ["从松岛海岸/松岛区域步行串联。"],
    best: ["有光时岛屿层次清楚。"],
    avoid: ["不要赶船赶到没有散步时间。"],
    sources: ["matsushima", "jntoMatsushima"]
  }),
  "spot-zuiganji": guide({
    facts: [["角色", "文化补充"], ["时间", "1-2小时"], ["适合", "雨天"], ["取舍", "和游船二选一也可"]],
    play: ["如果想降节奏，瑞严寺比继续追海景更稳。"],
    time: ["1-2 小时。"],
    route: ["和松岛湾步行串联。"],
    best: ["雨天或想看文化时。"],
    avoid: ["时间短时不要寺和船都赶。"],
    sources: ["zuiganji", "matsushima"]
  }),
  "spot-matsushima-fishmarket": guide({
    facts: [["角色", "海湾午饭"], ["时间", "1小时"], ["重点", "牡蛎/穴子"], ["季节", "需确认"]],
    play: ["海湾散步后，用鱼市场或附近餐厅解决午饭。", "牡蛎、穴子、海鲜小吃都可以，不必只盯一项。"],
    time: ["午饭 45-75 分钟。"],
    route: ["鱼市场、游船码头、瑞严寺区域适合步行串联。"],
    best: ["松岛半日中段。"],
    avoid: ["牡蛎季节性强；夏天不要只按冬季牡蛎攻略期待。"],
    sources: ["matsushimaFood", "matsushimaSeafood", "jntoMatsushima"]
  }),
  "city-hachinohe-sendai": guide({
    facts: [["角色", "若未去的补线"], ["时间", "一日"], ["交通", "新干线北上"], ["优先级", "低"]],
    play: ["仙台住 2 晚且不去松岛以外点时才考虑。"],
    time: ["一日往返才不赶。"],
    route: ["仙台到八户需东北新干线北上。"],
    best: ["海岸天气好。"],
    avoid: ["一般优先松岛。"],
    sources: ["hachinohe", "tanesashi", "jreast"]
  }),
  "spot-hachinohe-coast-sendai": guide({
    facts: [["角色", "三陆北端"], ["时间", "半日"], ["交通", "八户侧末端"], ["适合", "海岸控"]],
    play: ["只选种差海岸核心段，不把八户全城排满。"],
    time: ["半日。"],
    route: ["新干线到八户后再接末端交通。"],
    best: ["晴天。"],
    avoid: ["东京移动日前不要加。"],
    sources: ["tanesashi"]
  }),
  "spot-hachinohe-market": guide({
    facts: [["角色", "市场生活"], ["时间", "1-2小时"], ["适合", "早午"], ["交通", "市内"]],
    play: ["把它当吃饭和生活观察，不当景点清单。"],
    time: ["1-2 小时。"],
    route: ["八户市内短交通。"],
    best: ["上午或午饭。"],
    avoid: ["如果只想看风景，优先海岸。"],
    sources: ["hachinohe"]
  }),
  "base-tokyo": guide({
    facts: [["节奏", "终点收尾"], ["主线", "市内短点"], ["交通", "东北新干线"], ["风险", "人流"]],
    play: ["到达日只入住和短散步。", "涩谷、银座、台场三选一到两个，不要全刷。"],
    time: ["每个区域 2-4 小时。"],
    route: ["仙台到东京走东北新干线；市内按当天住宿选线。"],
    best: ["用低强度城市反差结束旅行。"],
    avoid: ["不要最后两天再加远郊。"],
    sources: ["tokyo", "jreast"]
  }),
  "city-tokyo": guide({
    facts: [["角色", "终点枢纽"], ["时间", "半日"], ["重点", "入住/返程"], ["交通", "站区"]],
    play: ["围绕酒店和返程站点活动，减少跨城。"],
    time: ["到达晚 2 小时，完整半日也够。"],
    route: ["东京站/上野/新宿按住宿和返程选择。"],
    best: ["长线后低强度。"],
    avoid: ["不要第一晚冲涩谷+台场。"],
    sources: ["tokyo"]
  }),
  "spot-tokyo-station": guide({
    facts: [["角色", "交通商业"], ["时间", "1-2小时"], ["适合", "新干线后"], ["交通", "站内外"]],
    play: ["看站房、吃饭、买伴手礼，结束即可。"],
    time: ["1-2 小时。"],
    route: ["新干线到达后顺路。"],
    best: ["到达日。"],
    avoid: ["行李未放好前不要走太远。"],
    sources: ["tokyo"]
  }),
  "spot-urban-density": guide({
    facts: [["角色", "反差体验"], ["时间", "30-90分钟"], ["适合", "低体力"], ["交通", "步行"]],
    play: ["不追景点，观察车站、人流、便利店和街区密度。"],
    time: ["30-90 分钟。"],
    route: ["酒店附近完成即可。"],
    best: ["刚到东京时。"],
    avoid: ["不要把它变成跨区散步。"]
  }),
  "city-shibuya": guide({
    facts: [["角色", "人流峰值"], ["时间", "2-3小时"], ["交通", "市内"], ["体力", "中高消耗"]],
    play: ["路口+高处视角二选一或短串联。", "看完就撤到安静餐厅。"],
    time: ["2-3 小时。"],
    route: ["市内交通方便，但出站和人流消耗大。"],
    best: ["傍晚到夜晚。"],
    avoid: ["低体力日不要久逛。"],
    sources: ["tokyo"]
  }),
  "spot-shibuya-crossing": guide({
    facts: [["角色", "人流交叉"], ["时间", "20-45分钟"], ["最佳", "傍晚"], ["体力", "消耗大"]],
    play: ["地面走一次，再找边缘位置看几轮人流。"],
    time: ["20-45 分钟。"],
    route: ["涩谷站出站后即到。"],
    best: ["傍晚屏幕和人流都强。"],
    avoid: ["不要在路口中心停留拍照影响通行。"],
    sources: ["tokyo"]
  }),
  "spot-shibuya-view": guide({
    facts: [["角色", "俯视结构"], ["时间", "1-2小时"], ["预约", "按当天"], ["适合", "短时高回报"]],
    play: ["从高处把人流和路网看成结构。"],
    time: ["含排队/预约 1-2 小时。"],
    route: ["按具体观景点预约与入口走。"],
    best: ["傍晚到夜景。"],
    avoid: ["没预约或排队过长就放弃。"],
    sources: ["tokyo"]
  }),
  "city-ginza": guide({
    facts: [["角色", "雨天商业"], ["时间", "2-4小时"], ["交通", "市内"], ["体力", "低中"]],
    play: ["中央通、百货、咖啡三件事即可。"],
    time: ["2-4 小时。"],
    route: ["市内交通密集，适合返程前。"],
    best: ["雨天、低体力、买东西。"],
    avoid: ["不要同时安排涩谷大逛。"],
    sources: ["tokyo"]
  }),
  "spot-ginza-chuo": guide({
    facts: [["角色", "银座街景"], ["时间", "45-90分钟"], ["适合", "散步"], ["交通", "步行"]],
    play: ["沿中央通看街景和建筑立面。"],
    time: ["45-90 分钟。"],
    route: ["银座站周边步行。"],
    best: ["下午或夜间灯光。"],
    avoid: ["不要为拍照站在车流边缘。"],
    sources: ["tokyo"]
  }),
  "spot-ginza-cafe": guide({
    facts: [["角色", "收尾休息"], ["时间", "1-2小时"], ["适合", "雨天"], ["交通", "室内"]],
    play: ["选百货或咖啡，把旅行尾声放慢。"],
    time: ["1-2 小时。"],
    route: ["中央通周边室内完成。"],
    best: ["雨天和返程前。"],
    avoid: ["不要买到行李超载。"],
    sources: ["tokyo"]
  }),
  "spot-ginza-itoya": guide({
    facts: [["角色", "纸品书店"], ["时间", "1-2小时"], ["适合", "雨天"], ["体力", "低"]],
    play: ["用纸品、书店、咖啡替代高强度购物。", "两个人各自慢看，再约一个咖啡点集合。"],
    time: ["1-2 小时。"],
    route: ["银座中央通周边步行即可。"],
    best: ["雨天、返程前、想买轻量伴手礼时。"],
    avoid: ["不要把银座和涩谷都逛成重体力日。"],
    sources: ["goTokyoGinza", "tokyo"]
  }),
  "city-odaiba": guide({
    facts: [["角色", "人工海岸"], ["时间", "2-4小时"], ["最佳", "傍晚"], ["交通", "市内非JR单线"]],
    play: ["海滨散步、彩虹桥视角、晚饭三选二。"],
    time: ["2-4 小时。"],
    route: ["常用临海交通系统，按酒店位置查。"],
    best: ["傍晚到夜景。"],
    avoid: ["台风/强风/大雨时删。"],
    sources: ["odaiba", "rainbowBridge", "tokyo"]
  }),
  "spot-odaiba-beach": guide({
    facts: [["角色", "海风天际线"], ["时间", "45-90分钟"], ["最佳", "傍晚"], ["交通", "步行"]],
    play: ["沿海滨慢走，看桥、海湾和东京天际线。"],
    time: ["45-90 分钟。"],
    route: ["台场区域步行完成。"],
    best: ["日落前后。"],
    avoid: ["强风雨天不要去海边。"],
    sources: ["odaiba"]
  }),
  "spot-rainbow-bridge": guide({
    facts: [["角色", "海湾夜景"], ["时间", "30-90分钟"], ["交通", "步行/海鸥线"], ["最佳", "夜晚"]],
    play: ["从台场侧看桥，或用交通工具经过桥面获取视角。"],
    time: ["看景 30 分钟，步行桥面约 30 分钟级别。"],
    route: ["彩虹桥连接芝浦和台场，具体步道开放以当天为准。"],
    best: ["夜景和低风。"],
    avoid: ["天气恶劣时不要走桥。"],
    sources: ["rainbowBridge", "odaiba"]
  }),
  "spot-odaiba-gundam-miraikan": guide({
    facts: [["角色", "台场雨天替代"], ["时间", "1.5-3小时"], ["适合", "傍晚/雨天"], ["交通", "市内"]],
    play: ["晴天先海边，天气普通就改高达、商场或 Miraikan。", "选一个室内外组合，不要把台场拆成太多任务。"],
    time: ["1.5-3 小时。"],
    route: ["按酒店位置接入台场区域交通；当天查开放和活动。"],
    best: ["强风以外的傍晚，或雨天需要室内替代时。"],
    avoid: ["台场交通回市区需要时间，最后一天别玩到太晚。"],
    sources: ["odaibaOfficial", "odaiba", "rainbowBridgeGoodLuck"]
  })
};

function getGuide(item) {
  return detailGuides[item.id] || guide({
    facts: [["层级", kindLabels[item.type] || "目的地"], ["节奏", item.optional ? "可选" : "主线"], ["体力", "按当天调整"], ["交通", "点开审计"]],
    play: [`先判断它在路线里的角色：${item.summary}`],
    time: ["先按 1-3 小时估算，若涉及跨城或末端交通则升级为半日。"],
    route: item.sections.find((section) => section.title === "交通审计")?.items || ["以当天官方时刻和现场状态为准。"],
    best: ["天气、体力、班次三者都合适时再加。"],
    avoid: ["不要为了打卡破坏基地移动节奏。"],
    sources: item.sources || []
  });
}

const kindLabels = {
  base: "基地",
  city: "城市",
  spot: "可选子目的地"
};

const levelLabels = {
  1: "基地",
  2: "城市",
  3: "子目的地"
};

const foodTips = {
  "base-sapporo": ["札幌段优先把拉面、海鲜市场、便利店补给和药妆放在同一晚解决。", "二条市场适合早饭或看海鲜，薄野/狸小路适合雨天晚饭。"],
  "city-sapporo": ["低体力时选酒店附近拉面或汤咖喱，不必跨城追店。", "二条市场更适合早去；晚上用薄野和狸小路收尾。"],
  "spot-sapporo-food": ["二条市场看海鲜，拉面街看札幌味噌拉面的集中度。", "先看近期评价和排队，再决定具体店名。"],
  "city-otaru": ["小樽吃法不必复杂：运河附近海鲜、堺町通甜品、玻璃店慢逛即可。", "LeTAO、北一硝子方向适合雨天或下午休息。"],
  "spot-otaru-glass-dessert": ["把甜品店当休息点，不要每家都排。", "玻璃店适合买小件，注意行李重量和易碎。"],
  "city-yoichi": ["Nikka 内部餐厅和商店要按当天开放情况看；没有预约也可把余市做成轻散步。", "试饮后不要再安排紧张交通。"],
  "spot-nikka": ["Rita's Kitchen 和蒸馏所商店适合顺手解决，不要为了购物拖到末班。", "酒类购买要考虑行李和航空限制。"],
  "city-kamui": ["岬角没有稳定餐饮期待，出发前在札幌/小樽/余市补水和轻食。", "晴天跑岬角，晚饭回札幌或小樽解决更稳。"],
  "base-asahikawa": ["旭川适合用拉面收住移动日；站前名店省交通，拉面村更像集合体验。", "第二天要跑美瑛/富良野时，前一晚不要排长队太久。"],
  "city-asahikawa": ["站前拉面名店适合低成本尝试，拉面村适合想比较多家风格的人。", "把吃饭和查第二天交通放在同一段时间。"],
  "spot-asahikawa-ramen": ["酱油汤底是旭川拉面的核心识别。", "选店时看当天营业、排队、离酒店距离，而不是只看排名。"],
  "city-biei": ["美瑛内部餐饮和交通都分散，午饭不要压到很晚。", "有包车/租车时可更灵活；公交玩法要先定吃饭点。"],
  "spot-shikisai": ["适合搭配简单午饭，不要为了花田继续横跳太多点。", "人多时把它当颜色补充，停留短一点。"],
  "spot-shirahige": ["青池/白金温泉方向要先看回程班次，再决定是否坐下吃饭。", "天气差时不要把午饭地点放得太偏。"],
  "city-furano": ["富良野花田日适合轻食、冰淇淋和早出发，正餐不要排得太远。", "富田农场周边人多，提前准备备选餐厅。"],
  "spot-farm-tomita": ["薰衣草冰淇淋和农场内轻食适合短休息。", "先看花田，再吃东西，避免高温下排队消耗。"],
  "spot-furano-norokko": ["观光列车当天不要把午饭卡在换乘间隙。", "有指定席时按列车时刻反推吃饭和花田停留。"],
  "base-kushiro": ["钏路的关键词是炉端、海鲜、港口傍晚。", "长移动到达后，幣舞桥和炉端比继续跑湿原更合理。"],
  "city-kushiro": ["MOO 岸壁炉端适合傍晚，但仍要确认营业和天气。", "港口边吃饭后直接回酒店，第二天再跑湿原或根室。"],
  "spot-moo-robata": ["适合选当天看着新鲜的海鲜和贝类，不要点太复杂。", "风雨天确认是否开放和座位安排。"],
  "city-akkeshi": ["厚岸最清楚的吃法是牡蛎；Conchiglie / 道之站方向适合和海湾同日。", "先定回程花咲线，再决定午饭时长。"],
  "spot-akkeshi-oysters": ["牡蛎饭、牡蛎拉面、烧牡蛎都可作为目标，但按季节和营业为准。", "不要为了吃饭错过回钏路的车。"],
  "city-nemuro": ["根室吃饭以回转寿司、炉端、花咲蟹/秋刀鱼方向为主。", "纳沙布岬优先于餐厅，餐厅只作为体力允许时的补充。"],
  "spot-nemuro-hanamaru": ["花丸本店适合作为根室市区吃饭方向，但排队和营业要当天查。", "如果回程紧，宁可买轻食也别冒末班风险。"],
  "base-hakodate": ["函馆用海鲜早饭、红砖仓库和市电慢走恢复，不要继续长移动。", "天气好再上函馆山，天气差把预算留给吃饭。"],
  "city-hakodate": ["朝市适合早饭，金森仓库适合下午，汤之川/五棱郭看体力决定。", "市电能减少腿部疲劳。"],
  "spot-hakodate-market": ["海鲜早饭适合跨海前半天；先放行李再去吃。", "价格和体验差异大，出发前看近期评价。"],
  "city-hachinohe-hakodate": ["八户如果要加，优先市场/港口吃饭或种差海岸二选一。", "八食中心适合午饭，馆鼻朝市适合住一晚且早起。"],
  "spot-hasshoku": ["市场适合用午饭解决八户生活感。", "如果当天还要长距离新干线，不要逛太久。"],
  "spot-tatehana": ["早市更吃日期和时间，不能按普通景点处理。", "适合八户过夜，不适合跨海当天硬塞。"],
  "base-sendai": ["仙台第一晚：牛舌或 zunda，别再跑远。", "松岛日可以把海鲜午饭放在海湾附近。"],
  "city-sendai": ["牛舌通、站区甜品、国分町分别对应低/中/高体力夜晚。", "跨海抵达晚就只吃站区。"],
  "spot-gyutan": ["站内牛舌街最省交通，但排队要看当日。", "不必为名店排到影响睡眠。"],
  "spot-sendai-zunda": ["zunda 适合做轻甜品收尾。", "在站区解决，别把甜品变成额外景点。"],
  "city-matsushima": ["松岛吃饭看牡蛎、穴子、鱼市场，但牡蛎季节性强。", "海湾散步和午饭比赶多个寺庙更舒服。"],
  "spot-matsushima-fishmarket": ["夏天不要只为牡蛎期待而去；海鲜和穴子也可作为目标。", "鱼市场、码头、瑞严寺适合步行组合。"],
  "base-tokyo": ["东京收尾用短区域吃饭，不再跨远郊。", "涩谷吃人流，银座吃室内和咖啡，台场吃海湾晚饭。"],
  "city-ginza": ["银座适合咖啡、书店、纸品和百货，不必只逛奢侈品。", "雨天优先银座，强风雨删台场。"],
  "spot-ginza-itoya": ["纸品/书店/咖啡适合两个人慢慢看。", "买东西前先确认行李空间。"],
  "city-odaiba": ["台场适合傍晚海边晚饭，也可以用商场/Miraikan 做雨天替代。", "强风时不要把海边作为唯一目标。"],
  "spot-odaiba-gundam-miraikan": ["高达、商场、Miraikan 可作为一组雨天替代。", "当天查开放和活动，不要把台场撑成整天。"]
};

const reviewQueries = {
  "base-sapporo": "札幌 美食 旅行 攻略",
  "spot-sapporo-food": "札幌 二条市场 拉面 横丁",
  "city-otaru": "小樽 运河 堺町通 LeTAO",
  "city-yoichi": "余市 Nikka 蒸馏所 参观",
  "city-kamui": "神威岬 积丹 交通 天气",
  "city-asahikawa": "旭川 拉面 站前",
  "city-biei": "美瑛 拼布之路 青池 交通",
  "city-furano": "富良野 富田农场 薰衣草",
  "spot-furano-norokko": "富良野 美瑛 Norokko 观光列车",
  "city-kushiro": "钏路 炉端 幣舞桥",
  "spot-kushiro-norokko": "钏路湿原 Norokko",
  "city-akkeshi": "厚岸 牡蛎 Conchiglie",
  "city-nemuro": "根室 纳沙布岬 花丸 本店",
  "city-hakodate": "函馆 朝市 函馆山 元町",
  "city-seikan": "函馆 新函馆北斗 新青森 换乘",
  "city-hachinohe-hakodate": "八户 种差海岸 八食中心",
  "city-sendai": "仙台 牛舌 zunda 国分町",
  "city-matsushima": "松岛 牡蛎 鱼市场 瑞严寺",
  "city-shibuya": "涩谷 旅行 餐厅 咖啡",
  "city-ginza": "银座 Itoya Ginza Six 茑屋",
  "city-odaiba": "台场 彩虹桥 高达 Miraikan"
};

function getFoodTips(item) {
  return foodTips[item.id] || [
    "先以当天住宿、天气和回程交通决定吃饭区域。",
    "具体店名用下方评测索引二次确认，避免只按旧攻略排队。"
  ];
}

function getReviewQuery(item) {
  return reviewQueries[item.id] || `${item.title} ${item.meta || ""}`;
}

function renderReviewLinks(item) {
  const query = getReviewQuery(item);
  const links = [
    ["小红书", `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(query)}`],
    ["Google Maps", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query} 日本`)}`],
    ["Tabelog/网页", `https://www.google.com/search?q=${encodeURIComponent(`${query} 食べログ OR tabelog`)}`],
    ["近期游记", `https://www.google.com/search?q=${encodeURIComponent(`${query} 2026 旅行 攻略`)}`]
  ];

  return `
    <section>
      <h3>评测索引</h3>
      <div class="review-links">
        ${links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")}
      </div>
    </section>
  `;
}

const outlineTree = document.querySelector("#outlineTree");
const transferList = document.querySelector("#transferList");
const optimizationList = document.querySelector("#optimizationList");
const modal = document.querySelector("#detailModal");
const modalSheet = modal.querySelector(".modal-sheet");
const modalImage = document.querySelector("#modalImage");
const modalKind = document.querySelector("#modalKind");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");
const modalFacts = document.querySelector("#modalFacts");
const modalTags = document.querySelector("#modalTags");
const modalSections = document.querySelector("#modalSections");

const expandedIds = new Set();
let lastFocusedElement = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function flatten(items) {
  return items.flatMap((item) => [item, ...(item.children ? flatten(item.children) : [])]);
}

const itemMap = new Map(flatten(outline).map((item) => [item.id, item]));

function renderTags(tags = []) {
  return tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
}

function unique(values = []) {
  return [...new Set(values.filter(Boolean))];
}

function renderSources(sources = [], title = "依据") {
  const keys = unique(sources);
  if (!keys.length) return "";
  const links = keys
    .map((key) => sourceLinks[key])
    .filter(Boolean)
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>`)
    .join("");

  return `
    <section class="source-links">
      <h3>${escapeHtml(title)}</h3>
      <ul>${links}</ul>
    </section>
  `;
}

function renderFacts(guideData) {
  return guideData.facts
    .slice(0, 4)
    .map(([label, value]) => `<div class="modal-fact"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`)
    .join("");
}

function renderDetailSections(item) {
  const guideData = getGuide(item);
  const guideSections = [
    { title: "怎么玩", items: guideData.play },
    { title: "时间预算", items: guideData.time },
    { title: "交通要点", items: guideData.route },
    { title: "最佳条件", items: guideData.best },
    { title: "店铺 / 餐厅方向", items: getFoodTips(item) },
    { title: "别踩坑", items: guideData.avoid }
  ];
  const allSections = [...guideSections, ...item.sections];
  const body = allSections
    .map(
      (section) => `
        <section>
          <h3>${escapeHtml(section.title)}</h3>
          <ul>
            ${section.items.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
        </section>
      `
    )
    .join("");

  return body + renderReviewLinks(item) + renderSources([...(item.sources || []), ...(guideData.sources || [])]);
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function renderTransfers() {
  transferList.innerHTML = coreTransfers
    .map(
      (transfer) => `
        <details class="transfer-card${transfer.caution ? " is-caution" : ""}">
          <summary class="transfer-summary">
            <span class="transfer-icon" aria-hidden="true">${icon(transfer.icon || "route")}</span>
            <div class="transfer-route">
              <strong>${escapeHtml(transfer.from)} -> ${escapeHtml(transfer.to)}</strong>
              <small>${escapeHtml(transfer.status)} / ${escapeHtml(transfer.time)}</small>
            </div>
            <span class="transfer-disclosure" aria-hidden="true">${icon("plus")}</span>
          </summary>
          <div class="transfer-main">
            <p class="transfer-verdict">${escapeHtml(transfer.verdict)}</p>
            <ol class="transfer-steps">
              ${transfer.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
            </ol>
            <p class="transfer-note">${escapeHtml(transfer.note)}</p>
            ${renderSources(transfer.sources, "交通依据")}
          </div>
        </details>
      `
    )
    .join("");
}

function renderOptimizations() {
  optimizationList.innerHTML = routeOptimizations
    .map(
      (item) => `
        <details class="optimization-card${item.caution ? " is-caution" : ""}">
          <summary class="optimization-summary">
            <span class="transfer-icon" aria-hidden="true">${icon(item.icon || "check")}</span>
            <div class="transfer-route">
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.meta)}</small>
            </div>
            <span class="transfer-disclosure" aria-hidden="true">${icon("plus")}</span>
          </summary>
          <div class="optimization-main">
            <p class="optimization-verdict">${escapeHtml(item.verdict)}</p>
            <ol class="optimization-steps">
              ${item.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
            </ol>
            <p class="optimization-note">${escapeHtml(item.note)}</p>
            ${renderSources(item.sources, "判断依据")}
          </div>
        </details>
      `
    )
    .join("");
}

function renderNode(item, level = 1) {
  const hasChildren = Boolean(item.children?.length);
  const expanded = expandedIds.has(item.id);
  const childMarkup = hasChildren
    ? `<div class="children" ${expanded ? "" : "hidden"}>${item.children.map((child) => renderNode(child, level + 1)).join("")}</div>`
    : "";

  return `
    <article class="tree-item level-${level} type-${item.type}${item.hub ? " is-hub" : ""}">
      <div class="tree-row">
        ${
          hasChildren
            ? `<button class="toggle-button" type="button" data-toggle-id="${item.id}" aria-expanded="${expanded}" aria-label="${expanded ? "收起" : "展开"}${escapeHtml(item.title)}">${icon(expanded ? "minus" : "plus")}</button>`
            : `<span class="toggle-placeholder" aria-hidden="true"></span>`
        }
        <button class="name-button" type="button" data-detail-id="${item.id}">
          <span class="row-label">${levelLabels[level]}</span>
          <strong>${item.hub ? '<span class="hub-symbol" aria-label="枢纽城市">◎</span>' : ""}${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.meta)}</small>
        </button>
      </div>
      ${childMarkup}
    </article>
  `;
}

function renderOutline() {
  outlineTree.innerHTML = outline.map((item) => renderNode(item, 1)).join("");
}

function openDetail(id) {
  const item = itemMap.get(id);
  if (!item) return;

  lastFocusedElement = document.activeElement;
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalKind.textContent = item.hub ? `${kindLabels[item.type]} / 枢纽` : kindLabels[item.type];
  modalTitle.textContent = item.title;
  modalSummary.textContent = item.summary;
  modalFacts.innerHTML = renderFacts(getGuide(item));
  modalTags.innerHTML = renderTags(item.tags);
  modalSections.innerHTML = renderDetailSections(item);

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modalSheet.focus());
}

function closeDetail() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-modal]");
  if (closeButton) {
    closeDetail();
    return;
  }

  const toggleButton = event.target.closest("[data-toggle-id]");
  if (toggleButton) {
    const id = toggleButton.dataset.toggleId;
    if (expandedIds.has(id)) {
      expandedIds.delete(id);
    } else {
      expandedIds.add(id);
    }
    renderOutline();
    return;
  }

  const detailButton = event.target.closest("[data-detail-id]");
  if (detailButton) {
    openDetail(detailButton.dataset.detailId);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeDetail();
  }
});

renderTransfers();
renderOptimizations();
renderOutline();
