# Characters (`Character`)

The `Character` type (ID `8`, internal type `ApiCharacter*`) represents an in-game character — either a player or an AI NPC.

Actions prefixed with `Character_` take a `Character` as their first parameter and can also be called as member methods (e.g. `cPlayer1.GetPosition()` or `Character_GetPosition(cPlayer1)`).

> **Note:** Identifier parameters shown as `Text` below (such as character types, seat names, or abilities) are hashed internally as `Hash` values, so you can pass readable `"Strings"` directly or a `Hash` variable.

---

## Obtaining & Spawning Characters

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `GetCharacter()` | — | `Character` | Gets the current/default character |
| `Character()` | `Text` | `Character` | Looks up a character by name |
| `Character()` | `Text`, `WorldLevel` | `Character` | Looks up a character by name in a specific `WorldLevel` |
| `CreateAICharacter()` | `Text`, `Text`, `Position`, `Number` | `Character` | Spawns an AI character at a position and rotation |
| `NearestPlayer()` | `Position` | `Character` | Returns the closest player `Character` to a position |
| `GetPartyMember()` | `Number` | `Character` | Returns a party member by index |
| `Vehicle_GetDriver()` | `Vehicle` | `Character` | Returns the current driver of a `Vehicle` |
| `Vehicle_GetOccupant()` | `Vehicle`, `Text` | `Character` | Returns the occupant in a specific seat |

### `CreateAICharacter()`
```sf
Character CreateAICharacter(Text subType, Text charType, Position pos, Number rot);

// Example:
Character cFrank(CreateAICharacter("FrankHoney", "Special", pos, 0));
```
Spawns an AI character of `charType` / `subType` at `pos` facing `rot` (optional; defaults to `0`).

### `Vehicle_GetOccupant()`
```sf
Character Vehicle_GetOccupant(Vehicle v, Text seat);

// Example:
Character cPassenger(Vehicle_GetOccupant(vCar, "Passenger"));
```

---

## Position, Movement & Facing

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `Character_GetPosition()` | `Character` | `Position` | Returns the character's world `Position` |
| `Position()` | `Character` | `Position` | Converts a `Character` to its `Position` |
| `Character_GetDirection()` | `Character` | `Number` | Returns facing angle |
| `Character_GetSpeed()` | `Character` | `Number` | Returns current movement speed |
| `Character_Teleport()` | `Character`, `Position`, `Number` | — | Teleports character to a `Position` and angle |
| `Character_MoveTo()` | `Character`, `Any`, `Number`, `#Flags` | — | Moves character toward a target (`Position` / `Locator`) |
| `Character_MoveToSetSpeed()` | `Character`, `Number`, `#Flags` | — | Sets movement speed for `MoveTo` |
| `Character_Stop()` | `Character` | — | Stops current movement |
| `Character_Jump()` | `Character` | — | Makes the character jump |
| `Character_FaceLocator()` | `Character`, `Locator` | — | Turns character to face a `Locator` |
| `Character_FaceCharacter()` | `Character`, `Character` | — | Turns character to face another `Character` |
| `FaceCamera()` | `Character` | — | Turns character to face the camera |
| `ResetToOrigin()` | `Character` | — | Resets character to its origin |
| `DistanceTo()` | `Character`, `Position` | `Number` | 3D distance to a `Position` |
| `DistanceToXZ()` | `Character`, `Position` | `Number` | Horizontal (XZ) distance to a `Position` |
| `InArea()` | `Character`, `Area` | `Bool` | Returns `true` if inside the given `Area` |
| `OnScreen()` | `Character` | `Bool` | Returns `true` if currently visible on screen |
| `Character_SetCanRamp()` | `Character`, `Bool` | — | Toggles whether the character can use ramps |
| `Character_SetSatNavDestination()` | `Character`, `Any` | — | Sets the character's satnav destination |
| `Character_SetNaviSatNavDestination()` | `Character`, `Any`, `NaviMap`, `#Flags` | — | Sets satnav destination using a `NaviMap` and flags |
| `Character_SetSatNavDestinationFlags()` | `#Flags` | — | Sets satnav destination flags |
| `CharacterAction_ConstrainSkydiveToSpline()` | `Character`, `Text`, `Number` | — | Constrains skydiving to a named spline |

### `Character_GetPosition()`
```sf
Position Character_GetPosition(Character c);
Position c.GetPosition();

// Example:
Position pos(cPlayer1.GetPosition());
```

### `Character_Teleport()`
```sf
Character_Teleport(Character c, Position pos, Number rot);
c.Teleport(Position pos, Number rot);

// Example:
cPlayer1.Teleport(pos, 90);
```

