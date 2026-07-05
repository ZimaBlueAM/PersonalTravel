const bases = [
  {
    id: "sapporo",
    number: 1,
    name: "札幌",
    region: "西北海道核心",
    color: "var(--blue)",
    move: "落地与前4晚",
    why: "西北海道放射中心。小樽、余市、神威岬都应该从这里出发。",
    branches: [
      { name: "小樽", time: "0.5h", method: "JR", effort: "easy", label: "轻松", title: "运河夜景", why: "港口工业衰退美学，适合半日或低体力日。" },
      { name: "余市", time: "1.5h", method: "JR", effort: "balanced", label: "平衡", title: "Nikka工厂", why: "工业和自然融合，可以慢逛，不用硬赶。" },
      { name: "神威岬", time: "2.5-3h", method: "JR+巴士", effort: "heavy", label: "重体验", title: "断崖海岸", why: "日本海极限海岸线，晴天去才值得。" }
    ]
  },
  {
    id: "asahikawa",
    number: 2,
    name: "旭川",
    region: "中北海道核心",
    color: "var(--green)",
    move: "建议2晚",
    why: "北海道地理中心枢纽。美瑛、富良野、带广从这里辐射最顺。",
    branches: [
      { name: "美瑛", time: "0.5h", method: "JR", effort: "easy", label: "轻松", title: "拼布之路", why: "丘陵农田结构很强，短距离高回报。" },
      { name: "富良野", time: "1h", method: "JR", effort: "balanced", label: "平衡", title: "薰衣草花田", why: "7月主视觉，适合留给天气好的白天。" },
      { name: "带广", time: "2h", method: "JR", effort: "balanced", label: "平衡", title: "十胜平原", why: "日本最大农业平原，地平线体验很开阔。" }
    ]
  },
  {
    id: "kushiro",
    number: 3,
    name: "钏路",
    region: "东北海道核心",
    color: "var(--amber)",
    move: "建议2晚",
    why: "东海岸极限辐射点。这里看湿地、海雾和日本最东端。",
    branches: [
      { name: "厚岸", time: "1h", method: "JR", effort: "balanced", label: "平衡", title: "海雾海岸", why: "低能见度海岸，安静、冷、很东北海道。" },
      { name: "根室", time: "2.5-3h", method: "JR", effort: "heavy", label: "重体验", title: "纳沙布岬", why: "日本最东端，地理意义强，但当天别加戏。" },
      { name: "带广反向", time: "2h", method: "JR", effort: "balanced", label: "平衡", title: "农田铁路", why: "极长直线和空间压缩感，把坐车本身当体验。" }
    ]
  },
  {
    id: "hakodate",
    number: 4,
    name: "函馆",
    region: "南北海道断裂点",
    color: "var(--red)",
    move: "建议1-2晚",
    why: "北海道到本州的断裂点。津轻海峡和海底铁路在这里成立。",
    branches: [
      { name: "新青森", time: "1h", method: "新干线", effort: "easy", label: "轻松", title: "津轻海峡隧道", why: "岛屿断裂和海底铁路，一小时就能感到跨区。" },
      { name: "八户", time: "2-2.5h", method: "JR", effort: "balanced", label: "平衡", title: "三陆海岸", why: "地震重塑海岸线，地形比普通海岸复杂。" },
      { name: "札幌极长", time: "3.5-4h", method: "JR", effort: "heavy", label: "重体验", title: "长距离海岸线", why: "只适合作穿越体验，不适合频繁往返。" }
    ]
  },
  {
    id: "sendai",
    number: 5,
    name: "仙台",
    region: "本州东北核心",
    color: "var(--purple)",
    move: "建议1-2晚",
    why: "本州北部缓冲站。它把东北海湾和东京城市密度接起来。",
    branches: [
      { name: "松岛", time: "0.3h", method: "JR", effort: "easy", label: "轻松", title: "日本三景", why: "岛屿海湾结构清楚，短时间就能看到重点。" },
      { name: "八户", time: "2h", method: "JR", effort: "balanced", label: "平衡", title: "海岸渔港", why: "连续海岸生活带，适合补一段更日常的东北。" },
      { name: "东京", time: "1.5h", method: "新干线", effort: "easy", label: "轻松", title: "都市过渡", why: "人口密度快速提升，作为南下收束很自然。" }
    ]
  },
  {
    id: "tokyo",
    number: 6,
    name: "东京",
    region: "终点",
    color: "var(--brown)",
    move: "收尾与返程",
    why: "终点不再扩张路线，只收束城市能量、商业密度和人工海岸。",
    branches: [
      { name: "涩谷", time: "0.1h", method: "JR", effort: "balanced", label: "平衡", title: "极高人流密度", why: "东京城市能量峰值，热闹但消耗也高。" },
      { name: "银座", time: "0.1h", method: "JR", effort: "easy", label: "轻松", title: "商业极致密度", why: "购物、咖啡、整理行李，都很适合作收尾。" },
      { name: "台场", time: "0.5h", method: "JR", effort: "easy", label: "轻松", title: "人工海岸", why: "城市和海结合，适合用更松的方式结束。" }
    ]
  }
];

