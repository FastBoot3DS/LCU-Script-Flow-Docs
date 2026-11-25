# Characters (`Character`)

The `Character` type (ID `8`, internal type `ApiCharacter*`) represents an in-game character — either a player or an AI NPC.

Actions prefixed with `Character_` take a `Character` as their first parameter and can also be called as member methods (e.g. `cPlayer1.GetPosition()` or `Character_GetPosition(cPlayer1)`).

---

## Obtaining & Spawning Characters

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `GetCharacter()` | — | `Character` | Gets the current/default character |
| `Character()` | `Text` | `Character` | Looks up a character by name |
| `Character()` | `Text`, `WorldLevel` | `Character` | Looks up a character by name in a specific `WorldLevel` |
| `CreateAICharacter()` | `Hash`, `Hash`, `Position`, `Number` | `Character` | Spawns an AI character at a position and rotation |
| `NearestPlayer()` | `Position` | `Character` | Returns the closest player `Character` to a position |
| `GetPartyMember()` | `Number` | `Character` | Returns a party member by index |
| `Vehicle_GetDriver()` | `Vehicle` | `Character` | Returns the current driver of a `Vehicle` |
| `Vehicle_GetOccupant()` | `Vehicle`, `Hash` | `Character` | Returns the occupant in a specific seat hash |

```sf
Global Character cPlayer1;
Character npc;
Position spawnPos(0, 0, 0);

npc = CreateAICharacter(#Cop, #Default, spawnPos, 0);
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

---

## Vehicles

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `Character_EnterVehicle()` | `Character`, `Vehicle`, `Hash` | — | Makes the character enter a `Vehicle` (seat hash) |
| `Character_ExitVehicle()` | `Character`, `Position`, `Number`, `Number` | — | Makes the character exit their current vehicle |
| `Character_SetVehicle()` | `Character`, `Vehicle`, `Hash` | — | Places the character directly into a `Vehicle` |
| `Character_GetVehicle()` | `Character` | `Vehicle` | Returns the `Vehicle` the character is currently in |
| `Character_ClearVehicle()` | `Character` | — | Clears the character's vehicle association |
| `Character_DriveTo()` | `Character`, `Locator`, `Number`, `Character`, `Position`, `Number`, `Number`, `#Flags` | — | Drives a vehicle toward a destination |
| `Character_SetDriveSpeed()` | `Character`, `Number` | — | Sets AI driving speed |
| `Character_SetDriveToBoost()` | `Character`, `Number` | — | Sets AI driving boost |
| `Character_SetAvoidVehicle()` | `Character`, `Bool` | — | Toggles vehicle avoidance |

---

## Health, Combat & AI

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `GetHealth()` | `Character` | `Number` | Returns current health |
| `SetHealth()` | `Character`, `Hash`, `Number` | — | Sets health |
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

---

## Player, Disguises & Scripts

| Action | Inputs | Output | Description |
| :--- | :--- | :--- | :--- |
| `IsPlayer()` | `Character` | `Bool` | Returns `true` if this character is a player |
| `AllowCharacterSwap()` | `Bool`, `Character` | — | Enables/disables character swapping |
| `AllowDetectiveMode()` | `Character`, `Bool` | — | Enables/disables detective scan mode |
| `PlayerSetCharacter()` | `Number`, `Text` | — | Sets a player slot's character by name |
| `AwardCharacter()` | `Text` | — | Unlocks a character |
| `LoadCharacter()` | `Text` | — | Loads character resources |
| `CharacterAvailable()` | `Text` | `Bool` | Checks if a character is available |
| `SetScript()` | `Character`, `Text` | — | Attaches a script to the character |
| `Character_Release()` | `Character`, `Text` | — | Releases a character resource |
