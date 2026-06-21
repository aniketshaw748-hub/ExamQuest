# Chemistry-I — Chapter 4: Thermodynamics - I

> **Source:** *Chemistry-I* organizer (MAKAUT/WBUT solved papers, Popular Publications), book pages CH-62 to CH-87.
> **Fidelity note for downstream readers (incl. LLMs):**
> - Concept summary, all multiple-choice questions/answers, and all worked solutions below were **verified against the scanned page images**, not just OCR.
> - **Answers are transcribed exactly as printed in the source.** A few printed answers/labels are debatable by standard physical chemistry (flagged inline as `[as printed]`); the source's letter/value is kept authoritative.
> - In worked solutions, any step illegible on the scan is marked `[illegible in source]` rather than guessed. Math is rendered in LaTeX.
> - The book uses the sign convention $q = \Delta U + W$ (i.e. $W$ is work done **by** the system), so $\Delta U = q - W$.

---

## Chapter at a Glance

### Thermodynamic System

- A **system** is defined as an object or a quantity of matter, i.e. a part of the universe. The system is enclosed by a **boundary** which separates it from the rest of the universe. All other parts of the universe, outside the boundary of the system, are called the **surroundings**.

- The boundary walls of a system may be of two types:
  i) **the diathermal walls:** permit the transmission of heat through them; example — a liquid contained in a glass vessel.
  ii) **the adiabatic walls:** do not allow any heat to enter into or to come out of the system; example — a liquid contained in a silver mirrored double walled Dewar flask.

- When a system undergoes a change, one or more of its thermodynamic variables would also change. If as a result of a series of changes, the system returns to its initial state, its thermodynamic parameters would also return to their original values. Such a process is called a **cyclic process**.

- If a change takes place in such a way that the temperature remains constant throughout, it is called an **isothermal process**.

- On the other hand, if the change occurring in a thermally insulated system which does not permit heat exchange with the surroundings, is called an **adiabatic process**.

Thermodynamic Systems are:
- **(a) Isolated System:** Isolated system means a system when it is incapable of exchanging either matter or energy with the surroundings.
- **(b) Closed system:** Closed system means a system where exchange of energy with the surrounding is possible but no matter exchange is possible.
- **(c) Open system:** Open system means a system which is capable of exchanging both energy and matter with the surrounding.

### First Law of thermodynamics

The relation between heat and work is the origin of first law of thermodynamics. This law may be stated as — Whenever heat is obtained from work the amount of heat obtained is proportional to the work done, or conversely if heat is transferred to work, there is proportionality between work obtained and heat disappeared. However, this law is derived from experiment.

Mathematical form of 1st law of thermodynamics is $q = \Delta U + W$, where $q$ is the heat absorbed by the system, $W$ is the work done by the system and $\Delta U$ is the change in internal energy.

Therefore, Heat absorbed is equal to change in internal energy plus work done.

Thus differential form of 1st law of thermodynamics is $dq = dU + dW$.

### Internal energy

Internal energy of a thermodynamic system is the inherent energy possessed by the system within itself and it is denoted by the symbol $U$.

- It is an extensive property.
- Change in internal energy is $\Delta U = U_B - U_A$, where $U_A$ and $U_B$ are the internal energy of a thermodynamic system in state $A$ and $B$ respectively.
- Internal energy of a thermodynamic system is a state function. Thus, $U = f(\text{State})$
  $$U = f(P,V);\quad U = f(V,T);\quad U = f(P,T)$$
- As internal energy is a state function, thus change in internal energy is a perfect differential. Let say, $U = f(P,T)$
  - $U$ is a single valued function depending on the instantaneous values of $P$ and $T$.
  - $dU$ between any two specified points or states is independent of the path of transformation.
  - $dU$ for a complete cyclic process is equal to zero.
  - $\dfrac{\partial^2 U}{\partial P\,\partial T} = \dfrac{\partial^2 U}{\partial T\,\partial P}$ i.e. the second differential of $U$ with respect to $T$ and $P$ carried out in either order become equal to one another.
  - $U$ is a function of two independent variables $P$ and $T$ i.e.
    $$\Delta U = \left(\frac{\partial U}{\partial P}\right)_T \Delta P + \left(\frac{\partial U}{\partial T}\right)_P \Delta T$$

- **Physical significance of internal energy:** $(dq)_V = (dU)_V$. Thus the function of internal energy is such that its change is equal to the heat absorbed by the system at constant volume.

- Mathematical expression of change in internal energy is
  $$dU = nC_v\,dT + \left[T\left(\frac{\partial P}{\partial T}\right)_V - P\right]dV$$
- The change in internal energy for $n$ mole of ideal gas is $\Delta U = nC_v(T_2 - T_1)$.
- The change in internal energy for $n$ mole of ideal gas under isothermal ($dT = 0$) condition is $(\Delta U)_T = nC_v \times 0 = 0$.

### Enthalpy or Heat Content (H)

Enthalpy of any thermodynamic system is the measure of the total energy of the system. In case of a gas, the product of pressure ($P$) and volume ($V$) is expressed as energy. The sum of these two energy terms associated with the system namely the internal energy ($U$) and $PV$ energy is known as enthalpy or heat content.

$$\text{Heat content} = \text{Internal energy} + (\text{Pressure} \times \text{Volume})\ \text{energy}$$
$$H = U + PV$$

- **Physical significance of enthalpy** is $(dH)_P = (dq)_P$. Thus the function enthalpy is such that its change is equal to the heat absorbed by the system at constant pressure.
- Mathematical expression of change in enthalpy is
  $$dH = nC_p\,dT + \left[-T\left(\frac{\partial V}{\partial T}\right)_P + V\right]dP$$
- The change in enthalpy for $n$ mole of ideal gas is $\Delta H = nC_p(T_2 - T_1)$.
- The change in enthalpy for $n$ mole of ideal gas under isothermal ($dT = 0$) condition is $(\Delta H)_T = nC_p \times 0 = 0$.

### Heat Capacity (C)

Molar heat capacity ($C$) is the amount of heat required to raise the temperature of 1 mole of the substance through $1°K$.

Mathematically $C = \dfrac{dq}{dT}$

Where $dq$ is the amount of heat required to raise the temperature $dT$ for 1 mole of the substance.

- Unit of heat capacity is $\text{Cal degree}^{-1}\text{ mole}^{-1}$.
- There are two types of heat capacity:
  - Molar heat capacity at constant pressure ($C_p$)
    $$C_p = \left(\frac{\partial q}{\partial T}\right)_P = \left(\frac{\partial H}{\partial T}\right)_P,\quad \text{at constant pressure } dH_P = dq_P$$
  - Molar heat capacity at constant volume ($C_v$)
    $$C_v = \left(\frac{\partial q}{\partial T}\right)_V = \left(\frac{\partial U}{\partial T}\right)_V,\quad \text{at constant volume } dq_V = dU_V$$
- The general expression of $C_p - C_v$ is $C_p - C_v = T\left(\dfrac{\partial P}{\partial T}\right)_V\left(\dfrac{\partial V}{\partial T}\right)_P$.
- For 1 mole of ideal gas $C_p - C_v = R$.

### Reversible process

If the system and surroundings are restored to their initial conditions after a cyclic change, then the change is termed as reversible process.

