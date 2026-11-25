# Variables & Scopes

Every variable in Script Flow (`.sf`) has a fixed [Data Type](types.md) and an optional storage modifier.

---

## Declaration & Initialization

You cannot assign with `=` on the same line as a declaration. Either declare the variable first and assign it later, or initialize it in the declaration using parentheses `(...)`:

```sf
// Declare, then assign later
Number count;
count = 0;

// Initialize at declaration
Number score(100);
Position pos(cPlayer1.GetPosition());
```

---

## Storage Modifiers

| Modifier | Scope & Behavior |
| :--- | :--- |
| *(none)* | Local to the current `State`, `Function`, or script block |
| `Global` | Persists across states and script scopes |
| `Extern` | Injected from job or caller parameters |
| `Debug` | Debug-only variable |

```sf
Global Character cPlayer1;
Extern Number difficulty;
Debug Bool showOverlay(false);
```

---

## `Array` vs. `CityArray`

Script Flow provides two container types:

- **`Array`** — Typed dynamic array local to a script. **Max 255 items** (`0`–`255`; adding a 256th item wraps the `uint8_t` count back to `0`).
- **`CityArray`** — City / job-shared array accessed through `CityArray_*` engine actions:

| Action | Inputs | Output | Purpose |
| :--- | :--- | :--- | :--- |
| `CityArray_Create()` | `Text` | `CityArray` | Create or look up a named city array |
| `CityArray_Add()` | `CityArray`, `Any` | — | Append an item |
| `CityArray_Get()` | `CityArray`, `Number` | `Any` | Read item at index |
| `CityArray_Set()` | `CityArray`, `Number`, `Any` | — | Overwrite item at index |
| `CityArray_Size()` | `CityArray` | `Number` | Get current item count |
| `CityArray_Remove()` | `CityArray`, `Number` | — | Remove item at index |
| `CityArray_Clear()` | `CityArray` | — | Remove all items |

```sf
CityArray myList;
myList = CityArray_Create("MyList");
CityArray_Add(myList, "ItemA");
```

---

## `Hash` & `#Flag` Literals

`Hash` values are 32-bit FNV-1 hashed identifiers. You can also pass `#Identifier` literals (such as `#Flag` options) directly to actions that accept hashes or flags.
