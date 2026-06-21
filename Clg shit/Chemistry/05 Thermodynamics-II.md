# Chemistry-I — Chapter 5: Thermodynamics - II

> **Source:** *Chemistry-I* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CH-88 to CH-113.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary, all multiple-choice questions/answers, and every thermodynamic formula, derivation, and numerical value below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** Where a printed answer or statement is debatable, it is flagged inline as `[as printed]`; the source's letter/text is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math and chemistry are rendered in LaTeX.

---

## Chapter at a Glance

### Second Law of Thermodynamics

The 2nd law of thermodynamics has been stated by different scientists in different forms as:

**Clausius's statement**
It is impossible for a self acting machine (unaided by any external energy or agency) to convey heat from a body at lower temperature to another body at higher temperature.

**Kelvin's statement**
It is impossible by an engine to derive mechanical work from any portion of matter by cooling it below the temperature of the coldest of the surroundings.

**Ostwald's statement**
It is impossible to construct a perpetual motion machine of the second kind, i.e. a machine which will continuously take up heat from a reservoir (thereby gradually cooling the reservoir) and convert it fully into work.

**Conclusion**
Work can be obtained from heat only when heat is allowed to flow from a body at higher temperature (source) to a body at lower temperature (sink). Under this condition, only a fraction of the supplied heat is converted into work.

### Carnot cycle

**Requirement**

i) **System:** Perfect gas, enclosed in a cylinder, fitted with weightless, frictionless movable piston.

ii) **Surroundings:**
- a) High temperature thermostat (source) — supplier of heat
- b) Low temperature thermostat (sink) — acceptor of heat
- c) Thermally insulated jacket

iii) **Process:** The process is a cyclic process.

*A P–V indicator diagram is shown with four corner points A $(P_1, V_1, T)$, B $(P_2, V_2, T)$, C $(P_3, V_3, T')$, D $(P_4, V_4, T')$ tracing the cycle. [diagram]*

The net work done by the gas in the four stage Carnot cycle,
$$W = R(T - T')\ln\frac{V_2}{V_1}$$
where $T$ and $T'$ are the temperature of the source and sink respectively and $V_1$, $V_2$ are the expansion of volume in 1st step of Carnot cycle.

The total amount of work in a 4 stage Carnot cycle, if it is expressed in terms of heat absorbed, will be
$$W = Q - Q'.$$

The efficiency of the process is given by the equation
$$\eta = \frac{W}{Q} = \frac{R(T - T')\ln\frac{V_2}{V_1}}{RT\ln\frac{V_2}{V_1}} = \frac{T - T'}{T} = 1 - \frac{T'}{T}$$
$$W = Q\times\frac{T - T'}{T}$$
This relation expresses the maximum amount of work obtained from the heat flowing from $T$ to $T'$. This is the mathematical form of the second law.

### Entropy

The heat change $dq$ and the temperature $T$ are thermodynamic quantities. Therefore, we can say that the system has a thermodynamic function whose change, measured by $\dfrac{dq}{T}$, is independent of the path of the transformation of the system. This function has been called **entropy by Clausius** and is denoted by the symbol $S$,
$$dS = \frac{dq_{rev}}{T}$$

**Characteristics**

- It is a thermodynamic function.
- Its magnitude depends only on the thermodynamic parameters of the system viz. $P$, $V$, $T$ etc. i.e. $f(\text{state})$ i.e. $f(P,V)$, $f(P,T)$, $f(V,T)$.
- The entropy change $dS$ is a perfect differential. Its value depends only on the initial and final states of the system, independent of the path of the change.
- **Absorption of heat by a system:** Hence $dq$ is $(+)ve$; $\because T$ is $(+)ve$ $\therefore dS$ is always $(+)ve$. Thus with absorption of heat, entropy of the system increases.
- **Rejection of heat by a system:** Hence $dq$ is $(-)ve$; $\because T$ is $(+)ve$ $\therefore dS$ is $(-)ve$. Thus with rejection of heat, entropy of the system decreases.
- **Reversible adiabatic process:** Hence $dq = 0$ $\therefore dS = 0$. Thus in adiabatic process, entropy of the system does not change. Hence the reversible adiabatic process is regarded as isoentropic.

### Expression of entropy of n moles of a gas

- $S = nC_V\ln T + nR\ln V + S_0$
- $S = nC_P\ln T - nR\ln P + S_0'$
- $S = nC_V\ln P + nC_P\ln V - S_0''$

Where $S_0$, $S_0'$, $S_0''$ are constants.

### Expression of $\Delta S$

- $\Delta S = nC_V\ln\dfrac{T_f}{T_i} + nR\ln\dfrac{V_f}{V_i}$
- $\Delta S = nC_P\ln\dfrac{T_f}{T_i} + nR\ln\dfrac{P_i}{P_f}$
- $\Delta S = nC_V\ln\dfrac{P_f}{P_i} + nC_P\ln\dfrac{V_f}{V_i}$
- $(\Delta S)_T = nR\ln\dfrac{V_f}{V_i} = nR\ln\dfrac{P_i}{P_f}$
- $(\Delta S)_P = nC_P\ln\dfrac{T_f}{T_i} = nC_P\ln\dfrac{V_f}{V_i}$

### Entropy change of a mixture of gases

$$\Delta S_m = -\sum x_i R\ln x_i = -R\sum x_i\ln x_i,$$
where $x_i$ is mole fraction of $i$ no. of gases.

### Free energy

When the energy of a system is not in equilibrium with the surroundings, the balance of energy is only available for doing work and this is known as **free energy**.

### Helmholtz free energy or work function (A)

The portion of the internal energy which can be utilized to carry out useful work i.e. available internal energy is called Helmholtz free energy or the function (A).

Thus,
$$\text{Internal energy} = \text{Available internal energy} + \text{unavailable internal energy}$$
$$= \text{Helmholtz free energy} + (\text{Temperature}\times\text{entropy})$$
$$U = A + TS$$
$$\Rightarrow A = U - TS.$$

**Characteristics**

- $A$ being a thermodynamic function and it is a function of state i.e. $A = f(V,T)$, $A = f'(P,V)$ etc. So its magnitude depends on the thermodynamic parameters $(P, V\ \&\ T)$.
- Change in work function $(dA)$ is a perfect differential.
- It is an extensive property i.e. its value depends on the quantity of matter involved.
- In a cyclic process change in work function is zero. This is because it is a state function i.e. $\oint dA = 0$.

**Physical Significance of A**

If a system undergoes a reversible isothermal change from one state to another, then
$$(\Delta A)_T = (\Delta U)_T - T\Delta S = (\Delta U)_T - T\times\frac{q_{rev}}{T} = -(W_{rev})_T = -(\Delta A)_T = (W_{max})_T$$
Thus, work function $A$ is such a thermodynamic function that its decrease for an isothermal reversible process represents maximum amount of available work.

**Expression of $\Delta A$**
$$(\Delta A)_T = nRT\ln\frac{V_1}{V_2} = nRT\ln\frac{P_2}{P_1}$$

### Gibb's free energy

The portion of a total energy of a thermodynamic system which can be utilized for doing useful work i.e. available total energy is known as **Gibb's free energy** or **thermodynamic potential** of the system, symbolically represented by $G$.

Thus,
$$\text{Enthalpy} = \text{Available enthalpy} + \text{unavailable enthalpy}$$
$$= \text{Gibb's free energy} + (\text{Temperature}\times\text{entropy})$$
$$H = G + TS$$
$$\Rightarrow G = H - TS$$

**Characteristics**

- $G$ is a thermodynamic function hence it is a single valued function of the state of the system, or in other words it is a function of state i.e. $G = f(P,T)$. Consequently its magnitude depends on thermodynamic parameters $(P, V$ and $T)$ and can be expressed in terms of these parameters.
- Change in thermodynamic potential, $dG$ is a perfect differential.
- It is an extensive property i.e. its value depends on the quantity of matter involved.
- In a cyclic process the net change in Gibbs free energy is zero i.e. $\oint dG = 0$.

**Physical significance of G**

If a system undergoes a reversible change under isothermal and isobaric conditions from one state to another state then, $-(\Delta G)_{T,P} = W_{nonmechanical}$.

**Expression for $\Delta G$**
$$(G_2 - G_1)_T = (\Delta G)_T = nRT\ln\frac{P_2}{P_1} = nRT\ln\frac{V_1}{V_2}$$

### Gibbs Helmholtz Equation

The equations relating work function (A) with internal energy (U) of a thermodynamic system as follows:

- $A = U + T\left(\dfrac{\partial A}{\partial T}\right)_V$
- $(\Delta A)_T = \Delta U + T\left[\dfrac{\partial}{\partial T}(\Delta A)\right]_V$
- $\left[\dfrac{\partial}{\partial T}\left(\dfrac{A}{T}\right)\right]_V = -\dfrac{U}{T^2}$
- $\left[\dfrac{\partial}{\partial T}\left(\dfrac{\Delta A}{T}\right)\right]_V = -\dfrac{\Delta U}{T^2}$

The equations relating Gibb's free energy (G) with total energy (H) of a thermodynamic system as follows:

- $G = H + T\left(\dfrac{\partial G}{\partial T}\right)_P$
- $(\Delta G)_T = \Delta H + T\left[\dfrac{\partial}{\partial T}(\Delta G)\right]_P$
- $\left[\dfrac{\partial}{\partial T}\left(\dfrac{G}{T}\right)\right]_P = -\dfrac{H}{T^2}$
- $\left[\dfrac{\partial}{\partial T}\left(\dfrac{\Delta G}{T}\right)\right]_P = -\dfrac{\Delta H}{T^2}$

**Use of Gibbs Helmholtz equation:**
Gibbs Helmholtz equation has been used to evaluate $\Delta H$ from e.m.f. of cell.
$$\Delta H = n\mathfrak{F}\left\{T\left(\frac{\partial E}{\partial T}\right) - E\right\}$$

The relation $\Delta H = \Delta G - T\dfrac{\partial}{\partial T}(\Delta G)$ has been used for derivation of Van't Hoff equation i.e.
$$\frac{d\ln k}{dT} = \frac{\Delta H}{RT^2}$$
A knowledge of $\Delta G$ would enable us to ascertain $\Delta H$ of a process.

### Maxwell's Relation

- $\left(\dfrac{\partial P}{\partial S}\right)_V = -\left(\dfrac{\partial T}{\partial V}\right)_S$ — Derived from $dq = dU + dw$
- $\left(\dfrac{\partial V}{\partial S}\right)_P = \left(\dfrac{\partial T}{\partial P}\right)_S$ — Derived from $H = U + PV$
- $\left(\dfrac{\partial S}{\partial V}\right)_T = \left(\dfrac{\partial P}{\partial T}\right)_V$ — Derived from $A = U - TS$
- $-\left(\dfrac{\partial S}{\partial P}\right)_T = \left(\dfrac{\partial V}{\partial T}\right)_P$ — Derived from $G = H - TS$

### Thermodynamic criteria for a spontaneous reaction & an equilibrium reaction

| | Spontaneous process | Equilibrium process |
|---|---|---|
| $(dS_{system})_{U,V}$ | $> 0$ | $= 0$ |
| $(dA)_{T,V}$ | $< 0$ | $= 0$ |
| $(dG)_{T,P}$ | $< 0$ | $= 0$ |

---

## Multiple Choice Type Questions

**1.1.** Which of the following is true always for a spontaneous change at temperatures? *[WBUT 2007, 2014(EVEN)]*
a) $\Delta H > 0$ and $\Delta S < 0$   b) $\Delta H < 0$ and $\Delta S < 0$   c) $\Delta H < 0$ and $\Delta S > 0$   d) $\Delta H > 0$ and $\Delta S > 0$
**Answer: (c)**

**1.2.** For an ideal gas undergoing free expansion *[WBUT 2008, 2014(EVEN)]*
a) $\Delta T = 0$ and $\Delta S > 0$   b) $\Delta T = 0$ and $\Delta S = 0$   c) $\Delta T < 0$ and $\Delta S > 0$   d) $\Delta T < 0$ and $\Delta S = 0$
**Answer: (a)**

