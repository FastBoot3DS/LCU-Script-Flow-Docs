# The Basics

This section covers the core building blocks of **Script Flow** (`.sf`) scripts in LEGO City Undercover.

## Topics

- [Syntax](syntax.md) — Comments, variables, states, functions, operators, and control flow
- [Keywords](keywords.md) — Reference for all built-in Script Flow keywords
- [Data Types](types.md) — Built-in primitives, entities, world/mission/audio types, and storage modifiers
- [Variables & Scopes](variables.md) — Declarations, storage modifiers, `Array` vs `CityArray`, and hashes
- [States & Execution Flow](states.md) — `State` blocks, transitions (`goto`/`gosub`), `Wait`, and `SpawnScript`

## Anatomy of a Script

A Script Flow file typically declares variables at the top, defines one or more `State` (or `Function`) blocks, and starts execution by calling an initial state:

```sf
// Variable declarations
Global Character cPlayer1;
Vehicle vCar;
Position pos(cPlayer1.GetPosition());

// State definition
State Init() {
    Actions {
        vCar = CreateAIVehicle("Hero", "Enforcer", pos, 0);
        cPlayer1.EnterVehicle(vCar);
    }
}

// Entry call
Init();
```
