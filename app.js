const img = (name) => `assets/places/${name}.jpg`;

const sourceLinks = {
  shinkansen: {
    label: "JR Hokkaido: Hokkaido Shinkansen / Hakodate Liner",
    url: "https://www.jrhokkaido.co.jp/global/english/shinkansen/index.html"
  },
  limited: {
    label: "JR Hokkaido: Limited express trains, all seats reserved",
    url: "https://www.jrhokkaido.co.jp/global/english/ticket/usage/usage03.html"
  },
  regular: {
    label: "JR Hokkaido: ticket and route table",
    url: "https://www.jrhokkaido.co.jp/global/english/ticket/regular/index.html"
  },
  shinAomori: {
    label: "JR East: Shin-Aomori timetable",
    url: "https://timetables.jreast.co.jp/en/timetable/list0854.html"
  },
  furanoClosed: {
    label: "JR Hokkaido: Furano-Shintoku bus conversion notice",
    url: "https://www.jrhokkaido.co.jp/CM/Info/press/pdf/20240222_KO_Nemuro_Furano_Shintoku.pdf"
  }
};

const detail = (why, traffic, pace, extraTitle = "取舍", extra = []) => [
  { title: "为什么看", items: why },
  { title: "交通 / 可行性", items: traffic },
  { title: extraTitle, items: pace },
  ...(extra.length ? [{ title: "备注", items: extra }] : [])
];

const base = (props) => ({ kind: "base", status: "base", ...props });
const city = (props) => ({ kind: "city", status: props.status ?? "easy", ...props });
const spot = (props) => ({ kind: "spot", status: props.status ?? "spot", ...props });
const move = (props) => ({ kind: "move", status: props.status ?? "move", ...props });
const audit = (props) => ({ kind: "audit", status: props.status ?? "audit", ...props });

const auditItems = [
  audit({
    id: "audit-seikan",
    title: "函馆到本州：可行，但要换乘",
    meta: "函馆 → 新函馆北斗 → 青函隧道 → 新青森",
    image: img("seikan"),
    tags: ["重点审计", "跨海铁路"],
    summary: "真正的跨海铁路不是从函馆站直接发车。先坐 Hakodate Liner 到新函馆北斗，再换北海道新干线穿过青函隧道到新青森，之后接东北新干线南下。",
    sections: detail(
      ["这段是全路线最有结构感的一跳：北海道岛屿结束，本州铁路系统开始。", "它值得保留，但必须按换乘链条来排，不能把函馆站和新青森站写成一段普通直达。"],
      ["JR Hokkaido 写明 Hakodate Liner 连接函馆与新函馆北斗，时间约 15-22 分钟。", "新函馆北斗到新青森走北海道新干线，经青函隧道，常见用时约 1 小时；到仙台则继续接东北新干线。"],
      ["这天可以作为移动日。到仙台后只吃饭、入住、散步，不再加八户或松岛。"]
    ),
    sources: ["shinkansen", "shinAomori", "regular"]
  }),
  audit({
    id: "audit-furano-shintoku",
    title: "富良野到新得：不能再当 JR 直通",
    meta: "2024-04-01 起铁路废止，改看巴士或绕行",
    image: img("furano"),
    tags: ["路线修正", "不要误排"],
    summary: "旧表里把旭川/富良野到带广写成轻松 JR 支线，会误导。富良野到新得区间已废止，富良野继续往带广方向不能按连续 JR 来排。",
    sections: detail(
      ["这个点决定了中北海道到十胜的逻辑。带广仍然值得去，但它不是从富良野一路坐 JR 顺滑过去。"],
      ["JR Hokkaido 公告说明根室线富良野-新得间 2024 年 4 月 1 日起铁路事业废止，并改为新的巴士交通体系。", "如果从旭川/富良野去带广，要查巴士或选择经札幌、南千岁、新得绕行；不要把它压成轻松半日。"],
      ["如果你们追求不累，带广更适合放到钏路侧或独立移动日，不要塞进富良野花田同一天。"]
    ),
    sources: ["furanoClosed"]
  }),
  audit({
    id: "audit-long-relocation",
    title: "两段很长：旭川→钏路、钏路→函馆",
    meta: "可走，但不是观光日",
    image: img("kushiro"),
    tags: ["疲劳风险", "移动日"],
    summary: "六基地顺序成立，但北海道内部尺度很大。旭川到钏路、钏路到函馆都要按大移动日处理，尤其钏路到函馆基本是穿回札幌再南下。",
    sections: detail(
      ["这个判断让路线从“很多点”变成“可以执行”。你们不是要证明能坐到，而是要坐完还想继续旅行。"],
      ["旭川到钏路没有漂亮的短直达 JR；钏路到函馆更长，通常要经札幌/南千岁再去函馆。", "JR Hokkaido 的主要特急系统是札幌-旭川、札幌-带广-钏路、札幌-函馆这几条干线。"],
      ["这两天不要加神威岬、根室、八户这类远支线。必要时宁愿拆一晚札幌或考虑飞行。"]
    ),
    sources: ["limited", "regular"]
  })
];

