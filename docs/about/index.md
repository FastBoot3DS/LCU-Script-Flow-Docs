# What is Script Flow (SF)?

**Script Flow** (`.sf`) is a text-based scripting language used by **LEGO City Undercover**, and other LEGO Games developed by TTGames, to control gameplay logic, missions, characters, vehicles, AI, world triggers, and audio. It likely is the successor to `.scp` files found in earlier TT LEGO Games.

Rather than hardcoding every mission or level event in C++, the game uses Script Flow scripts to coordinate how entities and systems interact at runtime.

## How Scripts Are Structured

A typical Script Flow script is built from a few core pieces:

- **Typed Variables & Modifiers** — Strongly typed variables such as `Number`, `Bool`, `Text`, `Position`, `Character`, `Vehicle`, and `Array`, with optional storage modifiers (`Global`, `Extern`, `Debug`). See [Types](../basics/types.md) for the full list.
- **States & Functions** — Scripts organize behavior into `State` blocks (with `Actions` and state transitions) and reusable `Function`s.
- **Engine Actions** — Built-in commands exposed by the engine (such as `CreateAIVehicle`, `EnterVehicle`, or `GetPosition`) that let scripts query and manipulate the game world.

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

## About These Docs

This site documents the Script Flow language, its data types, and built-in engine actions for LEGO City Undercover modding and reverse engineering.