const effortColor = {
  easy: "var(--green)",
  balanced: "var(--blue)",
  heavy: "var(--red)"
};

const effortBg = {
  easy: "#ecfdf3",
  balanced: "#eff6ff",
  heavy: "#fef3f2"
};

const modeNotes = {
  all: "全部展开，适合一起讨论取舍。",
  easy: "只突出短距离、低消耗选择，适合移动日或下雨天。",
  balanced: "突出半日到一日的正常体验，适合体力稳定的日子。",
  heavy: "只突出高消耗高回报选择，适合晴天且睡够的日子。"
};

const railMap = document.querySelector("#railMap");
const baseList = document.querySelector("#baseList");
const modeNote = document.querySelector("#modeNote");
const modeButtons = [...document.querySelectorAll(".mode-button")];
const navLinks = [...document.querySelectorAll(".nav-link")];
let activeMode = "all";

function renderRail() {
  railMap.innerHTML = bases
    .map(
      (base) => `
        <button class="rail-stop" type="button" style="--base-color:${base.color}" data-target="${base.id}" aria-label="跳到${base.name}基地">
          <span class="rail-number">${base.number}</span>
          <span class="rail-copy">
            <strong>${base.name}</strong>
            <span>${base.region}</span>
          </span>
          <span class="rail-jump">${base.move}</span>
        </button>
      `
    )
    .join("");
}

function branchCard(branch) {
  const muted = activeMode !== "all" && branch.effort !== activeMode ? " is-muted" : "";
  return `
    <article class="branch-card${muted}" style="--effort-color:${effortColor[branch.effort]}; --effort-bg:${effortBg[branch.effort]}">
      <div class="branch-time">
        ${branch.time}
        <small>${branch.method}</small>
      </div>
      <div class="branch-main">
        <div class="branch-top">
          <h4>${branch.name}</h4>
          <span class="effort-pill">${branch.label}</span>
        </div>
        <p>${branch.title}</p>
        <div class="branch-reason">${branch.why}</div>
      </div>
    </article>
  `;
}

function renderBases() {
  baseList.innerHTML = bases
    .map((base) => {
      const branches =
        activeMode === "all"
          ? base.branches
          : [...base.branches].sort((a, b) => Number(b.effort === activeMode) - Number(a.effort === activeMode));

      return `
        <section class="base-block" id="${base.id}" style="--base-color:${base.color}" aria-labelledby="${base.id}-title">
          <div class="base-head">
            <span class="base-index">${base.number}</span>
            <div>
              <p class="base-kicker">${base.region} · ${base.move}</p>
              <h3 id="${base.id}-title">${base.name}基地</h3>
              <p class="base-why">${base.why}</p>
            </div>
          </div>
          <div class="branch-list">
            ${branches.map(branchCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function setMode(mode) {
  activeMode = mode;
  modeButtons.forEach((button) => {
    const selected = button.dataset.mode === mode;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  modeNote.textContent = modeNotes[mode];
  renderBases();
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-target]");
  if (routeButton) {
    document.getElementById(routeButton.dataset.target)?.scrollIntoView({ block: "start" });
    return;
  }

  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    setMode(modeButton.dataset.mode);
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
renderBases();
