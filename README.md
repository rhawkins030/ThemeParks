# 🎢 ThemeParks
Unofficial API built on [Nitro](https://github.com/unjs/nitro) for accessing Theme Park data like Walt Disney World, Universal Orlando, Disneyland, SeaWorld, Busch Gardens, and more. It's better than your phone! (not really)

Most parks are secured or want to still be secured. These are not supplied with the code because I don't want to deal with Theme Park companies.

### Disclaimer
I don't recommend running the API, it's built for a one & done setup on a server. **I'm not gonna stop you, just not going to help you.**

## Objects
Each park has its own set of data schematics that make me want to rip my hair out, so I simplified each of them to a few types.

#### Park:
`/api/park/{park_id}`
| Data | Type | Example |
| --- | --- | --- |
| name | String | Universal Studios Florida |
| id | String | USF |
| Hours | ThemeParkHour[] | |

ThemeParkHour:
| Data | Type | Example |
| --- | --- | --- |
| date | String | 2024-09-26 |
| openTime | Number | 1727355600 |
| closeTime | Number | 1727355600 |
| earlyTime? | Number | 1727355600 |

#### Ride:
`/api/park/{park_id}/rides`
| Data | Type | Example |
| --- | --- | --- |
| id | String | uor.ioa.rides.pteranodon_flyers |
| name | String | Pteranodon Flyers™ |
| status | String | `CLOSED`, `OPEN`, `WEATHER_DELAY` |
| wait_time? | Number | 5 |

## Configuration

Theme Parks are special and each of them have their own way of configurating.
You can use both `.env` and `nitro.config.ts` to configure your park systems.

#### Enviromental Variables (.env):
Variables are the easiest way to make sure you don't mess with things you don't want to.
Enviromental variables require 1 structure. Example:
```
NITRO_UNIVERSALORLANDO_ASSET=https://example.com
```
- `NITRO_` is your prefix so then the server knows to load it.
- `UNIVERSALORLANDO` is your Theme Park, change the park to whatever park you need.
- `_ASSET` is your suffix, this can be urls, keys, passwords, etc.

Each park is specific so it's up to you to figure those out.

#### Nitro Configuration (nitro.config.ts):
The Nitro config has every single key used saved under its `runtimeConfig` value. You just have to fill it in one by one, which can take awhile.