### `Character_MoveTo()`
```sf
Character_MoveTo(Character c, Any target, Number speed, #Flags flags);
c.MoveTo(Any target, Number speed, #Flags flags);

// Example:
npc.MoveTo(pos, 5, #None);
```
`target` can be a `Position` or `Locator`.

---

## Vehicles

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `Character_EnterVehicle()` | `Character`, `Vehicle`, `Text` | — | Makes the character enter a `Vehicle` (seat name) |
| `Character_ExitVehicle()` | `Character`, `Position`, `Number`, `Number` | — | Makes the character exit their current vehicle |
| `Character_SetVehicle()` | `Character`, `Vehicle`, `Text` | — | Places the character directly into a `Vehicle` |
| `Character_GetVehicle()` | `Character` | `Vehicle` | Returns the `Vehicle` the character is currently in |
| `Character_ClearVehicle()` | `Character` | — | Clears the character's vehicle association |
| `Character_DriveTo()` | `Character`, `Locator`, `Number`, `Character`, `Position`, `Number`, `Number`, `#Flags` | — | Drives a vehicle toward a destination |
| `Character_SetDriveSpeed()` | `Character`, `Number` | — | Sets AI driving speed |
| `Character_SetDriveToBoost()` | `Character`, `Number` | — | Sets AI driving boost |
| `Character_SetAvoidVehicle()` | `Character`, `Bool` | — | Toggles vehicle avoidance |
| `Character_AddDriveRubberBand()` | `Character`, `Character`, `Number`, `Number` | — | Adds driving rubber-banding relative to a target `Character` |
| `Character_SetWaypointDriveSpeed()` | `Character`, `Locator`, `Number` | — | Sets driving speed at a waypoint `Locator` |
| `Character_MakeChaseCamFollow()` | `Character`, `Vehicle` | — | Makes the chase camera follow a `Vehicle` |

### `Character_EnterVehicle()`
```sf
Character_EnterVehicle(Character c, Vehicle v, Text seat);
c.EnterVehicle(Vehicle v, Text seat);

// Example:
cPlayer1.EnterVehicle(vCar, "Driver");
```

### `Character_ExitVehicle()`
```sf
Character_ExitVehicle(Character c, Position pos, Number rot, Number flags);
c.ExitVehicle(Position pos, Number rot, Number flags);

// Example:
cPlayer1.ExitVehicle(pos, 0, 0);
```

### `Character_DriveTo()`
```sf
Character_DriveTo(Character c, Locator loc, Number speed, Character target, Position pos, Number radius, Number mode, #Flags flags);
c.DriveTo(Locator loc, Number speed, Character target, Position pos, Number radius, Number mode, #Flags flags);

// Example:
npc.DriveTo(locDest, 20, cPlayer1, pos, 5, 0, #None);
```

---

## Health, Combat & AI

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `GetHealth()` | `Character` | `Number` | Returns current health |
| `SetHealth()` | `Character`, `Text`, `Number` | — | Sets health |
| `Kill()` | `Character` | — | Kills the character |
| `BeenKilled()` | `Character` | `Bool` | Returns `true` if the character has been killed |
| `SetInvulnerable()` | `Character`, `Bool`, `#Flags` | — | Toggles invulnerability |
| `SetTargetable()` | `Character`, `Bool` | — | Toggles whether the character can be targeted |
| `Character_Attack()` | `Character`, `Character` | — | Orders character to attack another `Character` |
| `Character_Pursue()` | `Character`, `Character`, `Number`, `#Flags` | — | Orders character to pursue a target |
| `Character_FollowCharacter()` | `Character`, `Character`, `Number`, `Number`, `#Flags` | — | Orders character to follow another `Character` |
| `Character_Flee()` | `Character`, `Character`, `Number`, `#Flags` | — | Makes character flee from another `Character` |
| `Character_FleeTo()` | `Character`, `Character`, `Any`, `Number`, `#Flags` | — | Makes character flee toward a target |
| `Character_FleeInArea()` | `Character`, `Character`, `Any`, `Number`, `Number`, `#Flags` | — | Makes character flee within an area |
| `Character_SetArrestable()` | `Character`, `Bool` | — | Toggles whether the character can be arrested |
| `SetArrestTime()` | `Character`, `Number` | — | Sets arrest duration |
| `ResetArrestTime()` | `Character` | — | Resets arrest timer |
| `SetRexStunned()` | `Character` | — | Puts character in stunned state |
| `Character_SetAiOverride()` | `Character`, `Bool` | — | Toggles AI override |
| `Character_TakeOver()` | `Character`, `Character` | — | Takes control of another `Character` |
| `Character_ReleaseTakeOver()` | `Character`, `Position`, `Number`, `Number` | — | Releases a taken-over character at a `Position` |

