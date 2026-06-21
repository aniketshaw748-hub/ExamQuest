# Chemistry-I — MASTER NOTE (MAKAUT / WBUT)

> **Subject:** Chemistry-I  **Codes:** BS-CH101 / BS-CH201  **B.Tech CSE, Semester I/II**
> **Built from:** the 11 organizer chapters (Popular Publications, MAKAUT/WBUT solved papers). Every question in the source is tagged inline with its real WBUT year(s) or `[MODEL QUESTION]`. This note uses those tags to build the ★ probability map.
> **One-day revision pack — assume zero prior knowledge. Revise the 5-Minute sheets the night before.**

---

## MAKAUT 70-mark Paper Pattern (3 hours)

| Group | Type | Count | Marks each | Total | What it tests |
|---|---|---|---|---|---|
| **A** | MCQ (objective) | 10 | 1 | 10 | one-liners, definitions, small numericals |
| **B** | Short answer | 5 (of ~7) | 3 | 15 | definitions, one comparison, one small derivation/numerical |
| **C** | Long answer | 3 (of ~5) | 15 | 45 | full derivations, mechanisms, descriptive processes |
| | | | | **70** | |

**Strategy:** Group C (45 marks) is where the SGPA is won or lost, and it is dominated by **derivations** (Thermo-I, Thermo-II) + **mechanisms** (Organic) + **descriptive processes** (Water, Electrochem). Master ~10 derivations cold and you have already secured the majority of Group C.

---

## Chapter-wise Weightage / Probability Map

★ rating logic: tagged with many real EVEN/ODD years = ★★★★★; 1–2 real years = ★★★☆☆; MODEL-only but high concept-density = ★★☆☆☆.

| # | Chapter | Group A (MCQ) yield | Group B/C yield | Highest-value items | Overall |
|---|---|---|---|---|---|
| 1 | Atomic & Molecular Structure | Very high (MO bond-order, semicon) | High | Schrödinger derivation, bond order/magnetism, p/n semiconductor, CFSE | ★★★★★ |
| 2 | Spectroscopic Techniques | High (30 MCQs in source) | Medium | Beer–Lambert derivation, %T numerical, IR/UV/NMR/MS short notes | ★★★★☆ |
| 3 | Intermolecular Forces & PES | High (gas-law MCQs) | High | van der Waals eqn + critical constants Pc/Vc/Tc derivation, Z-vs-P | ★★★★☆ |
| 4 | Thermodynamics-I | High | **Very High** | PVγ=const, Cp−Cv=R, TVγ⁻¹, adiabatic work, max work | ★★★★★ |
| 5 | Thermodynamics-II | High | **Very High** | Gibbs–Helmholtz, Carnot efficiency, entropy of mixing, Maxwell | ★★★★★ |
| 6 | Electrochemical Cell | Medium | High | Nernst eqn, pH by H₂/calomel/quinhydrone, EMF & ΔG/ΔH, numericals | ★★★★☆ |
| 7 | Water Chemistry | High (38 MCQs) | High | BOD₅, BODₜ=Cₐ(1−e^−Kt), lime-soda/zeolite/ion-exchange, COD | ★★★★☆ |
| 8 | Corrosion | Medium | Medium | dry vs wet, electrochemical mechanism, caustic embrittlement, types | ★★★☆☆ |
| 9 | Periodic Properties | **Very High** (59 MCQs) | Medium | Slater Z*, hybridization (H=½[V+L−C+A]), isomerism, CFSE/EAN | ★★★★☆ |
| 10 | Stereochemistry | High | High | 2^(n−1)/meso counting, R-S, E-Z, Fischer/Newman, chirality | ★★★★☆ |
| 11 | Organic Reactions & Drugs | High | **Very High** | SN1/SN2/E1/E2, Markovnikov, paracetamol/aspirin synthesis | ★★★★★ |

**Bottom line:** Chapters **4, 5, 1, 11** are the Group-C engine. Chapters **9, 7, 2** are the Group-A (MCQ) engine. Do not skip 6 (numericals are easy marks).

---
---

# CHAPTER 1 — Atomic & Molecular Structure

## Core theory (plain language)
Classical mechanics fails for tiny particles (electrons). Four experiments forced "quantum" thinking: **black-body radiation, photoelectric effect, atomic spectra, dual nature of matter**. Out of this came de Broglie's wave-particle duality, Heisenberg's uncertainty, and Schrödinger's wave equation. Molecular Orbital (MO) theory then explains bonding, stability, bond order and magnetism.

## Key definitions
- **Black body:** a perfect absorber and perfect emitter of all wavelengths.
- **Photoelectric effect:** ejection of electrons from a metal when light of frequency ≥ threshold ν₀ strikes it. Work function W₀ = hν₀.
- **Threshold frequency (ν₀):** minimum frequency that just ejects an electron.
- **Heisenberg Uncertainty Principle:** Δx·Δp ≥ h/4π — position and momentum cannot both be known exactly.
- **Bond order:** ½(N_b − N_a) where N_b, N_a = electrons in bonding / antibonding MOs.
- **Diamagnetic:** all electrons paired. **Paramagnetic:** ≥1 unpaired electron.
- **CFSE:** the net lowering of d-orbital energy when ligands split them.

## Important formulas & derivations (Group-C bread-and-butter)

### (A) de Broglie equation ★★★★
Planck: E = hν.  Einstein: E = mc².  Equate: hν = mc². With ν = c/λ:
$$\boxed{\lambda = \frac{h}{mc} = \frac{h}{mv}}$$
**Numerical drill:** λ = h/(mv). Stone (m=0.1 kg, v=1 m/s) → λ ≈ 6.6×10⁻³³ m (too small → no significance). Electron (m=9.1×10⁻³¹, v=6×10⁵) → λ ≈ 1.2×10⁻⁹ m (measurable). *[WBUT 2018(ODD)]*

### (B) Schrödinger wave equation — full derivation ★★★★ *[WBUT 2018(ODD): "Prove (V − h²/8π²m ∇²)Ψ = EΨ"]*
Start with a vibrating-string wave: ψ = A sin(2πx/λ).
Differentiate twice:  d²ψ/dx² = −(4π²/λ²)ψ.
Put λ = h/mc → λ² = h²/m²c²:
$$\frac{d^2\psi}{dx^2} = -\frac{4\pi^2 m^2 c^2}{h^2}\psi = -\frac{8\pi^2 m}{h^2}\left(\tfrac{1}{2}mc^2\right)\psi = -\frac{8\pi^2 m}{h^2}(E-V)\psi$$
Extend to 3-D (∇² = ∂²/∂x²+∂²/∂y²+∂²/∂z²):
$$\nabla^2\psi + \frac{8\pi^2 m}{h^2}(E-V)\psi = 0 \;\;\Rightarrow\;\; \boxed{\left(V-\frac{h^2}{8\pi^2 m}\nabla^2\right)\psi = E\psi}$$

### (C) Magnetic moment
$$\mu = \sqrt{n(n+2)}\ \text{B.M.} \quad (n=\text{no. of unpaired }e^-)$$
e.g. n=4 → √24 ≈ 4.9 B.M.

### (D) MO configurations & bond order (MUST-MEMORIZE TABLE)
Filling order **up to N₂** (≤14 e⁻): σ1s, σ*1s, σ2s, σ*2s, **(π2px=π2py), σ2pz**, (π*2px=π*2py), σ*2pz.
**For O₂, F₂ onwards** σ2pz drops below the π2p pair: …σ2s, σ*2s, **σ2pz, (π2px=π2py)**, (π*2px=π*2py), σ*2pz.
(Cause: 2s–2p energy gap is small in B/C/N → s-p mixing raises σ2pz.)

| Species | B.O. | Magnetic | Note |
|---|---|---|---|
| H₂ | 1 | dia | |
| He₂ | 0 | — | does not exist |
| He₂⁺ | 0.5 | para | |
| B₂ | 1 | **para** (2 unpaired in π) | |
| C₂ | 2 | dia | |
| N₂ | 3 | dia | strongest |
| N₂⁺ | 2.5 | para | |
| O₂ | 2 | **para** (2 unpaired π*) | classic VBT failure |
| O₂⁺ | 2.5 | para | |
| O₂⁻ | 1.5 | para | |
| CO / CN⁻ | 3 | dia | isoelectronic with N₂ |
| NO | 2.5 | para | |

**Rules to recite:** B.O. ∝ stability ∝ bond dissociation energy ∝ 1/bond length.
**O₂ paramagnetism = the headline MO result** (VBT wrongly predicts diamagnetic). *[WBUT 2018(ODD): draw O₂ MO diagram + explain]*

### (E) CFSE
Octahedral: CFSE = (−0.4·p + 0.6·q)Δ₀ + (pairing), config t₂g^p e_g^q.
Tetrahedral: CFSE = (−0.6·p + 0.4·q)Δ_t.
**High spin if P > Δ₀ (weak ligand); low spin if Δ₀ > P (strong ligand).**
Spectrochemical (weak→strong): I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < CN⁻.
μ numerical: [CoF₆]³⁻ is high-spin d⁶ → 4 unpaired → μ=4.9 BM; [Co(NH₃)₆]³⁺ low-spin → 0 unpaired → diamagnetic.

## Tables
**p-type vs n-type semiconductor** ★★★★★ *[WBUT 2007, 2010E, 2011O, 2012O, 2014E]*

| p-type | n-type |
|---|---|
| Doped with **trivalent** (B, Al, Ga) | Doped with **pentavalent** (P, As, Sb) |
| Excess **holes** (positive) | Excess **electrons** (negative) |
| Conduction by holes | Conduction by free electrons |
| e.g. B-doped Ge | e.g. Sb-doped Ge |

