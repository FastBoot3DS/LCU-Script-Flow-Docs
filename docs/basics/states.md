# States & Execution Flow

Script Flow (`.sf`) is built around **states** — named blocks that run actions and check conditions over time as the game ticks.

---

## Anatomy of a `State`

A `State` block typically has a `Conditions` section and an `Actions` section:

```sf
State WaitForVehicle() {
    Conditions {
        if (cPlayer1.IsInVehicle()) {
            goto Driving;
        }
    }
    Actions {
        Wait(0.5);
    }
}
```

- **`Conditions`** — Evaluated to decide when to transition or react.
- **`Actions`** — Statements and engine actions executed while in the state.

---

## Starting a Script

Scripts normally define their states first and kick off execution at the bottom by calling the initial state:

```sf
State Init() {
    Actions {
        // Setup logic
        goto MainLoop;
    }
}

Init();
```

---

## State Transitions

| Keyword | Behavior |
| :--- | :--- |
| `goto` | Jumps execution to the target `State` |
| `gosub` | Calls a `State` as a subroutine and resumes when it returns |
| `next` | Moves to the next state in order |
| `previous` | Moves to the previous state in order |
| `return` | Returns from a `gosub` state or `Function` |

---

## Waiting & Yielding

Use `Wait` to pause execution without blocking the rest of the game:

- `Wait();` — Yields for the current frame.
- `Wait(seconds);` — Pauses the script until the given `Number` of seconds has elapsed.

```sf
Actions {
    Wait(2.0);
    goto NextStep;
}
```

---

## Spawning Child Scripts

You can launch another script from within a script using `SpawnScript`, which returns a `Script` handle (`ScriptContext`):

```sf
Script child;
child = SpawnScript("MySubScript");
```