**1.3.** Which of the following is not correct? *[WBUT 2011(EVEN), 2016(ODD)]*
a) $(dG/dT)_P = -S$   b) $(dA/dV)_T = P$   c) $(dH/dT)_P = V$   d) $(dG/dP)_T = V$
**Answer: (b), (c)**

**1.4.** Entropy of the universe is *[WBUT 2012(ODD)]*
a) decreasing   b) increasing   c) remaining constant   d) dependent on conditions
**Answer: (b)**

**1.5.** During isothermal mixing of ideal gases, entropy of the surrounding *[WBUT 2013(ODD)]*
a) remains unchanged   b) increases   c) decreases   d) cannot be predicted
**Answer: (c)**

**1.6.** During mixing, entropy *[WBUT 2016(ODD)]*
a) increases   b) decreases   c) remains unchanged   d) cannot be predicted
**Answer: (a)**

**1.7.** The expression for change of Gibbs free energy $(\Delta G)$ is *[WBUT 2017(ODD)]*
a) $\Delta U - T\Delta S$   b) $\Delta U - P\Delta V$   c) $\Delta H - T\Delta S$   d) $\Delta A - T\Delta S$
**Answer: (c)**

**1.8.** In a cyclic process $\oint dS$ has value *[MODEL QUESTION]*
a) one   b) two   c) three   d) zero
**Answer: (d)**

**1.9.** Available internal energy is called *[MODEL QUESTION]*
a) enthalpy   b) entropy   c) Helmholtz free energy   d) Gibbs free energy
**Answer: (c)**

**1.10.** Free energy change for a reversible process is *[MODEL QUESTION]*
a) equal to zero   b) greater than zero   c) less than zero   d) none of these
**Answer: (a)**

**1.11.** In irreversible isothermal process, entropy of the universe *[MODEL QUESTION]*
a) increases   b) decreases   c) remains constant   d) none of these
**Answer: (a)**

**1.12.** In irreversible cyclic process, entropy of the universe is *[MODEL QUESTION]*
a) negative   b) positive   c) zero   d) none of these
**Answer: (b)**