Conductivity of semiconductors **increases** with temperature (more covalent bonds break → more carriers). At 0 K all semiconductors are insulators. Conductor: valence & conduction bands overlap. Insulator: large band gap.

## ASCII MO diagram (O₂)
```
   O atom         MOs (O2)            O atom
                  σ*2pz
   2p ↑↓↑ ─┐   π*2px ↑   π*2py ↑   ┌─ ↑↓↑ 2p
           ├─    σ2pz ↑↓             │
           │   π2px ↑↓   π2py ↑↓     │
   2s ↑↓ ──┤    σ*2s ↑↓              ├── ↑↓ 2s
           └─    σ2s  ↑↓ ────────────┘
   B.O.= (10-6)/2 = 2 ; two unpaired in π* ⇒ PARAMAGNETIC
```

## Common mistakes
- Forgetting that for O₂/F₂ the σ2pz sits **below** the π2p pair (order flips at O).
- Writing μ = √(n+2) instead of √(n(n+2)).
- Confusing N_b/N_a counts (count ALL electrons incl. 1s).

## Memory tricks
- "**B₂ and O₂ are the paramagnetic twins**" of period 2.
- "**Less Δ → high spin**" (weak field = high spin).
- de Broglie: "**big mass → tiny λ → no wave**" (cricket ball).

## Questions Asked Previously
- ★★★★★ p-type vs n-type semiconductor + examples *[2007, 2010E, 2011O, 2012O, 2014E, 2015E/O, 2018O]*
- ★★★☆ Draw O₂ MO diagram; explain paramagnetism / failure of VBT *[2018O]*
- ★★★☆ Prove (V − h²/8π²m∇²)Ψ = EΨ (Schrödinger) *[2018O]*
- ★★★☆ Hund's rule + Pauli + e-config of Fe; CFT postulates; de Broglie λ numerical *[2018O]*
- ★★☆ (MODEL, but extremely common) bond order/stability/magnetism of O₂±, N₂±, CO, NO, CN⁻; CFSE; aromaticity (Hückel 4n+2).

## ⏱ 5-Minute Revision Sheet — Ch 1
- **λ = h/mv** ; **Δx·Δp ≥ h/4π** ; **B.O.=½(N_b−N_a)** ; **μ=√(n(n+2)) BM**.
- MO order: up to N₂ → π2p **below** σ2pz; from O₂ → σ2pz **below** π2p.
- Para: B₂, O₂, NO, He₂⁺. Dia: C₂, N₂, CO, CN⁻.
- Schrödinger derivation: ψ=A sin(2πx/λ) → 2 derivatives → sub λ=h/mc → ∇² form.
- p-type=trivalent/holes; n-type=pentavalent/electrons. Semicon conductivity ↑ with T.
- CFSE oct = (−0.4p+0.6q)Δ₀; high spin if P>Δ₀.

---
---

# CHAPTER 2 — Spectroscopic Techniques & Applications

## Core theory
All spectroscopy = matter interacting with EM radiation. Different regions probe different transitions:

| Technique | Source/region | What transitions | What it tells you |
|---|---|---|---|
| **UV-Vis** | H-lamp(UV)/W-lamp(Vis), 190–800 nm | valence e⁻: σ→σ*, π→π*, n→π*, n→σ* | conjugation, vitamins, dissociation const; NOT functional groups |
| **IR** | heated rare-earth rod | bond vibrations (stretch/bend) | functional groups, H-bonding, cis/trans |
| **NMR** | strong magnet, radio freq | nuclear spin flip (I≠0) | number & environment of H atoms |
| **Mass** | electron bombardment | fragmentation into ions | molecular weight, formula, structure |

## Key definitions
- **Chromophore:** unsaturated group that absorbs UV/Vis (C=C, C=O, N=N…).
- **Auxochrome:** lone-pair group (−OH, −NH₂, −X) that shifts absorption when attached to a chromophore.
- **Bathochromic (red) shift:** absorption moves to **longer** λ. **Hypsochromic (blue):** shorter λ.
- **Hyperchromic:** intensity ↑. **Hypochromic:** intensity ↓.
- **Fingerprint region:** 1400–650 cm⁻¹ (IR) — unique molecular ID.
- **IR-active:** vibration must change dipole moment (so symmetric molecules like CO₂ stretch, 2,3-dimethyl-2-butene C=C are IR-transparent).
- **NMR-active:** nuclear spin I ≠ 0 (¹H yes; ¹⁶O, ¹²C no). Internal standard = **TMS**.

## Beer–Lambert Law — full derivation ★★★★ *[WBUT 2018(ODD)]*
Lambert: −dI/dx ∝ I. Beer: −dI/dx ∝ C. Combine:
$$-\frac{dI}{dx} = \alpha_v I C \;\Rightarrow\; -\frac{dI}{I} = \alpha_v C\,dx$$
Integrate I₀→I over 0→x:
$$\ln\frac{I_0}{I} = \alpha_v C x \;\Rightarrow\; \log\frac{I_0}{I} = \frac{\alpha_v}{2.303}Cx = \varepsilon C x$$
$$\boxed{A = \log\frac{I_0}{I} = \varepsilon C l}\qquad T=\frac{I}{I_0},\quad A=\log\frac1T$$
**Absorbance is linearly proportional to concentration** — that is the proof asked for.

### %Transmittance numerical (★ likely Group A/B) *[MODEL]*
ε=40, C=0.01 M, l=5 cm → A = εCl = 40×0.01×5 = 2 → I₀/I=100 → I/I₀=0.01 → **%T = 1%**.

## Energy / shift rules (frequent MCQs)
- Transition energy order: **σ→σ* > π→π* > n→π***.
- ε small (~100) for **n→π*** (symmetry forbidden); ε large (~10⁴) for **π→π*** (allowed).
- Polar solvent: **n→π* → blue (hypsochromic) shift**; **π→π* → red (bathochromic) shift**.
- More conjugation → longer λ_max (e.g. trans-stilbene > cis-stilbene; mesityl oxide > isomesityl oxide).
- E ∝ frequency ∝ wave number (and ∝ 1/λ).

## Common mistakes
- Saying CO₂ is IR-active — it is **IR-transparent** for the symmetric stretch.
- Mixing up bathochromic (longer λ) vs hypsochromic (shorter λ).
- Forgetting ε_(n→π*) is **low**, not high.

## Memory tricks
- "**Bath = Big λ**" (bathochromic = longer wavelength = red).
- "**TMS** = the NMR ruler."
- IR rule: "**No dipole change = no IR peak**."

## Questions Asked Previously
- ★★★★ Beer–Lambert law + show A ∝ C *[2018O]*
- ★★★ Fluorescence + applications *[2018O]*; trans- vs cis-stilbene λ_max *[2018O]*
- ★★☆ (MODEL) UV-Vis spectrometer (double-beam) description; IR applications & sample prep; NMR & MS applications; intra vs inter H-bond by IR; %T numerical.

## ⏱ 5-Minute Revision Sheet — Ch 2
- **A = εCl = log(I₀/I) = log(1/T)** ; derive from Lambert (−dI/dx∝I) + Beer (∝C).
- Energy: σ→σ* > π→π* > n→π*. ε: π→π* high, n→π* low.
- Polar solvent: n→π* blue, π→π* red. Conjugation → red shift.
- IR-active needs dipole change; fingerprint 1400–650 cm⁻¹; free –OH ~3600 cm⁻¹.
- NMR: I≠0, TMS standard, aromatic δ≈6–7. MS: molecular-ion m/z (ethanol=46).
- %T numerical: A=εCl → I₀/I=10^A.

---
---

# CHAPTER 3 — Intermolecular Forces & Potential Energy Surfaces

## Core theory
Weak secondary forces between molecules = **van der Waals forces** (dipole–dipole, ion–dipole, dipole–induced dipole; H-bonding is a special strong dipole–dipole). Real gases deviate from ideal because (1) molecules have finite volume, (2) they attract each other — most at **high P, low T**.

## Key definitions
- **Hydrogen bond:** weak bond between an electronegative atom and an H already bonded to N/O/F.
- **Ideal gas:** obeys PV=nRT at all T,P (no real gas is ideal).
- **Compressibility factor Z = PV/nRT.** Z=1 ideal; Z>1 less compressible (H₂, He); Z<1 more compressible.
- **Boyle temperature T_b = a/Rb:** T at which a real gas behaves ideally over a pressure range.
- **Critical temperature T_c:** above it a gas cannot be liquefied by pressure alone.
- **Excluded volume / co-volume b:** = 4× actual molecular volume.

## van der Waals equation & critical constants — derivation ★★★★ *[MODEL but core]*
$$\left(P+\frac{n^2a}{V^2}\right)(V-nb)=nRT$$
- 'a' = intermolecular attraction (high a → easy to liquefy: SO₂, NH₃, CO₂). Unit: atm·L²·mol⁻².
- 'b' = molecular size correction. Unit: L·mol⁻¹.

**Critical constants from ∂P/∂V = 0 and ∂²P/∂V² = 0:**
$$\boxed{V_c = 3b}\qquad \boxed{T_c=\frac{8a}{27Rb}}\qquad \boxed{P_c=\frac{a}{27b^2}}$$
**Critical compressibility:** Z_c = P_cV_c/RT_c = **3/8 = 0.375** (same for all vdW gases).

**Derivation skeleton (memorize the 4 steps):**
1. P = nRT/(V−nb) − an²/V². Take ∂P/∂V and ∂²P/∂V², set both = 0.
2. Combine the two equations → 2/(V−nb) = 3/V → **V = 3nb = V_c**.
3. Substitute V_c back into ∂P/∂V=0 → **T_c = 8a/27Rb**.
4. Put V_c, T_c into vdW eqn → **P_c = a/27b²**.

