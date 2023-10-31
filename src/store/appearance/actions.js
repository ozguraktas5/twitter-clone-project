import store from "~/store";
import {_setModal, _removeModal} from "~/store/modal";
import { _setBackgroundColor, _setColor, _setFontSize } from ".";

export const setBackgroundColor = data => store.dispatch(_setBackgroundColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))