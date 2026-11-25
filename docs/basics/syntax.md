# Syntax

Script Flow (`.sf`) uses a C-like block syntax with `{ ... }` braces and `;` statement terminators, along with `State` / `Function` blocks for organizing game logic. Keywords and type names are case-insensitive.

## Comments

Single-line comments use `//` and multi-line block comments use `/* ... */`:

```sf
// Single-line comment

/*
   Multi-line
   block comment
*/
```

## Literals

| Type | Example | Notes |
| :--- | :--- | :--- |
| `Number` | `42`, `3.14`, `-10` | Integer or floating-point values |
| `Bool` | `true`, `false` | Boolean literals |
| `Text` | `"Hero"` | Double-quoted strings (supports `\` escapes) |
| `Hash` | `#MyFlag` | Hash identifier prefixed with `#` |

## Variables

Variables are declared with a [Data Type](types.md) followed by a name, optionally preceded by a storage modifier (`Global`, `Extern`, or `Debug`). See [Variables & Scopes](variables.md) for full details.

To give a variable an initial value at declaration, use parentheses `(...)` — or declare it first and assign it later with `=`:

```sf
// Declare without an initial value, then assign later
Number count;
count = 0;

// Or initialize in the declaration using parentheses
Number score(100);
Position pos(cPlayer1.GetPosition());

// With storage modifiers
Global Character cPlayer1;
Extern Number difficulty;
Debug Bool showInfo(true);
```

## States

`State` blocks are the main units of behavior in Script Flow. A state can contain `Conditions` and `Actions` blocks (see [States & Execution Flow](states.md) for transitions, `Wait`, and spawning scripts):

```sf
State WaitForPlayer() {
    Conditions {
        if (cPlayer1.IsInVehicle()) {
            goto DriveState;
        }
    }
    Actions {
        Wait(0.5);
    }
}
```

## Functions

Reusable routines are declared with `Function` (and `returns` / `return` when returning a value):

```sf
Function AddNumbers(Number a, Number b) returns Number {
    return a + b;
}
```

## Control Flow

Standard `if` / `elseif` / `else` and `while` loops are supported:

```sf
if (score >= 100) {
    unlocked = true;
} elseif (score > 0) {
    unlocked = false;
} else {
    unlocked = false;
}

while (count < 5) {
    count = count + 1;
}
```

## Operators

| Category | Operators |
| :--- | :--- |
| Assignment | `=`, `:=` |
| Arithmetic | `+`, `-`, `*`, `/`, `^`, `%` |
| Comparison | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| Logical | `&&`, `\|\|`, `!`, `AND`, `OR`, `NOT` |

## Actions & Member Calls

Built-in engine actions can be called directly or as methods on an object:

```sf
vCar = CreateAIVehicle("Hero", "Enforcer", pos, 0);
cPlayer1.EnterVehicle(vCar);
```

Named parameters can also be passed with `:=` (or `=`):

```sf
Wait(Time := 1.0);
```