## Behaviour of vdW gas at limits (frequent Group-C) ★★★
- **Low P:** V large → drop a/V² and b → **PV = RT** (ideal).
- **Moderate P:** keep a/V² → Z = 1 − a/(RTV) (Z<1).
- **High P:** drop a/V² keep b → Z = 1 + Pb/RT (Z>1).
- **High T:** drop both → PV = RT (ideal).
- **H₂, He:** 'a' negligible → Z = 1 + Pb/RT > 1 always (explains why they don't dip below Z=1).

## ASCII: Z vs P
```
 Z
2|              ____ H2, He (Z>1, rises)
1|----o-------------------- ideal (Z=1)
 |    \__   __/  N2, CO2, CH4 (dip below 1 then rise)
 |       \_/
 +--------------------- P
```

## Tables
**Ideal vs Real gas**

| Ideal | Real |
|---|---|
| Obeys PV=nRT at all T,P | Obeys only at low P / high T |
| Molecular volume negligible | Not negligible |
| No intermolecular force | Forces significant at high P/low T |
| (none exists) | All real gases |

## Common mistakes
- Unit of 'a' is atm·L²·mol⁻² (people drop the square). 'b' is L·mol⁻¹.
- T_b = a/Rb (not a/bR confusion in MCQ — they are the same; watch the distractors).
- Source prints P_c as "T_c = a/27b²" `[as printed]` — it IS the critical **pressure**.

## Memory tricks
- "**3-8-27**" → V_c=3b, T_c=8a/27Rb, P_c=a/27b², Z_c=3/8.
- "**High a → easily liquefied**" (strong attraction).
- "H₂ & He: small 'a', so **Z always > 1**."

## Questions Asked Previously
- ★★☆ (MODEL, recurring) Derive critical constants P_c/V_c/T_c; vdW eqn + significance of a,b; explain real-gas behaviour at different T,P; explain H₂/He exception; compressibility factor; Boyle temperature.
- ★★ MCQ: vdW bond = fluctuating-dipole interaction *[2018O]*; ice-cube fusion = H-bond.

## ⏱ 5-Minute Revision Sheet — Ch 3
- vdW: (P + an²/V²)(V − nb) = nRT. a = attraction, b = 4×vol.
- **V_c=3b, T_c=8a/27Rb, P_c=a/27b², Z_c=3/8=0.375.**
- Z=PV/nRT: =1 ideal, >1 (H₂,He), <1 (most).
- T_b = a/Rb. Low P or high T → ideal.
- Derivation: ∂P/∂V=∂²P/∂V²=0 → V=3nb → T_c → P_c.

---
---

# CHAPTER 4 — Thermodynamics-I  ★★★★★ (heaviest derivation chapter)

> **Sign convention used by the book:** q = ΔU + W (W = work done **by** system), so ΔU = q − W.

## Core theory & definitions
- **System types:** Isolated (no matter, no energy), Closed (energy only), Open (both). A living body = open system.
- **Internal energy U:** total inherent energy; state function; (dq)_V = (dU)_V.
- **Enthalpy H = U + PV:** heat content; (dq)_P = (dH)_P.
- **Isothermal:** T constant. **Adiabatic:** q=0. **Isobaric:** P const. **Isochoric:** V const.
- **Reversible:** infinite slow steps, equilibrium throughout, **W is maximum**. **Irreversible:** one step, against constant external P, W less.
- **First law:** q = ΔU + W (energy conserved). Limitations: gives no direction, extent, spontaneity, or randomness → needs 2nd law.

## THE SIX MUST-KNOW DERIVATIONS

### (1) Cp − Cv = R for ideal gas ★★★★★ *[WBUT 2006, 2010E, 2012E]*
General: Cp − Cv = T(∂P/∂T)_V (∂V/∂T)_P.
Ideal gas PV=RT → (∂P/∂T)_V = R/V, (∂V/∂T)_P = R/P.
$$C_p-C_v = T\cdot\frac{R}{V}\cdot\frac{R}{P} = R\cdot\frac{RT}{PV} = \boxed{R}$$

### (2) PVγ = constant (adiabatic reversible) ★★★★★ *[WBUT 2006, 2008, 2010E, 2012E, 2016E]*
From TVγ⁻¹ = const and PV=RT: divide P₁V₁/P₂V₂ = T₁/T₂ and substitute →
$$\boxed{PV^{\gamma} = \text{constant}}\quad(\text{isothermal: }PV=\text{const})$$

### (3) TVγ⁻¹ = constant ★★★★ *[WBUT 2011E, 2015E]*
Adiabatic q=0 → dU = −W → nCv dT = −(nRT/V)dV. Integrate:
$$C_v\ln\frac{T_2}{T_1} = -R\ln\frac{V_2}{V_1},\quad (\gamma-1)=\frac{R}{C_v}$$
$$\Rightarrow \boxed{T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1} = \text{const}}$$

### (4) Maximum work in isothermal reversible expansion ★★★★ *[WBUT 2011E, 2012O, 2014E, 2015O]*
Expand by infinitesimal dP each step; sum the steps:
$$W = \int_{V_1}^{V_2} P\,dV = \int_{V_1}^{V_2}\frac{nRT}{V}dV = \boxed{nRT\ln\frac{V_2}{V_1}=nRT\ln\frac{P_1}{P_2}}$$
**Proof W_rev > W_irrev:** W_rev − W_irrev = (RT/P₁P₂)(P₁−P₂)² > 0 always ⇒ reversible work is maximum.

### (5) Adiabatic work W = (P₁V₁ − P₂V₂)/(γ−1) ★★★★ *[WBUT 2017E]* (also W = Cv(T₁−T₂))
$$W=\int_{V_1}^{V_2}\frac{K}{V^\gamma}dV = \frac{1}{1-\gamma}(P_2V_2-P_1V_1)=\boxed{\frac{P_1V_1-P_2V_2}{\gamma-1}}=C_v(T_1-T_2)$$

### (6) ΔU and ΔH via Maxwell relations ★★★★ *[WBUT 2016E]*
dU = nCv dT + [T(∂P/∂T)_V − P]dV. For ideal gas the bracket = P − P = 0 → **dU = nCv dT → ΔU = nCv(T₂−T₁)**.
dH = nCp dT + [−T(∂V/∂T)_P + V]dP → for ideal gas → **dH = nCp dT → ΔH = nCp(T₂−T₁)**.
(Uses Maxwell (∂S/∂V)_T=(∂P/∂T)_V and (∂S/∂P)_T=−(∂V/∂T)_P.)

**Adiabatic P–V slope is γ× steeper than isothermal** (because (dP/dV)_adia = −γP/V vs −P/V). *[2011E, 2015O]*

## Numericals you must be able to do (frequent)
- **Isothermal reversible:** W = nRT ln(P₁/P₂); ΔU=ΔH=0; q=W. (e.g. 1 mol, 0°C, 10→0.4 atm → W≈1746 cal.) *[2014E, MODEL]*
- **Free expansion into vacuum:** W=0, q=0, ΔU=0 (irreversible). *[2016E]*
- **Adiabatic:** q=0, W=Cv(T₁−T₂), ΔU=−W, use PVγ & TVγ⁻¹ to get final T,P. (N₂ example: γ=1.4, V 1→2 L → P₂=0.38 atm, T₂≈207 K.) *[MODEL]*
- **Variable P (P=10/V):** W = ∫P dV = 10 ln(V₂/V₁); q = ΔU + W. *[MODEL]*

## Tables
**Reversible vs Irreversible** | **Adiabatic vs Isothermal**

| Reversible | Irreversible |
|---|---|
| Infinite steps, slow, equilibrium | One step, fast |
| W maximum | W less |
| Variable ext. P | Constant ext. P |

| Adiabatic | Isothermal |
|---|---|
| q = 0, ΔU changes | T const, ΔU=0 (ideal) |
| PVγ = const | PV = const |

## ASCII: adiabatic steeper than isothermal
```
 P |\
   | \  adiabatic (PVγ, slope −γP/V, steeper)
   |  \__
   |     \___ isothermal (PV, slope −P/V)
   +------------- V
```

## Common mistakes
- Q4.6 in source is labelled "isothermal reversible" though it's a sudden (irreversible) expansion `[as printed]` — just follow the marking but know the difference.
- Cv(mono-atomic)=3/2 R, Cp=5/2 R, γ=5/3; diatomic Cv=5/2 R, γ=7/5.
- For ideal gas in isothermal change ΔU=ΔH=0 (people forget ΔH=0 too).

## Memory tricks
- "**Cp − Cv = R**" — recite the T·(R/V)(R/P) line.
- "**RAVI**": Reversible → Adiabatic Vγ, Isothermal PV. (PVγ adiabatic, PV isothermal.)
- "γ makes adiabatic steeper."

## Questions Asked Previously
- ★★★★★ Prove PVγ=const / TVγ⁻¹=const; Cp−Cv=R *[2006, 2008, 2010E, 2012E, 2013O, 2016E]*
- ★★★★ Max work isothermal reversible; W_rev>W_irrev; adiabatic steeper *[2011E, 2012O, 2014E, 2015O]*
- ★★★★ W_adia=(P₁V₁−P₂V₂)/(γ−1); W=Cv(T₁−T₂) *[2017E, 2015E]*
- ★★★ Define enthalpy + ΔH↔ΔU + heat at const P = ΔH *[2012O, 2013E]*; ΔU,ΔH via Maxwell *[2016E]*; limitations of 1st law / need of 2nd *[2013O]*; state 1st law *[2017O]*.