const journey = [
  base({
    id: "base-sapporo",
    code: "01",
    title: "札幌基地",
    meta: "西北海道核心 · 前 4 晚",
    image: img("sapporo"),
    color: "#0b5cab",
    tags: ["基地", "已定住宿"],
    summary: "落地后的主基地。它负责恢复体力、城市补给，并向小樽、余市、神威岬放射。",
    sections: detail(
      ["札幌是西北海道最稳的中心，交通、餐饮和住宿弹性都强。", "前 4 晚住在这里是对的：先停住，再选择天气和体力适合的支线。"],
      ["新千岁机场到札幌可以用 JR 快速列车；札幌到旭川、函馆、钏路方向都有 JR Hokkaido 特急系统。"],
      ["落地当天只做札幌市内。远支线按天气选，不要连续两天都选重体验。"]
    ),
    sources: ["limited"],
    children: [
      city({
        id: "city-sapporo",
        code: "站",
        title: "札幌市",
        meta: "本基地",
        image: img("sapporo"),
        tags: ["城市", "低体力"],
        summary: "到达、下雨、疲劳时最适合留在札幌。它不负责震撼，负责让整个行程不崩。",
        sections: detail(
          ["大城市的价值是可控：吃饭、买东西、洗衣、调整状态都容易。", "在长线旅行里，札幌是你们的缓冲垫。"],
          ["市内移动以地铁、步行、短出租为主；不用为了景点坐很远。"],
          ["把札幌排在重支线前后，能显著降低疲劳。"]
        ),
        children: [
          spot({
            id: "spot-odori",
            code: "点",
            title: "大通公园与电视塔",
            meta: "方向感 / 城市画面",
            image: img("sapporo"),
            tags: ["散步", "到达日"],
            summary: "最直观的札幌城市画面，适合刚到时建立方向感。",
            sections: detail(
              ["电视塔和大通公园能快速让你们理解札幌的城市轴线。", "它不需要完整半天，轻轻走一下就够。"],
              ["从札幌市中心步行或地铁都方便。"],
              ["适合落地后、远支线回来后，作为不用动脑的轻行程。"]
            )
          }),
          spot({
            id: "spot-susukino",
            code: "点",
            title: "薄野与狸小路",
            meta: "晚饭 / 夜间补给",
            image: img("sapporo"),
            tags: ["夜晚", "吃饭"],
            summary: "夜晚吃饭和城市密度集中区，适合把一天轻松收掉。",
            sections: detail(
              ["薄野负责夜生活，狸小路负责遮雨和买东西。", "对于两个人旅行，这里比硬找景点更实用。"],
              ["市中心短距离移动，雨天也可行。"],
              ["远支线回来的晚上适合来这里吃饭，不再加复杂路线。"]
            )
          })
        ]
      }),
      city({
        id: "city-otaru",
        code: "站",
        title: "小樽",
        meta: "JR 约 0.5h",
        image: img("otaru"),
        tags: ["轻松半日", "夜景"],
        summary: "半日就能完成的港口城市。运河、仓库、玻璃街区都适合慢走。",
        sections: detail(
          ["小樽是札幌最舒服的低风险支线，交通短，画面清楚。", "它的美感是港口工业衰退后的浪漫，不需要高强度打卡。"],
          ["札幌出发 JR 约半小时级别，适合作为上午或傍晚半日线。"],
          ["如果当天体力一般，优先小樽，不要硬上神威岬。"]
        ),
        children: [
          spot({
            id: "spot-otaru-canal",
            code: "点",
            title: "小樽运河",
            meta: "港口夜景",
            image: img("otaru"),
            tags: ["核心画面"],
            summary: "仓库、灯光、水面和缓慢人流构成小樽的主画面。",
            sections: detail(
              ["傍晚到夜晚最有氛围，白天则更清楚地看到旧仓库结构。"],
              ["从小樽站步行可到，交通压力低。"],
              ["如果只去一个小樽点，就是这里。"]
            )
          }),
          spot({
            id: "spot-sakaimachi",
            code: "点",
            title: "仓库群与堺町通",
            meta: "玻璃 / 甜品 / 慢逛",
            image: img("otaru"),
            tags: ["轻松"],
            summary: "玻璃、甜品、旧建筑串成一条慢逛路线，适合不赶时间。",
            sections: detail(
              ["这里适合边走边停，比机械打卡更舒服。"],
              ["和小樽运河在同一个半日内自然串联。"],
              ["不要排太满，留时间吃东西和拍照。"]
            )
          })
        ]
      }),
      city({
        id: "city-yoichi",
        code: "站",
        title: "余市",
        meta: "JR 约 1.5h",
        image: img("yoichi"),
        tags: ["工业美学", "慢逛"],
        summary: "工业和自然混在一起的小城，重点是 Nikka 威士忌余市蒸馏所。",
        sections: detail(
          ["余市比小樽更安静，红砖厂房、蒸馏器和低矮街区很有质感。"],
          ["从札幌过去比小樽更远，适合体力稳定的平衡日。"],
          ["如果要参观内部，提前查开放和预约；不想费心就只做小樽。"]
        ),
        children: [
          spot({
            id: "spot-nikka",
            code: "点",
            title: "Nikka 余市蒸馏所",
            meta: "红砖 / 蒸馏器",
            image: img("yoichi"),
            tags: ["重点"],
            summary: "工业系统和历史感很强，适合看建筑、工艺和品牌故事。",
            sections: detail(
              ["这里不是单纯买酒，而是看一个工业空间怎么和小城共存。"],
              ["从余市站到蒸馏所距离友好。开放、预约和试饮规则以当天官方信息为准。"],
              ["适合和小樽组成一条西海岸慢线。"]
            )
          }),
          spot({
            id: "spot-yoichi-walk",
            code: "点",
            title: "余市川与街区散步",
            meta: "安静备选",
            image: img("yoichi"),
            tags: ["低密度"],
            summary: "比小樽更松的城市质地，适合把节奏降下来。",
            sections: detail(
              ["余市的价值在安静，不在景点密度。"],
              ["和蒸馏所同日即可，不必另拆一天。"],
              ["如果天气差或预约失败，就把它当作散步和吃饭的备选。"]
            )
          })
        ]
      }),
      city({
        id: "city-kamui",
        code: "站",
        title: "神威岬",
        meta: "JR + 巴士约 2.5-3h",
        image: img("cape-kamui"),
        tags: ["重体验", "看天气"],
        summary: "札幌基地最重的海岸支线。风景强，但交通和体力消耗也最大。",
        sections: detail(
          ["神威岬的回报是日本海断崖、海色和尽头感。", "它和小樽完全不是一个强度等级。"],
          ["需要 JR 加巴士，班次和季节影响明显；风雨天体验会大幅下降。"],
          ["只在晴天、体力好、愿意花一天时选择。不要和余市、小樽完整线硬塞满。"]
        ),
        children: [
          spot({
            id: "spot-kamui-path",
            code: "点",
            title: "神威岬步道",
            meta: "断崖步行",
            image: img("cape-kamui"),
            tags: ["核心"],
            summary: "沿着狭长海岬走到日本海尽头，视觉回报很高。",
            sections: detail(
              ["这段步道的关键是身体参与：风、坡度、海色都直接影响体验。"],
              ["强风、雨、关闭信息都要提前查。"],
              ["当天只做这一件大事最稳。"]
            )
          }),
          spot({
            id: "spot-shakotan-blue",
            code: "点",
            title: "积丹蓝海岸线",
            meta: "海色 / 灯塔",
            image: img("cape-kamui"),
            tags: ["晴天"],
            summary: "断崖、灯塔和海色构成这条支线的主视觉。",
            sections: detail(
              ["晴天海色会非常强，阴雨天则价值下降明显。"],
              ["交通不是纯 JR，要把等车时间算进去。"],
              ["如果天气一般，换小樽或札幌市内更聪明。"]
            )
          })
        ]
      })
    ]
  }),
  move({
    id: "move-sapporo-asahikawa",
    code: "换",
    title: "基地移动：札幌 → 旭川",
    meta: "特急 Lilac / Kamui 约 1h25",
    image: img("asahikawa"),
    tags: ["可行", "全席指定"],
    summary: "这是清晰、短、稳定的一段。作为换基地日很舒服。",
    sections: detail(
      ["这段移动把路线从西北海道切到中北海道。", "它不长，所以到达后还能吃饭、补给、散步。"],
      ["JR Hokkaido 特急 Lilac / Kamui 连接札幌与旭川；2026 年的 JR Hokkaido 英文页面说明北海道特急为全席指定。"],
      ["当天不建议再冲富良野完整花田线。把好天气留给第二天。"]
    ),
    sources: ["limited"]
  }),
  base({
    id: "base-asahikawa",
    code: "02",
    title: "旭川基地",
    meta: "中北海道核心 · 建议 2 晚",
    image: img("asahikawa"),
    color: "#1f7a4d",
    tags: ["基地", "花田线"],
    summary: "中北海道的支点。美瑛、富良野从这里看最顺，但带广不能再当作简单 JR 直通。",
    sections: detail(
      ["旭川的价值不是城市本身多惊艳，而是让美瑛、富良野变得不累。"],
      ["札幌-旭川用特急系统；旭川-美瑛-富良野是本基地的自然支线。"],
      ["把旭川当作花田和丘陵的停靠点，不要把它扩张成所有中东北海道的万能中心。"]
    ),
    sources: ["limited", "furanoClosed"],
    children: [
      city({
        id: "city-asahikawa",
        code: "站",
        title: "旭川市",
        meta: "本基地",
        image: img("asahikawa"),
        tags: ["补给", "休息"],
        summary: "中北海道住宿点。它的职责是让美瑛富良野不变成从札幌硬冲。",
        sections: detail(
          ["旭川是路线上的体力节点，不必把它当景点堆满。"],
          ["车站周边吃饭、购物、住宿都更省心。"],
          ["换基地日留给市区，第二天再跑花田。"]
        ),
        children: [
          spot({
            id: "spot-asahikawa-station",
            code: "点",
            title: "旭川站周边",
            meta: "到达 / 吃饭",
            image: img("asahikawa"),
            tags: ["轻松"],
            summary: "适合到达后吃饭、洗衣、买补给，把体力留给第二天。",
            sections: detail(
              ["站周边不是为了惊艳，是为了把后面的自然线跑顺。"],
              ["换乘、住宿和吃饭集中，移动成本低。"],
              ["不要在抵达当晚额外塞远点。"]
            )
          }),
          spot({
            id: "spot-asahikawa-walk",
            code: "点",
            title: "旭川城市散步",
            meta: "缓冲",
            image: img("asahikawa"),
            tags: ["恢复"],
            summary: "比札幌更松，适合做中北海道路线的缓冲。",
            sections: detail(
              ["它让节奏降下来，防止花田日之前已经累掉。"],
              ["步行或短距离交通即可。"],
              ["把它当恢复，不当任务。"]
            )
          })
        ]
      }),
      city({
        id: "city-biei",
        code: "站",
        title: "美瑛",
        meta: "JR 约 0.5h",
        image: img("biei"),
        tags: ["丘陵", "摄影"],
        summary: "丘陵农田、拼布色块和缓坡道路，是中北海道最清楚的地貌画面。",
        sections: detail(
          ["美瑛看的是结构：路、坡、田块、树列和远山。", "它比单个景点更适合慢慢移动。"],
          ["从旭川坐 JR 到美瑛很短，但美瑛内部移动要提前决定：公交、包车、租车或骑行各有成本。"],
          ["晴天优先。天气差时只保留短线，不要硬扩张到青池和富良野全套。"]
        ),
        children: [
          spot({
            id: "spot-patchwork",
            code: "点",
            title: "拼布之路",
            meta: "丘陵农田",
            image: img("biei"),
            tags: ["核心"],
            summary: "农田被道路和丘陵切成色块，适合慢慢看结构。",
            sections: detail(
              ["它是美瑛最有识别度的空间结构。"],
              ["点位之间距离不短，公共交通需要查班次。"],
              ["天气清楚时去，画面会更完整。"]
            )
          }),
          spot({
            id: "spot-blue-pond",
            code: "点",
            title: "青池方向",
            meta: "进阶点",
            image: img("biei"),
            tags: ["需查班次"],
            summary: "从农田转到更奇异的自然色彩，可以作为美瑛进阶点。",
            sections: detail(
              ["它和拼布之路不是同一种美：一个是农业结构，一个是颜色奇观。"],
              ["公共交通班次有限，不适合临时硬加。"],
              ["如果只想轻松，保留拼布之路即可。"]
            )
          })
        ]
      }),
      city({
        id: "city-furano",
        code: "站",
        title: "富良野",
        meta: "JR 约 1h",
        image: img("furano"),
        tags: ["7月", "花田"],
        summary: "7月主视觉。花田、缓坡和远山构成最典型的北海道夏天。",
        sections: detail(
          ["富良野是这条路线最直接的季节性画面。", "薰衣草、花田坡面和远山会给你们一个很清楚的北海道夏天记忆。"],
          ["从旭川到富良野可走 JR 富良野线；但富良野继续南下新得方向的 JR 不应再按直通来排。"],
          ["可以和美瑛同日，但必须留缓冲。不要同日再接带广。"]
        ),
        sources: ["furanoClosed"],
        children: [
          spot({
            id: "spot-farm-tomita",
            code: "点",
            title: "富田农场",
            meta: "薰衣草主视觉",
            image: img("furano"),
            tags: ["核心"],
            summary: "薰衣草花田代表点，颜色强，识别度高。",
            sections: detail(
              ["它是富良野最稳的主画面，哪怕人多也值得。"],
              ["旺季需要更早出发，避免把它排到太晚。"],
              ["如果天气好，优先级很高。"]
            )
          }),
          spot({
            id: "spot-nakafurano",
            code: "点",
            title: "中富良野花田",
            meta: "坡面 / 远山",
            image: img("furano"),
            tags: ["延展"],
            summary: "适合继续看花田坡面和远山关系，不一定要打满所有花田。",
            sections: detail(
              ["这里让富良野从单一花田变成地形体验。"],
              ["和富田农场相近，但交通细节仍要查当天班次。"],
              ["体力一般时二选一，不要用花田复制花田。"]
            )
          })
        ]
      }),
      city({
        id: "city-obihiro-warning",
        code: "站",
        title: "带广 / 十胜",
        meta: "非旭川侧 JR 直通",
        image: img("obihiro"),
        tags: ["路线修正", "谨慎"],
        status: "warn",
        summary: "十胜平原值得看，但它不应该再被写成旭川/富良野轻松 JR 支线。",
        sections: detail(
          ["带广的价值是十胜平原：大尺度农业、地平线、车窗里的开阔感。"],
          ["关键问题是交通：富良野-新得 JR 已废止，旭川/富良野去带广要查巴士或绕行。"],
          ["如果要不累，把带广放到钏路侧或做独立移动日。不要和富良野花田同日。"]
        ),
        sources: ["furanoClosed", "limited"],
        children: [
          spot({
            id: "spot-tokachi-plain",
            code: "点",
            title: "十胜平原",
            meta: "农业尺度",
            image: img("obihiro"),
            tags: ["开阔感"],
            summary: "北海道少见的大平原视野，和美瑛的丘陵完全不同。",
            sections: detail(
              ["它看的是尺度，不是一个孤立景点。"],
              ["建议作为带广停留或钏路侧支线的一部分。"],
              ["为了它专门从富良野绕过去，体力成本要认真算。"]
            )
          }),
          spot({
            id: "spot-obihiro-food",
            code: "点",
            title: "带广本地吃饭",
            meta: "豚丼 / 休息",
            image: img("obihiro"),
            tags: ["生活感"],
            summary: "用豚丼和车站周边补足一个生活化停留。",
            sections: detail(
              ["带广可以用吃饭完成，不需要硬找很多景点。"],
              ["适合移动日中段或抵达后。"],
              ["如果当天已经长途移动，吃饭就是行程。"]
            )
          })
        ]
      })
    ]
  }),
  move({
    id: "move-asahikawa-kushiro",
    code: "换",
    title: "基地移动：旭川 → 钏路",
    meta: "长移动日 · 多半经札幌",
    image: img("kushiro"),
    tags: ["很长", "不要加支线"],
    status: "heavy",
    summary: "这不是一条轻松斜穿北海道的 JR 线。按大移动日处理，才不会把后半程拖垮。",
    sections: detail(
      ["从中北海道切到东北海道，地图上看像一条斜线，但铁路并不总是按地图直觉走。"],
      ["富良野-新得已废止，不能按旭川-富良野-带广-钏路的连续 JR 想象。保守做法是经札幌/南千岁接特急 Ozora 到钏路。"],
      ["这天不要安排根室、厚岸或湿原。抵达钏路后只吃饭、看桥、睡觉。"]
    ),
    sources: ["furanoClosed", "limited", "regular"]
  }),
  base({
    id: "base-kushiro",
    code: "03",
    title: "钏路基地",
    meta: "东北海道核心 · 建议 2 晚",
    image: img("kushiro"),
    color: "#9a6500",
    tags: ["基地", "东海岸"],
    summary: "东北海道的低密度感从这里开始。湿原、海雾、最东端都属于这一组。",
    sections: detail(
      ["钏路是北海道东部的情绪转换点：更空、更冷、更慢。"],
      ["札幌-带广-钏路由特急 Ozora 体系承担；钏路向根室、厚岸继续走地方线。"],
      ["这里必须住下来，不能从别的基地当天来回硬刷。"]
    ),
    sources: ["limited"],
    children: [
      city({
        id: "city-kushiro",
        code: "站",
        title: "钏路市",
        meta: "本基地",
        image: img("kushiro"),
        tags: ["湿原入口", "恢复"],
        summary: "东北海道住宿中心。城市不大，但适合承接湿原和海岸线。",
        sections: detail(
          ["钏路市的价值是承接：湿原、根室、厚岸都从这里变得可执行。"],
          ["市内到湿原展望点、港口和餐饮区都要按当天交通安排。"],
          ["移动日到达后只保留市内，别再出远门。"]
        ),
        children: [
          spot({
            id: "spot-kushiro-marsh",
            code: "点",
            title: "钏路湿原",
            meta: "曲流 / 低平湿地",
            image: img("kushiro"),
            tags: ["核心"],
            summary: "低平湿地和曲流河道，是钏路最重要的自然结构。",
            sections: detail(
              ["它不是普通公园，而是东北海道尺度感的代表。"],
              ["展望点交通要提前查；天气一般也能看，但晴天层次更好。"],
              ["不要和根室同日硬塞。"]
            )
          }),
          spot({
            id: "spot-nusamai",
            code: "点",
            title: "幣舞桥与炉端",
            meta: "傍晚 / 晚饭",
            image: img("kushiro"),
            tags: ["轻松"],
            summary: "傍晚看桥和港口，再吃一顿炉端，适合压低强度。",
            sections: detail(
              ["它是钏路市内最舒服的收尾方式。"],
              ["不需要远交通，适合长移动日后的晚上。"],
              ["根室重体验前后都可以放。"]
            )
          })
        ]
      }),
      city({
        id: "city-akkeshi",
        code: "站",
        title: "厚岸",
        meta: "JR 约 1h",
        image: img("akkeshi"),
        tags: ["海雾", "平衡日"],
        summary: "海雾、海湾和牡蛎组成的安静海岸点，比城市景点更冷更慢。",
        sections: detail(
          ["厚岸适合看东北海道的低能见度海岸：雾、湾、渔业和安静。"],
          ["从钏路坐 JR 可达，但具体班次要查。"],
          ["适合不想跑根室那么远，但又想看海的日子。"]
        ),
        children: [
          spot({
            id: "spot-aikappu",
            code: "点",
            title: "爱冠岬",
            meta: "岬角 / 海湾",
            image: img("akkeshi"),
            tags: ["海岸"],
            summary: "可以看海湾、岬角和雾气，氛围比普通海边更安静。",
            sections: detail(
              ["这里看的是边缘感，不是热闹景点。"],
              ["从厚岸站后的末端交通要提前确认。"],
              ["适合半日海岸线，不适合和根室同日。"]
            )
          }),
          spot({
            id: "spot-akkeshi-bay",
            code: "点",
            title: "厚岸湾",
            meta: "渔业 / 海雾",
            image: img("akkeshi"),
            tags: ["生活感"],
            summary: "低能见度海岸和渔业生活感，是东北海道的另一种质地。",
            sections: detail(
              ["厚岸湾比景点更像环境体验。"],
              ["和爱冠岬或车站周边搭配即可。"],
              ["低体力日可以只吃饭、看湾、不追点。"]
            )
          })
        ]
      }),
      city({
        id: "city-nemuro",
        code: "站",
        title: "根室 / 纳沙布岬",
        meta: "JR 约 2.5-3h + 末端交通",
        image: img("cape-nosappu"),
        tags: ["最东端", "重体验"],
        status: "heavy",
        summary: "这条线的价值是地理极限：日本本土最东端的边界感。",
        sections: detail(
          ["根室不是轻松观光，是把铁路坐到东边尽头的体验。", "纳沙布岬的价值在最东端、海风和边界感。"],
          ["JR 到根室后还要接巴士或出租到纳沙布岬；不是 JR 直接到岬角。"],
          ["当天只做这一件大事。天气差就降级到厚岸或钏路市内。"]
        ),
        children: [
          spot({
            id: "spot-nosappu",
            code: "点",
            title: "纳沙布岬",
            meta: "日本最东端",
            image: img("cape-nosappu"),
            tags: ["核心"],
            summary: "最东端灯塔、海风和边界感，是东北海道的终点体验。",
            sections: detail(
              ["这是地理意义很强的目的地，适合你们这条从北到南的路线。"],
              ["末端交通和回程班次必须提前确认。"],
              ["风雨天不要硬冲。"]
            )
          }),
          spot({
            id: "spot-nemuro-line",
            code: "点",
            title: "根室本线尽头感",
            meta: "长车窗",
            image: img("cape-nosappu"),
            tags: ["铁路体验"],
            summary: "长时间 JR 本身就是体验：越坐越空、越坐越东。",
            sections: detail(
              ["这里的旅程价值不只在下车点，也在坐车过程。"],
              ["适合把车窗当旅行的一部分。"],
              ["不喜欢长时间坐车的人要慎选。"]
            )
          })
        ]
      }),
      city({
        id: "city-obihiro-kushiro",
        code: "站",
        title: "带广（钏路侧）",
        meta: "JR 特急约 1.5-2h",
        image: img("obihiro"),
        tags: ["十胜", "可选"],
        summary: "从钏路侧看十胜，比从富良野误判直通更稳。重点是平原和车窗。",
        sections: detail(
          ["带广从钏路侧更像一个合理的西向支线或中途停靠。"],
          ["钏路-带广在札幌-带广-钏路的特急系统上，具体时刻以当天查询为准。"],
          ["如果旭川段已经放弃带广，这里再考虑；如果已经很累，就跳过。"]
        ),
        sources: ["limited"],
        children: [
          spot({
            id: "spot-obihiro-window",
            code: "点",
            title: "农田铁路车窗",
            meta: "直线 / 平原",
            image: img("obihiro"),
            tags: ["车窗"],
            summary: "长直线、农田和低密度空间，是这段路的核心。",
            sections: detail(
              ["不一定要下很多点，坐车本身就能看到北海道尺度。"],
              ["适合作为从钏路西移时的中途体验。"],
              ["别为了它牺牲根室或湿原的恢复日。"]
            )
          }),
          spot({
            id: "spot-obihiro-stay",
            code: "点",
            title: "十胜平原回看",
            meta: "开阔空间",
            image: img("obihiro"),
            tags: ["可选"],
            summary: "把东北海道和中北海道之间的空间补起来。",
            sections: detail(
              ["如果你们喜欢地理尺度，它能解释北海道为什么不能乱排。"],
              ["更适合顺路或独立停留。"],
              ["时间紧就不必强求。"]
            )
          })
        ]
      })
    ]
  }),
  move({
    id: "move-kushiro-hakodate",
    code: "换",
    title: "基地移动：钏路 → 函馆",
    meta: "超长移动日 · 通常经札幌",
    image: img("hakodate"),
    tags: ["最累段", "建议拆分"],
    status: "heavy",
    summary: "这是全路线最需要谨慎的一跳。可走，但不应伪装成轻松 JR 日。",
    sections: detail(
      ["钏路在东，函馆在南，铁路大多要回到札幌/南千岁体系再南下。", "这天的目标是成功抵达，不是观光。"],
      ["可用特急 Ozora 到札幌/南千岁方向，再接特急 Hokuto 去函馆；全程很长且特急全席指定。"],
      ["更舒服的做法是中间拆一晚札幌/南千岁，或如果目标是不累，考虑飞行替代。"]
    ),
    sources: ["limited", "regular"]
  }),
  base({
    id: "base-hakodate",
    code: "04",
    title: "函馆基地",
    meta: "南北海道断裂点 · 建议 1-2 晚",
    image: img("hakodate"),
    color: "#ad2f21",
    tags: ["基地", "跨海前"],
    summary: "北海道到本州的断裂点。夜景、港口、青函隧道都让它和前面完全不同。",
    sections: detail(
      ["函馆不是普通中途城市，它是北海道结束前的停顿。", "港口、山、海峡和新干线换乘都在这里汇合。"],
      ["札幌-函馆由特急 Hokuto 连接；跨到本州要先从函馆到新函馆北斗，再换新干线。"],
      ["从钏路长距离到达后，至少留一个晚上，不要当天继续南下。"]
    ),
    sources: ["limited", "shinkansen"],
    children: [
      city({
        id: "city-hakodate",
        code: "站",
        title: "函馆市",
        meta: "本基地",
        image: img("hakodate"),
        tags: ["夜景", "港口"],
        summary: "港口、坡道、夜景和西式建筑集中在一起，是南北海道最适合停住的城市。",
        sections: detail(
          ["函馆的城市结构非常清楚：两片海之间夹着城市，山上能一眼看明白。"],
          ["市内移动不复杂，但函馆山受天气影响。"],
          ["适合作为长移动后的恢复城市。"]
        ),
        children: [
          spot({
            id: "spot-hakodate-night",
            code: "点",
            title: "函馆山夜景",
            meta: "城市夹海",
            image: img("hakodate"),
            tags: ["核心"],
            summary: "城市夹在海湾之间，夜景结构非常清楚。",
            sections: detail(
              ["这是函馆最强的空间画面。"],
              ["天气不好、雾大或风大就不要硬上山。"],
              ["适合住函馆的第一晚或第二晚。"]
            )
          }),
          spot({
            id: "spot-motomachi",
            code: "点",
            title: "元町与金森仓库",
            meta: "坡道 / 红砖",
            image: img("hakodate"),
            tags: ["散步"],
            summary: "坡道、教堂、红砖仓库构成函馆的港口层次。",
            sections: detail(
              ["这里适合慢走，看函馆作为港口城市的历史质地。"],
              ["和函馆山、港区自然串联。"],
              ["不要赶，函馆的美是停下来才清楚。"]
            )
          })
        ]
      }),
      city({
        id: "city-seikan",
        code: "站",
        title: "新函馆北斗 / 新青森",
        meta: "跨海换乘核心",
        image: img("seikan"),
        tags: ["青函隧道", "重点"],
        summary: "这不是普通中转，而是从北海道切入本州的结构性节点。",
        sections: detail(
          ["这站解释整条路线：岛屿断裂被铁路连接起来。"],
          ["函馆站先坐 Hakodate Liner 到新函馆北斗，再坐北海道新干线到新青森。"],
          ["把它当移动日核心，不要把换乘时间吃掉。"]
        ),
        sources: ["shinkansen", "shinAomori"],
        children: [
          spot({
            id: "spot-seikan-tunnel",
            code: "点",
            title: "青函隧道",
            meta: "海底铁路",
            image: img("seikan"),
            tags: ["跨海"],
            summary: "海底铁路让北海道和本州之间的断裂变成可感知的穿越。",
            sections: detail(
              ["真正值得记住的是“从岛到本州”的感觉，而不是车窗风景。"],
              ["新干线经青函隧道运行，坐在车里会很平静，但地理意义很大。"],
              ["上车前把换乘和座位确认好。"]
            ),
            sources: ["shinkansen"]
          }),
          spot({
            id: "spot-shin-aomori",
            code: "点",
            title: "新青森站",
            meta: "本州入口",
            image: img("shin-aomori"),
            tags: ["换乘"],
            summary: "作为本州入口和新干线节点，适合短暂停留或继续南下。",
            sections: detail(
              ["新青森的意义主要是铁路节点，不是要在车站消耗很多时间。"],
              ["可继续接东北新干线去八户、仙台、东京方向。"],
              ["如果只是通行，别为车站本身停太久。"]
            ),
            sources: ["shinAomori"]
          })
        ]
      }),
      city({
        id: "city-hachinohe-hakodate",
        code: "站",
        title: "八户",
        meta: "新干线支线感 · 可选",
        image: img("hachinohe"),
        tags: ["东北海岸", "可选"],
        summary: "三陆海岸北端入口。适合想补一段东北海岸，但不要和跨海日硬塞。",
        sections: detail(
          ["八户能把海岸地形和渔港生活带进路线。"],
          ["从函馆侧过去要先走新函馆北斗-新青森体系再转南，实际是新干线规划题。"],
          ["如果你们后面仙台还想去松岛，八户可以二选一。"]
        ),
        sources: ["shinAomori"],
        children: [
          spot({
            id: "spot-tanesashi",
            code: "点",
            title: "种差海岸",
            meta: "草地 / 岩岸",
            image: img("hachinohe"),
            tags: ["海岸"],
            summary: "草地、岩岸和海风混在一起，比普通海滩更有地形感。",
            sections: detail(
              ["这是八户最有辨识度的海岸画面。"],
              ["末端交通和天气需要查。"],
              ["适合有完整半天时去。"]
            )
          }),
          spot({
            id: "spot-hachinohe-port",
            code: "点",
            title: "八户渔港生活带",
            meta: "市场 / 港口",
            image: img("hachinohe"),
            tags: ["生活感"],
            summary: "渔港、市场和海岸生活带，比景点更日常。",
            sections: detail(
              ["它能把东北的日常生活感补进路线。"],
              ["交通要看当天是否顺路。"],
              ["时间紧就留给松岛。"]
            )
          })
        ]
      })
    ]
  }),
  move({
    id: "move-hakodate-sendai",
    code: "换",
    title: "基地移动：函馆 → 仙台",
    meta: "换乘可行 · 约 3h+",
    image: img("sendai"),
    tags: ["跨海", "可行"],
    summary: "这段是可执行的本州进入日：函馆到新函馆北斗，再新干线穿青函隧道，经新青森南下仙台。",
    sections: detail(
      ["这是全路线最漂亮的结构移动：北海道结束，东北开始。"],
      ["Hakodate Liner 到新函馆北斗约 15-22 分钟；新函馆北斗到新青森约 1 小时级别，新函馆北斗到仙台约 2.5 小时级别，实际按车次为准。"],
      ["到仙台后不要再加松岛。当天只入住、吃饭。"]
    ),
    sources: ["shinkansen", "shinAomori", "regular"]
  }),
  base({
    id: "base-sendai",
    code: "05",
    title: "仙台基地",
    meta: "本州东北核心 · 建议 1-2 晚",
    image: img("sendai"),
    color: "#6750a4",
    tags: ["基地", "东北缓冲"],
    summary: "本州东北的缓冲站。它把海湾、东北城市和东京高密度连接起来。",
    sections: detail(
      ["仙台让路线从北海道的低密度，过渡到本州城市和东京。"],
      ["新干线北接新青森/函馆方向，南接东京。松岛是轻松短支线。"],
      ["这里不要展开太多，保持缓冲意义。"]
    ),
    sources: ["shinAomori"],
    children: [
      city({
        id: "city-sendai",
        code: "站",
        title: "仙台市",
        meta: "本基地",
        image: img("sendai"),
        tags: ["补给", "城市"],
        summary: "东北大城市，适合补给、吃饭和调整节奏，不需要当高压景点。",
        sections: detail(
          ["仙台的价值是让跨海后落地。", "它比东京松，比北海道城市密度高，是一个很好的缓冲。"],
          ["新干线到达后城市交通方便。"],
          ["到达当天只做吃饭和城市散步。"]
        ),
        children: [
          spot({
            id: "spot-sendai-station",
            code: "点",
            title: "仙台站与青叶通",
            meta: "城市骨架",
            image: img("sendai"),
            tags: ["轻松"],
            summary: "城市骨架清楚，适合快速理解东北核心城市。",
            sections: detail(
              ["这不是为了打卡，是为了从铁路切回城市节奏。"],
              ["站周边和青叶通交通简单。"],
              ["换乘日就留在市区。"]
            )
          }),
          spot({
            id: "spot-gyutan",
            code: "点",
            title: "牛舌与晚饭",
            meta: "吃饭完成城市",
            image: img("sendai"),
            tags: ["晚饭"],
            summary: "用吃饭完成仙台体验，不必额外堆景点。",
            sections: detail(
              ["仙台适合用一顿饭落地。"],
              ["长距离移动后，餐厅比景点更重要。"],
              ["第二天再去松岛。"]
            )
          })
        ]
      }),
      city({
        id: "city-matsushima",
        code: "站",
        title: "松岛",
        meta: "JR 约 0.3h",
        image: img("matsushima"),
        tags: ["日本三景", "轻松半日"],
        summary: "岛屿海湾结构清楚，短时间回报很高。",
        sections: detail(
          ["松岛是仙台基地最适合的短支线：轻、近、画面清楚。"],
          ["从仙台坐 JR 短程可达，但具体选择松岛海岸站还是松岛站要按路线查。"],
          ["天气一般也可以去；不要把它排成满满一整天。"]
        ),
        children: [
          spot({
            id: "spot-matsushima-bay",
            code: "点",
            title: "松岛湾",
            meta: "岛屿海湾",
            image: img("matsushima"),
            tags: ["核心"],
            summary: "海面上散布的小岛形成独特结构，适合半日慢看。",
            sections: detail(
              ["这是松岛的主画面。"],
              ["可以步行、看海湾，也可以搭游船。"],
              ["不必追太多点，留出发呆时间。"]
            )
          }),
          spot({
            id: "spot-zuiganji",
            code: "点",
            title: "瑞严寺与游船",
            meta: "文化 / 海湾视角",
            image: img("matsushima"),
            tags: ["二选一"],
            summary: "一个偏文化，一个偏海湾视角，体力一般时二选一。",
            sections: detail(
              ["瑞严寺补文化，游船补空间视角。"],
              ["两者都做也可以，但不要赶。"],
              ["和仙台市内晚饭组合很舒服。"]
            )
          })
        ]
      }),
      city({
        id: "city-hachinohe-sendai",
        code: "站",
        title: "八户（若未去）",
        meta: "新干线北上约 1h+",
        image: img("hachinohe"),
        tags: ["可选", "海岸"],
        summary: "如果函馆段没去八户，可以从仙台北上补一段东北海岸。",
        sections: detail(
          ["八户和松岛都是海岸，但气质不同：八户更日常、更北方。"],
          ["从仙台北上需要新干线规划，不是随手短途。"],
          ["只在有 2 晚仙台且体力充足时考虑。松岛优先。"]
        ),
        sources: ["shinAomori"],
        children: [
          spot({
            id: "spot-hachinohe-coast-sendai",
            code: "点",
            title: "种差海岸",
            meta: "三陆北端",
            image: img("hachinohe"),
            tags: ["可选"],
            summary: "三陆海岸北段的草地与岩岸，地形比普通海边复杂。",
            sections: detail(
              ["适合补东北海岸，不适合强塞。"],
              ["末端交通需要另查。"],
              ["函馆段去过则直接跳过。"]
            )
          }),
          spot({
            id: "spot-hachinohe-market",
            code: "点",
            title: "八户港口",
            meta: "市场 / 日常",
            image: img("hachinohe"),
            tags: ["生活感"],
            summary: "更生活化的海岸城市体验，和松岛景观型海湾不同。",
            sections: detail(
              ["适合想看日常东北的人。"],
              ["交通成本比松岛高。"],
              ["不要和东京移动日相连。"]
            )
          })
        ]
      })
    ]
  }),
  move({
    id: "move-sendai-tokyo",
    code: "换",
    title: "基地移动：仙台 → 东京",
    meta: "东北新干线约 1.5h",
    image: img("tokyo"),
    tags: ["收束", "可行"],
    summary: "从东北低密度快速进入日本最大都市圈，是整条路线的收束。",
    sections: detail(
      ["这段移动短而明确，适合把旅行从自然线切到城市线。"],
      ["仙台到东京走东北新干线，具体时刻和车种以当天 JR 查询为准。"],
      ["到东京第一晚不要塞满购物和夜景，让身体适应密度突变。"]
    )
  }),
  base({
    id: "base-tokyo",
    code: "06",
    title: "东京基地",
    meta: "终点 · 收尾与返程",
    image: img("tokyo"),
    color: "#6d6257",
    tags: ["基地", "终点"],
    summary: "最后不再扩张路线，只看城市能量、商业密度和人工海岸。",
    sections: detail(
      ["东京的价值在反差：从北海道和东北一路走来，最后进入极高密度。"],
      ["市内交通非常密集，支线都短，但人流会消耗体力。"],
      ["最后几天不再追远郊，用涩谷、银座、台场完成收尾。"]
    ),
    children: [
      city({
        id: "city-tokyo",
        code: "站",
        title: "东京市区",
        meta: "本基地",
        image: img("tokyo"),
        tags: ["到达", "密度"],
        summary: "从北海道和东北进入东京，核心体验是密度突变。",
        sections: detail(
          ["这里不是为了看某一个景点，而是感受人流、站体和城市组织突然变密。"],
          ["东京站、上野、新宿等都容易接入，但不要一天切太多区。"],
          ["第一晚只入住、吃饭、短散步。"]
        ),
        children: [
          spot({
            id: "spot-tokyo-station",
            code: "点",
            title: "东京站 / 上野方向",
            meta: "交通 / 商业",
            image: img("tokyo"),
            tags: ["收束"],
            summary: "交通、商业和人流集中，适合做最终收束。",
            sections: detail(
              ["这里能很快感受到东京作为终点的密度。"],
              ["适合新干线到达后顺路完成。"],
              ["不要把东京第一晚排太满。"]
            )
          }),
          spot({
            id: "spot-urban-density",
            code: "点",
            title: "城市高密度观察",
            meta: "散步替代打卡",
            image: img("tokyo"),
            tags: ["反差"],
            summary: "从低密度一路走到这里，反差本身就是体验。",
            sections: detail(
              ["你们会更明显地感到人流、车站和商业的压缩感。"],
              ["用散步和吃饭完成，不需要列景点清单。"],
              ["低体力时尤其适合。"]
            )
          })
        ]
      }),
      city({
        id: "city-shibuya",
        code: "站",
        title: "涩谷",
        meta: "市内短途",
        image: img("shibuya"),
        tags: ["人流", "城市能量"],
        summary: "东京城市能量峰值。适合感受人流、广告屏和路口节奏。",
        sections: detail(
          ["涩谷是东京密度最直接的一面。"],
          ["市内交通方便，但人流消耗大。"],
          ["适合短时间完成，不适合低体力久逛。"]
        ),
        children: [
          spot({
            id: "spot-shibuya-crossing",
            code: "点",
            title: "涩谷 Scramble 路口",
            meta: "人流交叉",
            image: img("shibuya"),
            tags: ["核心"],
            summary: "人流交叉、屏幕和街区密度一起出现。",
            sections: detail(
              ["它是东京城市能量的标志性场面。"],
              ["地面感受一次即可。"],
              ["体力低时不要逛太久。"]
            )
          }),
          spot({
            id: "spot-shibuya-view",
            code: "点",
            title: "高处看人流",
            meta: "俯视结构",
            image: img("shibuya"),
            tags: ["短时"],
            summary: "从高处看路口，比在地面挤更容易理解城市结构。",
            sections: detail(
              ["高处视角能把混乱变成图案。"],
              ["预约、票务或排队状态以当天为准。"],
              ["适合短时间完成。"]
            )
          })
        ]
      }),
      city({
        id: "city-ginza",
        code: "站",
        title: "银座",
        meta: "市内短途",
        image: img("ginza"),
        tags: ["商业", "雨天"],
        summary: "商业极致密度，适合购物、咖啡、整理旅行末尾。",
        sections: detail(
          ["银座不是自然景观，而是商业秩序和消费密度。"],
          ["市内交通简单，雨天也舒服。"],
          ["适合返程前一天，不需要重体力。"]
        ),
        children: [
          spot({
            id: "spot-ginza-chuo",
            code: "点",
            title: "中央通与和光钟楼",
            meta: "商业街景",
            image: img("ginza"),
            tags: ["核心"],
            summary: "银座最典型的商业街景，识别度高。",
            sections: detail(
              ["它能直接给出银座的城市符号。"],
              ["步行即可串联周边百货和咖啡。"],
              ["适合下雨天和低体力日。"]
            )
          }),
          spot({
            id: "spot-ginza-cafe",
            code: "点",
            title: "百货与咖啡",
            meta: "休息 / 收尾",
            image: img("ginza"),
            tags: ["轻松"],
            summary: "不用追景点，用消费和休息完成东京收尾。",
            sections: detail(
              ["这是让旅行软着陆的地方。"],
              ["交通简单，室内选项多。"],
              ["适合整理行李、买东西、恢复体力。"]
            )
          })
        ]
      }),
      city({
        id: "city-odaiba",
        code: "站",
        title: "台场",
        meta: "市内约 0.5h",
        image: img("odaiba"),
        tags: ["人工海岸", "傍晚"],
        summary: "人工海岸和城市天际线结合，适合用松一点的方式结束旅程。",
        sections: detail(
          ["台场比涩谷轻，适合看海湾、桥和东京天际线。"],
          ["市内交通不是 JR 单线直达概念，按当天路线查。"],
          ["傍晚更舒服，适合最后一天。"]
        ),
        children: [
          spot({
            id: "spot-odaiba-beach",
            code: "点",
            title: "台场海滨",
            meta: "海风 / 天际线",
            image: img("odaiba"),
            tags: ["轻松"],
            summary: "人工海岸、城市天际线和海风结合，节奏比涩谷轻。",
            sections: detail(
              ["它给东京一个更松的海湾视角。"],
              ["适合傍晚散步。"],
              ["旅行最后一天很合适。"]
            )
          }),
          spot({
            id: "spot-rainbow-bridge",
            code: "点",
            title: "彩虹桥视角",
            meta: "海湾视角",
            image: img("odaiba"),
            tags: ["夜景"],
            summary: "用海湾视角看东京，和银座涩谷的街区密度互补。",
            sections: detail(
              ["它让东京从街区变成海湾城市。"],
              ["夜景和天气影响体验。"],
              ["不适合赶时间，适合放慢。"]
            )
          })
        ]
      })
    ]
  })
];

