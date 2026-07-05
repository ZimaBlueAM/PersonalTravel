const img = (name) => `assets/places/${name}.jpg`;

const bases = [
  {
    id: "sapporo",
    number: 1,
    name: "札幌基地",
    shortName: "札幌",
    region: "西北海道核心",
    color: "var(--blue)",
    stay: "落地与前4晚",
    image: img("sapporo"),
    summary: "西北海道最稳的放射中心。城市补给强，往小樽、余市、神威岬都顺。",
    cities: [
      {
        id: "sapporo-city",
        name: "札幌市",
        time: "本基地",
        image: img("sapporo"),
        summary: "到达、下雨、低体力时最适合待在这里。它负责吃饭、买东西、恢复体力。",
        bestFor: "落地日 / 雨天 / 晚上",
        stops: [
          { name: "大通公园与电视塔", image: img("sapporo"), summary: "最直观的札幌城市画面，适合刚到时建立方向感。", tip: "轻松散步，不需要完整半天。" },
          { name: "薄野与狸小路", image: img("sapporo"), summary: "夜晚吃饭和城市密度集中区，适合低成本补一个晚上。", tip: "适合安排在远支线回来的夜晚。" }
        ]
      },
      {
        id: "otaru",
        name: "小樽",
        time: "JR 0.5h",
        image: img("otaru"),
        summary: "半日就能完成的港口城市。运河、仓库、玻璃街区都很适合慢走。",
        bestFor: "轻松半日 / 夜景",
        stops: [
          { name: "小樽运河", image: img("otaru"), summary: "港口工业衰退后的浪漫景观，傍晚和夜景最容易出片。", tip: "低体力日优先选它。" },
          { name: "仓库群与堺町通", image: img("otaru"), summary: "玻璃、甜品、旧仓库建筑串成一条慢逛路线。", tip: "不要排太满，留时间吃东西。" }
        ]
      },
      {
        id: "yoichi",
        name: "余市",
        time: "JR 1.5h",
        image: img("yoichi"),
        summary: "工业和自然混在一起的慢节奏小城，重点是 Nikka 威士忌工厂。",
        bestFor: "平衡日 / 工业美学",
        stops: [
          { name: "Nikka 威士忌余市蒸馏所", image: img("yoichi"), summary: "红砖、蒸馏器、低矮厂房，很适合看工业系统和历史感。", tip: "如果要参观内部，提前查开放和预约状态。" },
          { name: "余市川与街区散步", image: img("yoichi"), summary: "比小樽安静，适合把节奏放慢，避免连续景点轰炸。", tip: "适合作为小樽之外的安静备选。" }
        ]
      },
      {
        id: "cape-kamui",
        name: "神威岬",
        time: "JR+巴士 2.5-3h",
        image: img("cape-kamui"),
        summary: "札幌基地最重的一条海岸支线。风景强，但交通和体力消耗也最大。",
        bestFor: "晴天 / 重体验",
        stops: [
          { name: "神威岬步道", image: img("cape-kamui"), summary: "沿着狭长海岬走到日本海尽头，视觉回报很高。", tip: "风大或下雨不要硬上。" },
          { name: "积丹蓝海岸线", image: img("cape-kamui"), summary: "断崖、海色和远端灯塔是这条线的核心。", tip: "当天不要再安排小樽以外的复杂行程。" }
        ]
      }
    ]
  },
  {
    id: "asahikawa",
    number: 2,
    name: "旭川基地",
    shortName: "旭川",
    region: "中北海道核心",
    color: "var(--green)",
    stay: "建议2晚",
    image: img("asahikawa"),
    summary: "北海道地理中心枢纽。美瑛、富良野、带广从这里放射比从札幌硬冲更合理。",
    cities: [
      {
        id: "asahikawa-city",
        name: "旭川市",
        time: "本基地",
        image: img("asahikawa"),
        summary: "中北海道的住宿和补给点，不一定要当大景点，但能让后面路线不累。",
        bestFor: "换基地日 / 补给",
        stops: [
          { name: "旭川站周边", image: img("asahikawa"), summary: "适合到达后吃饭、洗衣、补给，把体力留给第二天。", tip: "不要在换基地日硬塞富良野。" },
          { name: "旭川城市散步", image: img("asahikawa"), summary: "比札幌更松，适合做中北海道路线的缓冲。", tip: "当作恢复日，而不是景点日。" }
        ]
      },
      {
        id: "biei",
        name: "美瑛",
        time: "JR 0.5h",
        image: img("biei"),
        summary: "丘陵农田、拼布色块和缓坡道路，是中北海道最清楚的地貌画面。",
        bestFor: "轻松摄影 / 晴天",
        stops: [
          { name: "拼布之路", image: img("biei"), summary: "农田被道路和丘陵切成色块，适合慢慢看结构。", tip: "最好天气清楚时去。" },
          { name: "青池方向", image: img("biei"), summary: "如果想从农田转到更奇异的自然色彩，可以作为进阶点。", tip: "公共交通要查班次，不要临时硬加。" }
        ]
      },
      {
        id: "furano",
        name: "富良野",
        time: "JR 1h",
        image: img("furano"),
        summary: "7月主视觉。花田、缓坡和远山构成最典型的北海道夏天。",
        bestFor: "7月 / 花田",
        stops: [
          { name: "富田农场", image: img("furano"), summary: "薰衣草花田的代表点，颜色强，识别度高。", tip: "人多也值得，但别排得太晚。" },
          { name: "中富良野花田", image: img("furano"), summary: "适合继续看花田坡面和远山关系。", tip: "和美瑛同日时，保留午后缓冲。" }
        ]
      },
      {
        id: "obihiro",
        name: "带广",
        time: "JR 2h",
        image: img("obihiro"),
        summary: "十胜平原的入口。重点不是城市本身，而是大尺度农业平原和地平线。",
        bestFor: "开阔感 / 农田铁路",
        stops: [
          { name: "十胜平原", image: img("obihiro"), summary: "日本最大农业平原之一，空间感和北海道其他区域不同。", tip: "适合体力稳定的整日分叉。" },
          { name: "带广本地吃饭", image: img("obihiro"), summary: "可以用豚丼和车站周边补足一个比较生活化的停留。", tip: "别把它和富良野硬挤同一天。" }
        ]
      }
    ]
  },
  {
    id: "kushiro",
    number: 3,
    name: "钏路基地",
    shortName: "钏路",
    region: "东北海道核心",
    color: "var(--amber)",
    stay: "建议2晚",
    image: img("kushiro"),
    summary: "东北海道的低密度感从这里开始。湿地、海雾、最东端都属于这一组。",
    cities: [
      {
        id: "kushiro-city",
        name: "钏路市",
        time: "本基地",
        image: img("kushiro"),
        summary: "东北海道的住宿中心。城市不大，但适合承接湿原和海岸线。",
        bestFor: "恢复 / 湿地入口",
        stops: [
          { name: "钏路湿原", image: img("kushiro"), summary: "低平湿地和曲流河道，是钏路最重要的自然结构。", tip: "天气不稳也能看，但晴天层次更好。" },
          { name: "幣舞桥与炉端", image: img("kushiro"), summary: "傍晚看桥和港口，再吃一顿炉端，适合压低行程强度。", tip: "放在根室重体验前后都舒服。" }
        ]
      },
      {
        id: "akkeshi",
        name: "厚岸",
        time: "JR 1h",
        image: img("akkeshi"),
        summary: "海雾、海湾和牡蛎组成的安静海岸点，比城市景点更冷更慢。",
        bestFor: "平衡日 / 安静海岸",
        stops: [
          { name: "爱冠岬", image: img("akkeshi"), summary: "可以看海湾、岬角和雾气，氛围比普通海边更安静。", tip: "适合不想跑太远但想看海的日子。" },
          { name: "厚岸湾", image: img("akkeshi"), summary: "低能见度海岸和渔业生活感，是东北海道的另一种质地。", tip: "和钏路市内搭配即可，不要加根室。" }
        ]
      },
      {
        id: "nemuro",
        name: "根室 / 纳沙布岬",
        time: "JR 2.5-3h",
        image: img("cape-nosappu"),
        summary: "这条线的价值是地理极限：日本本土最东端的边界感。",
        bestFor: "晴天 / 重体验",
        stops: [
          { name: "纳沙布岬", image: img("cape-nosappu"), summary: "最东端的灯塔、海风和边界感，是东北海道的终点体验。", tip: "当天只做这一件大事最稳。" },
          { name: "根室本线尽头感", image: img("cape-nosappu"), summary: "长时间 JR 本身就是体验：越坐越空、越坐越东。", tip: "适合把坐车当旅程的人。" }
        ]
      },
      {
        id: "obihiro-reverse",
        name: "带广反向",
        time: "JR 2h",
        image: img("obihiro"),
        summary: "从东北海道反向看十胜平原，重点是铁路直线和空间压缩感。",
        bestFor: "铁路体验 / 平衡日",
        stops: [
          { name: "农田铁路", image: img("obihiro"), summary: "在车窗里看长直线、农田和低密度空间，是这条路的核心。", tip: "不一定要下很多点。" },
          { name: "十胜平原回看", image: img("obihiro"), summary: "把旭川侧和钏路侧的北海道连接起来。", tip: "如果已从旭川去过带广，这里可跳过。" }
        ]
      }
    ]
  },
  {
    id: "hakodate",
    number: 4,
    name: "函馆基地",
    shortName: "函馆",
    region: "南北海道断裂点",
    color: "var(--red)",
    stay: "建议1-2晚",
    image: img("hakodate"),
    summary: "北海道到本州的断裂点。夜景、港口、青函隧道都让它和前面完全不同。",
    cities: [
      {
        id: "hakodate-city",
        name: "函馆市",
        time: "本基地",
        image: img("hakodate"),
        summary: "港口、坡道、夜景和西式建筑集中在一起，是南北海道最适合停住的城市。",
        bestFor: "夜景 / 港口散步",
        stops: [
          { name: "函馆山夜景", image: img("hakodate"), summary: "城市夹在海湾之间，夜景结构非常清楚。", tip: "天气不好就别硬上山。" },
          { name: "元町与金森仓库", image: img("hakodate"), summary: "坡道、教堂、红砖仓库构成函馆的港口层次。", tip: "适合慢走，不适合赶路。" }
        ]
      },
      {
        id: "shin-aomori",
        name: "新青森 / 青函穿越",
        time: "新干线 1h",
        image: img("shin-aomori"),
        summary: "这不是普通中转，而是从北海道切入本州的结构性节点。",
        bestFor: "跨岛移动 / 轻松",
        stops: [
          { name: "青函隧道", image: img("seikan"), summary: "海底铁路让岛屿断裂变成可感知的穿越。", tip: "这天不要再安排太远。" },
          { name: "新青森站", image: img("shin-aomori"), summary: "作为本州入口和新干线节点，适合短暂停留或换乘。", tip: "如果只是通行，别为车站本身耗太久。" }
        ]
      },
      {
        id: "hachinohe-from-hakodate",
        name: "八户",
        time: "JR 2-2.5h",
        image: img("hachinohe"),
        summary: "三陆海岸的北端入口，重点是地震重塑后的海岸线和渔港生活。",
        bestFor: "平衡日 / 海岸地形",
        stops: [
          { name: "种差海岸", image: img("hachinohe"), summary: "草地、岩岸和海风混在一起，比普通海滩更有地形感。", tip: "适合天气稳定时去。" },
          { name: "八户渔港生活带", image: img("hachinohe"), summary: "渔港、市场和海岸生活带，比景点更日常。", tip: "和仙台段重复时二选一即可。" }
        ]
      },
      {
        id: "sapporo-long",
        name: "札幌长距离回看",
        time: "JR 3.5-4h",
        image: img("sapporo"),
        summary: "这不是建议频繁往返的支线，而是把南北海道海岸线作为一次穿越体验。",
        bestFor: "重体验 / 铁路线",
        stops: [
          { name: "长距离海岸车窗", image: img("hakodate"), summary: "沿海和山地交替出现，坐车本身就是内容。", tip: "只适合顺路，不适合专门来回。" },
          { name: "北海道内部尺度感", image: img("sapporo"), summary: "用一段长车程体会北海道内部距离。", tip: "不想累就直接跳过。" }
        ]
      }
    ]
  },
  {
    id: "sendai",
    number: 5,
    name: "仙台基地",
    shortName: "仙台",
    region: "本州东北核心",
    color: "var(--purple)",
    stay: "建议1-2晚",
    image: img("sendai"),
    summary: "本州东北的缓冲站。它把海湾、东北城市和东京高密度连接起来。",
    cities: [
      {
        id: "sendai-city",
        name: "仙台市",
        time: "本基地",
        image: img("sendai"),
        summary: "东北大城市，适合补给、吃饭和调整节奏，不需要当作高压景点。",
        bestFor: "补给 / 城市缓冲",
        stops: [
          { name: "仙台站与青叶通", image: img("sendai"), summary: "城市骨架清楚，适合快速理解东北核心城市。", tip: "换乘日就留在市区。" },
          { name: "牛舌与晚饭", image: img("sendai"), summary: "用吃饭完成城市体验，不必额外堆景点。", tip: "适合长距离移动后。" }
        ]
      },
      {
        id: "matsushima",
        name: "松岛",
        time: "JR 0.3h",
        image: img("matsushima"),
        summary: "日本三景之一，岛屿海湾结构清楚，短时间回报很高。",
        bestFor: "轻松半日 / 海湾",
        stops: [
          { name: "松岛湾", image: img("matsushima"), summary: "海面上散布的小岛形成独特结构，适合半日慢看。", tip: "天气一般也可以去。" },
          { name: "瑞严寺与游船", image: img("matsushima"), summary: "一个偏文化，一个偏海湾视角，二选一也可以。", tip: "不要把它排成满满一整天。" }
        ]
      },
      {
        id: "hachinohe-from-sendai",
        name: "八户",
        time: "JR 2h",
        image: img("hachinohe"),
        summary: "从仙台北上看连续海岸生活带，适合补一段东北海岸。",
        bestFor: "平衡日 / 海岸渔港",
        stops: [
          { name: "种差海岸", image: img("hachinohe"), summary: "三陆海岸北段的草地与岩岸，地形比普通海边复杂。", tip: "如果函馆段去过八户，这里可跳过。" },
          { name: "八户港口", image: img("hachinohe"), summary: "更生活化的海岸城市体验，和松岛的景观型海湾不同。", tip: "适合想看日常东北的人。" }
        ]
      },
      {
        id: "tokyo-transition",
        name: "东京过渡",
        time: "新干线 1.5h",
        image: img("tokyo"),
        summary: "从东北低密度快速切入日本最大都市圈，是整条路线的收束。",
        bestFor: "移动日 / 终点",
        stops: [
          { name: "新干线密度变化", image: img("tokyo"), summary: "越接近东京，车站、人流、城市密度快速上升。", tip: "这天不要再安排远支线。" },
          { name: "到达东京后的收尾", image: img("tokyo"), summary: "入住、整理、吃饭，把旅行从自然线切到城市线。", tip: "晚间轻松即可。" }
        ]
      }
    ]
  },
  {
    id: "tokyo",
    number: 6,
    name: "东京基地",
    shortName: "东京",
    region: "终点",
    color: "var(--brown)",
    stay: "收尾与返程",
    image: img("tokyo"),
    summary: "最后不再扩张路线，只看城市能量、商业密度和人工海岸。",
    cities: [
      {
        id: "tokyo-city",
        name: "东京市区",
        time: "本基地",
        image: img("tokyo"),
        summary: "从北海道和东北进入东京，核心体验是密度突变。",
        bestFor: "到达日 / 收尾",
        stops: [
          { name: "东京站 / 上野方向", image: img("tokyo"), summary: "交通、商业和人流集中，适合做最终收束。", tip: "别把东京第一晚排太满。" },
          { name: "城市高密度观察", image: img("tokyo"), summary: "从低密度一路走到这里，反差本身就是体验。", tip: "用散步代替打卡。" }
        ]
      },
      {
        id: "shibuya",
        name: "涩谷",
        time: "JR 0.1h",
        image: img("shibuya"),
        summary: "东京城市能量峰值。适合感受人流、广告屏和路口节奏。",
        bestFor: "平衡日 / 城市能量",
        stops: [
          { name: "涩谷 Scramble 路口", image: img("shibuya"), summary: "人流交叉、屏幕和街区密度一起出现。", tip: "体力低时不要逛太久。" },
          { name: "高处看人流", image: img("shibuya"), summary: "从高处看路口比在地面挤更容易理解城市结构。", tip: "适合短时间完成。" }
        ]
      },
      {
        id: "ginza",
        name: "银座",
        time: "JR 0.1h",
        image: img("ginza"),
        summary: "商业极致密度，适合购物、咖啡、整理旅行末尾。",
        bestFor: "轻松 / 雨天",
        stops: [
          { name: "中央通与和光钟楼", image: img("ginza"), summary: "银座最典型的商业街景，识别度高。", tip: "适合下雨天和低体力日。" },
          { name: "百货与咖啡", image: img("ginza"), summary: "不用追景点，用消费和休息完成东京收尾。", tip: "适合返程前一天。" }
        ]
      },
      {
        id: "odaiba",
        name: "台场",
        time: "JR 0.5h",
        image: img("odaiba"),
        summary: "人工海岸和城市天际线结合，适合用松一点的方式结束旅程。",
        bestFor: "轻松半日 / 傍晚",
        stops: [
          { name: "台场海滨", image: img("odaiba"), summary: "人工海岸、城市天际线和海风结合，节奏比涩谷轻。", tip: "傍晚更舒服。" },
          { name: "彩虹桥视角", image: img("odaiba"), summary: "用海湾视角看东京，和银座涩谷的街区密度互补。", tip: "适合旅行最后一天。" }
        ]
      }
    ]
  }
];