- Work done is maximum in reversible process.
- The process occurs through an infinite number of successive stages.
- The change takes place against a variable external pressure.
- In reversible process $W_{sys} = 0$. `[as printed]`

- The expression of work done in isothermal reversible process for ideal gas is
  $$(W_f)_{rev} = nRT\ln\frac{V_2}{V_1} = nRT\ln\frac{P_1}{P_2}$$
  where $V_1$ and $V_2$ are the initial and final volume respectively and $P_1$ and $P_2$ are the initial and final pressure respectively.
- In isothermal reversible process for ideal gas $(Q_f)_{rev} = (W_f)_{rev}$.

### Irreversible process

If the system and surroundings are not restored to their initial conditions after a cyclic change, then the change is termed as irreversible process.

- Work done in an irreversible process is less than reversible process.
- This process occurs through one step.
- The change takes place against a constant external pressure.
- In irreversible process $W_{cy} \neq 0$.

- The expression of work done in isothermal irreversible process for ideal gas is
  $$(W_f)_{irrev} = nRT\left(1 - \frac{P_2}{P_1}\right)$$
  where $P_1$ and $P_2$ are the initial and final pressure respectively.
- In isothermal irreversible process for ideal gas $(Q_f)_{irrev} = (W_f)_{irrev}$.
- The expression of work done in adiabatic process is $W_{adia} = \dfrac{1}{\gamma - 1}(P_1V_1 - P_2V_2)$.
- The relation between temperature and volume in adiabatic reversible process is $TV^{\gamma-1} = \text{Constant}$.
- The relation between pressure and volume in adiabatic reversible process is $PV^{\gamma} = \text{Constant}$.
- The relation between temperature and pressure in adiabatic reversible process is $\dfrac{T^{\gamma}}{P^{\gamma-1}} = \text{Constant}$.

### Joule's Experiment

**Objective:** The experiment was carried out to find out the internal energy change of a gas.

**Experimental procedure:** Two bulbs are connected through a stop-cock at the middle were kept immersed in the water of a bath. Initially one bulb was filled with a gas (ideal gas) and another bulb was practically evacuated. When thermal equilibrium was established, the stop-cock was opened. The gas was readily passed into the other bulb. Therefore, the gas expands against a zero pressure.

**Conclusion:** The behaviour of ideal gases may then be summarized as:
$$\left[\frac{\partial(PV)}{\partial P}\right]_T = 0$$
$$\left(\frac{\partial U}{\partial V}\right)_T = \left(\frac{\partial U}{\partial P}\right)_T = 0$$
$$\left(\frac{\partial H}{\partial P}\right)_T = \left(\frac{\partial H}{\partial V}\right)_T = 0$$

---

## Multiple Choice Type Questions

**1.1.** A living system is thermodynamically an example of — *[WBUT 2008, 2012(EVEN), 2014(ODD), 2018(ODD)]*
a) an isolated system   b) a closed system   c) an adiabatically closed system   d) an open system
**Answer: (d)**

**1.2.** The sum of internal energy and pressure volume product is called — *[WBUT 2012(ODD), 2014(EVEN)]*
a) entropy   b) enthalpy   c) heat supplied   d) none of these
**Answer: (b)**

**1.3.** If a system interacts with the surrounding by exchanging energy only, then it is called as — *[WBUT 2013(EVEN), 2017(EVEN)]*
a) open system   b) closed system   c) isolated system   d) none of these
**Answer: (b)**

**1.4.** Standard molar enthalpy of formation of oxygen is — *[WBUT 2013(ODD)]*
a) $> 0\ \text{kJmol}^{-1}$   b) $= 0\ \text{kJmol}^{-1}$   c) $< 0\ \text{kJmol}^{-1}$   d) none of these
**Answer: (b)**

**1.5.** In an isothermal process the quantity which remains constant — *[WBUT 2014(EVEN)]*
a) Heat   b) Temperature   c) Volume   d) none of these
**Answer: (b)**

**1.6.** In P-V diagram for expression of work done for expansion of volume in reversible process — *[WBUT 2015(ODD)]*
a) slope of adiabatic $>$ slope of isothermal
b) slope of adiabatic $<$ slope of isothermal
c) slope of adiabatic $=$ slope of isothermal
d) none of these
**Answer: (a)**

**1.7.** The $\Delta H$ for a reaction is independent of — *[WBUT 2016(EVEN)]*
a) $T$   b) the initial and the final states   c) the path followed   d) $\Delta V$
**Answer: (c)** `[as printed]`

**1.8.** Two moles of an ideal gas expand spontaneously into a vacuum. The work done is — *[WBUT 2016(EVEN)]*
a) 2J   b) 4J   c) infinity   d) zero
**Answer: (d)**

**1.9.** Ideal gas rushing into vacuum is — *[MODEL QUESTION]*
a) Reversible Process   b) Irreversible Process   c) Sometimes reversible and sometimes irreversible   d) None of the above
**Answer: (b)**

**1.10.** The total change in internal energy in a cyclic process is — *[MODEL QUESTION]*
a) Zero   b) infinity   c) Negative   d) cannot be said
**Answer: (a)**

**1.11.** Work — *[MODEL QUESTION]*
a) Depends on path   b) does not depend on the path   c) sometimes depend on the path   d) None of these
**Answer: (a)**

**1.12.** Which is an extensive property? — *[MODEL QUESTION]*
a) Temperature   b) volume   c) density   d) pressure
**Answer: (b)**

**1.13.** Which is an intensive property? — *[MODEL QUESTION]*
a) Pressure   b) volume   c) viscosity   d) internal energy
**Answer: (a)**

**1.14.** The expression of 1st law of thermodynamics — *[MODEL QUESTION]*
a) $q = \Delta H - W$   b) $\Delta U = \Delta H + P\Delta V$   c) $\Delta U = q + W$   d) $\Delta U = q - W$
**Answer: (d)**

**1.15.** The process in which temperature remains constant is called — *[MODEL QUESTION]*
a) isothermal process   b) isochoric process   c) isobaric process   d) adiabatic process
**Answer: (a)**

**1.16.** The process in which pressure remains constant is called — *[MODEL QUESTION]*
a) isothermal process   b) isochoric process   c) isobaric process   d) adiabatic process
**Answer: (c)**

**1.17.** The process in which volume remains constant is called — *[MODEL QUESTION]*
a) isothermal process   b) isochoric process   c) isobaric process   d) adiabatic process
**Answer: (b)**

**1.18.** When a system is incapable of exchanging either matter or energy with the surroundings then it is called — *[MODEL QUESTION]*
a) open system   b) closed system   c) isolated system   d) none of these
**Answer: (c)**

**1.19.** When a system is capable of exchanging both matter and energy with the surroundings then it is called — *[MODEL QUESTION]*
a) open system   b) closed system   c) isolated system   d) none of these
**Answer: (a)**

**1.20.** Which is a state function? — *[MODEL QUESTION]*
a) $W$   b) $q$   c) $\dfrac{q}{W}$   d) $q - W$
**Answer: (d)**

**1.21.** The characteristic equation of gas is given by — *[MODEL QUESTION]*
a) $PV = RT$   b) $PV = mRT$   c) $mPV = RT$   d) none of these
**Answer: (b)**

