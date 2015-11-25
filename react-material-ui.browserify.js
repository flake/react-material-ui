// https://github.com/meteor/react-packages/issues/83
global.React = React;

injectTapEventPlugin = require('react-tap-event-plugin');
mui = require('material-ui');

mui.Libs = {};
mui.Libs.Menu = require('material-ui/lib/menus/menu');
mui.Libs.MenuItem = require('material-ui/lib/menus/menu-item');
mui.Libs.MenuDivider = require('material-ui/lib/menus/menu-divider');

mui.Libs.SvgIcons = require('material-ui/lib/svg-icons');