**1.13.** If no heat is rejected to the sink then, $W_{max}$ for reversible Carnot cycle is *[MODEL QUESTION]*
a) infinity   b) one   c) zero   d) none of these
**Answer: (c)**

**1.14.** Entropy change is *[MODEL QUESTION]*
a) dependent on the path of the transformation   b) independent of the path of the transformation   c) sometimes dependent, sometimes independent of the path of the transformation   d) none of these
**Answer: (b)**

**1.15.** Reversible adiabatic process is regarded as *[MODEL QUESTION]*
a) isothermal   b) isochoric   c) isobaric   d) isoentropic
**Answer: (d)**

**1.16.** $G = H - TS$ is the expression for *[MODEL QUESTION]*
a) Gibbs free energy   b) Helmholtz free energy   c) Clausius Clapeyron Equation   d) Gibbs Duhem equation
**Answer: (a)**

**1.17.** Thermodynamic equilibrium means *[MODEL QUESTION]*
a) only mechanical equilibrium   b) only thermal equilibrium   c) only chemical equilibrium   d) all of these
**Answer: (d)**

**1.18.** In natural processes, the entropy *[MODEL QUESTION]*
a) increases   b) decreases   c) remains constant   d) none of these
**Answer: (a)**

**1.19.** By leaving the door of an electric refrigerator open, the temperature of the kitchen *[MODEL QUESTION]*
a) increases   b) decreases   c) remains same   d) none of these
**Answer: (a)**

**1.20.** We can devise an engine whose efficiency is always *[MODEL QUESTION]*
a) greater than   b) less than   c) equal to   d) some times greater and some times less than the efficiency of Carnot engine
**Answer: (b)**

**1.21.** The term chemical potential was first introduced by *[MODEL QUESTION]*
a) Maxwell   b) Duhem   c) Gibbs   d) Einstein
**Answer: (c)**

**1.22.** The efficiency of a heat engine is always *[MODEL QUESTION]*
a) $< 1$   b) $> 1$   c) zero   d) $1$
**Answer: (a)**

**1.24.** In a solution, the activity of the solvent is *[MODEL QUESTION]* `[as printed: source skips 1.23]`
a) equal to unity   b) equal to fugacity   c) always less than unity   d) always greater than unity
**Answer: (a)**

---

## Short and Long Answer Type Questions

**2.1. Define the term Gibbs free energy and derive the Gibbs-Helmholtz equation relating the change in Gibbs free energy $(\Delta G)$ and the temperature coefficient of $\Delta G$.** *[WBUT 2006, 2011(EVEN)]*
**OR, Define free-energy (G).** *[WBUT 2012(EVEN)]*

**1st Part:**
The portion of a total energy of a thermodynamic system which can be utilized for doing useful work i.e. available total energy is known as **Gibb's free energy** or **thermodynamic potential** of the system symbolically represented by $G$.