const kindLabels = {
  base: "基地",
  city: "城市 / 中转点",
  spot: "子目的地",
  move: "基地移动",
  audit: "路线审计"
};

const statusLabels = {
  base: "基地",
  easy: "轻",
  spot: "点",
  move: "移动",
  heavy: "长",
  warn: "注意",
  audit: "审计"
};

const metroList = document.querySelector("#metroList");
const auditStrip = document.querySelector("#auditStrip");
const modal = document.querySelector("#detailModal");
const modalSheet = modal.querySelector(".modal-sheet");
const modalImage = document.querySelector("#modalImage");
const modalKind = document.querySelector("#modalKind");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");
const modalTags = document.querySelector("#modalTags");
const modalSections = document.querySelector("#modalSections");
const navLinks = [...document.querySelectorAll(".nav-link")];

let lastFocusedElement = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function flattenNodes(nodes, depth = 0, inheritedColor = "#0b5cab") {
  return nodes.flatMap((node) => {
    const color = node.color ?? inheritedColor;
    const current = { ...node, depth, color };
    const children = node.children ? flattenNodes(node.children, depth + 1, color) : [];
    return [current, ...children];
  });
}

const outlineItems = flattenNodes(journey);
const itemMap = new Map([...outlineItems, ...auditItems].map((item) => [item.id, item]));

