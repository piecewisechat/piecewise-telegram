# Telegram for Piecewise

This is an "officially-unofficial" addon for [Piecewise](https://piecewise.im/), a tool that allows you to build chat bots with blocks.

## Use it

First, you'll need to purchase Piecewise on [Steam](https://store.steampowered.com/app/1702210/Piecewise_build_chat_bots_with_blocks/) or [itch.io](https://piecewiselabs.itch.io/). Then you'll need to download the `aimer` branch by following the instructions [here](https://doc.piecewise.im/tutorials/aimer/).

If you purchase and install Piecewise through Steam, you can then install the Telegram for Piecewise addon through the Steam Workshop [here](https://steamcommunity.com/sharedfiles/filedetails/?id=2982485357). I upload releases there occasionally.

You can also download the `im.piecewise.telegram.js` file from the Releases and drop it in your `addons` folder, next to `Piecewise.exe`, `Piecewise.app`, or `piecewise`.

## Build it

Everything is built into one .js file using `webpack`. Clone the repository, `npm i`, and then `npx webpack build --mode production`. Then you'll have a nice `main.js` file to drop into your `addons` directory.

## Develop it

For general information about creating Piecewise addons, see [the documentation](https://doc.piecewise.im/tutorials/plugins/).

Similarly to building the package, you can run `webpack` with a `watch` parameter that will auto-rebuild the package when something changes. For example, you might run `webpack watch --mode development` and link the produced `dist/main.js` to your `addons` folder.

## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.