## ⏱ 5-Minute Revision Sheet — Ch 4
- **q = ΔU + W** ; **H = U + PV** ; Cp−Cv = R (recite T(R/V)(R/P)).
- Adiabatic: **PVγ=const, TVγ⁻¹=const, T^γ/P^(γ−1)=const**; q=0; W=Cv(T₁−T₂)=(P₁V₁−P₂V₂)/(γ−1).
- Isothermal rev. ideal: W = nRT ln(V₂/V₁)=nRT ln(P₁/P₂); ΔU=ΔH=0; q=W.
- Free expansion: W=0,q=0,ΔU=0.
- ΔU=nCv(T₂−T₁), ΔH=nCp(T₂−T₁). Adiabatic curve γ× steeper.
- mono: γ=5/3; diatomic: γ=7/5.

---
---

# CHAPTER 5 — Thermodynamics-II  ★★★★★

## Core theory & 2nd-law statements
- **Clausius:** heat can't flow cold→hot by itself.
- **Kelvin:** can't get work by cooling a body below the coldest surroundings.
- **Ostwald:** no perpetual-motion machine of the 2nd kind (can't convert heat fully into work).
- **Conclusion:** work obtained only when heat flows hot(source T)→cold(sink T′); only a fraction converts.

## Key definitions
- **Entropy S:** dS = dq_rev/T; measure of disorder; state function; (dS)_universe > 0 for spontaneous.
- **Helmholtz free energy A = U − TS:** available internal energy; −(ΔA)_T = W_max.
- **Gibbs free energy G = H − TS:** available enthalpy; −(ΔG)_T,P = W_non-mechanical (useful work).
- **Chemical potential μ_i = (∂(nG)/∂n_i):** partial molar Gibbs energy.

## CORE DERIVATIONS

### (1) Carnot efficiency ★★★★★ *[WBUT 2009, 2011O, 2013E, 2013O, 2016O]*
Four reversible steps (isothermal expand at T, adiabatic expand, isothermal compress at T′, adiabatic compress). Net work:
$$W = R(T-T')\ln\frac{V_2}{V_1}$$
$$\boxed{\eta=\frac{W}{Q}=\frac{T-T'}{T}=1-\frac{T'}{T}}$$
Since some heat Q′ must go to the sink, W<Q ⇒ **η < 1** (100% impossible). This is the mathematical form of the 2nd law.

### (2) Gibbs–Helmholtz equation ★★★★★ *[WBUT 2006, 2007, 2009, 2011E, 2012E, 2015O, 2016E, 2018O]*
From A=U−TS, dA=−PdV−SdT → (∂A/∂T)_V = −S. Substitute into A=U−TS:
$$A = U + T\left(\frac{\partial A}{\partial T}\right)_V \qquad\text{and}\qquad \left[\frac{\partial}{\partial T}\left(\frac{A}{T}\right)\right]_V=-\frac{U}{T^2}$$
Similarly from G=H−TS, (∂G/∂T)_P = −S:
$$\boxed{G = H + T\left(\frac{\partial G}{\partial T}\right)_P}\qquad \boxed{(\Delta G)_T=\Delta H + T\left[\frac{\partial}{\partial T}(\Delta G)\right]_P}\qquad \left[\frac{\partial}{\partial T}\left(\frac{\Delta G}{T}\right)\right]_P=-\frac{\Delta H}{T^2}$$
**Use:** evaluate ΔH from cell EMF: ΔH = nF[T(∂E/∂T) − E]; derive van't Hoff eqn.

### (3) Entropy of mixing of ideal gases, ΔS_mix > 0 ★★★ *[WBUT 2018O]*
$$\boxed{\Delta S_{mix} = -R\sum x_i \ln x_i}$$
Since each x_i < 1, ln x_i < 0 → ΔS_mix is always positive. (ΔH_mix = 0; ΔG_mix = −TΔS_mix < 0, spontaneous.)

### (4) Maxwell's relations ★★★ *[WBUT 2014O, 2017E]*
| Relation | From |
|---|---|
| (∂P/∂S)_V = −(∂T/∂V)_S | U |
| (∂V/∂S)_P = (∂T/∂P)_S | H = U+PV |
| **(∂S/∂V)_T = (∂P/∂T)_V** | A = U−TS |
| −(∂S/∂P)_T = (∂V/∂T)_P | G = H−TS |
*(Derive (∂S/∂V)_T=(∂P/∂T)_V from A: dA=−PdV−SdT, cross-differentiate, dA exact.)*

### (5) Criteria of spontaneity → ΔG < 0 ★★★ *[WBUT 2013E]*

| | Spontaneous | Equilibrium |
|---|---|---|
| (dS)_U,V | > 0 | = 0 |
| (dA)_T,V | < 0 | = 0 |
| **(dG)_T,P** | **< 0** | = 0 |

ΔG = ΔH − TΔS. Reaction spontaneous if ΔG < 0. If ΔH>0 and ΔS>0 → spontaneous at **high T** (TΔS > ΔH).

## Numericals (entropy & free energy — common Group B/C)
- **Multi-step entropy** (ice→steam): ΔS = mc ln(T₂/T₁) for heating + (mL/T) for phase change. Sum all stages. *[2014O, MODEL]*
- **Entropy of mixing:** ΔS = −R Σ x_i ln x_i (per mole). Five-mole A+B (x=0.5 each) → ΔS=5.76 J/mol·K; ΔG=−1.73 kJ. *[MODEL]*
- **ΔG isothermal reversible:** (ΔG)_T = nRT ln(V₁/V₂) = nRT ln(P₂/P₁). (1 mol, 300 K, 5→50 L → −1372 cal.) *[MODEL]*
- **Two-engine efficiency** (1000→600→300 K) totals same 0.7 as single 1000→300 K. *[MODEL]*

## Ellingham diagram (short note) *[2018O]*
ΔG° vs T plot for oxide formation; straight lines with positive slope (oxide stability ↓ as T ↑). A metal reduces the oxide of another metal lying **above** it in the diagram.

## ASCII: Carnot P–V cycle
```
 P |A
   | \ isothermal (T, expand)  Q in
   |  \B
   |   \  adiabatic
   |    C
   |    |\  isothermal (T', compress) Q' out
   |    D \
   +---------- V   ; enclosed area = net work
```

## Common mistakes
- (∂A/∂V)_T = −P and (∂A/∂T)_V = −S (signs).
- Entropy of phase change uses **mL/T** (latent heat), heating uses **mc ln(T₂/T₁)**.
- Q5.17 source typo `[as printed]`: condition for ΔH,ΔS both positive → spontaneous at **high T**.

## Memory tricks
- "**GHaHa**": G = H + T(∂G/∂T)_P.
- Maxwell from **"AS = PT, GS = VT"** (the two you actually need: A→(∂S/∂V)=(∂P/∂T); G→−(∂S/∂P)=(∂V/∂T)).
- Carnot: "**1 − T_sink/T_source**".

## Questions Asked Previously
- ★★★★★ Gibbs–Helmholtz derivation / short note *[2006, 2007, 2009, 2011E, 2012E, 2015O, 2016E, 2018O]*
- ★★★★★ Carnot cycle + efficiency + 2nd-law statement; η<1 *[2009, 2011O, 2013E, 2013O, 2016O]*
- ★★★ Define entropy & significance; significance of G / decrease in G = useful work *[2006, 2010O, 2012E, 2014E, 2015O, 2018O]*
- ★★★ ΔS_mix > 0 *[2018O]*; Maxwell relation derivation *[2014O, 2017E]*; spontaneity ΔG<0 *[2013E]*; multi-step ΔS numerical *[2014O]*; Ellingham, chemical potential *[2018O]*.

## ⏱ 5-Minute Revision Sheet — Ch 5
- **dS = dq_rev/T** ; **A = U−TS** ; **G = H−TS** ; **ΔG = ΔH − TΔS**.
- Carnot **η = 1 − T′/T < 1**.
- Gibbs–Helmholtz: **(ΔG)_T = ΔH + T[∂(ΔG)/∂T]_P** ; ΔH = nF[T(∂E/∂T) − E].
- **ΔS_mix = −R Σ x_i ln x_i > 0**.
- Maxwell (key): (∂S/∂V)_T = (∂P/∂T)_V.
- Spontaneous: dG_T,P < 0. Heating numerical: mc ln(T₂/T₁); phase: mL/T.

---
---

# CHAPTER 6 — Electrochemical Cell  ★★★★☆

## Core theory & definitions
- **Galvanic cell:** chemical energy → electrical energy (spontaneous redox). **Electrolytic cell:** electrical → chemical (non-spontaneous).
- **Anode** = oxidation = (−). **Cathode** = reduction = (+). (Mnemonic: "**An Ox, Red Cat**".)
- **Cell notation:** anode | anode soln ‖ cathode soln | cathode. Daniell: Zn | Zn²⁺ ‖ Cu²⁺ | Cu.
- **Salt bridge:** inverted U-tube of KCl/KNO₃ in agar; maintains electrical neutrality; uses ions of nearly equal transport number (~0.5).
- **Standard electrode potential E°:** vs SHE, unit activity, 1 atm, 298 K. **SHE potential = 0 V.**
- **E_cell = (E_red)₊ − (E_red)₋** (cathode minus anode reduction potential). Spontaneous if E_cell > 0.

## Nernst equation — derivation ★★★★ *[WBUT 2007, 2014E, 2016O, 2017O]*
For n₁A + n₂B ⇌ n₃D + n₄E: ΔG = ΔG° + RT ln(a_D^n₃·a_E^n₄ / a_A^n₁·a_B^n₂). With ΔG = −nFE, ΔG°=−nFE°:
$$\boxed{E = E^\circ - \frac{RT}{nF}\ln\frac{a_D^{n_3}a_E^{n_4}}{a_A^{n_1}a_B^{n_2}} = E^\circ - \frac{0.0591}{n}\log Q}\ (\text{at }25°C)$$

## EMF ↔ ΔG and ΔH ★★★ *[WBUT 2018O]*
$$\boxed{\Delta G = -nFE}\qquad \boxed{\Delta H = nF\!\left[T\!\left(\frac{\partial E}{\partial T}\right)_P - E\right]}$$
(∂E/∂T = temperature coefficient of cell.) Also **ΔG° = −nFE° = −RT ln K** → log K = nFE°/2.303RT.

## pH measurement (the recurring Group-C descriptive) ★★★★ *[WBUT 2006, 2011O, 2012E, 2014O, 2016E, 2017E, 2018O]*
**Hydrogen electrode:** Pt,H₂(P atm)|H⁺. Reduction potential
$$E = -\frac{RT}{2F}\ln P_{H_2} - \frac{2.303RT}{F}\text{pH}$$
At P=1 atm, E = −0.0591·pH → measure E → get pH.
**Calomel + Quinhydrone (practical method):** add quinhydrone (Q + H₂Q, equimolar) to test solution with Pt; couple with saturated calomel (E=0.2415 V).
$$\text{pH} = \frac{-E_{cell} + E^\circ_{Q/H_2Q} - E_{calomel}}{0.059}$$
Quinhydrone advantages: simple, quick equilibrium, small volume, no air-exclusion. Limit: fails in alkaline medium (pH>8) and with other redox systems.

## Reference electrodes
- **Calomel** Hg|Hg₂Cl₂|Cl⁻; E_red = E° − (RT/F)ln a_Cl⁻. Sat. = 0.2415 V; 1N = 0.2800; 0.1N = 0.3338. Secondary standard (easier than SHE).

## Numerical drills (★ very common, easy marks)
EMF problems: write both half-reactions as **reductions**, apply Nernst to each, then E_cell = (E_red)₊ − (E_red)₋.
- Ni|Ni²⁺(1M)‖Pb²⁺(1M)|Pb, E° −0.24/−0.13 → **E_cell = 0.11 V**. *[2015O]*
- Ag|Ag⁺(0.1)‖Zn²⁺(0.1)|Zn given → **1.53 V**. *[2016E]*
- Zn|Zn²⁺(0.01)‖Ag⁺(0.1)|Ag → **1.56 V**; W_max = −ΔG = nFE. *[MODEL]*
- pH from H₂|calomel cell: 0.445 = 0.2415 + 0.0591·pH → **pH = 3.44**. *[MODEL]*
- Equilibrium constant: ln K = nFE°/RT (e.g. 3Sn⁴⁺+2Cr → K≈2×10⁹⁰). *[MODEL]*
- Valency of ion from conc. cell: n = 0.059/E. *[MODEL]*

## Electrochemical theory of rusting *[MODEL]*
Anode: Fe → Fe²⁺ + 2e⁻. Cathode: ½O₂ + H₂O + 2e⁻ → 2OH⁻. Then Fe²⁺ oxidized to Fe³⁺ → Fe(OH)₃ / Fe₂O₃·3H₂O (rust).

## ASCII: Daniell galvanic cell
```
   e⁻ →→→ (wire) →→→ e⁻
 [Zn]                 [Cu]
 anode(−)   salt      cathode(+)
 Zn→Zn²⁺   bridge     Cu²⁺→Cu
   |  ZnSO4 ‖ CuSO4  |
```

## Common mistakes
- Always convert half-cells to **reduction** form before Nernst; sign errors otherwise.
- 0.0591/n at 25 °C (n = electrons transferred for that half-reaction).
- E_cell = cathode − anode (both as reduction potentials), never add.

## Memory tricks
- "**An Ox, Red Cat**" (Anode Oxidation, Reduction Cathode).
- "**ΔG = −nFE**" — negative because spontaneous gives positive E.
- pH: "E = −0.0591·pH" at 1 atm H₂.

## Questions Asked Previously
- ★★★★ pH measurement by H₂ / calomel / quinhydrone electrode *[2006, 2011O, 2012E, 2014O, 2016E, 2017E, 2018O]*
- ★★★ Reference electrode / calomel; Nernst electrode potential short note *[2007, 2009, 2010O, 2011E, 2011O, 2014E/O, 2015E, 2016O, 2017O]*
- ★★★ EMF↔ΔG,ΔH derivation *[2018O]*; cell reactions + EMF numericals *[2012O, 2015O, 2016E]*.
- ★★ MCQ: galvanic cell converts chemical→electrical; SHE=0 V; E_cell>0 ⇒ ΔG<0 *[various]*.

## ⏱ 5-Minute Revision Sheet — Ch 6
- An Ox(−) / Red Cat(+). **E_cell = (E_red)cathode − (E_red)anode**, spontaneous if >0.
- **Nernst:** E = E° − (0.0591/n) log Q.
- **ΔG = −nFE** ; ΔG° = −nFE° = −RT ln K ; ΔH = nF[T(∂E/∂T) − E].
- pH: E = −0.0591·pH (H₂, 1 atm). Calomel sat = 0.2415 V; SHE = 0.
- Numerical: half-cells as reductions → Nernst each → subtract.
- Rusting: Fe→Fe²⁺ (anode); ½O₂+H₂O+2e→2OH⁻ (cathode).

---
---

# CHAPTER 7 — Water Chemistry  ★★★★☆ (high MCQ + descriptive)

## Core facts (MCQ goldmine)
- Earth's water: **97% oceans, ~2% glaciers/ice, ~2% freshwater**. Uses: irrigation 30%, thermal power 50%, domestic 7%, industry ~12%.
- **DO (dissolved oxygen):** saturated 8–15 mg/L; healthy aquatic life needs 5–8 mg/L. DO **decreases** as temperature rises.
- **COD > BOD** always (chemical oxidation > biological). Higher BOD = more polluted.
- **Blue baby syndrome:** NO₂⁻ (nitrite) binds haemoglobin > O₂.
- **Limiting nutrients: C, N, P** (algal bloom). **Eutrophication:** nutrient over-enrichment → algal bloom → DO depletion → fish kill.
- Temporary hardness = Ca/Mg **bicarbonates** (removed by boiling). Permanent = Ca/Mg **chlorides/sulphates**.
- TDS: WHO max **500 mg/L** (India allows up to 1500). Sea water 30,000–35,000 mg/L.

## Key formulas & derivations

### BOD₅ (5-day test, 20 °C, dark, 300 mL bottle) ★★★
$$\boxed{\text{BOD}_5 = \frac{DO_i - DO_f}{P}},\quad P=\frac{V_{wastewater}}{300}$$
**Seeded BOD:** BOD_w = [(DO_i−DO_f) − (B_i−B_f)(1−P)]/P.

### BODₜ = Cₐ(1 − e^−Kt) — derivation ★★★ *[MODEL]*
First-order decay of oxygen demand: −dC/dt = KC → integrate → C = Cₐe^−Kt. Then BOD consumed:
$$\boxed{\text{BOD}_t = C_a(1 - e^{-Kt})}$$
(Cₐ = ultimate O₂ demand; K = rate constant, unit time⁻¹.)

### COD (dichromate method)
$$\text{COD (mg/L)} = \frac{(V_1-V_2)\times N\times 8\times 1000}{S}$$
Oxidant K₂Cr₂O₇ in 50% H₂SO₄, Ag₂SO₄ catalyst, HgSO₄ masks Cl⁻; back-titrate excess with ferrous ammonium sulphate. KMnO₄ not used (oxidizes inconsistently).

### Hardness in CaCO₃ equivalents
ppm as CaCO₃ = (mass × 50/E), E = equivalent weight of the salt.

## Water softening — the three external processes (descriptive Group-C)

| Feature | Lime-Soda | Zeolite (Permutit) | Ion-Exchange (demineralisation) |
|---|---|---|---|
| Reagent | Ca(OH)₂ + Na₂CO₃ | Na₂Ze | cation + anion resins |
| Removes | both hardnesses | Ca²⁺,Mg²⁺ (→Na⁺) | ALL ions (cations+anions) |
| Residual hardness | moderate | ~10 ppm | very low (purest) |
| Regeneration | — | NaCl wash | H₂SO₄ (cation) / NaOH (anion) |
| Output water | alkaline | soft | neutral, demineralised |

**Lime-Soda reactions:**
Carbonate: Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃↓ + 2H₂O.
Non-carbonate: CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl.
**Zeolite:** Na₂Ze + Ca(HCO₃)₂ → CaZe + 2NaHCO₃; regenerate CaZe + 2NaCl → Na₂Ze + CaCl₂.
**Ion-exchange:** 2RSO₃H + M²⁺ → (RSO₃)₂M + 2H⁺; RNH₃OH + HX → RNH₃X + H₂O.

**Desalination of TDS:** reverse osmosis (force water through semipermeable membrane at 4000–7000 kN/m²) or electrodialysis (ion-selective membranes + electric field).

## ASCII: BOD curve
```
 BOD |          ___---- ultimate Cₐ
     |      _--/
     |    _/   BODₜ = Cₐ(1 − e^−Kt)
     |  _/
     |_/
     +------------------ t (days)   (read at t=5 → BOD₅)
```

## Common mistakes
- COD > BOD (not the reverse).
- Blue baby = **nitrite NO₂⁻** (source MCQ answer flagged `[as printed]` for nitrate confusion).
- BOD test: 5 days, 20 °C, **in the dark** (stops algal photosynthesis adding O₂).

## Memory tricks
- "**CNP**" = limiting nutrients (Carbon, Nitrogen, Phosphorus).
- "**Lime-soda < Zeolite < Ion-exchange**" in purity (and cost).
- Hardness: "Temp = bicarbonate (boils off); Perm = Cl/SO₄ (permanent)."

## Questions Asked Previously
- ★★★ Hardness types + why hard water won't lather *[2018O]*
- ★★ (MODEL, frequent) Lime-soda / zeolite / ion-exchange (advantages+disadvantages); BOD definition + 5-day test; derive BODₜ=Cₐ(1−e^−Kt); COD method & why not KMnO₄; eutrophication; limiting nutrients; hydrological cycle; reverse osmosis / electrodialysis.

## ⏱ 5-Minute Revision Sheet — Ch 7
- DO sat 8–15, life 5–8 mg/L; DO ↓ as T ↑. **COD > BOD**.
- **BOD₅ = (DO_i−DO_f)/P** ; **BODₜ = Cₐ(1−e^−Kt)** (derive from −dC/dt=KC).
- Limiting nutrients **C,N,P**; eutrophication → algal bloom → DO crash. Blue baby = NO₂⁻.
- Temp hardness = Ca/Mg bicarbonate (boil); perm = Cl⁻/SO₄²⁻.
- Softening: lime-soda (Ca(OH)₂+Na₂CO₃) / zeolite (Na₂Ze) / ion-exchange (purest). TDS: RO / electrodialysis. WHO TDS 500 mg/L.

---
---

# CHAPTER 8 — Corrosion  ★★★☆☆

## Core theory & definitions
- **Corrosion:** natural destruction of metal back to oxide/hydroxide/sulphide (metals revert to lower-energy ore form).
- **Dry corrosion:** direct attack of O₂ / gases (Cl₂, SO₂) with no moisture. Sub-types: oxidation corrosion, corrosion by gases, liquid-metal corrosion.
- **Wet (electrochemical) corrosion:** in aqueous/acidic medium; separate anodic & cathodic areas. **More common.**
- **Pilling–Bedworth rule:** if oxide volume ≥ metal volume → non-porous, **protective** (Al₂O₃); if oxide volume < metal volume → porous, **non-protective** (alkali metal oxides).

## Mechanisms (Group-C / B)
**Electrochemical corrosion (rusting, O₂-absorption type):**
- Anode: Fe → Fe²⁺ + 2e⁻ (corrosion here).
- Cathode: ½O₂ + H₂O + 2e⁻ → 2OH⁻.
- Fe²⁺ + 2OH⁻ → Fe(OH)₂ → further oxidised to rust Fe₂O₃·3H₂O.

**Hydrogen-evolution type (acidic, very dilute acid):**
- Anode: Fe → Fe²⁺ + 2e⁻ ; Cathode: 2H⁺ + 2e⁻ → H₂↑.

**Caustic embrittlement (stress corrosion in boilers):** Na₂CO₃ + H₂O → 2NaOH + CO₂; NaOH seeps into stressed cracks; 2NaOH + Fe → Na₂FeO₂ + H₂; stressed iron = anode → fails.

## Factors increasing corrosion rate
Low reduction potential metal; large anode–cathode potential difference; dust/oil patches (pitting); **low hydrogen over-voltage**; absence of protective film; **low pH** (acidic); high temperature; **small anode + large cathode area** (worst case).

## Galvanic series logic
"Iron corrodes with copper but not zinc" — the metal **higher** (more active) in the series is the anode. Zn protects Fe (Zn anodic, sacrificial); Cu makes Fe corrode (Fe anodic).

## Tables
**Dry vs Wet corrosion**

| Dry | Wet |
|---|---|
| Direct gas attack, no moisture | Electrochemical, aqueous |
| Less common | More common |
| Vapours/gases | Conducting liquid |
| oxidation / gas / liquid-metal | differential metal/aeration/crevice |

## Common mistakes
- Corrosion occurs at the **anode**; rust deposits where O₂ is available (cathode region).
- Pilling–Bedworth: bigger oxide volume = protective (counter-intuitive).
- Water-line / crevice / pitting are all **differential aeration** (less O₂ region corrodes).

## Memory tricks
- "**Anode dies**" (oxidation, corrosion).
- "**Less O₂ → anode**" (differential aeration: covered/deep region corrodes).
- "Zn **saves** Fe; Cu **kills** Fe."

## Questions Asked Previously
- ★★★ Define corrosion + types (dry/wet) *[2018O]*
- ★★ (MODEL, frequent) electrochemical-corrosion mechanism (O₂-absorption & H₂-evolution); Pilling–Bedworth; caustic embrittlement; crevice/pitting/stress/water-line/microbiological corrosion; factors affecting rate; "Fe corrodes with Cu not Zn."

## ⏱ 5-Minute Revision Sheet — Ch 8
- Dry = direct gas (no water); Wet = electrochemical (common).
- Rusting: anode Fe→Fe²⁺+2e; cathode ½O₂+H₂O+2e→2OH⁻; rust = Fe₂O₃·3H₂O.
- H₂-evolution: cathode 2H⁺+2e→H₂.
- Pilling–Bedworth: oxide vol ≥ metal vol → protective.
- Worst rate: small anode + large cathode, low pH, low H₂ over-voltage.
- Differential aeration (less O₂ area = anode): water-line, crevice, pitting. Caustic embrittlement = stress corrosion in boilers.

---
---

# CHAPTER 9 — Periodic Properties  ★★★★☆ (biggest MCQ chapter: 59 MCQs)

## Core trends (recite the direction)
- **Atomic radius:** ↓ across period (Z_eff ↑), ↑ down group.
- **Ionic radius:** cation < atom < anion. Isoelectronic: more protons → smaller (Na⁺>Mg²⁺>Al³⁺; N³⁻>O²⁻>F⁻).
- **Ionization potential (IP):** ↑ across period, ↓ down group. Half/fully-filled = extra stable (IP_N > IP_O; IP_Be > IP_B).
- **Electronegativity & Electron affinity:** ↑ across, ↓ down. **EA of Cl > F** (F too small, e⁻–e⁻ repulsion). EA negative/≈0 for group 2 (full s) and group 15 (half p), positive for noble gases.

## Key definitions & tools
- **Screening (shielding) effect:** inner electrons shield outer ones; order s > p > d > f.
- **Effective nuclear charge Z\* = Z − σ (Slater's rule).** Shielding σ contributions: same group 0.35 (1s: 0.30); (n−1) shell 0.85; deeper 1.00. For d/f electrons: same group 0.35, all inner 1.00.

**Slater worked examples (★ likely numerical):**
- 4s of Fe(26): σ = 1(0.35) + 14(0.85) + 10(1) = 22.25 → **Z\* = 3.75**.
- 4s of Zn(30): σ = 1(0.35) + 18(0.85) + 10(1) = 25.65 → **Z\* = 4.35**.
- 3d of Zn(30): σ = 9(0.35) + 18(1) = 21.15 → **Z\* = 8.85**.

## Hybridization formula (very common Group-B) — H = ½[V + L − C + A]
V = valence electrons of central atom, L = monovalent ligands, C = cation charge, A = anion charge.

| Molecule | H | Hybridization | Shape |
|---|---|---|---|
| BeCl₂ | 2 | sp | linear |
| BF₃ / NO₃⁻ / CO₃²⁻ | 3 | sp² | trigonal planar |
| CH₄ / NH₄⁺ | 4 | sp³ | tetrahedral |
| PCl₅ | 5 | sp³d | trigonal bipyramidal |
| SF₆ | 6 | sp³d² | octahedral |
| IF₇ | 7 | sp³d³ | pentagonal bipyramidal |
| XeF₄ | 6 (4bp+2lp) | sp³d² | square planar |
| BrF₅ | 6 (5bp+1lp) | sp³d² | square pyramidal |

**Bond-angle / VSEPR:** lone-pair repulsion > lp-bp > bp-bp. So H₂O 104.5° < CH₄ 109.5° (2 lp on O); NH₃ 107°; NH₃>NF₃ (F pulls bp away); H₂O>H₂S>H₂Se (central atom size ↑, electronegativity ↓).

## Coordination chemistry (frequent)
- **EAN = (Z − oxidation state) + electrons donated by ligands.** e.g. [Fe(CN)₆]³⁻? Use table method.
- **Ligand strength (spectrochemical):** CN⁻ > NH₃ > H₂O > OH⁻ > Cl⁻. CN⁻ strongest, Cl⁻ weak.
- **Isomerism in complexes:** ionization ([Co(NH₃)₅Br]SO₄ vs …SO₄]Br), hydrate, coordination, **linkage** (NO₂ via N vs O), geometric (cis/trans), optical.

## Fajan's rule (covalent character ↑ when): small cation, large anion, high charges. High ionic potential (charge/radius) → more covalent → lower melting point (BeCl₂ more covalent/lower mp than BaCl₂).
## HSAB: hard acid + hard base, soft acid + soft base = stable. AgI₂⁻ stable (soft+soft); AgF₂⁻ not (soft Ag⁺ + hard F⁻).

## Common mistakes
- Slater: same-group counts as 0.35 (the electron itself excluded), (n−1)=0.85, deeper=1.0; for d-electron inner electrons all 1.0.
- EA: **Cl > F** (anomaly), not the periodic trend.
- Be–Al, Li–Mg, B–Si = diagonal relationships.

## Memory tricks
- "**Slater: 0.35 / 0.85 / 1.00**" (own group / one-below / deeper).
- "**FONClBr...**" electronegativity decreasing; F highest.
- "Lone pairs squeeze bond angles" (H₂O < CH₄).

## Questions Asked Previously
- ★★★ Slater Z\* of Fe 4s; Pauling electronegativity scale; Fajan's rule; HSAB; CFSE of Fe complexes *[2018O]*
- ★★ (MODEL, huge MCQ + short-answer pool) quantum numbers, electron configs (Cr/Cu exceptions), ionic-size ordering, IP/EA anomalies (B<Be, O<N, Cl>F), VSEPR shapes & bond angles, hybridization H=½[V+L−C+A], EAN, complex isomerism.

## ⏱ 5-Minute Revision Sheet — Ch 9
- Radius ↓ across, ↑ down. IP/EN/EA ↑ across, ↓ down. EA: **Cl>F**. IP: N>O, Be>B (half/full-filled).
- **Z\* = Z − σ** ; Slater 0.35 / 0.85 / 1.00. (Fe 4s → 3.75; Zn 4s → 4.35; Zn 3d → 8.85.)
- **H = ½[V+L−C+A]**: 2 sp, 3 sp², 4 sp³, 5 sp³d, 6 sp³d², 7 sp³d³.
- VSEPR: lp-lp > lp-bp > bp-bp. H₂O 104.5°, NH₃ 107°, CH₄ 109.5°.
- EAN = (Z−ox) + 2×(ligands). Ligand strength CN⁻>NH₃>H₂O>Cl⁻.
- Fajan: small cation+large anion+high charge → covalent. HSAB: hard-hard, soft-soft.

---
---

# CHAPTER 10 — Stereochemistry  ★★★★☆

## Core theory & definitions
- **Isomers:** same molecular formula, different arrangement.
- **Structural isomerism:** skeletal, positional, functional-group. **Metamerism:** different alkyl groups around O/N (e.g. C₄H₁₀O ethers). **Tautomerism:** keto⇌enol dynamic equilibrium.
- **Stereoisomerism:** same structure, different 3-D arrangement → optical & geometric.
- **Optically active:** rotates plane-polarized light. **d/(+)** = clockwise; **l/(−)** = anticlockwise.
- **Chiral:** non-superimposable on mirror image. Chirality needs **absence of** plane of symmetry (σ), centre of symmetry (i), and alternating axis (Sₙ).
- **Enantiomers:** non-superimposable mirror images. **Diastereomers:** stereoisomers that are NOT mirror images. **Meso:** has internal plane of symmetry → optically **inactive** despite chiral centres. **Racemic:** 1:1 d+l mixture, inactive.

## Isomer-counting rules (★ guaranteed Group-B/C) ★★★
Let n = number of chiral carbons.
- **Unsymmetrical molecule:** optical isomers = **2ⁿ**, meso = 0.
- **Symmetrical, even n:** optical = **2^(n−1)**, meso = **2^(n/2 − 1)**, total = 2^(n−1) + 2^(n/2−1).
- **Symmetrical, odd n:** optical = 2^(n−1) − 2^((n−1)/2), meso = 2^((n−1)/2).

| Example | n | Optical | Meso | Total |
|---|---|---|---|---|
| 2-bromo-3-chlorobutane (unsym) | 2 | 4 | 0 | 4 |
| Tartaric / butane-2,3-diol (sym, even) | 2 | 2 | 1 | 3 |
| 2,3,4-trihydroxyglutaric acid (sym, odd) | 3 | 2 | 2 | 4 |

## R-S (Cahn–Ingold–Prelog) ★★
1. Assign priority by atomic number (higher = higher priority): I > Br > Cl > F > O > N > C > H.
2. Tie → compare next atoms outward. Double bond → duplicate the atom.
3. View with **lowest priority (4) pointing away**; 1→2→3 clockwise = **R**, anticlockwise = **S**.

## E-Z system ★★
Compare priorities on each doubly-bonded carbon. Higher-priority groups on **same side** = **Z** (Zusammen). Opposite sides = **E** (Entgegen). E-Z is unambiguous; cis/trans is not (use E-Z for complex alkenes). Maleic acid = Z; fumaric acid = E.

## erythro / threo
**Erythro:** like groups on the **same** side (Fischer). **Threo:** like groups on **opposite** sides.

## Projection formulas (Fischer / Newman / Sawhorse)
- **Fischer:** vertical bonds go **behind** plane, horizontal bonds come **forward**; chiral C at the cross. Allowed manipulation: rotate 180° in plane only.
- **Sawhorse:** view the C–C bond diagonally; shows front/back substituents.
- **Newman:** view down the C–C axis; front C = dot in circle, back C = circle. **Staggered** (most stable, e.g. anti n-butane) vs **eclipsed** (least stable).

## ASCII: Fischer of meso-tartaric acid
```
        COOH
         |
    H ---+--- OH      ← horizontal bonds toward you
         |
    H ---+--- OH      ← internal plane of symmetry (σ)
         |            ⇒ MESO, optically inactive
        COOH
```

## Common mistakes
- Meso has chiral centres but is **optically inactive** (internal mirror plane).
- Counting: use the right formula (symmetry & even/odd n matter).
- In Fischer: horizontals are toward viewer, verticals away (don't flip 90°).

## Memory tricks
- "**2^(n−1) for symmetric, 2ⁿ for not**."
- "**E = Enemies (opposite); Z = Ze same side**."
- "**Staggered is stronger**" (most stable conformation).

## Questions Asked Previously
- ★★★ (2R,4S)/(2S,4R)-dichloropentane = enantiomers *[2018O]*; specific rotation; condition for optical activity; allene optical activity without chiral C *[2018O]*
- ★★★ Draw all stereoisomers of butane-2,3-diol (optically active?); symmetry elements *[2018O]*
- ★★ (MODEL) stereoisomers of tartaric acid / 2-bromo-3-chlorobutane / trihydroxyglutaric acid; R-S & E-Z assignments; Fischer↔Newman↔Sawhorse conversions; erythro/threo; chirality.

## ⏱ 5-Minute Revision Sheet — Ch 10
- Chiral = no σ, no i, no Sₙ. Enantiomers (mirror) vs diastereomers (not mirror) vs meso (inactive).
- **Counts:** unsym 2ⁿ; sym even 2^(n−1)+meso 2^(n/2−1); sym odd 2^(n−1)−2^((n−1)/2).
- R-S: lowest priority away, 1→2→3 clockwise=R. Priority by atomic number.
- E-Z: high-priority same side = Z; opposite = E. Maleic=Z, fumaric=E.
- Fischer: horizontals forward, verticals back. Newman staggered > eclipsed. erythro=same side, threo=opposite.

---
---

# CHAPTER 11 — Organic Reactions & Synthesis of Drug Molecules  ★★★★★

## Core species & definitions
- **Free radical:** homolytic cleavage, neutral odd-electron (CH₃•).
- **Carbocation:** heterolytic cleavage, +ve on C, sp², empty p. Stability **3° > 2° > 1°** (alkyl +I, hyperconjugation; benzyl/allyl by resonance; Ph₃C⁺ most stable).
- **Carbanion:** −ve on C with lone pair, sp³ pyramidal. Stability **methyl > 1° > 2° > 3°** (opposite of carbocation; −I stabilizes, resonance Ph₃C⁻ most stable).
- **Electrophile:** electron-deficient (H⁺, ⁺CH₃, BF₃, AlCl₃, FeCl₃). **Nucleophile:** electron-rich (OH⁻, CN⁻, NH₃, H₂O; ambident CN⁻).

## SN1 vs SN2 — the headline comparison ★★★★★ *[WBUT 2007, 2009, 2010O, 2014E, 2014O, 2015E, 2016E, 2016O]*

| Feature | SN1 | SN2 |
|---|---|---|
| Steps | 2 (slow ionization → carbocation, then fast Nu attack) | 1 (concerted, backside attack via TS) |
| Kinetics | 1st order, rate ∝ [RX] | 2nd order, rate ∝ [RX][Nu] |
| Substrate | 3° > benzyl > 2° (stable cation) | CH₃ > 1° > 2° (less hindrance) |
| Nucleophile | independent of strength | depends on strength |
| Solvent | polar protic favours | polar aprotic; less affected |
| Stereochem | **racemization** (planar cation) | **inversion** (Walden) |
| Energy profile | two humps (intermediate) | one hump (TS) |

Reactivity to SN1: **3° > benzyl > 2° > allyl > phenyl > 1°.** Reactivity to SN2: **CH₃ > 1° > 2° > 3°** (n-butyl chloride most reactive).

## E1 vs E2 — elimination ★★★ *[WBUT 2012E, 2012O, 2013O, 2015E]*

| E1 | E2 |
|---|---|
| 2 steps (carbocation then −H⁺) | 1 step, concerted |
| 1st order | 2nd order |
| via carbocation | anti-periplanar **trans elimination** |
| e.g. t-BuCl + alc.KOH → isobutene | e.g. iPrBr + alc.KOH → propene |

**Saytzeff vs Hofmann:** small base (C₂H₅O⁻) → **Saytzeff** (more substituted alkene, major, 70%). Bulky base ((CH₃)₃CO⁻) → **Hofmann** (less substituted, 72%). 2-bromobutane + alc.KOH → but-2-ene (major) + but-1-ene (minor).

## Markovnikov & anti-Markovnikov ★★★ *[WBUT 2011E, 2012O, 2013E, 2013O]*
- **Markovnikov:** negative part of HX adds to C with **fewer H** (via more stable carbocation). Propene + HBr → **2-bromopropane**.
- **Anti-Markovnikov (peroxide effect, only HBr):** radical mechanism → Br adds to C with **more H**. Propene + HBr/peroxide → **1-bromopropane**. (CF₃-CH=CH₂ gives anti-Markovnikov too because −CF₃ is electron-withdrawing.)
- HOCl, oxymercuration: follow Markovnikov (OH to fewer-H carbon).

## Aromatic electrophilic substitution ★★★ *[WBUT 2010E, 2014O, 2015O, 2016E, 2017O]*
Benzene resists addition (would lose ~36 kcal/mol resonance energy) → undergoes **substitution** (3 steps: form electrophile → σ-complex/arenium TS (slow) → restore aromaticity (fast)).
- **Nitration:** HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻; benzene + NO₂⁺ → nitrobenzene.
- **Chlorination:** Cl₂ + FeCl₃ → Cl⁺ + FeCl₄⁻ → chlorobenzene.
- Phenol nitrated more easily than benzene (−OH releases e⁻, activates ring, o/p). Nitrobenzene less reactive (−NO₂ −I deactivates). Halogens: o/p-directing **but deactivating** (−I > +R).
- Toluene + excess HNO₃/H₂SO₄ → **TNT** (2,4,6-trinitrotoluene).

## Drug synthesis (guaranteed easy marks) ★★
**Paracetamol** = N-(4-hydroxyphenyl)acetamide: 4-aminophenol + acetic anhydride →
$$4\text{-HO-C}_6\text{H}_4\text{-NH}_2 + (CH_3CO)_2O \rightarrow 4\text{-HO-C}_6\text{H}_4\text{-NHCOCH}_3 + CH_3COOH$$
(−NH₂ attacks anhydride carbonyl; both analgesic + antipyretic.)
**Aspirin** = acetylsalicylic acid: salicylic acid + acetic anhydride →
$$2\text{-HO-C}_6\text{H}_4\text{-COOH} + (CH_3CO)_2O \rightarrow \text{aspirin (2-acetoxybenzoic acid)} + CH_3COOH$$
(phenolic −OH is acetylated; antipyretic.)

## Other named reactions (sometimes asked)
- **Ozonolysis:** alkene + O₃ then Zn/H₂O → two carbonyls (propene → acetaldehyde + formaldehyde).
- **syn-hydroxylation:** cold dil. KMnO₄ (Baeyer) or OsO₄ → cis-1,2-diol (propene → propane-1,2-diol).
- **Diels–Alder:** diene + dienophile → six-membered ring.
- **Robinson annulation:** Michael addition + intramolecular aldol → fused ring.
- **NaBH₄:** reduces ketone → 2° alcohol (acetophenone → 1-phenylethanol).
- **SOCl₂:** alcohol → alkyl chloride (SNi).

## ASCII: SN1 vs SN2 energy profiles
```
 SN1 (two humps)            SN2 (one hump)
   /\    /\                    /\
  /  \  /  \                  /  \
 /    \/    \                /    \
RX    R⁺    R-Nu        Nu+RX    Nu-R+X
   (carbocation int.)      (single TS)
```

## Common mistakes
- Carbanion stability is **opposite** to carbocation (methyl > 1° > 2° > 3°).
- Peroxide (anti-Markovnikov) effect is **only for HBr**, not HF/HCl/HI.
- SN2 = inversion; SN1 = racemization (not pure inversion).
- Halogens are o/p directing **and** deactivating.

## Memory tricks
- "**1-2-3 cation up, 3-2-1 anion up**" (3° most stable cation; methyl most stable anion).
- "**Markovnikov = rich get richer**" (H to carbon already having more H).
- "**Saytzeff = small base = more substituted**."
- Aspirin = salicylic **acid**; paracetamol = amino**phenol** (both + acetic anhydride).

## Questions Asked Previously
- ★★★★★ SN1 vs SN2 (mechanism/kinetics/stereochem/energy) *[2007, 2009, 2010O, 2014E, 2014O, 2015E, 2016E, 2016O]*
- ★★★ E1/E2; Markovnikov/anti-Markovnikov; nitration mechanism *[2012E, 2012O, 2013E, 2013O, 2014O, 2015E/O, 2017E]*
- ★★★ Most stable carbocation/carbanion/alkene MCQs *[2008, 2011O, 2013O, 2015E, 2017E/O]*; phenol vs benzene nitration; nitrobenzene deactivation; halogen o/p directing *[2010E, 2016E, 2017E, 2018O]*
- ★★ (MODEL) paracetamol/aspirin synthesis; HOCl/oxymercuration/ozonolysis/KMnO₄/OsO₄; Diels–Alder; Robinson annulation; NaBH₄/SOCl₂ products.

## ⏱ 5-Minute Revision Sheet — Ch 11
- Carbocation **3°>2°>1°** (Ph₃C⁺ best); carbanion **CH₃>1°>2°>3°** (Ph₃C⁻ best).
- SN1: 2-step, 1st order, racemization, 3°. SN2: 1-step, 2nd order, inversion, CH₃/1°.
- E1 (carbocation) vs E2 (anti, trans). Saytzeff (small base) vs Hofmann (bulky base).
- Markovnikov: −ve part to fewer-H carbon. Anti-Mark (HBr+peroxide): radical, reverse.
- Nitration: NO₂⁺ electrophile. Benzene substitutes (keeps 36 kcal resonance). Halogen o/p but deactivating.
- Paracetamol = 4-aminophenol + (CH₃CO)₂O. Aspirin = salicylic acid + (CH₃CO)₂O.

---
---

# FINAL SECTION — EXAM PREDICTION (ranked)

## A. Most probable GROUP C (15-mark) long answers / derivations
Ranked by year-tag density across the whole paper:

1. **Gibbs–Helmholtz equation derivation** (Ch 5) — appears 2006,07,09,11E,12E,15O,16E,18O. *Near-certain.*
2. **Carnot cycle + efficiency η=1−T′/T + 2nd-law statement** (Ch 5) — 2009,11O,13E,13O,16O.
3. **PVγ=const & TVγ⁻¹=const (adiabatic) + Cp−Cv=R** (Ch 4) — 2006,08,10E,12E,16E.
4. **SN1 vs SN2 full comparison (mechanism/kinetics/stereochem/energy diagram)** (Ch 11) — 2007,09,10O,14E,14O,15E,16E,16O.
5. **Maximum work in isothermal reversible expansion + W_rev>W_irrev** (Ch 4) — 2011E,12O,14E,15O.
6. **pH measurement by hydrogen / calomel / quinhydrone electrode** (Ch 6) — 2006,11O,12E,14O,16E,17E,18O.
7. **Nernst equation derivation + EMF↔ΔG,ΔH** (Ch 6) — 2007,14E,16O,17O,18O.
8. **Beer–Lambert law derivation (A∝C)** (Ch 2) — 2018O + perennial.
9. **Critical constants P_c/V_c/T_c from van der Waals** (Ch 3) — recurring MODEL, high-value.
10. **Water softening (lime-soda / zeolite / ion-exchange) + BOD/COD** (Ch 7); **adiabatic work W=(P₁V₁−P₂V₂)/(γ−1)** (Ch 4, 2017E).

## B. Most probable GROUP B (3-mark) shorts
- O₂ MO diagram & paramagnetism; bond order of O₂±/N₂±/CO/NO (Ch 1).
- Maxwell relation derivation; entropy of mixing ΔS_mix>0; significance of G (Ch 5).
- ΔU/ΔH via Maxwell for ideal gas; reversible vs irreversible; 1st-law limitations (Ch 4).
- Slater Z\* calculation; hybridization H=½[V+L−C+A]; Fajan's rule; HSAB (Ch 9).
- Stereoisomer counting (2^(n−1)/meso); R-S & E-Z assignment (Ch 10).
- Markovnikov/anti-Markovnikov; E1/E2; carbocation/carbanion stability order (Ch 11).
- Calomel/reference electrode short note (Ch 6); fluorescence/IR-UV-NMR-MS notes (Ch 2).
- Pilling–Bedworth; dry vs wet corrosion; caustic embrittlement (Ch 8).

## C. Most probable MCQ-style / small NUMERICALS
- **Bond order & magnetism** (O₂⁺, N₂⁻, NO etc.) (Ch 1).
- **de Broglie λ = h/mv** (electron vs stone) (Ch 1).
- **CFSE / magnetic moment μ=√(n(n+2))** of complexes (Ch 1/9).
- **%Transmittance** from A=εCl (Ch 2).
- **Entropy change** multi-step (ice→steam) & ΔS_mix=−RΣx_i ln x_i (Ch 5).
- **Carnot efficiency** η=1−T′/T numerical (Ch 5).
- **Nernst EMF** of cells (Ni/Pb, Zn/Ag, Cu/Zn) & pH from cell EMF (Ch 6).
- **BOD₅ = (DO_i−DO_f)/P** (Ch 7).
- **Slater Z\*** (Fe, Zn) (Ch 9).
- **Stereoisomer count** 2ⁿ / 2^(n−1) (Ch 10).

## D. Most probable ORGANIC mechanisms / conversions
- SN1/SN2 mechanism with example (t-BuCl, CH₃Cl) — *certain* (Ch 11).
- Nitration / chlorination of benzene mechanism (NO₂⁺, Cl⁺) (Ch 11).
- Markovnikov & anti-Markovnikov HBr addition to propene (Ch 11).
- E1/E2 + Saytzeff/Hofmann (2-bromobutane → butenes) (Ch 11).
- **Paracetamol** (4-aminophenol + acetic anhydride) and **Aspirin** (salicylic acid + acetic anhydride) synthesis — *easy guaranteed marks* (Ch 11).
- Neopentyl rearrangement; ozonolysis; syn-hydroxylation (KMnO₄/OsO₄); NaBH₄ reduction; SOCl₂ (Ch 11).

---

**Last-night priority order:** Ch 5 derivations → Ch 4 derivations → Ch 11 SN1/SN2 + drug synthesis → Ch 6 pH/Nernst → Ch 1 MO/bond-order → Ch 2 Beer–Lambert → Ch 3 critical constants → Ch 9 Slater/hybridization → Ch 7 BOD/softening → Ch 10 counting/R-S → Ch 8 corrosion. Drill the numericals in Section C until automatic. **9+ SGPA is in reach if Group C derivations are reproduced cold.**

*End of Chemistry-I Master Note.*
