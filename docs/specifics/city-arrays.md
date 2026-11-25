# CityArrays (`CityArray`)

The `CityArray` type (ID `39`, internal class `SVarCityArray`) is a **city / job-shared dynamic array** in Script Flow. Unlike a local [Array](arrays.md), a `CityArray` is looked up by name and can be shared across scripts and jobs.

---

## Creating a `CityArray`

Use `CityArray_Create()` with a `Text` name to create or retrieve a named city array:

```sf
CityArray waypoints;
waypoints = CityArray_Create("RaceWaypoints");
```

---

## Actions

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `CityArray_Create()` | `Text` | `CityArray` | Creates or looks up a named city array |
| `CityArray_CreateCopy()` | `CityArray` | `CityArray` | Creates a copy of an existing `CityArray` |
| `CityArray()` | `Number` | `CityArray` | Number-to-CityArray conversion |
| `CityArray_Add()` | `CityArray`, `Any` | — | Appends a value to the end of the array |
| `CityArray_Get()` | `CityArray`, `Number` | `Any` | Returns the element at the given zero-based index |
| `CityArray_Set()` | `CityArray`, `Number`, `Any` | — | Overwrites the element at the given zero-based index |
| `CityArray_Remove()` | `CityArray`, `Number` | — | Removes the element at the given zero-based index |
| `CityArray_Size()` | `CityArray` | `Number` | Returns the current number of elements |
| `CityArray_Clear()` | `CityArray` | — | Removes all elements from the array |

---

## Signatures & Examples

### `CityArray_Create()`
```sf
CityArray CityArray_Create(Text name);
```
Creates or retrieves the named `CityArray`.

```sf
CityArray targets(CityArray_Create("MissionTargets"));
```

### `CityArray_CreateCopy()`
```sf
CityArray CityArray_CreateCopy(CityArray source);
```
Duplicates an existing `CityArray`.

### `CityArray_Add()`
```sf
CityArray_Add(CityArray arr, Any value);
```
Appends `value` to `arr`.

```sf
CityArray_Add(targets, "TargetA");
```

### `CityArray_Get()`
```sf
Any CityArray_Get(CityArray arr, Number index);
```
Returns the element at `index`.

### `CityArray_Set()`
```sf
CityArray_Set(CityArray arr, Number index, Any value);
```
Overwrites the element at `index` with `value`.

### `CityArray_Remove()`
```sf
CityArray_Remove(CityArray arr, Number index);
```
Removes the element at `index`.

### `CityArray_Size()`
```sf
Number CityArray_Size(CityArray arr);
```
Returns the number of elements currently in `arr`.

### `CityArray_Clear()`
```sf
CityArray_Clear(CityArray arr);
```
Removes all elements from `arr`.

---

## Full Example

```sf
CityArray items;
Number i(0);

State PopulateList() {
    Actions {
        items = CityArray_Create("SharedItems");
        CityArray_Clear(items);

        CityArray_Add(items, 100);
        CityArray_Add(items, 200);

        while (i < CityArray_Size(items)) {
            i = i + 1;
        }
    }
}

PopulateList();
```
