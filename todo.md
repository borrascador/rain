# todo

## bugs

* fix crash when camera moves away from players

## features

* add Nathan's music to the game
* add foraging related items

* Degrees of impassability for terrain
  * vegetation density 0-100
  * higher density means lower sight and slower movement speed
  * good for use as a fortress or a trap
  * higer density vegetation can be hacked with a machete or burned
  * trails and rivers will be heavily trafficked because surrounding areas could be swampy or overgrown with heavy vegetation

* The Map
  * Allow parties to trade map info with other parties on a supertile-for-barter
  * The entire supertile needs to be explored to sell it
  * Only the basic map info i.e. water, trees, trails, bridges, and elevation, are included in the sale; no other metadata including items, players, landmarks, etc.
  * Con: could hinder discoverability for many types of players

* Alternative proposal: drive actions through equipping many different items
  * Similar to Minecraft, would require item hotkeys
  * Use items to perform majority of actions, e.g. attacking, eating, foraging, etc.
  * Use a context menu or in-game storyline for remaining subset of interactions
  * [Not implemented]: Resulting control scheme could be left click to walk, right-click to use held item, whether that is to attack with it, consume it, or use it to interact with the environment.
  * Foraging example
    * You need a basket to forage

* Attacking Rules
  * Each attack will be performed in one of eight directions.
  * Each weapon's attack has a different shape defined in tiles.
  * Attack effects on a tile can include more than just damage, including:
    * Pushing in any direction (4 or 8?) (Into the Breach)
    * Starting or putting out a fire
    * Poison effects
  * Ranged attacks also receive a direction parameter.
  * Animals can have attacks defined using the same weapon format, with lots of different unique effects.

* Attacking Ideas
  * Make a `weapons` folder. Find a balance between defining weapon behavior in code and in objects. Preference is toward objects. These can be detailed since the same objects can be used to populate server and client instances on startup.
  * Each ranged weapon has its own effective range after which the projectile falls to the ground or disappears. This will also be defined in the `weapons` folder.

* Random stupid thoughts
  * Do not place a period where God has placed a comma. But where God has placed a period, begins a paragraph.