function renderTags(tags = []) {
  return tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
}

function renderAuditStrip() {
  auditStrip.innerHTML = auditItems
    .map(
      (item) => `
        <button class="audit-chip status-${item.status}" type="button" data-detail-id="${item.id}">
          <svg aria-hidden="true"><use href="#i-alert"></use></svg>
          <span>
            <strong>${escapeHtml(item.title)}</strong>
            <small>${escapeHtml(item.meta)}</small>
          </span>
        </button>
      `
    )
    .join("");
}

function renderMetroList() {
  metroList.innerHTML = outlineItems
    .map(
      (item) => `
        <button
          class="metro-row kind-${item.kind} status-${item.status}"
          type="button"
          data-detail-id="${item.id}"
          style="--depth:${item.depth}; --line-color:${item.color}"
        >
          <span class="rail-gutter" aria-hidden="true">
            <span class="rail-marker">${escapeHtml(item.code)}</span>
          </span>
          <span class="row-copy">
            <strong>${escapeHtml(item.title)}</strong>
            <small>${escapeHtml(item.meta)}</small>
          </span>
          <span class="row-status">${escapeHtml(statusLabels[item.status] ?? statusLabels[item.kind] ?? "看")}</span>
        </button>
      `
    )
    .join("");
}

function renderDetailSections(item) {
  const sections = item.sections
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

  const sources = item.sources?.length
    ? `
        <section class="source-links">
          <h3>依据</h3>
          <ul>
            ${item.sources
              .map((key) => sourceLinks[key])
              .filter(Boolean)
              .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>`)
              .join("")}
          </ul>
        </section>
      `
    : "";

  return sections + sources;
}

function openDetail(id) {
  const item = itemMap.get(id);
  if (!item) return;

  lastFocusedElement = document.activeElement;
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalKind.textContent = kindLabels[item.kind] ?? "详情";
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

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { threshold: [0.35, 0.55], rootMargin: "-18% 0px -52% 0px" }
);

["outline", "source"].forEach((id) => {
  const target = document.getElementById(id);
  if (target) observer.observe(target);
});

renderAuditStrip();
renderMetroList();
