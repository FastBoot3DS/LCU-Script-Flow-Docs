# Keywords

All keywords in Script Flow (`.sf`) are **case-insensitive** (`State`, `state`, and `STATE` are all valid).

---

## Structure & Declarations

| Keyword | Purpose |
| :--- | :--- |
| `State` | Defines a state block (the main unit of script execution) |
| `Function` | Defines a reusable function |
| `returns` | Declares the return type of a `Function` |
| `Conditions` | Section inside a `State` that checks transition/trigger conditions |
| `Actions` | Section inside a `State` that runs actions/statements |

```sf
State Patrol() {
    Conditions {
        if (playerSeen) {
            goto Chase;
        }
    }
    Actions {
        Wait(1.0);
    }
}

Function Add(Number a, Number b) returns Number {
    return a + b;
}
```

---

## State Flow & Timing

| Keyword | Purpose |
| :--- | :--- |
| `goto` | Transitions execution to another `State` |
| `gosub` | Calls another `State` as a subroutine and returns when it finishes |
| `next` | Advances to the next state |
| `previous` | Returns to the previous state |
| `wait` | Pauses/yields script execution for a `Number` of seconds (or one frame if omitted) |
| `return` | Exits a `Function` (optionally returning a value) or state subroutine |

```sf
State Intro() {
    Actions {
        Wait(2.0);
        goto MainLoop;
    }
}
```

---

## Conditionals & Loops

| Keyword | Purpose |
| :--- | :--- |
| `if` | Executes a block if a condition is `true` |
| `elseif` | Fallback condition checked when the previous `if` / `elseif` was `false` |
| `else` | Fallback block when all preceding conditions were `false` |
| `while` | Repeats a block as long as a condition remains `true` |

```sf
if (health <= 0) {
    goto GameOver;
} elseif (health < 25) {
    lowHealth = true;
} else {
    lowHealth = false;
}

while (count < 5) {
    count = count + 1;
}
```

---

## Logical Operators

Word-form logical operators can be used alongside (or instead of) `&&`, `||`, and `!`:

| Keyword | Equivalent | Meaning |
| :--- | :---: | :--- |
| `AND` | `&&` | True if both sides are true |
| `OR` | `\|\|` | True if either side is true |
| `NOT` | `!` | Negates a boolean condition |

```sf
if (isReady AND NOT isPaused) {
    active = true;
}
```

---

## Storage Modifiers

Used before a variable's [Data Type](types.md#storage-modifiers) to control its scope and visibility:

| Keyword | Purpose |
| :--- | :--- |
| `Global` | Persists across states / scopes |
| `Extern` | Injected from job / caller parameters |
| `Debug` | Debug-only variable |

```sf
Global Character cPlayer1;
Extern Number missionLevel;
Debug Bool showDebugInfo(false);
```

---

## Boolean Constants

| Keyword | Value |
| :--- | :---: |
| `true` | `1` |
| `false` | `0` |