### `SetHealth()`
```sf
SetHealth(Character c, Text mode, Number health);

// Example:
SetHealth(cPlayer1, "Set", 4);
```

### `Character_Pursue()` / `Character_FollowCharacter()`
```sf
Character_Pursue(Character c, Character target, Number speed, #Flags flags);
c.Pursue(Character target, Number speed, #Flags flags);

Character_FollowCharacter(Character c, Character target, Number minDist, Number maxDist, #Flags flags);
c.FollowCharacter(Character target, Number minDist, Number maxDist, #Flags flags);

// Example:
npc.FollowCharacter(cPlayer1, 2, 5, #None);
```

---

## State, Flags & Appearance

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `Character_Activate()` | `Character` | — | Activates the character |
| `Character_Deactivate()` | `Character` | — | Deactivates the character |
| `Character_IsOn()` | `Character` | `Bool` | Returns `true` if the character is active |
| `Character_FadeIn()` | `Character`, `Number` | — | Fades character in over duration |
| `Character_FadeOut()` | `Character`, `Number` | — | Fades character out over duration |
| `Character_LockInPlace()` | `Character`, `Bool`, `#Flags` | — | Locks/unlocks character movement |
| `SetNoCollision()` | `Character`, `Bool` | — | Disables/enables collision |
| `SetPushable()` | `Character`, `Bool` | — | Toggles whether the character can be pushed |
| `SetAvoidance()` | `Character`, `Bool` | — | Toggles avoidance |
| `Character_AllowParkour()` | `Character`, `Bool` | — | Toggles parkour ability |
| `Character_DeployParachute()` | `Character` | — | Deploys parachute |
| `Character_EndSkydive()` | `Character` | — | Ends skydiving state |
| `Character_IsSkydiving()` | `Character` | `Bool` | Returns `true` if skydiving |
| `Character_GetClass()` | `Character` | `Text` | Returns the character's class name |
| `Character_GetModelName()` | `Character` | `Text` | Returns the character's model name |
| `Character_SetWantedRating()` | `Character`, `Number` | — | Sets wanted rating |
| `Character_SetTaggable()` | `Character`, `Bool` | — | Toggles whether the character can be tagged |
| `Character_CutDownCharacter()` | `Character`, `Bool` | — | Toggles cut-down character mode |
| `Character_ClearContext()` | `Character` | — | Clears the character's current context |
| `Character_SetPaintColour()` | `Character`, `Text` | — | Sets the character's paint color |
| `Character_GetItemOut()` | `Character`, `Text` | — | Equips / pulls out a named item |
| `Character_PutAwayCurrentItem()` | `Character` | — | Puts away the currently held item |
| `Character_OverrideAnimation()` | `Character`, `Text`, `Text` | — | Overrides a character animation |
| `Character_PlayContextAnimation()` | `Character`, `Text`, `Number` | `Number` | Plays a context animation |
| `Character_SetAlternateChute()` | `Character`, `Bool` | — | Toggles alternate parachute |
| `Character_StartSkydiveMidfall()` | `Character` | — | Starts skydiving mid-fall |
| `Character_IsOnCoaster()` | `Character` | `Bool` | Returns `true` if on a coaster |

### `Character_LockInPlace()`
```sf
Character_LockInPlace(Character c, Bool lock, #Flags flags);
c.LockInPlace(Bool lock, #Flags flags);

// Example:
cPlayer1.LockInPlace(true, #None);
```

---

## Player, Disguises & Scripts

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `IsPlayer()` | `Character` | `Bool` | Returns `true` if this character is a player |
| `Character_HasClassAbilities()` | `Character`, `Text` | `Bool` | Checks if the character has a class ability |
| `AllowCharacterSwap()` | `Bool`, `Character` | — | Enables/disables character swapping |
| `AllowDetectiveMode()` | `Character`, `Bool` | — | Enables/disables detective scan mode |
| `PlayerSetCharacter()` | `Number`, `Text` | — | Sets a player slot's character by name |
| `AwardCharacter()` | `Text` | — | Unlocks a character |
| `LoadCharacter()` | `Text` | — | Loads character resources |
| `CharacterAvailable()` | `Text` | `Bool` | Checks if a character is available |
| `SetScript()` | `Character`, `Text` | — | Attaches a script to the character |
| `Character_Release()` | `Character`, `Text` | — | Releases a character resource |

### `PlayerSetCharacter()` / `SetScript()`
```sf
PlayerSetCharacter(Number playerIndex, Text charName);
SetScript(Character c, Text scriptName);

// Example:
PlayerSetCharacter(0, "ChaseMcCain");
SetScript(npc, "MyNpcScript");
```
