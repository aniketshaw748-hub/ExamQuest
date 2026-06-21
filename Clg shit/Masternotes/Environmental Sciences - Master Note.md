# Environmental Sciences (MC401) — MASTER NOTE

> **For:** B.Tech CSE, 2nd Year (MAKAUT) · **Subject:** Environmental Sciences · **Code:** MC401
> **Exam:** Tuesday, 07 July 2026 · **Full Marks:** 70 · **Time:** 3 hours
> **Goal:** One-day-revisable, zero-prior-knowledge, score-everything notes. Built from PYQs (2005–2023) > organizer > textbook.

---

## How the Paper Works (read this first)

| Group | Type | Pattern | Marks | Strategy |
|---|---|---|---|---|
| **A** | Very short (MCQ / 1-liner) | Answer **any 10 of 12** | 10 × 1 = **10** | Pure recall. Definitions, values, "who/which/year". Never skip — full 10 are gettable. |
| **B** | Short answer | Answer **any 3 of 5** | 5 × 3 = **15** | Short notes / definitions + a diagram or 4–5 points. |
| **C** | Long answer | Answer **any 3 of 5** | 15 × 3 = **45** | Each Q usually split (e.g. 3+6+6 or 4+11). Write all parts, draw the diagram, give reactions. |

**Choice is generous** (3 of 5 in B and C). So you only need to be strong in ~5 chapters out of 7 for Group C. Focus effort where PYQ frequency is highest (see weightage table).

**Golden rules for this paper**
- It is a **theory/rote** subject. Marks come from **definitions, labelled diagrams, chemical reactions, standard values, and point-wise lists** — not arguments.
- Always **draw the diagram** when a cycle/device is asked (nitrogen cycle, ESP, cyclone, catalytic converter, sewage flow). Diagram alone can fetch 2–3 marks.
- Memorise the **numbers** (albedo 0.3, solar constant 1372 W/m², DALR −10°C/km, DO sat 9.1 mg/L at 20°C, SPL ref 2×10⁻⁵ N/m², etc.). MCQs love them.
- For numericals, **write the formula first**, then substitute. Even a wrong final answer gets method marks.

---

## Chapter Weightage Map (from PYQ frequency 2005–2023)

| # | Chapter | Group A (MCQ) | Group B (short) | Group C (long) | Overall Priority |
|---|---|---|---|---|---|
| 1 | Fundamentals of Environment | High | High | **Very High** (population numericals, MSY, acid rain) | ★★★★★ |
| 2 | Ecology | **Very High** | **Very High** | High (cycles, ecosystem, food chain) | ★★★★★ |
| 3 | Air Pollution & Control | **Very High** | High | **Very High** (greenhouse, global temp model, ESP/plumes) | ★★★★★ |
| 4 | Water Pollution & Control | High | **Very High** | **Very High** (BOD/COD, derivation, ASP) | ★★★★★ |
| 5 | Land / Solid Waste | Medium | Medium | Medium (disposal methods, discontinuities) | ★★★☆☆ |
| 6 | Noise Pollution & Control | Medium | High | High (TLV numerical, dB comparison) | ★★★★☆ |
| 7 | Environmental Management | Low–Medium | Low | Medium (EIA almost every year) | ★★★☆☆ |

> **Read-everything tip:** Chapters 1–4 alone routinely supply enough Group-C choice. Treat 1–4 as compulsory mastery; 6 (noise numericals are easy marks) and 7 (EIA) as quick add-ons.

---
---

# CHAPTER 1 — FUNDAMENTALS OF ENVIRONMENT

## 1.1 Core Definitions (memorise verbatim)

- **Environment:** the sum total of all living and non-living things (biotic + abiotic) around us and their interactions.
- **Sustainable Development:** development that meets the needs of the **current** generation **without** jeopardising the needs of **future** generations. (3 components: Economic, Social, Environmental.)
- **Carrying Capacity (K):** the upper limit to the number of individuals an environment can support.
- **Maximum Sustainable Yield (MSY):** the **maximum rate at which individuals can be removed without reducing the population size**. Occurs at **N = K/2**.
- **Environmental Resistance:** factors (abiotic like temperature + biotic like predators) that limit a population from reaching full reproductive capacity. Mathematically **(1 − N/K)**.
- **Zero Population Growth (ZPG):** dN/dt = 0 (occurs at saturation, N = K).
- **Law of Conservation of Mass:** matter can change form but the **total mass remains constant**.
- **Resource:** "a substance or non-substance which has specific functions and can be utilized to meet the needs of people at a definite time and place". Classified as Natural/Human, and Renewable/Non-renewable.
- **Reserve:** the part of a resource that is **economically feasible** to extract right now (Probable / Proved).
- **Conservative substance:** NOT transformed in receiving water (e.g. salts, metals).
- **Non-conservative substance:** IS transformed/degraded (e.g. BOD, ammonia).
- **EIA:** a formalized procedure for examination, analysis and assessment of planned activities to ensure environmentally sound and sustainable development.

## 1.2 Population Growth Models (★★★★★ — derivations asked almost every year)

### (a) Exponential Growth — Prove Nₜ = N₀e^(Rt)
Growth rate ∝ population:
```
dN/dt ∝ N   ⟹   dN/dt = RN
dN/N = R dt
∫(N₀→Nₜ) dN/N = R ∫(0→t) dt
ln(Nₜ/N₀) = Rt
∴ Nₜ = N₀ e^(Rt)
```
Graph: **J-shaped** curve (N vs t).

### (b) Doubling Time — Prove t_d = 0.693/R = 70/R(%)
At doubling, Nₜ = 2N₀:
```
2N₀ = N₀ e^(R·t_d)  ⟹  2 = e^(R·t_d)  ⟹  ln2 = R·t_d
∴ t_d = 0.693/R   ; if R in %, t_d = 70/R(%)
```