**1.22.** The change in internal energy of a system depends upon — *[MODEL QUESTION]*
a) initial and final states of the system   b) the reversible path   c) the irreversibility of the process   d) the initial state of the system only
**Answer: (a)**

**1.23.** The expression of work done in isothermal reversible process for ideal gas is — *[MODEL QUESTION]*
a) $W = nRT\ln\dfrac{V_2}{V_1}$   b) $W = nRT\ln\dfrac{V_1}{V_2}$   c) $W = nRT\ln\dfrac{P_2}{P_1}$   d) none of these
**Answer: (a)**

**1.24.** For ideal gas — *[MODEL QUESTION]*
a) $\left(\dfrac{\partial H}{\partial T}\right)_P = 0$   b) $\left(\dfrac{\partial H}{\partial T}\right)_V = 0$   c) $\left(\dfrac{\partial U}{\partial V}\right) = 0$   d) $\left(\dfrac{\partial U}{\partial P}\right)_T = 0$
**Answer: (c)**

**1.25.** The process in which heat is not allowed to enter into or to come out of the system, then the process is called — *[MODEL QUESTION]*
a) isothermal process   b) isochoric process   c) isobaric process   d) adiabatic process
**Answer: (d)**

**1.26.** Water at 4°C, under pressure of 1 atm., $C_p - C_v$ is equal to — *[MODEL QUESTION]*
a) positive   b) negative   c) zero   d) none of these
**Answer: (c)**

**1.27.** The change in internal energy for ideal gas in isothermal process is — *[MODEL QUESTION]*
a) Zero   b) infinity   c) Negative   d) cannot be said
**Answer: (a)**

**1.28.** The change in enthalpy for ideal gas in isothermal process is — *[MODEL QUESTION]*
a) negative   b) infinity   c) zero   d) cannot be said
**Answer: (c)**

---

## Short and Long Answer Type Questions

**2.1. a) Prove that for an adiabatic reversible process, $PV^{\gamma} = \text{constant}$.** *[WBUT 2006, 2008, 2010(EVEN), 2012(EVEN)]*
**OR, In an adiabatic reversible process, derive a relation between temperature and volume for 1 mole of ideal gas.** *[WBUT 2013(ODD)]*
**OR, Deduce the relationship of $P$ vs. $V$ for an adiabatic process. What will be the relation for isothermal process?** *[WBUT 2016(EVEN)]*
**b) Show that for an ideal gas $C_p - C_v = R$.** *[WBUT 2006, 2010(EVEN), 2012(EVEN)]*

**Answer:**

**a)** We have $T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1}$.

From an ideal gas, we know $P_1V_1 = RT_1$ and $P_2V_2 = RT_2$.

$$\frac{P_1V_1}{P_2V_2} = \frac{T_1}{T_2}\qquad\text{or,}\quad \frac{T_2}{T_1} = \frac{P_2V_2}{P_1V_1}$$
$$\left(\frac{V_1}{V_2}\right)^{\gamma-1} = \frac{P_2V_2}{P_1V_1}\cdot\frac{T_2}{T_1}\qquad\text{or,}\quad \frac{V_1^{\gamma-1}}{V_2^{\gamma-1}} = \frac{P_2V_2}{P_1V_1}$$
$$\text{or,}\quad P_1V_1V_1^{\gamma-1} = P_2V_2V_2^{\gamma-1}\qquad\text{or,}\quad P_1V_1^{\gamma} = P_2V_2^{\gamma}$$

So we can write $P_1V_1^{\gamma} = P_2V_2^{\gamma} = P_3V_3^{\gamma} = \cdots = \text{Constant}$.

So the general expression is $PV^{\gamma} = \text{Constant}$.

**2nd Part:** The relation between $P$ vs. $V$ in isothermal process is $PV = K\ (\text{Constant})$.

**b)** Let say, $C_p - C_v = T\left(\dfrac{\partial P}{\partial T}\right)_V\left(\dfrac{\partial V}{\partial T}\right)_P$.

For ideal gas, $PV = RT$ [for 1 mole].
$$P = \frac{RT}{V},\qquad V = \frac{RT}{P}$$
$$\left(\frac{\partial P}{\partial T}\right)_V = \frac{R}{V},\qquad \left(\frac{\partial V}{\partial T}\right)_P = \frac{R}{P}$$
$$\therefore\ C_p - C_v = T\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P = T\times\frac{R}{V}\times\frac{R}{P} = R\cdot\frac{RT}{PV} = R$$
$$\boxed{C_p - C_v = R}$$

**2.2. a) Prove that maximum work can be obtained from an isothermal reversible process.** *[WBUT 2011(EVEN), 2012(ODD), 2014(EVEN)]*

**Answer:**

Work done in reversible process $(W_{rev}) = RT\ln\dfrac{V_2}{V_1} = RT\ln\dfrac{P_1}{P_2}$. Suppose we carry out a small expansion of the same gas in two ways. We change the volume until the pressure $P_2$. The process is reversible.

Secondly, we reduce the pressure over the piston at once to $P_2$, which would be the equilibrium pressure of the gas when the volume is $V_2$, then the gas would expand immediately against a constant pressure $P_2$. The process is irreversible and irreversible work.
$$W_{irrev} = P_2(V_2 - V_1) = P_2\left(\frac{RT}{P_2} - \frac{RT}{P_1}\right) = RT\left(1 - \frac{P_2}{P_1}\right)$$
$$W_{rev} - W_{irrev} = RT\ln\frac{P_1}{P_2} - RT\left(1 - \frac{P_2}{P_1}\right) = RT\ln\left(1 + \frac{P_1 - P_2}{P_2}\right) - RT\frac{P_1 - P_2}{P_1}$$

If we assume $\dfrac{P_1 - P_2}{P_2}$ to be small we can write $\ln\left(1 + \dfrac{P_1 - P_2}{P_2}\right)$. Since $\ln(1 + X) = X$ when $X$ is small,
$$W_{rev} - W_{irrev} = RT\frac{P_1 - P_2}{P_2} - RT\frac{P_1 - P_2}{P_1} = RT\left(\frac{P_1^2 - 2P_1P_2 + P_2^2}{P_1P_2}\right) = \frac{RT}{P_1P_2}(P_1 - P_2)^2$$

This is always positive irrespective of the magnitude of $P_1$ and $P_2$. Thus the work in a reversible process is greater than that in an irreversible process.

**b) Prove that adiabatic P–V curve would be steeper than the isothermal P–V curve.** *[WBUT 2011(EVEN), 2015(ODD)]*

**Answer:**

Slope of P–V curve is obtained from $\dfrac{dP}{dV}$.

For adiabatic reversible change $P = \dfrac{K}{V^{\gamma}}$:
$$\left(\frac{dP}{dV}\right)_{adia} = -(\gamma)\frac{K}{V^{\gamma+1}} = -\gamma\frac{P}{V}$$

For isothermal change $P = \dfrac{K}{V}$:
$$\left(\frac{dP}{dV}\right)_{iso} = -\frac{K}{V^2} = -\frac{P}{V}$$

