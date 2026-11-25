# Arrays (`Array`)

The `Array` type (ID `27`, internal class `SVarArray` / `ScriptArrayObject`) is a **typed, local dynamic array** in Script Flow.

> **Important:**
> - **Max 255 items** (`0`–`255`): the element count is stored in an 8-bit unsigned integer (`uint8_t`), so adding a 256th item wraps the count back to `0`.
> - **Null check via `Bool`:** Converting an `Array` to `Bool` (e.g. `if (myArray)`) checks whether the array object exists (non-null), **not** whether `Size() > 0`.
> - For a city/job-shared array that persists across scripts, see `CityArray` in [Variables & Scopes](../basics/variables.md#array-vs-cityarray).

---

## Creating an `Array`

Before adding elements, initialize an `Array` with `CreateArray`, passing the **element type name** as `Text` (case-insensitive):

```sf
Array nums;
nums = CreateArray("Number");

Array cars(CreateArray("Vehicle"));
```

If an unknown or invalid type name is passed to `CreateArray`, it returns a null `Array`.

---

## Actions & Methods

All `Array` operations can be called either as **global actions** (passing the `Array` as the first argument) or as **methods** on the variable (e.g. `arr.Add(...)`).

### Summary

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `CreateArray()` | `Text` | `Array` | Creates a new typed array for the given element type name |
| `CreateCopy()` | `Array` | `Array` | Creates a copy of an existing `Array` |
| `Array()` | `Number` | `Array` | Number-to-Array conversion (always returns a null `Array`) |
| `Add()` | `Array`, `Any` | — | Appends a value to the end of the array |
| `Get()` | `Array`, `Number` | `Any` | Returns the element at the given zero-based index |
| `Set()` | `Array`, `Number`, `Any` | — | Overwrites the element at the given zero-based index |
| `Remove()` | `Array`, `Number` | — | Removes the element at the given zero-based index |
| `Size()` | `Array` | `Number` | Returns the current number of elements |
| `Clear()` | `Array` | — | Removes all elements from the array |

---

## Signatures & Examples

### `CreateArray`
```sf
Array CreateArray(Text typeName);
```
Creates a new empty `Array` whose elements have the specified [Data Type](../basics/types.md).

```sf
Array positions(CreateArray("Position"));
```

### `CreateCopy`
```sf
Array CreateCopy(Array source);
Array source.CreateCopy();
```
Duplicates an existing `Array`.

```sf
Array copy(nums.CreateCopy());
```

### `Add`
```sf
Add(Array arr, Any value);
arr.Add(Any value);
```
Appends `value` (matching the array's element type) to the end of `arr`.

```sf
nums.Add(10);
Add(nums, 20);
```

### `Get`
```sf
Any Get(Array arr, Number index);
Any arr.Get(Number index);
```
Returns the element at `index`.

```sf
Number first(nums.Get(0));
```

### `Set`
```sf
Set(Array arr, Number index, Any value);
arr.Set(Number index, Any value);
```
Overwrites the element at `index` with `value`.

```sf
nums.Set(0, 99);
```

### `Remove`
```sf
Remove(Array arr, Number index);
arr.Remove(Number index);
```
Removes the element at `index`.

```sf
nums.Remove(0);
```

### `Size`
```sf
Number Size(Array arr);
Number arr.Size();
```
Returns the current number of elements in `arr`.

```sf
Number count(nums.Size());
```

### `Clear`
```sf
Clear(Array arr);
arr.Clear();
```
Removes all elements from `arr`.

```sf
nums.Clear();
```

---

## Full Example

```sf
Array scores(CreateArray("Number"));
Number i(0);
Number total(0);

State CountScores() {
    Actions {
        scores.Add(10);
        scores.Add(25);
        scores.Add(50);

        while (i < scores.Size()) {
            total = total + scores.Get(i);
            i = i + 1;
        }

        scores.Clear();
    }
}

CountScores();
```