### (c) Logistic Growth & MSY — Prove N = K/2 (★★★★★ asked EVERY year)
Logistic equation: `dN/dt = rN(1 − N/K)`. Graph = **S-shaped (sigmoid)** curve, levels off at carrying capacity K. (Proposed by Verhulst 1838; "Lotka–Volterra model".)

For maximum growth rate, set d/dt(dN/dt) = 0:
```
d/dt[ rN(1 − N/K) ] = 0
r(dN/dt) − (r/K)(2N·dN/dt) = 0
r(dN/dt)(1 − 2N/K) = 0
Since r(dN/dt) ≠ 0  ⟹  1 − 2N/K = 0
∴ N = K/2     (PROVED)
```
Then MSY = (dN/dt)max = r(K/2)(1 − ½) = **rK/4**.
Extended form (when initial growth R₀ ≠ r): using r = R₀/(1 − N₀/K),
**MSY = R₀K² / [4(K − N₀)]** ← asked WBUT 2015(E), 2017(E).

### Logistic Curve (ASCII)
```
 N │                _________  ← Carrying capacity K
   │             ,-'
   │           /          (M→P: decreasing rate)
 K/2│- - - - -● ← MSY point (inflection, fastest growth)
   │       /            (L→M: ~constant rate)
   │   _,-'             (J→L: exponential)
   │_-'________________________ t
```

## 1.3 Standard Population Numericals (template — solved set in Practice Sheet)

| Type | Formula |
|---|---|
| Exponential rate | Nₜ = N₀e^(Rt) → R = ln(Nₜ/N₀)/t |
| Doubling time | t_d = 0.693/R |
| Logistic effective r | r = R₀/(1 − N₀/K) |
| Time to reach half final | t* = (1/r)·ln(K/N₀ − 1) |
| Logistic projection | N = K / [1 + e^(−r(t − t*))] |
| MSY | rK/4 or R₀K²/[4(K−N₀)] |

## 1.4 Acid Rain (★★★★★ — short OR long, asked nearly every year)

**Definition:** Acid rain is rainwater containing excessive acids — a cocktail of mainly **H₂SO₄ (60–70%)** and **HNO₃ (30–40%)**, with HCl third. Normal unpolluted rain has **pH 5.6** (CO₂ + H₂O → H₂CO₃). It is "acid" rain because its pH falls well below 5.6.

**Formation reactions (write these — high marks):**
```
Sulphur:   S + O₂ → SO₂ ;  SO₂ + ½O₂ → SO₃ ;  SO₃ + H₂O → H₂SO₄
Nitrogen:  N₂ + O₂ → 2NO ; NO + ½O₂ → NO₂ ; N₂O₅ + H₂O → 2HNO₃
```
**Effects (4 segments):**
- **Aquatic:** kills fish, bacteria, blue-green algae; reduces phytoplankton.
- **Terrestrial:** damages leaves (↓ photosynthesis); leaches Ca, K, Fe, Mg from soil.
- **Buildings:** corrodes marble/limestone ("**stone leprosy**"): `CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑`.
- **Human:** affects nervous/digestive/respiratory systems; mobilises heavy metals (Cu, Cd, Hg, Zn, Cr).

## 1.5 Other Short-Note Topics
- **Earthquake:** trembling of earth's surface. Origin point = **focus**; point above on surface = **epicentre**. Measured by **Richter** & **Mercalli** scales. Cause: sudden release of stress along a fault. Submarine quake → **tsunami**.
- **TFR (Total Fertility Rate):** average children a woman has in her lifetime; replacement rate ≈ 2.1.
- **Mortality rate:** deaths per 1000 individuals per year.
- **Age Pyramid:** graphical (pyramid-shaped) distribution of age groups by gender.
- **Material balance (non-conservative, steady state):** Input = Output + Decay; Decay rate = KCV; C = C₀e^(−Kt) (first-order decay).

## 1.6 Common Mistakes (Ch.1)
- Writing MSY at N = K (it's **K/2**). · Forgetting signs in derivations. · Mixing t_d = 0.693/R with 70/R% (70 is only when R is a %). · Saying acid rain pH is 7 (it's < 5.6).

## 1.7 Mnemonics
- **"SAY at K/2"** → **S**ustainable, **A**t MS**Y**, N = K/2.
- Acid rain order: **"Sulphur Stronger, Nitric Next, Chloride Closing"** → H₂SO₄ > HNO₃ > HCl.

## 5-MINUTE REVISION SHEET — Ch.1
- MSY = max removal without shrinking population; **N = K/2**; MSY value = **rK/4** = R₀K²/4(K−N₀).
- Exponential: Nₜ=N₀e^(Rt) (J-curve). Logistic: dN/dt=rN(1−N/K) (S-curve). t_d = 0.693/R = 70/R%.
- Environmental resistance = (1−N/K). ZPG at N=K.
- Acid rain = H₂SO₄(60–70%)+HNO₃(30–40%); normal rain pH **5.6**; stone leprosy on marble.
- Sustainable development: present needs without harming future; 3 systems = economic/social/environmental.
- Conservative (salts/metals) vs non-conservative (BOD/ammonia).

## Questions Asked Previously — Ch.1
- Prove N=K/2 for MSY / define carrying capacity & MSY — **★★★★★** (every year)
- What is acid rain? Causes/reactions/effects — **★★★★★**
- Prove Nₜ=N₀e^(Rt) / t_d=70/R / logistic model — **★★★★☆**
- Population numericals (growth rate, doubling time, projection) — **★★★★☆**
- Sustainable development / TFR, mortality, age pyramid — **★★★☆☆**
- Resource vs reserve; conservative vs non-conservative — **★★★☆☆**
- Earthquake (short note) — **★★☆☆☆**

---
---

# CHAPTER 2 — ECOLOGY

