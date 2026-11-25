# LCU Script Flow Docs

Documentation for **Script Flow** (`.sf`), the scripting language used in **LEGO City Undercover** to drive missions, characters, vehicles, world triggers, and audio.

---

## Quick Navigation

- **[What is Script Flow?](about/index.md)** — High-level overview of Script Flow and how scripts fit into the game
- **[The Basics](basics/index.md)** — Core concepts and anatomy of a `.sf` script
- **[Syntax](basics/syntax.md)** — Comments, literals, variables, states, functions, and operators
- **[Keywords](basics/keywords.md)** — Reference for all built-in Script Flow keywords
- **[Data Types](basics/types.md)** — Primitive types, entities, world/mission/audio types, and storage modifiers

---

## Quick Example

```sf
Global Character cPlayer1;
Vehicle vCar;

Position pos(cPlayer1.GetPosition());

State Init() {
    Actions {
        vCar = CreateAIVehicle("Hero", "Enforcer", pos, 0);
        cPlayer1.EnterVehicle(vCar);
    }
}

Init();
```