In both the cases, the change in the slope is negative since $\gamma$ is greater than 1. The slope of adiabatic P–V curve will be steeper than isothermal curve.
$$\left(\frac{dP}{dV}\right)_{adia} = -\gamma\left(\frac{P}{V}\right) = \gamma\left(\frac{dP}{dV}\right)_{isothermal}$$
$$\left(\frac{dP}{dV}\right)_{adia}\bigg/\left(\frac{dP}{dV}\right)_{isothermal} = \gamma > 1$$

[diagram: P–V plot showing a steeper adiabatic curve below a shallower isothermal curve, $P$ on the vertical axis and $V$ on the horizontal axis]

**2.3. For any adiabatic process prove that $TV^{\gamma-1} = \text{constant}$.** *[WBUT 2011(EVEN), 2015(EVEN)]*

**Answer:**

In an adiabatic reversible change $q = 0$. So from first law of thermodynamics,
$$\Delta U = -W \Rightarrow dU = -dW \Rightarrow nC_v\,dT = -P\,dV \qquad [\text{from ideal gas } PV = nRT]$$
$$\Rightarrow nC_v\,dT = -\frac{nRT}{V}dV \qquad \left[P = \frac{nRT}{V}\right]$$

Now integrating left hand side between temperature $T_1$ and $T_2$ and right hand side between volume $V_1$ and $V_2$, we get
$$\int_{T_1}^{T_2} nC_v\,dT = -nRT\int_{V_1}^{V_2}\frac{dV}{V}$$
$$nC_v\int_{T_1}^{T_2}\frac{dT}{T} = -nR\int_{V_1}^{V_2}\frac{dV}{V}$$
$$C_v\ln\frac{T_2}{T_1} = -R\ln\frac{V_2}{V_1} \qquad \left[C_p - C_v = R;\ \frac{C_p}{C_v} - 1 = \frac{R}{C_v};\ \text{or, } (\gamma - 1) = \frac{R}{C_v}\right]$$
$$\ln\frac{T_2}{T_1} = -\frac{R}{C_v}\ln\frac{V_2}{V_1}$$
$$\ln\frac{T_2}{T_1} = \frac{R}{C_v}\ln\frac{V_1}{V_2}$$
$$\ln\frac{T_2}{T_1} = (\gamma - 1)\ln\frac{V_1}{V_2}$$
$$\ln\frac{T_2}{T_1} = \ln\left(\frac{V_1}{V_2}\right)^{\gamma-1}$$
$$\frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{\gamma-1}$$
$$\frac{T_2}{T_1} = \frac{V_1^{\gamma-1}}{V_2^{\gamma-1}} \qquad \ldots(\text{i})$$
$$T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1} = T_3V_3^{\gamma-1} = \cdots = \text{Constant}$$

So the general formula is $TV^{\gamma-1} = \text{Constant}$.

**2.4. Define enthalpy. Relate the change in molar enthalpy with the change in molar internal energy for a given process of an ideal gas system. Justify that the amount of heat transferred at constant pressure is a measure of the enthalpy change of a system.** *[WBUT 2012(ODD), 2013(EVEN)]*

**Answer:**

**1st Part:** Enthalpy of any thermodynamic system is the measure of the total energy of the system. In case of a gas, the product of pressure ($P$) and volume ($V$) is expressed as energy. The sum of these two energy terms associated with the system namely the internal energy ($U$) and $PV$ energy is known as enthalpy or heat content.
$$\text{Heat content} = \text{Internal energy} + (\text{Pressure}\times\text{Volume})\ \text{energy};\quad H = U + PV$$

**2nd Part:** From 1st law of thermodynamics we have $dq = dU + dW$.

Isobaric process i.e. process at constant pressure ($dP = 0$):
$$dq_P = dU_P + dW_P \qquad [\text{Suffix } P \text{ denotes constant pressure}]$$
$$= dU_P + (PdV)_P = dH_P$$

$$\because\ H = U + PV$$
$$dH = dU + PdV + VdP$$
$$dH_P = dU_P + (PdV)_P + 0$$
$$(dH)_P = dU_P + (PdV)_P$$

In a gaseous reaction if $n_1$ and $n_2$ denote the number of reactant molecules and resultant molecules then we have
$$PdV = P(V_2 - V_1) = P(n_2 - n_1)\frac{RT}{P};\quad \text{since } n_1 = n_2 = 1$$
$$= 0$$
Thus, $(dH)_P = dU_P$.

**3rd Part:** From 1st law of thermodynamics we have, $dq = dU + dW$. If we consider isobaric process i.e. process at constant pressure ($dP = 0$):
$$dq_P = dU_P + dW_P \qquad [\text{Suffix } P \text{ denotes constant pressure}]$$
$$= dU_P + (PdV)_P = dH_P$$

Thus heat absorbed at constant pressure is utilized partly to increase internal energy and rest is used in work done.

**2.5. What are the limitations of the first law of thermodynamics? Justify the need of second law.** *[WBUT 2013(ODD)]*

**Answer:**

**1st Part — Limitations of 1st law of thermodynamics:**
(a) It does not indicate the direction in which the change can occur.
(b) It does not give any idea about the extent of change.
(c) It does not give any idea about the source of heat i.e. whether it is a hot or a cold body.
(d) It does not give any idea about the randomness of a system.
(e) It does not give any idea about the spontaneity of the system.

**2nd Part — Need of second law:**
(i) The second law of thermodynamics is a general principle which places constraints upon the direction of heat transfer and the attainable efficiencies of heat engines.
(ii) It gives the concept of entropy.
(iii) It gives the concept of spontaneity of the system.

**2.6. One mole of an ideal gas is allowed to expand against a piston that supports 0.4 atm. pressure. The gas expands suddenly from the initial pressure of 10 atm. to final pressure of 0.4 atm. The temperature is kept constant at 0°C. Calculate $Q$, $\Delta U$, $\Delta H$ and $W$.** *[WBUT 2014(EVEN)]*

**Answer:**

The process described is an isothermal reversible process for which `[as printed]`
$$W = nRT\ln\frac{P_1}{P_2}$$
$$\text{or,}\quad W = 1.987\times273\ln\frac{10}{0.4} = 1746.08\ \text{Cal}$$
In isothermal expansion of ideal gas $\Delta U = \Delta H = 0$. Also here, $dq = W$.
So 1746.08 Cal heat is evolved.

**2.7. Show that for Adiabatic process of an ideal gas $W = C_v(T_1 - T_2)$.** *[WBUT 2015(EVEN)]*

**Answer:**

We know for adiabatic process
$$W_{adia} = -\Delta U = -C_v\,dT \quad (\text{for 1 mole of an ideal gas})$$
$$= -C_v(T_2 - T_1) = C_v(T_1 - T_2)\quad \begin{bmatrix} T_1 = \text{Initial temperature} \\ T_2 = \text{Final temperature} \end{bmatrix}$$

**2.8. Deduce the expression for the maximum work done when n moles of an ideal gas expand isothermally and reversibly.** *[WBUT 2015(ODD)]*

**Answer:**

Suppose $n$ moles of a perfect gas are enclosed in a cylinder by a frictionless piston. The whole cylinder is kept in a large constant temperature bath at $T°K$. Any change that would occur to the system is isothermal. There is a latch at the top B, and the piston cannot move beyond that. The volume of the gas when the piston is at B is $V_2$. When the piston is at the point A, the volume of the gas is $V_1$. The aim is to expand the gas from volume $V_1$ to $V_2$.

