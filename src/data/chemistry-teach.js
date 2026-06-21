// Authored Explanation-Ladder lessons for Chemistry.
// Standard chemistry (the verified PYQ answers come from chemistry.json untouched).

export const TEACH_CHEMISTRY = {
  ch1: [
    {
      id: "atomic-models",
      title: "Atomic Models: Rutherford to Bohr",
      explainer: "atom",
      what: "Rutherford put a tiny dense nucleus at the centre with electrons around it; Bohr fixed its instability by letting electrons occupy only certain quantised shells.",
      why: "These models explain where charge and mass sit in an atom and why elements have the chemistry they do, the valence (outer-shell) electrons.",
      intuition: "A tiny positive nucleus holds the mass; electrons orbit in shells that fill from the inside out, and the outermost electrons decide bonding.",
      analogy: {
        icon: "atom",
        label: "Stadium and a pea",
        text: "If the atom were a stadium, the nucleus is a pea at the centre and the electrons are out in the stands, almost all of the atom is empty space.",
        breaks: "Electrons are not little planets on fixed tracks; Bohr's orbits are a useful picture later replaced by fuzzy orbitals.",
      },
      steps: [
        "Rutherford: most of the atom is empty; a small dense positive nucleus holds the mass.",
        "Problem: a classical orbiting electron would radiate energy and spiral in.",
        "Bohr: electrons occupy only fixed energy shells and do not radiate while in them.",
        "Shells fill from the inside out: 2, then 8, then 8.",
        "The outermost (valence) electrons govern chemical behaviour.",
      ],
      example: "Sodium (Z = 11) has shells 2, 8, 1, that single outer electron makes it very reactive. Neon (2, 8) has a full outer shell and is inert.",
      misconception: "The Bohr orbit is a stepping stone, not the truth. Electrons really occupy probability clouds (orbitals), not sharp circular paths.",
      rule: "Tiny dense nucleus + electrons in quantised shells (2, 8, 8); valence electrons drive chemistry.",
    },
    {
      id: "quantum-nature",
      title: "The Quantum Nature of Matter",
      explainer: "debroglie",
      what: "Light and matter are both particle and wave: black-body radiation and the photoelectric effect need photons, while de Broglie showed every particle has a wavelength $\\lambda = h/mv$.",
      why: "Classical physics fails at the atomic scale. Quantisation and wave-particle duality are why electrons sit in discrete levels and why we describe them with wavefunctions.",
      intuition: "Energy comes in packets (quanta), and a moving particle behaves like a wave whose wavelength shrinks as its momentum grows.",
      analogy: {
        icon: "balance",
        label: "Two faces of one thing",
        text: "Like a coin that is heads and tails: depending on the experiment, an electron shows its particle face or its wave face.",
        breaks: "The duality is not 'sometimes a wave, sometimes a particle' in a classical sense; it is a single quantum object described by a wavefunction.",
      },
      steps: [
        "Black-body radiation and the photoelectric effect: light delivers energy in photons of $E = h\\nu$.",
        "The photoelectric effect needs a minimum frequency, not just intensity.",
        "de Broglie: every moving particle has wavelength $\\lambda = h/mv$.",
        "Heisenberg: you cannot know position and momentum exactly at once.",
        "Schrodinger's equation gives the electron's wavefunction and energy levels.",
      ],
      example: "An electron's wavelength is large enough to diffract (electron microscopes use this); a cricket ball's $\\lambda$ is unimaginably tiny, so it is purely a particle.",
      misconception: "The photoelectric effect depends on light's FREQUENCY, not its brightness. Dim blue light can eject electrons while bright red light cannot.",
      rule: "Energy is quantised ($E=h\\nu$) and matter has wavelength $\\lambda = h/mv$; classical mechanics breaks down at atomic scale.",
    },
    {
      id: "molecular-orbitals",
      title: "Molecular Orbitals and Band Theory",
      explainer: "mot",
      what: "When two atomic orbitals combine they form a lower-energy bonding orbital and a higher-energy antibonding orbital; bond order = (bonding - antibonding electrons)/2. In solids these levels broaden into bands.",
      why: "Molecular orbital theory predicts which molecules are stable and their magnetism, and the band picture explains conductors, semiconductors and insulators.",
      intuition: "Two atomic orbitals mix into two molecular ones, one that lowers energy when filled (bonding) and one that raises it (antibonding). Fill bonding first.",
      analogy: {
        icon: "balance",
        label: "Two waves combining",
        text: "Like two waves that add in phase (a strong, low-energy bond) or out of phase (a destabilising antibond).",
        breaks: "Real molecules mix many orbitals; the simple two-orbital picture is exact only for the simplest diatomic cases.",
      },
      steps: [
        "Two atomic orbitals combine into one bonding and one antibonding MO.",
        "Bonding sits lower in energy, antibonding higher.",
        "Fill electrons bonding-first.",
        "Bond order = (bonding - antibonding electrons) / 2; > 0 means a stable bond.",
        "In a solid, countless levels broaden into bands separated by a gap.",
      ],
      example: "H₂ (2 electrons) has bond order 1, stable; He₂ (4 electrons) has bond order 0, no bond. A small band gap gives a semiconductor; a large one an insulator.",
      misconception: "Electrons in antibonding orbitals weaken the bond; a molecule with equal bonding and antibonding electrons (bond order 0) does not form.",
      rule: "MOs: bonding (low) + antibonding (high); bond order = (bonding - anti)/2. Bands + gap size set conductor/semiconductor/insulator.",
    },
  ],
};