## 2.1 Core Definitions
- **Ecology:** study of interactions between organisms and their environment.
- **Ecosystem:** the **basic functional unit** in ecology — all living organisms in an area interacting with the physical environment. (Term coined by **A.G. Tansley, 1935**.)
- **Synecology** = **community ecology**.
- **Trophic level:** each feeding level of a food chain (= "nutrient level").
- **Food chain:** linear transfer of food & energy from producer → consumer → decomposer.
- **Food web:** many interconnected food chains forming a web.
- **Biodiversity:** variety and differences among living organisms from all sources. 3 levels: **Genetic, Species, Ecosystem** diversity.
- **Endemic species:** found only in one particular region, nowhere else.
- **Biodiversity hotspot:** biogeographic region rich in biodiversity but threatened; designated when **≥ 0.5% of plant species are endemic**. (25 global; 2 in India: **Western Ghats & Sri Lanka**, **Indo-Burma/Eastern Himalayas**.)
- **Ecological pyramid:** graphical representation of biomass/energy at each trophic level. Concept by **Charles Elton (1927)**.
- **Biogeochemical cycle:** recycling of nutrients through the components of an ecosystem.

## 2.2 Components of Ecosystem (★★★★★)
```
                ECOSYSTEM
        ┌───────────┴───────────┐
   ABIOTIC                    BIOTIC
   ├ Inorganic (C, N, CO₂,    ├ Producer (autotrophs: green plants)
   │  H₂O)                    ├ Consumer (heterotrophs: animals)
   ├ Organic (carbohydrate,   │   Primary→Secondary→Tertiary
   │  protein, lipid)         └ Decomposer (bacteria, fungi)
   └ Climate (temp, humidity)
```
Two viewpoints: **Trophic** → Autotrophic + Heterotrophic. **Structural** → Abiotic + Biotic.

## 2.3 Energy Flow vs Nutrient Flow (★★★★★ — "energy unidirectional, nutrients cyclic")
- **Energy flow is UNIDIRECTIONAL:** Sun → Producer → Consumer → Decomposer → lost as **heat**. Energy does NOT cycle.
- **Nutrients are RECYCLED (cyclic):** inorganic nutrient pool ⇄ organisms ⇄ pool.
- Thermodynamics: energy transformed (1st law), always partly lost as heat (2nd law). Only **~10%** passes to next trophic level.
```
 SUN → PRODUCER → CONSUMER → DECOMPOSER
        │(10%)   │(10%)   │
        ▼        ▼        ▼   ← heat lost at every step (energy one-way)
 ◄──────── NUTRIENT POOL ────────►  (nutrients recycled, both ways)
```

## 2.4 Food Chains (types) & Characteristics
**Types:**
- **Grazing / Predator:** producer → higher consumer. *Grass → Grasshopper → Toad → Snake.*
- **Parasitic:** big host → parasite. *Man → Worm → Protozoa.*
- **Saprophytic / Detritus:** dead organism → decomposer. *Dead plant/animal → Fungi → Bacteria.*

**Characteristics (5):** (i) producers at base; (ii) each layer = trophic level; (iii) as chain proceeds **size ↑ number ↓**; (iv) energy unidirectional, nutrients cyclic; (v) a single isolated food chain cannot exist.

## 2.5 Biogeochemical Cycles (★★★★★ — draw the diagram!)

### Nitrogen Cycle (most asked)
```
        ATMOSPHERIC N₂
       ↑(de-nitrification)  ↓(N-fixation: lightning, Rhizobium, BGA Nostoc, fertilizer)
   ┌───┴──────────────────────┴───┐
   │                              ▼
 Decay/waste ← Animals ← Plants ← NITRATE (NO₃⁻)
   │ (ammonification → NH₄⁺)        ↑ (nitrification)
   └─→ NH₄⁺ → (nitrite bacteria) → NO₂⁻ ─┘
```
Steps: **N-fixation** → **Nitrification** (NH₄⁺→NO₂⁻→NO₃⁻) → uptake by plants/animals → **Ammonification** (decay→NH₄⁺) → **De-nitrification** (→N₂).

### Carbon Cycle
Atmospheric CO₂ (0.03%) —**photosynthesis**→ Plants → Animals; returned by **respiration, combustion, decay, volcanoes, fossil-fuel burning**.

### Oxygen Cycle
Atmospheric O₂ (20.95%) ⇄ organic molecules (C₆H₁₂O₆), linked by **Respiration** (uses O₂) and **Photosynthesis** (releases O₂).

### Phosphorus Cycle
Weathering of rock → phosphate (PO₄³⁻) → plants → animals → waste/decay → decomposer → sediments → (weathering) back. **No atmospheric (gaseous) phase.** P is part of ATP/ADP, bones & teeth.

### Sulphur Cycle
SO₄ → organic S in proteins (plants/animals) → decomposition → H₂S → oxidation/bacteria → back to SO₄.

## 2.6 Biodiversity Conservation
```
            BIODIVERSITY CONSERVATION
        ┌────────────┴────────────┐
   IN-SITU (in habitat)      EX-SITU (outside habitat)
   ├ National Park            ├ Seed bank / Gene bank
   ├ Sanctuary                ├ Botanical garden
   └ Biosphere reserve        └ Zoological garden
```
**Why India is a megadiversity nation:** lies at tri-junction of 3 realms (Afro-tropical, Indo-Malayan, Palaearctic); 2 hotspots; rich species richness & endemism (~10th globally).