But we can carry out the process in the following way. Let the pressure $P_1$ be reduced by an infinitesimal amount $dP$. Let the new pressure be $P' = P_1 - dP$.

The work would be $dW = (P_1 - dP)dV$. The change in volume would be small and equal to $dV$.

The new pressure be again reduced slightly so that it changes to $P'' = P_1' - dP$. Then the work would be $dW = (P_1' - dP)dV$.

The process may be repeated by such infinite number of successive steps that the gas may be expanded from volume $V_1$ to $V_2$.

The net work for all the minute stages would be
$$\int dW = \sum(P - dP)dV = \int_{V_1}^{V_2}PdV - \int_{V_1}^{V_2}dP\,dV$$
Since $dP$ and $dV$ are infinitesimal quantity, $dP\,dV$ is negligible.
$$\int dW = \int_{V_1}^{V_2}PdV$$
$$\text{or,}\quad W = \int_{V_1}^{V_2}pdv = \int_{V_1}^{V_2}\frac{nRT}{V}dv = nRT\ln\frac{V_2}{V_1} \qquad \left[\because PV = nRT \text{ or, } P = \frac{nRT}{V}\right]$$
$$W = nRT\ln\frac{V_2}{V_1} = nRT\ln\frac{P_1}{P_2}$$
Since $\dfrac{V_2}{V_1} = \dfrac{P_1}{P_2}$ there is an isothermal expansion of perfect gas.

**2.9. Calculate the change in $\Delta U$ and $\Delta H$ for an ideal gas using Maxwell relations.** *[WBUT 2016(EVEN)]*

**Answer:**

**Expression for $\Delta U$:**

$$U = f(\text{State}) = f(T,V)$$

If the temperature and volume of the system changes by $dT$ and $dV$, then the corresponding change in internal energy is expressed by,
$$dU = \left(\frac{\partial U}{\partial T}\right)_V dT + \left(\frac{\partial U}{\partial V}\right)_T dV = \left(\frac{\partial q}{\partial T}\right)_V dT + \left(\frac{\partial U}{\partial V}\right)_T dV = nC_v\,dT + \left(\frac{\partial U}{\partial V}\right)_T dV \qquad \left[\text{Here, } C_v = \frac{1}{n}\left(\frac{\partial q}{\partial T}\right)_V\right]$$

Since $C_v$ or molar heat capacity of a gas at constant volume is defined as the energy required to raise the temperature.

From first law of thermodynamics
$$dq = dU + dW$$
$$dU = dq - dW = TdS - PdV \qquad \left[\text{Since by definition } dS = \frac{dq}{T}\right]$$

Differentiating both sides with respect to volume at constant temperature we get
$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial S}{\partial V}\right)_T - P$$
Since from Maxwell's relation $\left(\dfrac{\partial S}{\partial V}\right)_T = \left(\dfrac{\partial P}{\partial T}\right)_V$,
$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P$$
Thus $dU = nC_v\,dT + \left[T\left(\dfrac{\partial P}{\partial T}\right)_V - P\right]dV$.

For ideal gas $PV = nRT$, $P = \dfrac{nRT}{V}$, $\left(\dfrac{\partial P}{\partial T}\right)_V = \dfrac{nR}{V}$.
$$dU = nC_v\,dT + \left[T\times\frac{nR}{V} - P\right]dV = nC_v\,dT + [P - P]dV = nC_v\,dT$$
$$\therefore\ dU = nC_v\,dT$$
$$\int_{U_1}^{U_2} dU = nC_v\int_{T_1}^{T_2}dT$$
$$\text{or,}\quad \Delta U = nC_v(T_2 - T_1)$$

**Expression for $\Delta H$:**

$$H = f(\text{state}) = f(P,T)$$

If the temperature and pressure of a system changes by $dT$ and $dP$ respectively then the corresponding change in enthalpy be
$$dH = \left(\frac{\partial H}{\partial P}\right)_T dP + \left(\frac{\partial H}{\partial T}\right)_P dT = \left(\frac{\partial H}{\partial P}\right)_T dP + \left(\frac{\partial q}{\partial T}\right)_P dT = nC_p\,dT + \left(\frac{\partial H}{\partial P}\right)_T dP \qquad \left[\text{Here } C_p = \frac{1}{n}\left(\frac{\partial q}{\partial T}\right)_P\right]$$

From definition of enthalpy, $H = U + PV$.
$$\text{or,}\quad dH = dU + PdV + VdP = dq + VdP = TdS + VdP \qquad \left[\text{Since by definition } dS = \frac{dq}{T}\right]$$

Differentiating both sides with respect to pressure at constant temperature, we get
$$\left(\frac{\partial H}{\partial P}\right)_T = T\left(\frac{\partial S}{\partial P}\right)_T + V$$
Since from Maxwell's relation $\left(\dfrac{\partial S}{\partial P}\right)_T = -\left(\dfrac{\partial V}{\partial T}\right)_P$,
$$\left(\frac{\partial H}{\partial P}\right)_T = -T\left(\frac{\partial V}{\partial T}\right)_P + V$$
$$\therefore\ dH = nC_p\,dT + \left[-T\left(\frac{\partial V}{\partial T}\right)_P + V\right]dP$$

For ideal gas $PV = nRT$, $V = \dfrac{nRT}{P}$, $\left(\dfrac{\partial V}{\partial T}\right)_P = \dfrac{nR}{P}$.
$$dH = nC_p\,dT + \left[-T\times\frac{nR}{P} + V\right]dP$$
$$\Rightarrow dH = nC_p\,dT + [-V + V]dP$$
$$\Rightarrow dH = nC_p\,dT$$

**2.10. Prove that $\left(\dfrac{\partial V}{\partial S}\right)_P = \dfrac{RT}{PC_p}$ for one mole of an ideal gas.** *[WBUT 2016(ODD)]*

**Answer:**

From the definition of enthalpy $H = U + PV$.
$$\Rightarrow dH = dU + PdV + VdP \Rightarrow dH = dq + VdP$$

For 1 mole of ideal gas $dH = C_p\,dT$. Therefore, $dq = C_p\,dT - VdP$.

Assume there is no heat transfer and no entropy change $dq = 0$ and $dS = 0$.

Thus, $C_p\,dT = VdP \Rightarrow \dfrac{dT}{dP} = \dfrac{V}{C_p}$.

From Maxwell relation $\left(\dfrac{\partial V}{\partial S}\right)_P = \left(\dfrac{\partial T}{\partial P}\right)_S$.

Thus, $\left(\dfrac{\partial V}{\partial S}\right)_P = \dfrac{V}{C_p} = \dfrac{RT}{PC_p}\quad\left[\because V = \dfrac{RT}{P}\right]$.

**2.11. Prove that for ideal gas in adiabatic reversible process $W_{adi} = \dfrac{P_1V_1 - P_2V_2}{\gamma - 1}$.** *[WBUT 2017(EVEN)]*

**Answer:**

We know that work done in adiabatic process
$$W_A = \int_{V_1}^{V_2}PdV \qquad \begin{bmatrix} V_1 = \text{Initial volume of the system} \\ V_2 = \text{Final volume of the system} \end{bmatrix}$$

