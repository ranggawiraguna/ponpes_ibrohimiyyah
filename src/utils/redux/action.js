import sidebarAction from './actions/sidebar';
import searchAction from './actions/search';
import accountAction from './actions/account';
import landingAction from './actions/landing';

// sidebar action
export const SET_MENU = sidebarAction.SET_MENU;
export const MENU_TOGGLE = sidebarAction.MENU_TOGGLE;
export const MENU_OPEN = sidebarAction.MENU_OPEN;

// account action
export const CREATE_SESSION = accountAction.CREATE_SESSION;
export const RESTORE_SESSION = accountAction.RESTORE_SESSION;
export const CLEAR_SESSION = accountAction.CLEAR_SESSION;

// search action
export const SET_ACTIVE = searchAction.SET_ACTIVE;
export const SET_VALUE = searchAction.SET_VALUE;

// landing action
export const TOGGLE_IMAGE_BACKDROP = landingAction.TOGGLE_IMAGE_BACKDROP;