const railMap = document.querySelector("#railMap");
const baseList = document.querySelector("#baseList");
const navLinks = [...document.querySelectorAll(".nav-link")];

let openBaseId = "sapporo";
let openCityId = "sapporo-city";

function getBase(id) {
  return bases.find((base) => base.id === id) ?? bases[0];
}

function getFirstCity(base) {
  return base.cities[0];
}

function renderRail() {
  railMap.innerHTML = bases
    .map(
      (base) => `
        <button class="rail-stop${base.id === openBaseId ? " is-open" : ""}" type="button" style="--base-color:${base.color}" data-open-base="${base.id}" aria-label="展开${base.name}">
          <span class="rail-number">${base.number}</span>
          <span class="rail-copy">
            <strong>${base.shortName}</strong>
            <span>${base.region}</span>
          </span>
          <span class="rail-jump">${base.stay}</span>
        </button>
      `
    )
    .join("");
}

function stopCard(stop) {
  return `
    <article class="stop-card">
      <img src="${stop.image}" alt="${stop.name}" width="1200" height="800" loading="lazy" />
      <div class="stop-copy">
        <h5>${stop.name}</h5>
        <p>${stop.summary}</p>
        <small>${stop.tip}</small>
      </div>
    </article>
  `;
}

function cityPanel(city, base) {
  const isOpen = city.id === openCityId;
  return `
    <article class="city-node${isOpen ? " is-open" : ""}">
      <button class="city-button" type="button" data-open-city="${city.id}" data-parent-base="${base.id}" aria-expanded="${isOpen}">
        <img src="${city.image}" alt="${city.name}" width="1200" height="800" loading="lazy" />
        <span class="city-main">
          <span class="city-name">${city.name}</span>
          <span class="city-summary">${city.summary}</span>
        </span>
        <span class="city-meta">
          <strong>${city.time}</strong>
          <small>${city.bestFor}</small>
        </span>
      </button>
      ${
        isOpen
          ? `<div class="stop-list" aria-label="${city.name}子目的地">${city.stops.map(stopCard).join("")}</div>`
          : ""
      }
    </article>
  `;
}