For an adiabatic reversible process $PV^{\gamma} = \text{Constant} = K\ (\text{Say})$, $P = \dfrac{K}{V^{\gamma}}$.
$$\therefore\ W_A = \int_{V_1}^{V_2}\frac{K}{V^{\gamma}}dV = K\left[\frac{V^{-\gamma+1}}{-\gamma+1}\right]_{V_1}^{V_2} = K\left[\frac{V^{1-\gamma}}{1-\gamma}\right]_{V_1}^{V_2} = \frac{K}{1-\gamma}\left[V^{1-\gamma}\right]_{V_1}^{V_2}$$
$$= \frac{K}{1-\gamma}\left[V_2^{1-\gamma} - V_1^{1-\gamma}\right] = \frac{1}{1-\gamma}\left[KV_2^{1-\gamma} - KV_1^{1-\gamma}\right]$$

Let the initial pressure and volume of the system be $P_1$ and $V_1$, and the final pressure and volume of the system be $P_2$ and $V_2$ respectively.
$$P_1V_1^{\gamma} = P_2V_2^{\gamma} = \text{constant} = K\ (\text{say})$$
$$W_{(adia)} = \frac{1}{1-\gamma}\left[P_2V_2^{\gamma}V_2^{1-\gamma} - P_1V_1^{\gamma}V_1^{1-\gamma}\right] = \frac{1}{1-\gamma}\left[P_2V_2 - P_1V_1\right]$$

This is the expression for work done in adiabatic reversible process.

**2.12. State and explain the first law of thermodynamics and write its mathematical form.** *[WBUT 2017(ODD)]*

**Answer:**

**First Law of Thermodynamics:** Whenever heat is obtained from work the amount of heat obtained is proportional to the work done, or conversely if heat is transferred to work, there is proportionality between work obtained and heat disappeared.

Different scientists gave different statements on the basis of experiments.

**(1) Helmholtz's statement:** The different forms of energy are interchangeable, but whenever energy of one kind disappears an equivalent amount of another kind or kinds makes its appearance.

**(2) Clausius statement:** Various changes and transformation may occur but the total energy of the universe must remain constant.

**(3) Ostwald's statement:** A machine which does work without any supply of energy from outside is known as perpetual motion of the 1st kind. Ostwald enunciated that perpetual motion of the 1st kind is impossible.

All the statements are identical in significance. All signify basically that — "Energy can neither be created nor destroyed, but can be converted from one form to another". Thus 1st law is actually the law of conservation of energy.

Mathematical form of 1st law of thermodynamics is $q = \Delta U + W$, where $q$ is the heat absorbed by the system, $W$ is the work done by the system and $\Delta U$ is the change in internal energy.

Therefore, Heat absorbed is equal to change in internal energy plus work done. Thus differential form of 1st law of thermodynamics is $dq = dU + dW$.

**2.13. Show that when $\gamma \to 1$, the work done in the adiabatic reversible expansion is equal to that of isothermal reversible expansion.** *[MODEL QUESTION]*

**Answer:**

Work done in reversible process $W_{rev} = \int_{V_1}^{V_2}PdV$.

For an adiabatic reversible process $PV^{\gamma} = \text{constant} = (K)\ \text{say}$, $P = \dfrac{K}{V^{\gamma}}$.

Work done in an adiabatic reversible process
$$W_{rev(adia)} = \int_{V_1}^{V_2}\text{Constant}\cdot\frac{dV}{V^{\gamma}}$$

When $\gamma \to 1$, the work done in an adiabatic reversible process
$$W_{rev(adia)} = \int_{V_1}^{V_2}\text{Constant}\cdot\frac{dV}{V} = \text{Constant}\int_{V_1}^{V_2}\frac{dV}{V} = \text{Constant}\ln\frac{V_2}{V_1} \qquad [\text{Constant} = nRT]$$
$$= nRT\ln\frac{V_2}{V_1} = W_{rev(isothermal)}$$

**2.14. What are the differences between reversible and irreversible process?** *[MODEL QUESTION]*

**Answer:**

| Reversible Process | Irreversible Process |
|---|---|
| (i) If the systems and surroundings are restored to their initial conditions after a cyclic change, then the change is termed as reversible. | (i) If the systems and surroundings are not restored to their initial conditions after a cyclic change, then the change is termed as irreversible. |
| (ii) Work done is maximum in reversible process. | (ii) Work done in an irreversible process is less than reversible process. |
| (iii) The process occurs through infinite number of successive stages and hence infinite time is required for its completion. | (iii) This process occurs through one step and hence gets completed in a short time. |
| (iv) This process takes place very slowly and involves a series of equilibrium states. | (iv) This process takes place very rapidly and does not involve any equilibrium state. |

**2.15. Write down which process is reversible and which process is irreversible.**
**(i) in one step under constant pressure.**
**(ii) in multi steps such that opposing pressure is always less than the gas pressure.** *[MODEL QUESTION]*

**Answer:**

(i) The process occurs in one step against a constant external pressure. Thus the process is an irreversible one.

(ii) The process occurs through infinite number of successive stages. Thus the process is a reversible one.

**2.16. Write down which one is extensive and which one is intensive property.**
**(i) volume (ii) temperature (iii) density (iv) internal energy (v) enthalpy (vi) Viscosity.** *[MODEL QUESTION]*

**Answer:**

(i) Volume $\longrightarrow$ Extensive property
(ii) Temperature $\longrightarrow$ Intensive Property
(iii) Density $\longrightarrow$ Intensive Property
(iv) Internal Energy $\longrightarrow$ Extensive Property
(v) Enthalpy $\longrightarrow$ Extensive Property
(vi) Viscosity $\longrightarrow$ Extensive Property `[as printed]`

**2.17. Is $C_p$ always greater than $C_v$? — Explain.** *[MODEL QUESTION]*

**Answer:**

No, $C_p$ is not always greater than $C_v$. There are some conditions where $C_p > C_v$.

The expression for change in heat capacity is:
$$C_p - C_v = T\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P$$
$T$, $\left(\dfrac{\partial P}{\partial T}\right)_V$ and $\left(\dfrac{\partial V}{\partial T}\right)_P$ are always positive. Thus $C_p - C_v$ is always $(+)$ve. $\therefore\ C_p > C_v$.

There are some conditions where $C_p = C_v$:

(i) At absolute zero, i.e. when $T = 0°K$,
$$C_p - C_v = 0\ \text{or}\ C_p = C_v$$
But it is a hypothetical case.

(ii) Thus for water at 4°C under a pressure of 1 atom., density ($d$) is maximum and volume ($V$) is minimum.
$$d = \frac{m}{V}$$
But differential of a minimum quantity $= 0$ or $\left(\dfrac{\partial V}{\partial T}\right)_P = 0$.
$$C_p - C_v = 0\quad \text{or,}\quad C_p = C_v$$

**2.18. Why is the enthalpy considered more useful than internal energy in chemical reaction?** *[MODEL QUESTION]*

**Answer:**

Internal energy ($U$) and enthalpy ($H$) are measured by maintaining constant volume and pressure respectively. Since most of the reactions take place under atmospheric pressure, so enthalpy is more useful than internal energy in chemical reaction.

