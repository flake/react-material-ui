// https://github.com/meteor/react-packages/issues/83
global.React = React;

injectTapEventPlugin = require('react-tap-event-plugin');
mui = require('material-ui');

mui.Libs = {};
MUI.Libs.Menu = require('material-ui/lib/menus/menu');
MUI.Libs.MenuItem = require('material-ui/lib/menus/menu-item');
MUI.Libs.MenuDivider = require('material-ui/lib/menus/menu-divider');

MUI.Libs.SvgIcons = require('material-ui/lib/svg-icons');