## 2.7 Common Mistakes (Ch.2)
- Saying energy is cyclic (it's **unidirectional**); nutrients are cyclic.
- Forgetting Tansley/1935 (ecosystem) and Elton/1927 (pyramid).
- Phosphorus cycle has **no gaseous phase**.

## 2.8 Mnemonics
- 10% rule: **"only a tenth climbs the ladder."**
- N-cycle order: **"Fix, Nitrify, Eat, Ammonify, De-nitrify"** (FNEAD).

## 5-MINUTE REVISION SHEET — Ch.2
- Ecosystem = basic functional unit; Tansley 1935. Abiotic + Biotic (P/C/D).
- Energy **unidirectional** (heat), nutrients **cyclic**. 10% transfer.
- Food chains: Grazing, Parasitic, Saprophytic. Pyramid (Elton 1927) always upright.
- N-cycle: fixation→nitrification→ammonification→de-nitrification. P-cycle: no gas phase.
- Biodiversity 3 levels; hotspot ≥0.5% endemic; in-situ vs ex-situ.

## Questions Asked Previously — Ch.2
- Define ecosystem; classify components — **★★★★★**
- Nitrogen / Carbon / Phosphorus / Oxygen / Sulphur cycle with diagram — **★★★★★**
- Energy unidirectional, nutrients cyclic (justify) — **★★★★★**
- Food chain types + characteristics; food web — **★★★★☆**
- Biodiversity: types, conservation, hotspots, India megadiversity — **★★★★☆**
- Ecological/energy pyramid; endemic species; demography — **★★★☆☆**

---
---

# CHAPTER 3 — AIR POLLUTION & CONTROL

## 3.1 Standard Values (MCQ goldmine ★★★★★)

| Quantity | Value / Fact |
|---|---|
| Earth's **albedo** | **0.30** (30% reflected) |
| **Solar constant (S)** | **1372 W/m²** (~1370) |
| Stefan-Boltzmann σ | **5.67 × 10⁻⁸ W/m²K⁴** |
| **DALR** (Dry ALR) | **−10 °C/km** (≈ −9.8) |
| **SALR / Wet ALR** | **−6 °C/km** (organizer also −8.5) |
| ELR typical | −6.5 °C/km |
| ALR formula | **−dT/dZ = g/Cₚ** |
| Atmospheric **radiative window** | **7–12 μm** |
| Predicted Earth temp (no GHG) | **255 K = −18 °C** |
| Actual Earth temp | **288 K = 15 °C** (GHG adds **33 °C**) |
| GWP maximum | **CFC** |
| Ozone layer conc. | ~**200–300 DU** (1 DU = 0.01 mm gas STP) |
| Coldest atmospheric layer | **Mesosphere** |
| Ozone protective layer | **Stratosphere** |
| Wien's law | λ_max(μm) = **2898 / T(K)** |

**Definitions:** Lapse rate = temp change with altitude. **ELR** = actual ambient. **ALR** = theoretical for rising parcel (no heat exchange). **Temperature inversion** = warm over cool, temp **increases** with height (Radiation/Subsidence/Advective). **Criteria pollutants (6):** NO₂, O₃, CO, SO₂, PM, Pb. **Primary** (direct: CO, SO₂, NOₓ) vs **Secondary** (formed: O₃, PAN). **TLV:** lower TLV = more toxic.

## 3.2 Atmospheric Stability (ELR vs ALR — ★★★★★)
| Condition | Name | Atmosphere | Dispersion |
|---|---|---|---|
| ELR > ALR | Super-adiabatic | **Unstable** | **Best** (rapid mixing) |
| ELR = ALR | Neutral | Neutral | Moderate |
| ELR < ALR | Sub-adiabatic | **Stable** | Poor |
| Negative ELR | Inversion | Very stable | Worst (traps pollutants) |

**"ELR > ALR is ideal for dispersion"** — unstable air → strong vertical mixing → rapid dispersal.

## 3.3 Plume Behaviour
| Plume | Condition | Dispersion |
|---|---|---|
| **Looping** | Super-adiabatic (unstable) | Rapid, wavy; can hit ground |
| **Coning** | Sub-adiabatic / neutral | Cone, limited mixing |
| **Fanning** | Inversion (negative LR) | Horizontal, poor |
| **Lofting** | Super-adiab above, inversion below | **Best/ideal** |
| **Fumigating** | Inversion above, super-adiab below | **Bad** (pollutants to ground) |
| **Trapping** | Inversion both sides | Bad (confined) |

## 3.4 Greenhouse Effect & Global Warming (★★★★★ — long answer nearly every year)
**Greenhouse effect:** the atmosphere is transparent to **short-wave** incoming solar radiation but absorbs/re-emits the **long-wave (IR)** radiation from Earth, warming the surface.
**GHGs (6):** H₂O vapour, **CO₂**, CH₄, N₂O, O₃, (CFCs). IR absorption needs a **change in dipole moment**.
**Global warming:** slow gradual temperature rise from excess GHGs.
**Effects:** climate change (uneven rainfall/drought), **sea-level rise**, agriculture (mixed), marine food (pH/salinity change kills fish/algae).
**Control:** Mitigation + Adaptation — ↓ fossil fuels, ↑ renewables, recover GHGs, Kyoto cooperation, afforestation.
**Wien's law application:** Sun (5800 K) peaks ~**0.5 μm** (short), Earth (288 K) peaks ~**10 μm** (IR) → little overlap → GHGs absorb the IR → warming.

## 3.5 Simple Global Temperature Model (★★★★★ derivation)
```
Without albedo:   S·πR² = σ·4πR²·T⁴  ⟹  T = (S/4σ)^¼ = 279 K
With albedo α=0.3: S(1−α)·πR² = σ·4πR²·T⁴
                   T⁴ = S(1−α)/(4σ) = 1372(0.7)/(4·5.67e−8)
                   T = 255 K = −18 °C
```
Actual = 288 K (15 °C). Difference of **33 °C** = greenhouse effect. (Flat-earth variant uses 2πR².)

### Adiabatic Lapse Rate — Prove −dT/dZ = g/Cₚ (★★★★★)
```
1st law (dQ=0): dQ = Cₚ dT − V dP = 0  ⟹  dT/dP = V/Cₚ
Hydrostatic: dP/dZ = −gρ
dT/dZ = (V/Cₚ)(−gρ) = −(Vρ)g/Cₚ ;  Vρ = mass = 1
∴ dT/dZ = −g/Cₚ = −9.8/1005 ≈ −10 °C/km
```

## 3.6 Ozone Layer Depletion (★★★★★)
**Formation (Chapman reactions):**
```
O₂ + hν → O + O ;  O + O₂ → O₃ ;  O₃ + hν → O₂ + O ;  O + O₃ → 2O₂
```
**Depletion by CFC:** UV splits CFC → **Cl**; `Cl + O₃ → ClO + O₂`. **One CFC molecule destroys ~1 lakh (10⁶) O₃ molecules.**
**Antarctic hole:** polar winter → **Polar Vortex** → temp < −80 °C → **Polar Stratospheric Clouds (PSC)** → activate Cl → sunlight returns → ozone destruction cycle.
**Effects:** skin cancer (**melanoma**), cataract, immune suppression, retarded plant growth.
**Montreal Protocol (1987):** stops production of Ozone Depleting Substances (CFC etc.).

## 3.7 Smog Comparison (★★★★☆)
| Sulphurous (London) Smog | Photochemical (LA) Smog |
|---|---|
| London first | Los Angeles first |
| SO₂ + particulates | Hydrocarbons + NOₓ + O₃ |
| By-product: sulphate | By-product: **PAN** |
| Temp <3 °C, high humidity, foggy | Temp >25 °C, low humidity, sunny |
| Radiation inversion | Subsidence inversion |
| Reducing; winter morning | Oxidising; summer midday |
| Lung/throat irritation | Eye irritation |

**Photochemical smog mechanism:** reactive hydrocarbons + O₃ → free radicals → react with NO/O₂ → aldehydes + **PAN**.

## 3.8 Air Pollution Control Devices (★★★★★ — 5-mark short notes)

### Electrostatic Precipitator (ESP)
Wires between plates; high voltage (1–50 kV) → **corona discharge** ionises gas → particles charged → migrate to plates → removed by rapping/washing.
```
  Dirty gas →  │ wire⁻ ║ plate │  → Clean gas
              particles charged → stick to plates
```
**Pros:** 99% efficiency, low power, fine particles. **Cons:** high cost, large space, HV hazard.

### Cyclone Separator
Spinning gas → **centrifugal force** flings particles to wall → dust outlet; clean gas exits top. **Effective >90% for particles >5 μm.** **Pros:** low cost, no moving parts. **Cons:** poor <5 μm, abrasion.

### Venturi Scrubber
Gas at 60–100 m/s through throat; water injected → particles impact slow droplets → sent to cyclone. **Pros:** high efficiency, high-temp, removes gas+particulate. **Cons:** high power, wet sludge.

### Baghouse Filter
Fabric bags. **Pros:** very high efficiency, dry, low ΔP. **Cons:** large space, gas <285 °C.

### Catalytic Converter (3-way) — automobile exhaust
Converts CO, VOC/HC, NOₓ using **Pt, Rh, Pd**:
```
Reduction (Pt, Rh):  2NO → N₂ + O₂ ;  2NO₂ → N₂ + 2O₂
Oxidation (Pt, Pd):  2CO + O₂ → 2CO₂ ;  HC + O₂ → CO₂ + H₂O
Control: O₂ sensor adjusts air–fuel ratio.  Uses unleaded petrol.
```

## 3.9 Common Mistakes (Ch.3)
- ELR>ALR = **unstable = good dispersion**. · Lofting good, Fumigating bad. · Ozone **protective in stratosphere, pollutant in troposphere**. · Quote both 255 K and 288 K. · Montreal=ozone(1987), Kyoto=GHG(1997).

## 3.10 Mnemonics
- Plume: **"Lofting Lifts (good), Fumigating Falls (bad)."**
- Catalytic metals: **"Pretty Rich Pandas"** → Pt, Rh, Pd.

## 5-MINUTE REVISION SHEET — Ch.3
- Albedo 0.30; S=1372 W/m²; σ=5.67e−8; DALR −10°C/km; window 7–12 μm.
- Predicted 255 K(−18°C), actual 288 K(15°C); GHG +33°C. T=[S(1−α)/4σ]^¼. −dT/dZ=g/Cₚ.
- ELR>ALR = unstable = best dispersion. Lofting good; fumigating/trapping bad.
- GHGs: H₂O,CO₂,CH₄,N₂O,O₃,CFC. GWP max=CFC.
- Ozone: Chapman; CFC→Cl kills 1 lakh O₃; PSC+Polar Vortex→hole; Montreal 1987.
- Devices: ESP(corona,99%), cyclone(centrifugal,>5μm), venturi(wet), baghouse, catalytic(Pt/Rh/Pd).
- Sulphurous(SO₂,London,winter) vs Photochemical(NOₓ+HC+O₃→PAN,LA,summer).

## Questions Asked Previously — Ch.3
- Greenhouse effect / global warming / Wien's law — **★★★★★**
- Simple global temperature model (255 K) — **★★★★★**
- Prove ALR = −g/Cₚ — **★★★★★**
- Ozone depletion / Antarctic hole / Montreal — **★★★★★**
- Plumes & lapse rate / stability — **★★★★★**
- Control devices (ESP, cyclone, venturi, baghouse, catalytic) — **★★★★★**
- Smog comparison; PAN; criteria pollutants; inversion; albedo — **★★★★☆**
- Sun/earth energy radiated numericals; CFC number — **★★★☆☆**

---
---

# CHAPTER 4 — WATER POLLUTION & CONTROL

## 4.1 Standard Values (★★★★★)
| Quantity | Value |
|---|---|
| DO saturation at 20 °C | **9.1 mg/L** |
| DO sat at 0 °C | ~14 mg/L |
| **DO_min for aquatic life** | **5 ppm** (river ~4–8 ppm) |
| BOD test duration | **5 days at 20 °C** |
| As permissible (drinking) | **0.05 ppm** |
| Always true | **COD > BOD** |
| Temporary hardness ion | HCO₃⁻ |
| Blue baby syndrome | NO₃⁻ |
| Minamata disease | CH₃Hg⁺ |
| Itai-itai disease | Cd |

**Definitions:**
- **BOD:** O₂ required by aerobic microbes to stabilize organic matter. High BOD = **bad water**.
- **COD:** O₂ to chemically oxidize **both** biodegradable & non-biodegradable matter (K₂Cr₂O₇). More scientific; **COD > BOD always.**
- **DO:** dissolved oxygen — key quality indicator.
- **Eutrophication:** lake aging from **nutrient (N, P) enrichment** → ↑ algae. **Natural** & **Cultural**.
- **Hardness:** multivalent cations, mainly **Ca²⁺ & Mg²⁺**.
- **Aquifer:** underground porous, permeable water-bearing rock. **Darcy:** Q = K·A·(dh/dl).

## 4.2 BOD Derivation — Prove BODₜ = L₀(1 − e^(−Kt)) (★★★★★)
```
−dLₜ/dt = kLₜ  ⟹  Lₜ = L₀e^(−kt)
L₀ = BODₜ + Lₜ  ⟹  BODₜ = L₀ − L₀e^(−kt) = L₀(1 − e^(−kt))   (PROVED)
```
- L₀ = ultimate carbonaceous demand; K = rate constant (time⁻¹).
- Temperature: **k_T = k₂₀·θ^(T−20)**, θ = 1.047.
- Dilution: **BOD₅ = (DOᵢ − DO_f)/P**.

## 4.3 Hardness & Softening
**Classification (as CaCO₃):** Soft 0–60 · Medium 60–120 · Hard 120–180 · Very hard >180 mg/L.
- **Temporary (carbonate):** Ca/Mg bicarbonates — removed by **boiling**/lime: `Ca(HCO₃)₂ + Heat → H₂O + CO₂↑ + CaCO₃↓`.
- **Permanent (non-carbonate):** Ca/Mg sulphates — **Lime-Soda process**: `MgSO₄ + Ca(OH)₂ → Mg(OH)₂↓ + CaSO₄↓`.
- Hard water in **boilers** → scale → explosion risk; in **laundries** → no lather.

## 4.4 Heavy Metal Toxicity
| Metal | Source | Effect |
|---|---|---|
| **As** | mining, pesticides | attacks enzyme –SH; carcinogen; coma→death |
| **Cd** | plating, pipes | replaces Zn²⁺ → renal disorder; **Itai-itai** |
| **Pb** | gasoline, plumbing | anaemia, kidney, CNS (TEL fat-soluble) |
| **Hg** | industrial, coal | highly toxic; **Minamata** (CH₃Hg⁺) |
| **Cr** | tannery, plating | Cr(VI), possible carcinogen |

## 4.5 Wastewater Treatment (★★★★★)
### Sewage Treatment Flow
```
Influent → [Primary Sedimentation] → [Aeration Tank (air)] → [Secondary Sedimentation] → Effluent
                                          ↑__recycle activated sludge__│
                                          sludge → digestion
```
- **Primary:** physical settling. **Secondary (biological):** ASP / trickling filter (removes max BOD). **Tertiary:** disinfection (chlorine).
### Activated Sludge Process (ASP)
Air + sewage + microbes → floc reduces organics; sludge partly recycled (**RAS**). **Pros:** max BOD removal, ↓ pathogens, little space. **Cons:** skilled operation needed.
### Trickling Filter — **secondary** biological; wastewater trickles over microbial-film media.
### Winkler Method (DO): add MnSO₄ + alkali-iodide-azide → brown floc → conc. H₂SO₄ ("fix") → titrate with sodium thiosulphate, starch indicator (blue→clear). mL titrant = DO mg/L.

## 4.6 Eutrophication & Lake Types
- **Oligotrophic** = nutrient-poor (clean); **Eutrophic** = nutrient-rich (algae-dominated).
- N+P ↑ → algal bloom → DO depletion → fish kill. **Cultural** eutrophication is faster.

## 4.7 Common Mistakes (Ch.4)
- **COD always > BOD**. · BOD test = **5 days, 20 °C, dark** (dark stops photosynthesis O₂; stopper stops atmospheric O₂). · Temporary=HCO₃⁻(boil), permanent=SO₄²⁻(lime-soda). · DO_min aquatic = 5 ppm.

## 4.8 Mnemonics
- **"COD Counts On Dichromate"** (K₂Cr₂O₇), always > BOD.
- **"Minamata=Mercury, Itai=Cadmium, Blue baby=Nitrate."**

## 5-MINUTE REVISION SHEET — Ch.4
- BOD=O₂ for microbes; COD oxidizes all; **COD>BOD**.
- **BODₜ=L₀(1−e^(−kt))**; BOD₅=(DOᵢ−DO_f)/P; k_T=k₂₀·1.047^(T−20).
- DO sat 9.1 mg/L@20°C; DO_min aquatic 5 ppm.
- Hardness Ca²⁺/Mg²⁺; temp(HCO₃⁻,boil) vs perm(SO₄²⁻,lime-soda). <60 soft <120 med <180 hard.
- Diseases: Minamata=CH₃Hg⁺, Itai=Cd, Blue baby=NO₃⁻.
- Treatment: Primary→Secondary(ASP)→Tertiary(Cl). Eutrophication=N+P→algae↑→DO↓.

## Questions Asked Previously — Ch.4
- Prove BODₜ = L₀(1−e^(−Kt)) — **★★★★★**
- BOD/COD definition, difference, COD test steps — **★★★★★**
- BOD₅ numericals (ultimate, remaining, temp correction) — **★★★★★**
- Hardness, lime-soda softening — **★★★★★**
- Activated sludge / trickling filter — **★★★★☆**
- Eutrophication; heavy metals (As, Cd, Pb, Hg) — **★★★★☆**
- Aquifer, Darcy's law, hydrological cycle; Winkler; VOCs — **★★★☆☆**

---
---

# CHAPTER 5 — LAND / SOLID WASTE POLLUTION & CONTROL

## 5.1 Core Definitions
- **Land pollution:** deterioration of land surface from solid/liquid waste contaminating soil & groundwater.
- **Solid waste:** discarded solid material (domestic, commercial, industrial, agricultural, hospital).
- **Hazardous waste:** meets ≥1 of — **Reactivity, Ignitability, Corrosivity, Toxicity (RICT)**.
- **Weathering:** disintegration of parent rock; types **Physical, Chemical, Biological**.
- **Vermicomposting:** decomposition of organic waste by worms + microbes into compost.

## 5.2 Earth's Structure & Discontinuities (★★★★☆)
```
  CRUST (64–96 km; SiAl over SiMa)
   │— Conrad discontinuity (within crust)
   │— Moho discontinuity ← crust/mantle boundary
  MANTLE (~2800 km; asthenosphere + mesosphere)
   │— Gutenberg discontinuity (~2900 km) ← mantle/core boundary
  CORE (NiFe; inner solid + outer molten; ~5500 °C)
```

## 5.3 Solid Waste Disposal Methods (★★★★☆)
| Method | Key points |
|---|---|
| **Open dumping** | cheap, no planning; breeds pests, smell |
| **Sanitary landfilling** | engineered cells (2–3 m); 5 phases (aerobic→anaerobic→methanogenic→stabilize→aerobic) |
| **Incineration** | burning **900–1200 °C**; ash ~25%; needs air-pollution control |
| **Composting** | biological; microbes → manure |

## 5.4 Hazardous & Biomedical Waste
- **Control flow:** Identify (RICT) → Minimize → Administer → Handle → Dispose (landfill/incineration/underground injection).
- **3R principle:** Reuse, Recycle, Recovery.
- **Biomedical waste:** anatomical/animal → incineration + deep burial; sharps → autoclave + shredding.
- **Effects:** carcinogenesis, mutagenesis, teratogenesis, CNS disorders.

## 5.5 Common Mistakes (Ch.5)
- **Moho=crust/mantle, Gutenberg=mantle/core, Conrad=within crust.** · Incineration 900–1200 °C. · Hazardous = RICT.

## 5.6 Mnemonic
- **"RICT"** = hazard criteria. · **"Conrad, Moho, Gutenberg"** top-down.

## 5-MINUTE REVISION SHEET — Ch.5
- Hazardous = RICT. Disposal: dumping, landfill (5 phases), incineration (900–1200°C), composting. 3R.
- Earth: Crust(SiAl/SiMa)—Conrad—Moho—Mantle—Gutenberg—Core(NiFe,5500°C). Weathering: phys/chem/bio.

## Questions Asked Previously — Ch.5
- Solid/hazardous waste + disposal methods — **★★★★☆**
- Landfilling / composting / incineration (short notes) — **★★★★☆**
- Conrad/Moho/Gutenberg; lithosphere composition — **★★★☆☆**
- Biomedical waste; weathering — **★★★☆☆**

---
---

# CHAPTER 6 — NOISE POLLUTION & CONTROL

## 6.1 Definitions & Values (★★★★☆)
- **Noise:** unwanted sound. **Noise pollution:** excessive sound disrupting life.
- **Decibel:** logarithmic ratio. `dB = 10 log₁₀(I/I₀)`.
- **SPL ref pressure:** **2 × 10⁻⁵ N/m²**. **Intensity ref I₀ = 10⁻¹² W/m²**.
- **Audible range:** **20 Hz – 20,000 Hz** (<20 infrasonic, >20k ultrasonic).
- **Measurement:** Road traffic → **L₁₀ (18-hr)**; Industrial → **L_eq**; Aircraft → **L_epn (pNdB)**.
- **dB(A):** A-weighted (human-ear, 800–3000 Hz).

## 6.2 dB Comparison Numericals (★★★★★ — easy marks)
`I = I₀·10^(L/10)`, so `I₁/I₂ = 10^((L₁−L₂)/10)`.
- 100 vs 90 → **10×** · 100 vs 80 → **100×** · 90 vs 60 → **1000×**.
- **Two equal 50 dB sources:** `L = 10 log(2×10⁵) = 53 dB` (NOT 100!).

## 6.3 Noise TLV — combined exposure (★★★★★ numerical)
```
Σ(Cᵢ/Tᵢ) = C₁/T₁ + C₂/T₂ + ...
> 1 → exceeds limit (UNSAFE);  ≤ 1 → safe
```
**Permissible duration:** 80 dB→16h, 85→8h, 90→4h, 95→2h, 100→1h, 105→½h, 110→¼h, 115→⅛h. (Every +5 dB halves time.)

## 6.4 Permissible Ambient Levels (zones, dB(A))
| Zone | Day | Night |
|---|---|---|
| Industrial | 75 | 70 |
| Commercial | 65 | 55 |
| Residential | 55 | 45 |
| Sensitive (hospital/school) | 50 | 40 |
(Day 6am–10pm; Night 10pm–6am.)

## 6.5 Effects & Control
**Effects:** headache, ↑ heart rate, hypertension, hearing loss, ↓ concentration. (120 dB = pain threshold.)
**Control (Source→Path→Receiver):** Source (design/operation/maintenance, mufflers); Path (multiple walls, enclosures, **green belt 4× built-up**); Receiver (ear plugs, job rotation, 90 dB(A)/8 hr limit).

## 6.6 Common Mistakes (Ch.6)
- Two equal sources add only **+3 dB**. · SPL ref=2×10⁻⁵ N/m², intensity ref=10⁻¹² W/m². · TLV Σ>1 = unsafe. · Road=L₁₀, Industrial=L_eq, Aircraft=L_epn.

## 6.7 Mnemonic
- **"Roads Ten, Industry Equal, Aircraft Perceived"** → L₁₀, L_eq, L_epn.

## 5-MINUTE REVISION SHEET — Ch.6
- dB=10 log(I/I₀); SPL ref 2×10⁻⁵ N/m²; I₀=10⁻¹²; audible 20–20k Hz.
- I₁/I₂=10^((L₁−L₂)/10); two equal = +3 dB.
- TLV Σ(C/T); >1 unsafe. 90→4h, 100→1h; +5 dB halves time.
- Road=L₁₀, industrial=L_eq, aircraft=L_epn. Control: Source/Path/Receiver; green belt 4×.

## Questions Asked Previously — Ch.6
- Noise TLV combined-exposure numerical — **★★★★★**
- "How much louder is X dB than Y dB" — **★★★★★**
- Define noise/SPL/dB; SIL; adding two sources (53 dB) — **★★★★☆**
- Effects on health/birds; control measures — **★★★★☆**
- L_epn / types of noise; zone levels — **★★★☆☆**

---
---

# CHAPTER 7 — ENVIRONMENTAL MANAGEMENT

## 7.1 Core Definitions
- **EIA:** formalized procedure to examine, analyze and assess planned activities for sound & sustainable development; an *"anticipatory, participatory, integrative environmental management tool."*
- **EMS:** systematic, documented management of an organization's environmental programs (**ISO 14000**).
- **Environmental audit:** quantifies environmental performance & position (like a financial audit).
- **EQI** = Environmental Quality Index. **EIU = EQI − PIU**.

## 7.2 EIA Methodology (★★★★☆ — appears almost every year)
```
Proposed Project → SCREENING → {No EIA / Uncertain / EIA required}
 EIA required → Scoping → Prediction of impacts → Evaluation of mitigation
 → Documentation (draft→final→summary) → Review/Decision → Implementation
```
**Benefits:** ↓ cost & time, design improvements, legal compliance, healthier environment, biodiversity maintenance, fewer resource conflicts.

## 7.3 Important Acts, Protocols, Conventions (MCQ ★★★★☆)
| Item | Year / Focus |
|---|---|
| **Environment (Protection) Act** | **1986** |
| **Wildlife (Protection) Act** | **1972** |
| **Montreal Protocol** | 1987 — Ozone Depleting Substances |
| **Kyoto Protocol** | 1997 — Greenhouse gas reduction |
| **COP-21 / Paris Agreement** | 2015 — warming "well below 2 °C" |
| **Agenda 21** | Sustainable development |
| **Chipko Andolan** | Tree-hugging movement |
| ISO 14000 | EMS standard |

## 7.4 Common Mistakes (Ch.7)
- Env Protection=**1986**, Wildlife=**1972**. · Montreal=ozone, Kyoto=GHG, Paris=2015. · EIA **evaluates** (not start/stop).

## 5-MINUTE REVISION SHEET — Ch.7
- EIA = anticipatory assessment: screening→scoping→prediction→mitigation→documentation→decision.
- EMS=ISO 14000. Acts: Env Protection 1986, Wildlife 1972. Montreal 1987, Kyoto 1997, Paris 2015.

## Questions Asked Previously — Ch.7
- EIA definition + methodology + relation to new industry — **★★★★☆**
- Environmental audit; EMS — **★★★☆☆**
- COP-21/Paris; Acts & years (MCQ) — **★★★☆☆**

---
---

# 🎯 EXAM PREDICTION (ranked) — MC401, 07 July 2026

### Most-Probable Group A (MCQ — learn ALL)
1. DO_min aquatic = **5 ppm**; BOD test = **5 days**; **COD > BOD**.
2. Albedo = **0.3**; solar constant **1372 W/m²**.
3. Coldest layer = **mesosphere**; ozone protects in **stratosphere**, pollutant in **troposphere**.
4. CO affects **O₂ transport in blood (hemoglobin)**.
5. GHGs (CO₂, N₂O, man-made); GWP max = **CFC**.
6. Env (Protection) Act **1986**; Wildlife Act **1972**; Chipko = tree-hugging.
7. Road=**L₁₀**, industrial=**L_eq**, aircraft=**L_epn**; SPL ref **2×10⁻⁵ N/m²**.
8. MSY at **N=K/2**; environmental resistance = **(1−N/K)**.
9. Synecology = **community ecology**; energy flow = **unidirectional**.
10. Best non-hazardous disposal = **composting/landfilling**; Moho = crust/mantle.
11. Blue baby = **NO₃⁻**; Minamata = **CH₃Hg⁺**; Itai-itai = **Cd**; nephrotoxicity = **kidney**.
12. Ecological pyramid = **Elton**; ecosystem term = **Tansley 1935**.

### Most-Probable Group B (Short notes — 5 marks)
Greenhouse effect ★★★★★ · Phosphorus/Nitrogen/Carbon/Oxygen cycle (with diagram) ★★★★★ · Ecological pyramid · Eutrophication · Sustainable development · Catalytic converter / ESP / Cyclone · Hardness of water · EIA · Aquifer/Darcy · Acid rain.

### Most-Probable Group C (Long answers — 15 marks)
1. Greenhouse effect + global warming + Wien's law / global temperature model — ★★★★★
2. Ecosystem definition + components + a cycle (N/C/O) with diagram — ★★★★★
3. BOD/COD: prove BODₜ=L₀(1−e^(−Kt)) + difference + numerical — ★★★★★
4. Population: prove N=K/2 (MSY) / Nₜ=N₀e^(Rt) + numerical — ★★★★★
5. Air pollution control devices (ESP, cyclone, venturi, catalytic) — ★★★★☆
6. Plumes & lapse rate / ALR=−g/Cₚ — ★★★★☆
7. Ozone depletion + Montreal Protocol — ★★★★☆
8. Activated sludge / sewage treatment + hardness softening — ★★★★☆
9. Noise: TLV numerical + sources + control — ★★★★☆

### Most-Probable Numericals (PRACTISE)
1. Population (growth rate, doubling time, logistic projection).
2. MSY (rK/4 or R₀K²/4(K−N₀)).
3. BOD (BOD₅, ultimate L₀, remaining, temp correction θ=1.047).
4. Noise TLV (Σ(C/T)⪋1; dB comparison; +3 dB addition).
5. Global temperature model (T=[S(1−α)/4σ]^¼).
6. Darcy / alkalinity (Q=KA(dh/dl); alkalinity as CaCO₃).

> **One-line strategy:** Master 4 derivations (N=K/2, Nₜ=N₀e^(Rt), BODₜ=L₀(1−e^(−Kt)), ALR=−g/Cₚ), the 5 cycles, the greenhouse/global-temp model, 4 control devices, and the noise TLV numerical → covers ~80% of every MC401 paper.