**2.19. What is the difference between adiabatic and isothermal changes?** *[MODEL QUESTION]*

**Answer:**

| Adiabatic Change | Isothermal Change |
|---|---|
| (i) Heat exchange between the system and the surrounding does not occur. | (i) Temperature of the system remains constant. |
| (ii) Internal energy of the system changes. | (ii) Change in internal energy does not take place for ideal gas. |
| (iii) $PV^{\gamma} = \text{Constant}$ for such process. | (iii) $PV = \text{Constant}$ for such process. |

**2.20. Prove that for ideal gas $\left(\dfrac{\partial U}{\partial V}\right)_T = 0$.** *[MODEL QUESTION]*

**Answer:**

From 1st law of thermodynamics we have
$$dq = dU + dW$$
$$\Rightarrow dU = dq - dW \Rightarrow dU = TdS - PdV \qquad \left[\text{From the definition of entropy } dS = \frac{dq}{T}\right]$$

Differentiating both sides with respect to volume at constant temperature, we get
$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial S}{\partial V}\right)_T - P$$
Since from Maxwell's relation, $\left(\dfrac{\partial S}{\partial V}\right)_T = \left(\dfrac{\partial P}{\partial T}\right)_V$,
$$\text{Therefore,}\quad \left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P \qquad \ldots(1)$$
For ideal gas, $PV = nRT$ or, $P = \dfrac{nRT}{V}$.
$$\text{Thus,}\quad \left(\frac{\partial P}{\partial T}\right)_V = \frac{nR}{V}$$
Therefore, from equation (1), $\left(\dfrac{\partial U}{\partial V}\right)_T = \dfrac{nRT}{V} - P = P - P = 0$.

**2.21. For one mole of an ideal gas $T = f(P,V)$. Show that $dT$ is a perfect differential.** *[MODEL QUESTION]*

**Answer:**

$T = f(P,V)$. If $dT$ is a perfect differential then
$$\frac{\partial^2 T}{\partial P\,\partial V} = \frac{\partial^2 T}{\partial V\,\partial P}$$
For 1 mole of ideal gas the expression becomes $PV = RT$, or, $T = \dfrac{PV}{R}$.
$$\left(\frac{\partial T}{\partial P}\right)_V = \frac{V}{R}$$
$$\text{or,}\quad \frac{\partial}{\partial V}\left[\left(\frac{\partial T}{\partial P}\right)\right] = \frac{\partial}{\partial V}\left(\frac{V}{R}\right)$$
$$\text{or,}\quad \frac{\partial^2 T}{\partial V\,\partial P} = \frac{1}{R} \qquad \ldots(1)$$
Again, $T = \dfrac{PV}{R}$.
$$\left(\frac{\partial T}{\partial V}\right)_P = \frac{P}{R}$$
$$\text{or,}\quad \frac{\partial}{\partial P}\left[\left(\frac{\partial T}{\partial V}\right)\right] = \frac{\partial}{\partial P}\left(\frac{P}{R}\right)$$
$$\text{or,}\quad \frac{\partial^2 T}{\partial P\,\partial V} = \frac{1}{R} \qquad \ldots(2)$$
From (1) and (2) we get,
$$\frac{\partial^2 T}{\partial V\,\partial P} = \frac{\partial^2 T}{\partial P\,\partial V}$$
Thus $dT$ is a perfect differential.

**2.22. Show that $C_p - C_v = T\left(\dfrac{\partial P}{\partial T}\right)_V\left(\dfrac{\partial V}{\partial T}\right)_P$.** *[MODEL QUESTION]*

**Answer:**

$$C_p = \left(\frac{\partial q}{\partial T}\right)_P = \left(\frac{\partial H}{\partial T}\right)_P,\quad \text{at constant pressure } dH_P = dq_P$$
$$C_v = \left(\frac{\partial q}{\partial T}\right)_V = \left(\frac{\partial U}{\partial T}\right)_V,\quad \text{at constant volume } dq_V = dU_V$$
$$C_p - C_v = \left(\frac{\partial H}{\partial T}\right)_P - \left(\frac{\partial U}{\partial T}\right)_V$$
By definition, $H = U + PV$.
$$\left(\frac{\partial H}{\partial T}\right)_P = \left(\frac{\partial U}{\partial T}\right)_P + P\left(\frac{\partial V}{\partial T}\right)_P$$
$$C_p - C_v = \left(\frac{\partial U}{\partial T}\right)_P + P\left(\frac{\partial V}{\partial T}\right)_P - \left(\frac{\partial U}{\partial T}\right)_V$$
Again, $U = f(V,T)$.
$$dU = \left(\frac{\partial U}{\partial V}\right)_T dV + \left(\frac{\partial U}{\partial T}\right)_V dT$$
$$\left(\frac{\partial U}{\partial T}\right)_P = \left(\frac{\partial U}{\partial V}\right)_T\left(\frac{\partial V}{\partial T}\right)_P + \left(\frac{\partial U}{\partial T}\right)_V$$
$$C_p - C_v = \left(\frac{\partial U}{\partial V}\right)_T\left(\frac{\partial V}{\partial T}\right)_P + \left(\frac{\partial U}{\partial T}\right)_V + P\left(\frac{\partial V}{\partial T}\right)_P - \left(\frac{\partial U}{\partial T}\right)_V$$
$$= \left(\frac{\partial U}{\partial V}\right)_T\left(\frac{\partial V}{\partial T}\right)_P + P\left(\frac{\partial V}{\partial T}\right)_P$$
Again from 1st law of thermodynamics
$$dq = dU + dW$$
$$dU = dq - dW = TdS - PdV$$
$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial S}{\partial V}\right)_T - P$$
From Maxwell's relation we know that $\left(\dfrac{\partial S}{\partial V}\right)_T = \left(\dfrac{\partial P}{\partial T}\right)_V$.
$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P$$
$$C_p - C_v = \left[T\left(\frac{\partial P}{\partial T}\right)_V - P\right]\left(\frac{\partial V}{\partial T}\right)_P + P\left(\frac{\partial V}{\partial T}\right)_P$$
$$= T\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P - P\left(\frac{\partial V}{\partial T}\right)_P + P\left(\frac{\partial V}{\partial T}\right)_P$$
$$C_p - C_v = T\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P$$

**2.23. If $V = f(P,T)$ then show that $dV$ is an exact differential for an ideal gas.** *[MODEL QUESTION]*

**Answer:**

$V = f(P,T)$. If $dV$ is a perfect differential then
$$\frac{\partial^2 V}{\partial P\,\partial T} = \frac{\partial^2 V}{\partial T\,\partial P}$$
For 1 mole of ideal gas the expression becomes $PV = RT$, or, $V = \dfrac{RT}{P}$.
$$\left(\frac{\partial V}{\partial T}\right)_P = \frac{R}{P}$$
$$\text{or,}\quad \frac{\partial}{\partial P}\left[\left(\frac{\partial V}{\partial T}\right)\right] = \frac{\partial}{\partial P}\left(\frac{R}{P}\right)$$
$$\text{or,}\quad \frac{\partial^2 V}{\partial P\,\partial T} = -\frac{R}{P^2} \qquad \ldots(1)$$
Again $V = \dfrac{RT}{P}$.
$$\left(\frac{\partial V}{\partial P}\right)_T = -\frac{RT}{P^2}$$
$$\text{or,}\quad \frac{\partial}{\partial T}\left[\left(\frac{\partial V}{\partial P}\right)\right] = \frac{\partial}{\partial T}\left(-\frac{RT}{P^2}\right)$$
$$\text{or,}\quad \frac{\partial^2 V}{\partial T\,\partial P} = -\frac{R}{P^2} \qquad \ldots(2)$$
From equation (1) and (2) we get,
$$\frac{\partial^2 V}{\partial P\,\partial T} = \frac{\partial^2 V}{\partial T\,\partial P}$$
Thus $dV$ is a perfect differential.