function baseBlock(base) {
  const isOpen = base.id === openBaseId;
  return `
    <section class="base-node${isOpen ? " is-open" : ""}" id="${base.id}" style="--base-color:${base.color}" aria-labelledby="${base.id}-title">
      <button class="base-button" type="button" data-open-base="${base.id}" aria-expanded="${isOpen}">
        <span class="base-index">${base.number}</span>
        <span class="base-title">
          <span class="base-kicker">${base.region} · ${base.stay}</span>
          <strong id="${base.id}-title">${base.name}</strong>
          <small>${base.summary}</small>
        </span>
        <span class="chevron" aria-hidden="true">${isOpen ? "−" : "+"}</span>
      </button>
      ${
        isOpen
          ? `
            <div class="base-detail">
              <img class="base-photo" src="${base.image}" alt="${base.name}" width="1200" height="800" loading="lazy" />
              <div class="city-list">
                ${base.cities.map((city) => cityPanel(city, base)).join("")}
              </div>
            </div>
          `
          : ""
      }
    </section>
  `;
}

function renderOutline() {
  baseList.innerHTML = bases.map(baseBlock).join("");
}

function openBase(baseId, shouldScroll = false) {
  const base = getBase(baseId);
  openBaseId = base.id;
  if (!base.cities.some((city) => city.id === openCityId)) {
    openCityId = getFirstCity(base).id;
  }
  renderRail();
  renderOutline();
  if (shouldScroll) {
    document.getElementById(base.id)?.scrollIntoView({ block: "start" });
  }
}

function openCity(baseId, cityId) {
  openBaseId = baseId;
  openCityId = cityId;
  renderRail();
  renderOutline();
  document.querySelector(`[data-open-city="${cityId}"]`)?.scrollIntoView({ block: "center" });
}

document.addEventListener("click", (event) => {
  const baseButton = event.target.closest("[data-open-base]");
  if (baseButton) {
    openBase(baseButton.dataset.openBase, baseButton.classList.contains("rail-stop"));
    return;
  }

  const cityButton = event.target.closest("[data-open-city]");
  if (cityButton) {
    openCity(cityButton.dataset.parentBase, cityButton.dataset.openCity);
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

["route", "bases", "source"].forEach((id) => {
  const target = document.getElementById(id);
  if (target) observer.observe(target);
});

renderRail();
renderOutline();
