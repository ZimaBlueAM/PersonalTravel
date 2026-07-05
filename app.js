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
  }
};

const checkedAt = "2026-07-05 20:46 JST";
const jrHokkaidoLiveNote = `本次核验 ${checkedAt}：JR 北海道运行信息 JSON 对特急、快速 Airport、函馆/千岁线、函馆 Liner、函馆线、石胜线、根室线、花咲线、富良野线、北海道新干线均显示无停驶/30分钟以上延误信息。出发当天仍以实时页面为准。`;
const jrEastLiveNote = "本次核验 2026-07-05 20:44 JST：JR East 页面显示东北新干线 Normal operation；同页服务暂停栏出现个别 Hayabusa 39 在新青森-新函馆北斗区间停运信息，所以跨海当天必须按具体车次再查。";

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
          })
        ]
      })
    ]
  })
];

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

const outlineTree = document.querySelector("#outlineTree");
const modal = document.querySelector("#detailModal");
const modalSheet = modal.querySelector(".modal-sheet");
const modalImage = document.querySelector("#modalImage");
const modalKind = document.querySelector("#modalKind");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");
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

function renderSources(sources = []) {
  if (!sources.length) return "";
  const links = sources
    .map((key) => sourceLinks[key])
    .filter(Boolean)
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>`)
    .join("");

  return `
    <section class="source-links">
      <h3>依据</h3>
      <ul>${links}</ul>
    </section>
  `;
}

function renderDetailSections(item) {
  const body = item.sections
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

  return body + renderSources(item.sources);
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
            ? `<button class="toggle-button" type="button" data-toggle-id="${item.id}" aria-expanded="${expanded}" aria-label="${expanded ? "收起" : "展开"}${escapeHtml(item.title)}">${expanded ? "−" : "+"}</button>`
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

renderOutline();