**2.24. One mole of an ideal gas expands against a confining pressure that is at all times infinitesimally less than the gas pressure from an initial 10 atm to a final of 0.4 atm; the temperature being kept constant at 0°C. (a) How much work is done by the gas? (b) What is the change in U and H? (c) How much heat is absorbed?** *[MODEL QUESTION]*

**Answer:**

The process described is an isothermal reversible process for which
$$W = nRT\ln\frac{P_1}{P_2}$$
$$\text{or,}\quad W = 1.987\times273\ln\frac{10}{0.4} = 1746.08\ \text{Cal}$$
In isothermal expansion of ideal gas $\Delta U = \Delta H = 0$. Also here $dq = W$.
So 1746.08 cal. Heat is absorbed.

**2.25. A gas expands against a variable external pressure given by $P = \dfrac{10}{V}$ atm. where V is the volume of the gas at each stage of expansion. Further in expanding from 10 to 100 litres, the gas undergoes a change in internal energy $\Delta U = 100\ \text{Cal}$. How much heat has been absorbed?** *[MODEL QUESTION]*

**Answer:**

Work done against a variable pressure $= \displaystyle\int_{V_1}^{V_2}PdV$.

Here $P = \dfrac{10}{V}$ atm. So $W = 10\displaystyle\int_{V_1}^{V_2}\frac{dV}{V}$ litre atm.
$$W = 10\ln\frac{V_2}{V_1} = 10\ln\frac{100}{10} = 23.03\ \text{litre atm.}$$
$$\text{or,}\quad W = 557.3\ \text{Cal}\qquad [1\ \text{litre atm} = 24.2\ \text{Cal}]$$
As, $dq = dU + W$. So $dq = 100 + 557.3 = 657.3\ \text{cal}$ is absorbed.

**2.26. Calculate the work done by 5 moles of an ideal gas during expansion from 5 atm. at 25°C to 2 atm at 50°C against a constant pressure of 0.5 atm. If for the gas $C_p = 5\ \text{Cal mole}^{-1}\text{deg}^{-1}$, calculate $\Delta U$, $\Delta H$ and $q$.** *[MODEL QUESTION]* `[question constants as printed; the worked solution uses $P_1 = 5$ atm and $P_{ext} = 0.5$ atm]`

**Answer:**

Work $= P_{ext}(V_2 - V_1)$.

Here $P_{ext} = 0.5$ atm, $V_2 = \dfrac{nRT_2}{P_2} = \dfrac{5\times0.082\times323}{2} = 66.22$ litre, and $V_1 = \dfrac{nRT_1}{P_1} = \dfrac{5\times0.082\times298}{5} = 24.44$ litre.

So $W = 0.5(66.22 - 24.44) = 20.89$ litre atm $= 505.54\ \text{Cal}$.

$C_p = 5\ \text{Cal}$. So $C_v = 3\ \text{Cal}$ (ideal gas).
$$\Delta U = 5\times3(323 - 298) = 375\ \text{Cal}$$
$$\Delta H = 5\times5(323 - 298) = 625\ \text{Cal}$$
$$q = \Delta U + W = 880.54\ \text{Cal}$$

**2.27. $N_2$ gas is expanded reversibly and adiabatically from a volume of one litre at 0°C and 1 atm to a volume of 2 litre. $C_v$ and $C_p$ values are 20.8 and 29.1 $\text{Jmole}^{-1}\text{K}^{-1}$. Assuming ideal behaviour calculate the final temperature and pressure. What are $W$, $\Delta U$ and $\Delta H$?** *[MODEL QUESTION]*

**Answer:**

Poisson's Ratio $\gamma = \dfrac{C_p}{C_v} = \dfrac{29.1}{20.8} = 1.40$.

From adiabatic reversible relation —
$$P_1V_1^{\gamma} = P_2V_2^{\gamma}\quad\text{So } 1\times1 = P_2\times2^{1.4}$$
$$\text{or,}\quad P_2 = 0.38\ \text{atm}$$
Again $T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1}$ or $273\times1 = T_2\times2^{0.4}$
$$\text{or,}\quad T_2 = 206.9°A$$
In adiabatic process $q = 0$.
$$W = C_v(T_1 - T_2)/\text{mole} = 20.9(273 - 206.9) = 1381.5\ \text{Joule}$$
$$\Delta U = C_v(T_2 - T_1) = -1381.5\ \text{Joule}$$
$$\Delta H = C_p(T_2 - T_1) = -1923.5\ \text{Joule}$$

**2.28. One mole of an ideal mono-atomic gas initially at 27°C and occupying a volume of 10 litres undergo adiabatic expansion in two different way, till the final volume in each case increases to 20 litres. (i) Adiabatic expansion against a constant external pressure of 1 atm and (ii) Adiabatic expansion against zero pressure. Calculate the work done and final temperature in each case.** *[MODEL QUESTION]*

**Answer:**

Both the expansions are adiabatic and at the same time irreversible. So in case (i)
$$W = P_{ext}(V_2 - V_1) = 1(20 - 10) = 10\ \text{litre atm} = 242\ \text{Cal}$$
In case (ii) $W = 0\times\text{Vol. Change} = 0$.

$q = 0$.

Now $W = C_v(T_1 - T_2) = \dfrac{3}{2}\times1.987(300 - T_2)$.

For mono-atomic gas $C_v = \dfrac{3}{2}R$.

In case (i):
$$242 = \frac{3}{2}\times1.987(300 - T_2)$$
$$\text{or,}\quad 242 = 894.15 - 2.9805\,T_2$$
$$T_2 = 218.8°A$$
In case (ii) As $W = 0$, $T_1 = T_2 = 300°A$.

**2.29. A system undergoes a certain change in state by path I and the corresponding heat absorbed and the work term are 10 K cal and 0 erg. respectively. For the same change in state by path II the respective quantities are 11 K.Cal and $0.5\,W_{max}$, where $W_{max}$ represents the work if the specified change is reversibly carried out. Find $W_{max}$ in ergs.** *[MODEL QUESTION]*

**Answer:**

From 1st law $dq = dU + W$.

$dq$ and $W$ are path dependent; but $dU$ is path independent.

In path I, $dq = 10$ K.Cal, $W = 0$. So $dU = 10$ K.Cal.

In path II, $dq = 11$ K.Cal, $W = 0.5\,W_{max}$. So $11 = 10 + 0.5\,W_{max}$.
$$\text{or,}\quad W_{max} = 2\ \text{K.Cal} = 2\times4.2\times10^{10}\ \text{ergs}$$

---

*End of Chapter 4: Thermodynamics - I.*
