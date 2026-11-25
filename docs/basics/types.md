# Types

## Core Primitives & Containers

| Type | ID | Internal Class | Description |
| :--- | :---: | :--- | :--- |
| `Number` | `2` | `SVarFloat` | Floating-point / integer number |
| `Bool` | `3` | `SVarBool` | `true` (1) or `false` (0) |
| `Timer` | `4` | `SVarTimer` | Countdown / elapsed timer |
| `Text` | `5` | `SVarText` | String literal / localization key |
| `Hash` | `6` | `SVarHash` | 32-bit FNV-1 hashed identifier (`Text` strings convert to `Hash` automatically) |
| `Position` | `12` | `SVarPos` | 3D world vector `VuVec: X, Y, Z` |
| `Script` | `14` | `SVarScript` | Handle to a spawned `ScriptContext` |
| `Array` | `27` | `SVarArray` | Typed dynamic array, `Max 255 items` (0–255 — the 256th item wraps uint8_t back to 0) |
| `CityArray` | `39` | `SVarCityArray` | City / job-shared array |

> **Note:** 
> (Internal/special SCmdParams IDs: 0 = Void, 1 = Any / polymorphic target, 7 = Wildcard / variadic #Flag list.)

## Entities

| Type | ID | Internal Type | Description |
| :--- | :---: | :--- | :--- |
| `Character` | `8` | `ApiCharacter*` | In game character like the player itself |
| `Vehicle` | `9` | `ApiVehicle*` | In game vehicle |
| `Gizmo` | `31` | `Gizmo*` | LEGO items / objects |
| `HotSpot` | `34` | `HotSpot*` | Interactive world trigger / prompt point |
| `Gadget` | `26` | `MechGadgetBaseInstance*` | Simple LEGO items / objects |

## World & Navigation

| Type | ID | Internal Type | Description |
| :--- | :---: | :--- | :--- |
| `Locator` | `10` | `AIConvexLocator*` | Named 3D spawn/waypoint marker(s) in a level |
| `LocatorSet` | `11` | `AIConvexLocatorSet*` | A set of `Locator` |
| `Area` | `13` | `AIConvexArea*` | Convex trigger / AI zone |
| `WorldLevel` | `15` | `StreamingLevel*` | Current Level Context |
| `WorldArea` | `33` | `AREADATA*` | Named city district / world region |
| `GridlockMap` | `28` | `GLMapSVar` | Spline maps for AI traffic, etc |
| `GridlockToggleLayer` | `29` | `GLToggleLayerSVar` | Layer for a `GridlockMap` |
| `NaviMap` | `30` | `NvMapSVar` | Navigation Map for stuff like satnav |

## Missions & AI

| Type | ID | Internal Type | Description |
| :--- | :---: | :--- | :--- |
| `Job` | `36` | `SVarJob` | Handle to a job node |
| `AttackManager` | `37` | `WeakPtr<cAttackManager>` | Combat / wave coordinator |
| `CityObjective` | `40` | `SVarCityObjective` | Mission Objective |
| `Message` | `32` | `LEGOMessage*` | Engine message / event object |
| `AddOnHandle` | `24` | `AddOnHandle` | Handle to an `AddOn` component on a script / level |

## Audio

| Type | ID | Internal Type | Description |
| :--- | :---: | :--- | :--- |
| `Sound` | `16` | `SoundPlaceable*` | Sound Object |
| `SoundListener` | `17` | `NuSoundListener` | 3D audio listener |
| `Speech` | `18` | `SVarSpeech` | Dialogue / Conversations | 
| `SpeechPack` | `19` | `SVarSpeechPack` | Dialogue `.PAK` files containing multiple sound file entries | 
| `SpeechStream` | `20` | `NuSmartPtr<Track>` | Streamed dialogue/audio track created from a sound file path |
| `TrackBank` | `22` | `NuSmartPtr<TrackBank>` | Music track bank that groups music `Track`s by layer/context |
| `Track` | `23` | `NuSmartPtr<Track>` | Individual music/audio track |

## Storage Modifiers

| Type | Description |
| :--- | :--- |
| `Global` | Persists across states / scopes | 
| `Extern` | Injected from job / caller parameters | 
| `Debug` | For debug-only variables |


