interface ForceUserActions {
  useForce(): void;
  meditate(): void;
  handleLightSaber(): void;
}

abstract class ForceUser implements ForceUserActions {
  useForce(): void {
    console.log("Force user is using the Force.");
  }

  meditate(): void {
    console.log("Force user is meditating.");
  }

  abstract handleLightSaber(): void;
}

class Jedi extends ForceUser {
  // No es necesario un constructor si no se añaden propiedades adicionales
  constructor() {
    super();
  }

  handleLightSaber(): void {
    console.log("Jedi is handling the lightsaber with skill.");
  }
}

class Sith extends ForceUser {
  useForce(): void {
    console.log("Sith is using the dark side of the Force.");
  }

  meditate(): void {
    console.log("Sith is meditating to gain power.");
  }

  handleLightSaber(): void {
    console.log("Sith is wielding the lightsaber aggressively.");
  }
}

// Uso de la clase abstracta
const luke: ForceUser = new Jedi();
luke.useForce(); // Force user is using the Force.
luke.meditate(); // Force user is meditating.
luke.handleLightSaber(); // Jedi is handling the lightsaber with skill.

const vader: ForceUser = new Sith();
vader.useForce(); // Sith is using the dark side of the Force.
vader.meditate(); // Sith is meditating to gain power.
vader.handleLightSaber(); // Sith is wielding the lightsaber aggressively.