Thus,
$$\text{Enthalpy} = \text{Available enthalpy} + \text{unavailable enthalpy}$$
$$= \text{Gibb's free energy} + (\text{Temperature}\times\text{entropy})$$
$$H = G + TS$$
$$\text{or, } G = H - TS$$

**2nd Part:**
If a system changes reversibly from one state to another, the change in Gibbs free energy
$$\Delta G = \Delta H - T\Delta S - S\Delta T$$
If changes occur at constant temperature
$$(\Delta G)_T = \Delta H - T\Delta S = \Delta H - T(S_f - S_i)$$
$$= \Delta H - T\left[-\left(\frac{\partial G_f}{\partial T}\right)_P - \left\{-\left(\frac{\partial G_i}{\partial T}\right)_P\right\}\right] = \Delta H + T\left[\frac{\partial}{\partial T}\left\{(G_f)_P - (G_i)_P\right\}\right]$$
$$(\Delta G)_P = \Delta H + T\left[\frac{\partial}{\partial T}(\Delta G)\right]_P$$
where $(\partial G_f)_P$ and $(\partial G_i)_P$ are the small changes in Gibbs free energy for an infinitesimal change in temperature $\partial T$ at constant pressure for final and initial state. $S_f$ and $S_i$ are the entropies of the system at final and initial states.

**2.2. What is entropy? What is its physical significance? Explain what you understand by internal energy of a system.** *[WBUT 2006, 2012(EVEN)]*

**1st Part:**
The heat change $dq$ and the temperature $T$ are thermodynamic quantities. Therefore, we can say that the system has a thermodynamic function whose change, measured by $\dfrac{dq}{T}$, is independent of the path of the transformation of the system. This function has been called entropy by Clausius and is denoted by the symbol $S$. Its change $dS$ is measured by the ratio of the reversible heat change and the temperature at which the heat change occurs i.e. $dS = \dfrac{dq_{rev}}{T}$.

**2nd Part:**
The state of equilibrium really means a state of maximum disorder or chaos. For example, if we put a quantity of yellowish green chlorine gas at a corner of the floor of the room, the gas though heavy would spread in all directions until it would be most chaotically distributed in the entire room and the equilibrium would be reached. Again if we arrange a number of red and black balls on a tray in a particular pattern and then shake the tray the balls would mix up in the most disorderly fashion. These are all natural processes and the reverse process is not possible in nature. Moreover, these processes which always have a tendency to attain the state of equilibrium are irreversible and thus leads to entropy increase. That means when the system approaches to equilibrium, the greater is the disorder and irreversibility and when equilibrium is reached, it has the maximum disorder. The entropy also goes on increasing and reaches its maximum value at the equilibrium state.

Thus, entropy is a measure of the disorder of the system or it may be called a measure of the mixedupness of the system.

**3rd Part:**
Internal energy of a thermodynamic system is the inherent energy possessed by the system within itself and it is denoted by the symbol $U$. Origin of internal energy comes from the molecular movement of the working substances of the system. Thus in a gas, the kinetic energy of the random moving molecules are responsible for the internal energy of the whole gas.

Example:
(i) zinc and copper sulphate in a Daniel Cell react producing electrical energy.
(ii) a liquid freezes into solid yielding heat energy.

**2.3. Deduce Gibbs-Helmholtz equation in any of its standard forms.** *[WBUT 2007, 2009, 2012(EVEN), 2015(ODD), 2016(EVEN)]*
**OR, Write short note on Gibbs-Helmholtz equation.** *[WBUT 2018(ODD)]*

The equations relating work function (A) with internal energy (U) of a thermodynamic system and Gibb's free energy (G) with total energy (H) of the system as well as respective change for a process are known as Gibbs Helmholtz equation.

Thus internal energy = Available internal energy + unavailable internal energy
$$= \text{Helmholtz free energy} + \text{Temperature}\times\text{entropy}$$
$$U = A + TS$$
$$\text{or } A = U - TS \qquad\ldots(1)$$

Whenever a system undergoes an infinitesimal reversible change, the corresponding change in work function
$$dA = dU - TdS - SdT = dU - dq - SdT = -PdV - SdT$$
At constant volume i.e. $dV = 0$
$$\therefore (dA)_V = -SdT$$
$$\text{or, } \left(\frac{\partial A}{\partial T}\right)_V = -S$$
$$\text{or, } S = -\left(\frac{\partial A}{\partial T}\right)_V$$
Substituting the value of $S$ in equation (1) we get
$$A = U - T\left(-\left(\frac{\partial A}{\partial T}\right)_V\right)$$
$$A = U + T\left(\frac{\partial A}{\partial T}\right)_V \qquad\ldots(2)$$
This equation which co-relates work function (Helmholtz free energy) with internal energy is commonly known as Gibb's Helmholtz equation. Again if the system changes reversibly from one state to another state, the change in work function
$$\Delta A = \Delta U - T\Delta S - S\Delta T$$
At constant temperature
$$(\Delta A)_T = \Delta U - T(S_f - S_i)$$
$$= \Delta U - T\left[-\left(\frac{\partial A_f}{\partial T}\right)_V - \left\{-\left(\frac{\partial A_i}{\partial T}\right)_V\right\}\right] = \Delta U + T\left[\frac{\partial}{\partial T}\left\{(A_f)_V - (A_i)_V\right\}\right]$$
$$(\Delta A)_V = \Delta U + T\left[\frac{\partial}{\partial T}(\Delta A)\right]_V \qquad\ldots(3)$$
where $\partial A_i$ and $\partial A_f$ are the changes in Helmholtz free energy at constant volume for an infinitesimal change in temperature for the initial and final state respectively. $S_f$ and $S_i$ are the entropies of the system at final and initial states.

Again we know
$$\left[\frac{\partial}{\partial T}\left(\frac{A}{T}\right)\right]_V = \frac{1}{T}\left(\frac{\partial A}{\partial T}\right)_V + A\left(-\frac{1}{T^2}\right) = \frac{1}{T}(-S) + \left(-\frac{A}{T^2}\right) = -\left(\frac{A + TS}{T^2}\right) = -\frac{U}{T^2}$$
$$\therefore \left[\frac{\partial}{\partial T}\left(\frac{A}{T}\right)\right]_V = -\frac{U}{T^2} \qquad\ldots(4)$$
Thus the above equation is another form of Gibbs Helmholtz equation.

$$\left[\frac{\partial}{\partial T}\left(\frac{\Delta A}{T}\right)\right]_V = \left[\frac{\partial}{\partial T}\left(\frac{A_f - A_i}{T}\right)\right]_V = \left[\frac{\partial}{\partial T}\left(\frac{A_f}{T}\right)\right]_V - \left[\frac{\partial}{\partial T}\left(\frac{A_i}{T}\right)\right]_V$$
$$= -\left[\frac{U_f}{T^2}\right] - \left[-\frac{U_i}{T^2}\right] = -\left[\frac{U_f - U_i}{T^2}\right] = -\frac{\Delta U}{T^2}$$
$$\therefore \left[\frac{\partial}{\partial T}\left(\frac{\Delta A}{T}\right)\right]_V = -\frac{\Delta U}{T^2} \qquad\ldots(5)$$

Similarly,
$$\text{Total energy} = \text{available total energy} + \text{unavailable total energy}$$
$$= \text{Gibb's free energy} + \text{Temperature}\times\text{entropy}$$
$$H = G + TS$$
$$\therefore G = H - TS \qquad\ldots(6)$$
$$\text{Again } G = (U + PV) - TS \qquad\ldots 6(a)$$
Whenever a system undergoes an infinitesimal change then corresponding change in Gibbs free energy is given by
$$dG = dU + PdV + VdP - TdS - SdT = dq + VdP - dq - SdT$$
$$\therefore dG = VdP - SdT$$
For an isobaric process i.e. $dP = 0$
$$(dG)_P = -SdT$$
$$\text{or, } \left(\frac{\partial G}{\partial T}\right)_P = -S$$
$$\text{or, } S = -\left(\frac{\partial G}{\partial T}\right)_P$$
Substituting this value of $S$ in equation (6) we get
$$G = H - T\left[-\left(\frac{\partial G}{\partial T}\right)_P\right]$$
$$\text{or, } G = H + T\left(\frac{\partial G}{\partial T}\right)_P \qquad\ldots(7)$$
Again if a system changes reversibly from one state to another, the change in Gibbs free energy $\Delta G = \Delta H - T\Delta S - S\Delta T$. If changes occur at constant temperature
$$(\Delta G)_T = \Delta H - T\Delta S = \Delta H - T(S_f - S_i)$$
$$= \Delta H - T\left[-\left(\frac{\partial G_f}{\partial T}\right)_P - \left\{-\left(\frac{\partial G_i}{\partial T}\right)_P\right\}\right] = \Delta H + T\left[\frac{\partial}{\partial T}\left\{(G_f)_P - (G_i)_P\right\}\right]$$
$$(\Delta G)_T = \Delta H + T\left[\frac{\partial}{\partial T}(\Delta G)\right]_P \qquad\ldots(8)$$
where $(\partial G_f)_P$ and $(\partial G_i)_P$ are the small changes in Gibbs free energy for an infinitesimal change in temperature $\partial T$ at constant pressure for final and initial state. $S_f$ and $S_i$ are the entropies of the system at final and initial states.

Again, we know
$$\left[\frac{\partial}{\partial T}\left(\frac{G}{T}\right)\right]_P = \frac{1}{T}\left(\frac{\partial G}{\partial T}\right)_P + G\left(-\frac{1}{T^2}\right) = -\frac{S}{T} - \frac{G}{T^2} = -\left(\frac{G + TS}{T^2}\right) = -\frac{H}{T^2}$$
$$\therefore \left[\frac{\partial}{\partial T}\left(\frac{G}{T}\right)\right]_P = -\frac{H}{T^2} \qquad\ldots(9)$$
Again
$$\frac{\partial}{\partial T}\left(\frac{\Delta G}{T}\right)_P = \left[\frac{\partial}{\partial T}\left(\frac{G_f - G_i}{T}\right)\right]_P = \left[\frac{\partial}{\partial T}\left(\frac{G_f}{T}\right)\right]_P - \left[\frac{\partial}{\partial T}\left(\frac{G_i}{T}\right)\right]_P$$
$$= -\left(\frac{H_f}{T^2}\right) - \left(-\frac{H_i}{T^2}\right) = -\left[\frac{H_f - H_i}{T^2}\right] = -\frac{\Delta H}{T^2}$$
$$\therefore \left[\frac{\partial}{\partial T}\left(\frac{\Delta G}{T}\right)\right]_P = -\frac{\Delta H}{T^2} \qquad\ldots(10)$$
Thus, the equations 2, 3, 4, 5, 7, 8, 9, 10 are known as Gibb's Helmholtz equation.

**2.4. Using Carnot cycle, prove that the efficiency of a heat engine is always less than one.** *[WBUT 2009, 2013(ODD)]*

No heat is rejected to the sink i.e. $Q' = 0$
$$W = Q - Q'$$
$$Q - Q' = Q\frac{T - T'}{T}$$
$$\text{or, } 1 - \frac{Q'}{Q} = 1 - \frac{T'}{T}$$
$$\text{or, } \frac{Q'}{Q} = \frac{T'}{T}$$
$$\text{or, } Q = Q'\frac{T}{T'}$$
$$\therefore W_{max} = Q\times\frac{T - T'}{T} = \frac{Q'}{T'}\times T\times\frac{T - T'}{T} = \frac{Q'}{T'}(T - T') = 0$$
i.e. no work can be obtained.

Hence to have work, heat must be supplied to the system from the source and moreover some heat must be rejected to the sink by the system i.e. heat must flow from source to sink.

Since to have work, some heat $(Q')$ must be rejected to the sink
$$\therefore Q - Q' \text{ must be } < Q$$
$$W < Q$$
$$\frac{Q - Q'}{Q} < 1$$
$$\therefore \eta < 1$$
i.e. 100% conversion is not feasible. Thus only a fractional quantity of supplied heat can be converted into work and this fraction is $\dfrac{T - T'}{T}$.

**2.5. State the significance of Gibbs free energy.** *[WBUT 2010(ODD), 2012(EVEN)]*
**OR, Show that the decrease in Gibb's free energy at constant temperature and pressure is equal to the total work over and above the mechanical work.** *[WBUT 2014(EVEN), 2015(ODD)]*
**OR, What is the physical significance of free energy change $(\Delta G)$?** *[WBUT 2018(ODD)]*

If a system undergoes a reversible change under isothermal and isobaric conditions from state I to state II then,
$$(\Delta G)_{T,P} = (\Delta H)_{T,P} - T\Delta S \qquad [\because H = U + PV;\ (\Delta H)_{T,P} = \Delta U + P\Delta V]$$
$$= \Delta U + P\Delta V - T\Delta S \qquad [\because \Delta S = \frac{q_{rev}}{T};\ q_{rev} = T\Delta S]$$
$$= \Delta U - q_{rev} + P\Delta V$$
$$= -W + P\Delta V \qquad [\text{From 1st law } q = \Delta U + W;\ \Delta U - q = -W]$$
$$\text{or, } -(\Delta G)_{T,P} = W_{Total} - W_{mechanical}$$
$$= W_{nonmechanical}$$
(where $P\Delta V$ is the mechanical work involved in the system itself during transformation and $W$ denotes maximum total work output). $W_{nonmechanical}$ is the work received for any external use exclusive of the mechanical work e.g. electrical work.

**2.6. What is a Carnot cycle? Obtain the expression for the efficiency of a reversible Carnot engine and starting from this expression state an appropriate statement of the second law of thermodynamics.** *[WBUT 2011(ODD), 2013(EVEN), 2013(ODD), 2016(ODD)]*

**1st Part:**
The brilliant French engineer Sadi Carnot in 1824 developed a cyclic process and explained clearly how and to what extent work is obtained from heat.

**2nd Part:**

**Requirement**

i) **System:** Perfect gas, enclosed in a cylinder, fitted with weightless, frictionless movable piston.

ii) **Surroundings:**
- a) High temperature thermostat (source) — supplier of heat
- b) Low temperature thermostat (sink) — acceptor of heat
- c) Thermally insulated jacket

iii) **Process:** The process is a cyclic process.

**Indicator Diagram:** *A P–V indicator diagram with corner points A $(P_1, V_1, T)$, B $(P_2, V_2, T)$, C $(P_3, V_3, T')$, D $(P_4, V_4, T')$; the enclosed area ABCD represents the work obtained. [diagram]*

At the start, the working substance is kept in the source till it attains the temperature of the source. Thus the temperature of the system becomes $T$. Let the corresponding pressure and volume be $P_1$ and $V_1$. This condition of the system is represented by the point A in the diagram. Then the system is subjected to the following operations, also represented in the P–V indicator diagram. The total enclosed area (ABCD) represents the work obtained.

**Operation I**
The cylinder having 1 mole of gas and the gas is allowed to expand isothermally and reversibly from the volume $V_1$ to the volume $V_2$.
The heat absorbed by the gas = $Q$ (say)
The work done by the gas $W = RT\ln\dfrac{V_2}{V_1}$
Since the gas is ideal, we know, $Q = RT\ln\dfrac{V_2}{V_1}$

**Operation II**
The cylinder is next taken out of the thermostat and kept in a thermally insulated enclosure. The gas is allowed to expand further from volume $V_2$ to volume $V_3$ adiabatically and reversibly until the temperature falls down to that of the sink $T'$.
The heat absorbed by the gas = Nil.
The work done by the gas $= C_v(T - T')$ ($C_v$ is the heat capacity of the gas).

**Operation III**
The cylinder is then placed in a thermostat at temperature $T'$ (sink); the gas is compressed isothermally and reversibly until the volume changes to $V_4$ from $V_3$.
The heat given out by gas = $Q'$ (say)
The work done by the gas $= RT'\ln\dfrac{V_4}{V_3}$
[Since $V_4$ is smaller than $V_3$, the work is negative which means work is done on the gas]

**Operation IV**
The cylinder is now thermally isolated as in operation II. The gas is then adiabatically and reversibly compressed to its initial volume $V_1$ and its original temperature $T$ is attained. The gas thus comes back to its initial state.
The heat absorbed by the gas = Nil
The work done by the gas $= C_v(T' - T)$

The net work done by the gas in the complete cycle,
$$W = RT\ln\frac{V_2}{V_1} + C_v(T - T') + RT'\ln\frac{V_4}{V_3} + C_v(T' - T) = RT\ln\frac{V_2}{V_1} + RT'\ln\frac{V_4}{V_3}$$
But considering the adiabatic changes in operation II and IV we get
$$TV_2^{\gamma-1} = T'V_3^{\gamma-1} \qquad\ldots(1)$$
$$TV_1^{\gamma-1} = T'V_4^{\gamma-1} \qquad\ldots(2)$$
Dividing $\dfrac{V_2}{V_1} = \dfrac{V_3}{V_4}$
$$\therefore W = RT\ln\frac{V_2}{V_1} - RT'\ln\frac{V_2}{V_1} = R(T - T')\ln\frac{V_2}{V_1}$$
The efficiency of the process is given by the equation
$$\eta = \frac{W}{Q} = \frac{R(T - T')\ln\frac{V_2}{V_1}}{RT\ln\frac{V_2}{V_1}} = \frac{T - T'}{T} = 1 - \frac{T'}{T}$$
$$W = Q\times\frac{T - T'}{T}$$
This relation expresses the maximum amount of work obtained from the heat flowing from $T$ to $T'$. This is the mathematical form of the second law.

Since to have work, some heat $(Q')$ must be rejected to the sink
$$\therefore Q - Q' \text{ must be } < Q$$
$$W < Q$$
$$\frac{Q - Q'}{Q} < 1$$
$$\therefore \eta < 1$$
i.e. 100% conversion is not feasible. Thus only a fractional quantity of supplied heat can be converted into work and this fraction is $\dfrac{T - T'}{T}$. For these reasons, the Carnot cycle is regarded as the mathematical statement of 2nd Law of thermodynamics.

**2.7. Prove that for criteria of spontaneity of $\Delta G$ should be negative.** *[WBUT 2013(EVEN)]*

We have
$$dS_{universe} = dS_{system} + dS_{surroundings}$$
$$= dS_{system} - \frac{dQ}{T} \quad [\text{If the surrounding supplies } dQ \text{ amount of heat to the system at temperature } T \text{ reversibly.}]$$
$$= dS_{system} - \frac{du + dw}{T} = dS_{system} - \frac{du}{T} - \frac{dw}{T}$$
$$= dS_{system} - \frac{du}{T} - \frac{PdV}{T} \quad [\text{If only mechanical work is involved}]$$
We have
$$A = U - TS$$
$$dA = dU - TdS - SdT$$
$$\text{or, } TdS - dU = -dA - SdT$$
$$\Rightarrow dS - \frac{dU}{T} = -\frac{dA}{T} - S\frac{dT}{T}$$
$$\Rightarrow dS_{universe} = -\frac{dA}{T} - \frac{SdT}{T} - \frac{PdV}{T}$$
Again we know
$$G = H - TS = U + PV - TS = A + PV$$
$$\therefore dG = dA + PdV + VdP$$
$$\Rightarrow -dA - PdV = VdP - dG$$
$$\Rightarrow -\frac{dA}{T} - \frac{PdV}{T} = \frac{VdP}{T} - \frac{dG}{T}$$
$$\Rightarrow dS_{universe} + \frac{SdT}{T} = \frac{VdP}{T} - \frac{dG}{T}$$
$$\Rightarrow dS_{universe} = -\frac{dG}{T} + \frac{VdP}{T} - \frac{SdT}{T}$$
Hence, $dS_{universe} = -\left(\dfrac{\partial G}{T}\right)_{P,T}$.

But for a real process to occur, the change must be irreversible (i.e. spontaneous) since for irreversible process $dS_{universe} > 0$. Thus from above equation, $\left(\dfrac{\partial G}{T}\right)_{P,T} < 0$ i.e. Gibbs free energy diminishes.

**2.8. If 50 gm ice, initially at $-5°C$ is heated to water vapour finally at $127°C$, calculate entropy change for the entire process. (specific heat of ice and water vapour are 9.0 and 8 cal/mole respectively).** *[WBUT 2014(ODD)]* `[as printed: question states "427°C" in some impressions but the worked solution uses 127°C]`

Entropy change for the transformation of ice at $-5°C$ to ice at $0°C$
$$\Delta S_1 = mc\ln\frac{T_2}{T_1} = 50\times 9\ln\frac{273}{268} = 8.028\ cal/K$$
Entropy change for the transformation of ice at $0°C$ to water at $0°C$
$$\Delta S_2 = \frac{18\times 80}{273} = \frac{1440}{273} = 5.275\ cal/K$$
Entropy change for the transformation of water at $0°C$ to water at $127°C$
$$\Delta S_3 = mc\ln\frac{T_2}{T_1} = 50\times 8\ln\frac{400}{273} = 152.74\ cal/K$$
So total $\Delta S = \Delta S_1 + \Delta S_2 + \Delta S_3 = 8.028 + 5.275 + 152.74 = 166.043\ cal/K$.

**2.9. Derive Maxwell's relation $\left(\dfrac{\partial S}{\partial V}\right)_T = \left(\dfrac{\partial P}{\partial T}\right)_V$.** *[WBUT 2014(ODD)]*

According to the definition of work function
$$U = A + TS$$
$$A = U - TS$$
If the system undergoes infinitesimal change, then
$$dA = dU - TdS - SdT = dU - dq - SdT = -PdV - SdT \qquad [\text{as printed}]$$

**Corollary 1**
For isochoric process i.e. $dV = 0$
$$(dA)_V = -SdT$$
$$\text{or, } \left(\frac{\partial A}{\partial T}\right)_V = -S$$
Second differentiation of $A$ with respect to $V$ at constant $T$ gives
$$\frac{\partial^2 A}{\partial V\,\partial T} = -\left(\frac{\partial S}{\partial V}\right)_T$$

**Corollary 2**
For isothermal process i.e. $dT = 0$
$$(dA)_T = -PdV \qquad \left(\frac{\partial A}{\partial V}\right)_T = -P$$
Second differentiation of $A$ with respect to $T$ at constant $V$ gives, $\dfrac{\partial^2 A}{\partial T\,\partial V} = -\left(\dfrac{\partial P}{\partial T}\right)_V$.
Since $dA$ is a perfect differential, $\dfrac{\partial^2 A}{\partial V\,\partial T} = \dfrac{\partial^2 A}{\partial T\,\partial V}$
$$\therefore -\left(\frac{\partial S}{\partial V}\right)_T = -\left(\frac{\partial P}{\partial T}\right)_V$$
$$\text{or, } \left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$$

**2.10. Write down the applications of Gibbs Helmholtz equation.** *[WBUT 2015(EVEN)]*

(i) It is used to evaluate $\Delta H$ from e.m.f. of a cell.
(ii) It is used to derive Van't Hoff equation.
(iii) A knowledge of $\Delta G$ would enable us to ascertain $\Delta H$ of a process.

**2.11. a) Discuss in brief the second law of thermodynamics. b) Write down the Maxwell's relations.** *[WBUT 2017(EVEN)]*

Refer to Chapter at a Glance.

**2.12. Explain the term chemical potential.** *[WBUT 2018(ODD)]*

The partial molar Gibbs free energy is termed the chemical potential of species $i$ in the mixture. It is symbolically represented by $\mu$. Mathematically it is expressed as
$$\mu_i = \frac{\partial(nG)}{\partial n_i}\bigg|_{T,P,n_j}$$
$$\text{or, } \mu_i = \overline{G_i}$$

**2.13. Show that, entropy of mixing of ideal gases $\Delta S_{mix} > 0$.** *[WBUT 2018(ODD)]*

Two or more gases when brought in contact would immediately diffuse into one another and mix up irreversibly. Such a spontaneous irreversible process would of course lead to an entropy increase.

Let $n_A$ and $n_B$ gm moles of two gases A and B be mixed at a constant temperature $T$ and under pressure $P$. Before mixing, their entropy are
$$S_A = n_A\left[C_{P_A}\ln T - R\ln P + S_A^0\right]$$
$$S_B = n_B\left[C_{P_B}\ln T - R\ln P + S_B^0\right]$$
After mixing the total pressure $P$ remaining constant $(P)$, the partial pressures are $P_A$ and $P_B$; such that $P = P_A + P_B$. The entropies of the two components in the mixture are:
$$S_{A(m)} = n_A\left[C_{P_A}\ln T - R\ln P_A + S_A^0\right]$$
$$S_{B(m)} = n_B\left[C_{P_B}\ln T - R\ln P_B + S_B^0\right]$$
The entropy change due to mixing
$$\Delta S_m = S_{A(m)} + S_{B(m)} - S_A - S_B$$
$$= n_A C_{P_A}\ln T - n_A R\ln P_A + n_A S_A^0 + n_B C_{P_B}\ln T - n_B R\ln P_B + n_B S_B^0$$
$$\quad - n_A C_{P_A}\ln T + n_A R\ln P - n_A S_A^0 - n_B C_{P_B}\ln T + n_B R\ln P - n_B S_B^0$$
$$\Delta S_m = -n_A R\ln P_A - n_B R\ln P_B + n_A R\ln P + n_B R\ln P$$
$$= -n_A R\ln\frac{P_A}{P} - n_B R\ln\frac{P_B}{P}$$
The total amount of mixture $n = n_A + n_B$ moles.
Hence the mole fraction $x_A = \dfrac{n_A}{n}$ and $x_B = \dfrac{n_B}{n}$.
Now $\dfrac{P_A}{P} = x_A$ and $\dfrac{P_B}{P} = x_B$.
Hence the entropy change $\Delta S = -n_A R\ln x_A - n_B R\ln x_B$.
Dividing both side by $(n_A + n_B)$ we get
$$\frac{\Delta S}{(n_A + n_B)} = \overline{\Delta S} = -\frac{n_A}{n_A + n_B}R\ln x_A - \frac{n_B}{n_A + n_B}R\ln x_B$$
$$\therefore \text{Entropy change per mole} = \overline{\Delta S} = -x_A R\ln x_A - x_B R\ln x_B$$
In general mixing for any number of gases
$$\Delta S_m = -\sum x_i R\ln x_i = -R\sum x_i\ln x_i$$
The fraction $x_i$ is less than unity in all cases, the logarithm is negative and thus $\Delta S_m$ is always positive $(\Delta S_{mix} > 0)$.

**2.14. Write short note on Features of Ellingham diagram.** *[WBUT 2018(ODD)]*

Graphical representation of $\Delta G^0$ vs. $T$ plot in the formation of oxides of elements is known as Ellingham Diagram. Ellingham diagram of oxides has the following features:

(i) $\Delta G^0$ vs. $T$ curve for metal to metal oxide shows positive slope because the free energy change decreases with temperature.
(ii) Curves in the Ellingham diagram for the formation of metallic oxide are straight line with positive slope, unless there is a change of state.
(iii) With increase in temperature a point is reached where the curve crosses the $\Delta G = 0$ line. Below this temperature, the free energy of formation of the metal oxide is negative and the oxide is stable. Above this temperature, the free energy of formation of the metal oxide is positive and the oxide is unstable. Thus the oxide decomposes to metal and oxygen.
(iv) Stability of the metal oxides decreases with increase in temperature.
(v) In different extraction processes of metal, one metal is used to reduce the oxides of other metal. It can be explained from Ellingham diagram that a metal will reduce the oxide of other metal which lies above it in the diagram.

**2.15. What is the physical significance of Helmholtz free energy?** *[MODEL QUESTION]*

Refer to Chapter at a Glance.

**2.16. If the process is completely adiabatic then how much work is obtained from a reversible Carnot engine?** *[MODEL QUESTION]*

If the process be completely adiabatic i.e. no heat is absorbed. $\therefore Q = 0$ then $W_{max} = 0$ $\therefore$ No work can be obtained.

**2.17. For a reaction $\Delta H$ and $\Delta S$ both are positive. Under what condition will the reaction be spontaneous?** *[MODEL QUESTION]*

For a reaction $\Delta H = (-)ve$ and $\Delta S = (+)ve$ `[as printed]`
$$\Delta G = \Delta H - T\Delta S$$
At high temperature $T\Delta S > \Delta H$, then $\Delta G = (-)ve$ and the reaction will be spontaneous.

**2.18. Compare the thermodynamic efficiencies to be expected (a) When an engine operates between 1000°K and 300°K, (b) When an engine operates between 1000°K and 600°K and waste heat is passed to another engine working between 600°K and 300°K.** *[MODEL QUESTION]*

Case (a) Efficiency $\eta_1 = \dfrac{1000 - 300}{1000} = 0.7$

Case (b) $\dfrac{W_1}{Q_1} = \dfrac{1000 - 600}{1000} = 0.4$ $\therefore W_1 = 0.4Q_1$

So waste heat $Q_2 = Q_1 - 0.4Q_1 = 0.6Q_1$ then the heat is passed to another which does work $W_2$ and
$$\frac{W_2}{0.6Q_1} = \frac{600 - 300}{600} = 0.5$$
So, $W_2 = 0.3Q_1$
Total work $= W_1 + W_2 = 0.4Q_1 + 0.3Q_1 = 0.7Q_1$
So total efficiency $= \dfrac{0.7Q_1}{Q_1} = 0.7$ i.e. same with the efficiency of the engine working between 1000°K and 300°K. `[as printed: text writes "1000°C and 800°K"]`

**2.19. Calculate $\Delta S$ per litre of solution when pure $N_2$, $H_2$ and $NH_3$ gases are mixed to form a solution having the final composition 15% $N_2$; 55% $H_2$ and 30% $NH_3$ (all at S.T.P.).** *[MODEL QUESTION]*

This is a case of free mixing and we know that for free mixing
$$\Delta S = -\sum X_i R\ln X_i/\text{mole. Here } X_i = \text{Mole fraction.}$$
In the given problem $X_{N_2} = 0.15$; $X_{H_2} = 0.55$ and $X_{NH_3} = 0.30$
So $\Delta S = -0.15\times 1.987\ln 0.15 - 0.55\times 1.987\ln 0.55 - 0.30\times 1.987\ln 0.30$
or, $\Delta S = (0.565 + 0.653 + 0.718)\ Cal/mole$
or, $\Delta S = 1.936\ cal/mole$
As they are at S.T.P. 1 mole $\equiv$ 22.4 litre
So, $\Delta S/\text{litre} = 0.086\ Cal/deg/litre$.

**2.20. A mole of steam is condensed at 100°C, the water is cooled to 0°C and frozen to ice. What is the difference in entropies of the steam and ice? The heats of vaporization and fusion are 540 cal.gm⁻¹ and 80 cal.gm⁻¹ respectively. Use the average heat capacity of liquid water as 1 cal.gm⁻¹.degree⁻¹.** *[MODEL QUESTION]*

Entropy change during condensation of steam
$$\Delta S_1 = -\frac{18\times 540}{373}\ Cal/° = -26.06\ Cal/°$$
Entropy change during cooling of water from 100°C to 0°C
$$\Delta S_2 = 18\times 1\ln\frac{273}{373}\ Cal/° = -5.62\ Cal/°$$
Entropy change during freezing of water at 0°C
$$\Delta S_3 = -\frac{18\times 80}{273}\ cal/° = -5.27\ cal/°$$
So that entropy change $= -26.06 - 5.62 - 5.27 = -36.95\ Cal/°$
Hence difference in entropy between steam and ice $= 36.95\ cal/°$.

**2.21. 5 gm-moles of water initially at 27°C are converted to a final state of vapour at 227°C, the conversion being effected under 1 atmospheric pressure. Assuming the vapour to behave ideally, compute the total change in entropy.** [heat capacity of water = 1 cal/gm; heat capacity of water vapour = 0.40 cal/gm, latent heat of vaporization of water = 540 Cal/gm] *[MODEL QUESTION]*

Entropy change during heating 5 gm moles (i.e. 90 gm) water from 27°C (i.e. 300°A) to 100°C (i.e. 373°A) is
$$\Delta S_1 = 90\times 1\ln\frac{373}{300} = 19.60\ Cal/°$$
Entropy change during vaporization of 5 moles water at 373°A is
$$\Delta S_2 = \frac{90\times 540}{373} = 130.29\ Cal/°$$
And entropy change during heating 5 moles vapour from 100°C (i.e. 373°A) to 227°C (i.e. 500°A) is
$$\Delta S_3 = 90\times 0.40\ln\frac{500}{373} = 10.55\ Cal/°$$
So total change $\Delta S = \Delta S_1 + \Delta S_2 + \Delta S_3 = (19.6 + 130.29 + 10.55)\ \text{e.u.} = 160.44\ Cal/°$.

**2.22. Five moles of each A and B are mixed together at one atm. pressure and at 300 K. Calculate $\Delta G$, $\Delta H$ and $\Delta S$ of mixing assuming that A and B form ideal mixture.** *[MODEL QUESTION]*

$n_A = n_B = 5$ moles.
Thus mole fraction of A, $x_A = \dfrac{n_A}{n_A + n_B} = \dfrac{5}{10} = 0.5$
and mole fraction of B, $x_B = \dfrac{n_B}{n_A + n_B} = \dfrac{5}{10} = 0.5$
Thus
$$\Delta S_{mix} = -x_A R\ln x_A - x_B R\ln x_B = -0.5\times 8.314\ln 0.5 - 0.5\times 8.314\ln 0.5$$
$$= 2.881 + 2.881 = 5.762\ J\,mol^{-1}K^{-1}$$
$\Delta H_{mix}$ for ideal gas $= 0$
Thus
$$\Delta G_{mix} = \Delta H_{mix} - T\Delta S_{mix} = 0 - 300\times 5.762 = -1728.6\ J/mol/K = -1.728\ KJ\,mol^{-1}K^{-1}$$

**2.23. Calculate the free energy change which occurs when one mole of an ideal gas expands reversibly and isothermally at 300K from an initial volume of 5 litre to 50 litres.** *[MODEL QUESTION]*

In isothermal reversible process, the change in Gibbs free energy
$$(\Delta G)_T = nRT\ln\frac{V_1}{V_2} = 1\times 1.987\times 300\ln\frac{5}{50}$$
$$= -1.987\times 300\times 2.302 = -1372.22\ Cal$$

**2.24. Show that $dq$ is not a perfect differential but $\dfrac{dq}{T}$ is a perfect differential.** *[MODEL QUESTION]*

Suppose one mole of a perfect gas undergoes a reversible expansion from volume $V_1$ to volume $V_2$ when the temperature changes from $T_1$ to $T_2$. Then from the first law
$$dq = dU + dw$$
$$\text{Or, } dq = dU + PdV$$
$$\text{or, } \int_I^{II} dq = \int_I^{II} dU + \int_{V_1}^{V_2} PdV = \int_{T_1}^{T_2} C_v dT + \int_{V_1}^{V_2} RTd\ln V = C_v(T_2 - T_1) + \int_{V_1}^{V_2} RTd\ln V$$
The integral on the right hand side $\int RTd\ln V$ can not be evaluated unless we know the relation between $T$ and $V$. If $T$ be constant (i.e. isothermal change) the integral will have one value, and if $T$ changes during the process, the integral will have different values.

Thus, the magnitude of $\int_I^{II} dq$ depends on the way the expansion is carried out. Hence, $dq$ is not a perfect differential.

Now dividing the equation by $T$, we have
$$\int_I^{II}\frac{dq}{T} = \int_{T_1}^{T_2} C_v\frac{dT}{T} + \int_{V_1}^{V_2} Rd\ln V = C_v\ln\frac{T_2}{T_1} + R\ln\frac{V_2}{V_1}$$
That is, the $\int\dfrac{dq}{T}$ for a given change from state I to state II can be evaluated without any reference to the path of transformation. Thus, $\int\dfrac{dq}{T}$ is independent of the way the change is carried out. Hence, $\dfrac{dq}{T}$ is a perfect differential.

**2.25. Prove that entropy change $(dS)$ is independent of the path of the transformation.** *[MODEL QUESTION]*

*A P–V diagram is shown with AB and CD as isothermal stages (heat $dq_1$ at $T_1$, heat $dq_2$ at $T_2$) and BC, DA as adiabatic stages. [diagram]*

Here AB and CD are isothermal stages at temperature $T_1$ and $T_2$; BC and DA adiabatic stages. Let $dq_1$ be the heat supplied to the working system at $T_1$ and $dq_2$ be the heat rejected by it to the sink at $T_2$. All steps are reversible. We know in a Carnot cycle,
$$\frac{dq_1 - dq_2}{dq_1} = \frac{T_1 - T_2}{T_1}$$
$$\text{or, } \frac{dq_1}{T_1} = \frac{dq_2}{T_2} \qquad (dq_2 \text{ is negative as it is rejected by the system})$$
Now let us confine our attention only to the change of the system from the point A to the point C and attempt to find out the ratio of the heat change to the temperature at which the thermal change occurs.

We can proceed from A to C either along ABC or along ADC.
Along the path ABC, we have the isothermal AB, when heat change $dq_1$ takes place at $T_1$, followed by adiabatic change BC having no heat change.
Hence, $\dfrac{\text{Heat change}}{\text{Temperature}} = \dfrac{dq_1}{T_1} + 0 = \dfrac{dq_1}{T_1}$

Along the path ADC, the adiabatic AD involves no thermal change; but along the isothermal DC, heat absorbed would be $dq_2$ at temperature $T_2$.
Hence, $\dfrac{\text{Heat change}}{\text{Temperature}} = 0 + \dfrac{dq_2}{T_2} = \dfrac{dq_2}{T_2}$

Since from reversible Carnot cycle, we have, $\dfrac{dq_1}{T_1} = \dfrac{dq_2}{T_2}$

Thus the ratio of heat change to the temperature i.e. $\dfrac{dq}{T}$ is the same whatever path may be followed by the system in its reversible change. Hence $\dfrac{dq_{rev}}{T}$ is regarded as a perfect differential.

The entropy change $(dS)$ is measured by the ratio of the reversible heat change and the temperature at which the heat change occurs i.e. $dS = \dfrac{dq_{rev}}{T}$.

Since, $\dfrac{dq_{rev}}{T}$ is independent of the path of the transformation, thus, entropy change $(dS)$ is also independent of the path of the transformation.

**2.26. Prove that $(\Delta G)_T = (\Delta A)_T$.** *[MODEL QUESTION]*

For ideal gas $\int dG_T = \int\dfrac{nRT}{P}dP$
$$G_T = nRT\ln P + n\overline{G_0}$$
Again integrating within limits we get,
$$\int_{G_1}^{G_2}(dG)_T = \int_{P_1}^{P_2}\frac{nRT}{P}dP$$
$$(G_2 - G_1)_T = nRT\ln\frac{P_2}{P_1} = nRT\ln\frac{V_1}{V_2}$$
$$= -W_{max} = (\Delta A)_T$$
Hence, $(\Delta G)_T = (\Delta A)_T$.

---

*End of Chapter 5: Thermodynamics - II.*
